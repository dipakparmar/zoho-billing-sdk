#!/usr/bin/env bun
// semantic-release exec publishCmd: publish both packages with npm directly.
// @semantic-release/npm's `npm version` step crashes under npm 11 inside a
// Bun workspace member with no package-lock.json ("Cannot read properties of
// null (reading 'matches')"), so versioning is handled by
// set-release-version.ts (prepareCmd) and publishing is a plain `npm
// publish`. Core must publish before react, which depends on it.
import { spawnSync } from "node:child_process"
import { join } from "node:path"

const packages = ["zoho-billing", "zoho-billing-react"]

for (const name of packages) {
  const cwd = join(import.meta.dir, "..", "packages", name)
  const result = spawnSync(
    "npm",
    ["publish", "--provenance", "--access", "public"],
    { cwd, stdio: "inherit" }
  )
  if (result.status !== 0) {
    console.error(`publish-packages: npm publish failed for ${name}`)
    process.exit(result.status ?? 1)
  }
}

console.log("publish-packages: published both packages")
