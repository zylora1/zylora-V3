# ZYLORA — FINAL LIVE PRODUCTION CERTIFICATION

## PLATFORM VERDICT

**CONDITIONALLY CERTIFIED**

The exact deployed release is healthy and the repository gate is green, but the mandatory live normal-user golden path was not completed. Two external launch gates are concrete: a human Turnstile completion is required for signup, and the configured R2/S3 media credential is rejected by the provider. The report does not claim a production user journey that was not executed.

## FREE/BETA LAUNCH

**NOT READY** until the controlled signup and durable-media proof are completed. The remaining work is external/configuration setup, not a Studio redesign.

## PAID COMMERCIAL LAUNCH

**NOT READY**. Razorpay credentials are absent and Resend authentication is invalid. Paid checkout and purchase-lifecycle email are not certified.

## RELEASE

- Baseline local SHA: `fc107de1106200336e67a4416ebf14e1da6158fe`
- Final local SHA: the sealed commit produced by the evidence commit below (recorded in the final Git/Railway verification and final response)
- Baseline `origin/main`: `fc107de1106200336e67a4416ebf14e1da6158fe`
- Railway deployed SHA at evidence capture: `fc107de1106200336e67a4416ebf14e1da6158fe`
- Deployment ID: `c0d42b96-0ca5-414d-8c90-1c4d5428f59f`
- Deployment status: `SUCCESS`
- Production URL: `https://zylora-api-production.up.railway.app`
- Health: `GET /api/health` → HTTP 200, `{"status":"ok"}`
- Start: `sh ./run.sh`
- Pre-deploy migrations: `python -m scripts.run_migrations`

The report/evidence commit is the intended final release candidate; Railway must deploy the exact sealed commit before certification is closed.

## AUTOMATED TESTS

- Full repository: **383 passed, 1 skipped, 0 failed, 59 warnings** in 271.29s.
- Compileall: **PASS**.
- Studio regression suites: previously verified Chromium/Firefox/WebKit and mobile passes; no Studio code was changed in this certification pass.
- A sandbox-only run showed one Playwright `WinError 5`; the isolated browser test passed when rerun outside the restricted subprocess sandbox. The authoritative full run is the 383-pass result above.

## TURNSTILE

- Status: **CONFIGURED / ENFORCED**.
- Production site key and secret variables: present (values redacted).
- Allowed hostname: `zylora-api-production.up.railway.app`.
- Tokenless signup: HTTP 400 `TURNSTILE_REQUIRED`.
- Forged token: HTTP 400 `TURNSTILE_FAILED` (`invalid-input-response`).
- Valid-token signup: **HUMAN ACTION REQUIRED** — the available browser surface did not attach for interactive completion; no bypass was introduced.

## NORMAL USER

- Signup: **UNVERIFIED / HUMAN ACTION REQUIRED**.
- Login: invalid-login rejection verified (HTTP 401); valid normal-user login unverified.
- Dashboard/session/Back/Forward/refresh/logout/relogin: **UNVERIFIED** for a newly created production user.
- Role isolation and live IDOR checks: repository-tested, production normal-user execution unverified.

## OPENAI

- Credential state: **CONFIGURED**.
- Non-billable provider reachability: `GET /v1/models` returned HTTP 200 using Railway-injected credentials.
- AI Creator live application invocation: **UNVERIFIED** because normal signup was blocked at Turnstile.
- Model label: `gpt-5-mini` (configured).
- Sales Assistant model label: `gpt-4o-mini` (configured).

## AI CREDITS

Repository tests for reservation/settlement/idempotency pass in the full suite. Live before/after balances, provider usage, and refund-on-failure were not executed without a normal production account. Status: **LIVE UNVERIFIED**.

## ZYLORA STUDIO

Studio remains frozen at the already-certified implementation. Previously verified: load, direct manipulation, image crop/zoom, section reorder, autosave/history, pan, responsive views, cross-engine browser flows, CMS contract, and AI document contract. The final live account-specific Studio golden path is **UNVERIFIED** because signup was blocked.

## DURABLE MEDIA

- Configured backend: S3-compatible object storage (Cloudflare R2 endpoint and bucket variables present).
- Non-mutating `head_bucket`: HTTP 400.
- Non-mutating `list_objects_v2`: provider rejected the credential with `InvalidArgument: Credential access key has length 54, should be 32`.
- Upload/public-load/redeploy persistence: **FAIL / NOT CERTIFIABLE** until credentials are corrected.

## PUBLISHING

Public shell routes respond HTTP 200 in browser smoke. A new authenticated site was not generated/published in this run, so latest-revision parity, crop rendering, section order, and anonymous published output remain **UNVERIFIED**.

## SALES ASSISTANT

Configured model identity is present, but no authenticated owner site and no anonymous published site were available. Live provider grounding, owner resolution, wallet reservation/settlement, zero-balance fallback, and retry behavior remain **LIVE UNVERIFIED**. Repository owner-billing tests remain green.

## LEADS / APPOINTMENTS

No production lead or appointment was created. Application-level tests remain green; live tenant ownership and persistence are **UNVERIFIED**.

## PROVIDERS

