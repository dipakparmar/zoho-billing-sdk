import { describe, expect, test } from "bun:test"
import { ZohoBillingFetchError, createFetcher } from "../client"
import {
  formatAmount,
  formatBillingDate,
  formatSubscriptionStatus,
  isCancelledAtPeriodEnd,
  isSubscriptionEntitled,
  needsPaymentAttention,
} from "../utils"

function stub(response: Response) {
  const calls: { url: string; init: RequestInit }[] = []
  const impl = (async (url: string | URL | Request, init: RequestInit = {}) => {
    calls.push({ url: String(url), init })
    return response.clone()
  }) as typeof globalThis.fetch
  return { impl, calls }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

describe("createFetcher", () => {
  test("resolves relative base URLs and appends query params", async () => {
    const { impl, calls } = stub(json({ plans: [] }))
    const fetcher = createFetcher({ baseUrl: "/api/billing", fetch: impl })

    await fetcher("/plans", { query: { filter_by: "active", skip: undefined } })

    const url = new URL(calls[0]!.url)
    expect(url.pathname).toBe("/api/billing/plans")
    expect(url.searchParams.get("filter_by")).toBe("active")
    expect(url.searchParams.has("skip")).toBe(false)
  })

  test("sends credentials so cookie sessions work", async () => {
    const { impl, calls } = stub(json({}))
    const fetcher = createFetcher({ baseUrl: "/api/billing", fetch: impl })

    await fetcher("/customer")

    expect(calls[0]!.init.credentials).toBe("same-origin")
  })

  test("serialises a JSON body and sets the content type", async () => {
    const { impl, calls } = stub(json({}))
    const fetcher = createFetcher({ baseUrl: "/api/billing", fetch: impl })

    await fetcher("/subscriptions/s1/cancel", {
      method: "POST",
      body: { cancel_at_end: true },
    })

    const init = calls[0]!.init
    expect(init.method).toBe("POST")
    expect(init.body).toBe(JSON.stringify({ cancel_at_end: true }))
    expect((init.headers as Record<string, string>)["Content-Type"]).toBe(
      "application/json"
    )
  })

  test("resolves dynamic headers at request time", async () => {
    // The provider passes a function so a rotating CSRF token is read fresh
    // on every call, not captured once at mount.
    let token = "first"
    const { impl, calls } = stub(json({}))
    const fetcher = createFetcher({
      baseUrl: "/api/billing",
      fetch: impl,
      headers: () => ({ "X-CSRF": token }),
    })

    await fetcher("/customer")
    token = "second"
    await fetcher("/customer")

    expect((calls[0]!.init.headers as Record<string, string>)["X-CSRF"]).toBe(
      "first"
    )
    expect((calls[1]!.init.headers as Record<string, string>)["X-CSRF"]).toBe(
      "second"
    )
  })

  test("throws a typed error carrying status and code", async () => {
    const { impl } = stub(json({ error: "plan_not_allowed" }, 403))
    const fetcher = createFetcher({ baseUrl: "/api/billing", fetch: impl })

    const error = await fetcher("/plans").catch((e: unknown) => e)

    expect(error).toBeInstanceOf(ZohoBillingFetchError)
    expect((error as ZohoBillingFetchError).status).toBe(403)
    expect((error as ZohoBillingFetchError).message).toBe("plan_not_allowed")
  })

  test("falls back to a status message when the body is not JSON", async () => {
    const { impl } = stub(new Response("gateway down", { status: 502 }))
    const fetcher = createFetcher({ baseUrl: "/api/billing", fetch: impl })

    await expect(fetcher("/plans")).rejects.toThrow(
      "Request failed with status 502"
    )
  })
})

describe("entitlement helpers", () => {
  test("treats live and trial as entitled", () => {
    expect(isSubscriptionEntitled({ status: "live" })).toBe(true)
    expect(isSubscriptionEntitled({ status: "trial" })).toBe(true)
  })

  test("keeps access during non_renewing and dunning", () => {
    // The customer paid for the current term, or their card is still retrying.
    expect(isSubscriptionEntitled({ status: "non_renewing" })).toBe(true)
    expect(isSubscriptionEntitled({ status: "dunning" })).toBe(true)
  })

  test("revokes access once cancelled or expired", () => {
    expect(isSubscriptionEntitled({ status: "cancelled" })).toBe(false)
    expect(isSubscriptionEntitled({ status: "expired" })).toBe(false)
    expect(isSubscriptionEntitled({ status: "unpaid" })).toBe(false)
    expect(isSubscriptionEntitled(null)).toBe(false)
    expect(isSubscriptionEntitled(undefined)).toBe(false)
  })

  test("flags states needing payment attention", () => {
    expect(needsPaymentAttention({ status: "dunning" })).toBe(true)
    expect(needsPaymentAttention({ status: "unpaid" })).toBe(true)
    expect(needsPaymentAttention({ status: "live" })).toBe(false)
  })

  test("detects cancel-at-period-end", () => {
    expect(isCancelledAtPeriodEnd({ status: "non_renewing" })).toBe(true)
    expect(isCancelledAtPeriodEnd({ status: "cancelled" })).toBe(false)
  })
})

describe("formatting helpers", () => {
  test("labels known statuses and humanises unknown ones", () => {
    expect(formatSubscriptionStatus("live")).toBe("Active")
    expect(formatSubscriptionStatus("non_renewing")).toBe(
      "Cancels at period end"
    )
    expect(formatSubscriptionStatus("some_new_state")).toBe("some new state")
    expect(formatSubscriptionStatus(undefined)).toBe("Unknown")
  })

  test("formats Zoho amounts as major units, not cents", () => {
    // Zoho's `amount: 50` means $50.00, unlike Stripe's cents.
    expect(formatAmount(50, "USD", "en-US")).toBe("$50.00")
    expect(formatAmount(undefined)).toBe("")
  })

  test("formats dates and passes through unparseable input", () => {
    expect(formatBillingDate("2026-06-30", "en-US")).toBe("Jun 30, 2026")
    expect(formatBillingDate("")).toBe("")
    expect(formatBillingDate("not-a-date")).toBe("not-a-date")
  })
})
