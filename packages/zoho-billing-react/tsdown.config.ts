import { defineConfig } from "tsdown"

export default defineConfig({
  entry: [
    "./src/index.ts",
    "./src/hooks/index.ts",
    "./src/components/index.ts",
    "./src/forms/index.ts",
    "./src/server/index.ts",
  ],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  // Consumers supply React themselves; bundling it would break hooks.
  external: [/^react($|\/)/, /^react-dom($|\/)/, "@dipakparmar/zoho-billing"],
  // One output file per source module rather than merged chunks. This is what
  // keeps "use client" attached to the module that declares it: bundling
  // merges modules and drops per-module directives, which silently turns every
  // client component into a server module in the consuming app.
  unbundle: true,
})
