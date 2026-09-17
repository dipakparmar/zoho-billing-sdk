#!/usr/bin/env bun
// semantic-release exec prepareCmd: keep the react package's dependency on
// the core package in sync with the version about to be released.
import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const version = process.argv[2]
if (!version) {
  console.error("sync-internal-deps: missing version argument")
  process.exit(1)
}

const pkgPath = join(
  import.meta.dir,
  "..",
  "packages",
  "zoho-billing-react",
  "package.json"
)
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"))

pkg.dependencies["@dipakparmar/zoho-billing"] = `^${version}`
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)

console.log(`sync-internal-deps: set @dipakparmar/zoho-billing to ^${version}`)
