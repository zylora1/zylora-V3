# Zylora shared visual system

This document is the visual contract for the public landing page, dashboard,
and Studio shell. It describes the skin only; existing product state, routes,
API calls, editor commands, authentication, billing, and publishing remain
authoritative in their existing modules.

## Direction

Quiet, warm, precise, editorial, and product-first. Use generous whitespace,
thin warm borders, restrained shadows, and one consistent sans-serif family.
The interface should feel engineered and tactile without gradients, glass
effects, decorative blobs, or dense admin-template styling.

## Tokens

```css
:root {
  --zy-warm-bg: #fbfbf9;
  --zy-warm-surface: #fffefa;
  --zy-warm-muted: #f4f4f1;
  --zy-warm-sidebar: #f0f0ed;
  --zy-warm-ink: #171716;
  --zy-warm-copy: #62625d;
  --zy-warm-faint: #8c8c85;
  --zy-warm-line: #deded8;
  --zy-warm-line-soft: #e9e9e4;
  --zy-warm-accent: #191918;
  --zy-warm-success: #267a55;
  --zy-warm-radius-sm: 9px;
  --zy-warm-radius-md: 16px;
  --zy-warm-radius-lg: 24px;
  --zy-warm-shadow: 0 18px 50px rgba(23, 23, 22, .07);
  --zy-warm-shadow-soft: 0 6px 22px rgba(23, 23, 22, .05);
  --zy-warm-display: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### Usage

| Role | Token | Use |
| --- | --- | --- |
| Page background | `--zy-warm-bg` | Public pages, workspace canvas |
| Elevated surface | `--zy-warm-surface` | Cards, panels, composer |
| Muted surface | `--zy-warm-muted` | Sidebar, controls, empty states |
| Primary text | `--zy-warm-ink` | Headings and primary actions |
| Secondary text | `--zy-warm-copy` | Body copy and supporting labels |
| Tertiary text | `--zy-warm-faint` | Metadata and quiet labels |
| Border | `--zy-warm-line` | Structural boundaries |
| Soft border | `--zy-warm-line-soft` | Dividers and low-emphasis framing |
| Primary action | `--zy-warm-accent` | Publish, create, upgrade |

## Geometry

- Small controls: 8–10px radius.
- Inputs and compact cards: 9–12px radius.
- Medium cards and panels: 16px radius.
- Feature containers and prompt composers: 20–24px radius.
- Use 1px warm-gray borders. Prefer border and surface tone over elevation.
- Reserve shadows for floating composers, popovers, AI panels, and temporary overlays.

## Typography

Use the existing Inter/system stack. Headings use tight tracking and compact
line-height; body copy stays neutral and readable. Use uppercase labels only
for short metadata/kickers. Avoid decorative fonts and excessive weight changes.

## Shared interaction rules

- Every actionable element has default, hover, active, focus-visible,
  disabled, and loading states where applicable.
- Keep focus indicators visible and keyboard reachable.
- Keep touch targets at least 44px on mobile where practical.
- Use 150–250ms transitions for controls and 300–450ms only for larger panel
  or section transitions.
- Respect `prefers-reduced-motion` and render the final state without movement.
- Never use emojis as interface icons; use the existing outline icon family.
- Avoid hover transforms that change layout geometry.

## Surface-specific composition

### Landing

Use a restrained nav, large centered hero, prompt-first product interaction,
quiet product previews, editorial capability sections, honest proof, FAQ, and
an uncluttered final CTA. Keep all claims and examples grounded in real Zylora
functionality.

### Dashboard

Use a roughly 240px desktop sidebar, a thin top bar, a centered prompt-first
home, real website cards, live credit/resource state, and a compact account
popover. On mobile the sidebar becomes a sheet and the website rail becomes a
touch-friendly horizontal scroller.

### Studio

Keep the existing editor engine and commands. Apply the same warm surfaces and
border language to the top bar, tool rail, left panels, canvas, floating
controls, and right AI panel. Do not move business logic into the skin.

## Responsive checkpoints

Validate at 1440, 1280, 1024, 768, 430, 390, 375, and 360px. There must be no
accidental horizontal page overflow, clipped CTA text, unreachable controls,
or panels that cover the editor without a close path.

## Accessibility and performance

Use semantic landmarks, explicit labels, `aria-expanded` for toggles, and
focus-visible states. Keep below-fold media lazy where the existing page
supports it. Do not trade Studio interaction performance for decorative motion.
