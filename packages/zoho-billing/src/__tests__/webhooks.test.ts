import { createHmac } from "node:crypto"
import { describe, expect, test } from "bun:test"
import {
  ZohoWebhookVerificationError,
  constructEvent,
  getEventResource,
  isEventType,
  parseWebhookEvent,
  safeCompare,
  verifyWebhookSecret,
  verifyWebhookSignature,
} from "../webhooks"

const EVENT_BODY = JSON.stringify({
  event_id: "evt_1",
  event_type: "subscription_created",
  event_time: "2026-08-03T10:00:00+0000",
  payload: { subscription: { subscription_id: "sub_1", status: "live" } },
})

describe("safeCompare", () => {
  test("matches equal strings and rejects different ones", () => {
    expect(safeCompare("secret", "secret")).toBe(true)
    expect(safeCompare("secret", "secrex")).toBe(false)
  })

  test("handles differing lengths without throwing", () => {
    // timingSafeEqual throws on length mismatch; hashing first avoids that.
    expect(safeCompare("short", "a-much-longer-secret")).toBe(false)
  })
})

describe("verifyWebhookSecret", () => {
  test("accepts a matching secret", () => {
    expect(verifyWebhookSecret({ provided: "abc", expected: "abc" })).toBe(true)
  })

  test("rejects a wrong, missing, or empty secret", () => {
    expect(verifyWebhookSecret({ provided: "xyz", expected: "abc" })).toBe(
      false
    )
    expect(verifyWebhookSecret({ provided: null, expected: "abc" })).toBe(false)
    expect(verifyWebhookSecret({ provided: "", expected: "abc" })).toBe(false)
  })

  test("rejects when no secret is configured", () => {
    // An empty expected secret must never make everything pass.
    expect(verifyWebhookSecret({ provided: "anything", expected: "" })).toBe(
      false
    )
  })
})

describe("verifyWebhookSignature", () => {
  test("accepts a valid HMAC", () => {
    const signature = createHmac("sha256", "shh")
      .update(EVENT_BODY)
      .digest("hex")
    expect(
      verifyWebhookSignature({ payload: EVENT_BODY, signature, secret: "shh" })
    ).toBe(true)
  })

  test("rejects a signature computed over a different body", () => {
    const signature = createHmac("sha256", "shh").update("other").digest("hex")
    expect(
      verifyWebhookSignature({ payload: EVENT_BODY, signature, secret: "shh" })
    ).toBe(false)
  })

  test("rejects an empty signature", () => {
    expect(
      verifyWebhookSignature({
        payload: EVENT_BODY,
        signature: "",
        secret: "shh",
      })
    ).toBe(false)
  })
})

describe("parseWebhookEvent", () => {
  test("parses a JSON body into a typed event", () => {
    const event = parseWebhookEvent(EVENT_BODY)
    expect(event.event_id).toBe("evt_1")
    expect(event.event_type).toBe("subscription_created")
  })

  test("accepts a Buffer body", () => {
    expect(parseWebhookEvent(Buffer.from(EVENT_BODY)).event_id).toBe("evt_1")
  })

  test("throws on malformed JSON", () => {
    expect(() => parseWebhookEvent("{not json")).toThrow(
      ZohoWebhookVerificationError
    )
  })

  test("throws on a non-object body", () => {
    expect(() => parseWebhookEvent("42")).toThrow(ZohoWebhookVerificationError)
  })
})

describe("constructEvent", () => {
  test("parses without verification when no secret is configured", () => {
    expect(constructEvent({ payload: EVENT_BODY }).event_id).toBe("evt_1")
  })

  test("accepts a matching shared secret", () => {
    const event = constructEvent({
      payload: EVENT_BODY,
      secret: "shh",
      providedSecret: "shh",
    })
    expect(event.event_id).toBe("evt_1")
  })

  test("throws when the shared secret does not match", () => {
    expect(() =>
      constructEvent({
        payload: EVENT_BODY,
        secret: "shh",
        providedSecret: "wrong",
      })
    ).toThrow(ZohoWebhookVerificationError)
  })

  test("throws when a secret is expected but none is presented", () => {
    expect(() =>
      constructEvent({ payload: EVENT_BODY, secret: "shh" })
    ).toThrow(ZohoWebhookVerificationError)
  })

  test("verifies via signature when one is supplied", () => {
    const signature = createHmac("sha256", "shh")
      .update(EVENT_BODY)
      .digest("hex")
    expect(
      constructEvent({ payload: EVENT_BODY, secret: "shh", signature }).event_id
    ).toBe("evt_1")
  })

  test("throws on a bad signature even if the shared secret would match", () => {
    // A present-but-wrong signature must fail closed, not silently fall back
    // to the weaker shared-secret path.
    expect(() =>
      constructEvent({
        payload: EVENT_BODY,
        secret: "shh",
        providedSecret: "shh",
        signature: "deadbeef",
      })
    ).toThrow(ZohoWebhookVerificationError)
  })
})

describe("event helpers", () => {
  test("isEventType narrows on event_type", () => {
    const event = parseWebhookEvent(EVENT_BODY)
    expect(isEventType(event, "subscription_created")).toBe(true)
    expect(isEventType(event, "subscription_cancelled")).toBe(false)
  })

  test("getEventResource pulls the nested resource", () => {
    const event = parseWebhookEvent(EVENT_BODY)
    expect(getEventResource(event, "subscription")?.subscription_id).toBe(
      "sub_1"
    )
    expect(getEventResource(event, "invoice")).toBeUndefined()
  })
})
