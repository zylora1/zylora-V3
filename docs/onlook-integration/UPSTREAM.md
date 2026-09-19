# Onlook OSS Integration

**Upstream URL**: https://github.com/onlook-dev/onlook
**Exact Imported SHA**: `423e2e924366419e418ee049093872d535eea41a`
**Branch**: `main`
**Date Imported**: 2026-09-18
**License**: Apache-2.0
**License text**: `legal/Apache-2.0-Onlook.txt`

## Files/Packages Vendored
Only a narrow, auditable source surface is vendored under `vendor/onlook/`:
- `packages/parser/src` (JSX/TSX parser and AST helpers)
- `packages/models/src/editor`, `element`, `project`, and `code` (editor and source-oriented models)

Zylora's native Studio canvas, SiteDocument schema, history, autosave, renderer, publishing, and persistence remain authoritative. The vendored source is a compatibility layer, not a second product runtime.

## Packages Intentionally Excluded
These packages will be ignored or eventually removed as they conflict with Zylora's existing platform systems:
- `apps/backend` (Replaced by Zylora's Python backend)
- `apps/admin` (Replaced by Zylora's Super Admin)
- `packages/db` (Replaced by Zylora's PostgreSQL/SQLAlchemy layer)
- `packages/stripe` (Replaced by Zylora's Billing engine)
- `packages/email` (Replaced by Zylora's Mail Campaigns/Telnyx)
- `packages/growth` (Onlook specific)
- `packages/github` (Zylora publishing and domains remain authoritative)
- `packages/ai/src/tools` (shell/file mutation requires a separate sandbox review)
- `apps/web/client/src/components/store/editor` (assumes Onlook's project/branch runtime)

## Patches Applied by Zylora

Zylora does not modify the vendored Onlook files in this import. Zylora-specific behavior is implemented behind adapters in the existing Studio and AI layers. The AI sidebar adopts the OSS interaction pattern of selected-element context, project context, structured apply, and rollback, but uses Zylora's provider registry, credit accounting, permissions, and `/api/sites/{site_id}/ai-edit` endpoint.

Features advertised by hosted Onlook but not evidenced in the imported OSS source are not claimed by Zylora. Account hosting, billing, deployment, private endpoints, and Onlook branding are excluded.
