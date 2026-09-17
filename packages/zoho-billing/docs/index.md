# index

## Classes

### Addons

Defined in: [resources/catalog.ts:161](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L161)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Addons(client): Addons;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Addons`](#addons)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoAddon>;
```

Defined in: [resources/catalog.ts:162](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateAddonParams`](#createaddonparams) |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)\>

##### delete()

```ts
delete(addonCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:191](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### list()

```ts
list(params?): Promise<ZohoAddon[]>;
```

Defined in: [resources/catalog.ts:197](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L197)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListAddonsParams`](#listaddonsparams) |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoAddon[]>;
```

Defined in: [resources/catalog.ts:205](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L205)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListAddonsParams`](#listaddonsparams) |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)[]\>

##### markAsActive()

```ts
markAsActive(addonCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:211](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsInactive()

```ts
markAsInactive(addonCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:218](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L218)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(addonCode): Promise<ZohoAddon>;
```

Defined in: [resources/catalog.ts:173](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L173)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)\>

##### update()

```ts
update(addonCode, params): Promise<ZohoAddon>;
```

Defined in: [resources/catalog.ts:180](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L180)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |
| `params` | [`UpdateAddonParams`](#updateaddonparams) |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)\>

***

### Coupons

Defined in: [resources/catalog.ts:226](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L226)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Coupons(client): Coupons;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Coupons`](#coupons)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoCoupon>;
```

Defined in: [resources/catalog.ts:227](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L227)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateCouponParams`](#createcouponparams) |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)\>

##### delete()

```ts
delete(couponCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:253](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L253)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### list()

```ts
list(params?): Promise<ZohoCoupon[]>;
```

Defined in: [resources/catalog.ts:259](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L259)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoCoupon[]>;
```

Defined in: [resources/catalog.ts:267](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L267)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)[]\>

##### markAsActive()

```ts
markAsActive(couponCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:273](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L273)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsInactive()

```ts
markAsInactive(couponCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:280](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L280)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(couponCode): Promise<ZohoCoupon>;
```

Defined in: [resources/catalog.ts:235](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L235)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)\>

##### update()

```ts
update(couponCode, params): Promise<ZohoCoupon>;
```

Defined in: [resources/catalog.ts:242](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L242)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |
| `params` | [`UpdateCouponParams`](#updatecouponparams) |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)\>

***

### CreditNotes

Defined in: [resources/billing.ts:208](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L208)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new CreditNotes(client): CreditNotes;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`CreditNotes`](#creditnotes)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### applyToInvoices()

```ts
applyToInvoices(creditNoteId, params): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:256](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L256)

Offset open invoices with this credit note's balance.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |
| `params` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### convertToOpen()

```ts
convertToOpen(creditNoteId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:238](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L238)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### create()

```ts
create(params): Promise<ZohoCreditNote>;
```

Defined in: [resources/billing.ts:209](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L209)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateCreditNoteParams`](#createcreditnoteparams) |

###### Returns

`Promise`\<[`ZohoCreditNote`](#zohocreditnote)\>

##### delete()

```ts
delete(creditNoteId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:224](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L224)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### email()

```ts
email(creditNoteId, params?): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:245](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L245)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |
| `params` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### refund()

```ts
refund(creditNoteId, params): Promise<ZohoRefund>;
```

Defined in: [resources/billing.ts:267](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L267)

Refund a credit note's balance back to the customer.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |
| `params` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`ZohoRefund`](#zohorefund)\>

##### retrieve()

```ts
retrieve(creditNoteId): Promise<ZohoCreditNote>;
```

Defined in: [resources/billing.ts:217](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L217)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |

###### Returns

`Promise`\<[`ZohoCreditNote`](#zohocreditnote)\>

##### void()

```ts
void(creditNoteId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:231](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

***

### Customers

Defined in: [resources/customers.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L15)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Customers(client): Customers;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Customers`](#customers)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoCustomer>;
```

Defined in: [resources/customers.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateCustomerParams`](#createcustomerparams) |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)\>

##### createContactPerson()

```ts
createContactPerson(customerId, params): Promise<ZohoContactPerson>;
```

Defined in: [resources/customers.ts:132](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `params` | [`ZohoContactPerson`](#zohocontactperson) |

###### Returns

`Promise`\<[`ZohoContactPerson`](#zohocontactperson)\>

##### delete()

```ts
delete(customerId): Promise<ZohoResponse>;
```

Defined in: [resources/customers.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### deleteCard()

```ts
deleteCard(customerId, cardId): Promise<ZohoResponse>;
```

Defined in: [resources/customers.ts:118](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L118)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `cardId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### deleteContactPerson()

```ts
deleteContactPerson(customerId, contactPersonId): Promise<ZohoResponse>;
```

Defined in: [resources/customers.ts:159](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `contactPersonId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### getByReference()

```ts
getByReference(referenceId): Promise<ZohoCustomer>;
```

Defined in: [resources/customers.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L37)

Look up a customer by the `reference_id` you assigned.

This is the clean way to bridge your user table to Zoho without persisting
Zoho's own IDs on your side.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `referenceId` | `string` |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)\>

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoCustomer, void, undefined>;
```

Defined in: [resources/customers.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListCustomersParams`](#listcustomersparams) |

###### Returns

`AsyncGenerator`\<[`ZohoCustomer`](#zohocustomer), `void`, `undefined`\>

##### list()

```ts
list(params?): Promise<ZohoCustomer[]>;
```

Defined in: [resources/customers.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListCustomersParams`](#listcustomersparams) |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoCustomer[]>;
```

Defined in: [resources/customers.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListCustomersParams`](#listcustomersparams) |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)[]\>

##### listCards()

```ts
listCards(customerId): Promise<ZohoCard[]>;
```

Defined in: [resources/customers.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoCard`](#zohocard)[]\>

##### listContactPersons()

```ts
listContactPersons(customerId): Promise<ZohoContactPerson[]>;
```

Defined in: [resources/customers.ts:125](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L125)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoContactPerson`](#zohocontactperson)[]\>

##### listTransactions()

```ts
listTransactions(customerId): Promise<ZohoTransaction[]>;
```

Defined in: [resources/customers.ts:97](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L97)

Invoices, payments, and credits for a customer, newest first.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoTransaction`](#zohotransaction)[]\>

##### markAsActive()

```ts
markAsActive(customerId): Promise<ZohoResponse>;
```

Defined in: [resources/customers.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsInactive()

```ts
markAsInactive(customerId): Promise<ZohoResponse>;
```

Defined in: [resources/customers.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(customerId): Promise<ZohoCustomer>;
```

Defined in: [resources/customers.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)\>

##### retrieveCard()

```ts
retrieveCard(customerId, cardId): Promise<ZohoCard>;
```

Defined in: [resources/customers.ts:111](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L111)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `cardId` | `string` |

###### Returns

`Promise`\<[`ZohoCard`](#zohocard)\>

##### update()

```ts
update(customerId, params): Promise<ZohoCustomer>;
```

Defined in: [resources/customers.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `params` | [`UpdateCustomerParams`](#updatecustomerparams) |

###### Returns

`Promise`\<[`ZohoCustomer`](#zohocustomer)\>

##### updateContactPerson()

```ts
updateContactPerson(
   customerId, 
   contactPersonId, 
   params
): Promise<ZohoContactPerson>;
```

Defined in: [resources/customers.ts:145](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/customers.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `contactPersonId` | `string` |
| `params` | [`ZohoContactPerson`](#zohocontactperson) |

###### Returns

`Promise`\<[`ZohoContactPerson`](#zohocontactperson)\>

***

### Events

Defined in: [resources/events.ts:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/events.ts#L11)

The events feed backing Zoho's webhooks.

Webhooks are best-effort: an endpoint that is down during a delivery does
not get a replay. Polling this feed on a schedule, keyed by the last
`event_id` you processed, is how you close that gap.

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Events(client): Events;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Events`](#events)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoEvent, void, undefined>;
```

Defined in: [resources/events.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/events.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListEventsParams`](#listeventsparams) |

###### Returns

`AsyncGenerator`\<[`ZohoEvent`](#zohoevent), `void`, `undefined`\>

##### list()

```ts
list(params?): Promise<ZohoEvent[]>;
```

Defined in: [resources/events.ts:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/events.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListEventsParams`](#listeventsparams) |

###### Returns

`Promise`\<[`ZohoEvent`](#zohoevent)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoEvent[]>;
```

Defined in: [resources/events.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/events.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListEventsParams`](#listeventsparams) |

###### Returns

`Promise`\<[`ZohoEvent`](#zohoevent)[]\>

##### retrieve()

```ts
retrieve(eventId): Promise<ZohoEvent>;
```

Defined in: [resources/events.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/events.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventId` | `string` |

###### Returns

`Promise`\<[`ZohoEvent`](#zohoevent)\>

***

### HostedPages

Defined in: [resources/hostedpages.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L22)

Hosted pages: Zoho-hosted checkout flows, the closest analogue to Stripe
Checkout.

The flow is: create a page, redirect the customer to `url`, and when they
come back, call `retrieve(hostedpage_id)` and confirm `status === "success"`
before granting anything. The redirect itself is not proof of payment - a
customer can hit the return URL directly.

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new HostedPages(client): HostedPages;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`HostedPages`](#hostedpages)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### createAddPaymentMethodPage()

```ts
createAddPaymentMethodPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`PaymentMethodHostedPageParams`](#paymentmethodhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createBuyOneTimeAddonPage()

```ts
createBuyOneTimeAddonPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BuyOneTimeAddonHostedPageParams`](#buyonetimeaddonhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createInvoicePaymentPage()

```ts
createInvoicePaymentPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`InvoicePaymentHostedPageParams`](#invoicepaymenthostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createSubscriptionPage()

```ts
createSubscriptionPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L24)

New subscription, optionally creating the customer at the same time.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateSubscriptionHostedPageParams`](#createsubscriptionhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createUpdateCardPage()

```ts
createUpdateCardPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`UpdateCardHostedPageParams`](#updatecardhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createUpdatePaymentMethodPage()

```ts
createUpdatePaymentMethodPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`PaymentMethodHostedPageParams`](#paymentmethodhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### createUpdateSubscriptionPage()

```ts
createUpdateSubscriptionPage(params): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L35)

Upgrade/downgrade flow hosted by Zoho.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`UpdateSubscriptionHostedPageParams`](#updatesubscriptionhostedpageparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

##### list()

```ts
list(params?): Promise<ZohoHostedPage[]>;
```

Defined in: [resources/hostedpages.ts:106](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L106)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)[]\>

##### retrieve()

```ts
retrieve(hostedPageId): Promise<ZohoHostedPage>;
```

Defined in: [resources/hostedpages.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/hostedpages.ts#L99)

Fetch a hosted page's outcome. Call this when the customer returns, and
treat anything other than `status === "success"` as not-yet-paid.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostedPageId` | `string` |

###### Returns

`Promise`\<[`ZohoHostedPage`](#zohohostedpage)\>

***

### Invoices

Defined in: [resources/billing.ts:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L20)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Invoices(client): Invoices;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Invoices`](#invoices-1)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### addLineItems()

```ts
addLineItems(invoiceId, params): Promise<ZohoInvoice>;
```

Defined in: [resources/billing.ts:126](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L126)

Add usage charges to a pending metered-billing invoice.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |
| `params` | [`AddInvoiceLineItemsParams`](#addinvoicelineitemsparams) |

###### Returns

`Promise`\<[`ZohoInvoice`](#zohoinvoice)\>

##### applyCredits()

```ts
applyCredits(invoiceId, params): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:115](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L115)

Apply available customer credits against an invoice.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |
| `params` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### cancelWriteOff()

```ts
cancelWriteOff(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:86](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### collect()

```ts
collect(invoiceId, params?): Promise<{
  payment?: ZohoPayment;
}>;
```

Defined in: [resources/billing.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L94)

Charge the customer's stored payment method for an outstanding invoice.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |
| `params` | [`CollectInvoicePaymentParams`](#collectinvoicepaymentparams) |

###### Returns

`Promise`\<\{
  `payment?`: [`ZohoPayment`](#zohopayment);
\}\>

##### convertToOpen()

```ts
convertToOpen(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L72)

Reverse a void, returning the invoice to `open`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### delete()

```ts
delete(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### deleteLineItem()

```ts
deleteLineItem(invoiceId, itemId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:137](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L137)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |
| `itemId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### email()

```ts
email(invoiceId, params?): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |
| `params` | [`EmailInvoiceParams`](#emailinvoiceparams) |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoInvoice, void, undefined>;
```

Defined in: [resources/billing.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListInvoicesParams`](#listinvoicesparams) |

###### Returns

`AsyncGenerator`\<[`ZohoInvoice`](#zohoinvoice), `void`, `undefined`\>

##### list()

```ts
list(params?): Promise<ZohoInvoice[]>;
```

Defined in: [resources/billing.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListInvoicesParams`](#listinvoicesparams) |

###### Returns

`Promise`\<[`ZohoInvoice`](#zohoinvoice)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoInvoice[]>;
```

Defined in: [resources/billing.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListInvoicesParams`](#listinvoicesparams) |

###### Returns

`Promise`\<[`ZohoInvoice`](#zohoinvoice)[]\>

##### markAsSent()

```ts
markAsSent(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L57)

Move a draft invoice to `sent` without emailing it.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(invoiceId): Promise<ZohoInvoice>;
```

Defined in: [resources/billing.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoInvoice`](#zohoinvoice)\>

##### void()

```ts
void(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### writeOff()

```ts
writeOff(invoiceId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

***

### MemoryTokenStore

Defined in: [auth.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L31)

Persistence for access tokens. The default is per-process memory, which is
fine for a long-lived server but wasteful on serverless, where every cold
start re-refreshes. Supply a Redis/DB-backed store there instead.

#### Implements

- [`ZohoTokenStore`](#zohotokenstore)

#### Constructors

##### Constructor

```ts
new MemoryTokenStore(): MemoryTokenStore;
```

###### Returns

[`MemoryTokenStore`](#memorytokenstore)

#### Methods

##### delete()

```ts
delete(key): void;
```

Defined in: [auth.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

`void`

###### Implementation of

[`ZohoTokenStore`](#zohotokenstore).[`delete`](#delete-11)

##### get()

```ts
get(key): ZohoAccessToken | null;
```

Defined in: [auth.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

[`ZohoAccessToken`](#zohoaccesstoken) \| `null`

###### Implementation of

[`ZohoTokenStore`](#zohotokenstore).[`get`](#get-1)

##### set()

```ts
set(key, token): void;
```

Defined in: [auth.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `token` | [`ZohoAccessToken`](#zohoaccesstoken) |

###### Returns

`void`

###### Implementation of

[`ZohoTokenStore`](#zohotokenstore).[`set`](#set-1)

***

### Organizations

Defined in: [resources/organizations.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L22)

Organizations are Zoho's tenant boundary. Every other call is scoped to one
via the organization header, so this is the first endpoint to hit when
setting up: it tells you which `organizationId` to configure.

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Organizations(client): Organizations;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Organizations`](#organizations)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### list()

```ts
list(): Promise<ZohoOrganization[]>;
```

Defined in: [resources/organizations.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L23)

###### Returns

`Promise`\<[`ZohoOrganization`](#zohoorganization)[]\>

##### retrieve()

```ts
retrieve(organizationId): Promise<ZohoOrganization>;
```

Defined in: [resources/organizations.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `organizationId` | `string` |

###### Returns

`Promise`\<[`ZohoOrganization`](#zohoorganization)\>

***

### Payments

Defined in: [resources/billing.ts:148](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L148)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Payments(client): Payments;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Payments`](#payments)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPayment>;
```

Defined in: [resources/billing.ts:150](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L150)

Record an offline payment (cash, cheque, bank transfer).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreatePaymentParams`](#createpaymentparams) |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)\>

##### delete()

```ts
delete(paymentId): Promise<ZohoResponse>;
```

Defined in: [resources/billing.ts:176](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### list()

```ts
list(params?): Promise<ZohoPayment[]>;
```

Defined in: [resources/billing.ts:182](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L182)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListPaymentsParams`](#listpaymentsparams) |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoPayment[]>;
```

Defined in: [resources/billing.ts:190](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListPaymentsParams`](#listpaymentsparams) |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)[]\>

##### refund()

```ts
refund(paymentId, params): Promise<ZohoRefund>;
```

Defined in: [resources/billing.ts:196](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |
| `params` | [`RefundPaymentParams`](#refundpaymentparams) |

###### Returns

`Promise`\<[`ZohoRefund`](#zohorefund)\>

##### retrieve()

```ts
retrieve(paymentId): Promise<ZohoPayment>;
```

Defined in: [resources/billing.ts:158](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L158)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)\>

##### update()

```ts
update(paymentId, params): Promise<ZohoPayment>;
```

Defined in: [resources/billing.ts:165](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L165)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |
| `params` | `Partial`\<[`CreatePaymentParams`](#createpaymentparams)\> |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)\>

***

### Plans

Defined in: [resources/catalog.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L84)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Plans(client): Plans;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Plans`](#plans-2)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPlan>;
```

Defined in: [resources/catalog.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreatePlanParams`](#createplanparams) |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)\>

##### delete()

```ts
delete(planCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:108](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L108)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoPlan, void, undefined>;
```

Defined in: [resources/catalog.ts:126](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L126)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListPlansParams`](#listplansparams) |

###### Returns

`AsyncGenerator`\<[`ZohoPlan`](#zohoplan), `void`, `undefined`\>

##### list()

```ts
list(params?): Promise<ZohoPlan[]>;
```

Defined in: [resources/catalog.ts:114](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L114)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListPlansParams`](#listplansparams) |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoPlan[]>;
```

Defined in: [resources/catalog.ts:122](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L122)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListPlansParams`](#listplansparams) |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)[]\>

##### markAsActive()

```ts
markAsActive(planCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:132](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsFree()

```ts
markAsFree(planCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:146](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L146)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsInactive()

```ts
markAsInactive(planCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:139](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsNonFree()

```ts
markAsNonFree(planCode): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:153](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L153)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(planCode): Promise<ZohoPlan>;
```

Defined in: [resources/catalog.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L93)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)\>

##### update()

```ts
update(planCode, params): Promise<ZohoPlan>;
```

Defined in: [resources/catalog.ts:100](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L100)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |
| `params` | [`UpdatePlanParams`](#updateplanparams) |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)\>

***

### Pricebooks

Defined in: [resources/catalog.ts:288](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L288)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Pricebooks(client): Pricebooks;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Pricebooks`](#pricebooks)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPricebook>;
```

Defined in: [resources/catalog.ts:303](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L303)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`ZohoPricebook`](#zohopricebook)\>

##### delete()

```ts
delete(pricebookId): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:311](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L311)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `pricebookId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### list()

```ts
list(params?): Promise<ZohoPricebook[]>;
```

Defined in: [resources/catalog.ts:289](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L289)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoPricebook`](#zohopricebook)[]\>

##### retrieve()

```ts
retrieve(pricebookId): Promise<ZohoPricebook>;
```

Defined in: [resources/catalog.ts:296](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L296)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `pricebookId` | `string` |

###### Returns

`Promise`\<[`ZohoPricebook`](#zohopricebook)\>

***

### Products

Defined in: [resources/catalog.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L22)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Products(client): Products;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Products`](#products)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoProduct>;
```

Defined in: [resources/catalog.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateProductParams`](#createproductparams) |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)\>

##### delete()

```ts
delete(productId): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### list()

```ts
list(params?): Promise<ZohoProduct[]>;
```

Defined in: [resources/catalog.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)[]\>

##### listAll()

```ts
listAll(params?): Promise<ZohoProduct[]>;
```

Defined in: [resources/catalog.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ZohoListParams`](#zoholistparams) |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)[]\>

##### markAsActive()

```ts
markAsActive(productId): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:69](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### markAsInactive()

```ts
markAsInactive(productId): Promise<ZohoResponse>;
```

Defined in: [resources/catalog.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### retrieve()

```ts
retrieve(productId): Promise<ZohoProduct>;
```

Defined in: [resources/catalog.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)\>

##### update()

```ts
update(productId, params): Promise<ZohoProduct>;
```

Defined in: [resources/catalog.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/catalog.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |
| `params` | `Partial`\<[`CreateProductParams`](#createproductparams)\> |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)\>

***

### Refunds

Defined in: [resources/billing.ts:281](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L281)

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Refunds(client): Refunds;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Refunds`](#refunds)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### retrieve()

```ts
retrieve(refundId): Promise<ZohoRefund>;
```

Defined in: [resources/billing.ts:282](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/billing.ts#L282)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `refundId` | `string` |

###### Returns

`Promise`\<[`ZohoRefund`](#zohorefund)\>

***

### Subscriptions

Defined in: [resources/subscriptions.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L34)

The subscription lifecycle: the core of the Zoho Billing API.

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Subscriptions(client): Subscriptions;
```

Defined in: [resources/base.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ZohoBillingClient`](#zohobillingclient-1) |

###### Returns

[`Subscriptions`](#subscriptions-1)

###### Inherited from

```ts
ZohoResource.constructor
```

#### Properties

##### client

```ts
protected readonly client: ZohoBillingClient;
```

Defined in: [resources/base.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/base.ts#L5)

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### addCharge()

```ts
addCharge(subscriptionId, params): Promise<{
  invoice?: ZohoInvoice;
}>;
```

Defined in: [resources/subscriptions.ts:201](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L201)

Add an ad-hoc charge, raising an invoice immediately.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`AddChargeParams`](#addchargeparams) |

###### Returns

`Promise`\<\{
  `invoice?`: [`ZohoInvoice`](#zohoinvoice);
\}\>

##### addContactPersons()

```ts
addContactPersons(subscriptionId, contactPersonIds): Promise<ZohoContactPerson[]>;
```

Defined in: [resources/subscriptions.ts:326](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L326)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `contactPersonIds` | `string`[] |

###### Returns

`Promise`\<[`ZohoContactPerson`](#zohocontactperson)[]\>

##### addNote()

```ts
addNote(subscriptionId, description): Promise<ZohoNote | undefined>;
```

Defined in: [resources/subscriptions.ts:367](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L367)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `description` | `string` |

###### Returns

`Promise`\<[`ZohoNote`](#zohonote) \| `undefined`\>

##### applyCoupon()

```ts
applyCoupon(subscriptionId, couponCode): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:211](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `couponCode` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### buyOneTimeAddon()

```ts
buyOneTimeAddon(subscriptionId, params): Promise<{
  invoice?: ZohoInvoice;
  subscription?: ZohoSubscription;
}>;
```

Defined in: [resources/subscriptions.ts:187](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L187)

Charge for a one-time addon outside the normal renewal cycle.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`BuyOneTimeAddonParams`](#buyonetimeaddonparams) |

###### Returns

`Promise`\<\{
  `invoice?`: [`ZohoInvoice`](#zohoinvoice);
  `subscription?`: [`ZohoSubscription`](#zohosubscription);
\}\>

##### cancel()

```ts
cancel(subscriptionId, params?): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L119)

Cancel a subscription.

Defaults to cancelling at the end of the current term, which leaves the
customer with the access they already paid for. Pass
`{ cancel_at_end: false }` to cut access off immediately.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`CancelSubscriptionParams`](#cancelsubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### create()

```ts
create(params): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L39)

Create a subscription. Pass `customer_id` for an existing customer, or a
`customer` object to create one in the same call.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateSubscriptionParams`](#createsubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### delete()

```ts
delete(subscriptionId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L73)

Permanently delete a subscription and its history. Rarely what you want.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### deleteNote()

```ts
deleteNote(subscriptionId, noteId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:378](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L378)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `noteId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### deleteScheduledChanges()

```ts
deleteScheduledChanges(subscriptionId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:274](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L274)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### disableMeteredBilling()

```ts
disableMeteredBilling(subscriptionId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:399](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L399)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### enableMeteredBilling()

```ts
enableMeteredBilling(subscriptionId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:392](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L392)

Hold renewal invoices in `pending` until usage line items are added.
Required for usage-based billing.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### extend()

```ts
extend(subscriptionId, params): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:175](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L175)

Lengthen the current term, e.g. to hand out goodwill time.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`ExtendSubscriptionParams`](#extendsubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### getCustomFields()

```ts
getCustomFields(subscriptionId): Promise<ZohoCustomField[]>;
```

Defined in: [resources/subscriptions.ts:343](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L343)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoCustomField`](#zohocustomfield)[]\>

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoSubscription, void, undefined>;
```

Defined in: [resources/subscriptions.ts:102](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L102)

Stream subscriptions page by page without buffering them all.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListSubscriptionsParams`](#listsubscriptionsparams) |

###### Returns

`AsyncGenerator`\<[`ZohoSubscription`](#zohosubscription), `void`, `undefined`\>

##### list()

```ts
list(params?): Promise<{
  response: SubscriptionListResponse;
  subscriptions: ZohoSubscription[];
}>;
```

Defined in: [resources/subscriptions.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L81)

One page of subscriptions. Use `listAll`/`iterate` to walk every page.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListSubscriptionsParams`](#listsubscriptionsparams) |

###### Returns

`Promise`\<\{
  `response`: [`SubscriptionListResponse`](#subscriptionlistresponse);
  `subscriptions`: [`ZohoSubscription`](#zohosubscription)[];
\}\>

##### listAll()

```ts
listAll(params?): Promise<ZohoSubscription[]>;
```

Defined in: [resources/subscriptions.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L93)

Every subscription across all pages.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ListSubscriptionsParams`](#listsubscriptionsparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)[]\>

##### listNotes()

```ts
listNotes(subscriptionId): Promise<ZohoNote[]>;
```

Defined in: [resources/subscriptions.ts:360](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L360)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoNote`](#zohonote)[]\>

##### listRecentActivities()

```ts
listRecentActivities(subscriptionId): Promise<SubscriptionActivity[]>;
```

Defined in: [resources/subscriptions.ts:282](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L282)

Audit trail for this subscription.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`SubscriptionActivity`](#subscriptionactivity)[]\>

##### listScheduledChanges()

```ts
listScheduledChanges(subscriptionId): Promise<ScheduledChange | undefined>;
```

Defined in: [resources/subscriptions.ts:265](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L265)

Changes queued to apply at the next renewal.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ScheduledChange`](#scheduledchange) \| `undefined`\>

##### pause()

```ts
pause(subscriptionId, params?): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:140](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L140)

Pause billing and access, optionally scheduling the pause and resume.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`PauseSubscriptionParams`](#pausesubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### postpone()

```ts
postpone(subscriptionId, params): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:163](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L163)

Push the next renewal date out without changing anything else.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`PostponeRenewalParams`](#postponerenewalparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### reactivate()

```ts
reactivate(subscriptionId): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:131](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L131)

Bring a cancelled or expired subscription back to `live`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### removeCard()

```ts
removeCard(subscriptionId): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:242](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L242)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### removeCoupon()

```ts
removeCoupon(subscriptionId): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:222](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L222)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### resume()

```ts
resume(subscriptionId, params?): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:151](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`ResumeSubscriptionParams`](#resumesubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### retrieve()

```ts
retrieve(subscriptionId): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### setAutoCollect()

```ts
setAutoCollect(subscriptionId, autoCollect): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:253](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L253)

Switch between online (auto-charge the card) and offline (invoice the
customer) collection.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `autoCollect` | `boolean` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### update()

```ts
update(subscriptionId, params): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L61)

Change the plan, addons, or coupon on a subscription.

Whether the change applies immediately (prorated) or at renewal depends on
`end_of_term`; leaving it unset defers to the organization's setting, so
set it explicitly when the timing matters.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `params` | [`UpdateSubscriptionParams`](#updatesubscriptionparams) |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### updateCard()

```ts
updateCard(subscriptionId, cardId): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:231](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L231)

Point the subscription at a different stored card.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `cardId` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### updateCustomFields()

```ts
updateCustomFields(subscriptionId, customFields): Promise<ZohoResponse>;
```

Defined in: [resources/subscriptions.ts:350](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L350)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `customFields` | [`ZohoCustomField`](#zohocustomfield)[] |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

##### updateLineItemDescription()

```ts
updateLineItemDescription(
   subscriptionId, 
   planOrAddonCode, 
   description
): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:314](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L314)

Override the invoice-facing description of a plan or addon line.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `planOrAddonCode` | `string` |
| `description` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### updateReference()

```ts
updateReference(subscriptionId, referenceId): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:291](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L291)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `referenceId` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

##### updateSalesperson()

```ts
updateSalesperson(subscriptionId, salespersonName): Promise<ZohoSubscription>;
```

Defined in: [resources/subscriptions.ts:302](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L302)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `salespersonName` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

***

### ZohoBilling

Defined in: [index.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L40)

Entry point. One instance per Zoho organization.

#### Constructors

##### Constructor

```ts
new ZohoBilling(options): ZohoBilling;
```

Defined in: [index.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingClientOptions`](#zohobillingclientoptions) |

###### Returns

[`ZohoBilling`](#zohobilling)

#### Properties

##### addons

```ts
readonly addons: Addons;
```

Defined in: [index.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L48)

##### client

```ts
readonly client: ZohoBillingClient;
```

Defined in: [index.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L42)

Escape hatch for endpoints this SDK does not wrap yet.

##### coupons

```ts
readonly coupons: Coupons;
```

Defined in: [index.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L49)

##### creditNotes

```ts
readonly creditNotes: CreditNotes;
```

Defined in: [index.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L53)

##### customers

```ts
readonly customers: Customers;
```

Defined in: [index.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L45)

##### events

```ts
readonly events: Events;
```

Defined in: [index.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L56)

##### hostedPages

```ts
readonly hostedPages: HostedPages;
```

Defined in: [index.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L55)

##### invoices

```ts
readonly invoices: Invoices;
```

Defined in: [index.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L51)

##### organizations

```ts
readonly organizations: Organizations;
```

Defined in: [index.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L57)

##### payments

```ts
readonly payments: Payments;
```

Defined in: [index.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L52)

##### plans

```ts
readonly plans: Plans;
```

Defined in: [index.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L47)

##### pricebooks

```ts
readonly pricebooks: Pricebooks;
```

Defined in: [index.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L50)

##### products

```ts
readonly products: Products;
```

Defined in: [index.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L46)

##### refunds

```ts
readonly refunds: Refunds;
```

Defined in: [index.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L54)

##### subscriptions

```ts
readonly subscriptions: Subscriptions;
```

Defined in: [index.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L44)

***

### ZohoBillingClient

Defined in: [client.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L71)

#### Constructors

##### Constructor

```ts
new ZohoBillingClient(options): ZohoBillingClient;
```

Defined in: [client.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoBillingClientOptions`](#zohobillingclientoptions) |

###### Returns

[`ZohoBillingClient`](#zohobillingclient-1)

#### Accessors

##### organizationId

###### Get Signature

```ts
get organizationId(): string;
```

Defined in: [client.ts:108](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L108)

###### Returns

`string`

#### Methods

##### listAll()

```ts
listAll<T>(
   path, 
   key, 
   options?
): Promise<T[]>;
```

Defined in: [client.ts:270](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L270)

Collect every page of a list endpoint into a single array.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `key` | `string` |
| `options` | [`ZohoRequestOptions`](#zohorequestoptions) |

###### Returns

`Promise`\<`T`[]\>

##### paginate()

```ts
paginate<T>(
   path, 
   key, 
   options?
): AsyncGenerator<T, void, undefined>;
```

Defined in: [client.ts:242](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L242)

Walk every page of a list endpoint, yielding items one at a time.

Zoho paginates with `page`/`per_page` and reports continuation via
`page_context.has_more_page`. When that field is absent, fall back to
"a full page came back, so try the next one" - stopping early on a short
page, which is the only safe read without the flag.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `key` | `string` |
| `options` | [`ZohoRequestOptions`](#zohorequestoptions) |

###### Returns

`AsyncGenerator`\<`T`, `void`, `undefined`\>

##### request()

```ts
request<T>(path, options?): Promise<T>;
```

Defined in: [client.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L119)

Issue one API call and return the parsed body.

Retries throttled, 5xx, and connection failures with exponential backoff.
A 401 is retried exactly once after force-refreshing the access token,
which covers tokens revoked or rotated out from under a warm cache.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options` | [`ZohoRequestOptions`](#zohorequestoptions) |

###### Returns

`Promise`\<`T`\>

***

### ZohoTokenManager

Defined in: [auth.ts:105](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L105)

#### Constructors

##### Constructor

```ts
new ZohoTokenManager(options): ZohoTokenManager;
```

Defined in: [auth.ts:115](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L115)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoTokenManagerOptions`](#zohotokenmanageroptions) |

###### Returns

[`ZohoTokenManager`](#zohotokenmanager)

#### Accessors

##### canRefresh

###### Get Signature

```ts
get canRefresh(): boolean;
```

Defined in: [auth.ts:161](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L161)

True when this manager can mint a new token after a 401.

###### Returns

`boolean`

#### Methods

##### getAccessToken()

```ts
getAccessToken(): Promise<string>;
```

Defined in: [auth.ts:131](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L131)

Return a usable access token, refreshing if the cached one is missing or
within the leeway window of expiring.

###### Returns

`Promise`\<`string`\>

##### invalidate()

```ts
invalidate(): Promise<void>;
```

Defined in: [auth.ts:156](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L156)

Drop the cached token so the next call refreshes. Used when Zoho rejects a
token we believed was still valid (e.g. revoked server-side).

###### Returns

`Promise`\<`void`\>

## Interfaces

### AddChargeParams

Defined in: [types/subscription.ts:229](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L229)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: [types/subscription.ts:232](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L232)

##### amount

```ts
amount: number;
```

Defined in: [types/subscription.ts:230](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L230)

##### description?

```ts
optional description?: string;
```

Defined in: [types/subscription.ts:231](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L231)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/subscription.ts:233](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L233)

***

### AddInvoiceLineItemsParams

Defined in: [types/billing.ts:134](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L134)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### line\_items

```ts
line_items: ZohoLineItem[];
```

Defined in: [types/billing.ts:135](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L135)

***

### BuyOneTimeAddonHostedPageParams

Defined in: [types/hostedpage.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L76)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons

```ts
addons: ZohoSubscriptionAddon & {
  addon_code: string;
}[];
```

Defined in: [types/hostedpage.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L78)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: [types/hostedpage.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L77)

***

### BuyOneTimeAddonParams

Defined in: [types/subscription.ts:223](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L223)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons

```ts
addons: ZohoSubscriptionAddon & {
  addon_code: string;
}[];
```

Defined in: [types/subscription.ts:224](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L224)

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/subscription.ts:225](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L225)

***

### CancelSubscriptionParams

Defined in: [types/subscription.ts:215](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L215)

#### Properties

##### cancel\_at\_end?

```ts
optional cancel_at_end?: boolean;
```

Defined in: [types/subscription.ts:220](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L220)

`true` cancels at the end of the current term (the subscription becomes
`non_renewing` and access continues); `false` cancels immediately.

***

### CollectInvoicePaymentParams

Defined in: [types/billing.ts:115](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L115)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: [types/billing.ts:118](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L118)

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: [types/billing.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L119)

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: [types/billing.ts:117](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L117)

Card to charge. Omit to use the customer's default.

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: [types/billing.ts:120](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L120)

***

### CreateAddonParams

Defined in: [types/catalog.ts:134](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L134)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addon\_code

```ts
addon_code: string;
```

Defined in: [types/catalog.ts:135](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L135)

##### applicable\_to\_all\_plans?

```ts
optional applicable_to_all_plans?: boolean;
```

Defined in: [types/catalog.ts:145](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L145)

When false, restrict availability with `plans`.

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/catalog.ts:148](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L148)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:142](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L142)

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: [types/catalog.ts:141](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L141)

##### name

```ts
name: string;
```

Defined in: [types/catalog.ts:136](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L136)

##### plans?

```ts
optional plans?: {
  plan_code: string;
}[];
```

Defined in: [types/catalog.ts:146](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L146)

###### plan\_code

```ts
plan_code: string;
```

##### price\_brackets

```ts
price_brackets: ZohoPriceBracket[];
```

Defined in: [types/catalog.ts:139](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L139)

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: [types/catalog.ts:138](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L138)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:143](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L143)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/catalog.ts:147](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L147)

##### type?

```ts
optional type?: ZohoAddonType;
```

Defined in: [types/catalog.ts:140](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L140)

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: [types/catalog.ts:137](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L137)

***

### CreateCouponParams

Defined in: [types/catalog.ts:186](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L186)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code: string;
}[];
```

Defined in: [types/catalog.ts:200](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L200)

###### addon\_code

```ts
addon_code: string;
```

##### apply\_to\_addons?

```ts
optional apply_to_addons?: boolean;
```

Defined in: [types/catalog.ts:199](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L199)

##### apply\_to\_plans?

```ts
optional apply_to_plans?: boolean;
```

Defined in: [types/catalog.ts:197](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L197)

##### coupon\_code

```ts
coupon_code: string;
```

Defined in: [types/catalog.ts:187](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L187)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:193](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L193)

##### discount\_by

```ts
discount_by: ZohoDiscountBy;
```

Defined in: [types/catalog.ts:189](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L189)

##### discount\_value

```ts
discount_value: number;
```

Defined in: [types/catalog.ts:191](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L191)

A percentage when `discount_by` is `percentage`, else a flat amount.

##### duration?

```ts
optional duration?: ZohoCouponDuration;
```

Defined in: [types/catalog.ts:192](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L192)

##### expiry\_at?

```ts
optional expiry_at?: string;
```

Defined in: [types/catalog.ts:196](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L196)

##### max\_redemption?

```ts
optional max_redemption?: number;
```

Defined in: [types/catalog.ts:195](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L195)

##### name

```ts
name: string;
```

Defined in: [types/catalog.ts:188](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L188)

##### plans?

```ts
optional plans?: {
  plan_code: string;
}[];
```

Defined in: [types/catalog.ts:198](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L198)

###### plan\_code

```ts
plan_code: string;
```

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:194](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L194)

***

### CreateCreditNoteParams

Defined in: [types/billing.ts:223](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L223)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### creditnote\_items

```ts
creditnote_items: ZohoLineItem[];
```

Defined in: [types/billing.ts:225](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L225)

##### customer\_id

```ts
customer_id: string;
```

Defined in: [types/billing.ts:224](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L224)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:226](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L226)

##### notes?

```ts
optional notes?: string;
```

Defined in: [types/billing.ts:228](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L228)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:227](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L227)

***

### CreateCustomerParams

Defined in: [types/customer.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L55)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: [types/customer.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L66)

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: [types/customer.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L61)

##### contact\_persons?

```ts
optional contact_persons?: ZohoContactPerson[];
```

Defined in: [types/customer.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L68)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/customer.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L65)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/customer.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L84)

##### display\_name

```ts
display_name: string;
```

Defined in: [types/customer.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L56)

##### email?

```ts
optional email?: string;
```

Defined in: [types/customer.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L60)

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: [types/customer.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L58)

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: [types/customer.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L72)

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: [types/customer.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L71)

##### is\_taxable?

```ts
optional is_taxable?: boolean;
```

Defined in: [types/customer.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L75)

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: [types/customer.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L59)

##### mobile?

```ts
optional mobile?: string;
```

Defined in: [types/customer.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L63)

##### notes?

```ts
optional notes?: string;
```

Defined in: [types/customer.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L77)

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/customer.ts:69](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L69)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/customer.ts:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L70)

##### phone?

```ts
optional phone?: string;
```

Defined in: [types/customer.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L62)

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: [types/customer.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L73)

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/customer.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L83)

Your own identifier for this customer. Also the lookup key for
`customers.getByReference`, which is the idiomatic way to map an
application user onto a Zoho customer without storing Zoho's ID.

##### salutation?

```ts
optional salutation?: string;
```

Defined in: [types/customer.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L57)

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: [types/customer.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L67)

##### tax\_exemption\_id?

```ts
optional tax_exemption_id?: string;
```

Defined in: [types/customer.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L76)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/customer.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L74)

##### website?

```ts
optional website?: string;
```

Defined in: [types/customer.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L64)

***

### CreatePaymentParams

Defined in: [types/billing.ts:173](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L173)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: [types/billing.ts:185](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L185)

##### amount

```ts
amount: number;
```

Defined in: [types/billing.ts:176](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L176)

Payment amount in the customer's currency.

##### customer\_id

```ts
customer_id: string;
```

Defined in: [types/billing.ts:174](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L174)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:177](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L177)

##### description?

```ts
optional description?: string;
```

Defined in: [types/billing.ts:181](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L181)

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/billing.ts:182](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L182)

##### invoices?

```ts
optional invoices?: {
  amount_applied: number;
  invoice_id: string;
}[];
```

Defined in: [types/billing.ts:184](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L184)

Invoices to apply this payment against.

###### amount\_applied

```ts
amount_applied: number;
```

###### invoice\_id

```ts
invoice_id: string;
```

##### payment\_mode?

```ts
optional payment_mode?: string;
```

Defined in: [types/billing.ts:179](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L179)

e.g. `cash`, `check`, `banktransfer`, `creditcard`.

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:180](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L180)

***

### CreatePlanParams

Defined in: [types/catalog.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L78)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code: string;
}[];
```

Defined in: [types/catalog.ts:97](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L97)

###### addon\_code

```ts
addon_code: string;
```

##### billing\_cycles?

```ts
optional billing_cycles?: number;
```

Defined in: [types/catalog.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L87)

Total number of cycles before the plan expires. Omit for perpetual.

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/catalog.ts:98](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L98)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L91)

##### interval?

```ts
optional interval?: number;
```

Defined in: [types/catalog.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L84)

Number of `interval_unit`s between charges.

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: [types/catalog.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L85)

##### name

```ts
name: string;
```

Defined in: [types/catalog.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L80)

##### plan\_code

```ts
plan_code: string;
```

Defined in: [types/catalog.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L79)

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: [types/catalog.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L94)

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: [types/catalog.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L93)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L92)

##### recurring\_price

```ts
recurring_price: number;
```

Defined in: [types/catalog.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L82)

Price per interval.

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: [types/catalog.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L90)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/catalog.ts:96](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L96)

##### trial\_period?

```ts
optional trial_period?: number;
```

Defined in: [types/catalog.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L89)

Free trial length in days.

##### unit?

```ts
optional unit?: string;
```

Defined in: [types/catalog.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L95)

***

### CreateProductParams

Defined in: [types/catalog.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L44)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L46)

##### email\_ids?

```ts
optional email_ids?: string;
```

Defined in: [types/catalog.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L47)

##### name

```ts
name: string;
```

Defined in: [types/catalog.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L45)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/catalog.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L48)

***

### CreateSubscriptionHostedPageParams

Defined in: [types/hostedpage.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L45)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/hostedpage.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L51)

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: [types/hostedpage.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L58)

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [types/hostedpage.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L52)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/hostedpage.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L55)

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: [types/hostedpage.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L49)

New customer captured on the hosted page.

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/hostedpage.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L47)

Existing customer. Mutually exclusive with `customer`.

##### exclude\_setup\_fee?

```ts
optional exclude_setup_fee?: boolean;
```

Defined in: [types/hostedpage.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L57)

##### exclude\_trial?

```ts
optional exclude_trial?: boolean;
```

Defined in: [types/hostedpage.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L56)

##### plan

```ts
plan: ZohoSubscriptionPlan & {
  plan_code: string;
};
```

Defined in: [types/hostedpage.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L50)

###### Type Declaration

###### plan\_code

```ts
plan_code: string;
```

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/hostedpage.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L53)

##### starts\_at?

```ts
optional starts_at?: string;
```

Defined in: [types/hostedpage.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L54)

***

### CreateSubscriptionParams

Defined in: [types/subscription.ts:146](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L146)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/subscription.ts:152](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L152)

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: [types/subscription.ts:161](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L161)

`true` charges the card automatically each renewal; `false` bills offline.

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: [types/subscription.ts:166](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L166)

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: [types/subscription.ts:173](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L173)

Bills the setup fee immediately instead of at trial end.

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: [types/subscription.ts:165](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L165)

##### contactpersons?

```ts
optional contactpersons?: {
  contactperson_id?: string;
}[];
```

Defined in: [types/subscription.ts:167](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L167)

###### contactperson\_id?

```ts
optional contactperson_id?: string;
```

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [types/subscription.ts:153](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L153)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/subscription.ts:159](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L159)

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: [types/subscription.ts:150](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L150)

New customer to create alongside the subscription.

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/subscription.ts:148](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L148)

Existing customer. Mutually exclusive with `customer`.

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/subscription.ts:156](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L156)

##### exclude\_setup\_fee?

```ts
optional exclude_setup_fee?: boolean;
```

Defined in: [types/subscription.ts:171](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L171)

Skips the plan's setup fee for this subscription.

##### exclude\_trial?

```ts
optional exclude_trial?: boolean;
```

Defined in: [types/subscription.ts:169](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L169)

Skips the plan's trial period for this subscription.

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: [types/subscription.ts:176](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L176)

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: [types/subscription.ts:175](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L175)

##### is\_metered\_billing?

```ts
optional is_metered_billing?: boolean;
```

Defined in: [types/subscription.ts:178](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L178)

##### payment\_gateways?

```ts
optional payment_gateways?: {
  payment_gateway?: ZohoPaymentGateway;
}[];
```

Defined in: [types/subscription.ts:174](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L174)

###### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/subscription.ts:163](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L163)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/subscription.ts:164](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L164)

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: [types/subscription.ts:157](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L157)

##### plan

```ts
plan: ZohoSubscriptionPlan & {
  plan_code: string;
};
```

Defined in: [types/subscription.ts:151](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L151)

###### Type Declaration

###### plan\_code

```ts
plan_code: string;
```

##### pricebook\_id?

```ts
optional pricebook_id?: string;
```

Defined in: [types/subscription.ts:177](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L177)

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/subscription.ts:154](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L154)

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: [types/subscription.ts:158](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L158)

##### starts\_at?

```ts
optional starts_at?: string;
```

Defined in: [types/subscription.ts:155](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L155)

##### template\_id?

```ts
optional template_id?: string;
```

Defined in: [types/subscription.ts:162](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L162)

***

### EmailInvoiceParams

Defined in: [types/billing.ts:124](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L124)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### body?

```ts
optional body?: string;
```

Defined in: [types/billing.ts:128](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L128)

##### cc\_mail\_ids?

```ts
optional cc_mail_ids?: string[];
```

Defined in: [types/billing.ts:126](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L126)

##### send\_attachment?

```ts
optional send_attachment?: boolean;
```

Defined in: [types/billing.ts:130](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L130)

##### send\_customer\_statement?

```ts
optional send_customer_statement?: boolean;
```

Defined in: [types/billing.ts:129](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L129)

##### subject?

```ts
optional subject?: string;
```

Defined in: [types/billing.ts:127](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L127)

##### to\_mail\_ids?

```ts
optional to_mail_ids?: string[];
```

Defined in: [types/billing.ts:125](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L125)

***

### ExtendSubscriptionParams

Defined in: [types/subscription.ts:255](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L255)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### extend\_by?

```ts
optional extend_by?: number;
```

Defined in: [types/subscription.ts:257](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L257)

Number of `interval_unit`s to extend the current term by.

##### extend\_to?

```ts
optional extend_to?: string;
```

Defined in: [types/subscription.ts:258](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L258)

***

### InvoicePaymentHostedPageParams

Defined in: [types/hostedpage.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L87)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### invoice\_id

```ts
invoice_id: string;
```

Defined in: [types/hostedpage.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L88)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### ListAddonsParams

Defined in: [types/catalog.ts:154](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L154)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/catalog.ts:157](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L157)

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### plan\_code?

```ts
optional plan_code?: string;
```

Defined in: [types/catalog.ts:156](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L156)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:155](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L155)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListCustomersParams

Defined in: [types/customer.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L90)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### display\_name?

```ts
optional display_name?: string;
```

Defined in: [types/customer.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L94)

##### email?

```ts
optional email?: string;
```

Defined in: [types/customer.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L93)

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/customer.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L92)

e.g. `Status.Active`, `Status.Inactive`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### phone?

```ts
optional phone?: string;
```

Defined in: [types/customer.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L95)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListEventsParams

Defined in: [types/event.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L72)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### event\_type?

```ts
optional event_type?: ZohoEventType;
```

Defined in: [types/event.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L73)

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/common.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L33)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### from\_date?

```ts
optional from_date?: string;
```

Defined in: [types/event.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L75)

`yyyy-mm-dd`.

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

##### to\_date?

```ts
optional to_date?: string;
```

Defined in: [types/event.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L76)

***

### ListInvoicesParams

Defined in: [types/billing.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L104)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/billing.ts:105](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L105)

##### date\_end?

```ts
optional date_end?: string;
```

Defined in: [types/billing.ts:112](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L112)

##### date\_start?

```ts
optional date_start?: string;
```

Defined in: [types/billing.ts:111](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L111)

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/billing.ts:108](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L108)

e.g. `Status.Paid`, `Status.Unpaid`, `Status.Overdue`, `Status.Void`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### invoice\_number?

```ts
optional invoice_number?: string;
```

Defined in: [types/billing.ts:109](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L109)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:110](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L110)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

##### subscription\_id?

```ts
optional subscription_id?: string;
```

Defined in: [types/billing.ts:106](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L106)

***

### ListPaymentsParams

Defined in: [types/billing.ts:189](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L189)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/billing.ts:190](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L190)

##### date\_end?

```ts
optional date_end?: string;
```

Defined in: [types/billing.ts:194](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L194)

##### date\_start?

```ts
optional date_start?: string;
```

Defined in: [types/billing.ts:193](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L193)

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/billing.ts:191](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L191)

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:192](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L192)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListPlansParams

Defined in: [types/catalog.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L104)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/catalog.ts:107](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L107)

e.g. `PlanStatus.Active`, `PlanStatus.Inactive`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:105](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L105)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListSubscriptionsParams

Defined in: [types/subscription.ts:204](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L204)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoListParams`](#zoholistparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/subscription.ts:205](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L205)

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/subscription.ts:212](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L212)

e.g. `SubscriptionStatus.ACTIVE`, `SubscriptionStatus.LIVE`,
`SubscriptionStatus.TRIAL`, `SubscriptionStatus.CANCELLED`, or
`SubscriptionMode.ONLINE` / `SubscriptionMode.OFFLINE`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_contains?

```ts
optional reference_contains?: string;
```

Defined in: [types/subscription.ts:206](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L206)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### PauseSubscriptionParams

Defined in: [types/subscription.ts:242](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L242)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### pause\_date?

```ts
optional pause_date?: string;
```

Defined in: [types/subscription.ts:244](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L244)

Date to pause on, `yyyy-mm-dd`. Defaults to immediately.

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: [types/subscription.ts:246](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L246)

Date to auto-resume on, `yyyy-mm-dd`.

***

### PaymentMethodHostedPageParams

Defined in: [types/hostedpage.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L82)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### customer\_id

```ts
customer_id: string;
```

Defined in: [types/hostedpage.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L83)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### PostponeRenewalParams

Defined in: [types/subscription.ts:237](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L237)

#### Properties

##### renewal\_at

```ts
renewal_at: string;
```

Defined in: [types/subscription.ts:239](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L239)

New renewal date, `yyyy-mm-dd`.

***

### RefundPaymentParams

Defined in: [types/billing.ts:197](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L197)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount

```ts
amount: number;
```

Defined in: [types/billing.ts:198](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L198)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:199](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L199)

##### description?

```ts
optional description?: string;
```

Defined in: [types/billing.ts:200](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L200)

##### from\_account\_id?

```ts
optional from_account_id?: string;
```

Defined in: [types/billing.ts:203](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L203)

`true` refunds through the gateway; `false` records an offline refund.

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:201](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L201)

***

### ResumeSubscriptionParams

Defined in: [types/subscription.ts:250](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L250)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: [types/subscription.ts:251](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L251)

***

### ScheduledChange

Defined in: [types/subscription.ts:262](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L262)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/subscription.ts:264](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L264)

##### coupon?

```ts
optional coupon?: ZohoSubscriptionCoupon;
```

Defined in: [types/subscription.ts:265](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L265)

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: [types/subscription.ts:263](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L263)

##### scheduled\_at?

```ts
optional scheduled_at?: string;
```

Defined in: [types/subscription.ts:266](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L266)

***

### SubscriptionActivity

Defined in: [types/subscription.ts:270](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L270)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### activity\_id?

```ts
optional activity_id?: string;
```

Defined in: [types/subscription.ts:271](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L271)

##### activity\_type?

```ts
optional activity_type?: string;
```

Defined in: [types/subscription.ts:273](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L273)

##### description?

```ts
optional description?: string;
```

Defined in: [types/subscription.ts:272](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L272)

##### operation\_type?

```ts
optional operation_type?: string;
```

Defined in: [types/subscription.ts:274](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L274)

##### performed\_by?

```ts
optional performed_by?: string;
```

Defined in: [types/subscription.ts:276](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L276)

##### time?

```ts
optional time?: string;
```

Defined in: [types/subscription.ts:275](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L275)

***

### SubscriptionListResponse

Defined in: [resources/subscriptions.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L29)

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extends

- [`ZohoResponse`](#zohoresponse)

#### Properties

##### code

```ts
code: number;
```

Defined in: [types/common.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L8)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: [types/common.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L9)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### subscriptions

```ts
subscriptions: ZohoSubscription[];
```

Defined in: [resources/subscriptions.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L30)

***

### SubscriptionResponse

Defined in: [resources/subscriptions.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L25)

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extends

- [`ZohoResponse`](#zohoresponse)

#### Properties

##### code

```ts
code: number;
```

Defined in: [types/common.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L8)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: [types/common.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L9)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### subscription

```ts
subscription: ZohoSubscription;
```

Defined in: [resources/subscriptions.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/subscriptions.ts#L26)

***

### UpdateCardHostedPageParams

Defined in: [types/hostedpage.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L71)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### customer\_id

```ts
customer_id: string;
```

Defined in: [types/hostedpage.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L72)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### UpdateSubscriptionHostedPageParams

Defined in: [types/hostedpage.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L62)

#### Extends

- `HostedPageRedirects`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/hostedpage.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L65)

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [types/hostedpage.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L66)

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: [types/hostedpage.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L67)

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: [types/hostedpage.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L64)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/hostedpage.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L42)

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: [types/hostedpage.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L63)

***

### UpdateSubscriptionParams

Defined in: [types/subscription.ts:182](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L182)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/subscription.ts:184](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L184)

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: [types/subscription.ts:189](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L189)

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: [types/subscription.ts:190](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L190)

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [types/subscription.ts:185](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L185)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/subscription.ts:188](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L188)

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: [types/subscription.ts:198](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L198)

`true` defers the change to the next renewal; `false` applies it now and
prorates. Defaults to Zoho's org-level setting when omitted.

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/subscription.ts:187](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L187)

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/subscription.ts:191](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L191)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/subscription.ts:192](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L192)

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: [types/subscription.ts:183](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L183)

##### prorate?

```ts
optional prorate?: boolean;
```

Defined in: [types/subscription.ts:200](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L200)

Prorate the mid-term change.

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/subscription.ts:186](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L186)

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: [types/subscription.ts:193](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L193)

***

### ZohoAccessToken

Defined in: [auth.ts:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L14)

A cached access token plus the epoch-ms instant it stops being valid.

#### Properties

##### accessToken

```ts
accessToken: string;
```

Defined in: [auth.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L15)

##### expiresAt

```ts
expiresAt: number;
```

Defined in: [auth.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L17)

Epoch milliseconds.

***

### ZohoAddon

Defined in: [types/catalog.ts:113](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L113)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addon\_code

```ts
addon_code: string;
```

Defined in: [types/catalog.ts:114](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L114)

##### applicable\_to\_all\_plans?

```ts
optional applicable_to_all_plans?: boolean;
```

Defined in: [types/catalog.ts:124](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L124)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/catalog.ts:129](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L129)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/catalog.ts:128](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L128)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:116](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L116)

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: [types/catalog.ts:123](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L123)

##### name?

```ts
optional name?: string;
```

Defined in: [types/catalog.ts:115](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L115)

##### plans?

```ts
optional plans?: {
  plan_code?: string;
}[];
```

Defined in: [types/catalog.ts:125](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L125)

###### plan\_code?

```ts
optional plan_code?: string;
```

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: [types/catalog.ts:121](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L121)

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: [types/catalog.ts:122](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L122)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:126](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L126)

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: [types/catalog.ts:117](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L117)

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: [types/catalog.ts:127](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L127)

##### type?

```ts
optional type?: ZohoAddonType;
```

Defined in: [types/catalog.ts:118](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L118)

##### unit?

```ts
optional unit?: string;
```

Defined in: [types/catalog.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L119)

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: [types/catalog.ts:120](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L120)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/catalog.ts:130](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L130)

***

### ZohoAddress

Defined in: [types/common.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L39)

#### Properties

##### attention?

```ts
optional attention?: string;
```

Defined in: [types/common.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L40)

##### city?

```ts
optional city?: string;
```

Defined in: [types/common.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L42)

##### country?

```ts
optional country?: string;
```

Defined in: [types/common.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L44)

##### fax?

```ts
optional fax?: string | number;
```

Defined in: [types/common.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L46)

##### state?

```ts
optional state?: string;
```

Defined in: [types/common.ts:43](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L43)

##### street?

```ts
optional street?: string;
```

Defined in: [types/common.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L41)

##### zip?

```ts
optional zip?: string | number;
```

Defined in: [types/common.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L45)

***

### ZohoBillingClientOptions

Defined in: [client.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L30)

#### Properties

##### accountsBaseUrl?

```ts
optional accountsBaseUrl?: string;
```

Defined in: [client.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L39)

Overrides the region's OAuth accounts host.

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

Defined in: [client.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L37)

Overrides the region's API host (e.g. a mock server in tests).

##### apiPath?

```ts
optional apiPath?: string;
```

Defined in: [client.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L41)

Path prefix after the host. Defaults to `/billing/v1`.

##### credentials

```ts
credentials: ZohoCredentials;
```

Defined in: [client.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L33)

##### defaultHeaders?

```ts
optional defaultHeaders?: Record<string, string>;
```

Defined in: [client.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L50)

Extra headers merged into every request.

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: [client.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L48)

Injected for tests; defaults to the global `fetch`.

##### maxRetries?

```ts
optional maxRetries?: number;
```

Defined in: [client.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L44)

Retries for throttled, 5xx, and connection failures. Defaults to 3.

##### organizationId

```ts
organizationId: string;
```

Defined in: [client.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L32)

Zoho organization ID. Find it via `GET /organizations`.

##### region?

```ts
optional region?: ZohoRegion;
```

Defined in: [client.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L35)

Data centre the Zoho org lives in. Defaults to `us`.

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

Defined in: [client.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L46)

Per-request timeout in milliseconds. Defaults to 30000.

##### tokenStore?

```ts
optional tokenStore?: ZohoTokenStore;
```

Defined in: [client.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L42)

***

### ZohoCard

Defined in: [types/common.ts:116](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L116)

#### Properties

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: [types/common.ts:117](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L117)

##### expiry\_month?

```ts
optional expiry_month?: number;
```

Defined in: [types/common.ts:120](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L120)

##### expiry\_year?

```ts
optional expiry_year?: number;
```

Defined in: [types/common.ts:121](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L121)

##### last\_four\_digits?

```ts
optional last_four_digits?: string | number;
```

Defined in: [types/common.ts:118](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L118)

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: [types/common.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L119)

##### status?

```ts
optional status?: string;
```

Defined in: [types/common.ts:122](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L122)

***

### ZohoCommunicationPreference

Defined in: [types/common.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L80)

#### Properties

##### is\_email\_enabled?

```ts
optional is_email_enabled?: boolean;
```

Defined in: [types/common.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L81)

##### is\_sms\_enabled?

```ts
optional is_sms_enabled?: boolean;
```

Defined in: [types/common.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L82)

##### is\_whatsapp\_enabled?

```ts
optional is_whatsapp_enabled?: boolean;
```

Defined in: [types/common.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L83)

***

### ZohoContactPerson

Defined in: [types/common.ts:86](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L86)

#### Properties

##### communication\_preference?

```ts
optional communication_preference?: ZohoCommunicationPreference;
```

Defined in: [types/common.ts:96](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L96)

##### contact\_person\_email?

```ts
optional contact_person_email?: string;
```

Defined in: [types/common.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L91)

##### contact\_person\_id?

```ts
optional contact_person_id?: string;
```

Defined in: [types/common.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L87)

##### contact\_person\_name?

```ts
optional contact_person_name?: string;
```

Defined in: [types/common.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L88)

##### email?

```ts
optional email?: string;
```

Defined in: [types/common.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L92)

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: [types/common.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L89)

##### is\_primary\_contact?

```ts
optional is_primary_contact?: boolean;
```

Defined in: [types/common.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L95)

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: [types/common.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L90)

##### mobile?

```ts
optional mobile?: string;
```

Defined in: [types/common.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L94)

##### phone?

```ts
optional phone?: string;
```

Defined in: [types/common.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L93)

***

### ZohoCoupon

Defined in: [types/catalog.ts:164](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L164)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code?: string;
}[];
```

Defined in: [types/catalog.ts:180](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L180)

###### addon\_code?

```ts
optional addon_code?: string;
```

##### apply\_to\_addons?

```ts
optional apply_to_addons?: boolean;
```

Defined in: [types/catalog.ts:179](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L179)

##### apply\_to\_plans?

```ts
optional apply_to_plans?: boolean;
```

Defined in: [types/catalog.ts:177](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L177)

##### coupon\_code

```ts
coupon_code: string;
```

Defined in: [types/catalog.ts:165](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L165)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/catalog.ts:181](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L181)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:167](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L167)

##### discount\_by?

```ts
optional discount_by?: ZohoDiscountBy;
```

Defined in: [types/catalog.ts:171](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L171)

##### discount\_value?

```ts
optional discount_value?: number;
```

Defined in: [types/catalog.ts:172](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L172)

##### duration?

```ts
optional duration?: ZohoCouponDuration;
```

Defined in: [types/catalog.ts:169](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L169)

##### expiry\_at?

```ts
optional expiry_at?: string;
```

Defined in: [types/catalog.ts:176](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L176)

##### max\_redemption?

```ts
optional max_redemption?: number;
```

Defined in: [types/catalog.ts:174](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L174)

##### name?

```ts
optional name?: string;
```

Defined in: [types/catalog.ts:166](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L166)

##### plans?

```ts
optional plans?: {
  plan_code?: string;
}[];
```

Defined in: [types/catalog.ts:178](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L178)

###### plan\_code?

```ts
optional plan_code?: string;
```

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:173](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L173)

##### redemption\_count?

```ts
optional redemption_count?: number;
```

Defined in: [types/catalog.ts:175](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L175)

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: [types/catalog.ts:170](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L170)

##### type?

```ts
optional type?: string;
```

Defined in: [types/catalog.ts:168](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L168)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/catalog.ts:182](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L182)

***

### ZohoCreditNote

Defined in: [types/billing.ts:207](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L207)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### balance?

```ts
optional balance?: number;
```

Defined in: [types/billing.ts:217](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L217)

##### creditnote\_id

```ts
creditnote_id: string;
```

Defined in: [types/billing.ts:208](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L208)

##### creditnote\_items?

```ts
optional creditnote_items?: ZohoLineItem[];
```

Defined in: [types/billing.ts:218](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L218)

##### creditnote\_number?

```ts
optional creditnote_number?: string;
```

Defined in: [types/billing.ts:209](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L209)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/billing.ts:219](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L219)

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/billing.ts:213](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L213)

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: [types/billing.ts:214](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L214)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:210](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L210)

##### email?

```ts
optional email?: string;
```

Defined in: [types/billing.ts:215](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L215)

##### status?

```ts
optional status?: string;
```

Defined in: [types/billing.ts:211](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L211)

##### total?

```ts
optional total?: number;
```

Defined in: [types/billing.ts:216](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L216)

##### transaction\_id?

```ts
optional transaction_id?: string;
```

Defined in: [types/billing.ts:212](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L212)

***

### ZohoCustomer

Defined in: [types/customer.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L10)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### ach\_supported?

```ts
optional ach_supported?: boolean;
```

Defined in: [types/customer.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L45)

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: [types/customer.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L27)

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: [types/customer.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L17)

##### contact\_persons?

```ts
optional contact_persons?: ZohoContactPerson[];
```

Defined in: [types/customer.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L29)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/customer.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L48)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/customer.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L24)

##### currency\_id?

```ts
optional currency_id?: string;
```

Defined in: [types/customer.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L25)

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: [types/customer.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L26)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/customer.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L46)

##### customer\_id

```ts
customer_id: string;
```

Defined in: [types/customer.ts:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L11)

##### department?

```ts
optional department?: string;
```

Defined in: [types/customer.ts:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L20)

##### designation?

```ts
optional designation?: string;
```

Defined in: [types/customer.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L21)

##### display\_name?

```ts
optional display_name?: string;
```

Defined in: [types/customer.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L12)

##### email?

```ts
optional email?: string;
```

Defined in: [types/customer.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L16)

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: [types/customer.ts:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L14)

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: [types/customer.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L33)

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: [types/customer.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L32)

##### is\_taxable?

```ts
optional is_taxable?: boolean;
```

Defined in: [types/customer.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L37)

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: [types/customer.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L15)

##### mobile?

```ts
optional mobile?: string;
```

Defined in: [types/customer.ts:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L19)

##### notes?

```ts
optional notes?: string;
```

Defined in: [types/customer.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L41)

##### outstanding\_receivable\_amount?

```ts
optional outstanding_receivable_amount?: number;
```

Defined in: [types/customer.ts:43](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L43)

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/customer.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L30)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/customer.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L31)

##### phone?

```ts
optional phone?: string;
```

Defined in: [types/customer.ts:18](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L18)

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: [types/customer.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L34)

##### price\_precision?

```ts
optional price_precision?: number;
```

Defined in: [types/customer.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L40)

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/customer.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L42)

