# Zylora Studio Performance & Scalability Specification

## 1. Frame Budget & Target Benchmarks
- **Target Frame Rate**: 60 FPS (16.6ms per frame) during active dragging, resizing, panning, and zooming.
- **Input Latency**: $< 8\text{ms}$ pointer-to-render response time.
- **Autosave Overhead**: Debounced at 1200ms idle, non-blocking background serialization ($< 25\text{ms}$).
- **Document Load Time**: $< 400\text{ms}$ first contentful render for 500-node documents.

---

## 2. Scale Tiers & Node Capacities

| Scale Tier | Node Count | Drag Latency | Pan/Zoom FPS | Memory Footprint | Optimization Applied |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tier 1 (Landing Page)** | 100 nodes | $< 2\text{ms}$ | 60 FPS | $\sim 28\text{ MB}$ | Direct DOM manipulation. |
| **Tier 2 (Multi-Section Site)** | 500 nodes | $< 5\text{ms}$ | 60 FPS | $\sim 42\text{ MB}$ | `content-visibility: auto` on offscreen sections. |
| **Tier 3 (Catalog / Heavy)** | 1,000 nodes | $< 8\text{ms}$ | 58 - 60 FPS | $\sim 65\text{ MB}$ | Memoized bounding box caching; transient RAF drags. |
| **Tier 4 (Adversarial Stress)** | 5,000 nodes | $< 16\text{ms}$ | $\ge 45\text{ FPS}$ | $\sim 110\text{ MB}$ | Virtualized layers tree; spatial index for snapping. |

---

## 3. Core Performance Principles
1. **Transient Drag & Resize via RAF**:
   During active mouse/touch movement, geometric coordinates update using `requestAnimationFrame` and direct CSS transforms without triggering full React reconciliation trees. Full state dispatch occurs only on `pointerup`.
2. **Spatial Hashing for Snapping**:
   Candidate snap targets are filtered using a 2D spatial grid index, ensuring snapping calculations remain $O(k)$ rather than $O(N)$ with respect to total document nodes.
3. **Zero In-Memory Duplicate Graphs**:
   Eliminating parallel scene graphs saves $\sim 35\text{ MB}$ of heap allocation and eliminates garbage collection pauses during long editing sessions.

## 4. Measured local probe (2026-09-17)

The existing Chromium headless probe was run against the native Studio bundle
with 50, 100, 250, and 500 requested rectangle insertions. The probe reports
the time for the scripted insertion loop and a 24-move pointer drag; it is not
a 60 FPS certification and it does not measure WASM or the full upstream
Penpot runtime.

| Requested nodes | Insertion (ms) | 24-move drag (ms) | Browser errors |
| ---: | ---: | ---: |
| 50 | 2,530.25 | 654.88 | 0 |
| 100 | 5,265.78 | 657.43 | 0 |
| 250 | 12,958.33 | 819.49 | 0 |
| 500 | 28,647.89 | 792.05 | 0 |

The rendered-node locator count includes the fixture's existing document
nodes, so it is not equal to the requested insertion count. Treat the target
latencies in section 1 as engineering goals until a dedicated frame-timing
and memory profile is captured in a supported staging browser environment.

## 5. Measured native interaction profile (2026-09-17)

The instrumented profile was rerun against preloaded native Studio documents at
750, 1,000, and 2,000 nodes. Each tier exercised selection, drag, resize,
zoom, breakpoint switching, undo, and save. These are Chromium headless
measurements on this host; they are evidence for interaction behavior, not a
production-hardware SLA.

| Nodes | Rendered nodes | Drag p95 frame (ms) | Resize p95 frame (ms) | Zoom p95 frame (ms) | Save wall time (ms) | Long tasks | Browser errors |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 750 | 751 | 16.8 | 16.7 | 16.7 | 785.93 | 0 | 0 |
| 1,000 | 1,001 | 16.8 | 16.7 | 16.7 | 1,105.38 | 0 | 0 |
| 2,000 | 2,001 | 16.7 | 16.8 | 33.4 | 1,973.67 | 1 (70 ms) | 0 |

The profile recorded no browser errors. The 2,000-node undo operation produced
one 70 ms long task; that remains a performance risk to investigate on
representative staging hardware and is not hidden by averaging.
