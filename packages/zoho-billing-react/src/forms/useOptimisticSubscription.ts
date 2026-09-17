"use client"

import { useOptimistic } from "react"
import type {
  ZohoSubscription,
  ZohoSubscriptionStatus,
} from "@dipakparmar/zoho-billing/types"

/** Intents a customer can express from the UI. */
export type SubscriptionIntent =
  | "cancel"
  | "cancel_now"
  | "reactivate"
  | "pause"
  | "resume"

/**
 * Status a subscription will land in if an intent succeeds.
 *
 * `cancel` maps to `non_renewing`, not `cancelled`: cancelling at period end
 * leaves the customer with the access they already paid for, and showing
 * "Cancelled" immediately would misrepresent what they still have.
 */
const OPTIMISTIC_STATUS: Record<SubscriptionIntent, ZohoSubscriptionStatus> = {
  cancel: "non_renewing",
  cancel_now: "cancelled",
  reactivate: "live",
  pause: "paused",
  resume: "live",
}

/**
 * Optimistically reflect a pending subscription change.
 *
 * Billing round-trips are slow - Zoho, then often a payment gateway - so a
 * button that sits inert for two seconds reads as broken and gets clicked
 * again. React reverts the optimistic value automatically when the action
 * settles, so a failure needs no rollback code here.
 *
 * ```tsx
 * const [optimistic, applyIntent] = useOptimisticSubscription(subscription)
 * <form action={(fd) => { applyIntent("cancel"); return cancelAction(fd) }}>
 * ```
 *
 * This is presentation only. Entitlement must still be decided server-side.
 */
export function useOptimisticSubscription(
  subscription: ZohoSubscription | undefined
): [ZohoSubscription | undefined, (intent: SubscriptionIntent) => void] {
  return useOptimistic(
    subscription,
    (current, intent: SubscriptionIntent): ZohoSubscription | undefined => {
      if (!current) return current
      return { ...current, status: OPTIMISTIC_STATUS[intent] ?? current.status }
    }
  )
}