##### salutation?

```ts
optional salutation?: string;
```

Defined in: [types/customer.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L13)

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: [types/customer.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L28)

##### status?

```ts
optional status?: string;
```

Defined in: [types/customer.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L23)

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: [types/customer.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L47)

##### tax\_exemption\_code?

```ts
optional tax_exemption_code?: string;
```

Defined in: [types/customer.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L39)

##### tax\_exemption\_id?

```ts
optional tax_exemption_id?: string;
```

Defined in: [types/customer.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L38)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/customer.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L35)

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: [types/customer.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L36)

##### unused\_credits\_receivable\_amount?

```ts
optional unused_credits_receivable_amount?: number;
```

Defined in: [types/customer.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L44)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/customer.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L49)

##### website?

```ts
optional website?: string;
```

Defined in: [types/customer.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L22)

##### zcrm\_account\_id?

```ts
optional zcrm_account_id?: string;
```

Defined in: [types/customer.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L50)

##### zcrm\_contact\_id?

```ts
optional zcrm_contact_id?: string;
```

Defined in: [types/customer.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L51)

***

### ZohoCustomField

Defined in: [types/common.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L49)

#### Properties

##### api\_name?

```ts
optional api_name?: string;
```

Defined in: [types/common.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L54)

##### data\_type?

