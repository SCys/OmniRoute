/**
 * Benchmark: Pure TypeScript / V8 Baseline vs Rust Native Acceleration
 *
 * Compares latency and throughput across:
 * 1. ANSI stripping (10KB and 200KB log output)
 * 2. Line deduplication (1,000 lines and 10,000 lines)
 * 3. Log line similarity grouping (1,000 lines)
 * 4. Multi-pattern keyword replacement (Caveman style across 50KB prose)
 */
import { performance } from "node:perf_hooks";
import { getNativeCompressionAddon } from "../../open-sse/services/compression/native/index.ts";

function timeIt(fn: () => void, iterations: number): number {
  // Warmup
  for (let i = 0; i < Math.min(iterations, 5); i++) fn();
  const start = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (performance.now() - start) / iterations;
}

async function main() {
  const native = getNativeCompressionAddon();
  if (!native) {
    console.error("Native addon not available.");
    process.exit(1);
  }

  console.log("===============================================================");
  console.log(" OmniRoute Compression: Rust Native vs TypeScript Baseline");
  console.log("===============================================================\n");

  // ── Benchmark 1: ANSI Stripping ─────────────────────────────────────────
  console.log("## 1. ANSI Code Stripping");
  const ansiLine =
    "\u001b[31;1mERROR\u001b[0m [\u001b[34m2026-09-21\u001b[0m] \u001b[32mBuild step 12/40 completed with warning\u001b[0m\n";
  const smallAnsi = ansiLine.repeat(100); // ~10KB
  const largeAnsi = ansiLine.repeat(2000); // ~200KB

  const jsStripAnsi = (text: string) => text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");

  const jsSmallAnsiMs = timeIt(() => jsStripAnsi(smallAnsi), 100);
  const rustSmallAnsiMs = timeIt(() => native.nativeStripAnsi(smallAnsi), 100);
  const jsLargeAnsiMs = timeIt(() => jsStripAnsi(largeAnsi), 20);
  const rustLargeAnsiMs = timeIt(() => native.nativeStripAnsi(largeAnsi), 20);

  console.log(
    `- 10KB log:  JS = ${jsSmallAnsiMs.toFixed(3)}ms | Rust = ${rustSmallAnsiMs.toFixed(3)}ms  => ${(jsSmallAnsiMs / rustSmallAnsiMs).toFixed(1)}x speedup`
  );
  console.log(
    `- 200KB log: JS = ${jsLargeAnsiMs.toFixed(3)}ms | Rust = ${rustLargeAnsiMs.toFixed(3)}ms  => ${(jsLargeAnsiMs / rustLargeAnsiMs).toFixed(1)}x speedup\n`
  );

  // ── Benchmark 2: Line-level Deduplication ──────────────────────────────
  console.log("## 2. Line-Level Deduplication (RTK)");
  const dedupLines: string[] = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 20 === 0) {
      for (let r = 0; r < 10; r++)
        dedupLines.push("identical progress bar line [==========>        ] 50%");
    } else {
      dedupLines.push(`log message event ${i}`);
    }
  }
  const sample1kLines = dedupLines.join("\n");
  const sample10kLines = Array(10).fill(sample1kLines).join("\n");

  const jsDedup = (text: string, threshold = 3) => {
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
  };

  const jsDedup1kMs = timeIt(() => jsDedup(sample1kLines), 50);
  const rustDedup1kMs = timeIt(() => native.nativeDeduplicateLines(sample1kLines, 3), 50);
  const jsDedup10kMs = timeIt(() => jsDedup(sample10kLines), 10);
  const rustDedup10kMs = timeIt(() => native.nativeDeduplicateLines(sample10kLines, 3), 10);

  console.log(
    `- 1,000 lines:  JS = ${jsDedup1kMs.toFixed(3)}ms | Rust = ${rustDedup1kMs.toFixed(3)}ms  => ${(jsDedup1kMs / rustDedup1kMs).toFixed(1)}x speedup`
  );
  console.log(
    `- 10,000 lines: JS = ${jsDedup10kMs.toFixed(3)}ms | Rust = ${rustDedup10kMs.toFixed(3)}ms  => ${(jsDedup10kMs / rustDedup10kMs).toFixed(1)}x speedup\n`
  );

  // ── Benchmark 3: Multi-pattern Replacement (Caveman) ───────────────────
  console.log("## 3. Multi-Pattern Keyword Replacement (Caveman / Aho-Corasick)");
  const sampleProse = `
    I would like you to make sure to check the system configuration.
    Could you please explain why the service failed?
    It seems like there is a problem with the database connection.
    Basically, I am trying to resolve this error as well as update the schema.
    Furthermore, remember to keep in mind that this is important.
  `.repeat(100); // ~50KB

  const patterns = [
    "i would like you to",
    "make sure to",
    "could you please",
    "it seems like",
    "basically",
    "i am trying to",
    "as well as",
    "furthermore",
    "remember to",
    "keep in mind that",
  ];
  const replacements = [
    "",
    "ensure",
    "why",
    "it seems",
    "",
    "aiming to",
    "and",
    "also",
    "",
    "note",
  ];

  const jsMultiReplace = (text: string) => {
    let res = text;
    for (let i = 0; i < patterns.length; i++) {
      res = res.replace(new RegExp(`\\b${patterns[i]}\\b`, "gi"), replacements[i]);
    }
    return res;
  };

  const jsCavemanMs = timeIt(() => jsMultiReplace(sampleProse), 30);
  const rustCavemanMs = timeIt(
    () => native.nativeAhoCorasickReplace(sampleProse, patterns, replacements, true),
    30
  );

  console.log(
    `- 50KB text (10 rules): JS = ${jsCavemanMs.toFixed(3)}ms | Rust = ${rustCavemanMs.toFixed(3)}ms  => ${(jsCavemanMs / rustCavemanMs).toFixed(1)}x speedup\n`
  );
}

main().catch(console.error);
