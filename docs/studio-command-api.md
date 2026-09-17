# Zylora Studio Command API Specification

## 1. Purpose & Guarantees
The Zylora Studio Command API is the single authoritative mutation interface for all document changes. It mediates:
1. Direct human interactions in the Studio UI (dragging, resizing, typing, property edits).
2. Zylora AI orchestration and assistant commands.
3. Automated test assertions and batch migrations.
4. Future external AI / MCP integrations.

Direct manipulation of raw state or unsanitized document objects is strictly prohibited.

The browser implementation is the `EXECUTE_COMMAND` envelope in
`studio/engine/commands.ts`. `studio/zylora/commands/commandRegistry.ts` is a
thin adapter for named AI/migration/external commands; it delegates to the same
envelope and reducer rather than maintaining another store. The server-side
equivalent is `app/studio_mutations.py` plus `apply_v4_operations`, which adds
authorization, validation, revision CAS, history and audit persistence.

---

## 2. Command Pipeline & Execution Contract

Every command follows the formal lifecycle:
1. **Validation**: The command payload is validated against JSON schema and type rules. Invalid inputs are rejected immediately with descriptive errors. Browser commands pass `validateStudioCommand`; server/AI/external operations pass the canonical Pydantic document and operation validators.
2. **Authorization & Lock Checking**: Verifies the active user owns the site and checks that targeted nodes are not locked (`node.metadata.locked !== true`).
3. **Transaction Context**: Commands can execute individually or be grouped into a composite transaction (e.g., an AI command modifying multiple nodes). AI snapshots are applied through one command envelope so the visible edit is one undo step.
4. **Deterministic Mutation**: A pure reducer applies the change to produce the next `SiteDocument`.
5. **History Recording**: An undoable delta is appended to `editor-core/history.ts`. Composite operations (such as AI edits) record as a single atomic undo step.
6. **Provenance Logging**: When triggered by AI or external tools, metadata is carried in the command envelope (`actor`, `timestamp`, `model`, `requestId`, and `affectedNodeIds`) and the server records the authoritative audit event.

No plugin runtime, iframe, external workspace global or Penpot MCP bridge is
required for ordinary editing or AI changes.

---

## 3. Core Command Registry

### 3.1 Page Operations
- `createPage({ name: string, slug: string }): string`
- `renamePage({ pageId: string, name: string, slug?: string }): void`
- `deletePage({ pageId: string }): void`
- `duplicatePage({ pageId: string }): string`
- `setPageSEO({ pageId: string, title?: string, description?: string, ogImage?: string }): void`

### 3.2 Node Lifecycle & Hierarchy
- `createNode({ parentId: string, node: Partial<Node> }): string`
- `deleteNode({ nodeId: string }): void`
- `duplicateNode({ nodeId: string }): string`
- `reparentNode({ nodeId: string, newParentId: string, index?: number }): void`
- `groupNodes({ nodeIds: string[] }): string`
- `ungroupNodes({ groupId: string }): string[]`
- `reorderNode({ nodeId: string, direction: 'forward' | 'backward' | 'front' | 'back' }): void`
- `setNodeLock({ nodeId: string, locked: boolean }): void`

### 3.3 Geometry & Transforms
- `moveNode({ nodeId: string, x: number, y: number }): void`
- `resizeNode({ nodeId: string, width: number, height: number, lockAspectRatio?: boolean }): void`
- `rotateNode({ nodeId: string, rotation: number }): void`
- `batchTransform({ mutations: Array<{ nodeId: string, geometry: Partial<NodeGeometry> }> }): void`

### 3.4 Visual Appearance & Typography
- `setText({ nodeId: string, text: string, runs?: TextRun[] }): void`
- `setTypography({ nodeId: string, fontFamily?: string, fontSize?: string, fontWeight?: string, color?: string, textAlign?: string, lineHeight?: string, letterSpacing?: string }): void`
- `setFill({ nodeId: string, background: string, gradient?: Gradient }): void`
- `setStroke({ nodeId: string, borderColor: string, borderWidth: string, borderStyle?: string }): void`
- `setRadius({ nodeId: string, borderRadius: string }): void`
- `setShadow({ nodeId: string, boxShadow: string }): void`
- `setOpacity({ nodeId: string, opacity: number }): void`

### 3.5 Layout Modes (Freeform vs Flex/Grid)
- `setLayoutMode({ nodeId: string, mode: 'freeform' | 'flex' | 'grid' }): void`
- `setFlexProperties({ nodeId: string, direction?: 'row' | 'column', gap?: number, wrap?: boolean, justify?: string, align?: string }): void`
- `setGridProperties({ nodeId: string, columns?: number | string, rows?: number | string, columnGap?: number, rowGap?: number }): void`

### 3.6 Media & Image Framing
- `setImage({ nodeId: string, src: string, alt?: string, assetId?: string }): void`
- `setImageCrop({ nodeId: string, crop: { x: number, y: number, scale: number } }): void`
- `setImageFit({ nodeId: string, objectFit: 'cover' | 'contain' | 'fill' }): void`

### 3.7 Website Semantics & Bindings
- `setSemanticType({ nodeId: string, zyloraType: string }): void`
- `setAction({ nodeId: string, action: NodeAction }): void`
- `bindForm({ nodeId: string, formConfig: { schema: any, leadSource: string, successMessage: string } }): void`
- `bindBooking({ nodeId: string, bookingConfig: { serviceId: string, calendarId: string } }): void`
- `bindCMS({ nodeId: string, collectionId: string, fieldMappings: Record<string, string> }): void`

### 3.8 Responsive Overrides
- `setResponsiveOverride({ nodeId: string, breakpoint: 'tablet' | 'mobile', override: BreakpointOverride }): void`
- `clearResponsiveOverride({ nodeId: string, breakpoint: 'tablet' | 'mobile', propertyKey?: string }): void`

### 3.9 History & Transactions
- `beginTransaction(description: string): void`
- `commitTransaction(): void`
- `rollbackTransaction(): void`
- `undo(): void`
- `redo(): void`