```ts
optional data_type?: string;
```

Defined in: [types/common.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L53)

##### index?

```ts
optional index?: number;
```

Defined in: [types/common.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L50)

##### label?

```ts
optional label?: string;
```

Defined in: [types/common.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L51)

##### value?

```ts
optional value?: string;
```

Defined in: [types/common.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L52)

***

### ZohoCustomTokenCredentials

Defined in: [auth.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L60)

Bring-your-own resolution, e.g. tokens brokered by another service.

#### Properties

##### getAccessToken

```ts
getAccessToken: () => string | Promise<string>;
```

Defined in: [auth.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L61)

###### Returns

`string` \| `Promise`\<`string`\>

***

### ZohoEvent

Defined in: [types/event.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L63)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### event\_id

```ts
event_id: string;
```

Defined in: [types/event.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L64)

##### event\_time?

```ts
optional event_time?: string;
```

Defined in: [types/event.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L66)

##### event\_type?

```ts
optional event_type?: ZohoEventType;
```

Defined in: [types/event.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L65)

##### payload?

```ts
optional payload?: ZohoEventPayload;
```

Defined in: [types/event.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L68)

Resource snapshot at the time the event fired.

***

### ZohoEventPayload

Defined in: [types/event.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L55)

Payload bodies keyed by the resource Zoho nests under `data`.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### creditnote?

