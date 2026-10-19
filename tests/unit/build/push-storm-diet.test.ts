// Push-storm diet (2026-10-18). On the active release branch ~10 PRs/hour land during
// merge campaigns. Every push started the full ci.yml matrix (30 jobs) and quality.yml
// again on hosted runners, only for the next push to cancel them: 24 of 24 push runs of
// each were cancelled in one day, 2,500 workflow runs were created in 24 h, and 106 jobs
// sat queued against the account's 40 concurrent hosted slots — PR checks waited hours
// and merges happened without them. Each change already ran the matrix on its PR; the
// merged combination is Release-Green's job (nightly-release-green.yml). Pinned here:
//   - ci.yml and quality.yml run on push only for `main` (the release squash);
//   - PRs into main and release/** and merge groups still get the full matrix;
//   - Release-Green still fires on every push to release/v* and never cancels a started run.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";

interface Workflow {
  on?: {
    push?: { branches?: string[] };
    pull_request?: { branches?: string[] };
    merge_group?: unknown;
  };
  concurrency?: { "cancel-in-progress"?: unknown };
}

const WORKFLOWS_DIR = path.join(process.cwd(), ".github", "workflows");
const load = (file: string): Workflow =>
  yaml.load(fs.readFileSync(path.join(WORKFLOWS_DIR, file), "utf8")) as Workflow;

for (const file of ["ci.yml", "quality.yml"]) {
  test(`${file}: push trigger is main-only; PRs and merge groups still cover release/**`, () => {
    const on = load(file).on ?? {};
    assert.deepEqual(
      on.push?.branches,
      ["main"],
      `${file} must not run the matrix per release push`
    );
    assert.deepEqual(on.pull_request?.branches, ["main", "release/**"]);
    assert.ok(on.merge_group, `${file} keeps the merge-queue trigger`);
  });
}

test("Release-Green remains the per-push combination gate on release/v*", () => {
  const wf = load("nightly-release-green.yml");
  assert.ok(wf.on?.push?.branches?.includes("release/v*"));
  assert.equal(wf.concurrency?.["cancel-in-progress"], false);
});
