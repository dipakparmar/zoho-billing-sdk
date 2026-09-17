# server

## Classes

### ZohoBillingNotVisibleError

Defined in: [zoho-billing-react/src/server/data.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L42)

Thrown when a resource does not exist *or* belongs to someone else. The two
cases are deliberately indistinguishable so the error cannot be used to
probe for valid IDs. Map to `notFound()`.

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ZohoBillingNotVisibleError(): ZohoBillingNotVisibleError;
```

Defined in: [zoho-billing-react/src/server/data.ts:43](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L43)

###### Returns

[`ZohoBillingNotVisibleError`](#zohobillingnotvisibleerror)

###### Overrides

```ts
Error.constructor
```

***

### ZohoBillingUnauthorizedError

Defined in: [zoho-billing-react/src/server/data.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L30)

Thrown when there is no signed-in customer. Map to a redirect.

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ZohoBillingUnauthorizedError(): ZohoBillingUnauthorizedError;
```

Defined in: [zoho-billing-react/src/server/data.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L31)

###### Returns

[`ZohoBillingUnauthorizedError`](#zohobillingunauthorizederror)

###### Overrides

```ts
Error.constructor
```

## Interfaces

### ZohoBillingActions

Defined in: [zoho-billing-react/src/server/actions.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L90)

#### Properties

##### cancelSubscription

```ts
cancelSubscription: (previousState, formData) => Promise<ZohoBillingActionState<ZohoSubscription>>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingActionState`](#zohobillingactionstate) |
| `formData` | `FormData` |

###### Returns

`Promise`\<[`ZohoBillingActionState`](#zohobillingactionstate)\<`ZohoSubscription`\>\>

##### pauseSubscription

```ts
pauseSubscription: (previousState, formData) => Promise<ZohoBillingActionState<ZohoSubscription>>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingActionState`](#zohobillingactionstate) |
| `formData` | `FormData` |

###### Returns

`Promise`\<[`ZohoBillingActionState`](#zohobillingactionstate)\<`ZohoSubscription`\>\>

##### reactivateSubscription

```ts
reactivateSubscription: (previousState, formData) => Promise<ZohoBillingActionState<ZohoSubscription>>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingActionState`](#zohobillingactionstate) |
| `formData` | `FormData` |

###### Returns

`Promise`\<[`ZohoBillingActionState`](#zohobillingactionstate)\<`ZohoSubscription`\>\>

##### resumeSubscription

```ts
resumeSubscription: (previousState, formData) => Promise<ZohoBillingActionState<ZohoSubscription>>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:103](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingActionState`](#zohobillingactionstate) |
| `formData` | `FormData` |

###### Returns

`Promise`\<[`ZohoBillingActionState`](#zohobillingactionstate)\<`ZohoSubscription`\>\>

##### updateSubscription

```ts
updateSubscription: (previousState, formData) => Promise<ZohoBillingActionState<ZohoSubscription>>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:107](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L107)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `previousState` | [`ZohoBillingActionState`](#zohobillingactionstate) |
| `formData` | `FormData` |

###### Returns

`Promise`\<[`ZohoBillingActionState`](#zohobillingactionstate)\<`ZohoSubscription`\>\>

***

### ZohoBillingActionsOptions

Defined in: [zoho-billing-react/src/server/actions.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L74)

#### Extends

- `CatalogAllowlist`

#### Properties

##### allowedAddonCodes?

```ts
optional allowedAddonCodes?: string[];
```

Defined in: zoho-billing/dist/security.d.ts:46

Addon codes a caller may select. Omit to allow all addons.

###### Inherited from

```ts
CatalogAllowlist.allowedAddonCodes
```

##### allowedPlanCodes?

```ts
optional allowedPlanCodes?: string[];
```

Defined in: zoho-billing/dist/security.d.ts:44

Plan codes a caller may select. Omit to allow the whole catalogue.

###### Inherited from

```ts
CatalogAllowlist.allowedPlanCodes
```

##### onError?

```ts
optional onError?: (error) => void;
```

Defined in: [zoho-billing-react/src/server/actions.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L87)

Called for unexpected failures. Defaults to `console.error`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`void`

##### resolveSession

```ts
resolveSession: () => 
  | ZohoBillingServerSession
  | Promise<ZohoBillingServerSession | null>
  | null;
```

Defined in: [zoho-billing-react/src/server/actions.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L76)

###### Returns

  \| [`ZohoBillingServerSession`](#zohobillingserversession)
  \| `Promise`\<[`ZohoBillingServerSession`](#zohobillingserversession) \| `null`\>
  \| `null`

##### revalidate?

```ts
optional revalidate?: (tag) => void | Promise<void>;
```

Defined in: [zoho-billing-react/src/server/actions.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L85)

Invalidate a cache tag after a successful write. In Next, pass
`(tag) => revalidateTag(tag)`. Tags come from `./tags`, so they always
match what the read path applied.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

##### zoho

```ts
zoho: ZohoBilling;
```

Defined in: [zoho-billing-react/src/server/actions.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L75)

***

### ZohoBillingCacheAdapter

Defined in: [zoho-billing-react/src/server/data.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L59)

Hooks into a framework's tag-based cache.

Kept as adapters so this package does not hard-depend on Next.js. In a Next
app, pass `cacheTag` from `next/cache` as `tag`.

#### Properties

##### tag?

```ts
optional tag?: (...tags) => void;
```

Defined in: [zoho-billing-react/src/server/data.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L61)

Tag the surrounding `use cache` scope.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`tags` | `string`[] |

###### Returns

`void`

***

### ZohoBillingServer

Defined in: [zoho-billing-react/src/server/data.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L79)

Server-only entry: `@dipakparmar/zoho-billing-react/server`.

Kept out of the package's main barrel on purpose. This module reaches
`@dipakparmar/zoho-billing` and therefore `node:crypto`; exporting it from the
client barrel would pull Node builtins into the browser bundle and break the
production build with an error that points somewhere unrelated.

#### Properties

##### getCustomer

```ts
getCustomer: () => Promise<ZohoCustomer>;
```

Defined in: [zoho-billing-react/src/server/data.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L84)

###### Returns

`Promise`\<`ZohoCustomer`\>

##### getInvoices

```ts
getInvoices: (options?) => Promise<ZohoInvoice[]>;
```

Defined in: [zoho-billing-react/src/server/data.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L88)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `subscriptionId?`: `string`; \} |
| `options.subscriptionId?` | `string` |

###### Returns

`Promise`\<`ZohoInvoice`[]\>

##### getPlans

```ts
getPlans: (options?) => Promise<ZohoPlan[]>;
```

Defined in: [zoho-billing-react/src/server/data.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `productId?`: `string`; \} |
| `options.productId?` | `string` |

###### Returns

`Promise`\<`ZohoPlan`[]\>

##### getSession

```ts
getSession: () => Promise<ZohoBillingServerSession | null>;
```

Defined in: [zoho-billing-react/src/server/data.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L81)

The current session, or `null`. Deduped per request.

###### Returns

`Promise`\<[`ZohoBillingServerSession`](#zohobillingserversession) \| `null`\>

##### getSubscription

```ts
getSubscription: (subscriptionId) => Promise<ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/server/data.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L87)

One subscription, or `ZohoBillingNotVisibleError` if not the caller's.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<`ZohoSubscription`\>

##### getSubscriptions

```ts
getSubscriptions: () => Promise<ZohoSubscription[]>;
```

Defined in: [zoho-billing-react/src/server/data.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L85)

###### Returns

`Promise`\<`ZohoSubscription`[]\>

##### requireSession

```ts
requireSession: () => Promise<ZohoBillingServerSession>;
```

Defined in: [zoho-billing-react/src/server/data.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L83)

The current session, throwing `ZohoBillingUnauthorizedError` if absent.

###### Returns

`Promise`\<[`ZohoBillingServerSession`](#zohobillingserversession)\>

***

### ZohoBillingServerOptions

Defined in: [zoho-billing-react/src/server/data.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L64)

Server-only entry: `@dipakparmar/zoho-billing-react/server`.

Kept out of the package's main barrel on purpose. This module reaches
`@dipakparmar/zoho-billing` and therefore `node:crypto`; exporting it from the
client barrel would pull Node builtins into the browser bundle and break the
production build with an error that points somewhere unrelated.

#### Properties

##### allowedPlanCodes?

```ts
optional allowedPlanCodes?: string[];
```

Defined in: [zoho-billing-react/src/server/data.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L76)

Restrict which plans are visible in server-rendered pricing tables.

##### cache?

```ts
optional cache?: ZohoBillingCacheAdapter;
```

Defined in: [zoho-billing-react/src/server/data.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L74)

##### resolveSession

```ts
resolveSession: () => 
  | ZohoBillingServerSession
  | Promise<ZohoBillingServerSession | null>
  | null;
```

Defined in: [zoho-billing-react/src/server/data.ts:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L70)

Resolve the signed-in customer, e.g. from cookies. Return `null` when
nobody is signed in. Required - identity is never taken from an argument.

###### Returns

  \| [`ZohoBillingServerSession`](#zohobillingserversession)
  \| `Promise`\<[`ZohoBillingServerSession`](#zohobillingserversession) \| `null`\>
  \| `null`

##### zoho

```ts
zoho: ZohoBilling;
```

Defined in: [zoho-billing-react/src/server/data.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L65)

***

### ZohoBillingServerSession

Defined in: [zoho-billing-react/src/server/data.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L49)

Server-only entry: `@dipakparmar/zoho-billing-react/server`.

Kept out of the package's main barrel on purpose. This module reaches
`@dipakparmar/zoho-billing` and therefore `node:crypto`; exporting it from the
client barrel would pull Node builtins into the browser bundle and break the
production build with an error that points somewhere unrelated.

#### Properties

##### customerId

```ts
customerId: string;
```

Defined in: [zoho-billing-react/src/server/data.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L50)

## Type Aliases

### ZohoBillingActionState

```ts
type ZohoBillingActionState<T> = 
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

Defined in: [zoho-billing-react/src/server/actions.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L67)

Result shape for `useActionState`.

A discriminated union rather than a thrown error: `useActionState` surfaces
the returned value directly into the form, and an uncaught throw in a Server
Action becomes an opaque "an error occurred" in production.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `ZohoSubscription` |

## Variables

### IDLE\_ACTION\_STATE

```ts
const IDLE_ACTION_STATE: ZohoBillingActionState;
```

Defined in: [zoho-billing-react/src/server/actions.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L72)

***

### zohoBillingTags

```ts
const zohoBillingTags: {
  customer: string;
  invoices: string;
  plans: string;
  subscription: string;
  subscriptions: string;
};
```

Defined in: [zoho-billing-react/src/server/tags.ts:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/tags.ts#L14)

#### Type Declaration

##### customer()

```ts
readonly customer(customerId): string;
```

Every cached entry for one customer. Invalidate on any change.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`string`

##### invoices()

```ts
readonly invoices(customerId): string;
```

A customer's invoices.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`string`

##### plans()

```ts
readonly plans(): string;
```

The shared plan catalogue, which is not customer-scoped.

###### Returns

`string`

##### subscription()

```ts
readonly subscription(subscriptionId): string;
```

One subscription.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`string`

##### subscriptions()

```ts
readonly subscriptions(customerId): string;
```

A customer's subscription list.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`string`

## Functions

### createZohoBillingActions()

```ts
function createZohoBillingActions(options): ZohoBillingActions;
```

Defined in: [zoho-billing-react/src/server/actions.ts:113](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/actions.ts#L113)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingActionsOptions`](#zohobillingactionsoptions) |

#### Returns

[`ZohoBillingActions`](#zohobillingactions)

***

### createZohoBillingServer()

```ts
function createZohoBillingServer(options): ZohoBillingServer;
```

Defined in: [zoho-billing-react/src/server/data.ts:100](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/data.ts#L100)

Build the RSC data layer.

Reads are wrapped in React's `cache()`, so rendering a layout, a page, and
three components that each need the subscription list produces exactly one
Zoho call per request. That matters more here than usual: Zoho's rate limit
is 100 requests/minute for the whole organization, shared by every user.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingServerOptions`](#zohobillingserveroptions) |

#### Returns

[`ZohoBillingServer`](#zohobillingserver)

***

### subscriptionWriteTags()

```ts
function subscriptionWriteTags(customerId, subscriptionId?): string[];
```

Defined in: [zoho-billing-react/src/server/tags.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/server/tags.ts#L44)

Every tag touched by a subscription write.

Mutations should invalidate this whole set rather than picking tags by hand:
a plan change alters the subscription, the customer's list, and the invoices
raised by the proration, and missing one leaves stale data on screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `subscriptionId?` | `string` |

#### Returns

`string`[]
