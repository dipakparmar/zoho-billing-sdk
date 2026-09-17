# security

## Classes

### ZohoBillingInputError

Defined in: [security.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L38)

Raised when client input is rejected at the trust boundary.

`httpStatus` distinguishes malformed input (400) from input that is
well-formed but not permitted for this caller (403), so the handler does not
have to pattern-match on messages.

#### Extends

- [`ZohoBillingError`](errors.md#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingInputError(message, httpStatus?): ZohoBillingInputError;
```

Defined in: [security.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L41)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `httpStatus` | `number` | `400` |

###### Returns

[`ZohoBillingInputError`](#zohobillinginputerror)

###### Overrides

[`ZohoBillingError`](errors.md#zohobillingerror).[`constructor`](errors.md#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](errors.md#zohobillingerror).[`body`](errors.md#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](errors.md#zohobillingerror).[`code`](errors.md#code-2)

##### httpStatus

```ts
readonly httpStatus: number;
```

Defined in: [security.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L39)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](errors.md#zohobillingerror).[`request`](errors.md#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](errors.md#zohobillingerror).[`status`](errors.md#status-2)

## Interfaces

### CatalogAllowlist

Defined in: [security.ts:144](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L144)

#### Extended by

- [`ZohoBillingHandlerOptions`](handler.md#zohobillinghandleroptions)

#### Properties

##### allowedAddonCodes?

```ts
optional allowedAddonCodes?: string[];
```

Defined in: [security.ts:148](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L148)

Addon codes a caller may select. Omit to allow all addons.

##### allowedPlanCodes?

```ts
optional allowedPlanCodes?: string[];
```

Defined in: [security.ts:146](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L146)

Plan codes a caller may select. Omit to allow the whole catalogue.

***

### RedirectUrlOptions

Defined in: [security.ts:221](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L221)

#### Properties

##### allowedOrigins?

```ts
optional allowedOrigins?: string[];
```

Defined in: [security.ts:226](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L226)

Origins a redirect may point at. When omitted, only the origin the request
itself arrived on is accepted.

##### requestOrigin

```ts
requestOrigin: string;
```

Defined in: [security.ts:228](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L228)

Origin of the incoming request, used as the default allowlist.

***

### SafeAddonInput

Defined in: [security.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L62)

#### Properties

##### addon\_code

```ts
addon_code: string;
```

Defined in: [security.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L63)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [security.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L64)

***

### SafePlanInput

Defined in: [security.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L57)

#### Properties

##### plan\_code

```ts
plan_code: string;
```

Defined in: [security.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L58)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [security.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L59)

***

### SafeSubscriptionUpdate

Defined in: [security.ts:182](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L182)

Fields of an update a caller is trusted to set.

The index signature exists only to stay assignable to the open-ended
`UpdateSubscriptionParams`. Safety comes from `sanitizeSubscriptionUpdate`
constructing these objects field by field, never from the type.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: SafeAddonInput[];
```

Defined in: [security.ts:184](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L184)

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [security.ts:185](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L185)

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: [security.ts:186](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L186)

##### plan?

```ts
optional plan?: SafePlanInput;
```

Defined in: [security.ts:183](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L183)

## Variables

### MAX\_QUANTITY

```ts
const MAX_QUANTITY: 1000 = 1000;
```

Defined in: [security.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L52)

Upper bound on `quantity`. Zoho accepts enormous integers, which lets a
caller raise an absurd invoice or push a large payload through your account.

## Functions

### assertCatalogAllowed()

```ts
function assertCatalogAllowed(__namedParameters, allowlist): void;
```

Defined in: [security.ts:158](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L158)

Enforce catalogue allowlists.

Without this, a caller can name any code in your Zoho org, including
internal, discounted, or staff plans that were never meant to be sold
self-serve.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `addons?`: [`SafeAddonInput`](#safeaddoninput)[]; `plan?`: [`SafePlanInput`](#safeplaninput); \} |
| `__namedParameters.addons?` | [`SafeAddonInput`](#safeaddoninput)[] |
| `__namedParameters.plan?` | [`SafePlanInput`](#safeplaninput) |
| `allowlist` | [`CatalogAllowlist`](#catalogallowlist) |

#### Returns

`void`

***

### isOwnedByCustomer()

```ts
function isOwnedByCustomer(subscription, customerId): boolean;
```

Defined in: [security.ts:289](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L289)

Confirm a subscription belongs to a customer.

Zoho returns the owner in two shapes depending on the endpoint - nested
under `customer` on a single read, flattened to `customer_id` on lists - so
both are checked. Comparing only one would let the other shape through as an
accidental `undefined === undefined` match, which is why the customer ID is
required to be a non-empty string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscription` | \{ `customer?`: \{ `customer_id?`: `string`; \}; `customer_id?`: `string`; \} |
| `subscription.customer?` | \{ `customer_id?`: `string`; \} |
| `subscription.customer.customer_id?` | `string` |
| `subscription.customer_id?` | `string` |
| `customerId` | `string` |

#### Returns

`boolean`

***

### resolveRedirectUrl()

```ts
function resolveRedirectUrl(candidate, __namedParameters): string | undefined;
```

Defined in: [security.ts:243](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L243)

Validate a post-checkout redirect target.

Zoho sends the customer to this URL after the hosted page, so an unchecked
value is a textbook open redirect: an attacker sends a victim through a
legitimate-looking checkout on your domain that lands on their phishing page
with the trust of your brand behind it.

Only absolute `https:` URLs on an allowed origin pass. `http:` is permitted
for loopback so local development still works. Returns `undefined` when no
redirect was requested.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `candidate` | `unknown` |
| `__namedParameters` | [`RedirectUrlOptions`](#redirecturloptions) |

#### Returns

`string` \| `undefined`

***

### sanitizeAddonsInput()

```ts
function sanitizeAddonsInput(input): SafeAddonInput[];
```

Defined in: [security.ts:116](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L116)

Same treatment for addons, which carry their own `price` override.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

#### Returns

[`SafeAddonInput`](#safeaddoninput)[]

***

### sanitizeCouponCode()

```ts
function sanitizeCouponCode(input): string | undefined;
```

Defined in: [security.ts:139](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L139)

Coupon codes are validated by Zoho; we only bound the shape.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

#### Returns

`string` \| `undefined`

***

### sanitizePlanInput()

```ts
function sanitizePlanInput(input): SafePlanInput;
```

Defined in: [security.ts:102](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L102)

Reduce a client-supplied plan object to `plan_code` plus an optional
`quantity`.

Price, setup fee, trial days, discounts, tax IDs, and billing cycles are all
dropped: Zoho re-derives them from the catalogue when they are absent, which
is exactly what we want.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

#### Returns

[`SafePlanInput`](#safeplaninput)

***

### sanitizeSubscriptionUpdate()

```ts
function sanitizeSubscriptionUpdate(input): SafeSubscriptionUpdate;
```

Defined in: [security.ts:197](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/security.ts#L197)

Reduce a client-supplied subscription update to the safe subset.

`customer_id` is the one to note: Zoho's update endpoint accepts it, so a
forwarded body would let a caller *reassign a subscription to another
customer*. It is dropped here, along with all the pricing fields.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

#### Returns

[`SafeSubscriptionUpdate`](#safesubscriptionupdate)
