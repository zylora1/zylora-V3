# Zylora Studio Document Migration & Versioning Specification

## 1. Migration Goals & Non-Negotiables
1. **Zero Data Loss**: No page, node, text, image, link, form binding, booking calendar, or responsive override may be silently discarded.
2. **Deterministic & Idempotent**: Running a migration multiple times produces identical output.
3. **Reversibility & Rollback**: Migrated documents retain legacy fallback fields (`style.css` alongside `geometry`), ensuring an instant rollback path without database downtime.

---

## 2. Schema Evolution History

| Schema Version | Engine Baseline | Geometry Storage | Responsive Model | Key Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| **v1 - v3** | Legacy DOM Editor | `style.css` (`left`, `top`, `width`) | Single breakpoint | Absolute DOM positioning, inline contenteditable text. |
| **v4** | Studio v4 Rebuild | `style.css` + parent relative | Basic media overrides | Crop metadata (`NodeCrop`), section reordering. |
| **v5 (Current)** | Penpot-Derived Engine Core | `NodeGeometry` + Affine Matrix | Cascading overrides | Freeform/Flex layout modes, magnetic snapping, smart spacing, Command API. |

---

## 3. Transformation Rules (v4 -> v5)

### 3.1 Geometry Normalization
- **Rule**: If `node.geometry` is `null` or missing, execute `_geometry_from_css(node)`.
- **Parsing**:
  - `x`: parsed from `css.left` (e.g. `"120px"` -> `120.0`).
  - `y`: parsed from `css.top` (e.g. `"80px"` -> `80.0`).
  - `width`: parsed from `css.width` or bounding box (minimum `1.0`).
  - `height`: parsed from `css.height` or bounding box (minimum `1.0`).
  - `rotation`: parsed from `css.transform` (e.g. `rotate(45deg)` -> `45.0`).
  - `mode`: defaults to `"freeform"`, or `"flow"` if inside a flex container.

### 3.2 Website Semantics Preservation
- Component types (`lead_form`, `appointment_booking`, `ai_sales_assistant`, `navigation`, `button`) are validated against `app/penpot_semantics.py` registry.
- Form field definitions, calendar service IDs, and CMS collection keys are preserved intact in `node.bindings`.
- Click actions (`NodeAction`) are retained with stable page IDs and section IDs.

### 3.3 Diagnostic Logging & Warnings
If an unmapped property is encountered:
1. The property is preserved in `node.metadata.unmappedLegacyProperties`.
2. A non-fatal warning is logged into `SiteDocument.migrationDiagnostics`.
3. The editor renders a safe visual placeholder rather than dropping the node.

---

## 4. Rollback & Downgrade Safety
- When saving documents in Engine v2, the editor synchronizes both `node.geometry` and `node.style.css`.
- If an environment reverts `settings.studio_engine` to `legacy`, legacy readers inspect `node.style.css` directly and continue rendering without error.
