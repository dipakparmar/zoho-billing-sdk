import { describe, expect, test } from "bun:test"
import {
  MAX_QUANTITY,
  ZohoBillingInputError,
  assertCatalogAllowed,
  isOwnedByCustomer,
  resolveRedirectUrl,
  sanitizeAddonsInput,
  sanitizePlanInput,
  sanitizeSubscriptionUpdate,
} from "../security"

const ORIGIN = "https://app.example.com"

describe("sanitizePlanInput", () => {
  test("keeps only plan_code and quantity", () => {
    expect(
      sanitizePlanInput({
        plan_code: "pro",
        quantity: 3,
        plan_description: "x",
      })
    ).toEqual({ plan_code: "pro", quantity: 3 })
  })

  test("strips a price override", () => {
    // Zoho: "If a value is provided here, the plan's price for this
    // subscription will be changed to the given value." Forwarding this would
    // let a caller buy the Pro plan for nothing.
    const plan = sanitizePlanInput({ plan_code: "pro", price: 0 })
    expect(plan).toEqual({ plan_code: "pro" })
    expect("price" in plan).toBe(false)
  })

  test("strips setup fee, trial days, and their exclusion flags", () => {
    const plan = sanitizePlanInput({
      plan_code: "pro",
      setup_fee: 0,
      trial_days: 9999,
      exclude_setup_fee: true,
      exclude_trial: false,
      billing_cycles: 1,
      discount: "100%",
      tax_id: "attacker-supplied",
    })
    expect(plan).toEqual({ plan_code: "pro" })
  })

  test("rejects a missing or non-string plan_code", () => {
    expect(() => sanitizePlanInput({})).toThrow(ZohoBillingInputError)
    expect(() => sanitizePlanInput({ plan_code: 42 })).toThrow(
      ZohoBillingInputError
    )
    expect(() => sanitizePlanInput(null)).toThrow(ZohoBillingInputError)
  })

  test("rejects an over-long plan_code", () => {
    expect(() => sanitizePlanInput({ plan_code: "x".repeat(500) })).toThrow(
      ZohoBillingInputError
    )
  })

  test("rejects abusive quantities", () => {
    // A negative quantity can produce a negative line total, i.e. a credit.
    expect(() => sanitizePlanInput({ plan_code: "pro", quantity: -1 })).toThrow(
      ZohoBillingInputError
    )
    expect(() => sanitizePlanInput({ plan_code: "pro", quantity: 0 })).toThrow(
      ZohoBillingInputError
    )
    expect(() =>
      sanitizePlanInput({ plan_code: "pro", quantity: 1.5 })
    ).toThrow(ZohoBillingInputError)
    expect(() =>
      sanitizePlanInput({ plan_code: "pro", quantity: MAX_QUANTITY + 1 })
    ).toThrow(ZohoBillingInputError)
  })

  test("ignores a prototype-polluting key", () => {
    const plan = sanitizePlanInput(
      JSON.parse('{"plan_code":"pro","__proto__":{"price":0}}')
    )
    expect(plan).toEqual({ plan_code: "pro" })
    expect(({} as Record<string, unknown>).price).toBeUndefined()
  })
})

describe("sanitizeAddonsInput", () => {
  test("strips addon price overrides", () => {
    expect(
      sanitizeAddonsInput([{ addon_code: "seats", quantity: 2, price: 0 }])
    ).toEqual([{ addon_code: "seats", quantity: 2 }])
  })

  test("rejects a non-array and over-long lists", () => {
    expect(() => sanitizeAddonsInput({ addon_code: "x" })).toThrow(
      ZohoBillingInputError
    )
    expect(() =>
      sanitizeAddonsInput(
        Array.from({ length: 100 }, () => ({ addon_code: "seats" }))
      )
    ).toThrow(ZohoBillingInputError)
  })

  test("treats an absent list as empty", () => {
    expect(sanitizeAddonsInput(undefined)).toEqual([])
  })
})

describe("sanitizeSubscriptionUpdate", () => {
  test("drops customer_id, which would reassign ownership", () => {
    // Zoho's update endpoint accepts customer_id, so forwarding a body would
    // let a caller move a subscription onto another customer.
    const update = sanitizeSubscriptionUpdate({
      plan: { plan_code: "pro" },
      customer_id: "cust_victim",
    })
    expect(update).toEqual({ plan: { plan_code: "pro" } })
    expect("customer_id" in update).toBe(false)
  })

  test("drops exchange_rate, which scales the charged amount", () => {
    const update = sanitizeSubscriptionUpdate({
      plan: { plan_code: "pro" },
      exchange_rate: 0.0001,
    })
    expect("exchange_rate" in update).toBe(false)
  })

  test("drops card_id and payment gateway selection", () => {
    const update = sanitizeSubscriptionUpdate({
      plan: { plan_code: "pro" },
      card_id: "someone-elses-card",
      payment_gateways: [{ payment_gateway: "test_gateway" }],
    })
    expect(update).toEqual({ plan: { plan_code: "pro" } })
  })

  test("keeps end_of_term only when it is a real boolean", () => {
    expect(
      sanitizeSubscriptionUpdate({
        plan: { plan_code: "p" },
        end_of_term: true,
      }).end_of_term
    ).toBe(true)
    // A truthy string must not be coerced into a boolean.
    expect(
      sanitizeSubscriptionUpdate({
        plan: { plan_code: "p" },
        end_of_term: "yes",
      }).end_of_term
    ).toBeUndefined()
  })

  test("rejects an update with nothing actionable in it", () => {
    expect(() => sanitizeSubscriptionUpdate({ card_id: "x" })).toThrow(
      ZohoBillingInputError
    )
  })
})

