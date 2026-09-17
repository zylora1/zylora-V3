# ZYLORA ARCHITECTURE CONSOLIDATION REPORT

Date: 2026-09-15  
Repository: `Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4`

## A. Verdict

**CONDITIONALLY CERTIFIED** for the local compatibility migration.

The local implementation is green and the compatibility boundaries are in
place. It is not certified as the final Penpot-backed production architecture
because the real Penpot distribution/SSO runtime, live provider credentials,
PostgreSQL rehearsal, full axe run, dashboard visual sign-off, and named
third-party client onboarding were not available in this environment.

## B. Executive summary

This pass consolidated new business logic behind four internal boundaries:
`AIService`, `CommunicationService`, `InfrastructureService`, and
`PaymentService`. Hosted AI now resolves through the Vercel AI Gateway adapter
when configured, communications have a Telnyx adapter with signed webhook
verification and durable deduplication, domain/payment paths use provider
facades, and Super Admin has provider health/usage views without secret
disclosure. Configurable hosted-AI cost, Telnyx-volume and communication
failure-rate thresholds are surfaced in that provider panel.

The Penpot work is deliberately a **fail-closed bridge**, not a claim that
Penpot has been installed. It includes mapping, semantic metadata, a safe
compiler, migration checkpoints, rollback state, and a first-party plugin
surface. Legacy Studio remains the default until a pinned upstream Penpot
runtime and SSO are exercised with real credentials.

The canonical SiteDocument, mutation service, history/revisions/CAS, audit,
publisher, external-agent scopes/allowlists/idempotency, hosted publishing,
298-page limit, plan branding, and no-source-export policy remain intact.

## C. Architecture integrity

| Boundary | Result | Evidence |
|---|---|---|
| SiteDocument | PASS as runtime/publish source | Existing mutation/history/revision/publisher suites remain green |
| Mutation/CAS/audit | PASS | Full suite and adversarial security suite |
| Studio | PASS on legacy engine | Chromium/Firefox/WebKit v4 and blank-Studio runs: 28 checks each, 0 errors |
| Penpot design source | PARTIAL / gated | Mapping/compiler/plugin exist; runtime distribution and SSO are not installed |
| Agent gateway | PASS locally | MCP, REST/OpenAPI, OAuth, scopes, allowlists, revocation, CAS, idempotency tests |
| Hosted AI | PASS locally / compatibility fallback retained | `HostedAIService` and gateway adapter; legacy adapter only when gateway is absent |
| Communications | PASS locally / live cutover unverified | Telnyx facade, signed webhooks, dedupe, one lead-credit bundle |
| Infrastructure | PARTIAL | Cloudflare domain/Turnstile facade; R2 aliases now feed existing S3-compatible media service |
| Payments | PASS locally / live Razorpay unverified | Razorpay facade preserves existing route/test seam and webhook verification |

## D. Provider count and operating model

### Before (detected compatibility/provider surfaces)

- Direct or compatibility AI references: OpenAI, plus inventory references for
  Anthropic, Gemini/Google AI, DeepSeek, Mistral and xAI.
- Communications: Resend, Twilio, Meta WhatsApp/Graph, SMTP settings, and the
  new Telnyx surface.
- Infrastructure/storage: Cloudflare plus generic S3-compatible media/local
  storage.
- Payments: Razorpay.
- Identity: Google OAuth.
- Editing: legacy Zylora Studio; Penpot metadata/bridge was not a runtime.

### After (targeted application surfaces)

Billable/operational providers intended after live cutover:

1. Vercel AI Gateway (hosted AI)
2. Telnyx (email, WhatsApp, SMS, future voice)
3. Cloudflare (DNS, domains, SSL/CDN, R2, Turnstile)
4. Razorpay (customer payments)

Configuration-only identity: Google OAuth. Existing deployment/database
infrastructure remains unchanged. Legacy OpenAI/Resend/Twilio/Meta fields are
retained only as staged compatibility fallbacks; they are not claimed removed
until live replacement credentials have been observed successfully.

## E. API-key inventory

| Name | Owner/purpose | Location | Rotation | Required |
|---|---|---|---|---|
| `AI_GATEWAY_API_KEY` | Vercel AI Gateway | server only | provider rotation | required for hosted AI cutover |
| `TELNYX_API_KEY` | Telnyx messaging/email | server only | provider rotation | required for communications cutover |
| `CLOUDFLARE_API_TOKEN` | domains/Turnstile operations | server only | scoped token rotation | required for live domain automation |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | Cloudflare R2 media | server only | R2 key rotation | required when `MEDIA_STORAGE_PROVIDER=s3` |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | customer payments | server only | payment-key rotation | required for live Razorpay mode |
| `RAZORPAY_WEBHOOK_SECRET` | webhook authenticity | server only | webhook secret rotation | required for live Razorpay mode |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | user login | server only | OAuth credential rotation | required for Google login |
| `OIDC_SIGNING_KEY` | future Zylora→Penpot SSO | server only | key rotation/rollover | required only when Penpot engine is enabled |

