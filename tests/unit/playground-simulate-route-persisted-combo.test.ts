import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-playground-simulate-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const combosDb = await import("../../src/lib/db/combos.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const { POST } = await import("../../src/app/api/playground/simulate-route/route.ts");

let persistedComboId: string;

test.beforeEach(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
  await providersDb.createProviderConnection({
    provider: "cc",
    authType: "no-auth",
    name: "Claude Code",
  });
  await providersDb.createProviderConnection({
    provider: "anthropic",
    authType: "no-auth",
    name: "Anthropic",
  });
  const combo = await combosDb.createCombo({
    name: "persisted combo",
    strategy: "priority",
    models: [
      { kind: "model", model: "cc/claude-opus-5", fallbackOnlyOnQuotaExhaustion: true },
      { kind: "model", providerId: "anthropic", model: "anthropic/claude-opus-5" },
      { kind: "combo-ref", comboName: "nested combo" },
    ],
  });
  persistedComboId = combo.id;
});

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
});

function request(body: unknown): Request {
  return new Request("http://localhost/api/playground/simulate-route", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

test("simulates persisted combo model steps in order", async () => {
  const response = await POST(request({ comboId: persistedComboId, promptTokens: 500 }));
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(
    body.targets.map(({ provider, model, rank }: Record<string, unknown>) => ({
      provider,
      model,
      rank,
    })),
    [
      { provider: "cc", model: "claude-opus-5", rank: 1 },
      { provider: "anthropic", model: "claude-opus-5", rank: 2 },
    ]
  );
  assert.deepEqual(
    body.targets.map(({ status }: Record<string, unknown>) => status),
    ["available", "available"]
  );
  assert.ok(body.warnings.includes("Skipped 1 unsupported persisted combo step."));
  assert.ok(body.warnings.every((warning: string) => !warning.includes("not configured")));
});

test("returns 404 for a missing persisted combo", async () => {
  const response = await POST(request({ comboId: "missing" }));

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: "Combo not found" });
});

test("preserves inline combo simulation", async () => {
  const response = await POST(
    request({
      combo: {
        name: "inline combo",
        strategy: "priority",
        targets: [{ provider: "cc", model: "claude-opus-5" }],
      },
    })
  );
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(
    body.targets.map(({ provider, model }: Record<string, unknown>) => ({ provider, model })),
    [{ provider: "cc", model: "claude-opus-5" }]
  );
});
