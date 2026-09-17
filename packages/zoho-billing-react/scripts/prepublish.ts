#!/usr/bin/env bun
// prepack/postpack: rewrite the workspace:* dependency on @dipakparmar/zoho-billing
// to the sibling package's committed version (`npm publish` doesn't rewrite
// workspace: protocols the way `bun publish` does), then restore it afterward.
import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const pkgPath = join(import.meta.dir, "..", "package.json")
const corePkgPath = join(
  import.meta.dir,
  "..",
  "..",
  "zoho-billing",
  "package.json"
)
const mode = process.argv[2]

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"))
const dep = pkg.dependencies?.["@dipakparmar/zoho-billing"]

if (mode === "restore") {
  if (dep && dep !== "workspace:*") {
    pkg.dependencies["@dipakparmar/zoho-billing"] = "workspace:*"
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
  }
} else {
  if (dep === "workspace:*") {
    const corePkg = JSON.parse(readFileSync(corePkgPath, "utf8"))
    pkg.dependencies["@dipakparmar/zoho-billing"] = `^${corePkg.version}`
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
  }
}
