# errors

## Classes

### ZohoBillingAuthError

Defined in: [errors.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L39)

Credentials are missing, expired, or the token is for the wrong region.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingAuthError(message, context?): ZohoBillingAuthError;
```

Defined in: [errors.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingAuthError`](#zohobillingautherror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingConnectionError

Defined in: [errors.ts:97](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L97)

The request never completed: DNS failure, socket error, timeout, abort.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingConnectionError(message, context?): ZohoBillingConnectionError;
```

Defined in: [errors.ts:98](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L98)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingConnectionError`](#zohobillingconnectionerror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingError

Defined in: [errors.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L22)

#### Extends

- `Error`

#### Extended by

- [`ZohoBillingAuthError`](#zohobillingautherror)
- [`ZohoBillingPermissionError`](#zohobillingpermissionerror)
- [`ZohoBillingNotFoundError`](#zohobillingnotfounderror)
- [`ZohoBillingInvalidRequestError`](#zohobillinginvalidrequesterror)
- [`ZohoBillingRateLimitError`](#zohobillingratelimiterror)
- [`ZohoBillingServerError`](#zohobillingservererror)
- [`ZohoBillingConnectionError`](#zohobillingconnectionerror)
- [`ZohoWebhookVerificationError`](webhooks.md#zohowebhookverificationerror)
- [`ZohoBillingInputError`](security.md#zohobillinginputerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingError(message, context?): ZohoBillingError;
```

Defined in: [errors.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingError`](#zohobillingerror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

***

### ZohoBillingInvalidRequestError

Defined in: [errors.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L63)

Request was rejected as malformed or business-rule invalid.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingInvalidRequestError(message, context?): ZohoBillingInvalidRequestError;
```

Defined in: [errors.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingInvalidRequestError`](#zohobillinginvalidrequesterror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingNotFoundError

Defined in: [errors.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L55)

The addressed resource does not exist in this organization.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingNotFoundError(message, context?): ZohoBillingNotFoundError;
```

Defined in: [errors.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingNotFoundError`](#zohobillingnotfounderror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingPermissionError

Defined in: [errors.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L47)

The token is valid but lacks the scope for this operation.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingPermissionError(message, context?): ZohoBillingPermissionError;
```

Defined in: [errors.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingPermissionError`](#zohobillingpermissionerror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingRateLimitError

Defined in: [errors.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L74)

Zoho throttled the request. Zoho allows 100 requests/minute/organization and
also enforces a per-plan daily cap; both surface as HTTP 429.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingRateLimitError(message, context?): ZohoBillingRateLimitError;
```

Defined in: [errors.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) & \{ `retryAfter?`: `number`; \} |

###### Returns

[`ZohoBillingRateLimitError`](#zohobillingratelimiterror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### retryAfter?

```ts
readonly optional retryAfter?: number;
```

Defined in: [errors.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L76)

Seconds to wait before retrying, when Zoho sent a `Retry-After` header.

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

***

### ZohoBillingServerError

Defined in: [errors.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L89)

Zoho returned a 5xx. Safe to retry idempotent calls.

#### Extends

- [`ZohoBillingError`](#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoBillingServerError(message, context?): ZohoBillingServerError;
```

Defined in: [errors.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) |

###### Returns

[`ZohoBillingServerError`](#zohobillingservererror)

###### Overrides

[`ZohoBillingError`](#zohobillingerror).[`constructor`](#constructor-2)

#### Properties

##### body?

```ts
readonly optional body?: unknown;
```

Defined in: [errors.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L25)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`body`](#body-2)

##### code?

```ts
readonly optional code?: number;
```

Defined in: [errors.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L23)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`code`](#code-2)

##### request?

```ts
readonly optional request?: string;
```

Defined in: [errors.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L26)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`request`](#request-2)

##### status?

```ts
readonly optional status?: number;
```

Defined in: [errors.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L24)

###### Inherited from

[`ZohoBillingError`](#zohobillingerror).[`status`](#status-2)

## Interfaces

### ZohoBillingErrorContext

Defined in: [errors.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L9)

Error types for the Zoho Billing client.

Zoho signals failure two ways: a non-2xx HTTP status, and a non-zero `code`
in an otherwise-200 JSON body. Both are normalised into a
`ZohoBillingError` subclass here so callers only have to handle one shape.

#### Properties

##### body?

```ts
optional body?: unknown;
```

Defined in: [errors.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L15)

Raw parsed response body, for debugging or unmapped codes.

##### cause?

```ts
optional cause?: unknown;
```

Defined in: [errors.ts:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L19)

Underlying cause for transport failures.

##### code?

```ts
optional code?: number;
```

Defined in: [errors.ts:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L11)

Zoho's own numeric error code from the response body, when present.

##### request?

```ts
optional request?: string;
```

Defined in: [errors.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L17)

Method + path of the failing request, e.g. `GET /subscriptions`.

##### status?

```ts
optional status?: number;
```

Defined in: [errors.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L13)

HTTP status, when the failure came from a non-2xx response.

## Functions

### createZohoBillingError()

```ts
function createZohoBillingError(message, context): ZohoBillingError;
```

Defined in: [errors.ts:111](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L111)

Build the right error subclass for a failed response.

Classification keys off HTTP status first because that is the one signal
Zoho sets consistently across modules; the body `code` is carried through
for callers that need to branch on a specific Zoho code.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context` | [`ZohoBillingErrorContext`](#zohobillingerrorcontext) & \{ `retryAfter?`: `number`; \} |

#### Returns

[`ZohoBillingError`](#zohobillingerror)

***

### isRetryableError()

```ts
function isRetryableError(error): boolean;
```

Defined in: [errors.ts:132](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/errors.ts#L132)

True when retrying the same request could plausibly succeed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

`boolean`
