# index

## Classes

### BillingStore

Defined in: [zoho-billing-react/src/store.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L22)

#### Constructors

##### Constructor

```ts
new BillingStore(): BillingStore;
```

###### Returns

[`BillingStore`](#billingstore)

#### Methods

##### clear()

```ts
clear(): void;
```

Defined in: [zoho-billing-react/src/store.ts:110](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L110)

###### Returns

`void`

##### getSnapshot()

```ts
getSnapshot<T>(key): CacheEntry<T>;
```

Defined in: [zoho-billing-react/src/store.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L44)

Must return a referentially stable value for unchanged state, or
`useSyncExternalStore` re-renders forever.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

[`CacheEntry`](#cacheentry)\<`T`\>

##### invalidate()

```ts
invalidate(prefix): void;
```

Defined in: [zoho-billing-react/src/store.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L99)

Drop cached entries whose key starts with `prefix` and notify their
subscribers so mounted hooks refetch.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` |

###### Returns

`void`

##### load()

```ts
load<T>(
   key, 
   fetcher, 
   __namedParameters?
): Promise<T>;
```

Defined in: [zoho-billing-react/src/store.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L59)

Load `key`, deduping concurrent callers.

Two components mounting with the same key in the same tick share one
request instead of racing.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `fetcher` | () => `Promise`\<`T`\> |
| `__namedParameters` | \{ `force?`: `boolean`; \} |
| `__namedParameters.force?` | `boolean` |

###### Returns

`Promise`\<`T`\>

##### setData()

```ts
setData<T>(key, data): void;
```

Defined in: [zoho-billing-react/src/store.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L91)

Write a value directly, e.g. from a mutation response.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `data` | `T` |

###### Returns

`void`

##### subscribe()

```ts
subscribe(key, listener): () => void;
```

Defined in: [zoho-billing-react/src/store.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `listener` | () => `void` |

###### Returns

() => `void`

***

### ZohoBillingFetchError

Defined in: [zoho-billing-react/src/client.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L10)

Browser-side transport.

This never talks to Zoho. Zoho's API needs a client secret and refresh
token, and it sets no CORS headers for browser origins, so all calls go to
your own backend - the route handler exported by
`@dipakparmar/zoho-billing/handler`.

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ZohoBillingFetchError(
   message, 
   status, 
   code?
): ZohoBillingFetchError;
```

Defined in: [zoho-billing-react/src/client.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `status` | `number` |
| `code?` | `string` \| `number` |

###### Returns

[`ZohoBillingFetchError`](#zohobillingfetcherror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### code?

```ts
readonly optional code?: string | number;
```

Defined in: [zoho-billing-react/src/client.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L13)

Machine-readable error slug from the handler, e.g. `plan_not_allowed`.

##### status

```ts
readonly status: number;
```

Defined in: [zoho-billing-react/src/client.ts:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L11)

## Interfaces

### BillingMutationResult

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L12)

#### Extends

- [`BillingMutationState`](#billingmutationstate)\<`T`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `T` |

#### Properties

##### data

```ts
data: T | undefined;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L7)

###### Inherited from

[`BillingMutationState`](#billingmutationstate).[`data`](#data-1)

##### error

```ts
error: unknown;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L8)

###### Inherited from

[`BillingMutationState`](#billingmutationstate).[`error`](#error-1)

##### isPending

```ts
isPending: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L9)

###### Inherited from

[`BillingMutationState`](#billingmutationstate).[`isPending`](#ispending-1)

##### mutate

```ts
mutate: (...args) => Promise<T>;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `TArgs` |

###### Returns

`Promise`\<`T`\>

##### reset

```ts
reset: () => void;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L17)

###### Returns

`void`

***

### BillingMutationState

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:6](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L6)

#### Extended by

- [`BillingMutationResult`](#billingmutationresult)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### data

```ts
data: T | undefined;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L7)

##### error

```ts
error: unknown;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L8)

##### isPending

```ts
isPending: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L9)

***

### BillingQueryResult

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L15)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### data

```ts
data: T | undefined;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L16)

##### error

```ts
error: unknown;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L17)

##### isLoading

```ts
isLoading: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:18](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L18)

##### isRefreshing

```ts
isRefreshing: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L20)

True on a background refresh, when stale data is still on screen.

##### refetch

