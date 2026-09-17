import { describe, expect, test } from "bun:test"
import { ZohoBilling } from "../index"
import {
  ZohoBillingAuthError,
  ZohoBillingInvalidRequestError,
  ZohoBillingNotFoundError,
  ZohoBillingRateLimitError,
} from "../errors"
import { ZOHO_ORG_HEADER } from "../config"

interface StubCall {
  url: string
  init: RequestInit
}

/** Serves canned responses in order and records what was requested. */
function stubFetch(
  responses: (Response | (() => Response))[]
): typeof globalThis.fetch & { calls: StubCall[] } {
  const calls: StubCall[] = []
  let index = 0
  const impl = (async (url: string | URL | Request, init: RequestInit = {}) => {
    calls.push({ url: String(url), init })
    const next = responses[Math.min(index, responses.length - 1)]
    index += 1
    return typeof next === "function" ? next() : next!.clone()
  }) as typeof globalThis.fetch & { calls: StubCall[] }
  impl.calls = calls
  return impl
}

function json(
  body: unknown,
  status = 200,
  headers: Record<string, string> = {}
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  })
}

function makeClient(fetchImpl: typeof globalThis.fetch, maxRetries = 0) {
  return new ZohoBilling({
    organizationId: "org-123",
    credentials: { accessToken: "test-token" },
    apiBaseUrl: "https://api.test",
    maxRetries,
    fetch: fetchImpl,
  })
}

describe("request plumbing", () => {
  test("sends Zoho auth and organization headers", async () => {
    const fetchImpl = stubFetch([
      json({
        code: 0,
        message: "success",
        subscription: { subscription_id: "s1" },
      }),
    ])
    const zoho = makeClient(fetchImpl)

    await zoho.subscriptions.retrieve("s1")

    const call = fetchImpl.calls[0]!
    expect(call.url).toBe("https://api.test/billing/v1/subscriptions/s1")
    const headers = call.init.headers as Record<string, string>
    expect(headers.Authorization).toBe("Zoho-oauthtoken test-token")
    expect(headers[ZOHO_ORG_HEADER]).toBe("org-123")
  })

  test("drops undefined query params and serialises the rest", async () => {
    const fetchImpl = stubFetch([
      json({ code: 0, message: "success", plans: [] }),
    ])
    const zoho = makeClient(fetchImpl)

    await zoho.plans.list({
      filter_by: "PlanStatus.ACTIVE",
      product_id: undefined,
    })

    const url = new URL(fetchImpl.calls[0]!.url)
    expect(url.searchParams.get("filter_by")).toBe("PlanStatus.ACTIVE")
    expect(url.searchParams.has("product_id")).toBe(false)
  })

  test("percent-encodes caller-supplied path segments", async () => {
    const fetchImpl = stubFetch([
      json({ code: 0, message: "success", plan: {} }),
    ])
    const zoho = makeClient(fetchImpl)

    // A plan code with a slash must not create an extra path segment.
    await zoho.plans.retrieve("pro/monthly")

    expect(fetchImpl.calls[0]!.url).toBe(
      "https://api.test/billing/v1/plans/pro%2Fmonthly"
    )
  })
})

describe("error mapping", () => {
  test("maps HTTP status onto typed errors", async () => {
    const cases: [number, unknown][] = [
      [401, ZohoBillingAuthError],
      [404, ZohoBillingNotFoundError],
      [429, ZohoBillingRateLimitError],
      [400, ZohoBillingInvalidRequestError],
    ]

    for (const [status, expected] of cases) {
      const zoho = makeClient(
        stubFetch([json({ code: 1, message: "nope" }, status)])
      )
      await expect(zoho.subscriptions.retrieve("s1")).rejects.toBeInstanceOf(
        expected as never
      )
    }
  })

  test("treats HTTP 200 with a non-zero body code as a failure", async () => {
    // Zoho reports many business-rule failures this way, so a naive client
    // that only checks response.ok would treat these as success.
    const zoho = makeClient(
      stubFetch([json({ code: 1002, message: "Plan does not exist." })])
    )

    await expect(zoho.subscriptions.retrieve("s1")).rejects.toMatchObject({
      code: 1002,
      message: "Plan does not exist.",
    })
  })

  test("surfaces Zoho's message rather than a generic one", async () => {
    const zoho = makeClient(
      stubFetch([json({ code: 57, message: "Not authorized." }, 403)])
    )
    await expect(zoho.subscriptions.retrieve("s1")).rejects.toThrow(
      "Not authorized."
    )
  })
})

