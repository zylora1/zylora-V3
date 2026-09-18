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
- [x] Smart-guide source/target matrix: all 9 horizontal and all 9 vertical edge/center relationships, with geometry/guide agreement asserted in the browser harness.
- [x] Equal-spacing candidates for horizontal and vertical intervals, including mixed object sizes; rotated snapping policy is explicitly axis-aligned-bounding-box.
- [x] Nested smart-guide parent-bound calculations are covered by the production solver and transient overlay lifecycle.
- [x] Resize anchor matrix: all 8 handles across 7 rotations and 8 zoom levels; fractional, minimum-size, aspect-lock, and centered-resize cases pass the production math.
- [x] Nested child resize in a translated, 25° rotated parent with a 30° child rotation passes all 8 handles in Chromium, Firefox, and WebKit; worst measured rendered-anchor error is 0.61 CSS px.
- [x] Pointer cancellation cleanup: pointer-cancel, lost pointer capture, window blur, and Escape clear transient drag/resize state.
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
- [x] Engine flag validation accepts `legacy` (rollback), `native` (staging candidate), and the separately gated `penpot` compatibility value; unknown values fail closed.
- [x] Geometry & transform math tests (`test_studio_transform_rebuild.py`): Passed.
- [x] Interaction & UX contract tests (`test_studio_final_interactions.py`, `test_studio_ux_contract.py`): Passed.
- [x] Penpot adapter & compiler tests (`test_penpot_*.py`): Passed.
- [x] Full repository regression rerun on 2026-09-17: **539 passed, 0 failed, 0 skipped, 59 warnings**, 499.43s.
- [x] Focused native Studio/config suite on 2026-09-17: **80 passed, 0 failed, 1 warning**, 25.78s.
- [x] Native Studio browser harness: WebKit 9/9, Chromium 9/9, Firefox 9/9, 0 errors.
- [x] Mobile Studio UX harness: PASS, 0 errors.
- [x] Gap-closure harness: Chromium, Firefox, and WebKit each pass 16/16 checks with 0 browser errors; transient smart-guide visibility, coordinate agreement, cleanup, and resize geometry are verified.
- [x] Native performance profile: corrected preloaded 750/1,000/2,000-node tiers completed with 0 browser errors; one 70 ms undo long task remains documented at 2,000 nodes.
- [ ] Real upstream Penpot runtime/browser matrix: not run on this host.

The full suite and browser results above are local evidence for the native
Studio path. They are not a production certification claim: the upstream
Penpot runtime, PostgreSQL-specific verification, live provider integrations,
and deployment gates remain outside this host's verified evidence.
