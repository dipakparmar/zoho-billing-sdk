/**
 * Events are Zoho Billing's webhook payloads. `GET /events` also exposes the
 * same records over the API, which is the reliable way to backfill anything a
 * webhook endpoint missed while it was down.
 */

import type { ZohoListParams } from "./common"
import type { ZohoCreditNote, ZohoInvoice, ZohoPayment } from "./billing"
import type { ZohoSubscription } from "./subscription"

/** Every event type Zoho Billing emits, per the official OpenAPI document. */
export type ZohoEventType =
  | "subscription_created"
  | "subscription_activation"
  | "subscription_ahead"
  | "subscription_renewed"
  | "subscription_upgraded"
  | "subscription_downgraded"
  | "subscription_unpaid"
  | "subscription_cancelled"
  | "subscription_cancelling"
  | "subscription_reactivated"
  | "subscription_cancellation_scheduled"
  | "subscription_scheduled_cancellation_removed"
  | "subscription_reactivation_scheduled"
  | "subscription_move_to_free_scheduled"
  | "subscription_expiring"
  | "subscription_expired"
  | "subscription_deleted"
  | "trial_expiring"
  | "billing_date_changed"
  | "invoice_notification"
  | "invoice_updated"
  | "invoice_voided"
  | "creditnote_added"
  | "creditnote_refunded"
  | "creditnote_deleted"
  | "payment_thankyou"
  | "payment_refunded"
  | "payment_declined"
  | "payment_voided"
  | "card_expired"
  | "card_expiring"
  | "card_deleted"
  | "payment_method_added"
  | "payment_method_deleted"
  | "payment_method_updated"
  | "unbilled_charges_added"
  | "unbilled_charges_updated"
  | "unbilled_charges_invoiced"
  | "unbilled_charges_deleted"
  | (string & {})

/** Payload bodies keyed by the resource Zoho nests under `data`. */
export interface ZohoEventPayload {
  subscription?: ZohoSubscription
  invoice?: ZohoInvoice
  payment?: ZohoPayment
  creditnote?: ZohoCreditNote
  [key: string]: unknown
}

export interface ZohoEvent {
  event_id: string
  event_type?: ZohoEventType
  event_time?: string
  /** Resource snapshot at the time the event fired. */
  payload?: ZohoEventPayload
  [key: string]: unknown
}

export interface ListEventsParams extends ZohoListParams {
  event_type?: ZohoEventType
  /** `yyyy-mm-dd`. */
  from_date?: string
  to_date?: string
}

export interface ZohoWebhookEndpoint {
  webhook_id: string
  url?: string
  status?: string
  last_updated_time?: string
  [key: string]: unknown
}