```ts
refetch: () => Promise<T | undefined>;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L21)

###### Returns

`Promise`\<`T` \| `undefined`\>

***

### CacheEntry

Defined in: [zoho-billing-react/src/store.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L12)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Properties

##### data?

```ts
optional data?: T;
```

Defined in: [zoho-billing-react/src/store.ts:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L14)

##### error?

```ts
optional error?: unknown;
```

Defined in: [zoho-billing-react/src/store.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L15)

##### status

```ts
status: EntryStatus;
```

Defined in: [zoho-billing-react/src/store.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L13)

##### updatedAt?

```ts
optional updatedAt?: number;
```

Defined in: [zoho-billing-react/src/store.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L17)

Epoch ms of the last successful load, for staleness checks.

***

### CancelSubscriptionOptions

Defined in: [zoho-billing-react/src/hooks/mutations.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L21)

#### Properties

##### cancelAtEnd?

```ts
optional cancelAtEnd?: boolean;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L26)

`true` (the default) ends the subscription when the paid term expires;
`false` cuts access off immediately.

***

### CreateHostedPageParams

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L21)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code: string;
  quantity?: number;
}[];
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L27)

###### addon\_code

```ts
addon_code: string;
```

###### quantity?

```ts
optional quantity?: number;
```

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L28)

##### kind

```ts
kind: HostedPageKind;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L22)

##### plan?

```ts
optional plan?: {
  plan_code: string;
  price?: number;
  quantity?: number;
};
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L24)

Required for `new-subscription`; optional plan change otherwise.

###### plan\_code

```ts
plan_code: string;
```

###### price?

```ts
optional price?: number;
```

###### quantity?

```ts
optional quantity?: number;
```

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L30)

Where Zoho returns the customer. Include a marker you can read back.

##### subscription\_id?

```ts
optional subscription_id?: string;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L26)

Required for `update-subscription`.

***

### ManagePaymentMethodButtonProps

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L70)

#### Extends

- `BaseProps`

#### Properties

##### children?

```ts
optional children?: ReactNode;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L71)

###### Overrides

```ts
BaseProps.children
```

##### onError?

```ts
optional onError?: (error) => void;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`void`

###### Inherited from

```ts
BaseProps.onError
```

##### pendingLabel?

```ts
optional pendingLabel?: ReactNode;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L13)

Rendered while the hosted page is being created.

###### Inherited from

```ts
BaseProps.pendingLabel
```

##### redirectUrl?

```ts
optional redirectUrl?: string;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L11)

Where Zoho returns the customer after checkout.

###### Inherited from

```ts
BaseProps.redirectUrl
```

***

### SubscribeButtonProps

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L17)

#### Extends

- `BaseProps`

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code: string;
  quantity?: number;
}[];
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L21)

###### addon\_code

```ts
addon_code: string;
```

###### quantity?

```ts
optional quantity?: number;
```

##### children?

```ts
optional children?: ReactNode;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L22)

###### Overrides

```ts
BaseProps.children
```

##### couponCode?

```ts
optional couponCode?: string;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L20)

##### onError?

```ts
optional onError?: (error) => void;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`void`

###### Inherited from

```ts
BaseProps.onError
```

##### pendingLabel?

```ts
optional pendingLabel?: ReactNode;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L13)

Rendered while the hosted page is being created.

###### Inherited from

```ts
BaseProps.pendingLabel
```

##### planCode

```ts
planCode: string;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:18](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L18)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L19)

##### redirectUrl?

```ts
optional redirectUrl?: string;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L11)

Where Zoho returns the customer after checkout.

###### Inherited from

```ts
BaseProps.redirectUrl
```

***

### UseBillingMutationOptions

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L20)

#### Properties

##### invalidate?

```ts
optional invalidate?: string[];
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L25)

Cache key prefixes to drop after a successful mutation, so mounted
queries refetch. Defaults to `["/subscriptions"]`.

***

### UseBillingQueryOptions

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L7)

#### Properties

##### enabled?

```ts
optional enabled?: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L9)

Skip fetching, e.g. while an ID is still undefined.

##### query?

```ts
optional query?: Record<string, string | number | boolean | null | undefined>;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L10)

##### staleTimeMs?

```ts
optional staleTimeMs?: number;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L12)

Serve cache without refetching if it is younger than this (ms).

***

### UseHostedPageCheckoutResult

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L81)

#### Properties

##### checkout

```ts
checkout: (params) => Promise<void>;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L83)