```ts
optional creditnote?: ZohoCreditNote;
```

Defined in: [types/event.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L59)

##### invoice?

```ts
optional invoice?: ZohoInvoice;
```

Defined in: [types/event.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L57)

##### payment?

```ts
optional payment?: ZohoPayment;
```

Defined in: [types/event.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L58)

##### subscription?

```ts
optional subscription?: ZohoSubscription;
```

Defined in: [types/event.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L56)

***

### ZohoHostedPage

Defined in: [types/hostedpage.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L23)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### action?

```ts
optional action?: string;
```

Defined in: [types/hostedpage.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L32)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/hostedpage.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L34)

##### data?

```ts
optional data?: {
[key: string]: unknown;
  subscription?: ZohoSubscription;
};
```

Defined in: [types/hostedpage.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L36)

Populated once the page has been completed.

###### Index Signature

```ts
[key: string]: unknown
```

###### subscription?

```ts
optional subscription?: ZohoSubscription;
```

##### expiring\_time?

```ts
optional expiring_time?: string;
```

Defined in: [types/hostedpage.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L33)

##### hostedpage\_id

```ts
hostedpage_id: string;
```

Defined in: [types/hostedpage.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L24)

##### status?

```ts
optional status?: ZohoHostedPageStatus;
```

Defined in: [types/hostedpage.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L29)

