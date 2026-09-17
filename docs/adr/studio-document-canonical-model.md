# Architecture Decision Record: Canonical Studio Document Model

## Status
Accepted

## Context
Zylora Studio is transitioning its graphics editing engine to a native Penpot-derived architecture. A critical decision is how the editor represents visual geometry, website semantics, and publishing data: whether to maintain two synchronized models (e.g. an internal Penpot design graph and an external Zylora `SiteDocument`) or a single unified canonical data model.

Maintaining two independent live editor models with round-trip synchronization introduces significant risks:
- Synchronization race conditions during high-frequency gestures (e.g. 60 FPS dragging or resizing).
- Loss of domain-specific website semantics (e.g. form field configurations, CRM bindings, booking calendars) when passing through visual-only design models.
- Increased memory footprint and serialization thrashing on every frame.

## Decision
We adopt a **Single Canonical Document Architecture with Layered Projections**:

```
Canonical Visual Model (SiteDocument Nodes + Geometry)
                     +
Canonical Semantic Manifest (Zylora Bindings & Roles)
                     ║
                     ▼
          Zylora Site IR / Compiler
                     ║
                     ▼
            Production Website
```

### 1. Visual Document Layer (Canvas & Layout)
- **Ownership**: Owns parent-local 2D geometry (`NodeGeometry`: x, y, width, height, rotation, mode, min/max constraints, lockAspectRatio), hierarchy (`parentId`, `children`), visual appearance (fills, strokes, border radius, box shadows, gradients), and layout configuration (freeform absolute vs flex/grid).
- **Engine Representation**: Defined in `studio/store.ts` and `app/studio_document.py` (`Node`).

### 2. Semantic Manifest Layer (Website Behaviors)
- **Ownership**: Owns website component roles (`zyloraType`), form input schemas, appointment booking service IDs, CMS collection bindings, lead routing, SEO metadata, accessible ARIA labels, and custom click actions (`NodeAction`).
- **Engine Representation**: Stored directly on node metadata and bindings in `app/studio_document.py` (`NodeContent.action`, `Node.bindings`, `Node.accessibility`).

### 3. Compatibility & Migration Path
- **Backward Compatibility**: For legacy readers, CSS fields (`left`, `top`, `width`, `height`, `transform`) remain automatically synchronized with `NodeGeometry`.
- **Forward Migration**: Legacy documents lacking explicit `NodeGeometry` are upgraded deterministically on load via `_geometry_from_css()`.

### 4. Autosave, Concurrency & Conflict Handling
- **Atomic Snapshots**: Changes are committed through the Zylora Studio Command API.
- **Optimistic Concurrency**: Autosave includes the document `revision` number. The backend enforces Compare-And-Swap (CAS). If a concurrent tab updates the site, a conflict dialog is displayed offering merge or overwrite options.

### 5. Undo / Redo Scope
- The undo stack operates on transactional state deltas. Drag gestures, composite multi-node alignments, or AI transformations are grouped into single atomic undoable history entries.

## Consequences
- **Positive**: Zero data desynchronization; immediate consistency across canvas, inspector, and layers tree; zero runtime memory overhead from duplicate scene graphs.
- **Positive**: AI operations and UI actions share the exact same mutation pipeline.
- **Negative**: Visual and semantic updates must strictly pass through the validated Command API.
