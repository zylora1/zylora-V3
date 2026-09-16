# Provider verification (redacted; final deployed SHA `aab18bd5e786c8e2273fe60a7128bff075678576`)

| Provider | Configuration | Final-SHA evidence | Result |
|---|---|---|---|
| PostgreSQL | CONFIGURED | Railway service SUCCESS; app health and authenticated DB workflows 200 | PASS at application level; direct introspection BLOCKED |
| Redis | NOT CONFIGURED | `REDIS_URL` absent from inspected variable names | NOT CONFIGURED |
| OpenAI | CONFIGURED | Model settings endpoint returns 2 enabled models; no final live normal-user generation | BLOCKED |
| Resend | CONFIGURED but provider rejected controlled request HTTP 403 | Generic failure handling verified | INVALID |
| WhatsApp | Credential names present | No safe designated recipient | BLOCKED |
| Google OAuth | Credential names present | Start endpoint only; callback not rerun | BLOCKED |
| Google Sheets | No usable service-account/integration credential | No live sync | NOT CONFIGURED |
| Cloudflare API | No domain-control credential | No safe domain test | NOT CONFIGURED |
| Turnstile | Site/secret configured | Missing token rejected with `TURNSTILE_REQUIRED`; valid token unavailable | BLOCKED; server enforcement PASS |
| Durable media | Storage variable names present | Upload/redeploy proof unavailable | BLOCKED |
| Razorpay | No payment credentials | No network call made | NOT CONFIGURED |
