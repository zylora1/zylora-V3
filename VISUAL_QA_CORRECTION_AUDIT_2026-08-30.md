# Zylora — 40 Licensed Templates Visual QA Correction Audit

Date: 2026-08-30

## Scope
Correction pass against the user-reported rendered-template issues after the 40-template catalogue replacement. Changes were applied to the production template render/CSS/assets, not only to screenshot files.

## Corrected user-reported issues

### Contrast / accent hierarchy
- **Arcade** — hero title now uses a dark high-contrast foreground against the pale architecture panel.
- **Klar** — secondary mission copy on the black hero was lightened for legibility.
- **SaaS Candy** — primary CTA and the former orange analytics card now use the same blue accent family; yellow remains the secondary highlight. The two large analytics cards now terminate on the same baseline.
- **Skilline** — hero action hierarchy now uses the orange brand accent for the headline/action/watch treatment instead of competing orange + pink hero controls.
- **Typefolio** — “crafting digital” no longer resembles a broken inline link; it is rendered as normal emphasized body copy.

### Spacing / layout
- **AI Starter Kit** — increased hero copy/CTA vertical separation.
- **Prime Dental** — appointment strip receives larger section padding and consistent field/button height.
- **Minimal** — restored the original local stylesheet chain, rebuilt the desktop nav hierarchy, and added deterministic reveal fallbacks so the page cannot remain in its unloaded GSAP state.
- **Crypgo** — added safe hero top spacing.
- **Jessica** — removed the raw “svg icons” placeholder and normalized icon/name-block spacing; Bootstrap is localized.
- **Tailone** — removed debug/preloader artifacts and normalized hero top spacing; the unresolved typed token was replaced with “Online Marketing”.
- **Furnish** — localized Bootstrap, improved nav spacing/line-height, and removed the stacked template watermark label above the brand mark.

### Alignment
- **Eduleb** — active-student badge is positioned cleanly within the hero-image composition. The redundant secondary Contact CTA was removed so Get Started no longer clips at 1440px.
- **SaaS Candy** — analytics cards now share a bottom baseline.
- **Studiova** — menu/toggle control is anchored within a coherent rounded top bar instead of floating without an alignment reference.

### Development/build text leakage and broken source states
- Removed visible section/build markers from all affected normalized renders, including the user-reported Arcade, Eduleb, Landwind, Meyawo, Luther, Prime Dental, SaaS Candy, Salone, Skilline, and Tailone cases.
- A repository-wide malformed-comment scan also found and removed root-level build markers from NexusAI, LearnHub, Monica, Lounge, Studiova, Olivia, Nexora, and Sarab.
- Hardened `scripts/replace_catalogue_with_licensed_archives.py` so HTML comments and malformed root-level build markers are stripped during future catalogue ingestion.
- **Archi** — removed the reveal state that clipped “MODERN DESIGNS”.
- **Minimal** — fixed the raw expanded-list appearance and no-JS reveal state.
- **Next.js Tailwind Portfolio** — replaced the stray “require offer” placeholder with “Request a quote”.

## Verification
- Active template projects: **40**
- Catalogue preview PNGs: **40**
- Suspicious visible root build-marker text nodes after cleanup: **0**
- `template_ingestion_batch_qa.py`: **PASS (40/40)**
- Reference/static/policy regression suite: **24 passed**
- Editor/media/export/import regression suite: **22 passed**
- Export source QA: **7 checks, 0 errors; 11 generated JS/JSX/MJS files transpiled**
- Corrected affected homepages rendered at **1440×900** for visual inspection.

## Preview update
The 20 user-reported affected templates now use the corrected 1440×900 renders as their catalogue preview images.
