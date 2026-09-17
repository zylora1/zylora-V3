# ZYLORA FINAL CUTOVER CERTIFICATION REPORT

**Certification date:** 2026-09-16 (Asia/Kolkata)  
**Repository branch:** `main`  
**Repository commit at rollback checkpoint:** `8c29bee4c62543744ab07d953afa9d48b0ea9fb1`  
**Deployment:** not performed

## A. Verdict

**CONDITIONALLY CERTIFIED**

The locally controllable Zylora implementation is regression-green and the
provider abstractions, security controls, accessibility shell, and browser
coverage are present. The release cannot be certified as a real Penpot cutover
because the official Penpot runtime could not start on this host: Docker's
Linux engine was unavailable. Live Vercel, Telnyx, Cloudflare/R2, Razorpay,
Google OAuth, and PostgreSQL verification also require credentials or services
that are not present locally.

## B. Penpot Runtime

| Gate | Result | Evidence |
|---|---|---|
| Official upstream source | PASS | Official Penpot 2.17.0 Docker distribution acquired from `https://github.com/penpot/penpot` |
| Version / commit | PASS | `2.17.0` / `bdce5817ea86d028db29113d9ecdadcf07097b36` |
| Install method | PASS | Official self-hosted Docker Compose file; SHA-256 `79330B4445D6C6DBA6918D222D342A365710BA90B6BB8A8EAE3D333155B0CF5E` |
| Runtime start | **BLOCKED_BY_EXTERNAL_ENVIRONMENT** | Docker CLI is installed, but `dockerDesktopLinuxEngine` is unavailable; no Penpot container started |
| Penpot SSO | NOT TESTED | Requires a running Penpot instance and configured OIDC |
| Real file lifecycle | NOT TESTED | File create/save/reload/assets were not exercisable without the runtime |
| Zylora Website Tools in Penpot | NOT TESTED | The Zylora-authored plugin bridge exists, but was not loaded in an actual Penpot runtime |
| Site mapping | LOCAL PASS | Tenant-scoped mapping, migration state, compiler revision, and rollback contracts are covered by local tests |
| Compiler | LOCAL PASS / REAL FILE NOT TESTED | Synthetic compiler contract tests pass; a real Penpot file was not available |
| Legacy migration | LOCAL PASS / REAL FILE NOT TESTED | Repeatability, versioning, and rollback tests pass against the bridge contract |
| `/studio/{site_id}` Penpot entry point | NOT CERTIFIED | `STUDIO_ENGINE=legacy` remains the safe default |
| Rollback | PASS | `artifacts/final-cutover-checkpoint.json` and legacy engine remain available |

