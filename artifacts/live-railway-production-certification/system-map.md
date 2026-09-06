# Live system map (observed)

- Public FastAPI site and API: `zylora-app` on Railway.
- Railway Postgres: production database service, used by `/api/health`.
- Media: S3-compatible configuration present in app variables; persistence proof blocked.
- OpenAI: public Sales Assistant path verified.
- Resend: configured but provider rejected the credential (403).
- Google OAuth: configured; full final callback blocked.
- Turnstile: configured; token proof blocked.
- Redis, Google Sheets service credentials, Cloudflare domain API, and Razorpay: not configured.
- Admin UI is a separate Railway service; authenticated admin journey not run.
