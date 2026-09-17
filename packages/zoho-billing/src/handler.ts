/**
 * A framework-agnostic backend endpoint for the React package.
 *
 * Zoho credentials must never reach a browser, so the React hooks in
 * `@dipakparmar/zoho-billing-react` do not call Zoho directly - they call your
 * app, and your app mounts this handler. It speaks the Web `Request`/`Response`
 * API, so it drops into Next.js route handlers, Hono, Bun.serve, Deno, and
 * anything else built on fetch.
 *
 * ```ts
 * // app/api/billing/[...route]/route.ts
 * const handler = createZohoBillingHandler({
 *   zoho,
 *   basePath: "/api/billing",
 *   authorize: async (request) => {
 *     const session = await auth.api.getSession({ headers: request.headers })
 *     if (!session) return null
 *     return { customerId: session.user.zohoCustomerId }
 *   },
 * })
 * export const GET = handler
 * export const POST = handler
 * ```
 *
 * ## Trust boundary
 *
 * Everything past `authorize` is treated as hostile input. In particular no
 * client-supplied body is ever forwarded to Zoho as-is: bodies go through the
 * deny-by-default allowlists in `./security`, because much of Zoho's
 * subscription body is pricing input (`plan.price`, `setup_fee`, `trial_days`,
 * `exchange_rate`) and `customer_id` on update reassigns ownership.
 */

import type { ZohoBilling } from "./index"
import { ZohoBillingError } from "./errors"
import {
  ZohoBillingInputError,
  assertCatalogAllowed,
  isOwnedByCustomer,
  resolveRedirectUrl,
  sanitizeAddonsInput,
  sanitizeCouponCode,
  sanitizePlanInput,
  sanitizeSubscriptionUpdate,
  type CatalogAllowlist,
} from "./security"
import type { ListInvoicesParams } from "./types/billing"

/** Identity of the caller, resolved from your own session. */
export interface ZohoBillingSession {
  /**
   * Zoho customer this caller is allowed to act on. Every route is scoped to
   * it; there is no way for a caller to reach another customer's data.
   */
  customerId: string
}

export interface ZohoBillingHandlerOptions extends CatalogAllowlist {
  zoho: ZohoBilling
  /**
   * Path this handler is mounted at, stripped before routing.
   * e.g. `/api/billing`.
   */
  basePath: string
  /**
   * Resolve the caller's Zoho customer from the request, or return `null` to
   * reject with 401. Required - there is deliberately no permissive default,
   * because these routes expose billing data and billing mutations.
   */
  authorize: (
    request: Request
  ) => Promise<ZohoBillingSession | null> | ZohoBillingSession | null
  /**
   * Origins a post-checkout `redirect_url` may point at. Defaults to the
   * origin the request arrived on, which is the safe choice for a same-origin
   * app; set it explicitly if checkout returns to a different host.
   */
  allowedRedirectOrigins?: string[]
  /**
   * Forward Zoho's own error text to the client. Zoho's messages are written
   * for the account holder and can name internal plan or org details, so this
   * defaults to `false` and callers get a generic message plus the numeric
   * code instead.
   */
  exposeUpstreamErrors?: boolean
  /** Called for unexpected failures. Defaults to `console.error`. */
  onError?: (error: unknown, request: Request) => void
}

/**
 * The mounted endpoint: a Web fetch handler. Exported so an app can name it in
 * its own route signatures.
 */
export type ZohoBillingRequestHandler = (request: Request) => Promise<Response>

