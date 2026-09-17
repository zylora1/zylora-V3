# Zylora Studio V1 + CMS Production Certification

Certification date: 2026-09-06

## Executive verdict

**PRODUCTION CANDIDATE — BLOCKERS REMAIN**

Combined Studio + CMS: **NOT PRODUCTION READY**

Renderer decision: **KEEP LEGACY PUBLISHING**

## Implemented facts

- Customer CMS persistence, typed fields/indexes, revisions, reference integrity, roles, validation, CSV, saved views, filtering, and sorting are implemented.
- Studio bindings use stable IDs and atomic Studio revisions. Repeaters and item/collection dynamic routes render published content only.
- Dynamic routes capture the V4 document at publication; later Studio drafts do not alter public CMS output.
- Dynamic title/description/canonical/OG, robots/noindex, sitemap entries, and optional JSON-LD resolve from published values.
- CMS AI is proposal-first, credit-metered, confirmation-gated, revision-checked, non-deleting, and non-publishing.
- Content Mode and collection-scoped roles are server-enforced.
- Sales Assistant CMS access is double opt-in and published-only.
- Super Admin aggregate/audit visibility exists.

## Test evidence

- CMS: 5 passed.
- Studio V4: 5 passed.
- Full repository: 316 passed, 1 skipped; one Playwright invocation failed solely because the sandbox denied subprocess creation.
- Exact combined Chromium E2E on the final code with browser permission: 1 passed in 40.66s.
- TypeScript, Python compilation, 480-file source audit, migrations, and Studio bundle passed.

## Security and risks

Verified controls include CSRF, server-side site/collection roles, non-disclosing cross-tenant 404s, same-site reference/media validation, parameterized queries, canonical typed indexes, rich-text/CSS/URL filtering, immutable public snapshots, revision conflicts, dependency-protected deletes, scoped AI proposals, and audit events.

Surviving risks: no production PostgreSQL migration rehearsal, high-volume load results, complete embed/CSP certification, dedicated accessibility audit, or Firefox/WebKit. CMS Manager is type/build verified and its APIs/runtime are tested, but the current combined browser E2E does not exercise its UI journey.

## Activation and rollback

Global V4 authority, shadow rendering, automated visual parity, per-site canary selection, and proven V4-to-legacy renderer rollback are not implemented. Existing legacy published-version rollback remains covered. CMS routes can be unpublished independently, but that is not a global V4 rollback.

## Final gate

Do not activate V4 globally. Keep static pages on the immutable legacy publication snapshot. Treat CMS dynamic routes as explicit additive routes while performance, accessibility, multi-browser, PostgreSQL, shadow, canary, and rollback gates remain open.