Create the page and send the browser to it.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateHostedPageParams`](#createhostedpageparams) |

###### Returns

`Promise`\<`void`\>

##### error

```ts
error: unknown;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L85)

##### isPending

```ts
isPending: boolean;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L84)

***

### ZohoBillingContextValue

Defined in: [zoho-billing-react/src/context.tsx:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L17)

React bindings for Zoho Billing.

```tsx
<ZohoBillingProvider baseUrl="/api/billing">
  <BillingPage />
</ZohoBillingProvider>

function BillingPage() {
  const { data: subscriptions, isLoading } = useSubscriptions()
  const cancel = useCancelSubscription()
  // ...
}
```

These hooks call your backend, not Zoho: Zoho's API requires a client
secret and sends no CORS headers, so mount
`createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler` and point
`baseUrl` at it.

#### Properties

##### fetcher

```ts
fetcher: ZohoBillingFetcher;
```

Defined in: [zoho-billing-react/src/context.tsx:18](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L18)

##### store

```ts
store: BillingStore;
```

Defined in: [zoho-billing-react/src/context.tsx:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L19)

***

### ZohoBillingFetcherOptions

Defined in: [zoho-billing-react/src/client.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L23)

#### Properties

##### baseUrl

```ts
baseUrl: string;
```

Defined in: [zoho-billing-react/src/client.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L25)

Where the backend handler is mounted, e.g. `/api/billing`.

##### credentials?

```ts
optional credentials?: RequestCredentials;
```

Defined in: [zoho-billing-react/src/client.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L29)

Defaults to `same-origin`, matching cookie-session auth.

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: [zoho-billing-react/src/client.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L30)

##### headers?

```ts
optional headers?: Record<string, string> | (() => Record<string, string>);
```

Defined in: [zoho-billing-react/src/client.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L27)

Merged into every request; use for CSRF tokens or tenant headers.

***

### ZohoBillingProviderProps

Defined in: [zoho-billing-react/src/context.tsx:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L24)

React bindings for Zoho Billing.

```tsx
<ZohoBillingProvider baseUrl="/api/billing">
  <BillingPage />
</ZohoBillingProvider>

function BillingPage() {
  const { data: subscriptions, isLoading } = useSubscriptions()
  const cancel = useCancelSubscription()
  // ...
}
```

These hooks call your backend, not Zoho: Zoho's API requires a client
secret and sends no CORS headers, so mount
`createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler` and point
`baseUrl` at it.

#### Extends

- `Partial`\<`Omit`\<[`ZohoBillingFetcherOptions`](#zohobillingfetcheroptions), `"baseUrl"`\>\>

#### Properties

##### baseUrl?

```ts
optional baseUrl?: string;
```

Defined in: [zoho-billing-react/src/context.tsx:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L28)

Where your backend mounts the handler. Defaults to `/api/billing`.

##### children

```ts
children: ReactNode;
```

Defined in: [zoho-billing-react/src/context.tsx:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L36)

##### credentials?

```ts
optional credentials?: RequestCredentials;
```

Defined in: [zoho-billing-react/src/client.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L29)

Defaults to `same-origin`, matching cookie-session auth.

###### Inherited from

[`ZohoBillingFetcherOptions`](#zohobillingfetcheroptions).[`credentials`](#credentials)

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: [zoho-billing-react/src/client.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L30)

###### Inherited from

[`ZohoBillingFetcherOptions`](#zohobillingfetcheroptions).[`fetch`](#fetch)

##### fetcher?

```ts
optional fetcher?: ZohoBillingFetcher;
```

Defined in: [zoho-billing-react/src/context.tsx:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L33)

Supply your own transport, e.g. to route through an existing API client.
Takes precedence over `baseUrl`.

##### headers?

```ts
optional headers?: Record<string, string> | (() => Record<string, string>);
```

Defined in: [zoho-billing-react/src/client.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L27)

Merged into every request; use for CSRF tokens or tenant headers.

###### Inherited from

[`ZohoBillingFetcherOptions`](#zohobillingfetcheroptions).[`headers`](#headers)

##### store?

```ts
optional store?: BillingStore;
```

Defined in: [zoho-billing-react/src/context.tsx:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L35)

Share one cache across provider remounts. Mostly useful in tests.

***

### ZohoBillingRequestInit

Defined in: [zoho-billing-react/src/client.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L33)

#### Properties

##### body?

```ts
optional body?: unknown;
```

Defined in: [zoho-billing-react/src/client.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L35)

##### method?

```ts
optional method?: "GET" | "POST" | "PUT" | "DELETE";
```

Defined in: [zoho-billing-react/src/client.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L34)

##### query?

```ts
optional query?: Record<string, string | number | boolean | null | undefined>;
```

Defined in: [zoho-billing-react/src/client.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L36)

##### signal?

```ts
optional signal?: AbortSignal;
```

Defined in: [zoho-billing-react/src/client.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L37)

## Type Aliases

### EntryStatus

```ts
type EntryStatus = "idle" | "loading" | "success" | "error";
```

Defined in: [zoho-billing-react/src/store.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L10)

A tiny cache + subscription store behind the query hooks.

Deliberately dependency-free: this package should drop into an app whether
or not it already uses TanStack Query or SWR. It covers what billing UI
actually needs - shared cache across components, request dedupe, and
invalidation after a mutation - and nothing more.

***

### HostedPageKind

```ts
type HostedPageKind = "new-subscription" | "update-subscription" | "update-card";
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L16)

