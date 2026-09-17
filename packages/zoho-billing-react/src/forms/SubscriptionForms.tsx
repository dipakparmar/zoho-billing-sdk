"use client"

import { useActionState, useEffect, useRef } from "react"
// useFormStatus ships in react-dom, not react.
import { useFormStatus } from "react-dom"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import {
  IDLE_FORM_STATE,
  formatActionError,
  type ZohoBillingFormAction,
  type ZohoBillingFormState,
} from "./types"

/**
 * Submit button that disables itself while its parent form is in flight.
 *
 * `useFormStatus` reads the *parent* form's state, so this has to be its own
 * component - calling the hook in the component that renders `<form>` always
 * reports `pending: false`, which is the classic way to ship a
 * double-submittable billing button.
 */
export function SubscriptionSubmitButton({
  children,
  pendingLabel = "Working...",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  pendingLabel?: ReactNode
}) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending || props.disabled} {...props}>
      {pending ? pendingLabel : children}
    </button>
  )
}

export interface SubscriptionFormProps {
  /** A Server Action re-exported from your own `"use server"` module. */
  action: ZohoBillingFormAction
  subscriptionId: string
  children?: ReactNode
  className?: string
  /** Called once the action reports success. */
  onSuccess?: () => void
  /** Render your own error UI instead of the default paragraph. */
  renderError?: (message: string) => ReactNode
}

/**
 * Base form wiring an action to `useActionState`.
 *
 * The subscription ID travels as a hidden field, but the server does not trust
 * it: every action re-resolves the session and re-checks ownership before
 * mutating. Tampering with this input gets a `not_found`.
 */
function SubscriptionActionForm({
  action,
  subscriptionId,
  children,
  className,
  onSuccess,
  renderError,
  hiddenFields,
}: SubscriptionFormProps & { hiddenFields?: Record<string, string> }) {
  const [state, formAction] = useActionState<ZohoBillingFormState, FormData>(
    action,
    IDLE_FORM_STATE
  )

  // Fired from an effect, not during render. Calling onSuccess inline would
  // run on every subsequent render too, so a parent that refreshes or
  // navigates on success would do it repeatedly.
  const notifiedRef = useRef(false)
  useEffect(() => {
    if (state.status !== "success") {
      notifiedRef.current = false
      return
    }
    if (notifiedRef.current) return
    notifiedRef.current = true
    onSuccess?.()
  }, [state.status, onSuccess])

  const message = state.status === "error" ? formatActionError(state.error) : ""

  return (
    <form action={formAction} className={className}>
      <input type="hidden" name="subscription_id" value={subscriptionId} />
      {Object.entries(hiddenFields ?? {}).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      {children}
      {message
        ? (renderError?.(message) ?? (
            <p role="alert" data-zoho-billing-error>
              {message}
            </p>
          ))
        : null}
    </form>
  )
}

export interface CancelSubscriptionFormProps extends SubscriptionFormProps {
  /**
   * `true` (default) cancels at the end of the paid term. `false` cuts access
   * off immediately - make that an explicit, confirmed choice in the UI.
   */
  cancelAtEnd?: boolean
}

export function CancelSubscriptionForm({
  cancelAtEnd = true,
  children,
  ...props
}: CancelSubscriptionFormProps) {
  return (
    <SubscriptionActionForm
      {...props}
      hiddenFields={{ cancel_at_end: String(cancelAtEnd) }}
    >
      {children ?? (
        <SubscriptionSubmitButton pendingLabel="Cancelling...">
          {cancelAtEnd ? "Cancel at period end" : "Cancel immediately"}
        </SubscriptionSubmitButton>
      )}
    </SubscriptionActionForm>
  )
}

export function ReactivateSubscriptionForm({
  children,
  ...props
}: SubscriptionFormProps) {
  return (
    <SubscriptionActionForm {...props}>
      {children ?? (
        <SubscriptionSubmitButton pendingLabel="Reactivating...">
          Reactivate
        </SubscriptionSubmitButton>
      )}
    </SubscriptionActionForm>
  )
}

export interface ChangePlanFormProps extends SubscriptionFormProps {
  planCode: string
  quantity?: number
  /**
   * `false` applies the change immediately with proration; `true` defers it to
   * the next renewal. Set it deliberately - the default differs per Zoho org.
   */
  endOfTerm?: boolean
}

export function ChangePlanForm({
  planCode,
  quantity,
  endOfTerm = false,
  children,
  ...props
}: ChangePlanFormProps) {
  return (
    <SubscriptionActionForm
      {...props}
      hiddenFields={{
        plan_code: planCode,
        end_of_term: String(endOfTerm),
        ...(quantity ? { quantity: String(quantity) } : {}),
      }}
    >
      {children ?? (
        <SubscriptionSubmitButton pendingLabel="Updating...">
          Switch plan
        </SubscriptionSubmitButton>
      )}
    </SubscriptionActionForm>
  )
}
