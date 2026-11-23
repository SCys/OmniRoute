import { test, describe, beforeEach, afterEach } from "node:test";
import path from "node:path";
import assert from "node:assert/strict";
import {
  isNativeCompressionAvailable,
  stripAnsiFast,
  deduplicateRepeatedLinesFast,
  cleanupArtifactsFast,
  getNativeCompressionAddon,
  nativeAddonCandidates,
  setNativeCompressionEnabledForTest,
} from "../../open-sse/services/compression/native/index.ts";

describe("Native compression acceleration & complete dual-path fallback", () => {
  beforeEach(() => {
    setNativeCompressionEnabledForTest(null);
  });

  afterEach(() => {
    setNativeCompressionEnabledForTest(null);
  });

  test("native addon availability and environment killswitch", () => {
    // The addon is optional: it is absent on a clean checkout (only built with
    // `npm run build` on a machine that has cargo), and compression then falls back
    // to the TypeScript path. Assert the wiring, not the presence of the binary.
    const builtLocally = isNativeCompressionAvailable();
    if (builtLocally) {
      const addon = getNativeCompressionAddon();
      assert.ok(addon);
      assert.equal(addon?.nativePing(), "pong");
    } else {
      assert.equal(getNativeCompressionAddon(), null);
    }

    // Programmatic killswitch: unavailable while forced off.
    setNativeCompressionEnabledForTest(false);
    assert.equal(isNativeCompressionAvailable(), false);
    assert.equal(getNativeCompressionAddon(), null);

    // Re-enabling reloads the addon; the outcome matches the on-disk binary.
    setNativeCompressionEnabledForTest(true);
    assert.equal(isNativeCompressionAvailable(), builtLocally);
  });

  test("ANSI stripping: native and fallback yield identical results", () => {
    const input =
      "\u001b[31;1mERROR\u001b[0m [\u001b[34m2026-09-21\u001b[0m] \u001b[32mBuild finished\u001b[0m";

    setNativeCompressionEnabledForTest(true);
    const nativeResult = stripAnsiFast(input);

    setNativeCompressionEnabledForTest(false);
    const fallbackResult = stripAnsiFast(input);

    assert.equal(nativeResult, "ERROR [2026-09-21] Build finished");
    assert.equal(nativeResult, fallbackResult);
  });

  test("line deduplication: native and fallback yield identical results", () => {
    const sample = [
      "first line",
      "repeated line",
      "repeated line",
      "repeated line",
      "middle line",
      "pair",
      "pair",
      "last line",
    ].join("\n");

    for (const threshold of [2, 3, 4]) {
      setNativeCompressionEnabledForTest(true);
      const nativeRes = deduplicateRepeatedLinesFast(sample, { threshold });

      setNativeCompressionEnabledForTest(false);
      const fallbackRes = deduplicateRepeatedLinesFast(sample, { threshold });

      assert.deepEqual(nativeRes, fallbackRes);
    }
  });

  test("cleanup artifacts: native and fallback yield identical results", () => {
    const dirty = "Here is   too much   spacing  ,  and punctuation??\n\n\n\nNext line   ";

    setNativeCompressionEnabledForTest(true);
    const nativeCleaned = cleanupArtifactsFast(dirty);

    setNativeCompressionEnabledForTest(false);
    const fallbackCleaned = cleanupArtifactsFast(dirty);

    assert.equal(nativeCleaned, fallbackCleaned);
    assert.ok(!nativeCleaned.includes("   "));
    assert.ok(!nativeCleaned.includes(" ,"));
    assert.ok(!nativeCleaned.includes("??"));
    assert.ok(!nativeCleaned.includes("\n\n\n"));
  });

  test("addon candidates cover both the module dir and the standalone cwd root", () => {
    const moduleDir = path.join("/app", ".build", "next", "server", "chunks");
    const cwd = "/app";
    const candidates = nativeAddonCandidates(moduleDir, cwd);
    const nativeDir = path.join(cwd, "open-sse", "services", "compression", "native");

    // The Docker/standalone bundle compiles this module into .next/server/... — the
    // addon only resolves through the cwd-relative candidate (assembleStandalone
    // copies it to <standalone-root>/open-sse/services/compression/native/).
    assert.ok(candidates.includes(path.join(nativeDir, "omniroute_compression_native.node")));
    assert.ok(
      candidates.includes(
        path.join(nativeDir, "target", "release", "libomniroute_compression_native.so")
      )
    );
    // Source runs resolve module-relative first.
    assert.equal(candidates[0], path.join(moduleDir, "omniroute_compression_native.node"));
    assert.equal(candidates.length, 8);
  });
});
