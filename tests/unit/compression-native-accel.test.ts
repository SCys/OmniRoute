import { test, describe, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import {
  isNativeCompressionAvailable,
  stripAnsiFast,
  deduplicateRepeatedLinesFast,
  groupSimilarLinesFast,
  ahoCorasickReplaceFast,
  cleanupArtifactsFast,
  getNativeCompressionAddon,
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
    assert.equal(isNativeCompressionAvailable(), true);
    const addon = getNativeCompressionAddon();
    assert.ok(addon);
    assert.equal(addon?.nativePing(), "pong");

    // Test programatic disable
    setNativeCompressionEnabledForTest(false);
    assert.equal(isNativeCompressionAvailable(), false);
    assert.equal(getNativeCompressionAddon(), null);

    setNativeCompressionEnabledForTest(true);
    assert.equal(isNativeCompressionAvailable(), true);
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

  test("line similarity grouping: native and fallback yield identical results", () => {
    const sample = [
      "2024-01-15T10:30:00Z INFO session a1b2c3d4e5f6 request processed in 42 ms v1.0.0",
      "2024-01-15T10:30:01Z INFO session b2c3d4e5f6a1 request processed in 55 ms v1.0.0",
      "2024-01-15T10:30:02Z INFO session c3d4e5f6a1b2 request processed in 60 ms v1.0.0",
      "different unique event line",
    ].join("\n");

    setNativeCompressionEnabledForTest(true);
    const nativeRes = groupSimilarLinesFast(sample, { threshold: 3 });

    setNativeCompressionEnabledForTest(false);
    const fallbackRes = groupSimilarLinesFast(sample, { threshold: 3 });

    assert.equal(nativeRes.grouped, 2);
    assert.deepEqual(nativeRes, fallbackRes);
  });

  test("Aho-Corasick multi-pattern replacement: native and fallback equivalence", () => {
    const text = "I would like you to please make sure to check the code and remember to test";
    const patterns = ["i would like you to", "please", "make sure to", "remember to"];
    const replacements = ["", "", "ensure to", "always"];

    setNativeCompressionEnabledForTest(true);
    const nativeReplaced = ahoCorasickReplaceFast(text, patterns, replacements, true);

    setNativeCompressionEnabledForTest(false);
    const fallbackReplaced = ahoCorasickReplaceFast(text, patterns, replacements, true);

    assert.ok(nativeReplaced.includes("ensure to"));
    assert.ok(nativeReplaced.includes("always"));
    assert.ok(!nativeReplaced.toLowerCase().includes("please"));
    assert.equal(nativeReplaced.trim(), fallbackReplaced.trim());
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
});
