# Contributing

Thanks for your interest.

## Setup

```bash
bun install
bun run verify
```

`verify` runs everything CI runs: lint, typecheck, tests, build, and the
generated-docs drift check.

## Before opening a pull request

1. Use a [Conventional Commit](https://www.conventionalcommits.org/) message
   (`feat:`, `fix:`, `docs:`, etc). Releases are cut automatically by
   semantic-release from these messages on `main`.
2. Regenerate reference docs if you changed a public signature or doc comment:
   `bun run docs`
3. Make sure `bun run verify` passes.

## Guidelines

- Two-space indent, no semicolons, double quotes (enforced by `oxfmt`).
- Prefer named exports.
- **Anything touching the trust boundary needs a test written as an attack**,
  not just an assertion. See `packages/zoho-billing/src/__tests__/security.test.ts`
  for the existing ones.
- Never widen what a client may send to Zoho without considering whether the
  new field affects pricing or ownership. See [`SECURITY.md`](SECURITY.md).
- Client entries must not import server-only modules. A bundle test enforces
  this; if it fails, you have pulled Node builtins into the browser bundle.
