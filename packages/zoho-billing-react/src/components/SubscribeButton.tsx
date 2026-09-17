"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { useHostedPageCheckout } from "../hooks/useHostedPage"

interface BaseProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onError"
> {
  /** Where Zoho returns the customer after checkout. */
  redirectUrl?: string
  /** Rendered while the hosted page is being created. */
  pendingLabel?: ReactNode
  onError?: (error: unknown) => void
}

export interface SubscribeButtonProps extends BaseProps {
  planCode: string
  quantity?: number
  couponCode?: string
  addons?: { addon_code: string; quantity?: number }[]
  children?: ReactNode
}

/**
 * Starts a Zoho hosted-page checkout for a plan.
 *
 * Unstyled by design: pass `className` and children and it will inherit
 * whatever design system the host app uses.
 */
export function SubscribeButton({
  planCode,
  quantity,
  couponCode,
  addons,
  redirectUrl,
  pendingLabel = "Redirecting...",
  onError,
  children = "Subscribe",
  disabled,
  ...buttonProps
}: SubscribeButtonProps) {
  const { checkout, isPending } = useHostedPageCheckout()

  return (
    <button
      type="button"
      disabled={disabled || isPending}
      onClick={() => {
        void checkout({
          kind: "new-subscription",
          plan: { plan_code: planCode, ...(quantity ? { quantity } : {}) },
          addons,
          coupon_code: couponCode,
          redirect_url: redirectUrl,
        }).catch((error: unknown) => {
          // Without a handler this would be an unhandled rejection, and the
          // button would silently sit there after a failed redirect.
          if (onError) onError(error)
          else console.error("[zoho-billing] checkout failed", error)
        })
      }}
      {...buttonProps}
    >
      {isPending ? pendingLabel : children}
    </button>
  )
}

export interface ManagePaymentMethodButtonProps extends BaseProps {
  children?: ReactNode
}

/** Opens Zoho's hosted page for updating the stored card. */
export function ManagePaymentMethodButton({
  redirectUrl,
  pendingLabel = "Redirecting...",
  onError,
  children = "Update payment method",
  disabled,
  ...buttonProps
}: ManagePaymentMethodButtonProps) {
  const { checkout, isPending } = useHostedPageCheckout()

  return (
    <button
      type="button"
      disabled={disabled || isPending}
      onClick={() => {
        void checkout({
          kind: "update-card",
          redirect_url: redirectUrl,
        }).catch((error: unknown) => {
          if (onError) onError(error)
          else console.error("[zoho-billing] checkout failed", error)
        })
      }}
      {...buttonProps}
    >
      {isPending ? pendingLabel : children}
    </button>
  )
}
