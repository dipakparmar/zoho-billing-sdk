/**
 * React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.
 *
 * Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
 * package entry stays on React 18, so an app on 18 can still use the client
 * hooks without pulling these in.
 *
 * Client-safe: nothing here imports the server module, so no Node builtins
 * reach the browser bundle.
 */

export {
  CancelSubscriptionForm,
  ChangePlanForm,
  ReactivateSubscriptionForm,
  SubscriptionSubmitButton,
  type CancelSubscriptionFormProps,
  type ChangePlanFormProps,
  type SubscriptionFormProps,
} from "./SubscriptionForms"
export {
  useOptimisticSubscription,
  type SubscriptionIntent,
} from "./useOptimisticSubscription"
export {
  useBillingPromise,
  useSubscriptionPromise,
} from "./useSubscriptionPromise"
export {
  formatActionError,
  IDLE_FORM_STATE,
  type ZohoBillingFormAction,
  type ZohoBillingFormState,
} from "./types"
