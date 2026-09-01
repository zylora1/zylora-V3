# Zylora Capacity-Driven Reference Batch Policy — 2026-08-29

## Correction
The prior Batch 001 candidate implementations were rejected because they were not visually faithful enough to their reference websites. They have been removed from `template_projects/`, and references `ref-0001` through `ref-0010` have been returned to the queue for a from-scratch rebuild.

## New batch model
- Fixed batches of 10 are removed.
- Batches are capacity-driven.
- Default worker model: 24 workers × 2 fully reconstructed templates = 48 candidates per capacity batch.
- `scripts/reference_factory.py claim --count N` has no arbitrary 10-template ceiling. `--count 0` uses the capacity formula.
- Quality gates still control the number that can be promoted; queue/scaffold count is never reported as completed template count.

## Image policy
Every image placement must use a different real, licensed/free-use image.

Allowed source families include:
- Wikimedia Commons / CC0 / CC BY / compatible commercial licenses
- Openverse results with verified commercial-use-compatible licenses
- Unsplash
- Pexels
- Pixabay
- other explicitly verified permissive/free-commercial-use sources

Rules:
- no AI-generated photography;
- no reuse inside a template;
- no reuse elsewhere in the same batch;
- unique source URL per placement;
- unique binary hash per placement after localization;
- localize production assets where the source license/terms permit it;
- record source and license in `assets-manifest.json`;
- no unverified third-party reference photography/logos in production templates.

`data/batch-policy.json` is the machine-readable policy and `scripts/asset_uniqueness_qa.py` makes duplicate image sources/binaries and missing license records a QA failure.

## Reference fidelity
A candidate must preserve the actual reference's visible:
- section sequence and composition;
- hero geometry and relative heights;
- spacing rhythm;
- typography character and scale hierarchy;
- image placement, aspect ratio and crop philosophy;
- grid behavior;
- hover/scroll/motion language;
- responsive reflow.

It must not replace the reference with a generic template that merely shares its industry or style label.

## Publication
The public catalogue remains fail-closed. A candidate does not become public simply because it was claimed or scaffolded. It must clear the reconstruction publication gate, including the visual fidelity threshold and asset/license checks.

## Verification
Regression suite after this change:
- group 1: 27/27 passed
- group 2: 34/34 passed
- group 3: 45/45 passed
- browser E2E: 1/1 passed
- total: 107/107 passed

A single monolithic pytest invocation timed out in the harness, so verification was repeated in isolated groups plus the browser test rather than being reported as a monolithic green run.
