# Environment variable audit

Audit date: 2026-09-16. Sources inspected: `app/config.py`, `app/main.py`, `app/db.py`, `app/providers.py`, `app/ai_service.py`, `app/email_service.py`, `app/telnyx.py`, `app/payment_service.py`, `app/infrastructure_service.py`, `scripts/`, `tests/`, `Dockerfile`, `run.sh`, `docker-compose.yml`, and `.env.example`.

Values are intentionally omitted. `CURRENTLY_USED` means application code reads the variable; a script-only variable is marked test/tooling. `PRODUCTION_REQUIRED` is conditional when the feature is enabled.

## Core and Render runtime

| Variable | Files | Purpose | Secret/public | Currently used | Production required | Decision |
|---|---|---|---|---|---|---|
| `APP_ENV` | `app/config.py`, startup/tests | Runtime mode | public config | yes | yes | KEEP |
| `ENVIRONMENT` | `app/config.py` | Platform-neutral mode override | public config | yes | optional | KEEP |
| `APP_URL` | `app/config.py`, `app/main.py` | Canonical origin, redirects, cookies | public config | yes | yes | KEEP |
| `PORT` | `run.sh`, Docker/Render runtime | Render process port | public config | yes | yes | KEEP |
| `DATABASE_URL` | `app/config.py`, `app/db.py`, migrations | SQLAlchemy database | secret | yes | yes; PostgreSQL | KEEP |
| `REDIS_URL` | `app/config.py`, compose/docs only | Reserved compatibility setting | secret | no runtime consumer | no | KEEP OPTIONAL / do not provision |
| `SESSION_TTL_HOURS` | `app/config.py` | Session lifetime | public config | yes | optional | KEEP |
| `CORS_ALLOWED_ORIGINS` | `app/main.py` | Explicit credentialed origins | public config | yes | conditional | KEEP |
| `SECRET_KEY` / `JWT_SECRET_KEY` / `ENCRYPTION_KEY` | deployment documentation/secret scanners | Application secret names when supplied by a deployment wrapper | secret | not model fields in current app | deployment-specific | KEEP ONLY IF host wrapper uses them |

## Hosted AI

| Variable | Files | Purpose | Secret/public | Currently used | Production required | Decision |
|---|---|---|---|---|---|---|
| `AI_GATEWAY_PROVIDER` | `app/config.py`, compose | Gateway selector | public config | yes | must be `vercel` when gateway key is set | KEEP |
| `AI_GATEWAY_API_KEY` | `app/config.py`, `app/ai_gateway.py` | Vercel AI Gateway credential | secret | yes | yes for hosted AI | KEEP |
| `AI_GATEWAY_BASE_URL` | `app/config.py`, `app/ai_gateway.py` | Gateway OpenAI-compatible endpoint | public config | yes | yes (default is official gateway URL) | KEEP |
| `AI_DEFAULT_MODEL` | `app/config.py`, model registry | Default gateway model | public config | yes | optional | KEEP |
| `AI_SALES_ASSISTANT_MODEL` | `app/config.py`, model registry | Assistant gateway model | public config | yes | optional | KEEP |
| `AI_EDITOR_MODEL` | `app/config.py`, model registry | Editor gateway model | public config | yes | optional | KEEP |
| `OPENAI_API_KEY` | compatibility adapter/tests | Legacy direct adapter | secret | compatibility only | no; production adapter refuses it | KEEP COMPATIBILITY / never mandatory |
| `OPENAI_MODEL`, `SALES_ASSISTANT_MODEL` | compatibility/tests | Legacy model names | public config | compatibility only | no | KEEP COMPATIBILITY |

## Communications

