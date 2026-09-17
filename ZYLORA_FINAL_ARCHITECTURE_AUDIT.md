# Zylora Final Architecture Audit

Audit date: 2026-09-06
Evidence: current repository source and tests executed in this task.

## Executive finding

Zylora remains a FastAPI/SQLAlchemy application with immutable legacy publication snapshots and a separate React/SiteDocument V4 Studio. This work repaired the V4 foundation and added a customer CMS, bindings, repeaters, dynamic item/collection routes, dynamic SEO, role-safe Content Mode, proposal-first AI CMS, and explicit Sales Assistant CMS grounding.

Verdict: **PRODUCTION CANDIDATE — BLOCKERS REMAIN**. The CMS backend/runtime foundation is implemented and focused-tested; the combined product is not production-certified. Global renderer decision: **KEEP LEGACY PUBLISHING**.

## Sources of truth

- Legacy static pages: `published_snapshot_json` and `published_structure_json` remain authoritative.
- Studio draft: validated `studio_document_json` plus database CAS `studio_revision`.
- CMS content: `cms_*` tables with separate draft/published state and revisions.
- CMS routes: explicit definitions with captured `published_document_json`.
- Bindings: stable collection/field IDs in `cms_bindings` and `Node.bindings`.

Public routing checks special files and redirects, then explicitly published CMS routes, then established static pages. Dynamic routes use only same-site published items and captured documents; missing/draft items return 404.

## Architecture added

Migrations 029–032 implement collections, fields, items, typed indexes, relations, revisions, views, permissions, bindings, dynamic snapshots, AI proposals, and Assistant collection opt-in. Owner/Admin/Designer/Content Editor/Viewer roles are enforced server-side; collection-scoped users see only granted collections.

The V4 renderer allowlists CSS, filters executable URLs, sanitizes HTML, escapes output, resolves field/media bindings, repeats child templates with unique IDs, and applies validated filters/sorts/limits. Dynamic SEO supports field tokens, canonical/OG metadata, and optional JSON-LD.

React Studio provides Design, CMS Manager, and Content Mode. CMS Manager creates collections/fields/items, edits/publishes content, binds nodes, repeats layout containers, creates dynamic pages, and reviews/applies AI proposals. Content Mode removes layout controls; APIs remain the security boundary.

CMS AI proposals are stored before application, credit-metered, constrained to selected items/known fields, and limited to create/update drafts. Apply needs explicit confirmation and current revisions. Visitor Assistant retrieval requires both a selected collection in site settings and the collection's assistant flag, and reads published same-site values only.

## Verification

- CMS: 5 passed.
- Studio V4: 5 passed.
- Repository: 316 passed, 1 skipped; the sole sandbox failure was Windows subprocess denial in Playwright.
- Exact Chromium combined E2E on the final code outside that restriction: 1 passed in 40.66s.
- Python compilation and Studio TypeScript: passed.
- Next.js source audit: 480 files, 0 errors.
- Studio bundle: rebuilt.

## Strongest opposing case

Passing API/runtime tests do not prove the complete Studio+CMS experience production-ready. The combined E2E does not exercise CMS Manager interactions; no production PostgreSQL rehearsal, large-dataset performance result, accessibility audit, Firefox/WebKit run, shadow visual comparison, canary control, or global V4 rollback proof exists. These omissions materially block global activation.

## Decision

Keep legacy publishing globally authoritative. CMS dynamic routes are additive and explicit. No global V4 authority switch was made.
