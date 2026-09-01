# Zylora 3,000+ Reference Template Factory — Continuation Checkpoint

Date: 2026-08-29

## Direction implemented

The catalogue pipeline no longer requires a GitHub repository before a website can become a Zylora reference.

Two publication modes now exist:

1. **Exact source** — only for source trees that Zylora may legally redistribute under the applicable license. These retain the commit-pinned exact-source gate.
2. **Reference reconstruction** — for ordinary third-party websites. The reference controls the composition, spacing, typographic role, imagery geometry, scrolling, hover archetypes, motion pacing and responsive behavior, while the implementation is independently authored and protected brand/source/media assets are not reused.

Color changes are optional. The reconstruction should not redesign the reference merely to look different.

## High-throughput queue

`data/reference-reconstruction-queue.json` now contains **750 normalized seed references** supplied in the user reference list.

- duplicate reference URLs removed
- tracking parameters removed from live URLs
- each item marked `third_party_reference`
- each item marked `independent_reconstruction`
- target public catalogue: **3,000**
- discovery target: **3,600** to provide rejection/quality headroom

## Discovery

`data/reference-discovery-sources.json` configures discovery across:

- Lapa Ninja
- Awwwards
- Land-book
- Godly
- One Page Love
- SiteInspire

`scripts/reference_discovery.py` performs concurrent reference-page discovery. It discovers reference pages only; it does not mirror proprietary CSS/JS/media for reuse.

Default discovery concurrency is 24 workers, capped at 48.

## Parallel factory

`scripts/reference_factory.py` provides an atomic queue workflow for multiple workers:

```bash
python scripts/reference_factory.py summary
python scripts/reference_factory.py claim --worker worker-01 --count 10 --scaffold
```

A scaffold is created under `template_workbench/`, not the public catalogue. This prevents incomplete work from leaking into `/api/templates`.

Each task packet explicitly requires:

- reference-faithful section order and visual hierarchy
- equivalent grid/spacing/typography roles
- equivalent hover, scroll and motion archetypes
- equivalent responsive strategy at 1440/1280/1024/768/430/390/375/360
- local properly licensed assets
- no production hotlinks
- independent source code for third-party references
- minimum visual fidelity score: 8.5/10

## Publication gate

`app/templates.py` now dispatches publication verification by fidelity mode.

A third-party reference reconstruction is rejected unless all of the following are true:

- publication state explicitly `public`
- render gate explicitly `passed`
- reference URL is recorded
- rights mode is valid
- proprietary source reuse is explicitly false
- protected brand-asset reuse is explicitly false
- local asset manifest exists
- asset manifest confirms all assets are local
- asset manifest confirms commercial reuse is verified
- rendered HTML/CSS contains no remote production media hotlinks
- rights check passed
- independent-source check passed
- asset-license check passed
- render smoke check passed
- responsive check passed
- motion review passed
- content adapter passed
- visual fidelity score >= 8.5
- rendered home SHA-256 matches the verification evidence

This keeps the catalogue fail-closed even while thousands of references are being processed concurrently.

## Verification performed

- `tests/test_reference_extension.py`: 6 passed
- regression group 1: 40 passed
- regression group 2: 40 passed
- regression group 3: 23 passed
- browser E2E: 1 passed
- total isolated test executions: **104 passed**
- premium template QA: PASS
- reference asset policy QA: PASS
- control inventory QA: 152/152 buttons, 64/64 links, 0 errors

Public catalogue remains **0** at this checkpoint because the factory infrastructure and seed queue are complete, but no newly reconstructed project has yet produced the complete QA evidence required by the publication gate.

## Automated reference capture

`scripts/reference_capture.py <reference-id>` captures private analysis evidence at desktop, tablet and mobile widths:

- full-page screenshots
- section geometry
- heading geometry
- computed typography
- alignment/display/positioning data
- document dimensions
- interactive-element inventory
- media placement geometry

The evidence is written only to `template_workbench/<slug>/reference/` with an explicit non-redistribution notice. It is never treated as a production asset source.
