# Zylora exact-source continuation audit — 2026-08-29

## Outcome

The catalogue remains intentionally at **0 public templates**. This is the correct state: Bruno Simon and Mr. Panda are license-verified and commit-pinned, but their complete repositories and binary asset trees have not yet been materialized locally, so neither can pass the production render gate.

## Implemented in this checkpoint

- Added a fail-closed public-catalogue gate in `app/templates.py`.
- Publication now requires explicit public state, exact-source fidelity, immutable Git commit pin, local upstream source, local license notice, local render/CSS, render-gate evidence, local binary-asset confirmation, render smoke confirmation, content-adapter confirmation, and SHA-256 integrity of the verified rendered home file.
- Added `data/exact-source-candidates.json` for the two current candidates and their exact commit pins/blockers.
- Updated the 118-source registry with current commit-pinned implementation status.
- Removed stale test expectations for deleted catalogue templates.
- Updated browser QA to validate the deliberate zero-template state rather than deleted `Cinder` data.
- Fixed a reproducible 390 px landing-page horizontal overflow in the draggable hero headline.

## Source pins

- Bruno Simon / `brunosimon/folio-2025`: `41046b57eeed8d156d9c3fd7fa259900baef7816` (MIT).
- Mr. Panda / `andrewwoan/mr-pandas-psychologically-safe-portfolio`: `b99508de7a34d06666f5582e094a6557335e3577` (MIT).
- Mr. Panda binary probe: `public/models/Panda.glb`, Git blob `32158c591a187bbf93fe401274ac1a31f137f902`, lossless base64 fetch confirmed.

## QA

- 101 tests collected.
- Grouped regression result: **101/101 passed** (20 + 25 + 20 + 36).
- Combined browser product workflow: **passed**.
- Monolithic `pytest -q`: execution-environment timeout occurs at the nested browser subprocess after 27 tests; the same browser test passes inside the 25-test regression group and standalone.

## Unresolved exact-source blocker

GitHub repository ZIP/codeload archive transfer is rejected by the execution sandbox. The connector supports exact per-file binary base64, but reconstructing multi-megabyte KTX2/GLB/font trees file-by-file has not yet yielded a complete local repository. No hotlinking, generated replacement assets, or approximation was used to bypass this requirement.
