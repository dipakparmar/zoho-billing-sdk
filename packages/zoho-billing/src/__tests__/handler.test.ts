import { describe, expect, test } from "bun:test"
import { ZohoBilling } from "../index"
import { createZohoBillingHandler } from "../handler"

const BASE = "/api/billing"

interface Recorded {
  method: string
  url: string
  body: unknown
}

/**
 * Builds a handler over a fake Zoho API. `subscriptionOwner` decides which
 * customer the stubbed subscription belongs to, which is what the ownership
 * tests turn on.
 */
function setup({
  sessionCustomerId = "cust_1",
  subscriptionOwner = "cust_1",
  allowedPlanCodes,
  allowedAddonCodes,
  allowedRedirectOrigins,
}: {
  sessionCustomerId?: string | null
  subscriptionOwner?: string
  allowedPlanCodes?: string[]
  allowedAddonCodes?: string[]
  allowedRedirectOrigins?: string[]
} = {}) {
  const recorded: Recorded[] = []

  const zoho = new ZohoBilling({
    organizationId: "org-1",
    credentials: { accessToken: "token" },
    apiBaseUrl: "https://api.test",
    maxRetries: 0,
    fetch: (async (url: string | URL, init: RequestInit = {}) => {
      const href = String(url)
      recorded.push({
        method: init.method ?? "GET",
        url: href,
        body: init.body ? JSON.parse(String(init.body)) : undefined,
      })
      const path = new URL(href).pathname

      const body: Record<string, unknown> = { code: 0, message: "success" }
      if (path.includes("/subscriptions/")) {
        body.subscription = {
          subscription_id: "sub_1",
          status: "live",
          customer: { customer_id: subscriptionOwner },
        }
      } else if (path.endsWith("/subscriptions")) {
        body.subscriptions = [{ subscription_id: "sub_1" }]
      } else if (path.endsWith("/plans")) {
        body.plans = [{ plan_code: "pro" }, { plan_code: "secret-internal" }]
      } else if (path.endsWith("/invoices")) {
        body.invoices = [{ invoice_id: "inv_1" }]
      } else if (path.includes("/hostedpages")) {
        body.hostedpage = {
          hostedpage_id: "hp_1",
          url: "https://zoho.test/pay",
        }
      } else if (path.includes("/customers/")) {
        body.customer = { customer_id: sessionCustomerId }
      }

      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }) as typeof globalThis.fetch,
  })

  const handler = createZohoBillingHandler({
    zoho,
    basePath: BASE,
    allowedPlanCodes,
    allowedAddonCodes,
    allowedRedirectOrigins,
    authorize: () =>
      sessionCustomerId ? { customerId: sessionCustomerId } : null,
    onError: () => {},
  })

  const call = (path: string, init: RequestInit = {}) =>
    handler(new Request(`https://app.test${BASE}${path}`, init))

  return { call, recorded }
}

describe("authorization", () => {
  test("rejects an unauthenticated caller with 401", async () => {
    const { call } = setup({ sessionCustomerId: null })
    const response = await call("/subscriptions")
    expect(response.status).toBe(401)
  })

  test("unknown routes 404", async () => {
    const { call } = setup()
    expect((await call("/nonsense")).status).toBe(404)
  })
})

describe("customer scoping", () => {
  test("forces the session customer onto subscription lists", async () => {
    // A caller must not be able to widen the query to other customers.
    const { call, recorded } = setup()

    await call("/subscriptions?customer_id=cust_evil")

    const upstream = new URL(recorded[0]!.url)
    expect(upstream.searchParams.get("customer_id")).toBe("cust_1")
  })

  test("forces the session customer onto invoice lists", async () => {
    const { call, recorded } = setup()

    await call("/invoices?customer_id=cust_evil")

    expect(new URL(recorded[0]!.url).searchParams.get("customer_id")).toBe(
      "cust_1"
    )
  })
})

