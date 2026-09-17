# Zylora Studio Release & Production Certification Checklist

## 1. Product Invariants & Branding
- [x] Product name displayed on the production Studio shell is "Zylora" or "Zylora Studio".
- [x] No Penpot bridge/workspace strings remain in the loaded Studio shell or public capability copy.
- [x] No Penpot accounts, logins, iframe or plugin runtime are required by ordinary editing.
- [x] Legal notices preserved in `legal/MPL-2.0.txt`, `legal/THIRD_PARTY_NOTICES.md`, and `studio/UPSTREAM.md`.
- [ ] Full repository branding/legal scan still requires a separate release review for compatibility-only artifacts.

---

## 2. Editor Core Capabilities
- [x] Viewport zoom (25% - 300%) with cursor centering.
- [x] Middle-mouse and Space+drag panning without document mutation.
- [x] Interactive horizontal and vertical rulers with draggable guide creation.
- [x] Live coordinate indicators (`X: ...px`, `Y: ...px`) on active guides.
- [x] 8-handle resize with corner rotation handle and aspect ratio locking.
- [x] Magnetic snapping with alignment lines and equal-spacing indicators.
- [x] True nested layers panel with drag-and-drop reordering, locking, and visibility toggles.
- [x] Multi-selection overlay with aggregate bounds and batch transform support.
- [x] High-density inspector with Transform, Alignment, Layout (Freeform vs Flex), Typography, Fill, Stroke, Corners, and Shadows.

---

## 3. Zylora Website Semantics & Features
- [x] Navbar component with route linking, external links, and mobile menu toggle.
- [x] Button component with link, anchor scroll, booking, and lead submission actions.
- [x] Form component with validation, lead capture, and CRM synchronization.
- [x] Appointment booking component with calendar availability and customer intake.
- [x] CMS collection repeaters and detail page bindings.
- [x] Image frame workflow with fit, crop, replace, and durable asset uploads.
- [x] Responsive breakpoint switcher (Desktop / Tablet / Mobile) with cascading overrides.
- [x] In-editor live preview and standalone preview mode.

---

## 4. Test Suite & Quality Gates
- [x] Geometry & transform math tests (`test_studio_transform_rebuild.py`): Passed.
- [x] Interaction & UX contract tests (`test_studio_final_interactions.py`, `test_studio_ux_contract.py`): Passed.
- [x] Penpot adapter & compiler tests (`test_penpot_*.py`): Passed.
- [ ] Real upstream Penpot runtime/browser matrix: not run on this host.
- [ ] Full regression test suite: rerun after the native canvas change before release sign-off.

The last focused baseline before this change was 37 passed and 1 dependency
warning. That baseline is evidence for the audited contracts only; it is not a
production certification claim.