describe("assertCatalogAllowed", () => {
  test("passes an allowed plan and addon", () => {
    expect(() =>
      assertCatalogAllowed(
        { plan: { plan_code: "pro" }, addons: [{ addon_code: "seats" }] },
        { allowedPlanCodes: ["pro"], allowedAddonCodes: ["seats"] }
      )
    ).not.toThrow()
  })

  test("rejects an internal plan with a 403", () => {
    const error = (() => {
      try {
        assertCatalogAllowed(
          { plan: { plan_code: "staff-free" } },
          { allowedPlanCodes: ["pro"] }
        )
      } catch (e) {
        return e as ZohoBillingInputError
      }
    })()
    expect(error?.message).toBe("plan_not_allowed")
    expect(error?.httpStatus).toBe(403)
  })

  test("rejects an addon outside the allowlist", () => {
    expect(() =>
      assertCatalogAllowed(
        { addons: [{ addon_code: "internal" }] },
        { allowedAddonCodes: ["seats"] }
      )
    ).toThrow("addon_not_allowed")
  })

  test("allows everything when no allowlist is configured", () => {
    expect(() =>
      assertCatalogAllowed({ plan: { plan_code: "anything" } }, {})
    ).not.toThrow()
  })
})

describe("resolveRedirectUrl", () => {
  test("accepts a same-origin https URL", () => {
    expect(
      resolveRedirectUrl(`${ORIGIN}/billing/return`, { requestOrigin: ORIGIN })
    ).toBe(`${ORIGIN}/billing/return`)
  })

  test("blocks an off-origin redirect", () => {
    // Zoho sends the customer here after checkout, so an unchecked value is a
    // phishing hand-off carrying your brand's trust.
    expect(() =>
      resolveRedirectUrl("https://evil.example/steal", {
        requestOrigin: ORIGIN,
      })
    ).toThrow(ZohoBillingInputError)
  })

  test("blocks javascript: and data: URLs", () => {
    for (const candidate of [
      "javascript:alert(1)",
      "data:text/html,<script>alert(1)</script>",
    ]) {
      expect(() =>
        resolveRedirectUrl(candidate, { requestOrigin: ORIGIN })
      ).toThrow(ZohoBillingInputError)
    }
  })

  test("blocks plain http on a public host", () => {
    expect(() =>
      resolveRedirectUrl("http://app.example.com/x", {
        requestOrigin: ORIGIN,
        allowedOrigins: ["http://app.example.com"],
      })
    ).toThrow(ZohoBillingInputError)
  })

  test("allows http on loopback for local development", () => {
    expect(
      resolveRedirectUrl("http://localhost:3000/return", {
        requestOrigin: "http://localhost:3000",
      })
    ).toBe("http://localhost:3000/return")
  })

  test("honours an explicit origin allowlist", () => {
    expect(
      resolveRedirectUrl("https://portal.example.com/done", {
        requestOrigin: ORIGIN,
        allowedOrigins: ["https://portal.example.com"],
      })
    ).toBe("https://portal.example.com/done")
  })

  test("rejects a relative URL rather than guessing a base", () => {
    expect(() =>
      resolveRedirectUrl("/billing/return", { requestOrigin: ORIGIN })
    ).toThrow(ZohoBillingInputError)
  })

  test("treats an absent redirect as undefined", () => {
    expect(
      resolveRedirectUrl(undefined, { requestOrigin: ORIGIN })
    ).toBeUndefined()
    expect(resolveRedirectUrl("", { requestOrigin: ORIGIN })).toBeUndefined()
  })
})

describe("isOwnedByCustomer", () => {
  test("matches both the nested and flattened owner shapes", () => {
    expect(isOwnedByCustomer({ customer: { customer_id: "c1" } }, "c1")).toBe(
      true
    )
    expect(isOwnedByCustomer({ customer_id: "c1" }, "c1")).toBe(true)
  })

  test("rejects a different customer", () => {
    expect(isOwnedByCustomer({ customer_id: "c2" }, "c1")).toBe(false)
  })

  test("does not match when the owner is missing", () => {
    // Both sides undefined must not compare equal into an accidental pass.
    expect(isOwnedByCustomer({}, "c1")).toBe(false)
    expect(isOwnedByCustomer({ customer: {} }, "c1")).toBe(false)
  })

  test("rejects an empty caller ID", () => {
    expect(isOwnedByCustomer({ customer_id: undefined }, "")).toBe(false)
  })
})
