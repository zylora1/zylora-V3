# Zylora Architecture Consolidation Design

**Date:** 2026-09-15  
**Status:** Approved for implementation by the user  
**Scope:** Compatibility migration of hosted AI, communications, provider boundaries, and Penpot-backed Studio integration.

## 1. Context and current audit

The repository has a verified 481-pass backend/browser baseline, a canonical
SiteDocument mutation/history/publishing path, a working vendor-neutral agent
gateway (REST/OpenAPI and MCP), OAuth authorization-code/PKCE, hosted
publishing, and a legacy Studio editor. The current Penpot work is a
request-scoped projection/translation adapter; it is **not** the Penpot
application and must not be described as one.

The audit found direct hosted-AI coupling to OpenAI in several application
flows, Resend in the authoritative email service, Twilio/Meta WhatsApp
configuration paths, and provider-specific settings/readiness logic spread
through the codebase. Cloudflare and Razorpay operations already exist and
will be wrapped rather than rewritten. No pinned Penpot distribution, verified
upstream commit, Penpot runtime, plugin, mapping table, or SSO bridge is
currently present.

## 2. Goals and invariants

The migration reduces recurring operational providers to Vercel AI Gateway,
Telnyx communications, Cloudflare infrastructure, Razorpay billing, Google
OAuth, and the existing deployment/database platform.

The following invariants are non-negotiable:

* SiteDocument remains the only persisted runtime/publish representation.
* Penpot becomes the design-time source only after an explicit, versioned
  mapping and deterministic compiler path exists.
* No second independently editable Zylora document or hidden provider path is
  introduced.
* All mutations continue through the existing authorization, command,
  validation, CAS, revision, history, audit, and persistence boundary.
* Hosted AI keeps reserve → execute → settle/release, streaming, tools,
  idempotency, fallback, and credit semantics.
* External MCP/REST clients that perform their own inference do not consume
  hosted Zylora AI credits.
* Lead notification bundles retain one lead-credit charge across email and
  WhatsApp retries/webhook replays.
* Published sites remain Zylora-hosted and continue to work if an external
  provider or Penpot is unavailable.
* Legacy providers and Studio remain available until replacement tests pass.

## 3. Target internal boundaries

All business code uses four interfaces and one validated settings object:

```text
AIService              → VercelAIGatewayAdapter
CommunicationService   → TelnyxAdapter
InfrastructureService  → CloudflareAdapter
PaymentService         → RazorpayAdapter
AuthService            → Zylora auth + Google OAuth
```

Adapters own provider URLs, headers, response normalization, retries,
correlation IDs, timeout policy, and safe error translation. Controllers and
feature services depend on interfaces, never on provider SDKs or raw
environment access. Local/test adapters remain deterministic and do not need
live credentials.

The settings surface adds the target names (`AI_GATEWAY_*`, `TELNYX_*`,
Cloudflare/R2 fields, Razorpay fields, Google fields, and Penpot fields) while
retaining read-only legacy aliases during migration. Production validation
fails closed for required credentials without printing secret values.

## 4. Hosted AI migration

`AIService` exposes completion, streaming, tool-call, model-resolution, and
usage-normalization operations. A centralized model registry supplies internal
IDs, gateway model IDs, capabilities, fallback model, cost ceiling, and credit
multiplier. `VercelAIGatewayAdapter` is the only implementation that knows the
gateway protocol.

Existing AI website creation, editor/sitewide operations, SEO/CMS generation,
Sales Assistant, and future media/speech entry points are migrated one by one.
Each call preserves the current reservation lifecycle and idempotency key.
Provider retries are part of one logical operation and cannot double-charge.
Direct OpenAI/Anthropic/Gemini calls are removed only after focused adapter and
feature regression tests pass. Live gateway verification is external unless a
usable credential is supplied.

## 5. Communications migration

`CommunicationService` owns email, WhatsApp, SMS, verification, and a future
voice-shaped interface. `TelnyxAdapter` normalizes accepted/delivered/
bounced/failed states, provider IDs, idempotency, webhook signatures, replay
protection, and correlation metadata.

The existing outbox/queue and lead-credit event model remains the durable
boundary. A lead notification bundle reserves one credit, dispatches the
intended channels, records per-channel outcomes, and settles/retries without
another credit deduction. Sender-domain SPF/DKIM/DMARC and WhatsApp template
approval are operational gates and are never represented as locally verified
until evidence exists.

