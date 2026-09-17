# Upstream Provenance & Tracking: Penpot Editor Engine

## 1. Upstream Source Information
- **Repository**: `https://github.com/penpot/penpot`
- **Tracked Branch / Tag**: `2.17.0` (develop baseline)
- **Exact Commit SHA**: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- **Initial Verification Date**: `2026-09-15`
- **Submodule / Reference Path**: `vendor/penpot`
- **Upstream License**: Mozilla Public License Version 2.0 (MPL-2.0)

---

## 2. Architectural Boundary & Module Map

Zylora Studio is a native website builder editor. To achieve professional graphics-editor capabilities without shipping an external SaaS application, selected algorithmic subsystems from Penpot were adapted directly into Zylora Studio's TypeScript engine under `studio/editor-core/` and `studio/common/`.

### 2.1 Imported & Adapted Modules (Editor Core)

| Penpot Upstream Path | Zylora Studio Implementation | Purpose & Responsibility |
| :--- | :--- | :--- |
| `common/src/app/common/geom/matrix.cljc` | `studio/editor-core/matrix.ts` | 2D affine transformation matrices (multiply, invert, rotate, scale, translate, decompose). |
| `common/src/app/common/geom/rect.cljc`<br/>`common/src/app/common/geom/point.cljc`<br/>`common/src/app/common/geom/proportions.cljc` | `studio/editor-core/geometry.ts` | Rectangle operations, rotated bounding boxes, aspect-ratio constraint locking, distance calculation, point-in-polygon hit testing. |
| `common/src/app/common/geom/snap.cljc` | `studio/editor-core/snapping.ts` | Smart magnetic snapping, guide intersections, edge-to-edge alignment, center alignment, and equal-gap distribution detection. |
| `common/src/app/common/logic/flex_layout/`<br/>`common/src/app/common/logic/grid_layout/` | `studio/editor-core/layout.ts` | Freeform vs Flex container layout calculation, direction, gap, wrapping, alignment, and CSS grid track distribution. |
| `common/src/app/common/logic/undo_stack.cljc` | `studio/editor-core/history.ts` | Atomic mutation transactions, grouped action commits, and selection-aware undo/redo stack. |
| `common/src/app/common/types/` | `studio/common/types.ts` | Shared geometric types (Point, Rect, Matrix2D, SnapGuide, LayoutMode). |

### 2.2 Excluded Modules (Not Imported into Zylora Product)

The following upstream Penpot modules are explicitly **omitted** to ensure Zylora remains a unified single-product SaaS application:
- `backend/`: Clojure/JVM backend, Ring/Compojure routing, and PostgreSQL storage (Zylora uses native FastAPI + SQLAlchemy + SQLite/Postgres).
- `frontend/src/app/main/ui/workspace/main_menu/`: Penpot branding, dashboard links, onboarding, and cloud accounts (replaced with Zylora TopBar).
- `frontend/src/app/main/ui/dashboard/`: Penpot project and team dashboards (Zylora Dashboard owns website and team management).
- `plugins/`: Penpot plugin runtime and iframe sandboxes (Zylora features are native first-party modules).
- `mcp/`: Penpot plugin-based MCP bridge (Zylora AI communicates natively through the Zylora Studio Command API).
- `exporter/` & `media-processor/`: External export services (Zylora uses native `site-compiler` and `app/media.py`).

---

## 3. Product & Licensing Invariants

1. **Zero Customer-Visible Penpot Branding**:
   All user-facing routes, titles, tooltips, dialogs, error messages, and loading states display "Zylora" or "Zylora Studio".
2. **Authoritative Zylora Systems**:
   Authentication, billing, team roles, CRM, lead capture, appointment booking, CMS collections, publishing, custom domains, and Cloudflare SSL remain strictly owned by Zylora backend services.
3. **No Duplicate Intermediate Model**:
   State flows strictly between the Zylora Studio Store (`studio/store.ts`) and canonical `SiteDocument` (schema v5).
4. **MPL-2.0 License Notices Preserved**:
   All original copyright and MPL-2.0 header notices are preserved in Penpot-derived source files in accordance with Section 3.1 of MPL-2.0.

---

## 4. Rebase & Upstream Update Guide

When updating or cherry-picking enhancements from upstream Penpot in the future:
1. Update git submodule in `vendor/penpot`:
   ```bash
   git -C vendor/penpot fetch origin
   git -C vendor/penpot checkout <new-tag-or-sha>
   ```
2. Inspect the diff of modified modules:
   ```bash
   git -C vendor/penpot diff <old-sha> <new-sha> -- common/src/app/common/geom/
   ```
3. Port any upstream mathematical fixes or layout enhancements into `studio/editor-core/`.
4. Run full regression suite (`pytest -q`) and verify all 531 tests pass with zero regressions.
5. Update this file (`studio/UPSTREAM.md`) and `legal/THIRD_PARTY_NOTICES.md` with the new commit SHA and date.
