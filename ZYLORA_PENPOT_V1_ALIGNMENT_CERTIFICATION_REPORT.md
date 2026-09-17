# ZYLORA PENPOT V1 ALIGNMENT CERTIFICATION REPORT

**Date:** 2026-09-16  
**Verdict:** **CONDITIONALLY CERTIFIED**  
**Final engine:** `legacy`  
**Legacy Studio:** **ACTIVE** (rollback-safe default)

## A. Executive result

The Zylora/Penpot boundary is now formalized without creating a second
runtime document model. The checked-in component registry and schema define
version 1 website semantics; compiler validation normalizes legacy metadata,
rejects unsafe or unknown semantics, generates stable `zl_cmp_` identities,
and deterministically regenerates identities for duplicates. The existing
mutation/CAS/history/publisher path remains the only canonical write path.

The real Penpot source is present at `vendor/penpot/`, pinned to official
Penpot `2.17.0` / commit
`bdce5817ea86d028db29113d9ecdadcf07097b36`. A real Penpot runtime, SSO, file
lifecycle, plugin execution, real-file round-trip and publish flow remain
blocked because this host has no Docker Linux engine. This report therefore
does not claim Penpot production cutover.

## B. Feature parity matrix

The complete ownership/status matrix is in
[`docs/PENPOT_ZYLORA_FEATURE_PARITY.md`](docs/PENPOT_ZYLORA_FEATURE_PARITY.md).
It covers pages, navigation, buttons, links, text, images, sections, cards,
forms, leads, appointments, AI Sales Assistant, CMS, blog, SEO, domains,
analytics, responsive behavior, accessibility, publishing, branding, plans,
credits, AI editing and external AI editing.

Summary:

- **PASS:** typed schema validation, safe link validation, deterministic
  semantic duplication, compiler warning/degradation path, local SiteDocument
  round-trip comparison.
- **PARTIAL:** Penpot-facing visual/semantic integration, pages, navigation,
  forms, appointments, CMS, blog, SEO, responsive publishing and AI editing.
- **NOT_REQUIRED:** domains, analytics, branding, plan restrictions and
  credits are Zylora authorities and are not delegated to Penpot.
- **BLOCKED_BY_EXTERNAL_ENVIRONMENT:** real Penpot runtime and browser/file
  lifecycle.

## C. Penpot visual features

Penpot remains responsible for canvas editing, layout, selection, geometry,
layers, groups, components, typography, tokens, guides, snapping, zoom/pan,
and visual responsive composition. Zylora does not recreate these in a second
editor. The official source is isolated as a Git submodule; the Zylora plugin,
compiler, mapping and migration code remain outside the upstream tree.

Source/compliance record: official repository `https://github.com/penpot/penpot`,
version `2.17.0`, commit
`bdce5817ea86d028db29113d9ecdadcf07097b36`, with the pinned compose artifact
SHA-256 recorded in `integrations/penpot/penpot.lock.json`. The upstream
submodule is clean and `modified-upstream-files.json` lists zero modified
MPL-covered files. Notices and source instructions are recorded in
`THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`, `THIRD_PARTY_COMPONENTS.md` and
`integrations/penpot/README.md`. Compliance result: **NEEDS_LEGAL_REVIEW**;
the repository evidence is present, but no legal review was performed in this
local pass.

Real Penpot visual interaction verification is **NOT TESTED** on this host.
The legacy Studio browser and performance evidence must not be represented as
Penpot runtime evidence.

## D. Zylora semantic layer

Implemented:

- `integrations/penpot/zylora-component-registry.json` — one registry for
  website component types and runtime node mappings.
- `app/penpot_semantics.py` — versioned metadata schema, aliases, safe action
  validation, stable IDs, duplicate identity rules and document envelope.
- `static/penpot-plugin/zylora-website-tools/schema.json` — JSON Schema v1.
- Authenticated `/api/sites/{site_id}/studio/semantic-registry` endpoint.
- Plugin helpers for semantic metadata, duplication, component creation and
  component configuration.
- Compiler normalization for `pluginData`/metadata, schema rejection,
  semantic node mapping, unsafe-value rejection and non-fatal unsupported
  visual-effect warnings. Semantic actions, bindings, accessibility fields
  and explicit heading roles are projected into the existing SiteDocument
  runtime fields without discarding the original metadata.
- `zyloraWebsiteSchemaVersion=1` is persisted in the canonical document
  metadata during mutations and compilation.

Supported semantic registry includes text/heading roles, buttons, links,
images, sections, navigation, footer, contact/lead/enquiry forms,
appointments, AI assistant, FAQ, pricing, testimonials, gallery, CMS,
blog, map, social links and custom semantic components.

## E. Pages and navigation

Zylora owns page IDs, slugs, SEO metadata, routing, navigation relationships,
publish state and the server-side 298-page limit. Penpot owns each page’s
visual composition. Existing page/CAS/agent tests remain green. Real Penpot
multi-page file verification is **BLOCKED_BY_EXTERNAL_ENVIRONMENT**.

## F. Forms, leads and appointments

The compiler preserves typed `lead-form`, contact/enquiry form and
`appointment-widget` metadata with runtime configuration and bindings. Lead
storage, validation, notification, lead credits, availability, timezone,
conflicts, buffers and cancellation remain Zylora services. Telnyx remains
the communication abstraction; no provider secret enters pluginData or
browser code.

Local lead, appointment, security and credit tests pass. Real Penpot plugin
creation and public-site interaction are **NOT TESTED**.

## G. AI Sales Assistant and AI editing

The AI assistant’s placement is semantic metadata; conversation runtime,
AIService, model selection, credits, knowledge and lead capture remain
Zylora-owned. Penpot-style and external agent edits continue through the
existing typed mutation/CAS boundary. `add_component` and
`set_component_config` are represented as typed Penpot interactions rather
than arbitrary JSON/database writes.

