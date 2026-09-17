# webhooks

## Classes

### ZohoWebhookVerificationError

Defined in: [webhooks.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L32)

#### Extends

- [`ZohoBillingError`](errors.md#zohobillingerror)

#### Constructors

##### Constructor

```ts
new ZohoWebhookVerificationError(message): ZohoWebhookVerificationError;
```

Defined in: [webhooks.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`ZohoWebhookVerificationError`](#zohowebhookverificationerror)

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

### ConstructEventOptions

Defined in: [webhooks.ts:128](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L128)

#### Properties

##### payload

```ts
payload: string | Buffer<ArrayBufferLike>;
```

Defined in: [webhooks.ts:129](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L129)

##### providedSecret?

```ts
optional providedSecret?: string | null;
```

Defined in: [webhooks.ts:131](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L131)

Shared secret presented by the caller, if you configured one.

##### secret?

```ts
optional secret?: string;
```

Defined in: [webhooks.ts:133](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L133)

Expected shared secret. When set, a mismatch throws.

##### signature?

```ts
optional signature?: string | null;
```

Defined in: [webhooks.ts:135](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L135)

HMAC from a signing proxy, if you have one in front.

***

### VerifyWebhookSecretOptions

Defined in: [webhooks.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L52)

#### Properties

##### expected

```ts
expected: string;
```

Defined in: [webhooks.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L59)

The secret you expect, from your environment.

##### provided

```ts
provided: string | null | undefined;
```

Defined in: [webhooks.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L57)

The secret presented by the caller: read it from the header or query
parameter you configured in Zoho's webhook settings.

***

### VerifyWebhookSignatureOptions

Defined in: [webhooks.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L76)

#### Properties

##### algorithm?

```ts
optional algorithm?: "sha256" | "sha512";
```

Defined in: [webhooks.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L82)

##### payload

```ts
payload: string;
```

Defined in: [webhooks.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L78)

Raw request body, exactly as received. Do not re-serialise it.

##### secret

```ts
secret: string;
```

Defined in: [webhooks.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L81)

##### signature

```ts
signature: string;
```

Defined in: [webhooks.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L80)

Hex-encoded HMAC from the request header.

## Functions

### constructEvent()

```ts
function constructEvent(__namedParameters): ZohoEvent;
```

Defined in: [webhooks.ts:145](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L145)

Verify and parse a webhook in one step - the rough equivalent of Stripe's
`constructEvent`.

When `secret` is supplied, the caller must present it (via `providedSecret`
or a matching `signature`) or this throws.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ConstructEventOptions`](#constructeventoptions) |

#### Returns

[`ZohoEvent`](index.md#zohoevent)

***

### getEventResource()

```ts
function getEventResource<K>(event, key): ZohoEventPayload[K] | undefined;
```

Defined in: [webhooks.ts:175](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L175)

Pull the resource an event carries, e.g. `getEventResource(e, "subscription")`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ZohoEventPayload`](index.md#zohoeventpayload-1) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`ZohoEvent`](index.md#zohoevent) |
| `key` | `K` |

#### Returns

[`ZohoEventPayload`](index.md#zohoeventpayload-1)\[`K`\] \| `undefined`

***

### isEventType()

```ts
function isEventType<T>(event, type): event is ZohoEvent & { event_type: T };
```

Defined in: [webhooks.ts:167](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L167)

Narrow an event to a specific type, for exhaustive switch handling.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZohoEventType`](index.md#zohoeventtype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`ZohoEvent`](index.md#zohoevent) |
| `type` | `T` |

#### Returns

`event is ZohoEvent & { event_type: T }`

***

### parseWebhookEvent()

```ts
function parseWebhookEvent(payload): ZohoEvent;
```

Defined in: [webhooks.ts:110](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L110)

Parse a raw webhook body into a typed event.

Throws on malformed JSON so a bad body surfaces as a 400 rather than an
undefined field somewhere downstream.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `string` \| `Buffer`\<`ArrayBufferLike`\> |

#### Returns

[`ZohoEvent`](index.md#zohoevent)

***

### safeCompare()

```ts
function safeCompare(a, b): boolean;
```

Defined in: [webhooks.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L46)

Compare two secrets without leaking their contents through timing.

Both sides are hashed to a fixed 32 bytes first, so `timingSafeEqual` never
throws on a length mismatch - and the length itself stops being a side
channel.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

***

### verifyWebhookSecret()

```ts
function verifyWebhookSecret(__namedParameters): boolean;
```

Defined in: [webhooks.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L68)

Check a shared secret sent by Zoho against the one you configured.

Returns `false` rather than throwing when the secret is absent, so callers
can respond 401 uniformly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`VerifyWebhookSecretOptions`](#verifywebhooksecretoptions) |

#### Returns

`boolean`

***

### verifyWebhookSignature()

```ts
function verifyWebhookSignature(__namedParameters): boolean;
```

Defined in: [webhooks.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/webhooks.ts#L91)

Verify an HMAC over the raw body.

Only useful when something in front of your endpoint signs the request -
Zoho Billing does not sign webhooks itself. See the module doc above.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`VerifyWebhookSignatureOptions`](#verifywebhooksignatureoptions) |

#### Returns

`boolean`
