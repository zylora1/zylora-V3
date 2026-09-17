# Actual Penpot Workspace Integration Audit

## Executive Summary
This document fulfills the directive to audit the **actual Penpot workspace implementation** (ClojureScript/Rum/Potok/WASM) for direct reuse inside Zylora Studio, avoiding unnecessary TypeScript reinvention of production-grade editor interactions. The objective is to embed the mature Penpot editor architecture (vendor/penpot/frontend/src/app/main/ui/workspace) as the core graphics engine, while stripping away the Penpot product shell, branding, Clojure backend, and SaaS infrastructure, substituting them with Zylora's authoritative backend and website semantics.

## 1. Actual Penpot Architecture Overview
- **Build System**: shadow-cljs compiling to ES modules.
- **UI Layer**: Rum (ClojureScript wrapper around React).
- **State Management**: Potok (RxJS-based event streaming and state reduction).
- **Rendering Engine**: Rust/WASM via Skia (viewport_wasm.cljs) with SVG/Canvas fallbacks.
- **Data Model**: Immutable Clojure data structures (EDN) representing workspaces, files, pages, and hierarchical shapes.
- **Backend Transport**: Sente (WebSocket library for Clojure) communicating with Penpot's JVM backend.

## 2. Feature-by-Feature Integration Audit

### 2.1 Viewport & Rendering (app.main.ui.workspace.viewport)
- **Penpot Implementation**: High-performance WASM/WebGL canvas with infinite zoom, panning, hit-testing, and multi-selection marquee.
- **Zylora Target**: Directly mount the CLJS viewport component.
- **Technical Barrier / Reason**: None for visual editing. *Concrete Reason against using raw Penpot for Publishing*: The WASM engine produces a non-semantic DOM. Zylora's site-compiler must parse the persisted document to generate semantic HTML5/CSS for the final published website, utilizing Penpot only for the editor view.

### 2.2 Selection, Transformations & Snapping
- **Penpot Implementation**: Production-grade drag, rotate, resize, smart magnetic guides, aspect-ratio locking, and multi-node grouping natively wired into Potok state reducers.
- **Zylora Target**: Reuse 100% of the CLJS implementation. Do not rewrite math in TypeScript.
- **Integration Mechanism**: Let the CLJS app handle all transient pointer interactions and emit committed mutation events.

### 2.3 Left Sidebar (Pages, Layers, Assets)
- **Penpot Implementation**: app.main.ui.workspace.sidebar containing hierarchical page and layer management.
- **Zylora Target**: Reuse the layers and pages tree.
- **Integration Mechanism**: Hide Penpot's native "Dashboard" back button (app.main.ui.workspace.top_toolbar) via CSS/DOM injection to prevent brand leakage and route escape.

### 2.4 Right Sidebar (Properties / Inspector)
- **Penpot Implementation**: Comprehensive design controls (Typography, Fills, Strokes, Effects, Flex/Grid layouts, Export).
- **Zylora Target**: Reuse for all visual properties. 
- **Concrete Technical Reason for Modification**: Zylora requires Website Semantics (e.g., binding a button to the "Appointment Booking" engine or marking a frame as a <form>).
- **Solution**: Inject a Zylora React component (e.g., ZyloraSemanticPanel) alongside or inside the CLJS Right Sidebar mounting point. We intercept selection changes from Potok and render Zylora's semantic controls in the host React app.

### 2.5 Product Shell & Branding (Top Toolbar)
- **Penpot Implementation**: top_toolbar.cljs includes Penpot logos, multiplayer avatars, and share dialogs.
- **Zylora Target**: Replace completely.
- **Integration Mechanism**: We will render Zylora's TopBar (Vite/React) as the absolute-positioned header and mount the Penpot workspace immediately below it, disabling the native CLJS top toolbar via configuration or targeted CSS (.workspace-header { display: none !important; }).

## 3. Storage & Backend Transport Swap
This is the primary integration challenge.

- **Penpot Implementation**: Expects a Clojure backend via WebSockets (Sente). It dispatches EDN events like [:workspace/update-shape ...].
- **Zylora Requirement**: Zylora uses FastAPI and stores documents in PostgreSQL via REST/JSON.
- **Concrete Technical Plan**:
  1. **Intercept State**: We must inject a custom interceptor into the Potok store or override the app.main.data.api namespace in the shadow-cljs build to route network calls to a JS interop boundary.
  2. **Dual-Layer Persistence**:
     - Visual Graph: The CLJS EDN blob (serialized to JSON/Transit) is saved wholesale to Zylora's DB.
     - Semantic Manifest: Zylora maintains a parallel JSON dictionary mapping shapeId -> { zyloraType: 'booking' }.
  3. **Autosave Bridge**: When Potok triggers a document save, the Zylora React wrapper captures the payload, merges it with the Semantic Manifest, and pushes it to /api/sites/{id}/document.

## 4. Build System Injection
To reuse the Penpot workspace without shipping a separate SaaS app:
1. We configure vendor/penpot/frontend/shadow-cljs.edn to build a single :main-workspace target.
2. Output: static/penpot-workspace-bundle.js.
3. Zylora's Vite app (studio/App.tsx) imports this bundle dynamically.
4. We invoke the CLJS initialization function (e.g., app.main.ui.workspace/mount!) targeting a <div id="penpot-host"> within the Zylora Studio DOM.

## 5. Conclusion
**Verdict**: Reusing the actual ClojureScript Penpot workspace is technically feasible and fulfills the mandate to avoid reinventing production interactions. 
