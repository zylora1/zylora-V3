# Zylora Actual Penpot Studio Certification Report

**Date:** 2026-09-16  
**Repository:** `main` at `8c29bee` before this continuation  
**Verdict:** **CONDITIONALLY CERTIFIED**

## Executive summary

The official Penpot 2.17.0 source is now present as a clean Git submodule at
`vendor/penpot/`, pinned to the verified upstream commit
`bdce5817ea86d028db29113d9ecdadcf07097b36`. The existing Zylora bridge,
semantic plugin contract, compiler, mapping and migration code remain outside
the upstream tree. `SiteDocument` remains the runtime and publishing model;
the legacy Studio remains the active default.

The actual Penpot runtime could not be started on this Windows certification
host because the Docker Linux engine/named pipe is unavailable. Therefore the
runtime, OIDC SSO, real file lifecycle, plugin execution in Penpot, real-file
compilation, publish flow, Railway staging and PostgreSQL-specific gates are
not certified. No deployment was performed and no claim is made that these
gates pass.

## 1. Source and licensing

| Item | Result | Evidence |
|---|---|---|
| Official upstream repository | PASS | `https://github.com/penpot/penpot` |
| Version/tag | PASS | `2.17.0` |
| Commit | PASS | `bdce5817ea86d028db29113d9ecdadcf07097b36` |
| Acquisition method | PASS | Git submodule at `vendor/penpot/` |
| Submodule worktree | PASS | clean; direct `git -C vendor/penpot status --short` returned no lines |
| Upstream modifications | PASS | zero; `integrations/penpot/modified-upstream-files.json` |
| MPL compliance | NEEDS_LEGAL_REVIEW | final self-hosted distribution review remains outstanding |
| Official Compose artifact | PASS | `integrations/penpot/docker-compose.2.17.0.yaml`; SHA-256 `79330B4445D6C6DBA6918D222D342A365710BA90B6BB8A8EAE3D333155B0CF5E` |

Authoritative records are `OPEN_SOURCE_COMPONENTS.md`,
`PENPOT_INTEGRATION.md`, `integrations/penpot/penpot.lock.json`,
`integrations/penpot/penpot-compliance-manifest.json`, and
`integrations/penpot/modified-upstream-files.json`.

## 2. Runtime and Studio cutover

| Gate | Status |
|---|---|
| Penpot frontend/backend/exporter/database/Redis/object storage started | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Real Penpot file creation/edit/save/reload | NOT TESTED |
| Zylora `/studio/{site_id}` opening a real Penpot file | NOT TESTED |
| OIDC SSO, issuer/audience/state/nonce/redirect validation | NOT TESTED; OIDC settings are not configured locally |
| Zylora Website Tools plugin inside Penpot | NOT TESTED in a real runtime |
| Real Penpot plugin metadata persistence | NOT TESTED |
| Real Penpot → SiteDocument compile | NOT TESTED; synthetic/local contract coverage remains |
| Preview and hosted publish from a real Penpot file | NOT TESTED |
| Legacy SiteDocument migration in a real runtime | NOT TESTED; local migration contracts remain |
| Railway Linux staging | NOT DEPLOYED / NOT TESTED |

The startup attempt failed because the host does not expose the Docker Linux
engine (`dockerDesktopLinuxEngine` named pipe unavailable). The source is
present, but `PenpotManifest.engine_enabled()` remains false and
`STUDIO_ENGINE=legacy` remains the rollback-safe default.

## 3. Preserved architecture

- `SiteDocument` remains the only runtime/publish source.
- The existing Zylora mutation, CAS/revision, history, audit and publisher
  paths were not replaced.
- Penpot mapping, compiler, migration and the first-party plugin remain
  Zylora-authored boundary code outside the submodule.
- AI, communications, infrastructure and payment provider abstractions remain
  intact; no direct provider cutover was invented without credentials.
- No source/ZIP website export was reintroduced.

## 4. Provider and external-service gates