The official self-hosting guidance and distribution were inspected:
[Penpot self-hosting guide](https://help.penpot.app/technical-guide/getting-started/),
[Docker installation](https://help.penpot.app/technical-guide/getting-started/docker/),
[official releases](https://github.com/penpot/penpot/releases).

### Penpot compliance

**PENPOT_MPL_COMPLIANCE = NEEDS_LEGAL_REVIEW**

No Penpot source files were copied or modified. The compliance manifest,
upstream commit, artifact hash, source instructions, and notice are recorded
in:

- `integrations/penpot/penpot-compliance-manifest.json`
- `integrations/penpot/penpot.lock.json`
- `integrations/penpot/README.md`
- `THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`
- `THIRD_PARTY_COMPONENTS.md`

The manifest records `modified_mpl_files: []` and the Zylora-authored bridge,
compiler, mapping, migration, and plugin files. Legal review is still required
before redistributing a Penpot-based product.

## C. AI Provider Cutover

| Item | Result |
|---|---|
| Internal boundary | `AIService` / `HostedAIService` |
| Current adapter | `VercelAIGatewayAdapter` |
| Credential configured | No (`AI_GATEWAY_API_KEY` absent) |
| Live model request | NOT TESTED |
| Streaming / tools | Local adapter and contract coverage; live gateway NOT TESTED |
| Model registry | Present in `app/ai_models.py` and `app/ai_service.py` |
| Credit reservation/settlement | Existing local tests pass; live provider accounting NOT TESTED |
| Fallback | `LegacyOpenAIAdapter` is retained as compatibility-only during staged cutover |
| Direct provider business paths | No feature module selects a provider; the only direct OpenAI URL is inside the explicit legacy compatibility adapter and inventory/tests |

The application has no gateway credential in this environment, so the final
live Vercel request, provider fallback, timeout, and gateway cost settlement
remain external gates. `STUDIO_ENGINE=legacy` is unchanged.

## D. Communications Cutover

| Channel | Result |
|---|---|
| Email | `CommunicationService` and `TelnyxAdapter` implemented; local HTTP/idempotency/error tests pass; live send/domain/webhook NOT TESTED |
| WhatsApp | Telnyx endpoint, signature/replay validation, and idempotency contract tested locally; Meta/Telnyx approval and live delivery NOT TESTED |
| SMS | Adapter path and sender configuration exist; live delivery NOT TESTED |
| Lead-credit behavior | Existing local notification/credit tests pass; no live provider event was exercised |
| Resend | `COMPATIBILITY_ONLY`; retained because Telnyx cutover was not proven with credentials |
| Twilio / direct Meta | `COMPATIBILITY_ONLY`; no credentials and no live cutover |

No legacy communication secret was removed because the staged replacement
cannot be declared live without provider credentials and approval.

### Provider consolidation delta

The repository inventory still detects legacy references to OpenAI, Anthropic,
Google AI/Gemini, DeepSeek, Mistral, xAI, Resend, SendGrid, Brevo, Twilio,
direct Meta WhatsApp, SMTP, Cloudflare, R2, Razorpay, Google OAuth, and
Penpot. The intended operational target is Vercel AI Gateway, Telnyx,
Cloudflare/R2, Razorpay, Google OAuth, the self-hosted Penpot runtime, and the
existing hosting/database platform. The count reduction is therefore an
implemented abstraction target, not a completed live-provider cutover.

## E. Infrastructure

| Provider/capability | Result |
|---|---|
| Cloudflare DNS/custom domains | Facade and health surface present; live API/DNS lifecycle NOT TESTED |
| Cloudflare SSL/CDN | Existing hosted publishing path retained; live account verification NOT TESTED |
| R2 | Existing S3-compatible media path accepts `R2_*` aliases through centralized settings; live upload/read/delete NOT TESTED |
| Turnstile | Server verification remains enabled; live token exchange NOT TESTED |
| Razorpay | `PaymentService`/facade present; environment is `payment_provider=mock`; live checkout/webhook/subscription verification NOT TESTED |
| Google OAuth | Configuration surface present; client credentials absent; login/callback NOT TESTED |

## F. PostgreSQL

**BLOCKED_BY_EXTERNAL_ENVIRONMENT.** `psycopg` is installed, but no local
PostgreSQL service, Docker Linux engine, or PostgreSQL CLI is available. SQLite
coverage does not certify PostgreSQL migrations, locking, JSON behavior, or
transaction semantics.

## G. Accessibility

Fresh axe-core 4.13.0 evidence is in
`artifacts/final-production-certification/accessibility-axe-certification.json`:

| Impact | Count |
|---|---:|
| Critical | 0 |
| Serious | 0 |
| Moderate | 20 |
| Minor | 0 |

Landing, login, signup, dashboard, super-admin, and the legacy Studio shell
have no reported violations. The remaining moderate findings are in the
licensed published-template preview: heading order, missing main landmark,
and region containment. They are documented rather than suppressed.

## H. Dashboard Fidelity

The supplied archive was inspected:
`free-react-tailwind-admin-dashboard-main.zip`, MIT license,
SHA-256 `cd8e86400171a4e8ca21b894e998250eac8174e4914d5b0f595b901a43012943`.

The comparison uses Chromium screenshots and RGB absolute pixel delta with a
changed-pixel threshold of 16. The reference is a generic ecommerce shell,
while Zylora keeps real site/lead data; these measurements are review evidence,
not a claim of semantic or pixel identity.

| Viewport | Changed-pixel fraction |
|---|---:|
| 1440 | 19.61% |
| 1280 | 14.87% |
| 1024 | 9.79% |
| 768 | 15.38% |
| 430 | 23.13% |
| 390 | 23.63% |
| 375 | 23.78% |
| 360 | 25.24% |

The full report is `artifacts/redesign_qa/dashboard-visual-diff-report.json`.
There is no trustworthy before/after pair in this pass; the current archive is
the final measured candidate-versus-reference result. Structural fidelity
remains an open review gate, especially on mobile.

The fresh dashboard browser verification passed all required viewports and
views with zero console/page errors.

## I. Browser Matrix

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Blank Studio high-value flow | PASS | PASS | PASS |
| Studio v4 interaction flow | PASS (28 checks) | Covered by blank Studio matrix | Covered by blank Studio matrix |
| Dashboard matrix | PASS | PASS | PASS |
| Real Penpot SSO/file flow | NOT TESTED | NOT TESTED | NOT TESTED |

Fresh combined product workflow: `1 passed` (`tests/test_e2e.py`). The blank
Studio matrix completed with `0 errors` across all three engines. The harness
now retries only a browser-process setup `TargetClosedError`; product
assertions remain fail-fast.

## J. Performance

The current performance artifact measures the legacy Zylora Studio bundle, not
an actual Penpot runtime. Penpot runtime performance is therefore **NOT
TESTED**.

`artifacts/final-production-certification/performance-profile-drag-raf-built.json`
measured the following p95 frame times (milliseconds; long-task count was zero
for every listed operation):

| Nodes | Drag | Resize | Zoom | Undo |
|---:|---:|---:|---:|---:|
| 50 | 16.8 | 16.7 | 16.8 | 16.7 |
| 100 | 16.8 | 16.8 | 16.7 | 16.7 |
| 250 | 16.7 | 16.8 | 16.7 | 16.7 |
| 500 | 16.8 | 16.7 | 16.7 | 33.4 |

These results support the legacy editor's measured interaction behavior only;
they must not be presented as Penpot measurements.

## K. Universal AI / Security

Local protocol and adversarial tests passed:

```text
pytest -q tests/test_adversarial_security.py tests/test_agent_gateway.py \
  tests/test_agent_oauth.py tests/test_telnyx.py
23 passed, 1 warning, 37.61s
```

Covered cases include tenant/object authorization, super-admin separation,
payment replay, rate limits, Turnstile replay, prompt-injection cost caps,
image/SSRF limits, source-export removal, logout/password-reset invalidation,
MCP initialize/tools/list/tools/call, OAuth PKCE/state/redirect/audience,
scope/site allowlists, stale CAS writes, idempotency, revocation, Telnyx
signature/replay validation, and provider selection.

The full suite also passed all remaining security, renderer, publishing,
credits, CMS, forms, appointments, billing, and account tests.

## L. Test Results

Fresh full repository run:

```text
pytest -q
511 passed, 0 failed, 0 skipped, 59 warnings in 501.49s (0:08:21)
```

Additional fresh checks:

- focused migration/provider/template tests: `103 passed, 1 warning, 21.07s`;
- combined browser workflow: `1 passed, 42.69s`;
- blank Studio Chromium/Firefox/WebKit matrix: `0 errors`;
- dashboard matrix: all required viewports/views, `0 console errors, 0 page errors`;
- Studio v4: `28 checks / 0 errors`;
- axe: `0 critical, 0 serious, 20 moderate, 0 minor`.

## M. Build Results

| Check | Result |
|---|---|
| Python compilation | PASS — `python -m compileall -q app` |
| Studio production build | PASS — Vite 8.2.2, 40 modules, 334.47 kB bundle / 101.10 kB gzip |
| TypeScript | PASS — `npx.cmd tsc --noEmit -p studio/tsconfig.json` |
| Next.js/source audit | PASS — 480 files, errors 0 |
| `git diff --check` | PASS; only line-ending normalization warnings |
| Conflict markers | none found in the changed implementation paths |

## N. Remaining Legacy Provider Dependencies

Repository-wide inventory classifies the following as compatibility or
verification references, not completed cutovers:

| Dependency | Status |
|---|---|
| OpenAI | `COMPATIBILITY_ONLY` — `LegacyOpenAIAdapter`, model catalogue fallback, tests/scripts |
| Resend | `COMPATIBILITY_ONLY` — email fallback while Telnyx credentials are absent |
| Twilio | `COMPATIBILITY_ONLY` — legacy WhatsApp path |
| Direct Meta WhatsApp | `COMPATIBILITY_ONLY` — legacy configuration/path |
| SMTP | `COMPATIBILITY_ONLY` — legacy smoke/config references |
| Anthropic/Gemini/DeepSeek/Mistral/xAI/SendGrid/Brevo | inventory/documentation references only; no configured runtime path |

These variables were not deleted because the staged replacement proof is not
available. Removing them now would turn an unverified migration into a
potentially breaking cutover.

## O. API-Key Inventory

No values are present in the certification environment. The intended
server-side inventory is:

| Name | Purpose | Client exposure | Rotation | State |
|---|---|---|---|---|
| `APP_SECRET_KEY` | application signing/session protection | server only | required on incident/rotation schedule | required |
| `DATABASE_URL` | database connection | server only | infrastructure policy | required |
| `REDIS_URL` | optional queue/cache connection | server only | infrastructure policy | optional locally / production-dependent |
| `AI_GATEWAY_API_KEY` | Vercel AI Gateway | server only | provider policy | optional locally; required for hosted AI |
| `TELNYX_API_KEY` | email/WhatsApp/SMS | server only | provider policy | optional locally; required for live communications |
| `CLOUDFLARE_API_TOKEN` | DNS/custom-domain/Turnstile infrastructure | server only | scoped-token rotation | optional locally; required for live domain automation |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | Cloudflare R2 media | server only | scoped-key rotation | required for R2 mode |
| `TURNSTILE_SECRET_KEY` | server-side bot verification | server only | provider rotation | required when Turnstile enabled |
| `RAZORPAY_KEY_SECRET` / `RAZORPAY_WEBHOOK_SECRET` | payment verification/webhooks | server only | payment rotation | required for Razorpay mode |
| `GOOGLE_CLIENT_SECRET` | Google OAuth | server only | Google rotation | required for Google login |
| `OIDC_SIGNING_KEY` | internal OIDC signing | server only | key rotation with overlap | required for Penpot SSO |

Public IDs (`GOOGLE_CLIENT_ID`, `RAZORPAY_KEY_ID`, Turnstile site key, sender
addresses, Penpot URLs) are configuration values rather than secret material.

## P. Provider Dashboard Count

After live cutover is proven, the intended operational set is:

1. Vercel — AI Gateway/model usage
2. Telnyx — email, WhatsApp, SMS, future voice
3. Cloudflare — DNS, custom domains, SSL/CDN, R2, Turnstile
4. Razorpay — customer payments
5. Google Cloud — OAuth configuration
6. Existing hosting/database platform

The current repository still has legacy compatibility configuration, so the
reduction is architecturally prepared but not yet an externally proven
production cutover.

## Q. Launch Recommendation

**READY AFTER SPECIFIC EXTERNAL FIXES**

Before public V1 launch, complete these concrete gates:

1. provide a working Docker/Linux runtime or equivalent official Penpot
   deployment;
2. exercise Zylora login → `/studio/{site_id}` → Penpot SSO → real file
   edit/save/reload → plugin metadata → compiler → preview → publish;
3. certify external-agent edits against the Penpot design source, not only the
   compiled SiteDocument;
4. configure and live-test Vercel AI Gateway, Telnyx (including WhatsApp
   approval), Cloudflare/R2/Turnstile, Razorpay, and Google OAuth;
5. run the high-value suite against PostgreSQL;
6. complete the dashboard structural visual-diff review and decide whether the
   20 moderate published-template axe findings are acceptable or should be
   corrected.

No deployment or production DNS/payment/provider mutation was attempted.

## Meaningful Files Changed This Pass

- `integrations/penpot/docker-compose.2.17.0.yaml`
- `integrations/penpot/penpot.lock.json`
- `integrations/penpot/penpot-compliance-manifest.json`
- `integrations/penpot/README.md`
- `app/penpot_manifest.py`
- `app/provider_health.py`
- `PENPOT_INTEGRATION.md`
- `THIRD_PARTY_COMPONENTS.md`
- `THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`
- `scripts/axe_certification.py`
- `scripts/blank_studio_browser_e2e.py`
- `app/structured_editor.py`
- `app/templates.py`
- `static/auth.css`, `static/login.html`, `static/signup.html`
- `static/zylora-apple.css`, `static/editor.css`, `static/editor.html`
- `static/landing.css`, `static/public-redesign.css`, `static/index.html`
- `artifacts/final-production-certification/accessibility-axe-certification.json`
- `artifacts/final-cutover-checkpoint.json`