| Provider | Result | Evidence |
|---|---|---|
| OpenAI | CONFIGURED / reachability PASS | `/v1/models` HTTP 200; app-level generation unverified. |
| PostgreSQL | CONFIGURED / lifecycle unverified | `DATABASE_URL` present; deployment migrations/startup healthy; private DB introspection unavailable. |
| S3/R2 durable media | FAIL | Provider rejected configured access key. |
| Resend | FAIL / HUMAN ACTION REQUIRED | `/domains` HTTP 401; replace/authorize key and verify sender. |
| Turnstile | CONFIGURED / valid signup HUMAN ACTION REQUIRED | Missing and forged tokens rejected. |
| Google OAuth | OPTIONAL / UNVERIFIED | Variables present; no controlled OAuth account flow executed. |
| WhatsApp | OPTIONAL / UNVERIFIED | Variables present; no safe recipient provided. |
| Google Sheets | OPTIONAL / UNVERIFIED | No controlled Sheets authorization executed. |
| Cloudflare/custom domains | OPTIONAL / UNVERIFIED | No safe audit domain flow executed. |
| Redis | OPTIONAL / NOT CONFIGURED | `REDIS_URL` absent. |
| Razorpay | **NOT CONFIGURED** | No Razorpay credentials were contacted. |

## POSTGRESQL

Application startup uses the Railway `DATABASE_URL`, the deployment ran the migration command, and the service reached SUCCESS. Direct external introspection is **ENVIRONMENT-LIMITED** by the private managed database. User/site/usage/media persistence after restart is unverified because the account workflow did not start.

## SECURITY

Production probes verified generic invalid-login failure, Turnstile enforcement, unauthenticated `/api/auth/me` rejection, HSTS, CSP frame protection, `nosniff`, Referrer-Policy, Permissions-Policy, and no arbitrary-origin `Access-Control-Allow-Origin`. Authenticated tenant isolation and RBAC remain unverified in this live run.

## BROWSER MATRIX

Public smoke against the exact Railway URL:

| Engine | Result |
|---|---|
| Chromium | 12/12 public routes HTTP 200; no page errors. |
| Firefox | 12/12 public routes HTTP 200; no page errors; rapid navigation produced transient image-request failures, while direct asset probes returned HTTP 200. |
| WebKit | 12/12 public routes HTTP 200; no page errors. |
| Mobile | Authenticated production mobile flow unverified pending signup. |

Expected 401 auth-bootstrap console entries and external Turnstile requests are not treated as application 5xx failures.

## REMAINING BLOCKERS

### LIVE-TURNSTILE-003

- Classification: **HUMAN ACTION REQUIRED**
- Exact reason: real signup requires a valid Cloudflare Turnstile token.
- Human action: complete the widget in an open production browser using the controlled audit account, then provide the resulting session for the golden-path run.
- Rerun: public signup → login → AI Creator → Studio → publish → Sales Assistant → lead capture.

### LIVE-MEDIA-003

- Classification: **MISSING CONFIGURATION / PROVIDER AUTHORIZATION**
- Exact reason: R2/S3 list request rejects the configured access key length.
- Human action: replace Railway `MEDIA_S3_ACCESS_KEY_ID` and `MEDIA_S3_SECRET_ACCESS_KEY` with valid credentials for the configured endpoint/bucket.
- Rerun: authenticated upload → public load → Railway redeploy → reload media and crop state.

### LIVE-RESEND-003

- Classification: **PROVIDER AUTHORIZATION**
- Exact reason: Resend `/domains` returned HTTP 401.
- Human action: replace/authorize `RESEND_API_KEY` and verify `RESEND_FROM`.
- Rerun: one controlled transactional email delivery.

### Razorpay

- Classification: **OPTIONAL / NOT CONFIGURED**
- Exact status: `Razorpay: NOT CONFIGURED`.
- Paid checkout remains pending configuration and sandbox verification.

## FINAL QUESTIONS

1. Can a completely new normal user sign up on production without bypasses? **Not yet proven; Turnstile requires HUMAN ACTION REQUIRED.**
2. Can that user generate a real AI website using actual OpenAI? **Not proven through the app; OpenAI credential reachability is PASS.**
3. Can the generated website be edited and persisted? **Not proven on a live normal account in this pass.**
4. Can real media be uploaded and survive Railway restart/redeploy? **No certification; current R2/S3 credentials fail.**
5. Can the site be published and opened anonymously? **Public shell is reachable; new-account publish path unverified.**
6. Does the published site preserve image crops and section order? **Unverified live.**
7. Does Sales Assistant work using the real provider? **Unverified live.**
8. Is Sales Assistant usage charged to the correct owner? **Repository-tested; live unverified.**
9. Can an anonymous visitor submit a real lead? **Unverified live.**
10. Does important tenant data persist after logout/relogin and restart? **Unverified live.**
11. Are there tenant-isolation or security regressions? **No regression in the repository suite; live normal-user isolation not exercised.**
12. Is Zylora ready for a free public beta? **Not yet, pending legitimate signup and durable-media proof.**
13. Is Zylora ready for paid customers? **No; Razorpay is not configured and Resend is unauthorized.**
14. Smallest remaining action set: **(a) complete one legitimate Turnstile signup, (b) replace R2/S3 credentials, (c) rerun the golden path and redeploy persistence check, (d) replace/authorize Resend if paid transactional email is required, (e) configure and verify Razorpay for paid launch.**

## FINAL RELEASE SHA

This report was authored against baseline `fc107de1106200336e67a4416ebf14e1da6158fe`. The exact sealed SHA is established by `git rev-parse HEAD`, `git ls-remote origin refs/heads/main`, and Railway deployment metadata after the final evidence push; those three values must match before certification is closed.