External MCP/REST continuity against a real Penpot source remains
**NOT TESTED** because the runtime gate is unavailable.

## H. CMS, blog and SEO

CMS/blog metadata is represented as bindings and component configuration;
records, ownership, routes, publication, canonical URLs and SEO output remain
Zylora-owned. Page SEO is preserved by the compiler. Existing CMS/blog/SEO
tests remain part of the full suite. Real Penpot file binding verification is
**NOT TESTED**.

## I. Responsive and accessibility contract

Desktop/tablet/mobile overrides remain SiteDocument metadata and renderer
behavior. Existing local responsive and accessibility evidence covers
1440, 1280, 1024, 768, 430, 390, 375 and 360 layouts. The axe run recorded
critical **0**, serious **0**, moderate **20**, minor **0**. Those results are
for local Zylora surfaces, not a real Penpot browser runtime.

## J. Human/AI convergence

The intended convergence remains:

`Human Penpot or external AI → typed Zylora semantic/mutation command →
SiteDocument → validation → publisher`.

The legacy gateway continues to fail closed if `STUDIO_ENGINE=penpot` is
selected before verified runtime, SSO, mapping and source-bridge evidence. In
particular, `source_bridge_ready=false` rejects external deterministic writes
instead of allowing a SiteDocument-only update that would diverge from
Penpot. A Git submodule is now accepted as the source boundary;
`source_copied` is intentionally false.

## K. Plan enforcement and publishing

Penpot cannot change Free/Starter/Growth/Pro entitlements, branding, credits,
page limits, domains or publish authorization. The normal Zylora pipeline
remains:

`Penpot → compiler → SiteDocument → validation → plan/branding checks →
Zylora publisher → Zylora hosting`.

No source/ZIP export was introduced.

## L. Golden websites and round-trip evidence

Added a catalog for ten canonical fixture shapes:

`restaurant`, `clinic`, `school`, `gym`, `salon`, `agency`, `consultant`,
`portfolio`, `coaching-centre`, and `local-service-business`.

Added `semantic_snapshot()` / `compare_semantics()` helpers that compare
component types, IDs, actions, bindings, pages, SEO and tokens while ignoring
visual geometry. Local tests verify visual-only changes pass and semantic
metadata loss fails. The fixtures are contract evidence only; real Penpot
runtime execution is **BLOCKED_BY_EXTERNAL_ENVIRONMENT**. The legacy migration
projection now carries every page in a site, records the compiled revision and
compile timestamp in the tenant-scoped mapping, and keeps the rollback
snapshot before a mapping can be marked ready.

## M. Security

The local adversarial/gateway/OAuth suite remains green. Covered categories
include tenant isolation, stale revisions, scopes, allowlists, idempotency,
unsafe URLs, script injection, invalid node IDs, parent cycles and publish
authorization. New semantic validation rejects unknown schema/component types,
unsafe links and executable values. Provider secrets are not included in
pluginData, SiteDocument metadata, or plugin source.

## N. Performance

Available performance evidence is for the legacy Studio only. Penpot-backed
load/edit/save/compile/preview/publish measurements are **NOT TESTED**. No
legacy numbers are presented as Penpot numbers.

## O. Tests and builds

Latest focused semantic/compiler/migration/mapping suite: **24 passed, 0
failed, 0 skipped, 7.40s**. The complete gateway/security/renderer coverage
is included in the full repository run below.

Final full-suite rerun after the last source change: **527 passed, 0 failed,
0 skipped, 59 warnings, 710.75s (0:11:50)**.

Build checks rerun after the semantic changes:

- Python `compileall`: PASS.
- Studio TypeScript (`npx.cmd tsc --noEmit -p studio/tsconfig.json`): PASS.
- Studio production build (`npm.cmd run build:studio`): PASS.
- Plugin JavaScript syntax: PASS.
- Registry/schema/fixture JSON parsing: PASS.
- Legacy Studio Chromium/Firefox/WebKit matrix: PASS.
- Dashboard Chromium/Firefox/WebKit matrix: PASS.
- `pytest -q tests/test_e2e.py`: **1 passed in 94.96s**.
- Studio gap-closure Chromium run: **12 actionable checks passed**, with the
  temporary smart-guide assertion **UNVERIFIED**; no browser errors.
- Real Penpot browser/file lifecycle matrix: **NOT TESTED** because the
  runtime gate is blocked.
- `git diff --check`: PASS (line-ending normalization warnings only).

## P. Final engine and rollback

- Legacy Studio: **ACTIVE**.
- Penpot engine: **NOT ENABLED**.
- `STUDIO_ENGINE`: `legacy`.
- Rollback: preserved by existing SiteDocument snapshots and migration
  checkpoints.

The source bridge gate is also **NOT ENABLED** (`source_bridge_ready=false`).

The final engine cannot become `penpot` until real runtime, OIDC SSO,
tenant/file authorization, plugin metadata persistence, compiler, preview,
publish, external-AI continuity and browser evidence pass together.

## Q. Remaining blockers

1. Linux-capable Docker/staging host for the pinned Penpot distribution.
2. Real Penpot services, file lifecycle and plugin execution.
3. Zylora↔Penpot OIDC SSO and tenant isolation exercise.
4. Real Penpot semantic round-trip and publish flow.
5. Penpot-backed browser and performance matrix.
6. Live provider tests requiring Vercel, Telnyx, Cloudflare, Razorpay, Google
   OAuth and PostgreSQL environments.

**Recommendation:** **READY AFTER SPECIFIC EXTERNAL FIXES**. The semantic
alignment and local safeguards are implemented, but the real Penpot cutover
is not certified on this host.
