#!/usr/bin/env bun
// semantic-release exec prepareCmd: set the version in both package.json
// files and keep the react package's dependency on the core package in
// sync with the version about to be released.
import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const version = process.argv[2]
if (!version) {
  console.error("set-release-version: missing version argument")
  process.exit(1)
}

const write = (relPath: string, mutate: (pkg: Record<string, any>) => void) => {
  const pkgPath = join(import.meta.dir, "..", relPath)
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"))
  mutate(pkg)
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
}

write("packages/zoho-billing/package.json", (pkg) => {
  pkg.version = version
})

write("packages/zoho-billing-react/package.json", (pkg) => {
  pkg.version = version
  pkg.dependencies["@dipakparmar/zoho-billing"] = `^${version}`
})

console.log(`set-release-version: set both packages to ${version}`)