No provider master credential is sent to browser code, SiteDocument payloads,
the Studio, or the Penpot plugin. `app/config.py` is the settings boundary;
the only remaining direct environment reads are startup compatibility handling
for app environment/bootstrap and CORS.

## F. Penpot integration

| Item | Status |
|---|---|
| Upstream source/docs inspected | PASS: official Penpot repository and frontend/data architecture documentation reviewed |
| Pinned distribution/upstream commit | BLOCKED_BY_EXTERNAL_ENVIRONMENT: no verified source checkout/commit was available |
| SSO/OIDC | PARTIAL: configuration/gating exists; no live Penpot OIDC session certified |
| `/studio/{site_id}` boundary | PASS fail-closed mapping/ownership checks; legacy engine remains default |
| Site mapping | PASS: tenant-scoped `site_penpot_mapping` migration and authorization helper |
| Semantic plugin | PASS locally: `Zylora Website Tools` bridge/pluginData schema and authenticated API boundary |
| Compiler | PASS locally: deterministic, bounded Penpot-shaped payload compiler with pluginData preservation and unsafe-input rejection |
| Legacy migration | PASS locally for repeatable in-memory/checkpoint path; live Penpot import/reload remains untested |
| Licensing | PASS for repository records: MPL-2.0 attribution and `THIRD_PARTY_COMPONENTS.md`; no Penpot source was copied |

The migration therefore avoids a second persisted runtime model but does not
claim the final requested “actual Penpot editing platform” gate is closed.

## G. Hosted AI migration

- `HostedAIService` is the application dependency; model IDs resolve through a
  centralized registry.
- `VercelAIGatewayAdapter` supports JSON, tools and streaming over the
  OpenAI-compatible gateway endpoint.
- `LegacyOpenAIAdapter` is an explicit compatibility path only when the gateway
  credential is absent; it is not presented as the target architecture.
- Gateway model namespaces resolve to existing server-side pricing so reserve →
  execute → settle/refund accounting remains authoritative.
- Deterministic external MCP/REST edits do not consume hosted inference credits.
- No unexplained direct model-provider business call remains; direct OpenAI
  URL use is isolated to the compatibility adapter and test/smoke inventory.

