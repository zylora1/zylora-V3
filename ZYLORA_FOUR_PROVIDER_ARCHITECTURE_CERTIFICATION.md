# Zylora four-provider architecture certification

## A. Verdict

**CONDITIONAL** — the provider boundaries and fail-closed configuration are locally verified, but live Render, Vercel, Telnyx, Razorpay, Cloudflare, and Google OAuth credentials were not available in this workspace. The production editor remains `STUDIO_ENGINE=legacy`.

## B. Provider architecture

| Boundary | Canonical implementation | Local evidence | Live status |
|---|---|---|---|
| Vercel AI Gateway | `AIService` → `VercelAIGatewayAdapter` | gateway contract, streaming, tools, retry and model-registry tests | LOCAL CONTRACT VERIFIED ONLY |
| Telnyx | `CommunicationService` → `TelnyxAdapter` | email/WhatsApp/SMS payload and webhook tests | LOCAL CONTRACT VERIFIED ONLY |
| Razorpay | `PaymentService` and existing payment facade | signature, webhook, idempotency and entitlement tests | LOCAL CONTRACT VERIFIED ONLY |
| Cloudflare | `InfrastructureService` and media/Turnstile boundaries | domain, Turnstile and R2 alias/config tests | LOCAL CONTRACT VERIFIED ONLY |

Render is hosting/infrastructure, not counted as an API provider. PostgreSQL is required in production. Redis is **NOT_REQUIRED** by the current runtime.

## C. Vercel AI Gateway

- All migrated feature modules use `AIService` or its provider-neutral facade.
- Direct OpenAI, Anthropic, and Gemini keys are not required for production startup.
- `LegacyOpenAIAdapter` remains compatibility-only and is rejected by `HostedAIService` when `APP_ENV=production`.
- Gateway tests cover OpenAI-family and Anthropic-family model identifiers through the gateway contract, streaming, tools, retries, non-retryable failures, malformed JSON, and idempotency headers.
- Live gateway request: **BLOCKED_BY_EXTERNAL_ENVIRONMENT** (no staging credential).
- Credit reservation/settlement/refund remains server-side in the existing ledger.

## D. Telnyx

- Email and WhatsApp select Telnyx when `TELNYX_API_KEY` and the relevant sender are configured.
- `CommunicationService` is the business boundary; raw Telnyx calls stay in `app/telnyx.py`.
- Webhook signature verification and durable event de-duplication are present.
- Resend, SMTP, Twilio, and Meta are compatibility/test paths only; none is required when Telnyx is configured.
- Live Telnyx delivery and provider-side template/domain verification: **BLOCKED_BY_EXTERNAL_ENVIRONMENT**.
- Existing lead-credit rules and notification idempotency remain in the canonical delivery layer.

## E. Razorpay

- Razorpay remains behind `PaymentService`/the existing provider facade.
- Server-side order, payment, subscription, webhook signature, duplicate-event, and entitlement logic remain authoritative.
- Live/test-mode Razorpay request: **BLOCKED_BY_EXTERNAL_ENVIRONMENT** (no permitted staging credential).

## F. Cloudflare

- Domain/DNS lifecycle and Turnstile remain behind the infrastructure boundary.
- R2 is supported through the existing S3-compatible media service when `MEDIA_STORAGE_PROVIDER=s3`.
- Turnstile is feature-optional through `TURNSTILE_ENABLED`; disabled mode does not require a secret and still uses server validation when enabled.
- Live Cloudflare/R2/domain verification: **BLOCKED_BY_EXTERNAL_ENVIRONMENT**.

## G. Render

- Dockerfile and `run.sh` bind to `0.0.0.0:${PORT}` and run migrations before Uvicorn.
- `/api/health` is the process health endpoint.
- Render deployment verification is **BLOCKED_BY_RENDER_ACCESS**: no Render CLI/API session or deployment URL was available locally.
- Railway documents remain historical only and are not current release blockers.

## H. Environment variables

The complete source-backed inventory is in [`docs/ENVIRONMENT_VARIABLE_AUDIT.md`](docs/ENVIRONMENT_VARIABLE_AUDIT.md). The canonical production provider variables are:

```text
AI_GATEWAY_API_KEY
AI_GATEWAY_BASE_URL
TELNYX_API_KEY
TELNYX_EMAIL_FROM / TELNYX_WHATSAPP_FROM (enabled channels)
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
RAZORPAY_WEBHOOK_SECRET
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ZONE_ID
```

Database, session, unsubscribe, and application secrets are internal configuration, not additional API providers. Google OAuth and Turnstile are optional feature credentials.

## I. Legacy provider dependencies

| Provider/path | Classification | Production requirement | Action |
|---|---|---|---|
| Direct OpenAI adapter | COMPATIBILITY | no; rejected by production AI service | retain for local/test migration only |
| Resend | COMPATIBILITY | no when Telnyx is configured | retain until a separately approved removal pass |
| SMTP | TEST_ONLY/HISTORICAL | no | not used by application email service |
| Twilio WhatsApp | COMPATIBILITY | no when Telnyx is configured | retain fallback, never mandatory |
| Direct Meta WhatsApp | COMPATIBILITY | no when Telnyx is configured | retain fallback, never mandatory |
| Anthropic/Gemini SDKs | DEAD/NOT_FOUND in active app code | no | no provider key added |

## J. Security

- Private provider credentials are read server-side only.
- Production AI no longer selects the direct OpenAI adapter.
- PostgreSQL is required in production; SQLite startup/migrations fail closed.
- Webhook verification and event de-duplication are preserved.
- Existing tenant, scope, CAS, rate-limit, URL, SVG, and credit-integrity tests remain in the regression suite.
- Secret, conflict-marker, and whitespace scans are required before release.

## K. Regression

The final exact test/build counts are recorded after the post-change full run in the release evidence section below and must be updated before any stronger verdict is used.

## L. Remaining risks

- Provider-side credentials, sending-domain approval, live webhooks, and Render deployment were not exercised in this workspace.
- Historical compatibility adapters remain in source until a live Telnyx cutover is observed and separately approved for removal.
- Browser WebKit and real Penpot runtime remain environment-dependent and do not block the legacy Studio V1 engine decision.

## M. Final required API providers

The intended mandatory API-provider set is:

1. Vercel AI Gateway
2. Telnyx
3. Razorpay
4. Cloudflare

Additional credentials are conditional feature or infrastructure configuration, not mandatory AI/messaging providers.

