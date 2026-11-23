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
  nativeCleanupArtifacts(text: string): string;
}

/** Paths of a built addon, relative to `open-sse/services/compression/native/`. */
const ADDON_REL_PATHS: string[][] = [
  ["omniroute_compression_native.node"],
  ["target", "release", "libomniroute_compression_native.so"],
  ["target", "release", "libomniroute_compression_native.dylib"],
  ["target", "release", "omniroute_compression_native.dll"],
];

/**
 * Candidate addon paths, in priority order:
 *  - module-relative — dev / source runs, where this file sits next to `native/`;
 *  - cwd-absolute — the standalone/Docker bundle, where this module is compiled
 *    into `.next/server/...` (so the module-relative path misses) but
 *    `assembleStandalone` copies the addon to
 *    `<standalone-root>/open-sse/services/compression/native/...` and the server
 *    runs with cwd = the standalone root. Same strategy as the tproxy addon
 *    loader (`src/mitm/tproxy/transparentSocket.ts`).
 */
export function nativeAddonCandidates(moduleDir: string, cwd: string): string[] {
  const cwdBase = path.join(cwd, "open-sse", "services", "compression", "native");
  return ADDON_REL_PATHS.flatMap((relative) => [
    path.join(moduleDir, ...relative),
    path.join(cwdBase, ...relative),
  ]);
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
    const possiblePaths = nativeAddonCandidates(__dirname, process.cwd());

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

// ──────────────── 3. Fast Cleanup Artifacts ────────────────

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
