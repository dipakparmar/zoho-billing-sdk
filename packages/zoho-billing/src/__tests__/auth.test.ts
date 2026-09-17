import { describe, expect, test } from "bun:test"
import { MemoryTokenStore, ZohoTokenManager } from "../auth"
import { ZohoBillingAuthError } from "../errors"

function tokenResponse(accessToken: string, expiresIn = 3600) {
  return new Response(
    JSON.stringify({
      access_token: accessToken,
      expires_in: expiresIn,
      token_type: "Bearer",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  )
}

const CREDENTIALS = {
  clientId: "client-1",
  clientSecret: "secret",
  refreshToken: "refresh",
}

describe("ZohoTokenManager", () => {
  test("exchanges the refresh token and caches the result", async () => {
    let calls = 0
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      fetch: (async () => {
        calls += 1
        return tokenResponse("access-1")
      }) as unknown as typeof globalThis.fetch,
    })

    expect(await manager.getAccessToken()).toBe("access-1")
    expect(await manager.getAccessToken()).toBe("access-1")
    expect(calls).toBe(1)
  })

  test("posts the refresh_token grant to the region's accounts host", async () => {
    let seenUrl = ""
    let seenBody = ""
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      region: "eu",
      fetch: (async (url: string | URL, init: RequestInit) => {
        seenUrl = String(url)
        seenBody = String(init.body)
        return tokenResponse("access-eu")
      }) as unknown as typeof globalThis.fetch,
    })

    await manager.getAccessToken()

    expect(seenUrl).toBe("https://accounts.zoho.eu/oauth/v2/token")
    const params = new URLSearchParams(seenBody)
    expect(params.get("grant_type")).toBe("refresh_token")
    expect(params.get("refresh_token")).toBe("refresh")
    expect(params.get("client_id")).toBe("client-1")
  })

  test("collapses concurrent refreshes into one request", async () => {
    // Without single-flight, a burst of parallel API calls on a cold cache
    // would each mint a token and burn Zoho's token quota.
    let calls = 0
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      fetch: (async () => {
        calls += 1
        await new Promise((resolve) => setTimeout(resolve, 10))
        return tokenResponse("access-1")
      }) as unknown as typeof globalThis.fetch,
    })

    const tokens = await Promise.all(
      Array.from({ length: 8 }, () => manager.getAccessToken())
    )

    expect(tokens.every((token) => token === "access-1")).toBe(true)
    expect(calls).toBe(1)
  })

  test("refreshes early, before the token actually expires", async () => {
    // A token valid for 60s with a 120s leeway is already unusable: it could
    // expire mid-flight on a slow request.
    let calls = 0
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      expiryLeewayMs: 120_000,
      fetch: (async () => {
        calls += 1
        return tokenResponse(`access-${calls}`, 60)
      }) as unknown as typeof globalThis.fetch,
    })

    expect(await manager.getAccessToken()).toBe("access-1")
    expect(await manager.getAccessToken()).toBe("access-2")
    expect(calls).toBe(2)
  })

  test("treats HTTP 200 with an error field as a failure", async () => {
    // Zoho returns 200 for invalid grants, so status alone is not enough.
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      fetch: (async () =>
        new Response(JSON.stringify({ error: "invalid_code" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })) as unknown as typeof globalThis.fetch,
    })

    await expect(manager.getAccessToken()).rejects.toBeInstanceOf(
      ZohoBillingAuthError
    )
  })

  test("static tokens are returned as-is and cannot refresh", async () => {
    const manager = new ZohoTokenManager({
      credentials: { accessToken: "static" },
      fetch: (async () => {
        throw new Error("should not be called")
      }) as unknown as typeof globalThis.fetch,
    })

    expect(await manager.getAccessToken()).toBe("static")
    expect(manager.canRefresh).toBe(false)
  })

  test("namespaces the cache by client and region", async () => {
    // Two orgs in one process must not read each other's tokens.
    const store = new MemoryTokenStore()
    const makeManager = (clientId: string) =>
      new ZohoTokenManager({
        credentials: { ...CREDENTIALS, clientId },
        tokenStore: store,
        fetch: (async () =>
          tokenResponse(
            `token-for-${clientId}`
          )) as unknown as typeof globalThis.fetch,
      })

    expect(await makeManager("client-a").getAccessToken()).toBe(
      "token-for-client-a"
    )
    expect(await makeManager("client-b").getAccessToken()).toBe(
      "token-for-client-b"
    )
  })

  test("invalidate forces the next call to refresh", async () => {
    let calls = 0
    const manager = new ZohoTokenManager({
      credentials: CREDENTIALS,
      fetch: (async () => {
        calls += 1
        return tokenResponse(`access-${calls}`)
      }) as unknown as typeof globalThis.fetch,
    })

    expect(await manager.getAccessToken()).toBe("access-1")
    await manager.invalidate()
    expect(await manager.getAccessToken()).toBe("access-2")
  })
})
