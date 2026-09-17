# forms

## Interfaces

### CancelSubscriptionFormProps

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:104

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Extends

- [`SubscriptionFormProps`](#subscriptionformprops)

#### Properties

##### action

```ts
action: ZohoBillingFormAction;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:39

A Server Action re-exported from your own `"use server"` module.

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`action`](#action-2)

##### cancelAtEnd?

```ts
optional cancelAtEnd?: boolean;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:109

`true` (default) cancels at the end of the paid term. `false` cuts access
off immediately - make that an explicit, confirmed choice in the UI.

##### children?

```ts
optional children?: ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:41

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`children`](#children-2)

##### className?

```ts
optional className?: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:42

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`className`](#classname-2)

##### onSuccess?

```ts
optional onSuccess?: () => void;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:44

Called once the action reports success.

###### Returns

`void`

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`onSuccess`](#onsuccess-2)

##### renderError?

```ts
optional renderError?: (message) => ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:46

Render your own error UI instead of the default paragraph.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

`ReactNode`

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`renderError`](#rendererror-2)

##### subscriptionId

```ts
subscriptionId: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:40

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`subscriptionId`](#subscriptionid-2)

***

### ChangePlanFormProps

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:146

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Extends

- [`SubscriptionFormProps`](#subscriptionformprops)

#### Properties

##### action

```ts
action: ZohoBillingFormAction;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:39

A Server Action re-exported from your own `"use server"` module.

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`action`](#action-2)

##### children?

```ts
optional children?: ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:41

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`children`](#children-2)

##### className?

```ts
optional className?: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:42

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`className`](#classname-2)

##### endOfTerm?

```ts
optional endOfTerm?: boolean;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:153

`false` applies the change immediately with proration; `true` defers it to
the next renewal. Set it deliberately - the default differs per Zoho org.

##### onSuccess?

```ts
optional onSuccess?: () => void;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:44

Called once the action reports success.

###### Returns

`void`

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`onSuccess`](#onsuccess-2)

##### planCode

```ts
planCode: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:147

##### quantity?

```ts
optional quantity?: number;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:148

##### renderError?

```ts
optional renderError?: (message) => ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:46

Render your own error UI instead of the default paragraph.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

`ReactNode`

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`renderError`](#rendererror-2)

##### subscriptionId

```ts
subscriptionId: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:40

###### Inherited from

[`SubscriptionFormProps`](#subscriptionformprops).[`subscriptionId`](#subscriptionid-2)

***

### SubscriptionFormProps

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:37

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Extended by

- [`CancelSubscriptionFormProps`](#cancelsubscriptionformprops)
- [`ChangePlanFormProps`](#changeplanformprops)

#### Properties

##### action

```ts
action: ZohoBillingFormAction;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:39

A Server Action re-exported from your own `"use server"` module.

##### children?

```ts
optional children?: ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:41

##### className?

```ts
optional className?: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:42

##### onSuccess?

```ts
optional onSuccess?: () => void;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:44

Called once the action reports success.

###### Returns

`void`

##### renderError?

```ts
optional renderError?: (message) => ReactNode;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:46

Render your own error UI instead of the default paragraph.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

`ReactNode`

##### subscriptionId

```ts
subscriptionId: string;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:40

## Type Aliases

### SubscriptionIntent

```ts
type SubscriptionIntent = "cancel" | "cancel_now" | "reactivate" | "pause" | "resume";
```

Defined in: packages/zoho-billing-react/src/forms/useOptimisticSubscription.ts:10

Intents a customer can express from the UI.

***

### ZohoBillingFormAction

```ts
type ZohoBillingFormAction<T> = (previousState, formData) => Promise<ZohoBillingFormState<T>>;
```

Defined in: packages/zoho-billing-react/src/forms/types.ts:18

Signature a Server Action must have to drive `useActionState`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `ZohoSubscription` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingFormState`](#zohobillingformstate)\<`T`\> |
| `formData` | `FormData` |

#### Returns

`Promise`\<[`ZohoBillingFormState`](#zohobillingformstate)\<`T`\>\>

***

### ZohoBillingFormState

```ts
type ZohoBillingFormState<T> = 
  | {
  status: "idle";
}
  | {
  data: T;
  error?: undefined;
  status: "success";
}
  | {
  data?: undefined;
  error: string;
  status: "error";
};
```

Defined in: packages/zoho-billing-react/src/forms/types.ts:10

Result shape returned by the Server Actions.

Redeclared here, structurally identical to the one in `../server/actions`,
so client components can type against it without importing the server
module - which would pull `node:crypto` into the browser bundle.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `ZohoSubscription` |

## Variables

### IDLE\_FORM\_STATE

```ts
const IDLE_FORM_STATE: ZohoBillingFormState;
```

Defined in: packages/zoho-billing-react/src/forms/types.ts:15

***

### useBillingPromise

```ts
const useBillingPromise: <T>(promise) => T = useSubscriptionPromise;
```

Defined in: packages/zoho-billing-react/src/forms/useSubscriptionPromise.ts:41

Alias for readability when the promise is not subscription-shaped.

Unwrap a promise handed down from a Server Component.

The pattern this enables: a server component *starts* the Zoho request but
does not await it, passes the promise to a client component, and the client
unwraps it inside a Suspense boundary. The page shells out immediately
instead of blocking on a billing round-trip that can take seconds.

```tsx
// page.tsx (server)
export default function Page() {
  const subscriptionsPromise = billing.getSubscriptions() // no await
  return (
    <Suspense fallback={<Skeleton />}>
      <SubscriptionList promise={subscriptionsPromise} />
    </Suspense>
  )
}

// SubscriptionList.tsx (client)
"use client"
export function SubscriptionList({ promise }) {
  const subscriptions = useSubscriptionPromise(promise)
}
```

Two things to know. The promise must be created in the server component's
render, not inside the client component - one created during a client render
is a new promise each time and suspends forever. And a rejection propagates
to the nearest error boundary, so pair the Suspense boundary with one.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `promise` | `Promise`\<`T`\> |

#### Returns

`T`

## Functions

### CancelSubscriptionForm()

```ts
function CancelSubscriptionForm(__namedParameters): Element;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:112

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CancelSubscriptionFormProps`](#cancelsubscriptionformprops) |

#### Returns

`Element`

***

### ChangePlanForm()

```ts
function ChangePlanForm(__namedParameters): Element;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:156

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChangePlanFormProps`](#changeplanformprops) |

#### Returns

`Element`

***

### formatActionError()

```ts
function formatActionError(error): string;
```

Defined in: packages/zoho-billing-react/src/forms/types.ts:29

Map an action's error slug to a message for the customer.

The slugs are deliberately coarse: the server never returns Zoho's own text,
so this is the only place user-facing wording is decided.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `undefined` |

#### Returns

`string`

***

### ReactivateSubscriptionForm()

```ts
function ReactivateSubscriptionForm(__namedParameters): Element;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:131

React 19 form bindings: `@dipakparmar/zoho-billing-react/forms`.

Requires React 19 (`useActionState`, `useOptimistic`, `use`). The base
package entry stays on React 18, so an app on 18 can still use the client
hooks without pulling these in.

Client-safe: nothing here imports the server module, so no Node builtins
reach the browser bundle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`SubscriptionFormProps`](#subscriptionformprops) |

#### Returns

`Element`

***

### SubscriptionSubmitButton()

```ts
function SubscriptionSubmitButton(__namedParameters): Element;
```

Defined in: packages/zoho-billing-react/src/forms/SubscriptionForms.tsx:22

Submit button that disables itself while its parent form is in flight.

`useFormStatus` reads the *parent* form's state, so this has to be its own
component - calling the hook in the component that renders `<form>` always
reports `pending: false`, which is the classic way to ship a
double-submittable billing button.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ButtonHTMLAttributes`\<`HTMLButtonElement`\> & \{ `pendingLabel?`: `ReactNode`; \} |

#### Returns

`Element`

***

### useOptimisticSubscription()

```ts
function useOptimisticSubscription(subscription): [ZohoSubscription | undefined, (intent) => void];
```

Defined in: packages/zoho-billing-react/src/forms/useOptimisticSubscription.ts:47

Optimistically reflect a pending subscription change.

Billing round-trips are slow - Zoho, then often a payment gateway - so a
button that sits inert for two seconds reads as broken and gets clicked
again. React reverts the optimistic value automatically when the action
settles, so a failure needs no rollback code here.

```tsx
const [optimistic, applyIntent] = useOptimisticSubscription(subscription)
<form action={(fd) => { applyIntent("cancel"); return cancelAction(fd) }}>
```

This is presentation only. Entitlement must still be decided server-side.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscription` | `ZohoSubscription` \| `undefined` |

#### Returns

\[`ZohoSubscription` \| `undefined`, (`intent`) => `void`\]

***

### useSubscriptionPromise()

```ts
function useSubscriptionPromise<T>(promise): T;
```

Defined in: packages/zoho-billing-react/src/forms/useSubscriptionPromise.ts:36

Unwrap a promise handed down from a Server Component.

The pattern this enables: a server component *starts* the Zoho request but
does not await it, passes the promise to a client component, and the client
unwraps it inside a Suspense boundary. The page shells out immediately
instead of blocking on a billing round-trip that can take seconds.

```tsx
// page.tsx (server)
export default function Page() {
  const subscriptionsPromise = billing.getSubscriptions() // no await
  return (
    <Suspense fallback={<Skeleton />}>
      <SubscriptionList promise={subscriptionsPromise} />
    </Suspense>
  )
}

// SubscriptionList.tsx (client)
"use client"
export function SubscriptionList({ promise }) {
  const subscriptions = useSubscriptionPromise(promise)
}
```

Two things to know. The promise must be created in the server component's
render, not inside the client component - one created during a client render
is a new promise each time and suspends forever. And a rejection propagates
to the nearest error boundary, so pair the Suspense boundary with one.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `promise` | `Promise`\<`T`\> |

#### Returns

`T`
