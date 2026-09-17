# Zylora CMS Architecture

Status: **IMPLEMENTED — PRODUCTION CANDIDATE, CERTIFICATION GATES REMAIN**
Implementation date: 2026-09-06

## Boundary and sources of truth

- `SiteDocument` owns page/node design and stable binding descriptors.
- CMS collections/items are separate site-scoped records; resolved values are never written back as static node content.
- CMS item publication and website publication remain separate.
- Dynamic pages render only `PUBLISHED` items through a captured `published_document_json` snapshot. Later Studio draft edits cannot leak onto that route.
- Legacy static publication remains authoritative. CMS dynamic routes are additive and only exist when explicitly published by a Designer or Owner.

## Persistence

Migrations 029–032 add collections, fields, items, typed/indexed values, same-site relations, immutable item revisions, saved views, scoped permissions, bindings, dynamic-page snapshots, AI proposals, and explicit Sales Assistant CMS opt-in.

Collections, fields, items, bindings, routes, relations, and permissions carry or derive `site_id`. Application authorization remains authoritative. Roles are Owner, Admin, Designer, Content Editor, and Viewer; collection-scoped collaborators see only granted collections.

## Field and item model

Implemented field types: text, long text, rich text, number, boolean, date, datetime, email, phone, URL, slug, color, image, video, file, media gallery, option, multi-option, reference, multi-reference, JSON/object, and location.

Validation is server-side. Rich text is sanitized, media IDs pass the existing asset authorization boundary, references must target the configured collection on the same site, and unique fields use a canonical indexed value plus typed number/boolean/datetime columns. Incompatible schema mutations return `CMS_FIELD_MIGRATION_REQUIRED`; required fields on populated collections need a valid default. Successful schema changes migrate item snapshots and indexes transactionally.

Items support draft/published state, bounded pagination, search, typed filtering, deterministic metadata or field sorting, optimistic concurrency, revisions/restore, delete guards, and atomic CSV dry-run/import/export. Saved views persist query configurations.

## Bindings, repeaters, and routes

Binding writes validate node, page, collection, field type, target property, role, and Studio revision. The binding table and `Node.bindings` update in one transaction. Field targets are `text`, `html`, `src`, `href`, and `alt`.

Repeater bindings drive repeater/list/carousel/gallery/table nodes and existing section/container/grid/stack/flex nodes. The renderer repeats one child subtree per item, emits unique rendered IDs, applies validated filters/sorts/limits, and resolves nested field bindings.

Dynamic definitions support ITEM (`prefix/{item-slug}`) and COLLECTION (`prefix`) routes. The resolver selects same-site published definitions/items, captured Studio snapshots, media URLs, canonical URLs, title/description/OG templates, robots/noindex, optional JSON-LD, and sitemap entries. Draft or missing items return 404.

## Studio and AI

React Studio includes Design, CMS Manager, and Content Mode workspaces. CMS Manager exposes collection/schema/content/binding/repeater/dynamic-page workflows. Content Mode removes layout controls; APIs independently enforce roles.

CMS AI is proposal-first and credit-metered. Apply requires confirmation, authorization, known field/item IDs, validation, uniqueness checks, and matching revisions. It cannot delete or publish. The visitor Assistant reads CMS only when the collection is assistant-enabled and its ID is selected in site Assistant settings; only same-site published values enter the existing injection-filtered grounding path.

## Operations and verification

CMS mutations create audit events. `/api/admin/cms/summary` exposes aggregate counts/states and recent CMS audit events to Super Admins without customer content.

Focused tests verify CRUD, validation, typed indexing, uniqueness, schema migration, CAS/restore, relations, tenant isolation, roles, CSV, saved views, filtering/sorting, bindings, dynamic snapshot isolation/SEO, draft 404s, AI confirmation/credits, and Assistant opt-in.

Remaining certification: large-dataset performance, dedicated Studio CMS browser/a11y journeys, Firefox/WebKit, cache/load testing, and production PostgreSQL migration rehearsal.
