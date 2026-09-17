# Zylora Studio Architecture Specification

## 1. System Overview
Zylora Studio is a professional, native website design editor embedded within the Zylora SaaS platform. Its graphics editing foundation is derived from the upstream open-source Penpot project (`v2.17.0`, commit `bdce5817ea86d028db29113d9ecdadcf07097b36`), adapted into a high-performance TypeScript architecture that executes directly within modern web browsers without external runtimes or iframes.

---

## 2. Directory & Module Boundaries

```
studio/
├── editor-core/             # Penpot-derived graphics & layout engine
│   ├── matrix.ts            # 2D affine matrix math (multiply, invert, rotate, decompose)
│   ├── geometry.ts          # Rectangles, anchors, aspect-ratio constraints, hit-testing
│   ├── snapping.ts          # Magnetic snap solver, guide intersections, equal spacing
│   ├── layout.ts            # Freeform vs Flex container layout resolution
│   └── history.ts           # Transactional undo/redo stack & rollback
│
├── common/                  # Shared domain types & constants
│   └── types.ts             # Point, Rect, Matrix2D, SnapGuide, LayoutMode, Color, Gradient
│
├── zylora/                  # Zylora-specific product capabilities
│   ├── shell/               # TopBar, ToolRail, StudioApp shell, PageNavigator
│   ├── components/          # AddPanel, Inspector, LayersPanel, AssetsPanel, CMSPanel
│   ├── semantics/           # Website components (Navbar, Form, Booking, CMS, SEO)
│   ├── commands/            # Zylora Studio Command API (transaction-safe mutation layer)
│   ├── ai/                  # Studio AI operations and provenance tracking
│   ├── responsive/          # Breakpoint resolution (desktop/tablet/mobile)
│   └── persistence/         # Debounced autosave & CAS conflict detection
│
└── index.tsx                # Client bundle entry point mounted to #studio-root
```

---

## 3. Runtime Event & Mutation Pipeline

Every visual interaction in the editor follows a deterministic, unidirectional pipeline:

```
[User Pointer / Keyboard / AI Request]
                  │
                  ▼
      [Gesture & Event Handler]
  (Checks drag threshold, modifier keys: Shift/Space)
                  │
                  ▼
     [Coordinate Engine (Screen ↔ World)]
  (Translates viewport clientX/Y to parent-relative canvas space)
                  │
                  ▼
   [Editor Core (Matrix / Snapping / Layout)]
  (Computes geometry deltas, magnetic snaps, and flex constraints)
                  │
                  ▼
     [Zylora Studio Command API]
  (Validates payload, checks node locks, creates transaction)
                  │
                  ▼
         [Store Reducer]
  (Atomically produces next SiteDocument state & history entry)
                  │
         ┌────────┴────────┐
         ▼                 ▼
  [Canvas Re-render]  [Debounced Autosave (CAS)]
```

---

## 4. Canvas Coordinate Model
- **Screen Space**: Browser viewport coordinates (`clientX`, `clientY`).
- **World Space**: Unscaled artboard canvas coordinates originating from `(0, 0)` at the top-left of the current page artboard.
- **Parent-Relative Space**: Coordinates stored inside `node.geometry` (`x`, `y`), representing displacement relative to the immediate parent container.
- **Transformation Formula**:
  $$\text{WorldPoint} = \frac{\text{ScreenPoint} - \text{ViewportOrigin}}{\text{Zoom}}$$

---

## 5. Responsive Breakpoint Model
Zylora Studio evaluates three canonical breakpoints:
1. **Desktop**: Default base styles and geometry ($> 991\text{px}$, reference $1440\text{px}$).
2. **Tablet**: Cascade overrides for tablet screens ($\le 991\text{px}$, reference $768\text{px}$).
3. **Mobile**: Cascade overrides for smartphone viewports ($\le 767\text{px}$, reference $390\text{px}$).

Nodes store breakpoint modifications in `node.responsiveOverrides[breakpoint]`. Properties inherit upward from Desktop unless explicitly overridden.

---

## 6. Mobile Studio Experience
On mobile devices ($\le 820\text{px}$), Zylora Studio dynamically transforms into a touch-first layout:
- Desktop sidebars are replaced by slide-up bottom sheets.
- Topbar collapses into a clean header with responsive breakpoint selectors and publish button.
- Bottom navigation bar (`.studio-mobile-nav`) provides instant access to Add, Layers, Pages, and Assets panels.
- Touch gestures use dedicated touch-action containment to prevent accidental browser scrolling while manipulating canvas nodes.
