# Zylora — Publish-Time Plan Editing Permissions Audit

Date: 2026-08-29

## Implemented behavior

### Draft/editor
- Signup no longer routes users to plan selection.
- Google OAuth no longer routes users to plan selection.
- Dashboard, AI creation, and editor are usable while `plan_selected = 0`.
- The editor contains no subscription-plan selection, subscription-plan checkout, tier-lock, or choose-plan redirect logic. Existing source-export purchase logic remains independent of subscription-plan editing permissions.
- Text editing, image replacement, text resizing, layout/section repositioning, and image resizing remain available during drafting.

### Publish-time plan selection
- Publish is the entitlement boundary for this feature.
- If the account has no active selected plan, publish returns a plan-selection requirement and the shared publish UI presents Free / Starter / Growth.
- Starter and Growth use the same boolean entitlement: `is_paid = true`.
- Free uses `is_paid = false`.
- PRO/ZPRO is explicitly excluded from self-service publishing and returns the managed RootPro path.
- Paid plan activation remains payment-verified; a client request cannot grant Starter/Growth by naming the tier in the publish request.

### Free publish projection
- Structural changes are removed only from the live publish projection; the draft is not destroyed or downgraded.
- Text and image content operations are preserved.
- Non-structural style edits remain preserved even when they share a style operation with structural properties.
- Structural categories include layout/order/position, text sizing, image sizing, dimensions/spacing, section structural operations, and responsive structural values.
- The resulting Free live document resolves against the immutable original template/base document, thereby restoring original structural defaults.

### Free warning
- If structural changes exist and Free is selected, publish first returns `FREE_STRUCTURAL_RESET_CONFIRMATION_REQUIRED`.
- The UI warns that layout and sizing will reset while text and image edits are safe.
- The user can go back, explicitly publish Free with reset, or choose Starter/Growth to retain structural changes.
- No silent Free reset occurs before confirmation.

### Original structural snapshot
- Migration `017_publish_plan_structural_permissions.sql` adds immutable baseline storage to each site.
- Template/AI sites capture the original rendered/instrumented pages before user edits.
- Imported sites capture normalized imported pages before user edits.
- Snapshot data contains per-editable-node parent/order information, structural inline style values, width/height attributes, template identity/version, and SHA-256 integrity metadata.

## Main implementation files
- `app/publish_permissions.py`
- `app/api.py`
- `app/api_extended.py`
- `app/importer.py`
- `migrations/017_publish_plan_structural_permissions.sql`
- `static/publish-flow.js`
- `static/auth.js`
- `static/dashboard.js`
- `static/editor.js`
- `static/ai-create.js`
- `static/dashboard.html`
- `static/editor.html`
- `tests/test_publish_plan_structural_permissions.py`
- `scripts/browser_e2e.py`

## Verification

### Non-browser automated tests
Split full non-browser regression audit completed with no failures:
- Batch 1: 43 passed
- Batch 2A: 30 passed
- Batch 2B: 41 passed
- Total: **114 passed / 0 failed**

Coverage includes the new publish permissions, API flows, editor/media, universal import, billing/export entitlements, security hardening, marketplace, SEO/GEO, static frontend checks, template contracts, and related release tests.

### Browser E2E
`python scripts/browser_e2e.py`
- **87 checks / 0 errors**
- Verified signup proceeds to dashboard with plan pending.
- Verified AI creation and editor remain available before plan choice.
- Verified plan remains unselected throughout editing.
- Verified publish introduces plan selection.
- Verified Free selection occurs inside the publish flow and completes publishing.
- Existing landing, dashboard, editor, AI, media, chatbot, billing, export, responsive, auth, and integration browser checks remained green.

### Syntax / static validation
- Python compilation passed for all modified Python modules and browser E2E script.
- `node --check` passed for publish-flow, editor, dashboard, auth, and AI-create JavaScript.
- No automatic `/choose-plan` redirects remain outside the standalone choose-plan route/page.

### Database migration verification
- Original repository data/media restored after testing.
- Migration 017 applied successfully to the restored database.
- `sites.template_default_structural_snapshot_json` verified present.
- `sites.template_default_snapshot_created_at` verified present.

## Result
The requested plan-based template editing permissions are implemented with the editor fully plan-agnostic and all structural entitlement/reversion decisions centralized at publish time. Free publishing preserves content while projecting the original structural baseline; Starter/Growth preserve the complete edited draft.
