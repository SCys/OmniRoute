import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { BaseExecutor } from "@omniroute/open-sse/executors/base.ts";
import { DefaultExecutor } from "@omniroute/open-sse/executors/default.ts";
import { getDefaultExecutor } from "@omniroute/open-sse/executors/defaultResolver.ts";

test("BaseExecutor is a valid constructor and can be subclassed by DefaultExecutor", () => {
  assert.equal(
    typeof BaseExecutor,
    "function",
    "BaseExecutor must be an exported class constructor"
  );
  assert.equal(
    typeof DefaultExecutor,
    "function",
    "DefaultExecutor must be an exported class constructor"
  );

  const defaultExec = new DefaultExecutor("openai");
  assert.ok(
    defaultExec instanceof BaseExecutor,
    "DefaultExecutor must be an instance of BaseExecutor"
  );

  const resolved = getDefaultExecutor("openai");
  assert.ok(
    resolved instanceof BaseExecutor,
    "getDefaultExecutor must return an instance of BaseExecutor"
  );
});

test("open-sse/executors/base.ts does not statically import providerRequestLogging or db/core to prevent circular dependency", () => {
  const baseFilePath = path.resolve(process.cwd(), "open-sse/executors/base.ts");
  const content = fs.readFileSync(baseFilePath, "utf8");

  assert.doesNotMatch(
    content,
    /from\s+["'].*providerRequestLogging(\.ts)?["']/,
    "base.ts must not import providerRequestLogging (causes circular dependency with usage/db layer)"
  );

  assert.doesNotMatch(
    content,
    /from\s+["'].*\/db\/core["']/,
    "base.ts must not directly import db/core"
  );
});