| Variable | Files | Purpose | Secret/public | Currently used | Production required | Decision |
|---|---|---|---|---|---|---|
| `TELNYX_API_KEY` | `app/config.py`, `app/telnyx.py` | Telnyx API credential | secret | yes | for Telnyx channels | KEEP |
| `TELNYX_BASE_URL` | `app/config.py`, `app/telnyx.py` | Telnyx API base | public config | yes | optional | KEEP |
| `TELNYX_EMAIL_FROM` | `app/config.py`, `app/email_service.py`, `app/telnyx.py` | Transactional sender | public config | yes | when Telnyx email enabled | KEEP |
| `TELNYX_EMAIL_DOMAIN_ID` | settings/example | Domain metadata for deployment configuration | public config | declared, not sent by current adapter | optional | KEEP OPTIONAL / verify before using |
| `TELNYX_WHATSAPP_FROM` | `app/config.py`, `app/telnyx.py` | WhatsApp sender | public config | yes | when WhatsApp enabled | KEEP |
| `TELNYX_MESSAGING_PROFILE_ID` | settings/example | Messaging profile metadata | public config | declared, not sent by current adapter | optional | KEEP OPTIONAL / verify before using |
| `TELNYX_SMS_FROM` | `app/config.py`, `app/telnyx.py` | SMS sender | public config | yes | only if SMS enabled | KEEP OPTIONAL |
| `TELNYX_PUBLIC_KEY` | `app/config.py`, `app/telnyx.py` | Preferred webhook verification key | secret/public-key material | yes for verified webhooks | KEEP |
| `TELNYX_WEBHOOK_PUBLIC_KEY` | compatibility | Previous webhook variable name | public-key material | compatibility alias | no | KEEP COMPATIBILITY |
| `EMAIL_FROM`, `EMAIL_REPLY_TO` | `app/config.py`, email composition | Sender/reply-to fallback and local compatibility | public config | yes for composition | KEEP |
| `EMAIL_UNSUBSCRIBE_SECRET` | `app/config.py`, mail flows | Unsubscribe token signing | secret | yes for production mail | KEEP |
| `RESEND_API_KEY` | `app/email_service.py`, compatibility tests | Legacy Resend transport | secret | compatibility only | no | KEEP COMPATIBILITY / not mandatory |
| `SMTP_*` | `scripts/external_provider_smoke.py`, historical compose entries | External smoke-test-only SMTP probe | secret/config | test script only | no | REMOVE FROM PRODUCTION CONFIG; retain test tool if needed |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_FROM` | `app/providers.py`, compatibility tests | Legacy WhatsApp fallback | secret/config | compatibility only | no | KEEP COMPATIBILITY / not mandatory |
| `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_GRAPH_VERSION` | `app/providers.py`, smoke tooling | Legacy Meta WhatsApp fallback | secret/config | compatibility only | no | KEEP COMPATIBILITY / not mandatory |

## Billing and infrastructure

| Variable | Files | Purpose | Secret/public | Currently used | Production required | Decision |
|---|---|---|---|---|---|---|
| `PAYMENT_PROVIDER` | `app/config.py`, billing | `mock` local mode or `razorpay` production mode | public config | yes | `razorpay` for paid production billing | KEEP |
| `RAZORPAY_KEY_ID` | payment adapter/routes | Checkout identifier | public-ish | yes | with Razorpay | KEEP |
| `RAZORPAY_KEY_SECRET` | payment adapter/routes | Server-side signing | secret | yes with Razorpay | KEEP |
| `RAZORPAY_WEBHOOK_SECRET` | webhook routes | Webhook verification | secret | yes with Razorpay | KEEP |
| `CLOUDFLARE_API_TOKEN` | domain/infrastructure provider | Scoped Cloudflare API token | secret | custom domains/Cloudflare operations | KEEP |
| `CLOUDFLARE_ACCOUNT_ID` | settings/example | Cloudflare account context | public config | optional by operation | KEEP |
| `CLOUDFLARE_ZONE_ID` | domain provider | DNS zone | public config | custom-domain operations | KEEP |
| `CLOUDFLARE_SAAS_TARGET` | domain provider | SaaS hostname target | public config | yes for custom-domain routing | KEEP |
| `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`, `R2_BUCKET` | `app/config.py`, media aliasing | Cloudflare R2 S3-compatible media | secret/config | only when media provider is `s3` | KEEP OPTIONAL |
| `MEDIA_STORAGE_PROVIDER` | `app/config.py`, `app/media.py` | `local` or `s3` media mode | public config | yes | yes | KEEP |
| `MEDIA_STORAGE_DIR`, `MEDIA_STORAGE_DURABLE` | config/media | Render disk-backed media mode | config | yes | durable volume if local production | KEEP |
| `TURNSTILE_ENABLED` | `app/config.py`, `app/providers.py`, public security config | Feature flag | public config | yes | optional feature | KEEP |
| `TURNSTILE_SITE_KEY` | public security config | Browser site key | public | yes when enabled | KEEP OPTIONAL |
| `TURNSTILE_SECRET_KEY` | `app/providers.py` | Server verification | secret | yes when enabled | KEEP OPTIONAL |

## Identity, Penpot, and operational tooling

| Variable | Files | Purpose | Secret/public | Currently used | Production required | Decision |
|---|---|---|---|---|---|---|
| `GOOGLE_OAUTH_ENABLED` | `app/config.py` | Optional Google login gate | public config | yes | no unless enabled | KEEP |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI` | OAuth routes/provider | Google OIDC login | secret/config | yes when configured | optional feature | KEEP OPTIONAL |
| `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_SERVICE_ACCOUNT_FILE`, `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Sheets integration | Google Sheets server integration | secret/config | optional integration | feature-specific | KEEP OPTIONAL |
| `STUDIO_ENGINE` | config/Studio | `legacy` or `penpot` | public config | yes | `legacy` for current V1 | KEEP |
| `PENPOT_BASE_URL`, `PENPOT_INTERNAL_URL`, `PENPOT_UPSTREAM_*`, `OIDC_*` | Penpot manifest/bridge | Inactive fail-closed Penpot path | mixed | only when Penpot enabled | no for V1 | KEEP INACTIVE |
| `PEXELS_API_KEY` | media import | Optional stock-image search | secret | optional feature | no | KEEP OPTIONAL |
| `ZYLORA_BROWSER`, `ZYLORA_MATRIX_ONLY`, `TAILADMIN_REFERENCE_URL` | browser/audit scripts | Local QA controls | test-only | scripts | no | TEST_ONLY |

## Source conclusions

- No active application code imports an OpenAI/Anthropic/Gemini SDK. Direct OpenAI is an explicitly gated compatibility adapter.
- No active application code uses SMTP; SMTP references are smoke-test or historical configuration only.
- Redis has no runtime consumer beyond the settings/health display; current health now reports `NOT_REQUIRED`.
- Render-specific credentials and deployment IDs are not present in this workspace, so live Render verification remains an external gate.
- No secret values were included in this document.
