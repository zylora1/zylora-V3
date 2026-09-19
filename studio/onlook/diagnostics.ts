/**
 * Runtime Provenance & Diagnostic Registry for Transplanted Onlook OSS Subsystems in Zylora Studio.
 *
 * Tracks subsystem mount lifecycles, MobX EditorEngine store readiness, Penpal handshake,
 * and AST code transformations.
 */

export type OnlookEventName =
  | 'ONLOOK_SHELL_MOUNTED'
  | 'ONLOOK_CANVAS_MOUNTED'
  | 'ONLOOK_LAYERS_MOUNTED'
  | 'ONLOOK_COMPONENTS_MOUNTED'
  | 'ONLOOK_DESIGN_PANEL_MOUNTED'
  | 'ONLOOK_CODE_PANEL_MOUNTED'
  | 'ONLOOK_EDITOR_STORE_READY'
  | 'ONLOOK_PENPAL_CONNECTED';

export interface OnlookDiagnosticEvent {
  event: OnlookEventName;
  timestamp: number;
  payload?: any;
}

export interface SubsystemStatus {
  mounted: boolean;
  timestamp?: number;
  details?: any;
}

export interface OnlookDiagnosticsRegistry {
  events: OnlookDiagnosticEvent[];
  subsystems: {
    EditorEngine: SubsystemStatus;
    Canvas: SubsystemStatus;
    Layers: SubsystemStatus;
    Components: SubsystemStatus;
    DesignPanel: SubsystemStatus;
    CodePanel: SubsystemStatus;
    EditorBar: SubsystemStatus;
    ASTParser: SubsystemStatus;
    Penpal: SubsystemStatus;
    [key: string]: SubsystemStatus;
  };
  store: any;
  astParser: any;
  version: string;
  provenance: Record<string, string>;
  emit: (event: OnlookEventName, payload?: any) => void;
  hasEvent: (event: OnlookEventName) => boolean;
  clear: () => void;
}

declare global {
  interface Window {
    __ONLOOK_DIAGNOSTICS__?: OnlookDiagnosticsRegistry;
  }
}

export function initOnlookDiagnostics(store?: any, astParser?: any): OnlookDiagnosticsRegistry {
  if (typeof window === 'undefined') {
    return {} as any;
  }

  if (!window.__ONLOOK_DIAGNOSTICS__) {
    const registry: OnlookDiagnosticsRegistry = {
      events: [],
      subsystems: {
        EditorEngine: { mounted: false },
        Canvas: { mounted: false },
        Layers: { mounted: false },
        Components: { mounted: false },
        DesignPanel: { mounted: false },
        CodePanel: { mounted: false },
        EditorBar: { mounted: false },
        ASTParser: { mounted: !!astParser, timestamp: Date.now(), details: astParser ? 'Babel AST Transformer' : undefined },
        Penpal: { mounted: false },
      },
      store: store || null,
      astParser: astParser || null,
      version: 'onlook-oss-transplant-v1',
      provenance: {
        EditorEngine: 'studio/onlook/core/engine.ts -> vendor/onlook/apps/web/client/src/components/store/editor/engine.ts',
        Canvas: 'studio/onlook/editor/canvas -> vendor/onlook/apps/web/client/src/app/project/[id]/_components/canvas',
        Layers: 'studio/onlook/editor/left-panel/design-panel/layers-tab -> vendor/onlook/apps/web/client/src/app/project/[id]/_components/left-panel/design-panel/layers-tab',
        Components: 'studio/onlook/editor/left-panel/design-panel/brand-tab -> vendor/onlook/apps/web/client/src/app/project/[id]/_components/left-panel/design-panel/brand-tab',
        EditorBar: 'studio/onlook/editor/editor-bar -> vendor/onlook/apps/web/client/src/app/project/[id]/_components/editor-bar',
        ASTParser: 'studio/onlook/parser -> vendor/onlook/packages/parser',
        Penpal: '@onlook/penpal -> vendor/onlook/packages/penpal',
        CodeProvider: 'studio/onlook/code-provider -> vendor/onlook/packages/code-provider',
        FileSystem: 'studio/onlook/file-system -> vendor/onlook/packages/file-system',
      },
      emit(event: OnlookEventName, payload?: any) {
        const item: OnlookDiagnosticEvent = {
          event,
          timestamp: Date.now(),
          payload,
        };
        this.events.push(item);

        // Map lifecycle event to subsystem status
        switch (event) {
          case 'ONLOOK_EDITOR_STORE_READY':
            this.subsystems.EditorEngine = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_SHELL_MOUNTED':
            this.subsystems.EditorBar = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_CANVAS_MOUNTED':
            this.subsystems.Canvas = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_LAYERS_MOUNTED':
            this.subsystems.Layers = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_COMPONENTS_MOUNTED':
            this.subsystems.Components = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_DESIGN_PANEL_MOUNTED':
            this.subsystems.DesignPanel = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_CODE_PANEL_MOUNTED':
            this.subsystems.CodePanel = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
          case 'ONLOOK_PENPAL_CONNECTED':
            this.subsystems.Penpal = { mounted: true, timestamp: item.timestamp, details: payload };
            break;
        }

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent(event, { detail: item }));
        }
        console.log(`[Onlook Provenance Diagnostic] ${event}`, payload || '');
      },
      hasEvent(event: OnlookEventName) {
        return this.events.some((e) => e.event === event);
      },
      clear() {
        this.events = [];
      },
    };
    window.__ONLOOK_DIAGNOSTICS__ = registry;
  }

  if (store) {
    window.__ONLOOK_DIAGNOSTICS__.store = store;
  }
  if (astParser) {
    window.__ONLOOK_DIAGNOSTICS__.astParser = astParser;
    window.__ONLOOK_DIAGNOSTICS__.subsystems.ASTParser = { mounted: true, timestamp: Date.now(), details: 'Babel AST Transformer' };
  }

  return window.__ONLOOK_DIAGNOSTICS__;
}

export const emitOnlookEvent = (event: OnlookEventName, payload?: any) => {
  const diag = initOnlookDiagnostics();
  diag.emit(event, payload);
};
