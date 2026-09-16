# External provider verification

Evidence was collected from the loaded application settings without recording credential values.

| Provider | Status | Evidence / remaining action |
|---|---|---|
| OpenAI | NOT CONFIGURED | `OPENAI_API_KEY` is empty in the certification environment. Repository fallback/error paths are testable; real provider latency/429 behavior is not proven. |
| Redis | NOT CONFIGURED | `REDIS_URL` is empty and no Redis service is running. Cache/session failure behavior remains unverified against a live Redis instance. |
| PostgreSQL | BLOCKED | `psycopg` is installed, but no PostgreSQL service or running Docker daemon is available. A real migration rehearsal cannot be honestly marked PASS. |
| Razorpay | NOT CONFIGURED | `payment_provider=mock`; Razorpay credentials and webhook secret are absent. Mock idempotency/tamper tests pass, live TEST-mode verification remains required. |
| Resend email | NOT CONFIGURED | `RESEND_API_KEY` is empty. Password-reset/notification provider delivery is not externally verified. |
| WhatsApp (Twilio/Meta) | NOT CONFIGURED | Both Twilio and Meta credential sets are empty. |
| Google OAuth / Sheets | NOT CONFIGURED | Google client and service-account credentials are empty. |
| Cloudflare | NOT CONFIGURED | Cloudflare API token/zone are empty. DNS/SSL ownership flows require an approved test account. |
| Turnstile | NOT CONFIGURED | Turnstile site/secret keys are empty. Server-side validation code is covered by tests, but a live token exchange is not proven. |
| Durable object storage | BLOCKED FOR PRODUCTION | Current settings use local media storage with `media_storage_durable=false`; production validation intentionally rejects this until a persistent volume or S3-compatible store is configured. |

No credential value is included in this artifact. These are environment gates, not claims that the corresponding integrations are broken in source.
