# Zylora — 21 Template Tightening Report

Date: 2026-08-28
Scope: template-catalogue refinement only; no whole-product production audit.

## Corrections completed

### 1. Headline clipping / first-frame fit
The reported headline issues were checked against the actual 1440×900 template render, not only the contact-sheet export.

- **#01 Orbit Craft** — the template headline itself fit after resizing, but the previous hero crop contained partial reference text ("...sterpieces"), which made the card look clipped. The hero was recropped to a clean real team photograph with the source UI/headline excluded. Hero headline bottom: **638 px** in a 900 px frame.
- **#04 Cutline Social** — actual hero headline extended below the first frame. Rebuilt as a true two-column hero and shortened to the deliberately punchy line **"Sharp cuts. Better weeks."** Hero headline bottom: **635 px**.
- **#18 Immersive Stack** — actual display headline extended below the first frame. Re-authored as a two-part statement, **"Engineer the feeling. / Not just the feature."**, with a split-grid hero. Hero headline bottom: **727 px**.

A catalogue-wide first-frame check then caught additional risk in #02, #07, #19 and #20. Those were tightened as well, so no hero headline is intentionally cut by the 1440×900 review frame.

### 2. #08 Oblique House contrast
The previous low-contrast dark UI/banner crop was removed. The hero now uses a brighter real presenter crop on an off-white media mat while preserving the black editorial identity.

Measured small-text contrast on the hero:
- supporting body copy `#e4ded3` on `#0b0b0a`: **14.71:1**
- vertical rail copy `#f0ebe1` on `#0b0b0a`: **16.57:1**

Both are comfortably above WCAG AA requirements for normal text.

### 3. Structural similarity corrections
The close pairs were not consolidated because each still maps to a distinct supplied reference. Instead, the layouts were separated structurally.

- **#05 Rank & Form** — now a search-console / intent-query hero with a vertical pill image and search-result logic.
- **#12 Civic Rise** — now an orange development-board + full-height architecture split with delivery facts and status language.
- **#11 Grounded Form** remains a large architectural editorial statement, so #11/#12 no longer share the same text-first composition.
- **#16 Launch Desk** — now a light operational hero with a tilted live request queue/dashboard.
- **#17 Newmark Bureau** remains a dark strategic serif composition with a high-contrast circular action device.

This makes #05/#12, #11/#12 and #16/#17 materially different in geometry, hierarchy, image placement, component grammar and content rhythm rather than only color/typeface.

### 4. Copy-density and line-length system
Line-length variation is now intentional and encoded per template in `metadata.json` with:
- `copy_profile`
- `copy_rule`

Examples:
- #04 Cutline Social — `punchy-local`
- #07 Grid Foundry — `poster-punchy`
- #18 Immersive Stack — `punchy-technical`
- #06 Depth Studio — `editorial-studio`
- #11 Grounded Form — `architectural-editorial`
- #20 Harvest House — `hospitality-warm`
- #12 Civic Rise / #16 Launch Desk — operational profiles with short outcome headlines and concrete status language

The catalogue therefore does **not** force every industry into the same headline length; the difference is tied to the intended brand voice and content model.

## Focused QA after changes

- Public templates: **21**
- Desktop horizontal-overflow failures: **0**
- Mobile horizontal-overflow failures: **0**
- Broken rendered images: **0**
- External/hotlinked rendered images: **0**
- Exact duplicate hero-image hashes: **0**
- AI-generated photography: **0**
- #08 measured supporting-text contrast: **14.71:1**
- #08 measured rail-text contrast: **16.57:1**

Machine-readable evidence: `TIGHTENED_QA.json` in the rendered deliverable.
