# handler

## Interfaces

### ZohoBillingHandlerOptions

Defined in: packages/zoho-billing/src/handler.ts:58

#### Extends

- [`CatalogAllowlist`](security.md#catalogallowlist)

#### Properties

##### allowedAddonCodes?

```ts
optional allowedAddonCodes?: string[];
```

Defined in: packages/zoho-billing/src/security.ts:148

Addon codes a caller may select. Omit to allow all addons.

###### Inherited from

[`CatalogAllowlist`](security.md#catalogallowlist).[`allowedAddonCodes`](security.md#allowedaddoncodes)

##### allowedPlanCodes?

```ts
optional allowedPlanCodes?: string[];
```

Defined in: packages/zoho-billing/src/security.ts:146

Plan codes a caller may select. Omit to allow the whole catalogue.

###### Inherited from

[`CatalogAllowlist`](security.md#catalogallowlist).[`allowedPlanCodes`](security.md#allowedplancodes)

##### allowedRedirectOrigins?

```ts
optional allowedRedirectOrigins?: string[];
```

Defined in: packages/zoho-billing/src/handler.ts:78

Origins a post-checkout `redirect_url` may point at. Defaults to the
origin the request arrived on, which is the safe choice for a same-origin
app; set it explicitly if checkout returns to a different host.

##### authorize

```ts
authorize: (request) => 
  | ZohoBillingSession
  | Promise<ZohoBillingSession | null>
  | null;
```

Defined in: packages/zoho-billing/src/handler.ts:70

Resolve the caller's Zoho customer from the request, or return `null` to
reject with 401. Required - there is deliberately no permissive default,
because these routes expose billing data and billing mutations.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |

###### Returns

  \| [`ZohoBillingSession`](#zohobillingsession)
  \| `Promise`\<[`ZohoBillingSession`](#zohobillingsession) \| `null`\>
  \| `null`

##### basePath

```ts
basePath: string;
```

Defined in: packages/zoho-billing/src/handler.ts:64

Path this handler is mounted at, stripped before routing.
e.g. `/api/billing`.

##### exposeUpstreamErrors?

```ts
optional exposeUpstreamErrors?: boolean;
```

Defined in: packages/zoho-billing/src/handler.ts:85

Forward Zoho's own error text to the client. Zoho's messages are written
for the account holder and can name internal plan or org details, so this
defaults to `false` and callers get a generic message plus the numeric
code instead.

##### onError?

```ts
optional onError?: (error, request) => void;
```

Defined in: packages/zoho-billing/src/handler.ts:87

Called for unexpected failures. Defaults to `console.error`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |
| `request` | `Request` |

###### Returns

`void`

##### zoho

```ts
zoho: ZohoBilling;
```

Defined in: packages/zoho-billing/src/handler.ts:59

***

### ZohoBillingSession

Defined in: packages/zoho-billing/src/handler.ts:50

Identity of the caller, resolved from your own session.

#### Properties

##### customerId

```ts
customerId: string;
```

Defined in: packages/zoho-billing/src/handler.ts:55

Zoho customer this caller is allowed to act on. Every route is scoped to
it; there is no way for a caller to reach another customer's data.

## Type Aliases

### ZohoBillingRequestHandler

```ts
type ZohoBillingRequestHandler = (request) => Promise<Response>;
```

Defined in: packages/zoho-billing/src/handler.ts:94

The mounted endpoint: a Web fetch handler. Exported so an app can name it in
its own route signatures.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |

#### Returns

`Promise`\<`Response`\>

## Functions

### createZohoBillingHandler()

```ts
function createZohoBillingHandler(options): ZohoBillingRequestHandler;
```

Defined in: packages/zoho-billing/src/handler.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingHandlerOptions`](#zohobillinghandleroptions) |

#### Returns

[`ZohoBillingRequestHandler`](#zohobillingrequesthandler)