Official references used: [Vercel AI Gateway REST API](https://vercel.com/docs/ai-gateway/openai-compat/rest-api) and [Vercel Python SDK guidance](https://vercel.com/docs/ai-gateway/sdks-and-apis/python).

## H. Communications migration

- Telnyx email, WhatsApp and SMS adapters are behind
  `CommunicationService`.
- Webhook signatures use Telnyx Ed25519 headers, replay-window checks, strict
  event IDs and durable deduplication.
- Email/WhatsApp notification retries do not double-charge the lead-credit
  bundle; the first channel owns the single debit.
- Queue/background behavior and existing delivery persistence remain intact.
- Resend/Twilio/Meta fallbacks are retained only for staged compatibility and
  were not removed without live Telnyx credentials.

References: [Telnyx email API overview](https://telnyx.com/resources/how-to-send-emails-using-api), [Telnyx WhatsApp sending](https://developers.telnyx.com/docs/messaging/whatsapp/send-messages), and [Telnyx webhook verification](https://developers.telnyx.com/docs/messaging/messages/receiving-webhooks).

## I. Cloudflare consolidation

- Cloudflare domain provisioning/deletion and Turnstile verification are behind
  `CloudflareInfrastructureService`.
- The existing media service already uses an S3-compatible abstraction. The
  new `Settings` model maps `R2_*` into the existing `MEDIA_S3_*` fields when
  those fields are omitted, so R2 does not create a second storage path or
  duplicate credentials.
- `MEDIA_STORAGE_PROVIDER=s3` is still required to opt into remote storage;
  local durable-volume behavior remains available for development.
- Live R2 bucket access, DNS automation and custom-domain SSL were not exercised
  without Cloudflare credentials.

## J. Security result

Full suite and focused adversarial suites passed. Covered cases include missing,
malformed, expired and revoked tokens; wrong audience/resource; scope and site
allowlist violations; tenant isolation; media/CMS ownership; stale revision;
duplicate idempotency; unsafe URLs/SVG/script fields; invalid node IDs and
parent cycles; rate limiting; publish-without-scope; OAuth state/PKCE/refresh
rotation; and webhook authenticity/deduplication.

No secret-leak finding was observed in provider-health responses. PostgreSQL
specific locking/JSON/constraint behavior remains unverified because no local
PostgreSQL server or Docker engine was available.

## K. Full test results

- Python suite: **511 passed, 0 failed, 59 warnings, 503.05s**.
- Focused provider/gateway/Penpot/security suite before the final alias test:
  **68 passed, 0 failed, 1 warning**.
- Provider-health/service regression after the final alert/alias changes:
  **8 passed, 0 failed, 1 warning**.
- Browser smoke `tests/test_e2e.py`: **1 passed**.
- Python compileall: **PASS**.
- `git diff --check`: **PASS** (only line-ending warnings).

Warnings are dependency deprecations from Starlette/httpx and test-client
cookie handling; no test failure was suppressed.

## L. Browser and performance results

| Surface | Chromium | Firefox | WebKit |
|---|---:|---:|---:|
| Studio v4 | 28 checks / 0 errors | 28 checks / 0 errors | 28 checks / 0 errors |
| Blank Studio responsive matrix | PASS / 0 errors | PASS / 0 errors | PASS / 0 errors |
| Dashboard/admin matrix | all required viewports / 0 errors | all required viewports / 0 errors | all required viewports / 0 errors |

Required dashboard viewports were 1440, 1280, 1024, 768, 430, 390, 375 and
360; dashboard cross-browser verification also covered 1440, 1024, 768 and
390 journeys. The dashboard visual-diff artifact reports changed-pixel
fractions of 0.1961, 0.1487, 0.0979, 0.1538, 0.2313, 0.2363, 0.2378 and
0.2524 respectively against the supplied generic TailAdmin archive. This is
material evidence, not pixel-level certification; structural visual review is
still open.

Existing performance evidence records 500-node drag/resize/zoom/undo p95 of
16.8/16.7/16.7/33.4 ms with zero long tasks. The full 50/100/250/500-node
artifact is retained under `artifacts/final-production-certification`.

Accessibility smoke found 0 missing accessible names/alt text. A full axe-core
run was **NOT TESTED** because axe-core was unavailable.

## M. Remaining external/manual gates

1. Install and pin a real Penpot distribution, record the upstream commit and
   modified-file set, complete OIDC SSO, and exercise a real file end to end.
2. Configure Vercel AI Gateway, Telnyx sender domains/WhatsApp approvals,
   Cloudflare/R2, and live Razorpay credentials; run provider smoke tests.
3. Perform live OAuth onboarding with named AI clients (ChatGPT/Claude/Manus
   or another client). Local MCP and REST/OpenAPI compatibility is verified;
   live named-client certification is not claimed.
4. Run migration/locking/JSON suites against PostgreSQL.
5. Install axe-core and complete the dashboard reference visual review.

These are genuine environment/provider gates. No deployment was performed.

## N. Monthly provider dashboard list after cutover

The intended recurring operational list is Vercel, Telnyx, Cloudflare,
Razorpay and Google Cloud OAuth, plus the existing deployment/database host.
Until staged cutover is executed, legacy OpenAI/Resend/Twilio/Meta credentials
remain visible as compatibility configuration and should not be deleted.

## O. Launch recommendation

**READY AFTER SPECIFIC FIXES** for a controlled V1 launch. The local codebase is
green and the consolidation materially reduces business-logic provider
coupling, but launch should wait for the five external/manual gates in section
M. The implementation should not be described as fully Penpot-backed or
production-certified until those gates have evidence.

## P. Meaningful files changed

- [app/ai_gateway.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/ai_gateway.py)
- [app/ai_service.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/ai_service.py)
- [app/ai_billing.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/ai_billing.py)
- [app/telnyx.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/telnyx.py)
- [app/communication_service.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/communication_service.py)
- [app/infrastructure_service.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/infrastructure_service.py)
- [app/payment_service.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/payment_service.py)
- [app/provider_health.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/provider_health.py)
- [app/api_provider_health.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/api_provider_health.py)
- [static/super-admin.html](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/static/super-admin.html)
- [static/super-admin.js](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/static/super-admin.js)
- [app/penpot_manifest.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/penpot_manifest.py)
- [app/penpot_mapping.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/penpot_mapping.py)
- [app/penpot_compiler.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/penpot_compiler.py)
- [app/penpot_migration.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/penpot_migration.py)
- [app/config.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/app/config.py)
- [.env.example](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/.env.example)
- [docker-compose.yml](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/docker-compose.yml)
- [tests/test_provider_health.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/tests/test_provider_health.py)
- [tests/test_provider_services.py](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/tests/test_provider_services.py)
- [migrations/050_site_penpot_mapping.sql](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/migrations/050_site_penpot_mapping.sql)
- [static/penpot-plugin/zylora-website-tools](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/static/penpot-plugin/zylora-website-tools)
- [PENPOT_INTEGRATION.md](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/PENPOT_INTEGRATION.md)
- [THIRD_PARTY_COMPONENTS.md](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/THIRD_PARTY_COMPONENTS.md)
- [THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md)
- [ZYLORA_ARCHITECTURE_CONSOLIDATION_REPORT.md](C:/Zylora-Ithanda%20finalu/Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4/ZYLORA_ARCHITECTURE_CONSOLIDATION_REPORT.md)