| Area | Local result |
|---|---|
| Vercel AI Gateway live request | NOT CONFIGURED |
| Telnyx email/WhatsApp live cutover | NOT CONFIGURED; Meta/template approval not exercised |
| Cloudflare/R2/Turnstile live API | NOT CONFIGURED |
| Razorpay live/test-safe provider verification | local mock mode only |
| Google OAuth live callback | NOT CONFIGURED |
| PostgreSQL rehearsal | BLOCKED_BY_EXTERNAL_ENVIRONMENT; no local PostgreSQL service/CLI/Docker engine |

The previous compatibility implementations remain in place where required by
the existing suite. They must not be removed until replacement credentials and
live delivery evidence exist.

## 5. Security and browser evidence

- Full Python suite (fresh rerun after this source/gate change): **511 passed,
  0 failed, 0 skipped, 59 warnings**, 540.15s (9:00.15).
- Focused adversarial security, gateway, OAuth and Telnyx tests: **23 passed,
  1 warning**, 37.61s.
- Focused Penpot mapping/provider-health tests in this continuation: **8
  passed, 1 warning**, 19.20s.
- Browser baseline: legacy/blank Studio Chromium, Firefox and WebKit passed;
  real Penpot browser flow is **NOT TESTED**.
- Dashboard Chromium, Firefox and WebKit journeys passed in the prior
  certification pass; these are not evidence of a real Penpot runtime.
- axe certification: critical **0**, serious **0**, moderate **20**, minor
  **0**; status PASS for the exercised local surfaces.

## 6. Build and repository checks

- `python -m compileall -q app`: **PASS** (rerun after this change).
- Studio production build: **PASS** (Vite 8.2.2, prior certification pass).
- Studio TypeScript check: **PASS** (prior certification pass).
- Next.js source check: **PASS**, 480 files / 0 errors (prior pass).
- JSON parse checks for all Penpot manifests: **PASS**.
- `git diff --check`: **PASS**; Git reported line-ending normalization
  warnings only.

## 7. Performance

The available performance artifact measures the legacy Studio only. Its 500
node drag/resize p95 frame measurements were approximately 16.7–16.8 ms with
zero recorded long tasks; 500-node undo measured 33.4 ms p95. These numbers
must not be presented as Penpot runtime performance. Penpot load, plugin,
compile, preview and publish performance are **NOT TESTED**.

## 8. Files changed in this continuation

- `.gitmodules`
- `vendor/penpot/` (official Git submodule at the pinned commit)
- `app/penpot_manifest.py`
- `app/provider_health.py`
- `tests/test_penpot_mapping.py`
- `tests/test_provider_health.py`
- `integrations/penpot/penpot.lock.json`
- `integrations/penpot/penpot-compliance-manifest.json`
- `integrations/penpot/modified-upstream-files.json`
- `integrations/penpot/README.md`
- `PENPOT_INTEGRATION.md`
- `OPEN_SOURCE_COMPONENTS.md`
- `THIRD_PARTY_COMPONENTS.md`
- `THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`
- `artifacts/final-production-certification/penpot-source-verification-2026-09-16.txt`
- this report

## 9. Remaining gates

The following are the explicit blockers to a final Penpot cutover:

1. Provide a Linux-capable Docker or equivalent isolated staging host.
2. Start the pinned Penpot distribution and verify its database, Redis,
   exporter, assets and save/reload lifecycle.
3. Configure and exercise Zylora OIDC SSO and tenant/file authorization.
4. Run the first-party plugin in the real runtime and verify metadata across
   normal editor operations.
5. Compile a real Penpot file, preview it, publish it through Zylora and
   reopen it through `/studio/{site_id}`.
6. Exercise external-agent continuity against the Penpot-backed design source.
7. Run the real Penpot browser matrix and Penpot-specific performance probes.
8. Complete live provider cutover tests only when the required credentials and
   provider approvals are available.

## 10. Recommendation

**READY AFTER SPECIFIC EXTERNAL FIXES.** The repository now has a reproducible,
official Penpot source boundary and preserves the existing architecture and
green local baseline. It is not ready for public V1 launch with Penpot as the
Studio engine until the blocked runtime, SSO, real-file lifecycle and publish
gates above are exercised and pass.
