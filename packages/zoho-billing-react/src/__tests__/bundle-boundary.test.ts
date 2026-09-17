import { describe, expect, test } from "bun:test"

/**
 * Guards the client/server module boundary.
 *
 * A barrel that mixes client-safe and server-only code is a known trap in this
 * repo: importing anything from it into a `"use client"` component drags the
 * whole dependency graph - DB drivers, Node builtins - into the browser
 * bundle. It passes dev, typecheck, and unit tests, then fails only in a
 * production build with a cryptic `Module not found` pointing at an unrelated
 * package.
 *
 * These tests bundle each entry point for the browser and assert the boundary
 * holds, which is cheaper than catching it in CI's production build.
 */

const CLIENT_ENTRIES = [
  "src/index.ts",
  "src/hooks/index.ts",
  "src/components/index.ts",
  "src/forms/index.ts",
]

async function bundleForBrowser(entry: string) {
  return Bun.build({
    entrypoints: [entry],
    target: "browser",
    external: ["react", "react-dom"],
  })
}

describe("client entries stay browser-safe", () => {
  for (const entry of CLIENT_ENTRIES) {
    test(`${entry} bundles for the browser without Node builtins`, async () => {
      const result = await bundleForBrowser(entry)

      expect(result.logs.filter((l) => l.level === "error")).toEqual([])
      expect(result.success).toBe(true)

      const code = (
        await Promise.all(result.outputs.map((output) => output.text()))
      ).join("\n")

      // node:crypto arrives via @dipakparmar/zoho-billing's webhook module; if it
      // shows up here, a server-only import leaked into the client graph.
      expect(code).not.toInclude("node:crypto")
      expect(code).not.toInclude("createHmac")
      expect(code).not.toInclude("timingSafeEqual")
    })
  }

  /**
   * Match real `from "..."` specifiers only. An earlier version of this test
   * searched raw text and tripped over a doc comment that merely *named* the
   * server module, which is a false positive worth not reintroducing.
   */
  const importedSpecifiers = (source: string): string[] =>
    [...source.matchAll(/\bfrom\s+"([^"]+)"/g)].map((match) => match[1]!)

  test("the main barrel does not re-export the server entry", async () => {
    // Types are erased at build time, so this checks the source directly.
    const specifiers = importedSpecifiers(await Bun.file("src/index.ts").text())
    expect(specifiers.filter((s) => s.includes("server"))).toEqual([])
  })

  test("the forms entry does not import the server module", async () => {
    // The forms need the action's *shape*, not its implementation; importing
    // the server module for the type would pull Zoho's SDK into the browser.
    for (const file of [
      "src/forms/index.ts",
      "src/forms/types.ts",
      "src/forms/SubscriptionForms.tsx",
      "src/forms/useOptimisticSubscription.ts",
    ]) {
      const specifiers = importedSpecifiers(await Bun.file(file).text())
      expect(specifiers.filter((s) => s.includes("server"))).toEqual([])
    }
  })
})

describe("server entry is server-only", () => {
  test("it reaches the Zoho SDK, which is why it must stay out of the barrel", async () => {
    const source = await Bun.file("src/server/data.ts").text()
    expect(source).toInclude("@dipakparmar/zoho-billing")
  })
})
