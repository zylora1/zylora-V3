# ZYLORA — FINAL LIVE RAILWAY PRODUCTION CERTIFICATION

Date: 2026-09-06 (Asia/Calcutta)

## 1. Platform verdict

**CONDITIONALLY CERTIFIED**

The exact final commit is deployed successfully and the public unauthenticated surface, database-backed health check, controlled OpenAI chatbot path, security headers, and public browser/responsive matrix passed. Full production certification is withheld because several mandatory live gates were not safely executable in this run: authenticated tenant/Studio/CRM journeys, empirical media survival across redeploy, full live PostgreSQL schema/version inspection, Turnstile token validation, and several external-provider flows. Resend is configured but its current credential returned HTTP 403.

## 2. Razorpay billing verdict

**Razorpay: NOT CONFIGURED**. No Razorpay network calls were made. Repository-side billing protections remain covered by the automated suite; paid checkout must remain disabled/fail-closed until credentials are configured.

## 3. Final Git commit

- Local `HEAD`: `91c06d156bdd69e081a7972528e7b50fb9f80963`
- `origin/main`: `91c06d156bdd69e081a7972528e7b50fb9f80963`
- Working-tree source changes: none after this certification commit; inherited audit artifacts remain unstaged and untouched.

## 4. Railway deployment

- Project: `zylora-staging`
- Environment: `production`
- Service: `zylora-app`
- Deployment ID: `79ddcf80-34af-4df7-ab02-6188b8fad666`
- Deployed SHA: `91c06d156bdd69e081a7972528e7b50fb9f80963`
- Status: `SUCCESS`
- Public URL: https://zylora-api-production.up.railway.app
- Start command: `sh ./run.sh`
- Health path: `/api/health`
- Final health result: `200 {"status":"ok"}`

Railway logs showed application startup complete, Uvicorn bound to `0.0.0.0:8080`, and health checks succeeding. No final-deployment 5xx HTTP logs were observed.

## 5. PostgreSQL and migrations

Railway Postgres is `SUCCESS`; the app has a PostgreSQL `DATABASE_URL`, and `/api/health` executes a database `SELECT 1` on the deployed process. Startup migrations completed without an error in the deployment logs. A direct server-version/schema query was not exposed through a safe public endpoint in this run, so PostgreSQL version and complete live constraint/index inventory are **BLOCKED**, not inferred.

## 6. Durable storage

Railway variable names indicate S3-compatible media storage (`MEDIA_STORAGE_PROVIDER=s3`, bucket/endpoint configuration present). An authenticated upload followed by redeploy/reload could not be executed without a controlled authenticated site context, so durable-media persistence is **BLOCKED**. No claim is made from configuration alone.

## 7. Authentication, authorization, and tenant isolation

Public login/signup pages returned 200 in all three engines. Google OAuth start returned a real 302, and an earlier exact pre-final deployment log recorded a successful real callback; the complete callback was not re-run after SHA `91c06d1`. Authenticated tenant-isolation, RBAC, IDOR, Studio, CRM, Super Admin, and restart-state journeys were not safely executable without using an existing password/credential, so live status is **BLOCKED**. Repository security/RBAC suites are included in the final automated result.

## 8. Security headers and error handling

Final live response inspection confirmed HTTPS, HSTS, CSP frame-ancestors, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, Referrer-Policy, and Permissions-Policy. No ACAO header was returned for either the legitimate or attacker Origin probe. Invalid JSON returned a sanitized 422 response without a stack trace. Expected unauthenticated probes to `/api/auth/me` returned 401; these were the only browser-console 401s.

## 9. AI and chatbot

A controlled `[LIVE CERT]` public conversation against the deployed published test site created a conversation (200) and a real assistant message returned 200 with `grounded: true` and a service-query answer. This empirically verifies the configured OpenAI-backed public assistant path. AI Creator/Editor authenticated journeys were not run in this final pass and remain **BLOCKED**.

## 10. Browser and responsive matrix

