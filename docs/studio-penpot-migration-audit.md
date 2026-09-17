# Zylora Studio — Penpot-Derived Architecture Migration Audit

## Executive Summary
This document records the comprehensive pre-migration architecture audit of Zylora Studio and the upstream Penpot v2.17.0 codebase (`commit bdce5817ea86d028db29113d9ecdadcf07097b36`). The objective of this migration is to rebuild Zylora Studio's desktop and mobile editing experience on a native Penpot-derived graphics and layout engine while preserving Zylora's authoritative backend, canonical `SiteDocument` persistence, website semantics, and zero customer-facing Penpot branding.

---

## 1. Current Zylora Studio Architecture
- **Client Runtime**: React 19 + TypeScript single-page application bundled into `static/studio.js` (IIFE bundle) via Vite 8 (`vite.studio.config.mjs`).
- **Canvas Viewport**: Infinite workspace container (`.canvas-workspace`) with world/screen coordinate engine, zoom range (25% - 300%), and middle-mouse/space panning.
- **Document Store**: React `useReducer` in `studio/store.ts` managing canonical `SiteDocument` schema v5, with transaction history stack for undo/redo.
- **Persistence & Autosave**: Debounced background persistence (`studio/persistence/useAutosave.ts`) to `/api/sites/{id}/document` with CAS revision checking and conflict resolution dialog.
- **Backend Authority**: FastAPI runtime (`app/main.py`, `app/api.py`, `app/studio_document.py`) managing authentication (session cookies + CSRF tokens), billing/plans, CRM, leads, appointments, CMS collections, and Cloudflare custom domains.
- **Publishing & Rendering**: Server-side compiler (`app/studio_renderer.py` / `app/penpot_compiler.py`) producing semantic HTML5, scoped responsive CSS, and minimal vanilla runtime.

---

## 2. Upstream Penpot Architecture Relevant to Studio
- **Geometry & Matrix Engine**: `common/src/app/common/geom/matrix.cljc` provides 2D affine matrix math (multiply, invert, rotate, scale, translate, decompose).
- **Rectangle & Transforms**: `common/src/app/common/geom/rect.cljc` and `modifiers.cljc` provide bounding-box transformation, aspect ratio preservation, and anchor-relative scaling.
- **Snapping & Smart Guides**: `common/src/app/common/geom/snap.cljc` computes edge-to-edge magnetic snapping, center alignment, and equal-spacing distribution indicators.
- **Layout Engine**: `common/src/app/common/logic/flex_layout/` and `grid_layout/` compute flex container constraints, auto-flow, gaps, and responsive alignment.
- **Undo/Redo Stack**: `common/src/app/common/logic/undo_stack.cljc` provides transactional history grouping with rollback safety.

---

## 3. Overlap Matrix & Decisions

| Subsystem | Zylora Existing | Penpot Upstream | Migration Decision | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **2D Transforms & Math** | Basic trigonometry | Full 2D affine matrix (`matrix.cljc`) | **Adapt** into `studio/editor-core/matrix.ts` | Eliminates gimbal and rotation rounding errors during composite multi-node transforms. |
| **Snapping & Guides** | Basic edge snap | Multi-candidate magnetic snap & spacing | **Adapt** into `studio/editor-core/snapping.ts` | Provides Penpot-grade smart spacing and alignment indicators without external dependencies. |
| **Layout Mode** | Freeform absolute | Freeform + Flex + Grid layouts | **Adapt** into `studio/editor-core/layout.ts` | Allows users to choose freeform positioning or flex stacks for responsive sections. |
| **History & Undo** | Simple snapshot array | Transactional grouping & rollback | **Adapt** into `studio/editor-core/history.ts` | Ensures AI operations and composite drags can be undone in a single atomic transaction. |
| **Backend / DB** | FastAPI + SQLite/Postgres | Clojure + PostgreSQL + Redis | **Keep Zylora** | Zylora auth, billing, CRM, and publishing are authoritative. Penpot backend is not imported. |
| **UI Shell** | Zylora Studio Shell | Penpot Workspace & Dashboard | **Keep Zylora** | Preserves Zylora branding, rail navigation, page navigator, and compact inspector. |
| **Semantics** | `SiteDocument` semantic types | Visual shapes only | **Keep Zylora** | Website components (Forms, Booking, CMS, Navbar) require Zylora semantic manifest. |

---

## 4. Risk Assessment & Mitigation

### 4.1 Data Model Risk: Duplicate Scene Graphs
- **Risk**: Maintaining separate Penpot and SiteDocument models causes lossy round-tripping and desynchronization.
- **Mitigation**: Single source of truth. The Penpot-derived editor engine manipulates the canonical `SiteDocument` nodes directly via typed geometry and layout properties.

### 4.2 Build & Bundle Risk
- **Risk**: Introducing ClojureScript/JVM or Rust WASM into production builds adds multi-gigabyte build chains and runtime overhead.
- **Mitigation**: Pure TypeScript implementation of Penpot's mathematical, geometric, and layout algorithms running directly in Vite. Zero Clojure/WASM toolchain required at runtime.

### 4.3 Brand Leakage Risk
- **Risk**: Residual Penpot strings appearing in error dialogs, tooltips, or loading screens.
- **Mitigation**: Complete automated brand scrub. All customer-facing surfaces display Zylora.

### 4.4 Regression Risk
- **Risk**: Breaking existing 531 tests or Playwright browser E2E workflows.
- **Mitigation**: Strict contract preservation (`button===1`, `__zyloraSpacePressed`, `<PageNavigator onFit={fit}/>`, `<RailIcon id={id}/>`).

---

## 5. Rollback Strategy
1. **Reversible Git Checkpoint**: Initial working state tagged at commit `4f7f7bb`.
2. **Feature Gate Fallback**: `settings.studio_engine` defaults to `legacy` and allows instantaneous rollback if any runtime anomalies are detected.
3. **Database Safety**: `SiteDocument` schema v5 supports both legacy and engine v2 geometry without schema migration downtime.
