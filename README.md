# Zoho Billing SDK

A Stripe-style developer experience for the [Zoho Billing](https://www.zoho.com/billing/api/v1/)
(formerly Zoho Subscriptions) v1 API: a zero-dependency Node SDK plus React
bindings with Server Component and Server Action support.

Built from Zoho's official OpenAPI documents, so paths, parameters, and the
39 webhook event types match the published spec.

| Package | Description |
| --- | --- |
| [`@dipakparmar/zoho-billing`](packages/zoho-billing) | Node SDK: subscriptions, customers, catalogue, invoices, payments, hosted pages, webhooks |
| [`@dipakparmar/zoho-billing-react`](packages/zoho-billing-react) | React hooks, RSC readers, Server Action factories, React 19 forms |

## Install

```bash
npm install @dipakparmar/zoho-billing
npm install @dipakparmar/zoho-billing-react   # optional, for React apps
```

## Quick start

```ts
import { ZohoBilling } from "@dipakparmar/zoho-billing"

const zoho = new ZohoBilling({
  organizationId: process.env.ZOHO_ORGANIZATION_ID!,
  region: "us",
  credentials: {
    clientId: process.env.ZOHO_CLIENT_ID!,
    clientSecret: process.env.ZOHO_CLIENT_SECRET!,
    refreshToken: process.env.ZOHO_REFRESH_TOKEN!,
  },
})

const subscription = await zoho.subscriptions.create({
  customer_id: "903000000021976",
  plan: { plan_code: "pro-monthly" },
})
```

See each package's README for full documentation, and [`SECURITY.md`](SECURITY.md)
for the threat model - which matters more than usual here, because a large part
of Zoho's subscription request body is *pricing input*.

## Development

```bash
bun install
bun run verify   # lint, typecheck, test, build, docs drift check
```

## Releasing

Versioning is handled by [changesets](https://github.com/changesets/changesets):

```bash
bun run changeset   # describe the change
git push            # CI opens a release PR; merging it publishes
```

## License

MIT © Dipak Parmar
