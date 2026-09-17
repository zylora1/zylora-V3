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