export function createZohoBillingHandler(
  options: ZohoBillingHandlerOptions
): ZohoBillingRequestHandler {
  const {
    zoho,
    basePath,
    authorize,
    allowedPlanCodes,
    allowedAddonCodes,
    allowedRedirectOrigins,
    exposeUpstreamErrors = false,
    onError,
  } = options
  const normalizedBase = basePath.replace(/\/$/, "")
  const allowlist: CatalogAllowlist = { allowedPlanCodes, allowedAddonCodes }

  return async function handle(request: Request): Promise<Response> {
    try {
      const url = new URL(request.url)
      const route = url.pathname.startsWith(normalizedBase)
        ? url.pathname.slice(normalizedBase.length)
        : url.pathname
      const segments = route.split("/").filter(Boolean)

      const session = await authorize(request)
      if (!session?.customerId) {
        return json({ error: "unauthorized" }, 401)
      }

      return await route_(request, url, segments, session)
    } catch (error) {
      // Rejected client input is the caller's fault and safe to name: these
      // messages are our own short slugs, not Zoho's prose.
      if (error instanceof ZohoBillingInputError) {
        return json({ error: error.message }, error.httpStatus)
      }
      if (error instanceof ZohoBillingError) {
        const status = error.status && error.status >= 400 ? error.status : 502
        return json(
          {
            error: exposeUpstreamErrors ? error.message : "billing_error",
            code: error.code,
          },
          status
        )
      }
      ;(onError ?? defaultOnError)(error, request)
      return json({ error: "internal_error" }, 500)
    }
  }

  async function route_(
    request: Request,
    url: URL,
    segments: string[],
    session: ZohoBillingSession
  ): Promise<Response> {
    const [resource, id, action] = segments
    const method = request.method.toUpperCase()

    // GET /customer
    if (resource === "customer" && !id && method === "GET") {
      return json({
        customer: await zoho.customers.retrieve(session.customerId),
      })
    }

    // GET /plans - catalogue is not customer-scoped.
    if (resource === "plans" && !id && method === "GET") {
      const plans = await zoho.plans.list({
        filter_by: url.searchParams.get("filter_by") ?? "PlanStatus.ACTIVE",
        product_id: url.searchParams.get("product_id") ?? undefined,
      })
      const visible = allowedPlanCodes
        ? plans.filter((plan) => allowedPlanCodes.includes(plan.plan_code))
        : plans
      return json({ plans: visible })
    }

    if (resource === "subscriptions") {
      // GET /subscriptions - forced to this caller's customer_id.
      if (!id && method === "GET") {
        const subscriptions = await zoho.subscriptions.listAll({
          customer_id: session.customerId,
          filter_by: url.searchParams.get("filter_by") ?? undefined,
        })
        return json({ subscriptions })
      }

      if (id) {
        // Load and ownership-check before doing anything else. Checking after
        // a mutation would only block the response, not undo the write.
        const subscription = await zoho.subscriptions.retrieve(id)
        if (!isOwnedByCustomer(subscription, session.customerId)) {
          // 404, not 403: a mismatch should not confirm the ID exists.
          return json({ error: "not_found" }, 404)
        }

        if (!action && method === "GET") return json({ subscription })

        if (!action && method === "PUT") {
          // Deny-by-default. A forwarded body would let the caller set
          // plan.price, skip the setup fee, or hand the subscription to a
          // different customer_id.
          const update = sanitizeSubscriptionUpdate(await readJson(request))
          assertCatalogAllowed(update, allowlist)
          return json({
            subscription: await zoho.subscriptions.update(id, update),
          })
        }

        if (method === "POST") {
          switch (action) {
            case "cancel": {
              const body = await readJson(request)
              return json({
                subscription: await zoho.subscriptions.cancel(id, {
                  // Only an explicit `false` cancels immediately; anything
                  // else keeps the safer end-of-term default.
                  cancel_at_end: body.cancel_at_end !== false,
                }),
              })
            }
            case "reactivate":
              return json({
                subscription: await zoho.subscriptions.reactivate(id),
              })
            case "pause":
              return json({
                subscription: await zoho.subscriptions.pause(
                  id,
                  pickDates(await readJson(request), [
                    "pause_date",
                    "resume_date",
                  ])
                ),
              })
            case "resume":
              return json({
                subscription: await zoho.subscriptions.resume(
                  id,
                  pickDates(await readJson(request), ["resume_date"])
                ),
              })
            default:
              return json({ error: "not_found" }, 404)
          }
        }
      }
    }

    // GET /invoices - scoped to this caller.
    if (resource === "invoices" && !id && method === "GET") {
      const params: ListInvoicesParams = {
        customer_id: session.customerId,
        filter_by: url.searchParams.get("filter_by") ?? undefined,
        per_page: 50,
      }
      const subscriptionId = url.searchParams.get("subscription_id")
      if (subscriptionId) params.subscription_id = subscriptionId
      return json({ invoices: await zoho.invoices.list(params) })
    }

    if (resource === "hosted-pages") {
      if (method === "POST") {
        const body = await readJson(request)
        // Validated before use: an unchecked value here is an open redirect,
        // since Zoho sends the customer to it after checkout.
        const redirectUrl = resolveRedirectUrl(body.redirect_url, {
          allowedOrigins: allowedRedirectOrigins,
          requestOrigin: url.origin,
        })

        if (id === "new-subscription") {
          const plan = sanitizePlanInput(body.plan)
          const addons = sanitizeAddonsInput(body.addons)
          assertCatalogAllowed({ plan, addons }, allowlist)

          const page = await zoho.hostedPages.createSubscriptionPage({
            // Rebuilt field by field rather than spread: the caller's
            // customer_id, exchange_rate, and pricing overrides never survive.
            customer_id: session.customerId,
            plan,
            ...(addons.length > 0 ? { addons } : {}),
            ...(sanitizeCouponCode(body.coupon_code)
              ? { coupon_code: sanitizeCouponCode(body.coupon_code) }
              : {}),
            ...(redirectUrl ? { redirect_url: redirectUrl } : {}),
          })
          return json({ hostedpage: page })
        }

        if (id === "update-card") {
          const page = await zoho.hostedPages.createUpdateCardPage({
            customer_id: session.customerId,
            ...(redirectUrl ? { redirect_url: redirectUrl } : {}),
          })
          return json({ hostedpage: page })
        }

        if (id === "update-subscription") {
          const subscriptionId = body.subscription_id
          if (typeof subscriptionId !== "string" || !subscriptionId) {
            return json({ error: "not_found" }, 404)
          }

          const owned = await zoho.subscriptions.retrieve(subscriptionId)
          if (!isOwnedByCustomer(owned, session.customerId)) {
            return json({ error: "not_found" }, 404)
          }

          const update = sanitizeSubscriptionUpdate(body)
          assertCatalogAllowed(update, allowlist)

          const page = await zoho.hostedPages.createUpdateSubscriptionPage({
            subscription_id: subscriptionId,
            ...update,
            ...(redirectUrl ? { redirect_url: redirectUrl } : {}),
          })
          return json({ hostedpage: page })
        }
      }

      // GET /hosted-pages/:hostedpage_id - poll the outcome after redirect.
      if (id && method === "GET") {
        return json({ hostedpage: await zoho.hostedPages.retrieve(id) })
      }
    }

    return json({ error: "not_found" }, 404)
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      // Billing data is per-customer; a shared cache must never reuse it.
      "Cache-Control": "no-store",
    },
  })
}

/** Keep only `yyyy-mm-dd` date fields, dropping anything else in the body. */
function pickDates(
  body: Record<string, unknown>,
  fields: string[]
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const field of fields) {
    const value = body[field]
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      result[field] = value
    }
  }
  return result
}

/** Tolerant body reader: an absent or malformed body becomes `{}`. */
async function readJson(request: Request): Promise<Record<string, unknown>> {
  try {
    const text = await request.text()
    if (!text) return {}
    const parsed: unknown = JSON.parse(text)
    // A non-object body (array, string, number) would make every property
    // read below silently undefined; treat it as empty instead.
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {}
  } catch {
    return {}
  }
}

function defaultOnError(error: unknown): void {
  console.error("[zoho-billing] handler error", error)
}
