/**
 * Webhook handling for Zoho Billing.
 *
 * ## An important difference from Stripe
 *
 * Stripe signs every webhook body with an HMAC and ships a `Stripe-Signature`
 * header, so you can prove a payload came from Stripe and was not modified.
 * **Zoho Billing does not do this.** Zoho's webhook configuration lets you add
 * HTTP Basic auth, custom headers, or query parameters to the URL it calls,
 * and that is the whole of the authentication story.
 *
 * So authenticity here rests on a shared secret you configure on the Zoho side
 * and check on yours. That is weaker than a signature - it proves the caller
 * knows the secret, not that the body is unmodified - which has consequences:
 *
 * - Serve the endpoint over HTTPS only. The secret is sent in clear text.
 * - Rotate the secret if it leaks; unlike a signature, anyone holding it can
 *   forge any payload they like.
 * - Treat the payload as a *notification*, not as truth. For anything that
 *   grants access or moves money, re-fetch the resource from the API using the
 *   ID in the payload and act on what the API returns.
 *
 * `verifyWebhookSignature` is provided for setups that put an HMAC-signing
 * proxy (API gateway, Cloudflare Worker) in front of the endpoint. It is not
 * something Zoho itself provides.
 */

import { createHash, createHmac, timingSafeEqual } from "node:crypto"
import { ZohoBillingError } from "./errors"
import type { ZohoEvent, ZohoEventPayload, ZohoEventType } from "./types/event"

export class ZohoWebhookVerificationError extends ZohoBillingError {
  constructor(message: string) {
    super(message)
    this.name = "ZohoWebhookVerificationError"
  }
}

/**
 * Compare two secrets without leaking their contents through timing.
 *
 * Both sides are hashed to a fixed 32 bytes first, so `timingSafeEqual` never
 * throws on a length mismatch - and the length itself stops being a side
 * channel.
 */
export function safeCompare(a: string, b: string): boolean {
  const hashA = createHash("sha256").update(a, "utf8").digest()
  const hashB = createHash("sha256").update(b, "utf8").digest()
  return timingSafeEqual(hashA, hashB)
}

export interface VerifyWebhookSecretOptions {
  /**
   * The secret presented by the caller: read it from the header or query
   * parameter you configured in Zoho's webhook settings.
   */
  provided: string | null | undefined
  /** The secret you expect, from your environment. */
  expected: string
}

/**
 * Check a shared secret sent by Zoho against the one you configured.
 *
 * Returns `false` rather than throwing when the secret is absent, so callers
 * can respond 401 uniformly.
 */
export function verifyWebhookSecret({
  provided,
  expected,
}: VerifyWebhookSecretOptions): boolean {
  if (!provided || !expected) return false
  return safeCompare(provided, expected)
}

export interface VerifyWebhookSignatureOptions {
  /** Raw request body, exactly as received. Do not re-serialise it. */
  payload: string
  /** Hex-encoded HMAC from the request header. */
  signature: string
  secret: string
  algorithm?: "sha256" | "sha512"
}

/**
 * Verify an HMAC over the raw body.
 *
 * Only useful when something in front of your endpoint signs the request -
 * Zoho Billing does not sign webhooks itself. See the module doc above.
 */
export function verifyWebhookSignature({
  payload,
  signature,
  secret,
  algorithm = "sha256",
}: VerifyWebhookSignatureOptions): boolean {
  if (!signature || !secret) return false
  const expected = createHmac(algorithm, secret)
    .update(payload, "utf8")
    .digest("hex")
  return safeCompare(signature.trim().toLowerCase(), expected)
}

/**
 * Parse a raw webhook body into a typed event.
 *
 * Throws on malformed JSON so a bad body surfaces as a 400 rather than an
 * undefined field somewhere downstream.
 */
export function parseWebhookEvent(payload: string | Buffer): ZohoEvent {
  const text = typeof payload === "string" ? payload : payload.toString("utf8")
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    throw new ZohoWebhookVerificationError("Webhook body was not valid JSON.")
  }

  if (!parsed || typeof parsed !== "object") {
    throw new ZohoWebhookVerificationError(
      "Webhook body was not a JSON object."
    )
  }

  return parsed as ZohoEvent
}

export interface ConstructEventOptions {
  payload: string | Buffer
  /** Shared secret presented by the caller, if you configured one. */
  providedSecret?: string | null
  /** Expected shared secret. When set, a mismatch throws. */
  secret?: string
  /** HMAC from a signing proxy, if you have one in front. */
  signature?: string | null
}

/**
 * Verify and parse a webhook in one step - the rough equivalent of Stripe's
 * `constructEvent`.
 *
 * When `secret` is supplied, the caller must present it (via `providedSecret`
 * or a matching `signature`) or this throws.
 */
export function constructEvent({
  payload,
  providedSecret,
  secret,
  signature,
}: ConstructEventOptions): ZohoEvent {
  if (secret) {
    const text =
      typeof payload === "string" ? payload : payload.toString("utf8")
    const ok = signature
      ? verifyWebhookSignature({ payload: text, signature, secret })
      : verifyWebhookSecret({ provided: providedSecret, expected: secret })
    if (!ok) {
      throw new ZohoWebhookVerificationError(
        "Webhook authentication failed: shared secret or signature did not match."
      )
    }
  }
  return parseWebhookEvent(payload)
}

/** Narrow an event to a specific type, for exhaustive switch handling. */
export function isEventType<T extends ZohoEventType>(
  event: ZohoEvent,
  type: T
): event is ZohoEvent & { event_type: T } {
  return event.event_type === type
}

/** Pull the resource an event carries, e.g. `getEventResource(e, "subscription")`. */
export function getEventResource<K extends keyof ZohoEventPayload>(
  event: ZohoEvent,
  key: K
): ZohoEventPayload[K] | undefined {
  return event.payload?.[key]
}
