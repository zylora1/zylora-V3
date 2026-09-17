# Penpot workspace reuse audit — decision record

## Status

**Audited; full upstream workspace embedding rejected for the Zylora product.**

This document records why the ClojureScript/Rum/Potok/WASM Penpot workspace was
inspected and why it is not mounted, iframed, or exposed as a second product.
The exact source provenance is in `studio/UPSTREAM.md` and
`integrations/penpot/penpot.lock.json`.

## Upstream capabilities reviewed

The official Penpot 2.17.0 source includes a ClojureScript/Rum frontend,
Potok state/event architecture, Rust/Skia rendering, EDN document models,
Sente/WebSocket transport, backend services, plugins, exporter and media
processing. These are valuable reference implementations for geometry,
selection, layout, snapping and history.

## Boundary decision

Zylora retains the existing React/TypeScript shell and canonical `SiteDocument`.
The following editor concepts are adapted into Zylora-owned modules:

- matrices, bounds, transforms and hit testing;
- snapping, guides and distribution indicators;
- Flex/Grid layout resolution;
- transactional history and undo/redo;
- selection, drag, resize and rotation behavior.

The native Zylora canvas now mounts `CanvasNode` directly. It does not mount a
`PENPOT_WORKSPACE` global, an iframe, a plugin sandbox, an EDN WebSocket store,
or a separate Penpot backend/database.

## Rejected integration mechanisms

The previously proposed mechanisms below are not part of the product:

1. **Direct ClojureScript workspace mount** — rejected because it requires
   Penpot's product state, backend transport and runtime assumptions, and would
   create a second document model.
2. **DOM/CSS injection into a Penpot shell** — rejected because it leaves
   customer-facing product branding and accessibility ownership ambiguous.
3. **Plugin or MCP bridge for ordinary editing** — rejected because core Zylora
   semantics and AI must use the native Studio Command API.
4. **Wholesale Penpot backend/database** — rejected because Zylora already owns
   auth, tenants, persistence, billing, domains and publishing.

## Publish boundary

Penpot's visual renderer is not the published site. Zylora compiles the
canonical document and semantic metadata to accessible HTML/CSS/runtime assets,
then validates and atomically publishes through its existing hosting pipeline.

## Current evidence

The source checkout and adapted modules are present. The full upstream Penpot
runtime has not been started on this host, so this record does not claim an
upstream runtime/browser certification. `STUDIO_ENGINE=legacy` remains the
production default while the native path is verified separately.
