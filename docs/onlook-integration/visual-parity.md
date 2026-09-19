# Zylora Code Studio — Strict Onlook Visual Parity Matrix

**Pinned Upstream Reference**: Onlook (`vendor/onlook`) at commit `423e2e924366419e418ee049093872d535eea41a`.  
**Target Engine**: Zylora Code Studio (`studio_engine === 'code'`).  
**Certification Standard**: Section 69 strict visual and functional parity.

---

## 1. Upstream Layout & Geometry Specifications

| Subsystem | Upstream Element / Path | Upstream Spec | Zylora Code Studio Parity Spec | Tolerance |
| :--- | :--- | :--- | :--- | :--- |
| **Shell Root** | `_components/main.tsx` | `h-screen w-screen flex select-none relative overflow-hidden` | Absolute full-screen flex shell `100vw × 100vh` | Exact |
| **TopBar Height** | `top-bar/index.tsx` | `h-10` (40px), `bg-background-onlook/60 backdrop-blur-xl border-b border-border` | Exactly 40px height, `rgba(26,26,26,0.6)` blur, bottom border `#1f1f1f` | ±1px |
| **TopBar Breadcrumb** | `top-bar/project-breadcrumb.tsx` | Logo `w-9 h-9`, project name truncate, `/` separator, branch selector | Zylora Mark `h-7 w-7`, `{siteId}`, `/`, `main` pill | ±1px |
| **TopBar Mode Toggle** | `top-bar/mode-toggle.tsx` | `ToggleGroup` `h-7`, items px-4 py-2, animated top line indicator `h-0.5 bg-foreground` | Design / Code / Preview pill toggle with active top indicator line | ±1px |
| **TopBar Publish** | `top-bar/publish/trigger-button.tsx` | `h-8 px-3 rounded-md`, globe icon, live teal badge / deploying spinner | `h-8 px-3 rounded-md`, globe icon, "Publish" / "Publishing" / "Live" | ±1px |
| **Left Rail (Icons)** | `left-panel/design-panel/index.tsx` | `w-20` (80px), tabs `w-16 h-16 rounded-xl flex flex-col items-center justify-center` | Exactly 80px width, 64x64px rounded tab buttons | ±1px |
| **Left Content Panel** | `left-panel/design-panel/index.tsx` | `w-[280px] bg-background/95 rounded-xl border backdrop-blur-xl shadow overflow-auto` | Exactly 280px drawer flyout with backdrop-blur and border `#1f1f1f` | ±2px |
| **EditorBar** | `editor-bar/index.tsx` | Centered floating pill anchored at `top-10 z-49`, `rounded-xl backdrop-blur drop-shadow-xl border-[0.5px]` | Centered floating pill at top 40px, rounded-xl, backdrop-blur, section groups | ±2px |
| **Right Panel** | `right-panel/index.tsx` | `w-[352px]` (default), `bg-background/95 group/panel border-[0.5px] backdrop-blur-xl shadow rounded-tl-xl` | Exactly 352px width, rounded-tl-xl, backdrop blur, dark borders | ±2px |
| **Inspector Inputs** | `right-panel/chat-tab/` & inputs | Height 28px (`h-7`), font 12px, border `#1f1f1f`, dark surface `#141414` | Height 28px, compact labels, dark input surfaces, blue focus ring | ±1px |
| **Canvas Viewport** | `canvas/index.tsx` | Background `bg-background-onlook` (`#1a1a1a` / `#101010`) | Dark background `#101010`, centered device artboard | Exact |
| **Device Frames** | `canvas/frame/index.tsx` | Desktop (1440×900), Tablet (768×1024), Mobile (375×812), box shadow | Exact dimensions, scaled with zoom, realistic device shadow | ±1px |
| **Selection Overlay** | `canvas/overlay/elements/rect/click.tsx` | 2px solid `#3b82f6`, 4 corner square handles, tag badge `<tag> W×H` | Exact blue stroke, 7x7px corner handles, element badge pill | ±1px |
| **Bottom Bar** | `bottom-bar/index.tsx` | Floating centered dock `bottom-4` or docked bottom-bar | Floating pill with status dot and resolution readout | ±2px |

---

## 2. Design Tokens Comparison

```css
/* Upstream Onlook Tokens (vendor/onlook/packages/ui/src/globals.css) */
--background-onlook: 0 0% 10%;        /* #1a1a1a */
--background-primary: 0 0% 10%;       /* #1a1a1a */
--background-secondary: 0 0% 12%;     /* #1f1f1f */
--background-tertiary: 0 0% 20%;      /* #333333 */
--foreground-primary: 0 0% 100%;      /* #ffffff */
--foreground-secondary: 0 0% 67%;     /* #acacac */
--foreground-tertiary: 0 0% 57%;      /* #929292 */
--border: 0 0% 12%;                   /* #1f1f1f */
--border-active: 0 0% 47%;            /* #787878 */
--border-hover: 0 0% 38%;             /* #606060 */
--accent: 206 100% 53%;               /* #109BFF / #3b82f6 */
--radius: 0.5rem;                     /* 8px */
```