`success` means the customer completed the page. Poll or verify this on
return before granting access - the redirect alone proves nothing.

##### url?

```ts
optional url?: string;
```

Defined in: [types/hostedpage.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L31)

The URL to send the customer to. Short-lived; do not cache it.

***

### ZohoInvoice

Defined in: [types/billing.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L41)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### ach\_payment\_initiated?

```ts
optional ach_payment_initiated?: boolean;
```

Defined in: [types/billing.ts:100](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L100)

##### adjustment?

```ts
optional adjustment?: number;
```

Defined in: [types/billing.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L64)

##### adjustment\_description?

```ts
optional adjustment_description?: string;
```

Defined in: [types/billing.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L65)

##### allow\_partial\_payments?

```ts
optional allow_partial_payments?: boolean;
```

Defined in: [types/billing.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L75)

##### balance?

```ts
optional balance?: number;
```

Defined in: [types/billing.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L73)

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: [types/billing.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L80)

##### client\_viewed\_time?

```ts
optional client_viewed_time?: string;
```

Defined in: [types/billing.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L95)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/billing.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L87)

##### credits\_applied?

```ts
optional credits_applied?: number;
```

Defined in: [types/billing.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L71)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/billing.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L51)

##### currency\_id?

```ts
optional currency_id?: string;
```

Defined in: [types/billing.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L50)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/billing.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L84)

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/billing.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L47)

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: [types/billing.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L48)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L45)

##### discount?

```ts
optional discount?: number;
```

Defined in: [types/billing.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L58)

##### discount\_type?

```ts
optional discount_type?: string;
```

Defined in: [types/billing.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L59)

##### due\_date?

```ts
optional due_date?: string;
```

