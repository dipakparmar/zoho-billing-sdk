# index

## Classes

### Addons

Defined in: packages/zoho-billing/src/resources/catalog.ts:161

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Addons(client): Addons;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoAddon>;
```

Defined in: packages/zoho-billing/src/resources/catalog.ts:162

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:191

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:197

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:205

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:211

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:218

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:173

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:180

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `addonCode` | `string` |
| `params` | [`UpdateAddonParams`](#updateaddonparams) |

###### Returns

`Promise`\<[`ZohoAddon`](#zohoaddon)\>

***

### Coupons

Defined in: packages/zoho-billing/src/resources/catalog.ts:226

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Coupons(client): Coupons;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoCoupon>;
```

Defined in: packages/zoho-billing/src/resources/catalog.ts:227

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:253

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:259

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:267

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:273

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:280

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:235

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:242

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `couponCode` | `string` |
| `params` | [`UpdateCouponParams`](#updatecouponparams) |

###### Returns

`Promise`\<[`ZohoCoupon`](#zohocoupon)\>

***

### CreditNotes

Defined in: packages/zoho-billing/src/resources/billing.ts:208

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new CreditNotes(client): CreditNotes;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### applyToInvoices()

```ts
applyToInvoices(creditNoteId, params): Promise<ZohoResponse>;
```

Defined in: packages/zoho-billing/src/resources/billing.ts:256

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

Defined in: packages/zoho-billing/src/resources/billing.ts:238

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

Defined in: packages/zoho-billing/src/resources/billing.ts:209

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

Defined in: packages/zoho-billing/src/resources/billing.ts:224

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

Defined in: packages/zoho-billing/src/resources/billing.ts:245

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

Defined in: packages/zoho-billing/src/resources/billing.ts:267

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

Defined in: packages/zoho-billing/src/resources/billing.ts:217

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

Defined in: packages/zoho-billing/src/resources/billing.ts:231

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `creditNoteId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

***

### Customers

Defined in: packages/zoho-billing/src/resources/customers.ts:15

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Customers(client): Customers;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoCustomer>;
```

Defined in: packages/zoho-billing/src/resources/customers.ts:16

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

Defined in: packages/zoho-billing/src/resources/customers.ts:132

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

Defined in: packages/zoho-billing/src/resources/customers.ts:55

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

Defined in: packages/zoho-billing/src/resources/customers.ts:118

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

Defined in: packages/zoho-billing/src/resources/customers.ts:159

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

Defined in: packages/zoho-billing/src/resources/customers.ts:37

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

Defined in: packages/zoho-billing/src/resources/customers.ts:74

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

Defined in: packages/zoho-billing/src/resources/customers.ts:61

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

Defined in: packages/zoho-billing/src/resources/customers.ts:68

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

Defined in: packages/zoho-billing/src/resources/customers.ts:104

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

Defined in: packages/zoho-billing/src/resources/customers.ts:125

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

Defined in: packages/zoho-billing/src/resources/customers.ts:97

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

Defined in: packages/zoho-billing/src/resources/customers.ts:82

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

Defined in: packages/zoho-billing/src/resources/customers.ts:89

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

Defined in: packages/zoho-billing/src/resources/customers.ts:24

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

Defined in: packages/zoho-billing/src/resources/customers.ts:111

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

Defined in: packages/zoho-billing/src/resources/customers.ts:44

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

Defined in: packages/zoho-billing/src/resources/customers.ts:145

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

Defined in: packages/zoho-billing/src/resources/events.ts:11

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

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### iterate()

```ts
iterate(params?): AsyncGenerator<ZohoEvent, void, undefined>;
```

Defined in: packages/zoho-billing/src/resources/events.ts:33

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

Defined in: packages/zoho-billing/src/resources/events.ts:19

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

Defined in: packages/zoho-billing/src/resources/events.ts:27

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

Defined in: packages/zoho-billing/src/resources/events.ts:12

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventId` | `string` |

###### Returns

`Promise`\<[`ZohoEvent`](#zohoevent)\>

***

### HostedPages

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:22

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

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### createAddPaymentMethodPage()

```ts
createAddPaymentMethodPage(params): Promise<ZohoHostedPage>;
```

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:65

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:55

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:85

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:24

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:45

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:75

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:35

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:106

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

Defined in: packages/zoho-billing/src/resources/hostedpages.ts:99

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

Defined in: packages/zoho-billing/src/resources/billing.ts:20

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Invoices(client): Invoices;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### addLineItems()

```ts
addLineItems(invoiceId, params): Promise<ZohoInvoice>;
```

Defined in: packages/zoho-billing/src/resources/billing.ts:126

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

Defined in: packages/zoho-billing/src/resources/billing.ts:115

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

Defined in: packages/zoho-billing/src/resources/billing.ts:86

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

Defined in: packages/zoho-billing/src/resources/billing.ts:94

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

Defined in: packages/zoho-billing/src/resources/billing.ts:72

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

Defined in: packages/zoho-billing/src/resources/billing.ts:50

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

Defined in: packages/zoho-billing/src/resources/billing.ts:137

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

Defined in: packages/zoho-billing/src/resources/billing.ts:104

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

Defined in: packages/zoho-billing/src/resources/billing.ts:42

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

Defined in: packages/zoho-billing/src/resources/billing.ts:28

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

Defined in: packages/zoho-billing/src/resources/billing.ts:36

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

Defined in: packages/zoho-billing/src/resources/billing.ts:57

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

Defined in: packages/zoho-billing/src/resources/billing.ts:21

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

Defined in: packages/zoho-billing/src/resources/billing.ts:64

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

Defined in: packages/zoho-billing/src/resources/billing.ts:79

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

###### Returns

`Promise`\<[`ZohoResponse`](#zohoresponse)\>

***

### MemoryTokenStore

Defined in: packages/zoho-billing/src/auth.ts:31

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

Defined in: packages/zoho-billing/src/auth.ts:42

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

Defined in: packages/zoho-billing/src/auth.ts:34

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

Defined in: packages/zoho-billing/src/auth.ts:38

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

Defined in: packages/zoho-billing/src/resources/organizations.ts:22

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

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### list()

```ts
list(): Promise<ZohoOrganization[]>;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:23

###### Returns

`Promise`\<[`ZohoOrganization`](#zohoorganization)[]\>

##### retrieve()

```ts
retrieve(organizationId): Promise<ZohoOrganization>;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:30

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `organizationId` | `string` |

###### Returns

`Promise`\<[`ZohoOrganization`](#zohoorganization)\>

***

### Payments

Defined in: packages/zoho-billing/src/resources/billing.ts:148

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Payments(client): Payments;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPayment>;
```

Defined in: packages/zoho-billing/src/resources/billing.ts:150

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

Defined in: packages/zoho-billing/src/resources/billing.ts:176

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

Defined in: packages/zoho-billing/src/resources/billing.ts:182

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

Defined in: packages/zoho-billing/src/resources/billing.ts:190

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

Defined in: packages/zoho-billing/src/resources/billing.ts:196

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

Defined in: packages/zoho-billing/src/resources/billing.ts:158

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

Defined in: packages/zoho-billing/src/resources/billing.ts:165

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |
| `params` | `Partial`\<[`CreatePaymentParams`](#createpaymentparams)\> |

###### Returns

`Promise`\<[`ZohoPayment`](#zohopayment)\>

***

### Plans

Defined in: packages/zoho-billing/src/resources/catalog.ts:84

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Plans(client): Plans;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPlan>;
```

Defined in: packages/zoho-billing/src/resources/catalog.ts:85

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:108

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:126

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:114

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:122

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:132

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:146

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:139

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:153

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:93

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:100

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `planCode` | `string` |
| `params` | [`UpdatePlanParams`](#updateplanparams) |

###### Returns

`Promise`\<[`ZohoPlan`](#zohoplan)\>

***

### Pricebooks

Defined in: packages/zoho-billing/src/resources/catalog.ts:288

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Pricebooks(client): Pricebooks;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoPricebook>;
```

Defined in: packages/zoho-billing/src/resources/catalog.ts:303

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:311

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:289

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:296

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `pricebookId` | `string` |

###### Returns

`Promise`\<[`ZohoPricebook`](#zohopricebook)\>

***

### Products

Defined in: packages/zoho-billing/src/resources/catalog.ts:22

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Products(client): Products;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### create()

```ts
create(params): Promise<ZohoProduct>;
```

Defined in: packages/zoho-billing/src/resources/catalog.ts:23

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:49

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:55

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:63

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:69

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:76

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:31

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

Defined in: packages/zoho-billing/src/resources/catalog.ts:38

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `string` |
| `params` | `Partial`\<[`CreateProductParams`](#createproductparams)\> |

###### Returns

`Promise`\<[`ZohoProduct`](#zohoproduct)\>

***

### Refunds

Defined in: packages/zoho-billing/src/resources/billing.ts:281

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Refunds(client): Refunds;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

###### Inherited from

```ts
ZohoResource.client
```

#### Methods

##### retrieve()

```ts
retrieve(refundId): Promise<ZohoRefund>;
```

Defined in: packages/zoho-billing/src/resources/billing.ts:282

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `refundId` | `string` |

###### Returns

`Promise`\<[`ZohoRefund`](#zohorefund)\>

***

### Subscriptions

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:34

The subscription lifecycle: the core of the Zoho Billing API.

#### Extends

- `ZohoResource`

#### Constructors

##### Constructor

```ts
new Subscriptions(client): Subscriptions;
```

Defined in: packages/zoho-billing/src/resources/base.ts:7

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

Defined in: packages/zoho-billing/src/resources/base.ts:5

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:201

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:326

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:367

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:211

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:187

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:119

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:39

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:73

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:378

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:274

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:399

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:392

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:175

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:343

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:102

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:81

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:93

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:360

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:282

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:265

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:140

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:163

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:131

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:242

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:222

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:151

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:47

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:253

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:61

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:231

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:350

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:314

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:291

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

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:302

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `salespersonName` | `string` |

###### Returns

`Promise`\<[`ZohoSubscription`](#zohosubscription)\>

***

### ZohoBilling

Defined in: packages/zoho-billing/src/index.ts:40

Entry point. One instance per Zoho organization.

#### Constructors

##### Constructor

```ts
new ZohoBilling(options): ZohoBilling;
```

Defined in: packages/zoho-billing/src/index.ts:59

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

Defined in: packages/zoho-billing/src/index.ts:48

##### client

```ts
readonly client: ZohoBillingClient;
```

Defined in: packages/zoho-billing/src/index.ts:42

Escape hatch for endpoints this SDK does not wrap yet.

##### coupons

```ts
readonly coupons: Coupons;
```

Defined in: packages/zoho-billing/src/index.ts:49

##### creditNotes

```ts
readonly creditNotes: CreditNotes;
```

Defined in: packages/zoho-billing/src/index.ts:53

##### customers

```ts
readonly customers: Customers;
```

Defined in: packages/zoho-billing/src/index.ts:45

##### events

```ts
readonly events: Events;
```

Defined in: packages/zoho-billing/src/index.ts:56

##### hostedPages

```ts
readonly hostedPages: HostedPages;
```

Defined in: packages/zoho-billing/src/index.ts:55

##### invoices

```ts
readonly invoices: Invoices;
```

Defined in: packages/zoho-billing/src/index.ts:51

##### organizations

```ts
readonly organizations: Organizations;
```

Defined in: packages/zoho-billing/src/index.ts:57

##### payments

```ts
readonly payments: Payments;
```

Defined in: packages/zoho-billing/src/index.ts:52

##### plans

```ts
readonly plans: Plans;
```

Defined in: packages/zoho-billing/src/index.ts:47

##### pricebooks

```ts
readonly pricebooks: Pricebooks;
```

Defined in: packages/zoho-billing/src/index.ts:50

##### products

```ts
readonly products: Products;
```

Defined in: packages/zoho-billing/src/index.ts:46

##### refunds

```ts
readonly refunds: Refunds;
```

Defined in: packages/zoho-billing/src/index.ts:54

##### subscriptions

```ts
readonly subscriptions: Subscriptions;
```

Defined in: packages/zoho-billing/src/index.ts:44

***

### ZohoBillingClient

Defined in: packages/zoho-billing/src/client.ts:71

#### Constructors

##### Constructor

```ts
new ZohoBillingClient(options): ZohoBillingClient;
```

Defined in: packages/zoho-billing/src/client.ts:80

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

Defined in: packages/zoho-billing/src/client.ts:108

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

Defined in: packages/zoho-billing/src/client.ts:270

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

Defined in: packages/zoho-billing/src/client.ts:242

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

Defined in: packages/zoho-billing/src/client.ts:119

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

Defined in: packages/zoho-billing/src/auth.ts:105

#### Constructors

##### Constructor

```ts
new ZohoTokenManager(options): ZohoTokenManager;
```

Defined in: packages/zoho-billing/src/auth.ts:115

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

Defined in: packages/zoho-billing/src/auth.ts:161

True when this manager can mint a new token after a 401.

###### Returns

`boolean`

#### Methods

##### getAccessToken()

```ts
getAccessToken(): Promise<string>;
```

Defined in: packages/zoho-billing/src/auth.ts:131

Return a usable access token, refreshing if the cached one is missing or
within the leeway window of expiring.

###### Returns

`Promise`\<`string`\>

##### invalidate()

```ts
invalidate(): Promise<void>;
```

Defined in: packages/zoho-billing/src/auth.ts:156

Drop the cached token so the next call refreshes. Used when Zoho rejects a
token we believed was still valid (e.g. revoked server-side).

###### Returns

`Promise`\<`void`\>

## Interfaces

### AddChargeParams

Defined in: packages/zoho-billing/src/types/subscription.ts:229

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:232

##### amount

```ts
amount: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:230

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:231

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:233

***

### AddInvoiceLineItemsParams

Defined in: packages/zoho-billing/src/types/billing.ts:134

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### line\_items

```ts
line_items: ZohoLineItem[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:135

***

### BuyOneTimeAddonHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:76

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:78

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:77

***

### BuyOneTimeAddonParams

Defined in: packages/zoho-billing/src/types/subscription.ts:223

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

Defined in: packages/zoho-billing/src/types/subscription.ts:224

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:225

***

### CancelSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:215

#### Properties

##### cancel\_at\_end?

```ts
optional cancel_at_end?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:220

`true` cancels at the end of the current term (the subscription becomes
`non_renewing` and access continues); `false` cancels immediately.

***

### CollectInvoicePaymentParams

Defined in: packages/zoho-billing/src/types/billing.ts:115

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:118

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:119

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:117

Card to charge. Omit to use the customer's default.

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: packages/zoho-billing/src/types/billing.ts:120

***

### CreateAddonParams

Defined in: packages/zoho-billing/src/types/catalog.ts:134

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addon\_code

```ts
addon_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:135

##### applicable\_to\_all\_plans?

```ts
optional applicable_to_all_plans?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:145

When false, restrict availability with `plans`.

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:148

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:142

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:141

##### name

```ts
name: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:136

##### plans?

```ts
optional plans?: {
  plan_code: string;
}[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:146

###### plan\_code

```ts
plan_code: string;
```

##### price\_brackets

```ts
price_brackets: ZohoPriceBracket[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:139

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:138

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:143

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:147

##### type?

```ts
optional type?: ZohoAddonType;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:140

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:137

***

### CreateCouponParams

Defined in: packages/zoho-billing/src/types/catalog.ts:186

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

Defined in: packages/zoho-billing/src/types/catalog.ts:200

###### addon\_code

```ts
addon_code: string;
```

##### apply\_to\_addons?

```ts
optional apply_to_addons?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:199

##### apply\_to\_plans?

```ts
optional apply_to_plans?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:197

##### coupon\_code

```ts
coupon_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:187

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:193

##### discount\_by

```ts
discount_by: ZohoDiscountBy;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:189

##### discount\_value

```ts
discount_value: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:191

A percentage when `discount_by` is `percentage`, else a flat amount.

##### duration?

```ts
optional duration?: ZohoCouponDuration;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:192

##### expiry\_at?

```ts
optional expiry_at?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:196

##### max\_redemption?

```ts
optional max_redemption?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:195

##### name

```ts
name: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:188

##### plans?

```ts
optional plans?: {
  plan_code: string;
}[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:198

###### plan\_code

```ts
plan_code: string;
```

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:194

***

### CreateCreditNoteParams

Defined in: packages/zoho-billing/src/types/billing.ts:223

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### creditnote\_items

```ts
creditnote_items: ZohoLineItem[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:225

##### customer\_id

```ts
customer_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:224

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:226

##### notes?

```ts
optional notes?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:228

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:227

***

### CreateCustomerParams

Defined in: packages/zoho-billing/src/types/customer.ts:55

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/customer.ts:66

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:61

##### contact\_persons?

```ts
optional contact_persons?: ZohoContactPerson[];
```

Defined in: packages/zoho-billing/src/types/customer.ts:68

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:65

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/customer.ts:84

##### display\_name

```ts
display_name: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:56

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:60

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:58

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:72

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: packages/zoho-billing/src/types/customer.ts:71

##### is\_taxable?

```ts
optional is_taxable?: boolean;
```

Defined in: packages/zoho-billing/src/types/customer.ts:75

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:59

##### mobile?

```ts
optional mobile?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:63

##### notes?

```ts
optional notes?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:77

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:69

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:70

##### phone?

```ts
optional phone?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:62

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:73

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:83

Your own identifier for this customer. Also the lookup key for
`customers.getByReference`, which is the idiomatic way to map an
application user onto a Zoho customer without storing Zoho's ID.

##### salutation?

```ts
optional salutation?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:57

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/customer.ts:67

##### tax\_exemption\_id?

```ts
optional tax_exemption_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:76

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:74

##### website?

```ts
optional website?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:64

***

### CreatePaymentParams

Defined in: packages/zoho-billing/src/types/billing.ts:173

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:185

##### amount

```ts
amount: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:176

Payment amount in the customer's currency.

##### customer\_id

```ts
customer_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:174

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:177

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:181

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:182

##### invoices?

```ts
optional invoices?: {
  amount_applied: number;
  invoice_id: string;
}[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:184

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

Defined in: packages/zoho-billing/src/types/billing.ts:179

e.g. `cash`, `check`, `banktransfer`, `creditcard`.

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:180

***

### CreatePlanParams

Defined in: packages/zoho-billing/src/types/catalog.ts:78

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

Defined in: packages/zoho-billing/src/types/catalog.ts:97

###### addon\_code

```ts
addon_code: string;
```

##### billing\_cycles?

```ts
optional billing_cycles?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:87

Total number of cycles before the plan expires. Omit for perpetual.

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:98

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:91

##### interval?

```ts
optional interval?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:84

Number of `interval_unit`s between charges.

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:85

##### name

```ts
name: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:80

##### plan\_code

```ts
plan_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:79

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:94

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:93

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:92

##### recurring\_price

```ts
recurring_price: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:82

Price per interval.

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:90

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:96

##### trial\_period?

```ts
optional trial_period?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:89

Free trial length in days.

##### unit?

```ts
optional unit?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:95

***

### CreateProductParams

Defined in: packages/zoho-billing/src/types/catalog.ts:44

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:46

##### email\_ids?

```ts
optional email_ids?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:47

##### name

```ts
name: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:45

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:48

***

### CreateSubscriptionHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:45

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:51

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:58

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:52

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:55

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:49

New customer captured on the hosted page.

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:47

Existing customer. Mutually exclusive with `customer`.

##### exclude\_setup\_fee?

```ts
optional exclude_setup_fee?: boolean;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:57

##### exclude\_trial?

```ts
optional exclude_trial?: boolean;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:56

##### plan

```ts
plan: ZohoSubscriptionPlan & {
  plan_code: string;
};
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:50

###### Type Declaration

###### plan\_code

```ts
plan_code: string;
```

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:53

##### starts\_at?

```ts
optional starts_at?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:54

***

### CreateSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:146

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:152

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:161

`true` charges the card automatically each renewal; `false` bills offline.

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:166

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:173

Bills the setup fee immediately instead of at trial end.

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:165

##### contactpersons?

```ts
optional contactpersons?: {
  contactperson_id?: string;
}[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:167

###### contactperson\_id?

```ts
optional contactperson_id?: string;
```

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:153

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:159

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:150

New customer to create alongside the subscription.

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:148

Existing customer. Mutually exclusive with `customer`.

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:156

##### exclude\_setup\_fee?

```ts
optional exclude_setup_fee?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:171

Skips the plan's setup fee for this subscription.

##### exclude\_trial?

```ts
optional exclude_trial?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:169

Skips the plan's trial period for this subscription.

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:176

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:175

##### is\_metered\_billing?

```ts
optional is_metered_billing?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:178

##### payment\_gateways?

```ts
optional payment_gateways?: {
  payment_gateway?: ZohoPaymentGateway;
}[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:174

###### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:163

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:164

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:157

##### plan

```ts
plan: ZohoSubscriptionPlan & {
  plan_code: string;
};
```

Defined in: packages/zoho-billing/src/types/subscription.ts:151

###### Type Declaration

###### plan\_code

```ts
plan_code: string;
```

##### pricebook\_id?

```ts
optional pricebook_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:177

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:154

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:158

##### starts\_at?

```ts
optional starts_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:155

##### template\_id?

```ts
optional template_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:162

***

### EmailInvoiceParams

Defined in: packages/zoho-billing/src/types/billing.ts:124

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### body?

```ts
optional body?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:128

##### cc\_mail\_ids?

```ts
optional cc_mail_ids?: string[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:126

##### send\_attachment?

```ts
optional send_attachment?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:130

##### send\_customer\_statement?

```ts
optional send_customer_statement?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:129

##### subject?

```ts
optional subject?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:127

##### to\_mail\_ids?

```ts
optional to_mail_ids?: string[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:125

***

### ExtendSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:255

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### extend\_by?

```ts
optional extend_by?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:257

Number of `interval_unit`s to extend the current term by.

##### extend\_to?

```ts
optional extend_to?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:258

***

### InvoicePaymentHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:87

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:88

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### ListAddonsParams

Defined in: packages/zoho-billing/src/types/catalog.ts:154

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

Defined in: packages/zoho-billing/src/types/catalog.ts:157

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### plan\_code?

```ts
optional plan_code?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:156

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:155

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListCustomersParams

Defined in: packages/zoho-billing/src/types/customer.ts:90

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

Defined in: packages/zoho-billing/src/types/customer.ts:94

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:93

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:92

e.g. `Status.Active`, `Status.Inactive`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### phone?

```ts
optional phone?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:95

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListEventsParams

Defined in: packages/zoho-billing/src/types/event.ts:72

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

Defined in: packages/zoho-billing/src/types/event.ts:73

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:33

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### from\_date?

```ts
optional from_date?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:75

`yyyy-mm-dd`.

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

##### to\_date?

```ts
optional to_date?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:76

***

### ListInvoicesParams

Defined in: packages/zoho-billing/src/types/billing.ts:104

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

Defined in: packages/zoho-billing/src/types/billing.ts:105

##### date\_end?

```ts
optional date_end?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:112

##### date\_start?

```ts
optional date_start?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:111

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:108

e.g. `Status.Paid`, `Status.Unpaid`, `Status.Overdue`, `Status.Void`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### invoice\_number?

```ts
optional invoice_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:109

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:110

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

##### subscription\_id?

```ts
optional subscription_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:106

***

### ListPaymentsParams

Defined in: packages/zoho-billing/src/types/billing.ts:189

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

Defined in: packages/zoho-billing/src/types/billing.ts:190

##### date\_end?

```ts
optional date_end?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:194

##### date\_start?

```ts
optional date_start?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:193

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:191

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:192

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListPlansParams

Defined in: packages/zoho-billing/src/types/catalog.ts:104

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

Defined in: packages/zoho-billing/src/types/catalog.ts:107

e.g. `PlanStatus.Active`, `PlanStatus.Inactive`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:105

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### ListSubscriptionsParams

Defined in: packages/zoho-billing/src/types/subscription.ts:204

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

Defined in: packages/zoho-billing/src/types/subscription.ts:205

##### filter\_by?

```ts
optional filter_by?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:212

e.g. `SubscriptionStatus.ACTIVE`, `SubscriptionStatus.LIVE`,
`SubscriptionStatus.TRIAL`, `SubscriptionStatus.CANCELLED`, or
`SubscriptionMode.ONLINE` / `SubscriptionMode.OFFLINE`.

###### Overrides

[`ZohoListParams`](#zoholistparams).[`filter_by`](#filter_by-7)

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`page`](#page-7)

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`per_page`](#per_page-7)

##### reference\_contains?

```ts
optional reference_contains?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:206

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`search_text`](#search_text-7)

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

###### Inherited from

[`ZohoListParams`](#zoholistparams).[`sort_column`](#sort_column-7)

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

###### Inherited from

[`ListEventsParams`](#listeventsparams).[`sort_order`](#sort_order-2)

***

### PauseSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:242

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### pause\_date?

```ts
optional pause_date?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:244

Date to pause on, `yyyy-mm-dd`. Defaults to immediately.

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:246

Date to auto-resume on, `yyyy-mm-dd`.

***

### PaymentMethodHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:82

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:83

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### PostponeRenewalParams

Defined in: packages/zoho-billing/src/types/subscription.ts:237

#### Properties

##### renewal\_at

```ts
renewal_at: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:239

New renewal date, `yyyy-mm-dd`.

***

### RefundPaymentParams

Defined in: packages/zoho-billing/src/types/billing.ts:197

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount

```ts
amount: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:198

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:199

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:200

##### from\_account\_id?

```ts
optional from_account_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:203

`true` refunds through the gateway; `false` records an offline refund.

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:201

***

### ResumeSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:250

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:251

***

### ScheduledChange

Defined in: packages/zoho-billing/src/types/subscription.ts:262

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:264

##### coupon?

```ts
optional coupon?: ZohoSubscriptionCoupon;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:265

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:263

##### scheduled\_at?

```ts
optional scheduled_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:266

***

### SubscriptionActivity

Defined in: packages/zoho-billing/src/types/subscription.ts:270

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### activity\_id?

```ts
optional activity_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:271

##### activity\_type?

```ts
optional activity_type?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:273

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:272

##### operation\_type?

```ts
optional operation_type?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:274

##### performed\_by?

```ts
optional performed_by?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:276

##### time?

```ts
optional time?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:275

***

### SubscriptionListResponse

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:29

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extends

- [`ZohoResponse`](#zohoresponse)

#### Properties

##### code

```ts
code: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:8

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:9

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### subscriptions

```ts
subscriptions: ZohoSubscription[];
```

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:30

***

### SubscriptionResponse

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:25

Envelope Zoho wraps every response in. `code: 0` means success.

#### Extends

- [`ZohoResponse`](#zohoresponse)

#### Properties

##### code

```ts
code: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:8

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:9

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### subscription

```ts
subscription: ZohoSubscription;
```

Defined in: packages/zoho-billing/src/resources/subscriptions.ts:26

***

### UpdateCardHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:71

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:72

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

***

### UpdateSubscriptionHostedPageParams

Defined in: packages/zoho-billing/src/types/hostedpage.ts:62

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:65

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:66

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:67

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:64

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:42

Where Zoho sends the customer after success.

###### Inherited from

```ts
HostedPageRedirects.redirect_url
```

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:63

***

### UpdateSubscriptionParams

Defined in: packages/zoho-billing/src/types/subscription.ts:182

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:184

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:189

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:190

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:185

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:188

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:198

`true` defers the change to the next renewal; `false` applies it now and
prorates. Defaults to Zoho's org-level setting when omitted.

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:187

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:191

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:192

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:183

##### prorate?

```ts
optional prorate?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:200

Prorate the mid-term change.

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:186

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:193

***

### ZohoAccessToken

Defined in: packages/zoho-billing/src/auth.ts:14

A cached access token plus the epoch-ms instant it stops being valid.

#### Properties

##### accessToken

```ts
accessToken: string;
```

Defined in: packages/zoho-billing/src/auth.ts:15

##### expiresAt

```ts
expiresAt: number;
```

Defined in: packages/zoho-billing/src/auth.ts:17

Epoch milliseconds.

***

### ZohoAddon

Defined in: packages/zoho-billing/src/types/catalog.ts:113

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### addon\_code

```ts
addon_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:114

##### applicable\_to\_all\_plans?

```ts
optional applicable_to_all_plans?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:124

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:129

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:128

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:116

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:123

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:115

##### plans?

```ts
optional plans?: {
  plan_code?: string;
}[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:125

###### plan\_code?

```ts
optional plan_code?: string;
```

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:121

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:122

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:126

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:117

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:127

##### type?

```ts
optional type?: ZohoAddonType;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:118

##### unit?

```ts
optional unit?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:119

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:120

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:130

***

### ZohoAddress

Defined in: packages/zoho-billing/src/types/common.ts:39

#### Properties

##### attention?

```ts
optional attention?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:40

##### city?

```ts
optional city?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:42

##### country?

```ts
optional country?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:44

##### fax?

```ts
optional fax?: string | number;
```

Defined in: packages/zoho-billing/src/types/common.ts:46

##### state?

```ts
optional state?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:43

##### street?

```ts
optional street?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:41

##### zip?

```ts
optional zip?: string | number;
```

Defined in: packages/zoho-billing/src/types/common.ts:45

***

### ZohoBillingClientOptions

Defined in: packages/zoho-billing/src/client.ts:30

#### Properties

##### accountsBaseUrl?

```ts
optional accountsBaseUrl?: string;
```

Defined in: packages/zoho-billing/src/client.ts:39

Overrides the region's OAuth accounts host.

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

Defined in: packages/zoho-billing/src/client.ts:37

Overrides the region's API host (e.g. a mock server in tests).

##### apiPath?

```ts
optional apiPath?: string;
```

Defined in: packages/zoho-billing/src/client.ts:41

Path prefix after the host. Defaults to `/billing/v1`.

##### credentials

```ts
credentials: ZohoCredentials;
```

Defined in: packages/zoho-billing/src/client.ts:33

##### defaultHeaders?

```ts
optional defaultHeaders?: Record<string, string>;
```

Defined in: packages/zoho-billing/src/client.ts:50

Extra headers merged into every request.

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: packages/zoho-billing/src/client.ts:48

Injected for tests; defaults to the global `fetch`.

##### maxRetries?

```ts
optional maxRetries?: number;
```

Defined in: packages/zoho-billing/src/client.ts:44

Retries for throttled, 5xx, and connection failures. Defaults to 3.

##### organizationId

```ts
organizationId: string;
```

Defined in: packages/zoho-billing/src/client.ts:32

Zoho organization ID. Find it via `GET /organizations`.

##### region?

```ts
optional region?: ZohoRegion;
```

Defined in: packages/zoho-billing/src/client.ts:35

Data centre the Zoho org lives in. Defaults to `us`.

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

Defined in: packages/zoho-billing/src/client.ts:46

Per-request timeout in milliseconds. Defaults to 30000.

##### tokenStore?

```ts
optional tokenStore?: ZohoTokenStore;
```

Defined in: packages/zoho-billing/src/client.ts:42

***

### ZohoCard

Defined in: packages/zoho-billing/src/types/common.ts:116

#### Properties

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:117

##### expiry\_month?

```ts
optional expiry_month?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:120

##### expiry\_year?

```ts
optional expiry_year?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:121

##### last\_four\_digits?

```ts
optional last_four_digits?: string | number;
```

Defined in: packages/zoho-billing/src/types/common.ts:118

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: packages/zoho-billing/src/types/common.ts:119

##### status?

```ts
optional status?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:122

***

### ZohoCommunicationPreference

Defined in: packages/zoho-billing/src/types/common.ts:80

#### Properties

##### is\_email\_enabled?

```ts
optional is_email_enabled?: boolean;
```

Defined in: packages/zoho-billing/src/types/common.ts:81

##### is\_sms\_enabled?

```ts
optional is_sms_enabled?: boolean;
```

Defined in: packages/zoho-billing/src/types/common.ts:82

##### is\_whatsapp\_enabled?

```ts
optional is_whatsapp_enabled?: boolean;
```

Defined in: packages/zoho-billing/src/types/common.ts:83

***

### ZohoContactPerson

Defined in: packages/zoho-billing/src/types/common.ts:86

#### Properties

##### communication\_preference?

```ts
optional communication_preference?: ZohoCommunicationPreference;
```

Defined in: packages/zoho-billing/src/types/common.ts:96

##### contact\_person\_email?

```ts
optional contact_person_email?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:91

##### contact\_person\_id?

```ts
optional contact_person_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:87

##### contact\_person\_name?

```ts
optional contact_person_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:88

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:92

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:89

##### is\_primary\_contact?

```ts
optional is_primary_contact?: boolean;
```

Defined in: packages/zoho-billing/src/types/common.ts:95

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:90

##### mobile?

```ts
optional mobile?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:94

##### phone?

```ts
optional phone?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:93

***

### ZohoCoupon

Defined in: packages/zoho-billing/src/types/catalog.ts:164

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

Defined in: packages/zoho-billing/src/types/catalog.ts:180

###### addon\_code?

```ts
optional addon_code?: string;
```

##### apply\_to\_addons?

```ts
optional apply_to_addons?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:179

##### apply\_to\_plans?

```ts
optional apply_to_plans?: boolean;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:177

##### coupon\_code

```ts
coupon_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:165

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:181

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:167

##### discount\_by?

```ts
optional discount_by?: ZohoDiscountBy;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:171

##### discount\_value?

```ts
optional discount_value?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:172

##### duration?

```ts
optional duration?: ZohoCouponDuration;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:169

##### expiry\_at?

```ts
optional expiry_at?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:176

##### max\_redemption?

```ts
optional max_redemption?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:174

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:166

##### plans?

```ts
optional plans?: {
  plan_code?: string;
}[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:178

###### plan\_code?

```ts
optional plan_code?: string;
```

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:173

##### redemption\_count?

```ts
optional redemption_count?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:175

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:170

##### type?

```ts
optional type?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:168

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:182

***

### ZohoCreditNote

Defined in: packages/zoho-billing/src/types/billing.ts:207

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### balance?

```ts
optional balance?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:217

##### creditnote\_id

```ts
creditnote_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:208

##### creditnote\_items?

```ts
optional creditnote_items?: ZohoLineItem[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:218

##### creditnote\_number?

```ts
optional creditnote_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:209

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:219

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:213

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:214

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:210

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:215

##### status?

```ts
optional status?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:211

##### total?

```ts
optional total?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:216

##### transaction\_id?

```ts
optional transaction_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:212

***

### ZohoCustomer

Defined in: packages/zoho-billing/src/types/customer.ts:10

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### ach\_supported?

```ts
optional ach_supported?: boolean;
```

Defined in: packages/zoho-billing/src/types/customer.ts:45

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/customer.ts:27

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:17

##### contact\_persons?

```ts
optional contact_persons?: ZohoContactPerson[];
```

Defined in: packages/zoho-billing/src/types/customer.ts:29

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:48

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:24

##### currency\_id?

```ts
optional currency_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:25

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:26

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/customer.ts:46

##### customer\_id

```ts
customer_id: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:11

##### department?

```ts
optional department?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:20

##### designation?

```ts
optional designation?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:21

##### display\_name?

```ts
optional display_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:12

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:16

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:14

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:33

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: packages/zoho-billing/src/types/customer.ts:32

##### is\_taxable?

```ts
optional is_taxable?: boolean;
```

Defined in: packages/zoho-billing/src/types/customer.ts:37

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:15

##### mobile?

```ts
optional mobile?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:19

##### notes?

```ts
optional notes?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:41

##### outstanding\_receivable\_amount?

```ts
optional outstanding_receivable_amount?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:43

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:30

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:31

##### phone?

```ts
optional phone?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:18

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:34

##### price\_precision?

```ts
optional price_precision?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:40

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:42

##### salutation?

```ts
optional salutation?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:13

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/customer.ts:28

##### status?

```ts
optional status?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:23

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: packages/zoho-billing/src/types/customer.ts:47

##### tax\_exemption\_code?

```ts
optional tax_exemption_code?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:39

##### tax\_exemption\_id?

```ts
optional tax_exemption_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:38

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:35

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:36

##### unused\_credits\_receivable\_amount?

```ts
optional unused_credits_receivable_amount?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:44

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:49

##### website?

```ts
optional website?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:22

##### zcrm\_account\_id?

```ts
optional zcrm_account_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:50

##### zcrm\_contact\_id?

```ts
optional zcrm_contact_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:51

***

### ZohoCustomField

Defined in: packages/zoho-billing/src/types/common.ts:49

#### Properties

##### api\_name?

```ts
optional api_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:54

##### data\_type?

```ts
optional data_type?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:53

##### index?

```ts
optional index?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:50

##### label?

```ts
optional label?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:51

##### value?

```ts
optional value?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:52

***

### ZohoCustomTokenCredentials

Defined in: packages/zoho-billing/src/auth.ts:60

Bring-your-own resolution, e.g. tokens brokered by another service.

#### Properties

##### getAccessToken

```ts
getAccessToken: () => string | Promise<string>;
```

Defined in: packages/zoho-billing/src/auth.ts:61

###### Returns

`string` \| `Promise`\<`string`\>

***

### ZohoEvent

Defined in: packages/zoho-billing/src/types/event.ts:63

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### event\_id

```ts
event_id: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:64

##### event\_time?

```ts
optional event_time?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:66

##### event\_type?

```ts
optional event_type?: ZohoEventType;
```

Defined in: packages/zoho-billing/src/types/event.ts:65

##### payload?

```ts
optional payload?: ZohoEventPayload;
```

Defined in: packages/zoho-billing/src/types/event.ts:68

Resource snapshot at the time the event fired.

***

### ZohoEventPayload

Defined in: packages/zoho-billing/src/types/event.ts:55

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

Defined in: packages/zoho-billing/src/types/event.ts:59

##### invoice?

```ts
optional invoice?: ZohoInvoice;
```

Defined in: packages/zoho-billing/src/types/event.ts:57

##### payment?

```ts
optional payment?: ZohoPayment;
```

Defined in: packages/zoho-billing/src/types/event.ts:58

##### subscription?

```ts
optional subscription?: ZohoSubscription;
```

Defined in: packages/zoho-billing/src/types/event.ts:56

***

### ZohoHostedPage

Defined in: packages/zoho-billing/src/types/hostedpage.ts:23

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### action?

```ts
optional action?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:32

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:34

##### data?

```ts
optional data?: {
[key: string]: unknown;
  subscription?: ZohoSubscription;
};
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:36

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:33

##### hostedpage\_id

```ts
hostedpage_id: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:24

##### status?

```ts
optional status?: ZohoHostedPageStatus;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:29

`success` means the customer completed the page. Poll or verify this on
return before granting access - the redirect alone proves nothing.

##### url?

```ts
optional url?: string;
```

Defined in: packages/zoho-billing/src/types/hostedpage.ts:31

The URL to send the customer to. Short-lived; do not cache it.

***

### ZohoInvoice

Defined in: packages/zoho-billing/src/types/billing.ts:41

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### ach\_payment\_initiated?

```ts
optional ach_payment_initiated?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:100

##### adjustment?

```ts
optional adjustment?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:64

##### adjustment\_description?

```ts
optional adjustment_description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:65

##### allow\_partial\_payments?

```ts
optional allow_partial_payments?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:75

##### balance?

```ts
optional balance?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:73

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/billing.ts:80

##### client\_viewed\_time?

```ts
optional client_viewed_time?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:95

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:87

##### credits\_applied?

```ts
optional credits_applied?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:71

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:51

##### currency\_id?

```ts
optional currency_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:50

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:84

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:47

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:48

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:45

##### discount?

```ts
optional discount?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:58

##### discount\_type?

```ts
optional discount_type?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:59

##### due\_date?

```ts
optional due_date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:46

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:52

##### gst\_no?

```ts
optional gst_no?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:96

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: packages/zoho-billing/src/types/billing.ts:97

##### has\_attachment?

```ts
optional has_attachment?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:93

##### invoice\_id

```ts
invoice_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:42

##### invoice\_number?

```ts
optional invoice_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:43

##### invoice\_url?

```ts
optional invoice_url?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:92

Public payment link for this invoice.

##### is\_discount\_before\_tax?

```ts
optional is_discount_before_tax?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:60

##### is\_emailed?

```ts
optional is_emailed?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:77

##### is\_inclusive\_tax?

```ts
optional is_inclusive_tax?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:61

##### is\_viewed\_by\_client?

```ts
optional is_viewed_by_client?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:94

##### last\_modified\_time?

```ts
optional last_modified_time?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:88

##### last\_payment\_date?

```ts
optional last_payment_date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:57

##### last\_reminder\_sent\_date?

```ts
optional last_reminder_sent_date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:79

##### line\_items?

```ts
optional line_items?: ZohoLineItem[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:62

##### notes?

```ts
optional notes?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:82

##### payment\_expected\_date?

```ts
optional payment_expected_date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:56

##### payment\_made?

```ts
optional payment_made?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:70

##### payment\_reminder\_enabled?

```ts
optional payment_reminder_enabled?: boolean;
```

Defined in: packages/zoho-billing/src/types/billing.ts:99

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:54

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:55

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:98

##### price\_precision?

```ts
optional price_precision?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:76

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:53

##### reminders\_sent?

```ts
optional reminders_sent?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:78

##### salesperson\_id?

```ts
optional salesperson_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:89

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:90

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/billing.ts:81

##### shipping\_charge?

```ts
optional shipping_charge?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:63

##### status?

```ts
optional status?: ZohoInvoiceStatus;
```

Defined in: packages/zoho-billing/src/types/billing.ts:44

##### sub\_total?

```ts
optional sub_total?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:66

##### subscription\_id?

```ts
optional subscription_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:49

##### tax\_amount\_withheld?

```ts
optional tax_amount_withheld?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:72

##### tax\_total?

```ts
optional tax_total?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:67

##### taxes?

```ts
optional taxes?: ZohoTax[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:69

##### template\_id?

```ts
optional template_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:85

##### template\_name?

```ts
optional template_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:86

##### terms?

```ts
optional terms?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:83

##### total?

```ts
optional total?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:68

##### write\_off\_amount?

```ts
optional write_off_amount?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:74

***

### ZohoItemCustomField

Defined in: packages/zoho-billing/src/types/common.ts:57

#### Properties

##### label?

```ts
optional label?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:58

##### value?

```ts
optional value?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:59

***

### ZohoLineItem

Defined in: packages/zoho-billing/src/types/billing.ts:24

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### code?

```ts
optional code?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:29

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:28

##### discount?

```ts
optional discount?: string | number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:32

##### item\_id?

```ts
optional item_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:25

##### item\_total?

```ts
optional item_total?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:33

##### line\_item\_id?

```ts
optional line_item_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:26

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:27

##### price?

```ts
optional price?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:31

##### quantity?

```ts
optional quantity?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:30

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:34

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:35

##### tax\_percentage?

```ts
optional tax_percentage?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:36

##### unit?

```ts
optional unit?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:37

***

### ZohoListParams

Defined in: packages/zoho-billing/src/types/common.ts:29

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

Defined in: packages/zoho-billing/src/types/common.ts:33

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:30

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:32

Zoho's default and maximum is 200.

##### search\_text?

```ts
optional search_text?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:36

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:34

##### sort\_order?

```ts
optional sort_order?: "A" | "D";
```

Defined in: packages/zoho-billing/src/types/common.ts:35

***

### ZohoListResponse

Defined in: packages/zoho-billing/src/types/common.ts:24

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

Defined in: packages/zoho-billing/src/types/common.ts:8

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`code`](#code-4)

##### message

```ts
message: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:9

###### Inherited from

[`ZohoResponse`](#zohoresponse).[`message`](#message-3)

##### page\_context?

```ts
optional page_context?: ZohoPageContext;
```

Defined in: packages/zoho-billing/src/types/common.ts:25

***

### ZohoNote

Defined in: packages/zoho-billing/src/types/common.ts:73

#### Properties

##### commented\_by?

```ts
optional commented_by?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:76

##### commented\_time?

```ts
optional commented_time?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:77

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:75

##### note\_id?

```ts
optional note_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:74

***

### ZohoOrganization

Defined in: packages/zoho-billing/src/resources/organizations.ts:3

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### contact\_name?

```ts
optional contact_name?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:6

##### country?

```ts
optional country?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:11

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:8

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:9

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:7

##### fiscal\_year\_start\_month?

```ts
optional fiscal_year_start_month?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:12

##### is\_default\_org?

```ts
optional is_default_org?: boolean;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:13

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:5

##### organization\_id

```ts
organization_id: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:4

##### time\_zone?

```ts
optional time_zone?: string;
```

Defined in: packages/zoho-billing/src/resources/organizations.ts:10

***

### ZohoPageContext

Defined in: packages/zoho-billing/src/types/common.ts:13

Pagination metadata returned alongside list endpoints.

#### Properties

##### applied\_filter?

```ts
optional applied_filter?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:18

##### has\_more\_page?

```ts
optional has_more_page?: boolean;
```

Defined in: packages/zoho-billing/src/types/common.ts:16

##### page?

```ts
optional page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:14

##### per\_page?

```ts
optional per_page?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:15

##### report\_name?

```ts
optional report_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:17

##### sort\_column?

```ts
optional sort_column?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:19

##### sort\_order?

```ts
optional sort_order?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:20

##### total?

```ts
optional total?: number;
```

Defined in: packages/zoho-billing/src/types/common.ts:21

***

### ZohoPayment

Defined in: packages/zoho-billing/src/types/billing.ts:145

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:149

##### amount\_refunded?

```ts
optional amount_refunded?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:150

##### autotransaction?

```ts
optional autotransaction?: Record<string, unknown>;
```

Defined in: packages/zoho-billing/src/types/billing.ts:158

##### autotransaction\_id?

```ts
optional autotransaction_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:159

##### card\_id?

```ts
optional card_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:163

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:169

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:155

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:156

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:151

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:154

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:157

##### exchange\_rate?

```ts
optional exchange_rate?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:168

##### expiry\_month?

```ts
optional expiry_month?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:165

##### expiry\_year?

```ts
optional expiry_year?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:166

##### gateway\_error\_message?

```ts
optional gateway_error_message?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:162

##### gateway\_transaction\_id?

```ts
optional gateway_transaction_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:161

##### invoices?

```ts
optional invoices?: {
  amount_applied?: number;
  invoice_id?: string;
}[];
```

Defined in: packages/zoho-billing/src/types/billing.ts:167

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

Defined in: packages/zoho-billing/src/types/billing.ts:164

##### mode?

```ts
optional mode?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:148

##### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

Defined in: packages/zoho-billing/src/types/billing.ts:160

##### payment\_id

```ts
payment_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:146

##### payment\_mode?

```ts
optional payment_mode?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:147

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:153

##### status?

```ts
optional status?: ZohoPaymentStatus;
```

Defined in: packages/zoho-billing/src/types/billing.ts:152

***

### ZohoPlan

Defined in: packages/zoho-billing/src/types/catalog.ts:52

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

Defined in: packages/zoho-billing/src/types/catalog.ts:70

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

Defined in: packages/zoho-billing/src/types/catalog.ts:64

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:73

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:72

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:67

##### interval?

```ts
optional interval?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:62

##### interval\_unit?

```ts
optional interval_unit?: ZohoIntervalUnit;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:63

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:54

##### plan\_code

```ts
plan_code: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:53

##### price\_brackets?

```ts
optional price_brackets?: ZohoPriceBracket[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:58

##### pricing\_scheme?

```ts
optional pricing_scheme?: ZohoPricingScheme;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:57

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:68

##### product\_name?

```ts
optional product_name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:69

##### recurring\_price?

```ts
optional recurring_price?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:56

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:66

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:55

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:71

##### trial\_period?

```ts
optional trial_period?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:65

##### type?

```ts
optional type?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:59

##### unit?

```ts
optional unit?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:60

##### unit\_name?

```ts
optional unit_name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:61

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:74

***

### ZohoPricebook

Defined in: packages/zoho-billing/src/types/catalog.ts:208

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:212

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:211

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:210

##### pricebook\_id

```ts
pricebook_id: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:209

##### pricebook\_items?

```ts
optional pricebook_items?: unknown[];
```

Defined in: packages/zoho-billing/src/types/catalog.ts:214

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:213

***

### ZohoPriceBracket

Defined in: packages/zoho-billing/src/types/catalog.ts:26

#### Properties

##### end\_quantity?

```ts
optional end_quantity?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:28

##### price?

```ts
optional price?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:29

##### start\_quantity?

```ts
optional start_quantity?: number;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:27

***

### ZohoProduct

Defined in: packages/zoho-billing/src/types/catalog.ts:32

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:39

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:35

##### email\_ids?

```ts
optional email_ids?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:36

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:34

##### product\_id

```ts
product_id: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:33

##### redirect\_url?

```ts
optional redirect_url?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:37

##### status?

```ts
optional status?: ZohoStatus;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:38

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:40

***

### ZohoRefreshTokenCredentials

Defined in: packages/zoho-billing/src/auth.ts:48

Long-lived credentials; the client refreshes access tokens as needed.

#### Properties

##### clientId

```ts
clientId: string;
```

Defined in: packages/zoho-billing/src/auth.ts:49

##### clientSecret

```ts
clientSecret: string;
```

Defined in: packages/zoho-billing/src/auth.ts:50

##### refreshToken

```ts
refreshToken: string;
```

Defined in: packages/zoho-billing/src/auth.ts:51

***

### ZohoRefund

Defined in: packages/zoho-billing/src/types/billing.ts:232

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: packages/zoho-billing/src/types/billing.ts:237

##### creditnote\_id?

```ts
optional creditnote_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:234

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:236

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:238

##### payment\_id?

```ts
optional payment_id?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:235

##### reference\_number?

```ts
optional reference_number?: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:239

##### refund\_id

```ts
refund_id: string;
```

Defined in: packages/zoho-billing/src/types/billing.ts:233

***

### ZohoRegionHosts

Defined in: packages/zoho-billing/src/config.ts:21

#### Properties

##### accounts

```ts
accounts: string;
```

Defined in: packages/zoho-billing/src/config.ts:25

Host serving the OAuth token endpoints.

##### api

```ts
api: string;
```

Defined in: packages/zoho-billing/src/config.ts:23

Host serving the Billing REST API.

***

### ZohoRequestOptions

Defined in: packages/zoho-billing/src/client.ts:53

#### Properties

##### body?

```ts
optional body?: unknown;
```

Defined in: packages/zoho-billing/src/client.ts:58

JSON request body.

##### headers?

```ts
optional headers?: Record<string, string>;
```

Defined in: packages/zoho-billing/src/client.ts:60

Per-request header overrides.

##### maxRetries?

```ts
optional maxRetries?: number;
```

Defined in: packages/zoho-billing/src/client.ts:64

Overrides `maxRetries` for this call.

##### method?

```ts
optional method?: "POST" | "GET" | "PUT" | "DELETE";
```

Defined in: packages/zoho-billing/src/client.ts:54

##### query?

```ts
optional query?: ZohoQueryParams;
```

Defined in: packages/zoho-billing/src/client.ts:56

Query parameters. `undefined` and `null` values are dropped.

##### signal?

```ts
optional signal?: AbortSignal;
```

Defined in: packages/zoho-billing/src/client.ts:62

Aborts the request (in addition to the configured timeout).

***

### ZohoResponse

Defined in: packages/zoho-billing/src/types/common.ts:7

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

Defined in: packages/zoho-billing/src/types/common.ts:8

##### message

```ts
message: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:9

***

### ZohoStaticTokenCredentials

Defined in: packages/zoho-billing/src/auth.ts:55

A pre-obtained access token. The client will not refresh it.

#### Properties

##### accessToken

```ts
accessToken: string;
```

Defined in: packages/zoho-billing/src/auth.ts:56

***

### ZohoSubscription

Defined in: packages/zoho-billing/src/types/subscription.ts:87

#### Properties

##### activated\_at?

```ts
optional activated_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:94

##### addons?

```ts
optional addons?: ZohoSubscriptionAddon[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:125

##### amount?

```ts
optional amount?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:92

##### auto\_collect?

```ts
optional auto_collect?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:104

##### bank\_account\_id?

```ts
optional bank_account_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:123

##### can\_add\_bank\_account?

```ts
optional can_add_bank_account?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:130

##### can\_charge\_setup\_fee\_immediately?

```ts
optional can_charge_setup_fee_immediately?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:138

##### cancelled\_at?

```ts
optional cancelled_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:119

##### card?

```ts
optional card?: ZohoCard;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:127

##### child\_invoice\_id?

```ts
optional child_invoice_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:111

##### contact\_persons\_associated?

```ts
optional contact_persons_associated?: ZohoContactPerson[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:134

##### coupon?

```ts
optional coupon?: ZohoSubscriptionCoupon;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:126

##### created\_at?

```ts
optional created_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:93

##### created\_time?

```ts
optional created_time?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:105

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:112

##### currency\_symbol?

```ts
optional currency_symbol?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:113

##### current\_term\_ends\_at?

```ts
optional current_term_ends_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:96

##### current\_term\_starts\_at?

```ts
optional current_term_starts_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:95

##### custom\_fields?

```ts
optional custom_fields?: ZohoCustomField[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:132

##### customer?

```ts
optional customer?: ZohoSubscriptionCustomer;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:131

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:140

Present on list responses, which flatten a few customer fields.

##### customer\_name?

```ts
optional customer_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:141

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:142

##### end\_of\_term?

```ts
optional end_of_term?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:114

##### expires\_at?

```ts
optional expires_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:99

##### gst\_treatment?

```ts
optional gst_treatment?: ZohoGstTreatment;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:120

##### interval?

```ts
optional interval?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:102

##### interval\_unit?

```ts
optional interval_unit?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:103

##### is\_metered\_billing?

```ts
optional is_metered_billing?: boolean;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:122

##### last\_billing\_at?

```ts
optional last_billing_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:97

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:90

##### next\_billing\_at?

```ts
optional next_billing_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:98

##### notes?

```ts
optional notes?: ZohoNote[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:135

##### pause\_date?

```ts
optional pause_date?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:100

##### payment\_gateways?

```ts
optional payment_gateways?: {
  payment_gateway?: ZohoPaymentGateway;
}[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:136

###### payment\_gateway?

```ts
optional payment_gateway?: ZohoPaymentGateway;
```

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:128

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:129

##### place\_of\_supply?

```ts
optional place_of_supply?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:108

##### plan?

```ts
optional plan?: ZohoSubscriptionPlan;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:124

##### plan\_name?

```ts
optional plan_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:143

##### pricebook\_id?

```ts
optional pricebook_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:121

##### product\_id?

```ts
optional product_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:115

##### product\_name?

```ts
optional product_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:116

##### reference\_id?

```ts
optional reference_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:107

##### resume\_date?

```ts
optional resume_date?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:101

##### salesperson\_id?

```ts
optional salesperson_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:109

##### salesperson\_name?

```ts
optional salesperson_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:110

##### status?

```ts
optional status?: ZohoSubscriptionStatus;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:91

##### subscription\_id

```ts
subscription_id: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:88

##### subscription\_number?

```ts
optional subscription_number?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:89

##### taxes?

```ts
optional taxes?: ZohoTax[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:133

##### trial\_ends\_at?

```ts
optional trial_ends_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:118

##### trial\_starts\_at?

```ts
optional trial_starts_at?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:117

##### unbilled\_charge\_id?

```ts
optional unbilled_charge_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:137

##### updated\_time?

```ts
optional updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:106

***

### ZohoSubscriptionAddon

Defined in: packages/zoho-billing/src/types/subscription.ts:53

#### Properties

##### addon\_code?

```ts
optional addon_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:54

##### addon\_description?

```ts
optional addon_description?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:56

##### discount?

```ts
optional discount?: string | number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:59

##### item\_custom\_fields?

```ts
optional item_custom_fields?: ZohoItemCustomField[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:63

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:55

##### price?

```ts
optional price?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:58

##### quantity?

```ts
optional quantity?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:57

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:62

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:61

##### total?

```ts
optional total?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:60

***

### ZohoSubscriptionCoupon

Defined in: packages/zoho-billing/src/types/subscription.ts:66

#### Properties

##### coupon\_code?

```ts
optional coupon_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:67

##### discount\_amount?

```ts
optional discount_amount?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:68

***

### ZohoSubscriptionCustomer

Defined in: packages/zoho-billing/src/types/subscription.ts:71

#### Properties

##### billing\_address?

```ts
optional billing_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:81

##### company\_name?

```ts
optional company_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:78

##### customer\_id?

```ts
optional customer_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:72

##### display\_name?

```ts
optional display_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:73

##### email?

```ts
optional email?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:77

##### first\_name?

```ts
optional first_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:75

##### last\_name?

```ts
optional last_name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:76

##### mobile?

```ts
optional mobile?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:80

##### payment\_terms?

```ts
optional payment_terms?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:83

##### payment\_terms\_label?

```ts
optional payment_terms_label?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:84

##### phone?

```ts
optional phone?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:79

##### salutation?

```ts
optional salutation?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:74

##### shipping\_address?

```ts
optional shipping_address?: ZohoAddress;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:82

***

### ZohoSubscriptionPlan

Defined in: packages/zoho-billing/src/types/subscription.ts:37

#### Properties

##### description?

```ts
optional description?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:46

##### discount?

```ts
optional discount?: string | number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:42

##### item\_custom\_fields?

```ts
optional item_custom_fields?: ZohoItemCustomField[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:50

##### name?

```ts
optional name?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:39

##### plan\_code?

```ts
optional plan_code?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:38

##### plan\_description?

```ts
optional plan_description?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:45

##### price?

```ts
optional price?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:41

##### quantity?

```ts
optional quantity?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:40

##### setup\_fee?

```ts
optional setup_fee?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:44

##### tags?

```ts
optional tags?: ZohoTag[];
```

Defined in: packages/zoho-billing/src/types/subscription.ts:49

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:47

##### total?

```ts
optional total?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:43

##### trial\_days?

```ts
optional trial_days?: number;
```

Defined in: packages/zoho-billing/src/types/subscription.ts:48

***

### ZohoTag

Defined in: packages/zoho-billing/src/types/common.ts:62

#### Properties

##### tag\_id?

```ts
optional tag_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:63

##### tag\_option\_id?

```ts
optional tag_option_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:64

***

### ZohoTax

Defined in: packages/zoho-billing/src/types/common.ts:67

#### Properties

##### tax\_amount?

```ts
optional tax_amount?: string | number;
```

Defined in: packages/zoho-billing/src/types/common.ts:70

##### tax\_id?

```ts
optional tax_id?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:68

##### tax\_name?

```ts
optional tax_name?: string;
```

Defined in: packages/zoho-billing/src/types/common.ts:69

***

### ZohoTokenManagerOptions

Defined in: packages/zoho-billing/src/auth.ts:81

#### Properties

##### accountsBaseUrl?

```ts
optional accountsBaseUrl?: string;
```

Defined in: packages/zoho-billing/src/auth.ts:85

Overrides the region's accounts host. Mainly for tests and Zoho proxies.

##### credentials

```ts
credentials: ZohoCredentials;
```

Defined in: packages/zoho-billing/src/auth.ts:82

##### expiryLeewayMs?

```ts
optional expiryLeewayMs?: number;
```

Defined in: packages/zoho-billing/src/auth.ts:91

Refresh this many milliseconds before actual expiry, so a token does not
expire mid-flight on a slow request. Defaults to 2 minutes.

##### fetch?

```ts
optional fetch?: typeof fetch;
```

Defined in: packages/zoho-billing/src/auth.ts:92

##### region?

```ts
optional region?: ZohoRegion;
```

Defined in: packages/zoho-billing/src/auth.ts:83

##### tokenStore?

```ts
optional tokenStore?: ZohoTokenStore;
```

Defined in: packages/zoho-billing/src/auth.ts:86

***

### ZohoTokenStore

Defined in: packages/zoho-billing/src/auth.ts:25

Persistence for access tokens. The default is per-process memory, which is
fine for a long-lived server but wasteful on serverless, where every cold
start re-refreshes. Supply a Redis/DB-backed store there instead.

#### Methods

##### delete()?

```ts
optional delete(key): void | Promise<void>;
```

Defined in: packages/zoho-billing/src/auth.ts:28

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

Defined in: packages/zoho-billing/src/auth.ts:26

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

Defined in: packages/zoho-billing/src/auth.ts:27

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `token` | [`ZohoAccessToken`](#zohoaccesstoken) |

###### Returns

`void` \| `Promise`\<`void`\>

***

### ZohoTransaction

Defined in: packages/zoho-billing/src/types/customer.ts:98

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

Defined in: packages/zoho-billing/src/types/customer.ts:102

##### currency\_code?

```ts
optional currency_code?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:104

##### date?

```ts
optional date?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:101

##### status?

```ts
optional status?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:103

##### transaction\_id?

```ts
optional transaction_id?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:99

##### transaction\_type?

```ts
optional transaction_type?: string;
```

Defined in: packages/zoho-billing/src/types/customer.ts:100

***

### ZohoWebhookEndpoint

Defined in: packages/zoho-billing/src/types/event.ts:79

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### last\_updated\_time?

```ts
optional last_updated_time?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:83

##### status?

```ts
optional status?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:82

##### url?

```ts
optional url?: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:81

##### webhook\_id

```ts
webhook_id: string;
```

Defined in: packages/zoho-billing/src/types/event.ts:80

## Type Aliases

### UpdateAddonParams

```ts
type UpdateAddonParams = Partial<Omit<CreateAddonParams, "addon_code">>;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:152

***

### UpdateCouponParams

```ts
type UpdateCouponParams = Partial<Omit<CreateCouponParams, "coupon_code">>;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:204

***

### UpdateCustomerParams

```ts
type UpdateCustomerParams = Partial<CreateCustomerParams>;
```

Defined in: packages/zoho-billing/src/types/customer.ts:88

***

### UpdatePlanParams

```ts
type UpdatePlanParams = Partial<Omit<CreatePlanParams, "plan_code">>;
```

Defined in: packages/zoho-billing/src/types/catalog.ts:102

***

### ZohoAddonType

```ts
type ZohoAddonType = 
  | "recurring"
  | "one_time"
  | string & {
};
```

Defined in: packages/zoho-billing/src/types/catalog.ts:111

Addons are billed alongside a plan: `recurring` or `one_time`.

***

### ZohoBillingOptions

```ts
type ZohoBillingOptions = ZohoBillingClientOptions;
```

Defined in: packages/zoho-billing/src/index.ts:37

***

### ZohoCouponDuration

```ts
type ZohoCouponDuration = 
  | "once"
  | "forever"
  | string & {
};
```

Defined in: packages/zoho-billing/src/types/catalog.ts:161

`once` applies to one invoice; `forever` to every renewal.

***

### ZohoCredentials

```ts
type ZohoCredentials = 
  | ZohoRefreshTokenCredentials
  | ZohoStaticTokenCredentials
  | ZohoCustomTokenCredentials;
```

Defined in: packages/zoho-billing/src/auth.ts:64

***

### ZohoDiscountBy

```ts
type ZohoDiscountBy = 
  | "percentage"
  | "flat"
  | string & {
};
```

Defined in: packages/zoho-billing/src/types/catalog.ts:162

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

Defined in: packages/zoho-billing/src/types/event.ts:12

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

Defined in: packages/zoho-billing/src/types/common.ts:128

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

Defined in: packages/zoho-billing/src/types/hostedpage.ts:16

***

### ZohoIntervalUnit

```ts
type ZohoIntervalUnit = "days" | "weeks" | "months" | "years";
```

Defined in: packages/zoho-billing/src/types/common.ts:125

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

Defined in: packages/zoho-billing/src/types/billing.ts:12

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

Defined in: packages/zoho-billing/src/types/common.ts:104

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

Defined in: packages/zoho-billing/src/types/billing.ts:139

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

Defined in: packages/zoho-billing/src/types/catalog.ts:19

How a plan or addon converts quantity into price.

`unit` charges price x quantity; `tiered` charges each bracket at its own
rate; `volume` charges every unit at the rate of the bracket the total lands
in; `package` charges per block of units.

***

### ZohoQueryParams

```ts
type ZohoQueryParams = Record<string, ZohoQueryValue>;
```

Defined in: packages/zoho-billing/src/types/common.ts:4

***

### ZohoQueryValue

```ts
type ZohoQueryValue = string | number | boolean | undefined | null;
```

Defined in: packages/zoho-billing/src/types/common.ts:3

Shapes shared across every Zoho Billing module.

***

### ZohoRegion

```ts
type ZohoRegion = "us" | "eu" | "in" | "au" | "jp" | "uk" | "ca" | "sa" | "cn";
```

Defined in: packages/zoho-billing/src/config.ts:10

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

Defined in: packages/zoho-billing/src/types/catalog.ts:10

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

Defined in: packages/zoho-billing/src/types/subscription.ts:22

Lifecycle states a subscription can be in.

`live` and `trial` are the healthy states; `dunning` and `unpaid` mean
collection is failing; `non_renewing` is cancelled-at-period-end and still
grants access until `current_term_ends_at`.

## Variables

### ZOHO\_BILLING\_API\_PATH

```ts
const ZOHO_BILLING_API_PATH: "/billing/v1" = "/billing/v1";
```

Defined in: packages/zoho-billing/src/config.ts:53

Path prefix for the Billing v1 API, appended to the region's API host.

***

### ZOHO\_ORG\_HEADER

```ts
const ZOHO_ORG_HEADER: "X-com-zoho-subscriptions-organizationid" = "X-com-zoho-subscriptions-organizationid";
```

Defined in: packages/zoho-billing/src/config.ts:60

Header Zoho uses to scope a request to one organization. The name still says
"subscriptions" even on Zoho Billing - that is the documented header, not a
typo left over from the product rename.

***

### ZOHO\_REGIONS

```ts
const ZOHO_REGIONS: Record<ZohoRegion, ZohoRegionHosts>;
```

Defined in: packages/zoho-billing/src/config.ts:28

## Functions

### createZohoBillingFromEnv()

```ts
function createZohoBillingFromEnv(env?, overrides?): ZohoBilling;
```

Defined in: packages/zoho-billing/src/index.ts:85

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

Defined in: packages/zoho-billing/src/config.ts:62

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

Defined in: packages/zoho-billing/src/config.ts:71

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
