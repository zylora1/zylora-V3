# Provider verification (redacted)

| Provider | Status | Evidence |
|---|---|---|
| PostgreSQL | PASS / depth BLOCKED | Railway service SUCCESS; `/api/health` database transaction 200 |
| Redis | NOT CONFIGURED | `REDIS_URL` not present in inspected variable names |
| OpenAI | PASS | Controlled public assistant message returned HTTP 200 and `grounded=true` |
| Resend | INVALID | Controlled password-reset call reached provider and provider returned HTTP 403; endpoint now returns generic 200 and records an operational event |
| WhatsApp | BLOCKED | Credentials are configured by name; no provider send performed |
| Google OAuth | BLOCKED | Configured and start endpoint 302; full callback not rerun on final SHA |
| Google Sheets | NOT CONFIGURED | No service-account/integration credential names available; supplied URL not connected |
| Cloudflare API | NOT CONFIGURED | No domain-control credential configured |
| Turnstile | BLOCKED | Config endpoint confirms configured; no real valid token test |
| Durable media | BLOCKED | S3 variables present; upload/redeploy proof not run |
| Razorpay | NOT CONFIGURED | No payment credentials; no network call made |