## 6. Cloudflare and Razorpay boundaries

Existing Cloudflare custom-domain, DNS, Turnstile, and media/R2 operations are
wrapped by `InfrastructureService` with narrow operation methods and scoped
credentials. Existing published sites do not depend on a live Cloudflare API
call. Razorpay subscriptions, regional pricing, signature/webhook validation,
entitlements, reconciliation, and idempotency move behind `PaymentService`
without changing the customer billing model.

## 7. Penpot staged integration

`STUDIO_ENGINE=legacy|penpot` controls the route during migration. Legacy is
the default until the Penpot path is proven. The Penpot path contains:

1. A manifest recording the fetched upstream repository, verified version and
   commit, license, modified files, and Zylora-created files. No commit is
   invented; unavailable upstream/runtime access is recorded as blocked.
2. A versioned `site_penpot_mapping` record containing Zylora site ID, Penpot
   team/project/file IDs, design revision, compiled SiteDocument revision,
   migration version, timestamps, and status. Penpot IDs are never tenant
   authorization boundaries.
3. A first-party Website Tools metadata contract using stable node/page IDs and
   `pluginData`-equivalent semantic metadata for lead forms, appointments,
   navigation, CMS, AI assistant, SEO, and publishing features.
4. A deterministic Penpot → SiteDocument compiler that validates hierarchy,
   geometry, styles, responsive metadata, semantic metadata, and page limits;
   it never executes user JavaScript.
5. An idempotent SiteDocument → Penpot migration with validation comparison,
   audit record, retained legacy document, and rollback marker.
6. A Zylora `/studio/{site_id}` bridge that authorizes the site before resolving
   a Penpot file. SSO uses supported OIDC only; no custom authentication crypto
   or second user-facing login is introduced.
7. External AI edits target the Penpot-backed command/metadata source and then
   compile, so reopening Studio shows the same edit.

The actual Penpot distribution/plugin deployment, upstream commit verification,
OIDC interoperability, and live cross-service behavior require an external
runtime/provider and are separately classified when unavailable.

## 8. Provider health and usage

Super Admin receives a backend-backed provider health/usage surface. It reports
configuration and last-check status for AI Gateway, Telnyx channels, Cloudflare,
R2, Razorpay, Google OAuth, and Penpot without returning credentials. Usage
summaries and configurable alerts are read-only/queued operations and degrade
gracefully when a provider is unavailable.

## 9. Failure isolation and security

Provider outages leave published websites and stored leads available. AI and
payment failures return controlled errors; communications become retryable;
Cloudflare provisioning remains pending; Penpot unavailability does not block
runtime publishing from the last compiled document.

Every adapter call carries correlation ID, user/site context where applicable,
feature, operation, duration, provider, retry count, and success/failure. Logs
never contain credentials, tokens, passwords, or full sensitive prompts.

Existing tenant isolation, OAuth scopes, CAS, idempotency, unsafe URL/SVG
validation, webhook authentication, and publish authorization tests remain
mandatory. New tests cover provider abstraction, secret non-leakage, compiler
determinism, migration idempotency/rollback, and failure isolation.

## 10. Migration order and release gates

```text
baseline audit
→ settings/interfaces
→ Vercel adapter + hosted AI migration
→ focused AI tests
→ Telnyx adapter + email/WhatsApp migration
→ focused communication tests
→ Cloudflare/Razorpay wrappers
→ Penpot manifest/runtime gate
→ mapping + metadata/plugin contract
→ compiler + legacy migration/rollback
→ external-AI Penpot-backed edits
→ health/usage surfaces
→ security/browser/full-suite verification
```

Each provider follows `IMPLEMENT → TEST → SWITCH → VERIFY → REMOVE OLD CODE →
REMOVE OLD SECRET`. No legacy variable or provider code is removed merely
because the new interface exists. The final verdict distinguishes locally
verified behavior from `BLOCKED_BY_EXTERNAL_ENVIRONMENT` requirements.

## 11. Explicit non-goals

This design does not deploy production infrastructure, fabricate provider
credentials or approvals, claim live Penpot/ChatGPT/Claude/Manus onboarding,
replace Zylora billing, move hosting away from Zylora, or reintroduce source
export. It also does not require full general-purpose Penpot parity beyond
website editing needs.