describe("subscription ownership", () => {
  test("returns a subscription the caller owns", async () => {
    const { call } = setup({ subscriptionOwner: "cust_1" })

    const response = await call("/subscriptions/sub_1")

    expect(response.status).toBe(200)
    expect((await response.json()).subscription.subscription_id).toBe("sub_1")
  })

  test("404s a subscription belonging to someone else", async () => {
    // 404 rather than 403: a 403 would confirm the ID exists.
    const { call } = setup({ subscriptionOwner: "cust_other" })

    expect((await call("/subscriptions/sub_1")).status).toBe(404)
  })

  test("does not cancel a subscription the caller does not own", async () => {
    // The critical assertion: no mutating call may reach Zoho at all. Checking
    // ownership after the write would leave the cancellation already done.
    const { call, recorded } = setup({ subscriptionOwner: "cust_other" })

    const response = await call("/subscriptions/sub_1/cancel", {
      method: "POST",
    })

    expect(response.status).toBe(404)
    expect(recorded.some((r) => r.url.includes("/cancel"))).toBe(false)
  })

  test("does not update a subscription the caller does not own", async () => {
    const { call, recorded } = setup({ subscriptionOwner: "cust_other" })

    const response = await call("/subscriptions/sub_1", {
      method: "PUT",
      body: JSON.stringify({ plan: { plan_code: "pro" } }),
    })

    expect(response.status).toBe(404)
    expect(recorded.some((r) => r.method === "PUT")).toBe(false)
  })

  test("cancels at period end by default", async () => {
    const { call, recorded } = setup()

    await call("/subscriptions/sub_1/cancel", { method: "POST" })

    const cancelCall = recorded.find((r) => r.url.includes("/cancel"))!
    expect(new URL(cancelCall.url).searchParams.get("cancel_at_end")).toBe(
      "true"
    )
  })

  test("honours an explicit immediate cancellation", async () => {
    const { call, recorded } = setup()

    await call("/subscriptions/sub_1/cancel", {
      method: "POST",
      body: JSON.stringify({ cancel_at_end: false }),
    })

    const cancelCall = recorded.find((r) => r.url.includes("/cancel"))!
    expect(new URL(cancelCall.url).searchParams.get("cancel_at_end")).toBe(
      "false"
    )
  })
})

describe("plan allowlist", () => {
  test("hides plans outside the allowlist", async () => {
    const { call } = setup({ allowedPlanCodes: ["pro"] })

    const plans = (await (await call("/plans")).json()).plans

    expect(plans.map((p: { plan_code: string }) => p.plan_code)).toEqual([
      "pro",
    ])
  })

  test("refuses checkout for a plan outside the allowlist", async () => {
    const { call, recorded } = setup({ allowedPlanCodes: ["pro"] })

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({ plan: { plan_code: "secret-internal" } }),
    })

    expect(response.status).toBe(403)
    expect(recorded.some((r) => r.url.includes("hostedpages"))).toBe(false)
  })

  test("allows checkout for an allowed plan", async () => {
    const { call } = setup({ allowedPlanCodes: ["pro"] })

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({ plan: { plan_code: "pro" } }),
    })

    expect(response.status).toBe(200)
    expect((await response.json()).hostedpage.url).toBe("https://zoho.test/pay")
  })
})

describe("hosted pages", () => {
  test("overrides a customer_id supplied by the caller", async () => {
    // Otherwise a caller could open a checkout against another account.
    const { call, recorded } = setup()

    await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        customer_id: "cust_evil",
      }),
    })

    const upstream = recorded.find((r) => r.url.includes("hostedpages"))!
    expect((upstream.body as { customer_id: string }).customer_id).toBe(
      "cust_1"
    )
  })

  test("ignores an inline customer object", async () => {
    // Accepting one would create a second Zoho customer that bypasses scoping.
    const { call, recorded } = setup()

    await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        customer: { display_name: "Injected" },
      }),
    })

    const upstream = recorded.find((r) => r.url.includes("hostedpages"))!
    expect((upstream.body as { customer?: unknown }).customer).toBeUndefined()
  })

  test("rejects a subscription update page for another customer", async () => {
    const { call, recorded } = setup({ subscriptionOwner: "cust_other" })

    const response = await call("/hosted-pages/update-subscription", {
      method: "POST",
      body: JSON.stringify({ subscription_id: "sub_1" }),
    })

    expect(response.status).toBe(404)
    expect(recorded.some((r) => r.url.includes("hostedpages"))).toBe(false)
  })

  test("requires a plan for a new subscription page", async () => {
    const { call } = setup()

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({}),
    })

    expect(response.status).toBe(400)
  })
})

