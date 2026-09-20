import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface NativeAddon {
  nativePing(): string;
  nativeStripAnsi(text: string): string;
  nativeDeduplicateLines(text: string, threshold?: number): { text: string; collapsed: number };
  nativeGroupSimilarLines(text: string, threshold?: number): { text: string; grouped: number };
  nativeAhoCorasickReplace(
    text: string,
    patterns: string[],
    replacements: string[],
    enforceWordBoundaries: boolean
  ): string;
  nativeCleanupArtifacts(text: string): string;
}

let nativeModule: NativeAddon | null = null;
let nativeAvailable = false;
let forceDisabledForTest: boolean | null = null;

function tryLoadNativeAddon(): void {
  if (process.env.OMNIROUTE_DISABLE_NATIVE_COMPRESSION === "1") {
    nativeAvailable = false;
    nativeModule = null;
    return;
  }

  try {
    const require = createRequire(import.meta.url);
    const possiblePaths = [
      path.join(__dirname, "omniroute_compression_native.node"),
      path.join(__dirname, "target", "release", "libomniroute_compression_native.so"),
      path.join(__dirname, "target", "release", "libomniroute_compression_native.dylib"),
      path.join(__dirname, "target", "release", "omniroute_compression_native.dll"),
    ];

    for (const binaryPath of possiblePaths) {
      if (existsSync(binaryPath)) {
        try {
          const loaded = require(binaryPath) as NativeAddon;
          if (typeof loaded?.nativePing === "function" && loaded.nativePing() === "pong") {
            nativeModule = loaded;
            nativeAvailable = true;
            break;
          }
        } catch {
          // Ignore load failure on invalid arch/platform and keep fallback
        }
      }
    }
  } catch {
    nativeAvailable = false;
    nativeModule = null;
  }
}

tryLoadNativeAddon();

/**
 * Allows test suites to toggle between native and fallback paths dynamically.
 */
export function setNativeCompressionEnabledForTest(enabled: boolean | null): void {
  forceDisabledForTest = enabled === false;
  if (enabled === true) {
    forceDisabledForTest = false;
    tryLoadNativeAddon();
  }
}

export function isNativeCompressionAvailable(): boolean {
  if (forceDisabledForTest) return false;
  if (process.env.OMNIROUTE_DISABLE_NATIVE_COMPRESSION === "1") return false;
  return nativeAvailable && nativeModule !== null;
}

export function getNativeCompressionAddon(): NativeAddon | null {
  if (!isNativeCompressionAvailable()) return null;
  return nativeModule;
}

// ──────────────── 1. Strip ANSI Codes ────────────────

export function stripAnsiFast(text: string): string {
  const addon = getNativeCompressionAddon();
  if (addon) {
    return addon.nativeStripAnsi(text);
  }
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

// ──────────────── 2. Deduplicate Repeated Lines ────────────────

export function deduplicateRepeatedLinesFast(
  text: string,
  options: { threshold?: number } = {}
): { text: string; collapsed: number } {
  const addon = getNativeCompressionAddon();
  if (addon) {
    return addon.nativeDeduplicateLines(text, options.threshold);
  }

  // Complete TypeScript Fallback
  const threshold = Math.max(2, Math.floor(options.threshold ?? 3));
  const lines = text.split(/\r?\n/);
  const output: string[] = [];
  let collapsed = 0;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    let runLength = 1;
    while (index + runLength < lines.length && lines[index + runLength] === line) {
      runLength++;
    }

    if (line.trim() && runLength >= threshold) {
      output.push(line);
      output.push(`[line repeated ${runLength - 1}x]`);
      output.push(`[rtk:dropped ${runLength - 1} repeated lines]`);
      collapsed += runLength - 1;
      index += runLength - 1;
      continue;
    }

    output.push(line);
  }

  return { text: output.join("\n"), collapsed };
}

// ──────────────── 3. Group Similar Lines ────────────────

function normalizeLineFallback(line: string): string {
  let s = line;
  s = s.replace(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?/g, "<N>");
  s = s.replace(/\[\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\]/g, "[<N>]");
  s = s.replace(/\b[0-9a-fA-F]{6,40}\b/g, "<N>");
  s = s.replace(/\bv?\d+\.\d+\.\d+(?:\.\d+)*\b/g, "<N>");
  s = s.replace(/\b\d+\b/g, "<N>");
  s = s.replace(/\s+/g, " ");
  return s.trim();
}

export function groupSimilarLinesFast(
  text: string,
  options: { threshold?: number } = {}
): { text: string; grouped: number } {
  const addon = getNativeCompressionAddon();
  if (addon) {
    return addon.nativeGroupSimilarLines(text, options.threshold);
  }

  // Complete TypeScript Fallback matching RTK R5 grouper.ts
  const threshold = Math.max(2, Math.floor(options.threshold ?? 3));
  const lines = text.split(/\r?\n/);
  if (lines.length === 0 || (lines.length === 1 && lines[0] === "")) {
    return { text: "", grouped: 0 };
  }

  const output: string[] = [];
  let grouped = 0;

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    const normalised = normalizeLineFallback(line);

    let runLength = 1;
    if (normalised) {
      while (
        index + runLength < lines.length &&
        normalizeLineFallback(lines[index + runLength]) === normalised
      ) {
        runLength++;
      }
    }

    if (runLength >= threshold && normalised) {
      output.push(`${line} [rtk:grouped ×${runLength}]`);
      grouped += runLength - 1;
      index += runLength;
    } else {
      output.push(line);
      index++;
    }
  }

  return { text: output.join("\n"), grouped };
}

// ──────────────── 4. Multi-Pattern Keyword Replacement ────────────────

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function ahoCorasickReplaceFast(
  text: string,
  patterns: string[],
  replacements: string[],
  wordBoundaries = true
): string {
  const addon = getNativeCompressionAddon();
  if (addon) {
    return addon.nativeAhoCorasickReplace(text, patterns, replacements, wordBoundaries);
  }

  if (patterns.length === 0 || patterns.length !== replacements.length) {
    return text;
  }

  // High-performance single-pass regex fallback with dictionary map
  // Sort patterns by length descending so longer phrases match before shorter subphrases
  const indexed = patterns.map((p, i) => ({ pattern: p, replacement: replacements[i] }));
  indexed.sort((a, b) => b.pattern.length - a.pattern.length);

  const lookup = new Map<string, string>();
  for (const item of indexed) {
    lookup.set(item.pattern.toLowerCase(), item.replacement);
  }

  const patternGroup = indexed.map((item) => escapeRegExp(item.pattern)).join("|");
  const regex = wordBoundaries
    ? new RegExp(`\\b(?:${patternGroup})\\b`, "gi")
    : new RegExp(`(?:${patternGroup})`, "gi");

  return text.replace(regex, (matched) => {
    return lookup.get(matched.toLowerCase()) ?? "";
  });
}

// ──────────────── 5. Fast Cleanup Artifacts ────────────────

export function cleanupArtifactsFast(text: string): string {
  if (!text) return "";
  const addon = getNativeCompressionAddon();
  if (addon) {
    return addon.nativeCleanupArtifacts(text);
  }

  // Complete TypeScript Fallback
  return text
    .replace(/[ \t]{2,}/g, " ")
    .replace(/[ \t]+([,.;:!?])/g, "$1")
    .replace(/([.!?]){2,}/g, (m) => m[m.length - 1])
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "");
}
