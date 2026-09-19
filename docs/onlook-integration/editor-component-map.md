# Zylora Code Studio — Upstream Onlook Editor Component Map

**Pinned Upstream Reference**: Onlook OSS commit `423e2e924366419e418ee049093872d535eea41a` (`vendor/onlook`)  
**Scope**: Complete visible editor tree inspection rooted at `apps/web/client/src/app/project/[id]/`  
**Classification System**:
- `DIRECT_ONLOOK_REUSE`: Transplanted directly from upstream without logic changes.
- `ADAPTED_ONLOOK_REUSE`: Upstream component adapted with Zylora service providers/adapters (e.g. auth, publish, filesystem, sandbox).
- `ZYLORA_REPLACEMENT_REQUIRED`: Subsystem genuinely absent in pinned OSS or strictly reserved for Zylora platform authority.
- `REMOVE_CUSTOM_ZYLORA`: Custom Zylora UI duplicate that must be permanently removed.

---

## 1. Complete Visible Editor Component Tree & Dependency Analysis

| Component / Subsystem | Upstream Source Path | Dependencies | Store Dependencies | Cloud/SaaS Dependencies | Browser/Runtime Dependencies | Transplant Status | Current Zylora Equivalent | Planned Action |
|---|---|---|---|---|---|:---:|---|---|
| **Project Editor Root** | `apps/web/client/src/app/project/[id]/_components/main.tsx` | `@onlook/ui/tooltip`, `@onlook/ui/button`, `@onlook/ui/icons` | `useEditorEngine` (`EditorEngine`), `EditorMode` | None (tRPC project bootstrap adapted) | React 19, DOM wheel listener | Transplanted (`studio/onlook/editor/main.tsx`) | Custom shell in `ZyloraOnlookStudio.tsx` | **ADAPTED_ONLOOK_REUSE** (Mount as root UI inside `ZyloraOnlookStudio`) |
| **TopBar Shell** | `apps/web/client/src/app/project/[id]/_components/top-bar/index.tsx` | `ProjectBreadcrumb`, `BranchDisplay`, `ModeToggle`, `Members`, `PublishButton` | `EditorEngine` (undo/redo, history), `StateManager` | Supabase user avatar (adapted to ZyloraUser) | CSS backdrop-blur, Flexbox | Transplanted (`studio/onlook/editor/top-bar/index.tsx`) | Custom TopBar in `ZyloraOnlookStudio.tsx` | **ADAPTED_ONLOOK_REUSE** (Remove custom TopBar, mount real Onlook TopBar) |
| **TopBar Breadcrumbs** | `apps/web/client/src/app/project/[id]/_components/top-bar/project-breadcrumb.tsx` | `@onlook/ui/dropdown-menu`, icons | `EditorEngine` (project metadata) | Supabase project API | Dropdown menu | Transplanted (`studio/onlook/editor/top-bar/project-breadcrumb.tsx`) | Hardcoded breadcrumbs | **ADAPTED_ONLOOK_REUSE** (Wire to `ZyloraProjectAdapter`) |
| **TopBar Mode Toggle** | `apps/web/client/src/app/project/[id]/_components/top-bar/mode-toggle.tsx` | `@onlook/ui/toggle-group`, icons | `EditorEngine.state.editorMode` | None | Animated slider pill | Transplanted (`studio/onlook/editor/top-bar/mode-toggle.tsx`) | Custom mode pill buttons | **DIRECT_ONLOOK_REUSE** |
| **TopBar Publish** | `apps/web/client/src/app/project/[id]/_components/top-bar/publish/index.tsx` | `trigger-button.tsx`, `dropdown/` | `HostingProvider`, `EditorEngine` | Freestyle hosting (adapted to Zylora Publisher) | Popover / Button | Transplanted (`studio/onlook/editor/top-bar/publish`) | Custom publish button | **ADAPTED_ONLOOK_REUSE** (Wire to `ZyloraPublishAdapter`) |
| **LeftPanel Shell** | `apps/web/client/src/app/project/[id]/_components/left-panel/index.tsx` | `DesignPanel`, `CodePanel` | `EditorEngine.state.editorMode` | None | Flexbox / Resizable | Transplanted (`studio/onlook/editor/left-panel/index.tsx`) | Custom Left Rail & Drawer | **DIRECT_ONLOOK_REUSE** |
| **DesignPanel (Two-Tier)** | `apps/web/client/src/app/project/[id]/_components/left-panel/design-panel/index.tsx` | Rail (80px `w-20`), Drawer (280px `w-[280px]`), ZoomControls | `EditorEngine.state.leftPanelTab`, `leftPanelLocked` | None | Mouse hover/lock | Transplanted (`studio/onlook/editor/left-panel/design-panel/index.tsx`) | Custom 80px Rail + 280px Drawer | **DIRECT_ONLOOK_REUSE** (Mount upstream DesignPanel) |
| **Layers Tab & Tree** | `.../left-panel/design-panel/layers-tab/index.tsx` & `tree/` | `@onlook/ui`, tree item components | `EditorEngine.elements`, `EditorEngine.ast` | None | Drag/drop tree reorder | Transplanted (`studio/onlook/editor/left-panel/design-panel/layers-tab`) | Custom recursive layer rows | **DIRECT_ONLOOK_REUSE** (Mount upstream Layers tree) |
| **Components Browser** | No matching Components browser in the pinned editor tree | Component discovery and insertion card list | `EditorEngine.insert`, `EditorEngine.ast`, Zylora workspace adapter | None | Insert into frame | Zylora-owned (`studio/onlook/editor/left-panel/design-panel/components-tab`) | Zylora component discovery UI | **ZYLORA_REPLACEMENT_REQUIRED** (documented replacement; must not be described as upstream UI) |
| **Pages Tab** | `.../left-panel/design-panel/page-tab/index.tsx` | Page list, route switcher | `EditorEngine.pages` | None | Route navigation | Transplanted (`studio/onlook/editor/left-panel/design-panel/page-tab`) | Custom pages list | **ADAPTED_ONLOOK_REUSE** (Wire to Zylora page routes) |
| **Canvas & Viewport** | `apps/web/client/src/app/project/[id]/_components/canvas/index.tsx` | `frames.tsx`, `recenter-canvas-button.tsx`, `hotkeys/` | `EditorEngine.canvas`, `EditorEngine.frames` | None | Viewport pan, zoom, pinch gesture | Transplanted (`studio/onlook/editor/canvas/index.tsx`) | Custom canvas div & iframe | **ADAPTED_ONLOOK_REUSE** (Mount upstream Canvas & frames) |
| **Canvas Frame** | `apps/web/client/src/app/project/[id]/_components/canvas/frame/index.tsx` | `gesture.tsx`, `resize-handles.tsx`, `top-bar/` | `EditorEngine.frames`, `EditorEngine.canvas` | Freestyle preview (adapted to Zylora sandbox preview URL) | `<iframe>`, Penpal postMessage | Transplanted (`studio/onlook/editor/canvas/frame/index.tsx`) | Custom iframe wrapper | **ADAPTED_ONLOOK_REUSE** (Wire sandbox preview URL) |
| **Selection Overlay Chrome** | `.../canvas/overlay/elements/rect/click.tsx` | 2px `#3b82f6` border, 4 corner handles, `<tag> W×H` badge | `EditorEngine.overlay`, `EditorEngine.elements.selected` | None | SVG/DOM overlay rects | Transplanted (`studio/onlook/editor/canvas/overlay/elements/rect/click.tsx`) | Custom CSS `.zylora-selection-overlay` | **DIRECT_ONLOOK_REUSE** (Mount upstream overlay) |
| **Hover Overlay Chrome** | `.../canvas/overlay/elements/rect/hover.tsx` | Hover boundary border, element label | `EditorEngine.overlay`, `EditorEngine.elements.hovered` | None | DOM overlay rects | Transplanted (`studio/onlook/editor/canvas/overlay/elements/rect/hover.tsx`) | Custom hover state | **DIRECT_ONLOOK_REUSE** |
| **Measurement & Guidelines** | `.../canvas/overlay/elements/measurement.tsx`, `snap-guidelines.tsx` | Distance lines, snap guides | `EditorEngine.overlay` | None | SVG guide rendering | Transplanted (`studio/onlook/editor/canvas/overlay/elements`) | None | **DIRECT_ONLOOK_REUSE** |
| **EditorBar Floating Pill** | `apps/web/client/src/app/project/[id]/_components/editor-bar/index.tsx` | `text-selected.tsx`, `div-selected.tsx`, `img-selected.tsx`, `dropdowns/` | `EditorEngine.elements.selected`, `EditorEngine.style` | None | Anchored floating pill at `top-10` | Transplanted (`studio/onlook/editor/editor-bar/index.tsx`) | Custom `.zylora-onlook-editorbar` | **ADAPTED_ONLOOK_REUSE** (Wire actions to Zylora AST style mutator) |
| **RightPanel Shell** | `apps/web/client/src/app/project/[id]/_components/right-panel/index.tsx` | `chat-tab/index.tsx`, Inspector tabs | `EditorEngine.state.editorMode`, `EditorEngine.chat` | None | 352px width, `rounded-tl-xl` | Transplanted (`studio/onlook/editor/right-panel/index.tsx`) | Custom `.zylora-onlook-rightpanel` | **ADAPTED_ONLOOK_REUSE** (Mount upstream RightPanel) |
| **Design Controls / Inspector** | `apps/web/client/src/app/project/[id]/_components/right-panel/` | Typography, spacing, layout, color, border, size controls | `EditorEngine.style`, `EditorEngine.elements` | None | Form controls | Transplanted (`studio/onlook/editor/right-panel`) | Custom input fields | **ADAPTED_ONLOOK_REUSE** (Wire to AST style mutations) |
| **AI Chat Tab** | `apps/web/client/src/app/project/[id]/_components/right-panel/chat-tab/index.tsx` | Conversation message list, prompt input, model selector | `EditorEngine.chat` | Onlook cloud LLM (adapted to ZyloraAIAdapter) | Streaming chat UI | Transplanted (`studio/onlook/editor/right-panel/chat-tab`) | Custom AI view | **ADAPTED_ONLOOK_REUSE** (Wire to `ZyloraAIAdapter`) |
| **BottomBar** | `apps/web/client/src/app/project/[id]/_components/bottom-bar/index.tsx` | `restart-sandbox-button.tsx`, `terminal-area.tsx`, `terminal.tsx` | `EditorEngine.sandbox` | None | Docked status bar / terminal | Transplanted (`studio/onlook/editor/bottom-bar/index.tsx`) | Custom floating dock | **ADAPTED_ONLOOK_REUSE** (Wire to `ZyloraSandboxAdapter`) |
| **Code UI** | `apps/web/client/src/app/project/[id]/_components/left-panel/code-panel/code-tab/index.tsx` | `@codemirror/view`, `file-tabs.tsx`, `file-tree.tsx` | `EditorEngine.branches`, `@onlook/file-system` | None | CodeMirror editor | Transplanted (`studio/onlook/editor/left-panel/code-panel`) | Custom textarea editor | **ADAPTED_ONLOOK_REUSE** (Wire to `ZyloraCodeFileSystemAdapter`) |
| **UI Primitives (Radix)** | `packages/ui/src/components/*` | `@radix-ui/react-*`, Tailwind classes | None | None | Tooltip, Popover, Menu, Button, Input | Transplanted (`studio/onlook/ui/components`) | Generic HTML controls | **DIRECT_ONLOOK_REUSE** |
| **Editor Stores & Engine** | `apps/web/client/src/components/store/editor/*` | `EditorEngine`, `StateManager`, MobX observables | None | None | Single source of truth for UI state | Transplanted (`studio/onlook/core`) | Dual state in React hooks | **DIRECT_ONLOOK_REUSE** |
| **Penpal Bridge** | `packages/penpal/src/*` | `connect()`, `WindowMessenger` | `EditorEngine.frameEvents` | None | `postMessage` protocol | Transplanted (`studio/onlook/penpal`) | Custom Penpal setup | **ADAPTED_ONLOOK_REUSE** (Preserve verified handshake) |
| **AST Parser & Mutator** | `packages/parser/src/*` | `@babel/parser`, `@babel/traverse`, `@babel/generator` | None | None | Source-to-AST parsing and mutation | Transplanted (`studio/onlook/parser`, `ast-actions.ts`) | AST helper functions | **DIRECT_ONLOOK_REUSE** |