Which hosted-page flow to open.

***

### ZohoBillingFetcher

```ts
type ZohoBillingFetcher = <T>(path, init?) => Promise<T>;
```

Defined in: [zoho-billing-react/src/client.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L40)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `init?` | [`ZohoBillingRequestInit`](#zohobillingrequestinit) |

#### Returns

`Promise`\<`T`\>

## Functions

### buildKey()

```ts
function buildKey(path, query?): string;
```

Defined in: [zoho-billing-react/src/store.ts:120](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/store.ts#L120)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `query?` | `Record`\<`string`, `unknown`\> |

#### Returns

`string`

***

### createFetcher()

```ts
function createFetcher(options): ZohoBillingFetcher;
```

Defined in: [zoho-billing-react/src/client.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/client.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingFetcherOptions`](#zohobillingfetcheroptions) |

#### Returns

[`ZohoBillingFetcher`](#zohobillingfetcher)

***

### formatAmount()

```ts
function formatAmount(
   amount, 
   currencyCode?, 
   locale?
): string;
```

Defined in: [zoho-billing-react/src/utils.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L71)

Format a Zoho amount for display.

Zoho returns the amount as a plain number in major units (50 means $50.00),
not in cents the way Stripe does - passing it straight to a cents-based
formatter would show the price 100x too small.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `amount` | `number` \| `undefined` | `undefined` |
| `currencyCode` | `string` | `"USD"` |
| `locale?` | `string` | `undefined` |

#### Returns

`string`

***

### formatBillingDate()

```ts
function formatBillingDate(
   date, 
   locale?, 
   options?
): string;
```

Defined in: [zoho-billing-react/src/utils.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L84)

Format a Zoho `yyyy-mm-dd` date for display, tolerating empty strings.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `string` \| `undefined` |
| `locale?` | `string` |
| `options?` | `DateTimeFormatOptions` |

#### Returns

`string`

***

### formatSubscriptionStatus()

```ts
function formatSubscriptionStatus(status): string;
```

Defined in: [zoho-billing-react/src/utils.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L45)

Human-readable label for a Zoho subscription status.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `string` \| `undefined` |

#### Returns

`string`

***

### isCancelledAtPeriodEnd()

```ts
function isCancelledAtPeriodEnd(subscription): boolean;
```

Defined in: [zoho-billing-react/src/utils.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L38)

True when cancelled but still inside the paid term.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscription` | `Pick`\<`ZohoSubscription`, `"status"`\> \| `null` \| `undefined` |

#### Returns

`boolean`

***

### isSubscriptionEntitled()

```ts
function isSubscriptionEntitled(subscription): boolean;
```

Defined in: [zoho-billing-react/src/utils.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L23)

True when the subscription should currently grant access.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscription` | `Pick`\<`ZohoSubscription`, `"status"`\> \| `null` \| `undefined` |

#### Returns

`boolean`

***

### ManagePaymentMethodButton()

```ts
function ManagePaymentMethodButton(__namedParameters): Element;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L75)

Opens Zoho's hosted page for updating the stored card.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ManagePaymentMethodButtonProps`](#managepaymentmethodbuttonprops) |

#### Returns

`Element`

***

### needsPaymentAttention()

```ts
function needsPaymentAttention(subscription): boolean;
```

Defined in: [zoho-billing-react/src/utils.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/utils.ts#L31)

True when billing needs the customer's attention (failed or missed payment).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscription` | `Pick`\<`ZohoSubscription`, `"status"`\> \| `null` \| `undefined` |

#### Returns

`boolean`

***

### SubscribeButton()

```ts
function SubscribeButton(__namedParameters): Element;
```

Defined in: [zoho-billing-react/src/components/SubscribeButton.tsx:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/components/SubscribeButton.tsx#L31)

Starts a Zoho hosted-page checkout for a plan.

Unstyled by design: pass `className` and children and it will inherit
whatever design system the host app uses.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`SubscribeButtonProps`](#subscribebuttonprops) |

#### Returns

`Element`

***

### useBillingMutation()

```ts
function useBillingMutation<TArgs, T>(run, options?): BillingMutationResult<TArgs, T>;
```

Defined in: [zoho-billing-react/src/hooks/useBillingMutation.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingMutation.ts#L34)

Shared write primitive.

`mutate` rethrows so callers can `try`/`catch`, while the same error is also
exposed as state for rendering.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `run` | (`fetcher`, ...`args`) => `Promise`\<`T`\> |
| `options` | [`UseBillingMutationOptions`](#usebillingmutationoptions) |

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<`TArgs`, `T`\>

***

### useBillingQuery()

```ts
function useBillingQuery<TResponse, TData>(path, options?): BillingQueryResult<TData>;
```

Defined in: [zoho-billing-react/src/hooks/useBillingQuery.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useBillingQuery.ts#L41)

Shared read primitive for the resource hooks.

`TResponse` is the envelope the backend returns (`{ subscriptions: [...] }`)
and `TData` is what callers want. `select` unwraps one to the other and is
applied to `data` *and* `refetch`'s resolved value, so the two never
disagree about their shape.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResponse` | - |
| `TData` | `TResponse` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` \| `null` |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) & \{ `select?`: (`response`) => `TData`; \} |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`TData`\>

***

### useCancelSubscription()

```ts
function useCancelSubscription(): BillingMutationResult<[string, CancelSubscriptionOptions], ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L30)

Cancel a subscription, at period end by default.

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[`string`, [`CancelSubscriptionOptions`](#cancelsubscriptionoptions)\], `ZohoSubscription`\>

***

### useCreateHostedPage()

```ts
function useCreateHostedPage(): BillingMutationResult<[CreateHostedPageParams], ZohoHostedPage>;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L41)

Create a Zoho hosted page (their Checkout equivalent).

`customer_id` is never sent from the browser - the backend handler fills it
in from the session, so a caller cannot open a checkout against someone
else's account.

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[[`CreateHostedPageParams`](#createhostedpageparams)\], `ZohoHostedPage`\>

***

### useCustomer()

```ts
function useCustomer(options?): BillingQueryResult<ZohoCustomer>;
```

Defined in: [zoho-billing-react/src/hooks/queries.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/queries.ts#L64)

The signed-in customer's billing profile.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoCustomer`\>

***

### useHostedPageCheckout()

```ts
function useHostedPageCheckout(): UseHostedPageCheckoutResult;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L94)

One-call checkout: create the hosted page, then navigate to it.

Throws if Zoho returns a page without a URL, rather than leaving the caller
to think a redirect happened when it did not.

#### Returns

[`UseHostedPageCheckoutResult`](#usehostedpagecheckoutresult)

***

### useHostedPageResult()

```ts
function useHostedPageResult(hostedPageId, options?): BillingQueryResult<ZohoHostedPage>;
```

Defined in: [zoho-billing-react/src/hooks/useHostedPage.ts:121](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/useHostedPage.ts#L121)

Read a hosted page's outcome after the customer is redirected back.

Check `data?.status === "success"` before granting anything. Landing on the
return URL is not proof of payment - it can be visited directly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostedPageId` | `string` \| `null` \| `undefined` |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoHostedPage`\>

***

### useInvoices()

```ts
function useInvoices(options?): BillingQueryResult<ZohoInvoice[]>;
```

Defined in: [zoho-billing-react/src/hooks/queries.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/queries.ts#L77)

Invoice history, optionally narrowed to one subscription.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) & \{ `filterBy?`: `string`; `subscriptionId?`: `string`; \} |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoInvoice`[]\>

***

### usePauseSubscription()

```ts
function usePauseSubscription(): BillingMutationResult<[string, PauseSubscriptionParams], ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L68)

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[`string`, `PauseSubscriptionParams`\], `ZohoSubscription`\>

***

### usePlans()

```ts
function usePlans(options?): BillingQueryResult<ZohoPlan[]>;
```

Defined in: [zoho-billing-react/src/hooks/queries.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/queries.ts#L21)

Active plans from your Zoho catalogue, for a pricing table.

If the backend handler was configured with `allowedPlanCodes`, only those
come back - the browser never sees plans you do not sell self-serve.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) & \{ `productId?`: `string`; \} |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoPlan`[]\>

***

### useReactivateSubscription()

```ts
function useReactivateSubscription(): BillingMutationResult<[string], ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L52)

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[`string`\], `ZohoSubscription`\>

***

### useResumeSubscription()

```ts
function useResumeSubscription(): BillingMutationResult<[string, ResumeSubscriptionParams], ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L87)

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[`string`, `ResumeSubscriptionParams`\], `ZohoSubscription`\>

***

### useSubscription()

```ts
function useSubscription(subscriptionId, options?): BillingQueryResult<ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/queries.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/queries.ts#L51)

One subscription. Pass `null`/`undefined` to hold off until the ID exists.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` \| `null` \| `undefined` |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoSubscription`\>

***

### useSubscriptions()

```ts
function useSubscriptions(options?): BillingQueryResult<ZohoSubscription[]>;
```

Defined in: [zoho-billing-react/src/hooks/queries.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/queries.ts#L36)

Every subscription belonging to the signed-in customer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseBillingQueryOptions`](#usebillingqueryoptions) & \{ `filterBy?`: `string`; \} |

#### Returns

[`BillingQueryResult`](#billingqueryresult)\<`ZohoSubscription`[]\>

***

### useUpdateSubscription()

```ts
function useUpdateSubscription(): BillingMutationResult<[string, UpdateSubscriptionParams], ZohoSubscription>;
```

Defined in: [zoho-billing-react/src/hooks/mutations.ts:113](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/hooks/mutations.ts#L113)

Change plan, addons, or coupon.

Set `end_of_term` explicitly: `false` applies the change now (prorated),
`true` defers it to the next renewal. Omitting it falls back to the Zoho
organization's default, which is easy to be surprised by.

#### Returns

[`BillingMutationResult`](#billingmutationresult)\<\[`string`, `UpdateSubscriptionParams`\], `ZohoSubscription`\>

***

### useZohoBilling()

```ts
function useZohoBilling(): ZohoBillingContextValue;
```

Defined in: [zoho-billing-react/src/context.tsx:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L80)

React bindings for Zoho Billing.

```tsx
<ZohoBillingProvider baseUrl="/api/billing">
  <BillingPage />
</ZohoBillingProvider>

function BillingPage() {
  const { data: subscriptions, isLoading } = useSubscriptions()
  const cancel = useCancelSubscription()
  // ...
}
```

These hooks call your backend, not Zoho: Zoho's API requires a client
secret and sends no CORS headers, so mount
`createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler` and point
`baseUrl` at it.

#### Returns

[`ZohoBillingContextValue`](#zohobillingcontextvalue)

***

### ZohoBillingProvider()

```ts
function ZohoBillingProvider(__namedParameters): Element;
```

Defined in: [zoho-billing-react/src/context.tsx:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing-react/src/context.tsx#L39)

React bindings for Zoho Billing.

```tsx
<ZohoBillingProvider baseUrl="/api/billing">
  <BillingPage />
</ZohoBillingProvider>

function BillingPage() {
  const { data: subscriptions, isLoading } = useSubscriptions()
  const cancel = useCancelSubscription()
  // ...
}
```

These hooks call your backend, not Zoho: Zoho's API requires a client
secret and sends no CORS headers, so mount
`createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler` and point
`baseUrl` at it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ZohoBillingProviderProps`](#zohobillingproviderprops) |

#### Returns

`Element`
