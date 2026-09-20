#[macro_use]
extern crate napi_derive;

use aho_corasick::{AhoCorasick, MatchKind};
use once_cell::sync::Lazy;
use regex::Regex;

#[napi]
pub fn native_ping() -> String {
  "pong".to_string()
}

// ──────────────── 1. Fast ANSI Stripping ────────────────

/// Strip ANSI escape codes in a single pass without regex or intermediate allocations.
/// Matches `\x1b\[[0-?]*[ -/]*[@-~]`
#[napi]
pub fn native_strip_ansi(text: String) -> String {
  let bytes = text.as_bytes();
  let len = bytes.len();
  let mut out = Vec::with_capacity(len);
  let mut i = 0;

  while i < len {
    if bytes[i] == 0x1b && i + 1 < len && bytes[i + 1] == b'[' {
      // Start of ANSI sequence
      let mut j = i + 2;
      // 0-? is 0x30 to 0x3f
      while j < len && bytes[j] >= 0x30 && bytes[j] <= 0x3f {
        j += 1;
      }
      // space to / is 0x20 to 0x2f
      while j < len && bytes[j] >= 0x20 && bytes[j] <= 0x2f {
        j += 1;
      }
      // @ to ~ is 0x40 to 0x7e
      if j < len && bytes[j] >= 0x40 && bytes[j] <= 0x7e {
        // Full ANSI sequence matched: skip from i to j+1
        i = j + 1;
        continue;
      }
    }
    out.push(bytes[i]);
    i += 1;
  }

  // Safe because input was valid UTF-8 and we only stripped ASCII byte sequences
  unsafe { String::from_utf8_unchecked(out) }
}

// ──────────────── 2. Fast Line-Level Deduplication ────────────────

#[napi(object)]
pub struct NativeDeduplicateResult {
  pub text: String,
  pub collapsed: u32,
}

/// Deduplicate consecutive identical lines, identical semantics to TS deduplicateRepeatedLines
#[napi]
pub fn native_deduplicate_lines(text: String, threshold: Option<u32>) -> NativeDeduplicateResult {
  let th = threshold.unwrap_or(3).max(2) as usize;
  let lines: Vec<&str> = text.split('\n').collect();
  let num_lines = lines.len();
  let mut output = Vec::with_capacity(num_lines);
  let mut collapsed: u32 = 0;
  let mut index = 0;

  while index < num_lines {
    let raw_line = lines[index];
    // Handle potential trailing \r in line
    let line = if raw_line.ends_with('\r') {
      &raw_line[..raw_line.len() - 1]
    } else {
      raw_line
    };

    let mut run_length = 1;
    while index + run_length < num_lines {
      let next_raw = lines[index + run_length];
      let next_line = if next_raw.ends_with('\r') {
        &next_raw[..next_raw.len() - 1]
      } else {
        next_raw
      };
      if next_line == line {
        run_length += 1;
      } else {
        break;
      }
    }

    if !line.trim().is_empty() && run_length >= th {
      output.push(line.to_string());
      output.push(format!("[line repeated {}x]", run_length - 1));
      output.push(format!("[rtk:dropped {} repeated lines]", run_length - 1));
      collapsed += (run_length - 1) as u32;
      index += run_length;
      continue;
    }

    output.push(line.to_string());
    index += 1;
  }

  NativeDeduplicateResult {
    text: output.join("\n"),
    collapsed,
  }
}

// ──────────────── 3. Fast Line Grouping (RTK R5) ────────────────

static RE_ISO_TIMESTAMP: Lazy<Regex> = Lazy::new(|| {
  Regex::new(r"\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?").unwrap()
});
static RE_BRACKET_DATE: Lazy<Regex> =
  Lazy::new(|| Regex::new(r"\[\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\]").unwrap());
static RE_HEX: Lazy<Regex> = Lazy::new(|| Regex::new(r"\b[0-9a-fA-F]{6,40}\b").unwrap());
static RE_SEMVER: Lazy<Regex> =
  Lazy::new(|| Regex::new(r"\bv?\d+\.\d+\.\d+(?:\.\d+)*\b").unwrap());
static RE_INTEGERS: Lazy<Regex> = Lazy::new(|| Regex::new(r"\b\d+\b").unwrap());
static RE_WHITESPACE: Lazy<Regex> = Lazy::new(|| Regex::new(r"\s+").unwrap());

fn normalize_line_internal(line: &str) -> String {
  let s = RE_ISO_TIMESTAMP.replace_all(line, "<N>");
  let s = RE_BRACKET_DATE.replace_all(&s, "[<N>]");
  let s = RE_HEX.replace_all(&s, "<N>");
  let s = RE_SEMVER.replace_all(&s, "<N>");
  let s = RE_INTEGERS.replace_all(&s, "<N>");
  let s = RE_WHITESPACE.replace_all(&s, " ");
  s.trim().to_string()
}

