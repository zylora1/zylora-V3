# Zylora — Licensed 40 Template Replacement Audit

Date: 2026-08-30

## Result

- Previous template project catalogue removed.
- Active public catalogue: exactly 40 user-supplied licensed templates.
- `template_projects/`: 40 project directories.
- All 40 pass the licensed archive publication gate and ingestion QA.
- Runtime/editor/publish/export architecture remains shared with Zylora rather than carrying unsupported standalone application backends into published sites.

## Template catalogue

ai-starter-kit, arcade, archi, astrodeck, astrolus, astroship, booksaw, brivon, crypgo, desgy, dsign, eduleb, fauna-flora, foodmart, furnish, jessica, kaira, klar, landwind, learnhub, lounge, luther, meyawo, minimal, monica, nexora, nextjs-tailwind-portfolio, nexusai, olivia, picto, prime-dental, restaurant, saas-candy, salone, sarab, si-education, skilline, studiova, tailone, typefolio.

## Verification completed

- Catalogue ingestion QA: PASS — 40 licensed projects.
- Local route/asset checks: PASS — 2,261 checked local asset references, 0 broken.
- Export source QA: PASS — 7 checks, 0 errors; generated JS/JSX/MJS transpiles successfully.
- Browser-style product E2E: PASS — 1/1 (isolated due runtime duration).
- Editor/media suite: PASS — 13/13.
- Final-release/export/marketplace/master-policy batch: PASS — 16/16.
- Platform/publish/reference batch: PASS — 17/17.
- Release-gap/reliability batch: PASS — 17/17.
- Security-followup/SEO/sitemap batch: PASS — 13/13.
- Static/template-engine/import batch: PASS — 18/18.
- Core account/AI/API/credit post-export-fix regression: PASS — 23/23.
- Adversarial exporter symlink/ZIP confinement check after export fix: PASS — 1/1.

The original monolithic pytest run passed its first 32 tests and then spent the remaining command window inside the known slow combined browser E2E test. That E2E test passed when isolated in 28.45 seconds. The remainder of the 127-test suite was then executed in bounded groups and passed. Exporter-dependent suites were re-run after the final `zylora-edits.jsx` syntax correction.

## Corrections made during final QA

- Removed stale existing template project folders so only the 40 supplied templates remain active.
- Sanitized fabricated demo business contact facts and an unsupported SLA claim while preserving visual structure.
- Recomputed fail-closed verification hashes after sanctioned sanitization.
- Fixed Studiova page-banner asset paths.
- Removed an exposed demo Google Maps API key from normalized assets.
- Reworked source export to produce complete Next.js 16 projects with routes, assets, metadata, robots/sitemap/not-found routes, and Zylora structured edits.
- Fixed a missing closing brace in generated `app/zylora-edits.jsx`; final export transpilation QA passes.

## Production packaging note

Runtime test databases, uploaded test media, Python bytecode caches, and pytest caches are excluded from the final archive. Catalogue verification reports are retained under `data/`.
