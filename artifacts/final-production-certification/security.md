# Security smoke evidence

- Missing Turnstile token rejected with HTTP 400 `TURNSTILE_REQUIRED`.
- Forged Turnstile token rejected with HTTP 400 `TURNSTILE_FAILED`.
- Invalid login rejected with HTTP 401 and generic message.
- `/api/auth/me` without a session returned HTTP 401.
- Production response headers include HSTS, CSP frame-ancestors, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `X-Frame-Options: SAMEORIGIN`.
- Arbitrary-origin health probe returned no `Access-Control-Allow-Origin`; credentials were not exposed cross-origin.

Authenticated tenant-isolation and RBAC golden-path checks remain unverified because no normal production account was created.