Defined in: [types/billing.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L46)

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/billing.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L52)

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: [types/billing.ts:96](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L96)

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: [types/billing.ts:97](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L97)

##### has\_attachment?

```ts
optional has_attachment?: boolean;
```

Defined in: [types/billing.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L93)

##### invoice\_id

```ts
invoice_id: string;
```

Defined in: [types/billing.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L42)

##### invoice\_number?

```ts
optional invoice_number?: string;
```

Defined in: [types/billing.ts:43](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L43)

##### invoice\_url?

```ts
optional invoice_url?: string;
```

Defined in: [types/billing.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L92)

Public payment link for this invoice.

##### is\_discount\_before\_tax?

```ts
optional is_discount_before_tax?: boolean;
```

Defined in: [types/billing.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L60)

##### is\_emailed?

```ts
optional is_emailed?: boolean;
```

Defined in: [types/billing.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L77)

##### is\_inclusive\_tax?

```ts
optional is_inclusive_tax?: boolean;
```

Defined in: [types/billing.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L61)

##### is\_viewed\_by\_client?

```ts
optional is_viewed_by_client?: boolean;
```

Defined in: [types/billing.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L94)

##### last\_modified\_time?

```ts
optional last_modified_time?: string;
```

Defined in: [types/billing.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L88)

##### last\_payment\_date?

```ts
optional last_payment_date?: string;
```

Defined in: [types/billing.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L57)

##### last\_reminder\_sent\_date?

```ts
optional last_reminder_sent_date?: string;
```

Defined in: [types/billing.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L79)

##### line\_items?

```ts
optional line_items?: ZohoLineItem[];
```

Defined in: [types/billing.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L62)

##### notes?

```ts
optional notes?: string;
```

Defined in: [types/billing.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L82)

##### payment\_expected\_date?

```ts
optional payment_expected_date?: string;
```

Defined in: [types/billing.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L56)

##### payment\_made?

```ts
optional payment_made?: number;
```

Defined in: [types/billing.ts:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L70)

##### payment\_reminder\_enabled?

```ts
optional payment_reminder_enabled?: boolean;
```

Defined in: [types/billing.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L99)

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/billing.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L54)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/billing.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L55)

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: [types/billing.ts:98](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L98)

##### price\_precision?

```ts
optional price_precision?: number;
```

Defined in: [types/billing.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L76)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L53)

##### reminders\_sent?

```ts
optional reminders_sent?: number;
```

Defined in: [types/billing.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L78)

##### salesperson\_id?

```ts
optional salesperson_id?: string;
```

Defined in: [types/billing.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L89)

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: [types/billing.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L90)

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: [types/billing.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L81)

##### shipping\_charge?

```ts
optional shipping_charge?: number;
```

Defined in: [types/billing.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L63)

##### status?

```ts
optional status?: ZohoInvoiceStatus;
```

Defined in: [types/billing.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L44)

##### sub\_total?

```ts
optional sub_total?: number;
```

Defined in: [types/billing.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L66)

##### subscription\_id?

```ts
optional subscription_id?: string;
```

Defined in: [types/billing.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L49)

##### tax\_amount\_withheld?

```ts
optional tax_amount_withheld?: number;
```

Defined in: [types/billing.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L72)

##### tax\_total?

```ts
optional tax_total?: number;
```

Defined in: [types/billing.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L67)

##### taxes?

```ts
optional taxes?: ZohoTax[];
```

Defined in: [types/billing.ts:69](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L69)

##### template\_id?

```ts
optional template_id?: string;
```

Defined in: [types/billing.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L85)

##### template\_name?

```ts
optional template_name?: string;
```

Defined in: [types/billing.ts:86](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L86)

##### terms?

```ts
optional terms?: string;
```

Defined in: [types/billing.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L83)

##### total?

```ts
optional total?: number;
```

Defined in: [types/billing.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L68)

##### write\_off\_amount?

```ts
optional write_off_amount?: number;
```

Defined in: [types/billing.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L74)

***

### ZohoItemCustomField

Defined in: [types/common.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L57)

#### Properties

##### label?

```ts
optional label?: string;
```

Defined in: [types/common.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L58)

##### value?

```ts
optional value?: string;
```

Defined in: [types/common.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L59)

***

### ZohoLineItem

Defined in: [types/billing.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L24)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### code?

```ts
optional code?: string;
```

Defined in: [types/billing.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L29)

##### description?

```ts
optional description?: string;
```

Defined in: [types/billing.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L28)

##### discount?

```ts
optional discount?: string | number;
```

Defined in: [types/billing.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L32)

##### item\_id?

```ts
optional item_id?: string;
```

Defined in: [types/billing.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L25)

##### item\_total?

```ts
optional item_total?: number;
```

Defined in: [types/billing.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L33)

##### line\_item\_id?

```ts
optional line_item_id?: string;
```

Defined in: [types/billing.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L26)

##### name?

```ts
optional name?: string;
```

Defined in: [types/billing.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L27)

##### price?

```ts
optional price?: number;
```

Defined in: [types/billing.ts:31](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L31)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [types/billing.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L30)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/billing.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L34)

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: [types/billing.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L35)

##### tax\_percentage?

```ts
optional tax_percentage?: number;
```

Defined in: [types/billing.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L36)

##### unit?

```ts
optional unit?: string;
```

Defined in: [types/billing.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L37)

***

### ZohoListParams

Defined in: [types/common.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L29)

Common query parameters accepted by list endpoints.

#### Extends

