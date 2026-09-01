# Zylora — Reference Reconstruction Batch 001 Audit

Date: 2026-08-29

## Checkpoint scope

This checkpoint advances the 3,000+ reference-template factory from queue/discovery infrastructure into the first ten independently authored reconstruction candidates.

- Public-template target: **3,000**
- Discovery headroom target: **3,600**
- Normalized seed references currently present: **750**
- Batch 001 candidate implementations: **10**
- Remaining queued references: **740**
- Public templates at this checkpoint: **0**

Public count remains zero intentionally. A candidate project is not a public template until the publication gate passes all required rights, asset, render, responsive, motion/reference-comparison and visual-fidelity requirements.

## Batch 001 projects

| Reference | Candidate slug | Current state |
|---|---|---|
| A Love Story | `red-thread-studio` | private workbench / blocked |
| Josh Taylor | `northline-design` | private workbench / blocked |
| Sutéra | `morrow-interface` | private workbench / blocked |
| Sharplink | `etherline-treasury` | private workbench / blocked |
| Magnet Lover | `backstage-keepsakes` | private workbench / blocked |
| Infinite Machine | `formline-mobility` | private workbench / blocked |
| Bedouin's Daughter | `nocturne-beauty` | private workbench / blocked |
| VoidZero | `zerogate-tools` | private workbench / blocked |
| Cleo | `mintly-money` | private workbench / blocked |
| Nudge | `habit-loop-care` | private workbench / blocked |

Each project has its own `render/home.html`, `app/globals.css`, `metadata.json`, `assets-manifest.json` and `verification/render-gate.json`. The ten projects have ten distinct `composition_signature` values.

## Rights and implementation mode

All ten projects are currently classified as `third_party_reference` + `reference_reconstruction` candidates. They explicitly record:

- `proprietary_source_reused: false`
- `protected_brand_assets_reused: false`
- independently authored Zylora implementation
- no third-party production-media hotlinks

Nine references are image-led and currently contain a selected real-photo candidate under the Pexels License, but the files themselves are **not** embedded or hotlinked. Those nine projects remain blocked until the chosen media is actually localized and retained with license evidence. `red-thread-studio` is typography-led and does not currently require a photographic asset.

## Zylora content adaptation

All ten candidates now expose the core Zylora editable content tokens in the rendered page:

- `{{BUSINESS_NAME}}`
- `{{TAGLINE}}`
- `{{DESCRIPTION}}`

The candidate QA renders these with each project's demo metadata before browser validation. Demo `@example.com` addresses and fake rupee balances were removed after the existing Zylora content-policy test correctly rejected them.

## Shared effects integration fixes

Catalogue project rendering now injects the shared files:

- `static/zylora-template-effects.css`
- `static/zylora-template-effects.js`

This means `data-zy-reveal`, `data-zy-stagger`, `data-zy-marquee`, and `data-zy-parallax` behavior is not implemented through per-template animation engines.

The reveal runtime was also hardened. `IntersectionObserver` could leave an off-screen `clip-path` reveal permanently invisible because the fully clipped target could be treated as non-intersecting. Reveal activation now uses lightweight geometry checks scheduled on scroll/resize, while retaining the same shared runtime and reduced-motion behavior.

## Responsive and browser layout QA

`scripts/qa_reference_batch.py` validates every Batch 001 candidate at:

- 1440 px
- 1280 px
- 1024 px
- 768 px
- 430 px
- 390 px
- 375 px
- 360 px

Current result: **10 / 10 passed all eight widths**.

The browser check requires:

- zero horizontal document overflow
- exactly one H1
- visible `main` and footer
- no page-level JavaScript errors
- shared reveal/stagger runtime activation at desktop width
- private/fail-closed candidate state
- no remote production-media/CSS hotlinks

The run produced **30 fresh evidence screenshots** (desktop/tablet/mobile: 1440, 768 and 390 px for each candidate) under `template_workbench/batch-001-layout-qa/`. Screenshots are captured with reduced motion after runtime validation so the evidence does not freeze content halfway through a reveal transition.

Responsive defects caught and fixed during this audit included:

1. Red Thread Studio mobile overflow from an oversized editable hero wordmark.
2. Mintly Money 360 px overflow caused by grid intrinsic sizing and large display text.
3. Nocturne Beauty mobile footer overflow after replacing the static short mark with an editable business name.
4. ZeroGate Tools desktop hero copy being visually clipped after becoming editable.
5. Literal `\\n` sequences accidentally inserted into nine candidate CSS files, which prevented their intended secondary typography rules from being applied by the browser.

## Regression tests

The repository test suite was run in isolated groups to avoid the previously observed long monolithic-run/subprocess interaction.

- Non-browser group A: **56 passed**
- Non-browser group B: **52 passed**
- Unique non-browser total: **108 passed**
- Existing browser product workflow (`tests/test_e2e.py`): **1 passed**
- Total unique repository tests exercised: **109 passed**

A final targeted post-layout check of static/reference tests also passed **20 / 20** (these overlap with the 109 above and are not added to the unique total).

`node --check static/zylora-template-effects.js` also passes.

## Remaining blockers — intentionally fail closed

This checkpoint does **not** claim that the ten templates are ready for public sale. The environment blocks direct third-party reference capture/localization in the local browser, including an observed `ERR_BLOCKED_BY_ADMINISTRATOR` when attempting direct reference-site capture. Network restrictions also prevented localizing the selected Pexels binaries in the repository.

Therefore:

- nine photographic candidates still have `all_assets_local: false`
- their real-photo selections remain `localization: PENDING`
- final reference screenshot comparison is still required for all ten
- reference-specific motion comparison is still required for all ten
- `visual_fidelity_score` remains unset rather than fabricated
- every Batch 001 `render-gate.json` remains `status: blocked`
- every metadata file remains `hidden: true` and `publication.state: workbench`
- the public catalogue remains empty

This is deliberate: queue entries and private candidates are not counted as completed public templates.
