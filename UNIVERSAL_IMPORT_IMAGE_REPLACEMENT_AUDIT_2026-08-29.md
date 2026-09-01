# Zylora Universal Import + Image Replacement — Implementation Audit

Date: 2026-08-29

## Implemented

- Added `POST /api/sites/import` for HTML or ZIP project import and `GET /api/sites/{site_id}/import-summary`.
- Added framework detection for HTML/CSS/JS, React, Next.js, Angular, Vue, Nuxt, Svelte, SvelteKit and Astro.
- Added safe static-output/source normalization into the existing SiteDocument/editor runtime. Uploaded application/build scripts are never executed.
- Added archive traversal/symlink rejection and file-count, archive-size, expanded-size, text-size and page-count limits.
- Added `site_imports` and `imported_site_pages` persistence through migration 016.
- Added imported-runtime rendering through draft preview, live publish and independent Next.js source export.
- Added imported internal-link resolution for preview, public routes and export routes.
- Added dashboard Import Website flow using multipart upload.
- Expanded managed image replacement to `<img>`, `<picture>` source sets, video posters, SVG `<image>`, inline backgrounds, and stylesheet-defined background images.
- Added imported base assets to public-reference checks and source-export asset bundling.
- Updated account deletion/ownership-transfer cleanup for imported-site records.

## Verification

- Python compileall: PASS.
- Static JavaScript syntax checks (`node --check`): PASS.
- Universal import tests: PASS, including all supported framework detection/source normalization, malicious ZIP traversal rejection, imported media management, edit, preview, publish and source export.
- Repository non-browser test modules: **111/111 PASS** when run by subsystem.
- Security/adversarial subset: PASS.
- Existing editor/media, export-entitlement, template-engine and account-deletion regression subsets: PASS.

The repository's single Playwright browser-E2E wrapper was not claimed as completed: the monolithic run exceeded the execution window while inside long-running E2E/legacy harness work. No failing assertion was reported before termination. All 111 non-browser tests were subsequently executed by subsystem and passed.

## Deliberate compatibility boundary

Framework import means safe conversion into Zylora's runtime, not server-side execution of arbitrary uploaded React/Angular/Vue/Svelte/Next build scripts. Static/rendered structure, styles, routes and assets are preserved where safely recoverable. Runtime-only custom application logic that depends on arbitrary JavaScript, private APIs or a framework-specific backend is intentionally not executed and may require reconstruction using supported Zylora capabilities.
