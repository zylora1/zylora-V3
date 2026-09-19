# Zylora Current Studio Audit

## Overview
The audit found an active Zylora-owned Studio runtime backed by `SiteDocument` schema version 5, the Vite-built React editor in `studio/`, and the FastAPI editor/publishing routes. The repository also contains historical Penpot-oriented provenance and migration notes, but the browser mounts Zylora's native canvas rather than a Penpot workspace or iframe. This migration replaces the active provenance boundary with a pinned Onlook OSS compatibility layer while retaining legacy readers and published-site safety.

## Historical Penpot References
The former audit text overstated an active Penpot runtime. The current entrypoint imports `studio_document`, `studio_renderer`, and the native editor API; no Penpot workspace global or active iframe mount is part of the normal Studio path. Historical Penpot-derived geometry references and legal notices remain traceability records and should only be removed after a legal/source review of the adapted files.

## Proprietary Zylora Functionality (To Be Preserved)
- **Authentication & RBAC**: Handled by FastAPI middlewares, OAuth integrations, and standard tokens. Zylora's user and tenant definitions must remain the source of truth.
- **Project / Site Storage**: Core entities (Projects/Sites) stored in PostgreSQL (`zylora-db`).
- **SiteDocument Structures**: `SiteDocument` in `app/studio_document.py` is currently Zylora's canonical layout structure for published sites. We must *not* delete legacy data. A migration pathway will convert this to Onlook's React/Code-first paradigm if needed.
- **Publishing & Domains**: Core publishing mechanics (`app/public_seo.py`, Custom Domains) that render static sites or serve the live code.
- **Billing & CRM**: Zylora Stripe integrations and CRM tools.
- **Zylora AI Sidebar / Core AI**: `app/ai_service.py`, `app/agent_gateway.py` (minus penpot specific tools). The new AI sidebar will expand on this architecture, moving to a multi-model provider approach.

## Dependencies on Penpot Code
The active Studio does not require a Penpot service to boot. Visual layout, selection, layers, rendering, history, and persistence are implemented in Zylora's `studio/` and `app/` modules. Any remaining Penpot vendor or adapter files are candidates for historical-reader retention or deletion only after repository-wide verification.

## Data Structures Currently Persisted
- `SiteDocument`: canonical JSON tree of pages, nodes, components, assets, responsive overrides, tokens, revisions, and migration diagnostics.
- `draft_structure_json`: legacy editor/import representation retained for recovery and compatibility.
- `editor_history`, revisions, assets, published versions, and site metadata: authoritative Zylora persistence.
- Any old Penpot identifiers, if present in deployed databases, must be treated as historical migration metadata and never used as the active editor authority.

## Tests Defining Important Behavior
- Existing tests in `tests/` directory validate `SiteDocument` integrity, publishing logic, API routes, and agent integrations. These must pass following the migration.

## Migration Path Required
Public/published sites depend on Zylora's renderer and must not be silently rewritten. The rollout path is: legacy `draft_structure_json` or existing `SiteDocument` -> validated Zylora Studio document -> native visual editing -> Zylora publishing. Onlook parser/model source is available for future source-code import and mapping extensions; it is not used to replace the persisted SiteDocument contract in this rollout.

## Onlook target architecture
Onlook OSS is pinned in `docs/onlook-integration/onlook-source-inventory.json` and partially vendored under `vendor/onlook/`. Zylora-specific behavior remains behind auth, project, asset, AI, persistence, publishing, analytics, sandbox, and permissions adapters. The AI sidebar uses selected-element and project context plus structured apply/rollback, while model selection remains in the server-side vendor-neutral Zylora registry.