---

## 2. Summary of Component Classifications

- **DIRECT_ONLOOK_REUSE** (11 subsystems):
  1. TopBar Mode Toggle
  2. LeftPanel Shell
  3. DesignPanel Two-Tier Navigation
  4. Layers Tab & Tree Hierarchy
  5. Selection Overlay Chrome (2px border, handles, tag badge)
  6. Hover Overlay Chrome
  7. Measurement & Snap Guidelines
  8. UI Primitives (Buttons, Menus, Popovers, Tooltips, Dialogs)
  9. Editor Stores & MobX Engine (`EditorEngine`, `StateManager`)
  10. AST Parser (`@onlook/parser`)
  11. Device Preset Geometries

- **ADAPTED_ONLOOK_REUSE** (13 subsystems):
  1. Project Editor Root (`Main`) -> Mounted in `ZyloraOnlookStudio` with Zylora adapters
  2. TopBar Shell -> Connected to `ZyloraAuthAdapter` and `ZyloraProjectAdapter`
  3. TopBar Breadcrumbs -> Displays Zylora project identity
  4. TopBar Publish Button -> Calls `ZyloraPublishAdapter` instead of Freestyle
  5. Components Browser -> Connected to Zylora component discovery & AST insertion
  6. Pages Tab -> Connected to Zylora site route list
  7. Canvas & Viewport -> Receives Zylora sandbox preview URL
  8. Canvas Frame -> Hosts Zylora Vite sandbox iframe with Penpal bridge
  9. EditorBar Floating Pill -> Mutates real source via AST actions on disk
  10. RightPanel & Design Controls -> Updates project JSX via AST actions on disk
  11. AI Chat Tab -> Routes LLM prompts through `ZyloraAIAdapter`
  12. BottomBar -> Reflects Zylora sandbox runtime status
  13. Code UI -> Reads/writes files via `ZyloraCodeFileSystemAdapter`

- **ZYLORA_REPLACEMENT_REQUIRED** (1 subsystem):
  The pinned Onlook tree has no matching Components browser. Zylora's component discovery/insertion panel is an explicit replacement and is tracked separately from upstream-derived surfaces.

- **REMOVE_CUSTOM_ZYLORA** (All custom editor chrome):
  1. Custom TopBar JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  2. Custom Left Rail & Drawer JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  3. Custom Layers list JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  4. Custom Components card JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  5. Custom Floating EditorBar JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  6. Custom RightPanel Inspector JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  7. Custom Selection Chrome CSS in `static/zylora-onlook-studio.css` -> **REMOVED**
  8. Custom BottomBar JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
  9. Custom full-view Code panel JSX in `ZyloraOnlookStudio.tsx` -> **REMOVED**
