/**
 * Best-effort build of the Rust compression native acceleration addon so the
 * production standalone bundle (assembleStandalone's NATIVE_ASSET_ENTRIES)
 * can include `open-sse/services/compression/native/omniroute_compression_native.node`.
 *
 * Missing cargo or failed build is non-fatal: the runtime gracefully falls back
 * to the pure TypeScript compression implementation.
 */
import { execFileSync } from "node:child_process";
import { existsSync, copyFileSync } from "node:fs";
import path from "node:path";

/**
 * @param {string} projectRoot
 * @param {{ run?: (cmd:string, args:string[], cwd:string) => void,
 *           exists?: (p:string) => boolean }} [opts]
 * @returns {{ built: boolean, reason?: string }}
 */
export function buildCompressionNative(projectRoot, opts = {}) {
  const run = opts.run ?? defaultRun;
  const exists = opts.exists ?? existsSync;

  const nativeDir = path.join(projectRoot, "open-sse", "services", "compression", "native");
  if (!exists(path.join(nativeDir, "Cargo.toml"))) {
    return { built: false, reason: "native sources absent (Cargo.toml not found)" };
  }

  const outNode = path.join(nativeDir, "omniroute_compression_native.node");

  try {
    run("cargo", ["build", "--release"], nativeDir);
  } catch (err) {
    return {
      built: false,
      reason: `cargo build failed or not found: ${err?.message ?? String(err)}`,
    };
  }

  const candidateLibs = [
    path.join(nativeDir, "target", "release", "libomniroute_compression_native.so"),
    path.join(nativeDir, "target", "release", "libomniroute_compression_native.dylib"),
    path.join(nativeDir, "target", "release", "omniroute_compression_native.dll"),
  ];

  const foundLib = candidateLibs.find((p) => exists(p));
  if (!foundLib) {
    return { built: false, reason: "cargo finished but dynamic library not found" };
  }

  try {
    copyFileSync(foundLib, outNode);
  } catch (err) {
    return { built: false, reason: `copying to .node failed: ${err?.message ?? String(err)}` };
  }

  return { built: true };
}

function defaultRun(cmd, args, cwd) {
  execFileSync(cmd, args, { cwd, stdio: ["ignore", "pipe", "pipe"] });
}
