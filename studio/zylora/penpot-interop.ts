export interface ZyloraSemanticManifest {
    [penpotShapeId: string]: {
        zyloraType: 'booking' | 'contact_form' | 'navbar' | 'cms_collection';
        config: Record<string, any>;
    };
}

export class PenpotInteropBridge {
    private onSelectionChangeCallback?: (shapeIds: string[]) => void;
    private onSaveCallback?: (visualGraphEDN: string, manifest: ZyloraSemanticManifest) => void;
    private manifest: ZyloraSemanticManifest = {};

    /**
     * Initializes the Penpot workspace within a DOM node.
     * This calls the mounted ClojureScript function from `app.main.ui.workspace`.
     */
    public mountWorkspace(containerId: string, initialEDN: string | null) {
        if (!(window as any).PENPOT_WORKSPACE) {
            console.error("Penpot Workspace bundle not loaded. Ensure penpot-workspace.js is built.");
            return;
        }

        // Initialize the actual CLJS workspace
        (window as any).PENPOT_WORKSPACE.mount(containerId, initialEDN, {
            onSelection: (shapes: string[]) => {
                this.onSelectionChangeCallback?.(shapes);
            },
            onAutosave: (newEDN: string) => {
                this.onSaveCallback?.(newEDN, this.manifest);
            }
        });
    }

    /**
     * Replaces the native Penpot right sidebar with Zylora's Semantic Inspector.
     */
    public registerSemanticInspector(callback: (shapeIds: string[]) => void) {
        this.onSelectionChangeCallback = callback;
    }

    /**
     * Replaces the native Penpot WebSocket Sync (Sente) with Zylora's FastAPI HTTP Sync.
     */
    public registerSaveHandler(callback: (edn: string, manifest: ZyloraSemanticManifest) => void) {
        this.onSaveCallback = callback;
    }

    public updateManifest(shapeId: string, zyloraType: ZyloraSemanticManifest[string]['zyloraType'], config: Record<string, any>) {
        this.manifest[shapeId] = { zyloraType, config };
    }
}

export const penpotInterop = new PenpotInteropBridge();
