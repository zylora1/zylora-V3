# Exact-source implementation checkpoint — 2026-08-29

## Verified source candidates

- **#11 Bruno Simon — Folio 2025**: official repository `brunosimon/folio-2025`, MIT, pinned to commit `41046b57eeed8d156d9c3fd7fa259900baef7816`.
- **#52 Mr. Panda — Psychologically Safe Portfolio**: official repository `andrewwoan/mr-pandas-psychologically-safe-portfolio`, MIT, pinned to commit `b99508de7a34d06666f5582e094a6557335e3577`.
- Mr. Panda binary transport was independently probed with `public/models/Panda.glb`; GitHub returned base64 content for blob `32158c591a187bbf93fe401274ac1a31f137f902`, confirming that binary repository files can be transferred losslessly through the connector.

## Current catalogue

- **Public templates: 0**
- `template_projects/` intentionally remains empty.
- No candidate becomes public from metadata or license verification alone.

## Publication gate now enforced in code

`app/templates.py` now fails closed. A catalogue project is loaded only when all of the following are true:

1. publication state explicitly says `public` and `render_gate=passed`;
2. source fidelity is `exact_source`;
3. source repository is a GitHub repository and is pinned to a 40-character commit SHA;
4. the complete upstream source directory exists locally;
5. the upstream license notice exists locally;
6. local render HTML and CSS exist;
7. a local `verification/render-gate.json` exists and matches the pinned commit;
8. the gate records `source_tree_local`, `binary_assets_local`, `render_smoke_passed`, and `content_adapter_passed` as true;
9. the SHA-256 of the verified rendered home file matches the gate record.

This prevents an incomplete import, a source-only import, or a stale metadata file from silently appearing in the public template catalogue.

## Remaining blocker

The execution sandbox cannot retrieve the GitHub repository ZIP through the normal archive/codeload redirect path. The GitHub connector can fetch individual binary files losslessly, but the large KTX2/GLB/font asset trees are not yet materialized as complete local repositories. Therefore neither candidate passes the local-source/render gate yet.

## Fidelity rule

For a verified open-source candidate, preserve the licensed source layout, geometry, spacing, typography treatment, responsive composition, hover states, transitions, animation timing, scroll choreography, and interaction behavior. Only approved content/branding and color substitutions may change. Do not replace missing source assets with generated or approximate assets merely to make the template pass.

## QA after continuation

- Focused exact-source/catalogue gate tests: **5 passed**.
- Full collected test inventory: **101 tests**.
- All 101 tests pass across four isolated regression groups: **20 + 25 + 20 + 36**.
- Combined Playwright browser workflow passes after correcting a pre-existing mobile hero overflow and removing two stale `Cinder` catalogue assertions from the browser QA script.
- A single monolithic `pytest -q` invocation still exceeds the execution timeout when it reaches the nested browser subprocess after the first 27 tests. The same browser test and every other test pass in the grouped runs above; this is recorded as a test-harness ordering/timeout issue, not hidden as a green monolithic run.

## UI correction found during regression

At a 390 px viewport the draggable hero headline's flex-item shrink-to-fit behavior could widen the document to 459 px. The mobile rule now forces `.hero-drag-stage` and `.hero-drag-item` to the available width; the browser E2E now confirms no horizontal overflow after opening mobile navigation.
