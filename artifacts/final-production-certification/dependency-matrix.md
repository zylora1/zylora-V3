# Sanitized Railway dependency matrix

| Dependency | Live configuration state | Evidence |
|---|---|---|
| PostgreSQL | CONFIGURED | `DATABASE_URL` variable present; deployment migration command and app health succeed. Direct private DB introspection was not attempted externally. |
| Redis | OPTIONAL / NOT CONFIGURED | No `REDIS_URL` variable present. |
| OpenAI | CONFIGURED | `OPENAI_API_KEY` present; non-billable `/v1/models` request returned HTTP 200. |
| Turnstile | CONFIGURED | `TURNSTILE_ENABLED=true`, site/secret variables present, allowed hostname is the Railway domain. |
| Resend | CONFIGURED / INVALID | `RESEND_API_KEY` present; non-sending `/domains` request returned HTTP 401. |
| S3-compatible media | CONFIGURED / INVALID | S3/R2 variables present; non-mutating bucket/list checks failed with provider credential errors. |
| Google OAuth | CONFIGURED / UNVERIFIED | Client ID, secret, and redirect URI variables present; no legitimate OAuth session was exercised in this run. |
| WhatsApp/Twilio | CONFIGURED / UNVERIFIED | Twilio variables and `WHATSAPP_ENABLED=true` present; no safe recipient was supplied for a live send. |
| Cloudflare | OPTIONAL / UNVERIFIED | Only SaaS target metadata present; no safe audit domain/token flow was exercised. |
| Razorpay | NOT CONFIGURED | No Razorpay key/webhook variables present; `PAYMENT_PROVIDER` is `razorpay` but checkout credentials are absent. |
