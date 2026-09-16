# Zylora Final Production Audit Matrix

Date: 2026-09-16

This matrix separates locally exercised behavior from browser/provider/runtime
gates that are unavailable in this environment. `PASS` means the local
contract and its meaningful assertions passed. `PARTIAL` means the local
implementation is covered but an end-to-end surface remains incomplete.
`BLOCKED_BY_EXTERNAL_ENVIRONMENT` means the check could not be exercised
without an unavailable runtime, database, browser process, or provider.

| Area | Feature | Route/API | Primary workflow | Failure workflow | Security test | Browser test | Mobile test | Status | Evidence | Bug IDs | Remaining risk |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Auth | Signup/login/logout/reset | `/api/auth/*` | create account, verify, login, logout, reset | duplicate, invalid, expired token, replay | hardening + adversarial suites | tested auth surfaces pass in Chromium/Firefox/WebKit; full customer flow remains separate | not separately certified | PASS local / browser-tested | 27 focused hardening/security tests; axe 0/0/0/0 | — | provider-backed OAuth still external |
| Tenant security | Site/document ownership | `/api/sites/*` | user A reads/edits own site | ID substitution, foreign site, media, CMS | IDOR matrix and gateway allowlists | API exercised | not separately certified | PASS | `test_adversarial_security.py`, `test_agent_gateway.py` | — | Penpot file isolation needs real runtime |
| Roles | User vs super-admin | `/api/admin/*` | admin portal operations | normal user calls admin APIs | role boundary tests | super-admin shell tested in Chromium/Firefox/WebKit with 0 console/page errors | not separately certified | PASS local / browser-tested | adversarial role checks + responsive harness | — | live deployment and full destructive-action journey remain incomplete |
| Dashboard | Core sections and site creation | dashboard APIs/static shell | create/open site and navigate | empty/error/loading state | ownership tests | Chromium/Firefox/WebKit responsive shell and navigation pass at all eight widths | not separately certified | PASS browser surface / PARTIAL full journey | browser artifacts + dashboard tests | — | live deployment and full customer journey remain incomplete |
| Super-admin | users, usage, configuration, audit | `/api/admin/*` | inspect and change permitted state | forbidden/destructive actions | role and audit tests | not re-exercised in current host | not separately certified | PARTIAL | super-admin test suites | — | browser sign-off incomplete |
| Website creation | blank/AI/legacy entry points | `/api/sites`, `/api/sites/blank` | create canonical SiteDocument | invalid plan, duplicate/idempotency | page/ownership tests | legacy Studio creation covered | not separately certified | PASS local / PARTIAL browser | release-gap and Studio tests | — | Penpot creation blocked |
| Legacy Studio | edit, history, autosave, preview, publish | `/studio/{site_id}`, editor APIs | add/select/move/resize/rotate/save | stale revision, reload, failed save | CAS/history tests | Chromium + Firefox + WebKit pass; smart-guide v4 pass | mobile contract only | PASS local / browser-tested | 29 Studio tests; 12 rich checks + 29 smart-guide checks per browser | — | full customer journey and live deployment remain incomplete |
| Penpot | source, SSO, real file lifecycle | `vendor/penpot`, `/studio/{site_id}` | login → real file → edit → save → compile | tenant file substitution, failed runtime | manifest/semantic checks only | deferred; production engine is legacy | not run | DEFERRED_DISABLED_PRODUCTION_PATH | pinned source; fail-closed bridge; production path disabled | REL-ENV-002, REL-ENV-005 | runtime evidence is still required before any Penpot activation |
| Semantic layer | registry, metadata, compiler | compiler/mapping modules | semantic component → SiteDocument | unsafe URL, bad schema, broken binding | semantic/compiler tests | synthetic only | not run | PASS local / PARTIAL runtime | focused semantic suite | — | real plugin persistence pending |
| Pages | create/rename/delete/reorder | `/api/sites/*`, agent tools | pages and slugs remain canonical | duplicate slug, 299th page | page-limit and agent tests | legacy Studio contract | not separately certified | PASS local | page-limit suite | — | migration/Penpot scale pending |
| Navigation | internal/external/anchor/form actions | compiler/runtime | publish working links | deleted page, unsafe scheme | URL validation | renderer/static tests | not separately certified | PASS local / PARTIAL browser | compiler + SEO tests | — | public browser matrix incomplete |
| Forms/leads | validation, persistence, notification | `/api/leads`, public form routes | submit valid lead | spam, duplicate, failed provider | tenant/credit/security tests | prior public E2E evidence | not separately certified | PASS local / PARTIAL browser | lead and hardening suites | REL-ENV-004 | live communications unverified |
| Lead credits | one logical notification bundle | credit/notification services | reserve and deliver | retry, duplicate webhook, partial channel failure | credit hardening tests | not separately certified | not separately certified | PASS local | credit and provider suites | — | live Telnyx behavior pending |
| Appointments | availability, booking, cancellation | `/api/appointments`, assistant booking | book available slot | conflict, retry, cancellation | concurrency/ownership tests | API covered; full public browser blocked | not separately certified | PASS local / PARTIAL browser | appointment and CRM suites | REL-ENV-001 | live timezone/DST matrix pending |
| AI assistant | chat, lead conversion, tenant knowledge | assistant routes | ask question and capture lead | injection, timeout, insufficient credits | AI security tests | browser provider flow not current | not separately certified | PASS local / PARTIAL provider | hardening/security suites | REL-ENV-004 | live gateway unavailable |
| AI editing | typed mutation, credits, rollback | AI editor/gateway | edit text/theme/components | invalid request, stale revision, provider failure | AI billing/CAS tests | legacy Studio only | not separately certified | PASS local / PARTIAL continuity | AI and mutation suites | REL-ENV-004 | hosted gateway live test pending |
| External AI | MCP/REST/OAuth scopes | `/mcp`, `/api/agent`, `/oauth/*` | authorize/read/edit/revoke | stale, replay, wrong scope, allowlist | gateway + OAuth suites | no live named client | not separately certified | PASS protocol/local | gateway/OAuth tests | REL-ENV-002 | Penpot-backed continuity pending |
| CMS/blog | collections, bindings, posts, SEO | CMS/blog APIs | create/update/render content | deleted field, bad binding, duplicate slug | ownership tests | public browser not current | not separately certified | PASS local / PARTIAL browser | 32 CMS/SEO/media/Telnyx/CRM tests | — | large live dataset not exercised |
| Media | upload, validation, storage boundary | media APIs | upload valid image | polyglot, traversal, SSRF, oversized input | adversarial media tests | not separately certified | not separately certified | PASS local | adversarial/media suite | REL-ENV-004 | R2/live storage pending |
| SEO | metadata, sitemap, canonical, structured data | public SEO routes | publish indexable site | draft leakage, bad canonical | SEO/public route tests | prior artifacts; current combined harness blocked | not separately certified | PASS local / PARTIAL browser | SEO and sitemap suites | REL-ENV-001 | custom-domain proof pending |
| Responsive UI | app/public layouts | static/dashboard/editor | 1440→360 widths | overflow/clipping | accessibility/layout tests | dashboard/super-admin and Studio responsive harnesses pass in Chromium/Firefox/WebKit | mobile contracts only | PASS tested surfaces / PARTIAL full public journey | responsive artifacts and tests | — | production-domain and complete public journey remain incomplete |
| Publishing | save→preview→publish→rollback | `/api/sites/{id}/publish` | publish new revision | failed publish preserves live version | publish/CAS/branding tests | legacy publish evidence | not separately certified | PASS local / PARTIAL browser | release-gap/publish suites | REL-ENV-004 | live hosting/domain pending |
| Branding/plans | entitlement and branding | plan/publish APIs | free vs paid output | direct mutation/AI/MCP bypass | entitlement suites | not separately certified | not separately certified | PASS local | 46 entitlement/config tests | — | live payment state pending |
| Billing | mock/test checkout and webhooks | billing APIs | create/verify/cancel | replay, out-of-order, wrong signature | billing hardening tests | not separately certified | not separately certified | LOCAL VERIFIED | 46 entitlement/config tests | REL-ENV-004 | live Razorpay unavailable |
| Providers | AI/Telnyx/Cloudflare/Razorpay/Google | provider adapters | configured adapter call | timeout, bad signature, provider outage | adapter tests | not live | not live | BLOCKED_BY_EXTERNAL_ENVIRONMENT | local adapter contracts; Railway plan blocks staging resources | REL-ENV-004, REL-ENV-005 | credentials/staging required |
| PostgreSQL | migrations/locking/CAS | DB layer | run high-value suite on PostgreSQL | constraint/transaction differences | SQLite only in this host | n/a | n/a | BLOCKED_BY_EXTERNAL_ENVIRONMENT | no usable local/remote connection; Railway proxy/SSH unavailable | REL-ENV-003, REL-ENV-006 | production DB engine unverified |
| Accessibility | labels, focus, headings, contrast | public/auth/dashboard/Studio | keyboard and semantic output | modal/focus/error states | local axe evidence | tested surfaces pass in Chromium/Firefox/WebKit | mobile partial | PASS tested surfaces / PARTIAL mobile | axe: 0 critical, 0 serious, 0 moderate, 0 minor | REL-UX-002 | mobile-specific axe coverage remains partial |
| Performance | backend/UI/public site | key APIs and Studio | load/edit/save/compile/publish | slow provider/network | local legacy Studio profiles | Chromium/Firefox probes pass; Penpot unavailable | not separately certified | PARTIAL | legacy performance artifacts | REL-ENV-002 | Penpot/Postgres/live provider measurements pending |