describe("retries", () => {
  test("retries a 429 and succeeds", async () => {
    const fetchImpl = stubFetch([
      () =>
        json({ code: 45, message: "rate limited" }, 429, {
          "retry-after": "0",
        }),
      () =>
        json({
          code: 0,
          message: "success",
          subscription: { subscription_id: "s1" },
        }),
    ])
    const zoho = makeClient(fetchImpl, 2)

    const subscription = await zoho.subscriptions.retrieve("s1")

    expect(subscription.subscription_id).toBe("s1")
    expect(fetchImpl.calls.length).toBe(2)
  })

  test("does not retry a 400", async () => {
    const fetchImpl = stubFetch([json({ code: 1, message: "bad" }, 400)])
    const zoho = makeClient(fetchImpl, 3)

    await expect(zoho.subscriptions.retrieve("s1")).rejects.toBeInstanceOf(
      ZohoBillingInvalidRequestError
    )
    expect(fetchImpl.calls.length).toBe(1)
  })

  test("gives up after maxRetries", async () => {
    const fetchImpl = stubFetch([() => json({ code: 0, message: "boom" }, 500)])
    const zoho = makeClient(fetchImpl, 2)

    await expect(zoho.subscriptions.retrieve("s1")).rejects.toThrow()
    // Initial attempt plus two retries.
    expect(fetchImpl.calls.length).toBe(3)
  })
})

describe("pagination", () => {
  test("follows has_more_page and stops when it clears", async () => {
    const fetchImpl = stubFetch([
      () =>
        json({
          code: 0,
          message: "success",
          subscriptions: [{ subscription_id: "s1" }],
          page_context: { page: 1, per_page: 1, has_more_page: true },
        }),
      () =>
        json({
          code: 0,
          message: "success",
          subscriptions: [{ subscription_id: "s2" }],
          page_context: { page: 2, per_page: 1, has_more_page: false },
        }),
    ])
    const zoho = makeClient(fetchImpl)

    const all = await zoho.subscriptions.listAll({ per_page: 1 })

    expect(all.map((s) => s.subscription_id)).toEqual(["s1", "s2"])
    expect(new URL(fetchImpl.calls[1]!.url).searchParams.get("page")).toBe("2")
  })

  test("stops on a short page when page_context is absent", async () => {
    // Without the flag, a page shorter than per_page is the only safe signal
    // that there is nothing more to fetch.
    const fetchImpl = stubFetch([
      json({
        code: 0,
        message: "success",
        subscriptions: [{ subscription_id: "s1" }],
      }),
    ])
    const zoho = makeClient(fetchImpl)

    const all = await zoho.subscriptions.listAll({ per_page: 200 })

    expect(all.length).toBe(1)
    expect(fetchImpl.calls.length).toBe(1)
  })
})

describe("subscription operations", () => {
  test("cancel defaults to end-of-term", async () => {
    const fetchImpl = stubFetch([
      json({
        code: 0,
        message: "success",
        subscription: { subscription_id: "s1" },
      }),
    ])
    const zoho = makeClient(fetchImpl)

    await zoho.subscriptions.cancel("s1")

    const url = new URL(fetchImpl.calls[0]!.url)
    expect(url.pathname).toEndWith("/subscriptions/s1/cancel")
    expect(url.searchParams.get("cancel_at_end")).toBe("true")
  })

  test("cancel immediately when asked", async () => {
    const fetchImpl = stubFetch([
      json({
        code: 0,
        message: "success",
        subscription: { subscription_id: "s1" },
      }),
    ])
    const zoho = makeClient(fetchImpl)

    await zoho.subscriptions.cancel("s1", { cancel_at_end: false })

    expect(
      new URL(fetchImpl.calls[0]!.url).searchParams.get("cancel_at_end")
    ).toBe("false")
  })

  test("create posts the plan body", async () => {
    const fetchImpl = stubFetch([
      json({
        code: 0,
        message: "success",
        subscription: { subscription_id: "s1" },
      }),
    ])
    const zoho = makeClient(fetchImpl)

    await zoho.subscriptions.create({
      customer_id: "c1",
      plan: { plan_code: "pro-monthly", quantity: 2 },
    })

    const call = fetchImpl.calls[0]!
    expect(call.init.method).toBe("POST")
    expect(JSON.parse(call.init.body as string)).toEqual({
      customer_id: "c1",
      plan: { plan_code: "pro-monthly", quantity: 2 },
    })
  })
})
