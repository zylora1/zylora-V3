# Zylora visual editor architecture

## Scope and truth boundary

Zylora's current editor is a structured, schema-backed website editor layered over generated or template HTML. It is not a freeform Wix-style DOM authoring engine. The redesign preserves that architecture and makes the existing capabilities clearer and more usable; it does not pretend unsupported capabilities exist.

The durable contract is `SiteDocument` schema version 3 in `app/structured_editor.py`. Existing page HTML is instrumented with stable `data-zylora-id` selectors and exposed as editable nodes. User actions are stored as validated operations and are applied to draft HTML at render time.

## Workspace composition

- Top bar: site identity, draft/save state, undo/redo, preview, export and publish.
- Left panel: pages plus site-level business profile, brand, SEO, navigation, revisions and accessibility surfaces.
- Center canvas: a same-origin draft preview with desktop, tablet and mobile presentation modes. Canvas clicks select instrumented nodes.
- Right inspector: contextual Content, Style, Layout, Motion and Responsive tabs. It remains empty until a supported node is selected.
- AI panel: converts an instruction into the same validated operation format. Site-wide changes have a preview/impact step before apply.

The 1280px layout reserves 250px for the left panel and 330px for the inspector so the canvas remains the dominant region. Below 960px the inspector becomes an overlay.

## Persistent state

Persistent state is stored server-side:

- `sites.draft_structure_json`: schema-v3 document, operations, tokens, navigation, SEO and generation metadata.
- `sites.document_version`: optimistic version used by validated AI/site-wide flows.
- `editor_history`: grouped undo/redo checkpoints.
- `site_revisions`: named and autosave revision snapshots.
- `media_assets`: tenant-scoped metadata and managed file references.
- site brand and SEO JSON fields.

The published snapshot is separate from the draft. Editing a draft does not mutate the public site until publish succeeds.

## Ephemeral client state

`static/editor.js` owns only interaction state: current page/device, selected node, open drawer/dialog, pending operation queue, save timers and local recovery for basic fields. Operations debounce for 550ms; basic site metadata debounces for 1200ms. A `beforeunload` guard is active while a save is pending.

Selection outlines, inspector tab choice, canvas loading/error state and dialog focus are transient and are not written into the site document.

## Operation pipeline

1. The editor fetches `/api/sites/{site_id}/editor-document?page={slug}`.
2. The API verifies ownership, resolves the page, instruments the base HTML and returns schema version, editable nodes, assets, brand, SEO, history and revisions.
3. A UI action creates one or more typed operations such as `set_text`, `replace_image`, `set_style`, `set_responsive_style`, `set_effect`, `set_link`, `remove`, `duplicate` or `move_before`.
4. `/editor/actions` validates the operation shape, selector, allowed styles/attributes, page links, lock state and target existence against the relevant page HTML.
5. Valid operations are merged into the document, the version is incremented, and history plus an autosave revision are created in one server-side transaction.
6. The canvas reloads from the rendered draft and the UI refreshes history state.

Undo and redo flush pending edits first, then move through grouped server history. Revision restore creates a new current state instead of deleting history.

## Media and responsive behavior

Images use tenant-scoped managed asset IDs. Draft-only media remains private; assets become publicly cacheable only when referenced by published output. Replacement, crop, focal point, fit, alt text and responsive focal point are supported. Unsafe remote/private-network image targets are rejected.

Responsive style operations compile to defined desktop, tablet and mobile media-query bands. The editor preview mode changes the canvas presentation; it does not create a separate page document.

## Motion

Motion is represented through a centralized allowlisted effect registry. Scroll, hover, gradient, carousel, responsive and state effects compile into shared classes/configuration. Rendered output includes `prefers-reduced-motion` handling. Arbitrary scripts, event handlers and raw CSS are not accepted as editor operations.

## AI editing

AI edits receive untrusted page/business context and must return typed operations only. Prompts explicitly prohibit fabricated facts, credentials, ratings, prices, testimonials and backend-dependent controls. Managed images must reference real asset IDs. Operations are revalidated against the document and HTML before storage; model output is never applied as executable HTML or JavaScript.

If a request cannot be represented safely, the API returns `SCHEMA_CAPABILITY_REQUIRED` with the smallest typed extension needed. Current schema-v3 does not support arbitrary typed section construction, so the product must not advertise unrestricted add-anything behavior.

## Security and isolation

- Every editor, revision, media and AI route verifies authenticated site ownership.
- CSRF, durable rate limiting and tenant-scoped media checks remain enforced.
- Selectors, tags, attributes, styles, links and URLs are allowlisted and sanitized.
- `javascript:`, private-network asset URLs, arbitrary HTML, scripts and unsupported operations are rejected.
- Draft, published and export rendering all use the same structured document application path.

## Current limitations

- There is no freeform coordinate canvas, arbitrary breakpoint creation or unrestricted DOM insertion.
- Section insertion needs a typed section-node schema extension before it can be safely enabled.
- Grid/flex edits are property operations on existing supported nodes, not a complete nested layout-tree authoring system.
- Collaborative cursors, comments and multi-user conflict resolution are not implemented.
- Plugin/app-marketplace editing is outside the current editor contract.

These are product boundaries, not hidden UI promises. Any future Wix-class expansion should extend the typed document model first, then add inspector controls and rendering support, followed by migration and regression tests.