The final deployed matrix used Playwright Chromium, Firefox, and WebKit across 1440, 1280, 1024, 768, 430, 390, 375, and 360 pixel widths. Public home, login, signup, pricing, templates, and robots pages returned expected status and had `scrollWidth == clientWidth` at every tested width. Authenticated Dashboard, Studio, CRM, appointments, chatbot-management, published-site editing, and Super Admin surfaces were not certified because authentication was not exercised.

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Public home | PASS | PASS | PASS |
| Auth pages | PASS | PASS | PASS |
| Pricing (`/pricing`) | PASS | PASS | PASS |
| Templates | PASS | PASS | PASS |
| Dashboard | BLOCKED | BLOCKED | BLOCKED |
| Studio | BLOCKED | BLOCKED | BLOCKED |
| CRM | BLOCKED | BLOCKED | BLOCKED |
| Appointments | BLOCKED | BLOCKED | BLOCKED |
| Chatbot management | BLOCKED | BLOCKED | BLOCKED |
| Published public site | PASS (existing `/s/jbhgvf-2f7c` 200) | BLOCKED | BLOCKED |
| Super Admin | BLOCKED | BLOCKED | BLOCKED |

## 11. Concurrency and persistence

Repository concurrency/security tests pass. Live CRM deduplication, deal OCC, appointment double-booking, and credit races were **BLOCKED** because they require authenticated controlled records. The final Railway deployment restarted the application and an existing published `/s/jbhgvf-2f7c` route remained 200 afterward, but a complete controlled account/site/media persistence rehearsal was not run.

## 12. Configured providers

| Provider | Configuration | Real credential test | Result |
|---|---|---|---|
| PostgreSQL | CONFIGURED | YES (health transaction) | PASS / schema depth BLOCKED |
| Redis | NOT CONFIGURED (`REDIS_URL` absent) | NO | NOT CONFIGURED |
| OpenAI | CONFIGURED | YES (live chatbot response) | PASS |
| Resend | CONFIGURED | YES | INVALID — provider returned HTTP 403; app now fails safely with recorded operational event |
| WhatsApp/Twilio | CONFIGURED | NO | BLOCKED — no safe provider send was performed |
| Google OAuth | CONFIGURED | Start 302; final callback not rerun | BLOCKED |
| Google Sheets | NOT CONFIGURED | NO | NOT CONFIGURED (supplied sheet URL not connected) |
| Cloudflare API | NOT CONFIGURED | NO | NOT CONFIGURED (S3 endpoint is not a domain-control credential) |
| Turnstile | CONFIGURED | Config endpoint only | BLOCKED — no real token was available for replay/valid-token proof |
| Durable media | S3 configuration present | Upload/redeploy not run | BLOCKED |
| Razorpay | NOT CONFIGURED | NO | NOT CONFIGURED |

## 13. Final automated tests

- Baseline before this live pass: 350 passed, 1 skipped, 59 warnings.
- Final after remediation: **363 passed, 1 skipped, 59 warnings, 269.21s**.
- Unexplained failures: 0.

## 14. Remaining P0/P1 and launch actions

No unresolved repository P0 source defect remains. The release remains conditional on:

1. Rotate/fix the Railway Resend credential and verify a real controlled delivery.
2. Execute authenticated controlled-account journeys for tenant isolation, Studio, CRM, appointments, credits, Super Admin, and concurrency.
3. Upload a controlled media object, redeploy, and verify the object survives.
4. Query/record live PostgreSQL version and migration/constraint inventory from an authorized Railway path.
5. Re-run real Turnstile, Google OAuth callback, WhatsApp, and any required Google Sheets/Cloudflare tests with safe test credentials.

## 15. Final certification statement

The final SHA is deployed and healthy on Railway, but the evidence does **not** support `PRODUCTION CERTIFIED` under the supplied mandatory-gate definition. The correct current status is **CONDITIONALLY CERTIFIED**; Razorpay remains intentionally **NOT CONFIGURED**.
