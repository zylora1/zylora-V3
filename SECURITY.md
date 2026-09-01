# Security Notes

Implemented controls include:

- server-resolved authenticated identity and tenant/resource ownership checks (IDOR protection)
- HttpOnly SameSite session cookies, expiry and production `Secure` cookies
- per-session CSRF validation for authenticated mutations
- scrypt password hashing with random salts
- atomic database-backed fixed-window rate limiting shared across app workers for authentication/public abuse-sensitive flows
- Cloudflare Turnstile fail-closed production verification; browser integrations refresh single-use challenge tokens after protected mutations
- Google OAuth authorization-code flow with state + PKCE
- Google OIDC RS256/JWKS signature, issuer, audience, expiry, subject, email and `email_verified` validation
- hashed OTP storage, expiry, attempt caps and one-time consumption
- expiring email-verification, password-reset and ownership-transfer tokens
- production AI paths fail closed without OpenAI rather than silently substituting a local provider
- Razorpay order/signature/webhook verification and webhook idempotency; generic production plan changes cannot mint paid entitlements
- Resend (transactional email), Meta WhatsApp and Google provider adapters fail closed when production credentials are missing; SMTP is not used or supported in production
- remote-stock-image SSRF controls, DNS/IP filtering and provider-host allowlisting
- image content validation/re-encoding, decompression/pixel limits, safe filenames, tenant-scoped media access and storage path traversal protection
- structured-editor HTML/URL/style/attribute sanitization and executable URL rejection
- database/application single-live-site invariant and immutable published snapshots until republish
- API `Cache-Control: no-store`, `X-Content-Type-Options`, referrer policy, clickjacking/frame protection, permissions policy and production HSTS
- production debug-outbox suppression
- non-root Docker runtime and health checks
- persistent Docker media volume for local-media deployments; S3 supported for horizontal scaling
- structured audit logging for key account/site/admin changes

Before public production traffic, use managed secrets, TLS termination, managed PostgreSQL backups, WAF/CDN rate controls, monitoring/alerting, dependency/SBOM scanning, credential rotation and credential-backed staging smoke tests for every enabled external provider.
