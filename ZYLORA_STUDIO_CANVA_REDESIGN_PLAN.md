# Zylora Studio — Canva-style redesign plan

## Scope

This pass upgrades the Studio presentation and interaction layer for non-technical website owners. It preserves the existing React editor, `SiteDocument` reducer, autosave/history, CMS bindings, AI operations, media APIs, and publishing renderer.

## Current architecture (verified before implementation)

- `studio/App.tsx`: Studio shell, responsive breakpoint/zoom controls, save/publish orchestration, canvas pan and file-drop routing.
- `studio/store.ts`: authoritative `SiteDocument` state, reducer operations, history, clipboard, responsive overrides, crop state, and semantic node metadata.
- `studio/components/CanvasNode.tsx`: recursive document renderer, selection, intentional drag threshold, resize handles, inline text editing, crop mode, and reparenting.
- `studio/components/ContextToolbar.tsx`: contextual controls for text, images, cards, effects, links, duplication and deletion.
- `studio/components/AddPanel.tsx`: beginner-facing primitives and drag/click insertion.
- `studio/components/LayersPanel.tsx`: presentation-layer semantic names over internal node types and structural reorder operations.
- `static/studio.html` and `static/studio-ux.css`: shell styling and responsive editor layout.

## Implementation stages

1. **Shell and visual hierarchy** — refine the existing top bar, compact rail, expandable drawer, canvas dominance, contextual controls, and mobile bottom sheets without changing route or document contracts.
2. **Beginner primitives** — keep the existing small set (Text, Button, Card, Image frame, Shape, Section, Divider, Zylora widgets) and improve labels, affordances, empty states, and drag/click insertion.
3. **Canvas interaction hardening** — preserve selected-node drag threshold, explicit resize handles, crop isolation, pan/zoom separation, snapping, multi-selection shortcuts, and document-aware history transactions.
4. **Human-readable structure** — keep internal node IDs private and expose semantic layer names, section-level drag affordances, and safe reorder feedback.
5. **Responsive editor** — verify desktop, tablet, and mobile shell behavior at the required widths; keep mobile panels as sheets rather than shrinking desktop panels into the viewport.
6. **Verification** — run focused reducer/static tests, browser checks for Chromium/Firefox/WebKit, viewport checks, and the full repository suite. Capture evidence in `artifacts/studio-canva-redesign/` and publish the implementation report.

## Compatibility constraints

- No backend API or database migration is required for the presentation-layer work.
- Existing `SiteDocument` versions remain readable; new UI metadata remains optional.
- No authentication, billing, provider, CMS, or publishing behavior is weakened.
- Any unsupported advanced feature is recorded explicitly rather than simulated.

## Acceptance gates

- A first-time user can identify Add, Pages, Layers, Media, AI, and Site within 30 seconds.
- The website canvas occupies the dominant workspace area.
- Text, Button, Card, Image frame, Shape, Section, and Divider can be added by click or drag/drop.
- Selected objects can be moved/resized deliberately; scrolling an unselected object never mutates geometry.
- Zoom, Fit, pan, responsive preview, undo/redo, save/reload, preview, and publish continue to work.
- Layers never expose internal IDs or raw DOM terminology to normal users.
- Desktop and mobile shells have no critical horizontal overflow.
- Browser and repository tests remain green with no unexplained failures.