- [`ZohoQueryParams`](#zohoqueryparams)

#### Extended by

- [`ListSubscriptionsParams`](#listsubscriptionsparams)
- [`ListCustomersParams`](#listcustomersparams)
- [`ListPlansParams`](#listplansparams)
- [`ListAddonsParams`](#listaddonsparams)
- [`ListInvoicesParams`](#listinvoicesparams)
- [`ListPaymentsParams`](#listpaymentsparams)
- [`ListEventsParams`](#listeventsparams)

#### Indexable

```ts
[key: string]: ZohoQueryValue
```

#### Properties

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: [types/common.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L33)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:30](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L30)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L32)

Zoho's default and maximum is 200.

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: [types/common.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L36)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L34)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: [types/common.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L35)

***

### ZohoListResponse

Defined in: [types/common.ts:24](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L24)

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extends

- [`ZohoResponse`](#zohoresponse)

#### Type Parameters

| Type Parameter |
| ------ |
| `_T` |

#### Properties

##### code

```ts
code: number;
```

Defined in: [types/common.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L8)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: [types/common.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L9)

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### page\_context?

```ts
optional page_context?: ZohoPageContext;
```

Defined in: [types/common.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L25)

***

### ZohoNote

Defined in: [types/common.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L73)

#### Properties

##### commented\_by?

```ts
optional commented_by?: string;
```

Defined in: [types/common.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L76)

##### commented\_time?

```ts
optional commented_time?: string;
```

Defined in: [types/common.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L77)

##### description?

```ts
optional description?: string;
```

Defined in: [types/common.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L75)

##### note\_id?

```ts
optional note_id?: string;
```

Defined in: [types/common.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L74)

***

### ZohoOrganization

Defined in: [resources/organizations.ts:3](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L3)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### contact\_name?

```ts
optional contact_name?: string;
```

Defined in: [resources/organizations.ts:6](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L6)

##### country?

```ts
optional country?: string;
```

Defined in: [resources/organizations.ts:11](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L11)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [resources/organizations.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L8)

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: [resources/organizations.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L9)

##### email?

```ts
optional email?: string;
```

Defined in: [resources/organizations.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L7)

##### fiscal\_year\_start\_month?

```ts
optional fiscal_year_start_month?: string;
```

Defined in: [resources/organizations.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L12)

##### is\_default\_org?

```ts
optional is_default_org?: boolean;
```

Defined in: [resources/organizations.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L13)

##### name?

```ts
optional name?: string;
```

Defined in: [resources/organizations.ts:5](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L5)

##### organization\_id

```ts
organization_id: string;
```

Defined in: [resources/organizations.ts:4](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L4)

##### time\_zone?

```ts
optional time_zone?: string;
```

Defined in: [resources/organizations.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/resources/organizations.ts#L10)

***

### ZohoPageContext

Defined in: [types/common.ts:13](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L13)

Pagination metadata returned alongside list endpoints.

#### Properties

##### applied\_filter?

```ts
optional applied_filter?: string;
```

Defined in: [types/common.ts:18](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L18)

##### has\_more\_page?

```ts
optional has_more_page?: boolean;
```

Defined in: [types/common.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L16)

##### page?

```ts
optional page?: number;
```

Defined in: [types/common.ts:14](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L14)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: [types/common.ts:15](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L15)

##### report\_name?

```ts
optional report_name?: string;
```

Defined in: [types/common.ts:17](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L17)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: [types/common.ts:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L19)

##### sort\_order?

```ts
optional sort_order?: string;
```

Defined in: [types/common.ts:20](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L20)

##### total?

```ts
optional total?: number;
```

Defined in: [types/common.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L21)

***

### ZohoPayment

Defined in: [types/billing.ts:145](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L145)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: [types/billing.ts:149](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L149)

##### amount\_refunded?

```ts
optional amount_refunded?: number;
```

Defined in: [types/billing.ts:150](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L150)

##### autotransaction?

```ts
optional autotransaction?: Record<string, unknown>;
```

Defined in: [types/billing.ts:158](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L158)

##### autotransaction\_id?

```ts
optional autotransaction_id?: string;
```

Defined in: [types/billing.ts:159](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L159)

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: [types/billing.ts:163](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L163)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/billing.ts:169](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L169)

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/billing.ts:155](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L155)

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: [types/billing.ts:156](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L156)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:151](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L151)

##### description?

```ts
optional description?: string;
```

Defined in: [types/billing.ts:154](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L154)

##### email?

```ts
optional email?: string;
```

Defined in: [types/billing.ts:157](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L157)

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: [types/billing.ts:168](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L168)

##### expiry\_month?

```ts
optional expiry_month?: number;
```

Defined in: [types/billing.ts:165](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L165)

##### expiry\_year?

```ts
optional expiry_year?: number;
```

Defined in: [types/billing.ts:166](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L166)

##### gateway\_error\_message?

```ts
optional gateway_error_message?: string;
```

Defined in: [types/billing.ts:162](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L162)

##### gateway\_transaction\_id?

```ts
optional gateway_transaction_id?: string;
```

Defined in: [types/billing.ts:161](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L161)

##### invoices?

```ts
optional invoices?: {
  amount_applied?: number;
  invoice_id?: string;
}[];
```

Defined in: [types/billing.ts:167](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L167)

###### amount\_applied?

```ts
optional amount_applied?: number;
```

###### invoice\_id?

```ts
optional invoice_id?: string;
```

##### last\_four\_digits?

```ts
optional last_four_digits?: string | number;
```

Defined in: [types/billing.ts:164](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L164)

##### mode?

```ts
optional mode?: string;
```

Defined in: [types/billing.ts:148](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L148)

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: [types/billing.ts:160](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L160)

##### payment\_id

```ts
payment_id: string;
```

Defined in: [types/billing.ts:146](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L146)

##### payment\_mode?

```ts
optional payment_mode?: string;
```

Defined in: [types/billing.ts:147](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L147)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:153](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L153)

##### status?

```ts
optional status?: ZohoPaymentStatus;
```

Defined in: [types/billing.ts:152](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L152)

***

### ZohoPlan

Defined in: [types/catalog.ts:52](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L52)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: {
  addon_code?: string;
  name?: string;
}[];
```

Defined in: [types/catalog.ts:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L70)

###### addon\_code?

```ts
optional addon_code?: string;
```

###### name?

```ts
optional name?: string;
```

##### billing\_cycles?

```ts
optional billing_cycles?: number;
```

Defined in: [types/catalog.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L64)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/catalog.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L73)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/catalog.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L72)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L67)

##### interval?

```ts
optional interval?: number;
```

Defined in: [types/catalog.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L62)

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: [types/catalog.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L63)

##### name?

```ts
optional name?: string;
```

Defined in: [types/catalog.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L54)

##### plan\_code

```ts
plan_code: string;
```

Defined in: [types/catalog.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L53)

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: [types/catalog.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L58)

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: [types/catalog.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L57)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/catalog.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L68)

##### product\_name?

```ts
optional product_name?: string;
```

Defined in: [types/catalog.ts:69](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L69)

##### recurring\_price?

```ts
optional recurring_price?: number;
```

Defined in: [types/catalog.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L56)

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: [types/catalog.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L66)

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: [types/catalog.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L55)

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: [types/catalog.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L71)

##### trial\_period?

```ts
optional trial_period?: number;
```

Defined in: [types/catalog.ts:65](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L65)

##### type?

```ts
optional type?: string;
```

Defined in: [types/catalog.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L59)

##### unit?

```ts
optional unit?: string;
```

Defined in: [types/catalog.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L60)

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: [types/catalog.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L61)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/catalog.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L74)

***

### ZohoPricebook

Defined in: [types/catalog.ts:208](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L208)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/catalog.ts:212](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L212)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:211](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L211)

##### name?

```ts
optional name?: string;
```

Defined in: [types/catalog.ts:210](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L210)

##### pricebook\_id

```ts
pricebook_id: string;
```

Defined in: [types/catalog.ts:209](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L209)

##### pricebook\_items?

```ts
optional pricebook_items?: unknown[];
```

Defined in: [types/catalog.ts:214](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L214)

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: [types/catalog.ts:213](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L213)

***

### ZohoPriceBracket

Defined in: [types/catalog.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L26)

#### Properties

##### end\_quantity?

```ts
optional end_quantity?: number;
```

Defined in: [types/catalog.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L28)

##### price?

```ts
optional price?: number;
```

Defined in: [types/catalog.ts:29](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L29)

##### start\_quantity?

```ts
optional start_quantity?: number;
```

Defined in: [types/catalog.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L27)

***

### ZohoProduct

Defined in: [types/catalog.ts:32](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L32)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/catalog.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L39)

##### description?

```ts
optional description?: string;
```

Defined in: [types/catalog.ts:35](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L35)

##### email\_ids?

```ts
optional email_ids?: string;
```

Defined in: [types/catalog.ts:36](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L36)

##### name?

```ts
optional name?: string;
```

Defined in: [types/catalog.ts:34](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L34)

##### product\_id

```ts
product_id: string;
```

Defined in: [types/catalog.ts:33](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L33)

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: [types/catalog.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L37)

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: [types/catalog.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L38)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/catalog.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L40)

***

### ZohoRefreshTokenCredentials

Defined in: [auth.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L48)

Long-lived credentials; the client refreshes access tokens as needed.

#### Properties

##### clientId

```ts
clientId: string;
```

Defined in: [auth.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L49)

##### clientSecret

```ts
clientSecret: string;
```

Defined in: [auth.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L50)

##### refreshToken

```ts
refreshToken: string;
```

Defined in: [auth.ts:51](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L51)

***

### ZohoRefund

Defined in: [types/billing.ts:232](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L232)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: [types/billing.ts:237](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L237)

##### creditnote\_id?

```ts
optional creditnote_id?: string;
```

Defined in: [types/billing.ts:234](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L234)

##### date?

```ts
optional date?: string;
```

Defined in: [types/billing.ts:236](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L236)

##### description?

```ts
optional description?: string;
```

Defined in: [types/billing.ts:238](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L238)

##### payment\_id?

```ts
optional payment_id?: string;
```

Defined in: [types/billing.ts:235](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L235)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: [types/billing.ts:239](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L239)

##### refund\_id

```ts
refund_id: string;
```

Defined in: [types/billing.ts:233](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L233)

***

### ZohoRegionHosts

Defined in: [config.ts:21](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L21)

#### Properties

##### accounts

```ts
accounts: string;
```

Defined in: [config.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L25)

Host serving the OAuth token endpoints.

##### api

```ts
api: string;
```

Defined in: [config.ts:23](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L23)

Host serving the Billing REST API.

***

### ZohoRequestOptions

Defined in: [client.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L53)

#### Properties

##### body?

```ts
optional body?: unknown;
```

Defined in: [client.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L58)

JSON request body.

##### headers?

```ts
optional headers?: Record<string, string>;
```

Defined in: [client.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L60)

Per-request header overrides.

##### maxRetries?

```ts
optional maxRetries?: number;
```

Defined in: [client.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L64)

Overrides `maxRetries` for this call.

##### method?

```ts
optional method?: "POST" | "GET" | "PUT" | "DELETE";
```

Defined in: [client.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L54)

##### query?

```ts
optional query?: ZohoQueryParams;
```

Defined in: [client.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L56)

Query parameters. `undefined` and `null` values are dropped.

##### signal?

```ts
optional signal?: AbortSignal;
```

Defined in: [client.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/client.ts#L62)

Aborts the request (in addition to the configured timeout).

***

### ZohoResponse

Defined in: [types/common.ts:7](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L7)

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extended by

- [`ZohoListResponse`](#zoholistresponse)
- [`SubscriptionListResponse`](#subscriptionlistresponse)
- [`SubscriptionResponse`](#subscriptionresponse)

#### Properties

##### code

```ts
code: number;
```

Defined in: [types/common.ts:8](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L8)

##### message

```ts
message: string;
```

Defined in: [types/common.ts:9](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L9)

***

### ZohoStaticTokenCredentials

Defined in: [auth.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L55)

A pre-obtained access token. The client will not refresh it.

#### Properties

##### accessToken

```ts
accessToken: string;
```

Defined in: [auth.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L56)

***

### ZohoSubscription

Defined in: [types/subscription.ts:87](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L87)

#### Properties

##### activated\_at?

```ts
optional activated_at?: string;
```

Defined in: [types/subscription.ts:94](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L94)

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: [types/subscription.ts:125](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L125)

##### amount?

```ts
optional amount?: number;
```

Defined in: [types/subscription.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L92)

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: [types/subscription.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L104)

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: [types/subscription.ts:123](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L123)

##### can\_add\_bank\_account?

```ts
optional can_add_bank_account?: boolean;
```

Defined in: [types/subscription.ts:130](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L130)

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: [types/subscription.ts:138](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L138)

##### cancelled\_at?

```ts
optional cancelled_at?: string;
```

Defined in: [types/subscription.ts:119](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L119)

##### card?

```ts
optional card?: ZohoCard;
```

Defined in: [types/subscription.ts:127](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L127)

##### child\_invoice\_id?

```ts
optional child_invoice_id?: string;
```

Defined in: [types/subscription.ts:111](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L111)

##### contact\_persons\_associated?

```ts
optional contact_persons_associated?: ZohoContactPerson[];
```

Defined in: [types/subscription.ts:134](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L134)

##### coupon?

```ts
optional coupon?: ZohoSubscriptionCoupon;
```

Defined in: [types/subscription.ts:126](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L126)

##### created\_at?

```ts
optional created_at?: string;
```

Defined in: [types/subscription.ts:93](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L93)

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: [types/subscription.ts:105](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L105)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/subscription.ts:112](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L112)

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: [types/subscription.ts:113](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L113)

##### current\_term\_ends\_at?

```ts
optional current_term_ends_at?: string;
```

Defined in: [types/subscription.ts:96](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L96)

##### current\_term\_starts\_at?

```ts
optional current_term_starts_at?: string;
```

Defined in: [types/subscription.ts:95](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L95)

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: [types/subscription.ts:132](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L132)

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: [types/subscription.ts:131](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L131)

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/subscription.ts:140](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L140)

Present on list responses, which flatten a few customer fields.

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: [types/subscription.ts:141](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L141)

##### email?

```ts
optional email?: string;
```

Defined in: [types/subscription.ts:142](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L142)

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: [types/subscription.ts:114](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L114)

##### expires\_at?

```ts
optional expires_at?: string;
```

Defined in: [types/subscription.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L99)

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: [types/subscription.ts:120](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L120)

##### interval?

```ts
optional interval?: number;
```

Defined in: [types/subscription.ts:102](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L102)

##### interval\_unit?

```ts
optional interval_unit?: string;
```

Defined in: [types/subscription.ts:103](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L103)

##### is\_metered\_billing?

```ts
optional is_metered_billing?: boolean;
```

Defined in: [types/subscription.ts:122](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L122)

##### last\_billing\_at?

```ts
optional last_billing_at?: string;
```

Defined in: [types/subscription.ts:97](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L97)

##### name?

```ts
optional name?: string;
```

Defined in: [types/subscription.ts:90](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L90)

##### next\_billing\_at?

```ts
optional next_billing_at?: string;
```

Defined in: [types/subscription.ts:98](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L98)

##### notes?

```ts
optional notes?: ZohoNote[];
```

Defined in: [types/subscription.ts:135](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L135)

##### pause\_date?

```ts
optional pause_date?: string;
```

Defined in: [types/subscription.ts:100](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L100)

##### payment\_gateways?

```ts
optional payment_gateways?: {
  payment_gateway?: ZohoPaymentGateway;
}[];
```

Defined in: [types/subscription.ts:136](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L136)

###### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/subscription.ts:128](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L128)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/subscription.ts:129](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L129)

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: [types/subscription.ts:108](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L108)

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: [types/subscription.ts:124](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L124)

##### plan\_name?

```ts
optional plan_name?: string;
```

Defined in: [types/subscription.ts:143](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L143)

##### pricebook\_id?

```ts
optional pricebook_id?: string;
```

Defined in: [types/subscription.ts:121](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L121)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: [types/subscription.ts:115](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L115)

##### product\_name?

```ts
optional product_name?: string;
```

Defined in: [types/subscription.ts:116](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L116)

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: [types/subscription.ts:107](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L107)

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: [types/subscription.ts:101](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L101)

##### salesperson\_id?

```ts
optional salesperson_id?: string;
```

Defined in: [types/subscription.ts:109](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L109)

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: [types/subscription.ts:110](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L110)

##### status?

```ts
optional status?: ZohoSubscriptionStatus;
```

Defined in: [types/subscription.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L91)

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: [types/subscription.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L88)

##### subscription\_number?

```ts
optional subscription_number?: string;
```

Defined in: [types/subscription.ts:89](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L89)

##### taxes?

```ts
optional taxes?: ZohoTax[];
```

Defined in: [types/subscription.ts:133](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L133)

##### trial\_ends\_at?

```ts
optional trial_ends_at?: string;
```

Defined in: [types/subscription.ts:118](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L118)

##### trial\_starts\_at?

```ts
optional trial_starts_at?: string;
```

Defined in: [types/subscription.ts:117](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L117)

##### unbilled\_charge\_id?

```ts
optional unbilled_charge_id?: string;
```

Defined in: [types/subscription.ts:137](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L137)

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: [types/subscription.ts:106](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L106)

***

### ZohoSubscriptionAddon

Defined in: [types/subscription.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L53)

#### Properties

##### addon\_code?

```ts
optional addon_code?: string;
```

Defined in: [types/subscription.ts:54](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L54)

##### addon\_description?

```ts
optional addon_description?: string;
```

Defined in: [types/subscription.ts:56](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L56)

##### discount?

```ts
optional discount?: string | number;
```

Defined in: [types/subscription.ts:59](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L59)

##### item\_custom\_fields?

```ts
optional item_custom_fields?: ZohoItemCustomField[];
```

Defined in: [types/subscription.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L63)

##### name?

```ts
optional name?: string;
```

Defined in: [types/subscription.ts:55](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L55)

##### price?

```ts
optional price?: number;
```

Defined in: [types/subscription.ts:58](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L58)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [types/subscription.ts:57](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L57)

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: [types/subscription.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L62)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/subscription.ts:61](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L61)

##### total?

```ts
optional total?: number;
```

Defined in: [types/subscription.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L60)

***

### ZohoSubscriptionCoupon

Defined in: [types/subscription.ts:66](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L66)

#### Properties

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: [types/subscription.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L67)

##### discount\_amount?

```ts
optional discount_amount?: number;
```

Defined in: [types/subscription.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L68)

***

### ZohoSubscriptionCustomer

Defined in: [types/subscription.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L71)

#### Properties

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: [types/subscription.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L81)

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: [types/subscription.ts:78](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L78)

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: [types/subscription.ts:72](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L72)

##### display\_name?

```ts
optional display_name?: string;
```

Defined in: [types/subscription.ts:73](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L73)

##### email?

```ts
optional email?: string;
```

Defined in: [types/subscription.ts:77](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L77)

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: [types/subscription.ts:75](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L75)

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: [types/subscription.ts:76](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L76)

##### mobile?

```ts
optional mobile?: string;
```

Defined in: [types/subscription.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L80)

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: [types/subscription.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L83)

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: [types/subscription.ts:84](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L84)

##### phone?

```ts
optional phone?: string;
```

Defined in: [types/subscription.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L79)

##### salutation?

```ts
optional salutation?: string;
```

Defined in: [types/subscription.ts:74](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L74)

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: [types/subscription.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L82)

***

### ZohoSubscriptionPlan

Defined in: [types/subscription.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L37)

#### Properties

##### description?

```ts
optional description?: string;
```

Defined in: [types/subscription.ts:46](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L46)

##### discount?

```ts
optional discount?: string | number;
```

Defined in: [types/subscription.ts:42](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L42)

##### item\_custom\_fields?

```ts
optional item_custom_fields?: ZohoItemCustomField[];
```

Defined in: [types/subscription.ts:50](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L50)

##### name?

```ts
optional name?: string;
```

Defined in: [types/subscription.ts:39](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L39)

##### plan\_code?

```ts
optional plan_code?: string;
```

Defined in: [types/subscription.ts:38](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L38)

##### plan\_description?

```ts
optional plan_description?: string;
```

Defined in: [types/subscription.ts:45](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L45)

##### price?

```ts
optional price?: number;
```

Defined in: [types/subscription.ts:41](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L41)

##### quantity?

```ts
optional quantity?: number;
```

Defined in: [types/subscription.ts:40](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L40)

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: [types/subscription.ts:44](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L44)

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: [types/subscription.ts:49](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L49)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/subscription.ts:47](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L47)

##### total?

```ts
optional total?: number;
```

Defined in: [types/subscription.ts:43](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L43)

##### trial\_days?

```ts
optional trial_days?: number;
```

Defined in: [types/subscription.ts:48](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L48)

***

### ZohoTag

Defined in: [types/common.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L62)

#### Properties

##### tag\_id?

```ts
optional tag_id?: string;
```

Defined in: [types/common.ts:63](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L63)

##### tag\_option\_id?

```ts
optional tag_option_id?: string;
```

Defined in: [types/common.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L64)

***

### ZohoTax

Defined in: [types/common.ts:67](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L67)

#### Properties

##### tax\_amount?

```ts
optional tax_amount?: string | number;
```

Defined in: [types/common.ts:70](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L70)

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: [types/common.ts:68](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L68)

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: [types/common.ts:69](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L69)

***

### ZohoTokenManagerOptions

Defined in: [auth.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L81)

#### Properties

##### accountsBaseUrl?

```ts
optional accountsBaseUrl?: string;
```

Defined in: [auth.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L85)

Overrides the region's accounts host. Mainly for tests and Zoho proxies.

##### credentials

```ts
credentials: ZohoCredentials;
```

Defined in: [auth.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L82)

##### expiryLeewayMs?

```ts
optional expiryLeewayMs?: number;
```

Defined in: [auth.ts:91](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L91)

Refresh this many milliseconds before actual expiry, so a token does not
expire mid-flight on a slow request. Defaults to 2 minutes.

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: [auth.ts:92](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L92)

##### region?

```ts
optional region?: ZohoRegion;
```

Defined in: [auth.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L83)

##### tokenStore?

```ts
optional tokenStore?: ZohoTokenStore;
```

Defined in: [auth.ts:86](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L86)

***

### ZohoTokenStore

Defined in: [auth.ts:25](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L25)

Persistence for access tokens. The default is per-process memory, which is
fine for a long-lived server but wasteful on serverless, where every cold
start re-refreshes. Supply a Redis/DB-backed store there instead.

#### Methods

##### delete()?

```ts
optional delete(key): void | Promise<void>;
```

Defined in: [auth.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

##### get()

```ts
get(key): 
  | ZohoAccessToken
  | Promise<ZohoAccessToken | null>
  | null;
```

Defined in: [auth.ts:26](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

  \| [`ZohoAccessToken`](#zohoaccesstoken)
  \| `Promise`\<[`ZohoAccessToken`](#zohoaccesstoken) \| `null`\>
  \| `null`

##### set()

```ts
set(key, token): void | Promise<void>;
```

Defined in: [auth.ts:27](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `token` | [`ZohoAccessToken`](#zohoaccesstoken) |

###### Returns

`void` \| `Promise`\<`void`\>

***

### ZohoTransaction

Defined in: [types/customer.ts:98](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L98)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: [types/customer.ts:102](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L102)

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: [types/customer.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L104)

##### date?

```ts
optional date?: string;
```

Defined in: [types/customer.ts:101](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L101)

##### status?

```ts
optional status?: string;
```

Defined in: [types/customer.ts:103](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L103)

##### transaction\_id?

```ts
optional transaction_id?: string;
```

Defined in: [types/customer.ts:99](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L99)

##### transaction\_type?

```ts
optional transaction_type?: string;
```

Defined in: [types/customer.ts:100](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L100)

***

### ZohoWebhookEndpoint

Defined in: [types/event.ts:79](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L79)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### last\_updated\_time?

```ts
optional last_updated_time?: string;
```

Defined in: [types/event.ts:83](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L83)

##### status?

```ts
optional status?: string;
```

Defined in: [types/event.ts:82](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L82)

##### url?

```ts
optional url?: string;
```

Defined in: [types/event.ts:81](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L81)

##### webhook\_id

```ts
webhook_id: string;
```

Defined in: [types/event.ts:80](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L80)

## Type Aliases

### UpdateAddonParams

```ts
type UpdateAddonParams = Partial<Omit<CreateAddonParams, "addon_code">>;
```

Defined in: [types/catalog.ts:152](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L152)

***

### UpdateCouponParams

```ts
type UpdateCouponParams = Partial<Omit<CreateCouponParams, "coupon_code">>;
```

Defined in: [types/catalog.ts:204](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L204)

***

### UpdateCustomerParams

```ts
type UpdateCustomerParams = Partial<CreateCustomerParams>;
```

Defined in: [types/customer.ts:88](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/customer.ts#L88)

***

### UpdatePlanParams

```ts
type UpdatePlanParams = Partial<Omit<CreatePlanParams, "plan_code">>;
```

Defined in: [types/catalog.ts:102](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L102)

***

### ZohoAddonType

```ts
type ZohoAddonType = 
  | "recurring"
  | "one_time"
  | string & {
};
```

Defined in: [types/catalog.ts:111](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L111)

Addons are billed alongside a plan: `recurring` or `one_time`.

***

### ZohoBillingOptions

```ts
type ZohoBillingOptions = ZohoBillingClientOptions;
```

Defined in: [index.ts:37](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L37)

***

### ZohoCouponDuration

```ts
type ZohoCouponDuration = 
  | "once"
  | "forever"
  | string & {
};
```

Defined in: [types/catalog.ts:161](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L161)

`once` applies to one invoice; `forever` to every renewal.

***

### ZohoCredentials

```ts
type ZohoCredentials = 
  | ZohoRefreshTokenCredentials
  | ZohoStaticTokenCredentials
  | ZohoCustomTokenCredentials;
```

Defined in: [auth.ts:64](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/auth.ts#L64)

***

### ZohoDiscountBy

```ts
type ZohoDiscountBy = 
  | "percentage"
  | "flat"
  | string & {
};
```

Defined in: [types/catalog.ts:162](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L162)

***

### ZohoEventType

```ts
type ZohoEventType = 
  | "subscription_created"
  | "subscription_activation"
  | "subscription_ahead"
  | "subscription_renewed"
  | "subscription_upgraded"
  | "subscription_downgraded"
  | "subscription_unpaid"
  | "subscription_cancelled"
  | "subscription_cancelling"
  | "subscription_reactivated"
  | "subscription_cancellation_scheduled"
  | "subscription_scheduled_cancellation_removed"
  | "subscription_reactivation_scheduled"
  | "subscription_move_to_free_scheduled"
  | "subscription_expiring"
  | "subscription_expired"
  | "subscription_deleted"
  | "trial_expiring"
  | "billing_date_changed"
  | "invoice_notification"
  | "invoice_updated"
  | "invoice_voided"
  | "creditnote_added"
  | "creditnote_refunded"
  | "creditnote_deleted"
  | "payment_thankyou"
  | "payment_refunded"
  | "payment_declined"
  | "payment_voided"
  | "card_expired"
  | "card_expiring"
  | "card_deleted"
  | "payment_method_added"
  | "payment_method_deleted"
  | "payment_method_updated"
  | "unbilled_charges_added"
  | "unbilled_charges_updated"
  | "unbilled_charges_invoiced"
  | "unbilled_charges_deleted"
  | string & {
};
```

Defined in: [types/event.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/event.ts#L12)

Every event type Zoho Billing emits, per the official OpenAPI document.

***

### ZohoGstTreatment

```ts
type ZohoGstTreatment = 
  | "business_gst"
  | "business_none"
  | "consumer"
  | "overseas"
  | string & {
};
```

Defined in: [types/common.ts:128](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L128)

GST treatment, required for India-registered Zoho organizations.

***

### ZohoHostedPageStatus

```ts
type ZohoHostedPageStatus = 
  | "created"
  | "success"
  | "failure"
  | "expired"
  | string & {
};
```

Defined in: [types/hostedpage.ts:16](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/hostedpage.ts#L16)

***

### ZohoIntervalUnit

```ts
type ZohoIntervalUnit = "days" | "weeks" | "months" | "years";
```

Defined in: [types/common.ts:125](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L125)

***

### ZohoInvoiceStatus

```ts
type ZohoInvoiceStatus = 
  | "draft"
  | "sent"
  | "overdue"
  | "paid"
  | "void"
  | "unpaid"
  | "partially_paid"
  | "payment_initiated"
  | "pending"
  | string & {
};
```

Defined in: [types/billing.ts:12](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L12)

***

### ZohoPaymentGateway

```ts
type ZohoPaymentGateway = 
  | "test_gateway"
  | "payflow_pro"
  | "stripe"
  | "2checkout"
  | "authorize_net"
  | "payments_pro"
  | "forte"
  | "worldpay"
  | "wepay"
  | string & {
};
```

Defined in: [types/common.ts:104](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L104)

Payment gateways Zoho Billing can route a subscription through. Kept as a
union with a `(string & {})` escape hatch so a newly supported gateway does
not become a type error before the package catches up.

***

### ZohoPaymentStatus

```ts
type ZohoPaymentStatus = 
  | "success"
  | "failure"
  | "pending"
  | string & {
};
```

Defined in: [types/billing.ts:139](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/billing.ts#L139)

***

### ZohoPricingScheme

```ts
type ZohoPricingScheme = 
  | "unit"
  | "tiered"
  | "volume"
  | "package"
  | string & {
};
```

Defined in: [types/catalog.ts:19](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L19)

How a plan or addon converts quantity into price.

`unit` charges price x quantity; `tiered` charges each bracket at its own
rate; `volume` charges every unit at the rate of the bracket the total lands
in; `package` charges per block of units.

***

### ZohoQueryParams

```ts
type ZohoQueryParams = Record<string, ZohoQueryValue>;
```

Defined in: [types/common.ts:4](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L4)

***

### ZohoQueryValue

```ts
type ZohoQueryValue = string | number | boolean | undefined | null;
```

Defined in: [types/common.ts:3](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/common.ts#L3)

Shapes shared across every Zoho Billing module.

***

### ZohoRegion

```ts
type ZohoRegion = "us" | "eu" | "in" | "au" | "jp" | "uk" | "ca" | "sa" | "cn";
```

Defined in: [config.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L10)

Data-centre configuration for the Zoho Billing API.

Zoho partitions accounts by region. An access token minted in one region is
not valid in another, and each region has its own API host and OAuth
accounts host, so the region must match wherever the Zoho org actually
lives. Getting this wrong surfaces as a confusing 401.

***

### ZohoStatus

```ts
type ZohoStatus = 
  | "active"
  | "inactive"
  | string & {
};
```

Defined in: [types/catalog.ts:10](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/catalog.ts#L10)

***

### ZohoSubscriptionStatus

```ts
type ZohoSubscriptionStatus = 
  | "live"
  | "trial"
  | "dunning"
  | "unpaid"
  | "non_renewing"
  | "cancelled"
  | "creation_failed"
  | "cancelled_from_dunning"
  | "expired"
  | "trial_expired"
  | "future"
  | "paused"
  | string & {
};
```

Defined in: [types/subscription.ts:22](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/types/subscription.ts#L22)

Lifecycle states a subscription can be in.

`live` and `trial` are the healthy states; `dunning` and `unpaid` mean
collection is failing; `non_renewing` is cancelled-at-period-end and still
grants access until `current_term_ends_at`.

## Variables

### ZOHO\_BILLING\_API\_PATH

```ts
const ZOHO_BILLING_API_PATH: "/billing/v1" = "/billing/v1";
```

Defined in: [config.ts:53](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L53)

Path prefix for the Billing v1 API, appended to the region's API host.

***

### ZOHO\_ORG\_HEADER

```ts
const ZOHO_ORG_HEADER: "X-com-zoho-subscriptions-organizationid" = "X-com-zoho-subscriptions-organizationid";
```

Defined in: [config.ts:60](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L60)

Header Zoho uses to scope a request to one organization. The name still says
"subscriptions" even on Zoho Billing - that is the documented header, not a
typo left over from the product rename.

***

### ZOHO\_REGIONS

```ts
const ZOHO_REGIONS: Record<ZohoRegion, ZohoRegionHosts>;
```

Defined in: [config.ts:28](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L28)

## Functions

### createZohoBillingFromEnv()

```ts
function createZohoBillingFromEnv(env?, overrides?): ZohoBilling;
```

Defined in: [index.ts:85](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/index.ts#L85)

Build a client from environment variables.

Reads `ZOHO_ORGANIZATION_ID`, `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`,
`ZOHO_REFRESH_TOKEN`, and optionally `ZOHO_REGION`. Throws listing every
missing variable at once rather than one per run.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `env` | `Record`\<`string`, `string` \| `undefined`\> | `process.env` |
| `overrides` | `Partial`\<[`ZohoBillingOptions`](#zohobillingoptions)\> | `{}` |

#### Returns

[`ZohoBilling`](#zohobilling)

***

### isZohoRegion()

```ts
function isZohoRegion(value): value is ZohoRegion;
```

Defined in: [config.ts:62](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`value is ZohoRegion`

***

### resolveRegion()

```ts
function resolveRegion(region): ZohoRegion;
```

Defined in: [config.ts:71](https://github.com/dipakparmar/zoho-billing-sdk/blob/main/packages/zoho-billing/src/config.ts#L71)

Resolve a region string, falling back to `us` when unset. Throws on an
unknown region rather than silently defaulting, because a silent default
points requests at the wrong data centre.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `region` | `string` \| `undefined` |

#### Returns

[`ZohoRegion`](#zohoregion)

## References

### assertCatalogAllowed

Re-exports [assertCatalogAllowed](security.md#assertcatalogallowed)

***

### CatalogAllowlist

Re-exports [CatalogAllowlist](security.md#catalogallowlist)

***

### constructEvent

Re-exports [constructEvent](webhooks.md#constructevent)

***

### ConstructEventOptions

Re-exports [ConstructEventOptions](webhooks.md#constructeventoptions)

***

### createZohoBillingError

Re-exports [createZohoBillingError](errors.md#createzohobillingerror)

***

### getEventResource

Re-exports [getEventResource](webhooks.md#geteventresource)

***

### isEventType

Re-exports [isEventType](webhooks.md#iseventtype)

***

### isOwnedByCustomer

Re-exports [isOwnedByCustomer](security.md#isownedbycustomer)

***

### isRetryableError

Re-exports [isRetryableError](errors.md#isretryableerror)

***

### MAX\_QUANTITY

Re-exports [MAX_QUANTITY](security.md#max_quantity)

***

### parseWebhookEvent

Re-exports [parseWebhookEvent](webhooks.md#parsewebhookevent)

***

### RedirectUrlOptions

Re-exports [RedirectUrlOptions](security.md#redirecturloptions)

***

### resolveRedirectUrl

Re-exports [resolveRedirectUrl](security.md#resolveredirecturl)

***

### SafeAddonInput

Re-exports [SafeAddonInput](security.md#safeaddoninput)

***

### safeCompare

Re-exports [safeCompare](webhooks.md#safecompare)

***

### SafePlanInput

Re-exports [SafePlanInput](security.md#safeplaninput)

***

### SafeSubscriptionUpdate

Re-exports [SafeSubscriptionUpdate](security.md#safesubscriptionupdate)

***

### sanitizeAddonsInput

Re-exports [sanitizeAddonsInput](security.md#sanitizeaddonsinput)

***

### sanitizeCouponCode

Re-exports [sanitizeCouponCode](security.md#sanitizecouponcode)

***

### sanitizePlanInput

Re-exports [sanitizePlanInput](security.md#sanitizeplaninput)

***

### sanitizeSubscriptionUpdate

Re-exports [sanitizeSubscriptionUpdate](security.md#sanitizesubscriptionupdate)

***

### verifyWebhookSecret

Re-exports [verifyWebhookSecret](webhooks.md#verifywebhooksecret)

***

### VerifyWebhookSecretOptions

Re-exports [VerifyWebhookSecretOptions](webhooks.md#verifywebhooksecretoptions)

***

### verifyWebhookSignature

Re-exports [verifyWebhookSignature](webhooks.md#verifywebhooksignature)

***

### VerifyWebhookSignatureOptions

Re-exports [VerifyWebhookSignatureOptions](webhooks.md#verifywebhooksignatureoptions)

***

### ZohoBillingAuthError

Re-exports [ZohoBillingAuthError](errors.md#zohobillingautherror)

***

### ZohoBillingConnectionError

Re-exports [ZohoBillingConnectionError](errors.md#zohobillingconnectionerror)

***

### ZohoBillingError

Re-exports [ZohoBillingError](errors.md#zohobillingerror)

***

### ZohoBillingErrorContext

Re-exports [ZohoBillingErrorContext](errors.md#zohobillingerrorcontext)

***

### ZohoBillingInputError

Re-exports [ZohoBillingInputError](security.md#zohobillinginputerror)

***

### ZohoBillingInvalidRequestError

Re-exports [ZohoBillingInvalidRequestError](errors.md#zohobillinginvalidrequesterror)

***

### ZohoBillingNotFoundError

Re-exports [ZohoBillingNotFoundError](errors.md#zohobillingnotfounderror)

***

### ZohoBillingPermissionError

Re-exports [ZohoBillingPermissionError](errors.md#zohobillingpermissionerror)

***

### ZohoBillingRateLimitError

Re-exports [ZohoBillingRateLimitError](errors.md#zohobillingratelimiterror)

***

### ZohoBillingServerError

Re-exports [ZohoBillingServerError](errors.md#zohobillingservererror)

***

### ZohoWebhookVerificationError

Re-exports [ZohoWebhookVerificationError](webhooks.md#zohowebhookverificationerror)