describe("pricing injection", () => {
  test("strips a plan price override on checkout", async () => {
    // The headline case: without sanitisation this buys Pro for zero.
    const { call, recorded } = setup()

    await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro", price: 0, setup_fee: 0, trial_days: 9999 },
      }),
    })

    const upstream = recorded.find((r) => r.url.includes("hostedpages"))!
    const plan = (upstream.body as { plan: Record<string, unknown> }).plan
    expect(plan).toEqual({ plan_code: "pro" })
  })

  test("strips exchange_rate and exclusion flags on checkout", async () => {
    const { call, recorded } = setup()

    await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        exchange_rate: 0.0001,
        exclude_setup_fee: true,
        can_charge_setup_fee_immediately: false,
      }),
    })

    const body = recorded.find((r) => r.url.includes("hostedpages"))!
      .body as Record<string, unknown>
    expect(body.exchange_rate).toBeUndefined()
    expect(body.exclude_setup_fee).toBeUndefined()
  })

  test("strips a plan price override on subscription update", async () => {
    const { call, recorded } = setup()

    await call("/subscriptions/sub_1", {
      method: "PUT",
      body: JSON.stringify({ plan: { plan_code: "pro", price: 0 } }),
    })

    const put = recorded.find((r) => r.method === "PUT")!
    expect((put.body as { plan: unknown }).plan).toEqual({ plan_code: "pro" })
  })

  test("drops customer_id from an update, which would reassign ownership", async () => {
    const { call, recorded } = setup()

    await call("/subscriptions/sub_1", {
      method: "PUT",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        customer_id: "cust_victim",
      }),
    })

    const put = recorded.find((r) => r.method === "PUT")!
    expect((put.body as { customer_id?: string }).customer_id).toBeUndefined()
  })

  test("strips addon price overrides", async () => {
    const { call, recorded } = setup()

    await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        addons: [{ addon_code: "seats", quantity: 2, price: 0 }],
      }),
    })

    const body = recorded.find((r) => r.url.includes("hostedpages"))!.body as {
      addons: unknown[]
    }
    expect(body.addons).toEqual([{ addon_code: "seats", quantity: 2 }])
  })

  test("rejects an addon outside the allowlist", async () => {
    const { call, recorded } = setup({ allowedAddonCodes: ["seats"] })

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        addons: [{ addon_code: "internal-freebie" }],
      }),
    })

    expect(response.status).toBe(403)
    expect(recorded.some((r) => r.url.includes("hostedpages"))).toBe(false)
  })

  test("rejects an abusive quantity", async () => {
    const { call } = setup()

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({ plan: { plan_code: "pro", quantity: -5 } }),
    })

    expect(response.status).toBe(400)
  })
})

describe("open redirect", () => {
  test("blocks an off-origin redirect_url", async () => {
    const { call, recorded } = setup()

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        redirect_url: "https://evil.example/phish",
      }),
    })

    expect(response.status).toBe(400)
    expect(recorded.some((r) => r.url.includes("hostedpages"))).toBe(false)
  })

  test("allows a same-origin redirect_url", async () => {
    const { call, recorded } = setup()

    const response = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        redirect_url: "https://app.test/billing/return",
      }),
    })

    expect(response.status).toBe(200)
    const body = recorded.find((r) => r.url.includes("hostedpages"))!.body as {
      redirect_url: string
    }
    expect(body.redirect_url).toBe("https://app.test/billing/return")
  })

  test("honours a configured redirect origin allowlist", async () => {
    const { call } = setup({
      allowedRedirectOrigins: ["https://portal.example.com"],
    })

    const ok = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        redirect_url: "https://portal.example.com/done",
      }),
    })
    expect(ok.status).toBe(200)

    // The request's own origin is no longer implicitly trusted once an
    // explicit allowlist is configured.
    const blocked = await call("/hosted-pages/new-subscription", {
      method: "POST",
      body: JSON.stringify({
        plan: { plan_code: "pro" },
        redirect_url: "https://app.test/return",
      }),
    })
    expect(blocked.status).toBe(400)
  })
})

describe("response hygiene", () => {
  test("marks billing responses no-store", async () => {
    // Per-customer data must never land in a shared cache.
    const { call } = setup()
    const response = await call("/subscriptions")
    expect(response.headers.get("cache-control")).toBe("no-store")
  })

  test("hides upstream Zoho error text by default", async () => {
    const { call } = setup({ sessionCustomerId: null })
    const response = await call("/subscriptions")
    expect(await response.json()).toEqual({ error: "unauthorized" })
  })
})