## Release conclusion

No reproducible P0/P1 product defect was found in the locally executable
security, hardening, entitlement, CMS/SEO/media, provider-contract, or legacy
Studio test groups. The release remains conditional because the environment
does not provide Render deployment verification, real PostgreSQL, or live
provider credentials. Penpot is intentionally deferred and disabled for the
active legacy production engine; its bridge remains fail-closed. Railway
staging was authenticated and inspected, but its expired trial prevents
provisioning the missing Redis and Penpot services; the existing database has
no usable public proxy or SSH tunnel from this host.

## Certification refresh — 2026-09-16

This addendum supersedes earlier browser/accessibility notes where they
conflict with the final reruns:

- `pytest -q`: **531 passed, 0 failed, 0 skipped, 59 warnings** in 387.44s
  (0:06:27).
- Dashboard/super-admin QA: Chromium, Firefox and WebKit each completed all
  eight responsive widths and view navigation with **0 console/page errors**.
- Responsive geometry harness: **64/64 checks passed** at 1440, 1280, 1024,
  768, 430, 390, 375 and 360; console errors 0; network errors 0.
- Legacy Studio rich interaction harness: Chromium, Firefox and WebKit each
  completed **12 checks with 0 errors**. The tightened smart-guide v4 journey
  completed **29 checks per browser with 0 errors**, including guide cleanup
  and committed geometry. The blank Studio harness also completed its
  supported checks in all three engines with 0 errors.
- Focused browser E2E: **1 passed** in 50.96s.
- Axe-core 4.13.0: **0 critical, 0 serious, 0 moderate, 0 minor** across the
  seven audited surfaces. Legacy template visual heading tags are preserved;
  the runtime adds calculated `aria-level` corrections when authored levels
  skip the accessible outline.

These results certify the current legacy Studio/dashboard local browser
surface. They do not certify PostgreSQL, Render, or live provider integrations;
those rows remain blocked until their external evidence exists. Penpot remains
a deferred, disabled production path and is not represented as an active
legacy-engine launch gate.