#[napi(object)]
pub struct NativeGroupingResult {
  pub text: String,
  pub grouped: u32,
}

/// Collapses consecutive near-equivalent lines into `<line> [rtk:grouped ×N]`
#[napi]
pub fn native_group_similar_lines(text: String, threshold: Option<u32>) -> NativeGroupingResult {
  let th = threshold.unwrap_or(3).max(2) as usize;
  let lines: Vec<&str> = text.split('\n').collect();
  if lines.is_empty() {
    return NativeGroupingResult {
      text: String::new(),
      grouped: 0,
    };
  }

  // Pre-normalize lines in parallel or fast sequential
  let normalized: Vec<String> = lines.iter().map(|l| normalize_line_internal(l)).collect();
  let mut output = Vec::with_capacity(lines.len());
  let mut total_grouped: u32 = 0;
  let mut i = 0;

  while i < lines.len() {
    let norm = &normalized[i];
    let mut run_len = 1;

    if !norm.is_empty() {
      while i + run_len < lines.len() && &normalized[i + run_len] == norm {
        run_len += 1;
      }
    }

    if run_len >= th && !norm.is_empty() {
      output.push(format!("{} [rtk:grouped ×{}]", lines[i], run_len));
      total_grouped += (run_len - 1) as u32;
      i += run_len;
    } else {
      output.push(lines[i].to_string());
      i += 1;
    }
  }

  NativeGroupingResult {
    text: output.join("\n"),
    grouped: total_grouped,
  }
}

// ──────────────── 4. Aho-Corasick Multi-Pattern Replacement ────────────────

fn is_word_char(c: char) -> bool {
  c.is_alphanumeric() || c == '_'
}

/// Replace multiple patterns simultaneously using Aho-Corasick automaton.
/// Respects word boundaries if enforce_word_boundaries is true.
#[napi]
pub fn native_aho_corasick_replace(
  text: String,
  patterns: Vec<String>,
  replacements: Vec<String>,
  enforce_word_boundaries: bool,
) -> String {
  if patterns.is_empty() || patterns.len() != replacements.len() {
    return text;
  }

  let ac = match AhoCorasick::builder()
    .ascii_case_insensitive(true)
    .match_kind(MatchKind::LeftmostLongest)
    .build(&patterns)
  {
    Ok(ac) => ac,
    Err(_) => return text,
  };

  let mut result = String::with_capacity(text.len());
  let mut last_idx = 0;

  for mat in ac.find_iter(&text) {
    let start = mat.start();
    let end = mat.end();

    if enforce_word_boundaries {
      // Check left boundary
      if start > 0 {
        if let Some(prev_char) = text[..start].chars().last() {
          if is_word_char(prev_char) {
            continue;
          }
        }
      }
      // Check right boundary
      if end < text.len() {
        if let Some(next_char) = text[end..].chars().next() {
          if is_word_char(next_char) {
            continue;
          }
        }
      }
    }

    result.push_str(&text[last_idx..start]);
    result.push_str(&replacements[mat.pattern()]);
    last_idx = end;
  }

  result.push_str(&text[last_idx..]);
  result
}

// ──────────────── 5. Fast Cleanup Artifacts ────────────────

static RE_MULTI_SPACE: Lazy<Regex> = Lazy::new(|| Regex::new(r"[ \t]{2,}").unwrap());
static RE_SPACE_PUNCT: Lazy<Regex> = Lazy::new(|| Regex::new(r"[ \t]+([,.;:!?])").unwrap());
static RE_MULTI_PUNCT: Lazy<Regex> = Lazy::new(|| Regex::new(r"([.!?]){2,}").unwrap());
static RE_TRAILING_WS: Lazy<Regex> = Lazy::new(|| Regex::new(r"(?m)[ \t]+$").unwrap());
static RE_MULTI_NL: Lazy<Regex> = Lazy::new(|| Regex::new(r"\n{3,}").unwrap());

/// Cleans up whitespace and punctuation artifacts in compressed text.
#[napi]
pub fn native_cleanup_artifacts(text: String) -> String {
  if text.is_empty() {
    return text;
  }

  let s = RE_MULTI_SPACE.replace_all(&text, " ");
  let s = RE_SPACE_PUNCT.replace_all(&s, "$1");
  let s = RE_MULTI_PUNCT.replace_all(&s, |caps: &regex::Captures| {
    let full = &caps[0];
    full[full.len() - 1..].to_string()
  });
  let s = RE_TRAILING_WS.replace_all(&s, "");
  let s = RE_MULTI_NL.replace_all(&s, "\n\n");
  let trimmed_start = s.trim_start_matches('\n');
  trimmed_start.trim_end_matches('\n').to_string()
}
