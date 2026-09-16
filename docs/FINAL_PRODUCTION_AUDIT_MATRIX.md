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
| Auth | Signup/login/logout/reset | `/api/auth/*` | create account, verify, login, logout, reset | duplicate, invalid, expired token, replay | hardening + adversarial suites | combined browser harness blocked at browser startup | not separately certified | PASS local / PARTIAL browser | 27 focused hardening/security tests | REL-ENV-001 | provider-backed OAuth still external |
| Tenant security | Site/document ownership | `/api/sites/*` | user A reads/edits own site | ID substitution, foreign site, media, CMS | IDOR matrix and gateway allowlists | API exercised | not separately certified | PASS | `test_adversarial_security.py`, `test_agent_gateway.py` | — | Penpot file isolation needs real runtime |
| Roles | User vs super-admin | `/api/admin/*` | admin portal operations | normal user calls admin APIs | role boundary tests | dashboard browser evidence is legacy shell | not separately certified | PASS local / PARTIAL browser | adversarial role checks | — | full cross-browser admin run blocked |
| Dashboard | Core sections and site creation | dashboard APIs/static shell | create/open site and navigate | empty/error/loading state | ownership tests | final full suite passed once; standalone combined rerun hit WebKit startup failure | not separately certified | PARTIAL | browser artifacts + dashboard tests | REL-ENV-001 | current run needs a stable browser host |
| Super-admin | users, usage, configuration, audit | `/api/admin/*` | inspect and change permitted state | forbidden/destructive actions | role and audit tests | not re-exercised in current host | not separately certified | PARTIAL | super-admin test suites | — | browser sign-off incomplete |
| Website creation | blank/AI/legacy entry points | `/api/sites`, `/api/sites/blank` | create canonical SiteDocument | invalid plan, duplicate/idempotency | page/ownership tests | legacy Studio creation covered | not separately certified | PASS local / PARTIAL browser | release-gap and Studio tests | — | Penpot creation blocked |
| Legacy Studio | edit, history, autosave, preview, publish | `/studio/{site_id}`, editor APIs | add/select/move/resize/rotate/save | stale revision, reload, failed save | CAS/history tests | Chromium + Firefox gap closure passed; WebKit blocked | mobile contract only | PASS local / PARTIAL browser | 29 Studio tests; 12 checks per Chromium/Firefox | REL-ENV-001, REL-UX-001 | WebKit and full customer journey incomplete |
| Penpot | source, SSO, real file lifecycle | `vendor/penpot`, `/studio/{site_id}` | login → real file → edit → save → compile | tenant file substitution, failed runtime | manifest/semantic checks only | not run | not run | BLOCKED_BY_EXTERNAL_ENVIRONMENT | pinned source; Docker unavailable; Railway staging provisioning blocked by expired trial | REL-ENV-002, REL-ENV-005 | actual Penpot runtime is uncertified |
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
| Responsive UI | app/public layouts | static/dashboard/editor | 1440→360 widths | overflow/clipping | accessibility/layout tests | legacy artifacts | mobile contracts only | PARTIAL | responsive artifacts and tests | REL-ENV-001 | current browser process unstable |
| Publishing | save→preview→publish→rollback | `/api/sites/{id}/publish` | publish new revision | failed publish preserves live version | publish/CAS/branding tests | legacy publish evidence | not separately certified | PASS local / PARTIAL browser | release-gap/publish suites | REL-ENV-004 | live hosting/domain pending |
| Branding/plans | entitlement and branding | plan/publish APIs | free vs paid output | direct mutation/AI/MCP bypass | entitlement suites | not separately certified | not separately certified | PASS local | 46 entitlement/config tests | — | live payment state pending |
| Billing | mock/test checkout and webhooks | billing APIs | create/verify/cancel | replay, out-of-order, wrong signature | billing hardening tests | not separately certified | not separately certified | LOCAL VERIFIED | 46 entitlement/config tests | REL-ENV-004 | live Razorpay unavailable |
| Providers | AI/Telnyx/Cloudflare/Razorpay/Google | provider adapters | configured adapter call | timeout, bad signature, provider outage | adapter tests | not live | not live | BLOCKED_BY_EXTERNAL_ENVIRONMENT | local adapter contracts; Railway plan blocks staging resources | REL-ENV-004, REL-ENV-005 | credentials/staging required |
| PostgreSQL | migrations/locking/CAS | DB layer | run high-value suite on PostgreSQL | constraint/transaction differences | SQLite only in this host | n/a | n/a | BLOCKED_BY_EXTERNAL_ENVIRONMENT | no usable local/remote connection; Railway proxy/SSH unavailable | REL-ENV-003, REL-ENV-006 | production DB engine unverified |
| Accessibility | labels, focus, headings, contrast | public/auth/dashboard/Studio | keyboard and semantic output | modal/focus/error states | local axe evidence | current browser audit blocked | mobile partial | PARTIAL | axe: 0 critical, 0 serious, 20 moderate | REL-ENV-001 | moderate issues and browser rerun remain |
| Performance | backend/UI/public site | key APIs and Studio | load/edit/save/compile/publish | slow provider/network | local legacy Studio profiles | Chromium/Firefox probes pass; Penpot unavailable | not separately certified | PARTIAL | legacy performance artifacts | REL-ENV-002 | Penpot/Postgres/live provider measurements pending |

## Release conclusion

No reproducible P0/P1 product defect was found in the locally executable
security, hardening, entitlement, CMS/SEO/media, provider-contract, or legacy
Studio test groups. The release remains conditional because the environment
does not provide real Penpot, PostgreSQL, live providers, or a stable WebKit
process for the complete browser workflow. Railway staging was authenticated
and inspected, but its expired trial prevents provisioning the missing Redis
and Penpot services; the existing database has no usable public proxy or SSH
tunnel from this host.

## Certification refresh — 2026-09-16

This addendum supersedes earlier browser/accessibility notes where they
conflict with the final reruns:

- `pytest -q`: **530 passed, 0 failed, 0 skipped, 59 warnings** in 396.11s.
- Dashboard/super-admin QA: Chromium, Firefox and WebKit each completed all
  eight responsive widths and view navigation with **0 console/page errors**.
- Responsive geometry harness: **64/64 checks passed** at 1440, 1280, 1024,
  768, 430, 390, 375 and 360; console errors 0; network errors 0.
- Legacy Studio rich interaction harness: Chromium, Firefox and WebKit each
  completed **12 checks with 0 errors**. The blank Studio harness also
  completed its supported checks in all three engines with 0 errors.
- Focused browser E2E: **1 passed** in 50.96s.
- Axe-core 4.13.0: **0 critical, 0 serious, 4 moderate, 0 minor**; the four
  moderate findings are heading-order issues in seeded legacy published
  template headings.

These results certify the current legacy Studio/dashboard local browser
surface. They do not certify a real Penpot runtime, PostgreSQL, Render, or
live provider integrations; those rows remain blocked until their external
runtime evidence exists.
