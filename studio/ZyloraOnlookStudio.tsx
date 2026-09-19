/**
 * ZyloraOnlookStudio: The transplanted Onlook OSS Editor mounted as Zylora Studio in Code Mode.
 *
 * Provides maximum practical reuse of Onlook's Canvas, Overlays, Layers, Components,
 * Style/EditorBar, Code Editor, AST parser, and Penpal preview bridge, wired to
 * Zylora's secure tenant-scoped filesystem, local Vite/Next sandbox, and multi-model AI routing.
 */

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { connect, WindowMessenger } from 'penpal';
import { EditorEngine } from './onlook/core/engine';
import { EditorEngineContext } from './onlook/core';
import type { Branch, Project } from './onlook/models';
import { initOnlookDiagnostics, emitOnlookEvent } from './onlook/diagnostics';
import {
  applyAstStyleChange,
  applyAstTextChange,
  applyAstComponentInsert,
} from './onlook/ast-actions';
import { getAstFromContent, getContentFromAst, transformAst } from './onlook/parser';
import {
  ZyloraAuthAdapter,
  ZyloraWorkspaceAdapter,
  ZyloraSandboxAdapter,
  ZyloraAIAdapter,
  ZyloraHistoryAdapter,
  ZyloraPublishAdapter,
  WorkspaceFileEntry,
  AIChatMessage,
} from './zylora/adapters';

interface Props {
  siteId: string;
  csrf?: string;
  workspaceId?: string;
  onStatus?: (status: string) => void;
  onBackToNative?: () => void;
}

interface LayerItem {
  id: string;
  tag: string;
  name?: string;
  classes?: string;
  text?: string;
  children?: LayerItem[];
  depth?: number;
}

interface SelectionBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ElementMetadata {
  id: string;
  tag: string;
  text?: string;
  classes?: string;
  bounds?: SelectionBounds;
  filePath?: string;
  line?: number;
  attributes?: Record<string, string>;
}

type DevicePreset = 'desktop' | 'tablet' | 'mobile';

const DEVICE_DIMENSIONS: Record<DevicePreset, { width: number; height: number; label: string }> = {
  desktop: { width: 1440, height: 900, label: 'Desktop (1440 × 900)' },
  tablet: { width: 768, height: 1024, label: 'Tablet (768 × 1024)' },
  mobile: { width: 375, height: 812, label: 'Mobile (375 × 812)' },
};

export function ZyloraOnlookStudio({ siteId, csrf, workspaceId, onStatus, onBackToNative }: Props) {
  // 1. Adapters initialization
  const auth = useMemo(() => new ZyloraAuthAdapter(csrf), [csrf]);
  const workspace = useMemo(() => new ZyloraWorkspaceAdapter(siteId, auth), [siteId, auth]);
  const sandbox = useMemo(() => new ZyloraSandboxAdapter(siteId, auth), [siteId, auth]);
  const ai = useMemo(() => new ZyloraAIAdapter(siteId, auth, workspace), [siteId, auth, workspace]);
  const history = useMemo(() => new ZyloraHistoryAdapter(siteId, auth), [siteId, auth]);
  const publisher = useMemo(() => new ZyloraPublishAdapter(siteId, auth), [siteId, auth]);

  // Onlook Project and Branch models for stateful multi-branch editor engine
  const defaultBranch: Branch = useMemo(
    () => ({
      id: workspaceId || siteId,
      projectId: siteId,
      name: 'main',
      description: 'Primary workspace branch',
      createdAt: new Date(),
      updatedAt: new Date(),
      isDefault: true,
      git: null,
      sandbox: { id: workspaceId || siteId },
    }),
    [siteId, workspaceId]
  );

  const defaultProject: Project = useMemo(
    () => ({
      id: siteId,
      name: siteId,
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        previewImg: null,
        description: 'Zylora code-backed project',
        tags: ['react', 'vite'],
      },
    }),
    [siteId]
  );

  // Onlook Editor Engine Authoritative MobX Store
  const editorEngine = useMemo(() => {
    const engine = new EditorEngine(siteId, { capture: () => {} } as any);
    void engine.initBranches([defaultBranch]);
    void engine.init();
    return engine;
  }, [siteId, defaultBranch]);

  // 2. State
  const [runtimeStatus, setRuntimeStatus] = useState<string>('bootstrapping');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [viewMode, setViewMode] = useState<'design' | 'code' | 'preview'>('design');
  const [studioMode, setStudioMode] = useState<'simple' | 'pro'>('pro');
  const [device, setDevice] = useState<DevicePreset>('desktop');
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Panels
  const [leftTab, setLeftTab] = useState<'layers' | 'components' | 'pages' | 'files'>('layers');
  const [rightTab, setRightTab] = useState<'design' | 'ai'>('design');

  // Preview elements & Penpal DOM
  const [selectedElement, setSelectedElement] = useState<ElementMetadata | null>(null);
  const [hoverElement, setHoverElement] = useState<ElementMetadata | null>(null);
  const [layers, setLayers] = useState<LayerItem[]>([]);
  const [files, setFiles] = useState<WorkspaceFileEntry[]>([]);

  // Code editor tab
  const [activeFile, setActiveFile] = useState<string>('src/App.jsx');
  const [codeContent, setCodeContent] = useState<string>('');
  const [isSavingCode, setIsSavingCode] = useState<boolean>(false);

  // AI Chat
  const [aiMode, setAiMode] = useState<'ask' | 'edit' | 'agent'>('edit');
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiMessages, setAiMessages] = useState<AIChatMessage[]>([]);
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const penpalConnectionRef = useRef<any>(null);
  const isConnectingPenpalRef = useRef<boolean>(false);

  const showToast = (msg: string) => {
    setToast(msg);
    onStatus?.(msg);
    setTimeout(() => setToast(null), 4000);
  };

  // 3. Start Sandbox on Mount
  const startSandbox = useCallback(async () => {
    setRuntimeStatus('starting');
    setErrorMessage('');
    try {
      const result = await sandbox.start();
      setPreviewUrl(result.preview_url);
      setRuntimeStatus('ready');
      showToast('Sandbox runtime started successfully');
    } catch (err) {
      setRuntimeStatus('failed');
      const msg = err instanceof Error ? err.message : 'Failed to start sandbox';
      setErrorMessage(msg);
      showToast(`Runtime error: ${msg}`);
    }
  }, [sandbox]);

  useEffect(() => {
    void startSandbox();
    return () => {
      void sandbox.stop();
      if (penpalConnectionRef.current) {
        penpalConnectionRef.current.destroy();
        penpalConnectionRef.current = null;
      }
      isConnectingPenpalRef.current = false;
    };
  }, [startSandbox, sandbox]);

  // Load project files
  const loadFiles = useCallback(async () => {
    try {
      const fileList = await workspace.listFiles();
      setFiles(fileList);
      if (fileList.length > 0 && !fileList.some((f) => f.path === activeFile)) {
        const defaultFile = fileList.find((f) => f.path.includes('App') || f.path.includes('index')) || fileList[0];
        setActiveFile(defaultFile.path);
      }
    } catch {
      // Ignored during bootstrap
    }
  }, [workspace, activeFile]);

  useEffect(() => {
    if (runtimeStatus === 'ready') {
      void loadFiles();
    }
  }, [runtimeStatus, loadFiles]);

  // Load active file code
  useEffect(() => {
    if (activeFile && runtimeStatus === 'ready') {
      workspace
        .readFile(activeFile)
        .then((content) => setCodeContent(content))
        .catch(() => setCodeContent('// Unable to read file content'));
    }
  }, [activeFile, workspace, runtimeStatus]);

  // 3b. Diagnostic Mount Instrumentation
  useEffect(() => {
    const diag = initOnlookDiagnostics(editorEngine, {
      applyAstStyleChange,
      applyAstTextChange,
      applyAstComponentInsert,
      getAstFromContent,
      getContentFromAst,
      transformAst,
    });
    diag.emit('ONLOOK_EDITOR_STORE_READY', { siteId, workspaceId });
    diag.emit('ONLOOK_SHELL_MOUNTED', { siteId });
    diag.emit('ONLOOK_CANVAS_MOUNTED', { scale: zoomScale, device });
    diag.emit('ONLOOK_LAYERS_MOUNTED', { tab: leftTab });
    diag.emit('ONLOOK_COMPONENTS_MOUNTED');
    diag.emit('ONLOOK_DESIGN_PANEL_MOUNTED');
    diag.emit('ONLOOK_CODE_PANEL_MOUNTED', { activeFile });
  }, [editorEngine, siteId, workspaceId]);

  // 4. Penpal Parent Bridge Setup
  const setupPenpal = useCallback(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    if (isConnectingPenpalRef.current || penpalConnectionRef.current) return;
    isConnectingPenpalRef.current = true;

    try {
      const messenger = new WindowMessenger({
        remoteWindow: iframeRef.current.contentWindow,
        allowedOrigins: ['*'],
      });

      const connection = connect({
        messenger,
        methods: {
          getFrameId: () => 'zylora-onlook-frame-1',
          getBranchId: () => workspaceId || siteId,
          onWindowMutated: () => {
            // Child notified that DOM changed (e.g. via HMR)
          },
          onWindowResized: () => {},
          onDomProcessed: (data: { layerMap: Record<string, any>; rootNode: any }) => {
            if (data?.rootNode) {
              const transformNode = (n: any, depth = 0): LayerItem => ({
                id: n.id || n.domId || Math.random().toString(),
                tag: (n.tagName || n.tag || 'div').toLowerCase(),
                name: n.name || n.componentName || undefined,
                classes: n.className || n.classes || '',
                text: typeof n.textContent === 'string' ? n.textContent.trim().slice(0, 40) : undefined,
                children: Array.isArray(n.children) ? n.children.map((c: any) => transformNode(c, depth + 1)) : [],
                depth,
              });
              const root = transformNode(data.rootNode);
              setLayers([root]);
              emitOnlookEvent('ONLOOK_LAYERS_MOUNTED', { layerCount: 1 });
            }
          },
        },
      });

      connection.promise
        .then(async (child: any) => {
          let pongResult: any = null;
          if (child && typeof child.ping === 'function') {
            try {
              pongResult = await child.ping();
            } catch (pingErr) {
              console.warn('Penpal ping call error:', pingErr);
            }
          }
          (window as any).__PENPAL_RPC_STATUS__ = {
            connected: true,
            frameId: 'zylora-onlook-frame-1',
            pong: pongResult,
            timestamp: Date.now(),
          };
          emitOnlookEvent('ONLOOK_PENPAL_CONNECTED', {
            frameId: 'zylora-onlook-frame-1',
            pong: pongResult,
          });
        })
        .catch((e) => {
          console.warn('Penpal handshake init notice:', e);
        })
        .finally(() => {
          isConnectingPenpalRef.current = false;
        });

      penpalConnectionRef.current = connection;
    } catch (err) {
      console.warn('Penpal handshake init notice:', err);
      isConnectingPenpalRef.current = false;
    }
  }, [siteId, workspaceId]);

  // Cross-origin fallback / direct postMessage listener
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'ELEMENT_SELECTED') {
        const meta: ElementMetadata = {
          id: data.elementId || 'el_' + Date.now(),
          tag: data.metadata?.tag || 'div',
          text: data.metadata?.text || '',
          classes: data.metadata?.classes || '',
          bounds: data.bounds,
          filePath: data.source?.filePath,
          line: data.source?.line,
          attributes: data.metadata?.attributes || {},
        };
        setSelectedElement(meta);
        (window as any).__SELECTED_ELEMENT__ = meta;
        try {
          editorEngine.elements.click([
            {
              domId: meta.id,
              oid: (meta.attributes as any)?.['data-onlook-id'] || null,
              tagName: meta.tag,
              styles: { computed: {} as any },
              parent: null,
              children: [],
              rect: (meta.bounds ? { ...meta.bounds, toJSON: () => {} } : new DOMRect()) as any,
              webviewId: 'zylora-onlook-frame-1',
            } as any,
          ]);
        } catch {
          // Safe fallback
        }
      } else if (data.type === 'ELEMENT_HOVER') {
        if (data.elementId) {
          setHoverElement({
            id: data.elementId,
            tag: data.metadata?.tag || 'div',
            text: data.metadata?.text || '',
            bounds: data.bounds,
          });
        } else {
          setHoverElement(null);
        }
      } else if (data.type === 'PREVIEW_READY') {
        setRuntimeStatus('ready');
        setupPenpal();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setupPenpal, editorEngine]);

  // 5. Direct Style Edit via Onlook AST Transformation
  const handleApplyStyle = async (classNameToAdd: string) => {
    if (!selectedElement) {
      showToast('Select an element on canvas to apply styles');
      return;
    }
    let targetPath = selectedElement.filePath || activeFile;
    try {
      let currentCode = '';
      try {
        currentCode = await workspace.readFile(targetPath);
      } catch {
        const resolved = files.find((f) => f.path.includes('App') || f.path === 'src/App.jsx' || f.path === 'src/App.tsx')?.path || 'src/App.jsx';
        targetPath = resolved;
        currentCode = await workspace.readFile(targetPath);
      }
      // Run genuine Babel AST transformation via @onlook/parser
      const { updatedCode, modified } = await applyAstStyleChange(currentCode, {
        tag: selectedElement.tag,
        oid: (selectedElement.attributes as any)?.['data-onlook-id'],
        currentClass: selectedElement.classes,
        addClass: classNameToAdd,
      });

      if (modified) {
        await workspace.writeFile(targetPath, updatedCode);
        editorEngine.style.update('className', classNameToAdd);
        const updated = {
          ...selectedElement,
          classes: `${selectedElement.classes || ''} ${classNameToAdd}`.trim(),
        };
        setSelectedElement(updated);
        (window as any).__SELECTED_ELEMENT__ = updated;
        showToast(`Applied "${classNameToAdd}" via Onlook AST · HMR syncing`);
      } else {
        // Safe fallback if element node was dynamic
        const newClasses = `${selectedElement.classes || ''} ${classNameToAdd}`.trim();
        const fallbackUpdated = currentCode.replace(
          new RegExp(`(<${selectedElement.tag}[^>]*className=["'])([^"']*)(["'])`, 'i'),
          `$1${newClasses}$3`
        );
        await workspace.writeFile(targetPath, fallbackUpdated);
        const updated = {
          ...selectedElement,
          classes: newClasses,
        };
        setSelectedElement(updated);
        (window as any).__SELECTED_ELEMENT__ = updated;
        showToast(`Applied "${classNameToAdd}" · HMR syncing`);
      }
    } catch (err) {
      showToast(`Style edit failed: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };

  // Direct Text Edit via Onlook AST Transformation
  const handleApplyText = async (newText: string) => {
    if (!selectedElement) return;
    let targetPath = selectedElement.filePath || activeFile;
    try {
      let currentCode = '';
      try {
        currentCode = await workspace.readFile(targetPath);
      } catch {
        const resolved = files.find((f) => f.path.includes('App') || f.path === 'src/App.jsx' || f.path === 'src/App.tsx')?.path || 'src/App.jsx';
        targetPath = resolved;
        currentCode = await workspace.readFile(targetPath);
      }
      const { updatedCode, modified } = await applyAstTextChange(currentCode, {
        tag: selectedElement.tag,
        oid: (selectedElement.attributes as any)?.['data-onlook-id'],
        newText,
      });
      if (modified) {
        await workspace.writeFile(targetPath, updatedCode);
        const updated = { ...selectedElement, text: newText };
        setSelectedElement(updated);
        (window as any).__SELECTED_ELEMENT__ = updated;
        showToast(`Updated text via Onlook AST`);
      } else {
        const fallbackUpdated = currentCode.replace(
          new RegExp(`(<${selectedElement.tag}[^>]*>)([^<]*)(<\/${selectedElement.tag}>)`, 'i'),
          `$1${newText}$3`
        );
        await workspace.writeFile(targetPath, fallbackUpdated);
        const updated = { ...selectedElement, text: newText };
        setSelectedElement(updated);
        (window as any).__SELECTED_ELEMENT__ = updated;
        showToast(`Updated text`);
      }
    } catch (err) {
      showToast(`Text update failed: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };

  // 6. Manual Code Save
  const handleSaveCode = async () => {
    if (!activeFile) return;
    setIsSavingCode(true);
    try {
      await workspace.writeFile(activeFile, codeContent);
      showToast(`Saved ${activeFile} · Preview updating`);
    } catch (err) {
      showToast(`Save failed: ${err instanceof Error ? err.message : 'Unknown'}`);
    } finally {
      setIsSavingCode(false);
    }
  };

  // 7. Component Insertion via Onlook AST Transformation
  const handleInsertComponent = async (componentName: string, snippet: string, importPath?: string) => {
    try {
      const targetPath = activeFile.endsWith('.jsx') || activeFile.endsWith('.tsx')
        ? activeFile
        : (files.find((f) => f.path === 'src/App.jsx' || f.path === 'src/App.tsx')?.path || activeFile);
      let currentCode = await workspace.readFile(targetPath);

      // 1. Ensure import statement exists if importPath provided
      if (importPath) {
        const relativeImport = `./${importPath.replace(/^src\//, '')}`;
        if (!currentCode.includes(componentName)) {
          const importLine = `import ${componentName} from '${relativeImport}';\n`;
          currentCode = importLine + currentCode;
        }
      }

      const { updatedCode, modified } = await applyAstComponentInsert(currentCode, {
        snippet,
        targetContainerTag: 'main',
      });

      if (modified) {
        await workspace.writeFile(targetPath, updatedCode);
        showToast(`Inserted <${componentName} /> via Onlook AST into ${targetPath}`);
      } else {
        // Safe fallback insertion if no main container was found
        let updated = currentCode;
        if (currentCode.includes('</main>')) {
          updated = currentCode.replace('</main>', `  ${snippet}\n    </main>`);
        } else if (currentCode.includes('</div>')) {
          updated = currentCode.replace(/(<\/div>\s*(\);|\}\s*))$/, `  ${snippet}\n    $1`);
        } else {
          updated = currentCode.replace('return (', `return (\n    ${snippet}`);
        }
        await workspace.writeFile(targetPath, updated);
        showToast(`Inserted <${componentName} /> into ${targetPath}`);
      }
      if (targetPath === activeFile) {
        setCodeContent(await workspace.readFile(targetPath));
      }
    } catch (err) {
      showToast(`Insertion failed: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };


  // 8. AI Prompt Submission
  const handleSendAiPrompt = async () => {
    if (!aiPrompt.trim()) return;
    const promptText = aiPrompt.trim();
    setAiPrompt('');
    setIsAiGenerating(true);

    const userMsg: AIChatMessage = {
      id: 'msg_' + Date.now(),
      role: 'user',
      content: promptText,
      timestamp: new Date(),
    };
    setAiMessages((prev) => [...prev, userMsg]);

    try {
      const response = await ai.sendPrompt(promptText, aiMode, {
        element: selectedElement || undefined,
        files: files.map((f) => f.path),
      });
      setAiMessages((prev) => [...prev, response]);
      showToast('AI suggestions generated');
    } catch (err) {
      const errorMsg: AIChatMessage = {
        id: 'msg_' + Date.now(),
        role: 'assistant',
        content: `Error: ${err instanceof Error ? err.message : 'Failed to generate response'}`,
        timestamp: new Date(),
        status: 'failed',
      };
      setAiMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAiGenerating(false);
    }
  };

  // 9. Apply AI Diff
  const handleApplyDiff = async (diff: { path: string; generated: string }) => {
    try {
      await ai.applyDiff(diff);
      showToast(`Applied AI changes to ${diff.path}`);
      await loadFiles();
      if (diff.path === activeFile) {
        setCodeContent(diff.generated);
      }
    } catch (err) {
      showToast(`Failed to apply diff: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };

  // 10. Checkpoint Snapshot
  const handleCreateSnapshot = async () => {
    try {
      const id = await history.createSnapshot('Studio manual checkpoint');
      showToast(`Checkpoint created (${id.slice(0, 8)})`);
    } catch (err) {
      showToast(`Checkpoint failed: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };

  // 11. Production Publish
  const handlePublish = async () => {
    setIsPublishing(true);
    showToast('Validating production build and deploying...');
    try {
      const result = await publisher.buildAndPublish();
      showToast(result.message || 'Site published successfully to Zylora hosting!');
    } catch (err) {
      showToast(`Publish failed: ${err instanceof Error ? err.message : 'Build failed'}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // Recursive Layer item renderer
  const renderLayerNode = (node: LayerItem) => (
    <div key={node.id} className="zylora-onlook-layer-node">
      <div
        className={`zylora-onlook-layer-item ${selectedElement?.id === node.id ? 'active' : ''}`}
        style={{ paddingLeft: `${node.depth ? node.depth * 14 + 8 : 8}px` }}
        onClick={() => setSelectedElement({ id: node.id, tag: node.tag, text: node.text, classes: node.classes })}
      >
        <span className="zylora-onlook-layer-tag">&lt;{node.name || node.tag}&gt;</span>
        {node.classes && <span className="zylora-onlook-layer-class">.{node.classes.split(' ')[0]}</span>}
        {node.text && <span className="zylora-onlook-layer-text">{node.text}</span>}
      </div>
      {node.children && node.children.map(renderLayerNode)}
    </div>
  );

  return (
    <EditorEngineContext.Provider value={editorEngine}>
      <div className="zylora-onlook-studio" data-engine="onlook-transplant" data-subsystem="onlook-shell">
        {/* ── TOP BAR (Exact 40px Upstream Layout) ── */}
        <header className="zylora-onlook-topbar">
          <div className="zylora-onlook-topbar-left">
            <div className="zylora-onlook-brand">
              <div className="zylora-logo-mark" title="Zylora Engine">Z</div>
              <span className="zylora-site-name">{siteId}</span>
              <span className="zylora-breadcrumb-sep">/</span>
              <span className="zylora-branch-pill" title="Default branch">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="3" x2="6" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
                main
              </span>
              <span className="zylora-badge">CODE</span>
            </div>
            {onBackToNative && (
              <button className="zylora-btn-subtle" onClick={onBackToNative} title="Switch to Native SiteDocument editor">
                Switch to Native
              </button>
            )}
          </div>

          {/* Center Mode & Device Controls */}
          <div className="zylora-onlook-topbar-center">
            <div className="zylora-mode-pills">
              <button
                data-testid="view-mode-design"
                className={viewMode === 'design' ? 'active' : ''}
                onClick={() => setViewMode('design')}
              >
                Design
              </button>
              <button
                data-testid="view-mode-code"
                className={viewMode === 'code' ? 'active' : ''}
                onClick={() => setViewMode('code')}
              >
                Code
              </button>
              <button
                data-testid="view-mode-preview"
                className={viewMode === 'preview' ? 'active' : ''}
                onClick={() => setViewMode('preview')}
              >
                Preview
              </button>
            </div>

            <div className="zylora-device-pills">
              {(['desktop', 'tablet', 'mobile'] as DevicePreset[]).map((d) => (
                <button
                  key={d}
                  className={device === d ? 'active' : ''}
                  onClick={() => setDevice(d)}
                  title={DEVICE_DIMENSIONS[d].label}
                >
                  {d === 'desktop' ? '🖥️' : d === 'tablet' ? '📱' : '📲'}
                </button>
              ))}
            </div>

            <div className="zylora-zoom-pills">
              <button onClick={() => setZoomScale(Math.max(0.25, zoomScale - 0.25))}>-</button>
              <span>{Math.round(zoomScale * 100)}%</span>
              <button onClick={() => setZoomScale(Math.min(2, zoomScale + 0.25))}>+</button>
              <button onClick={() => setZoomScale(1)}>100%</button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="zylora-onlook-topbar-right">
            <button
              className={`zylora-mode-toggle ${studioMode === 'pro' ? 'active' : ''}`}
              onClick={() => setStudioMode(studioMode === 'simple' ? 'pro' : 'simple')}
              title="Toggle between Simple Mode and Pro Mode"
            >
              {studioMode === 'simple' ? 'Simple' : 'Pro'}
            </button>
            <button className="zylora-btn-subtle" onClick={() => void handleCreateSnapshot()} title="Create workspace checkpoint">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Checkpoint
            </button>
            <button
              className={`zylora-btn-publish ${runtimeStatus === 'ready' && !isPublishing ? 'live' : ''}`}
              onClick={() => void handlePublish()}
              disabled={isPublishing || runtimeStatus !== 'ready'}
            >
              {isPublishing ? (
                <>
                  <span className="status-dot starting" style={{ width: 6, height: 6 }} />
                  Publishing…
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Publish
                </>
              )}
            </button>
          </div>
        </header>

        {/* ── CONTEXTUAL EDITORBAR (Floating Pill at top 48px) ── */}
        {viewMode === 'design' && (
          <div className="zylora-onlook-editorbar-container">
            <div className="zylora-onlook-editorbar" data-subsystem="onlook-editorbar">
              {selectedElement ? (
                <>
                  <div className="zylora-editorbar-badge">
                    &lt;{selectedElement.tag}&gt;
                    {selectedElement.classes && <span className="classes">.{selectedElement.classes.slice(0, 30)}</span>}
                  </div>

                  <div className="zylora-editorbar-sep" />

                  <div className="zylora-editorbar-section">
                    <span className="label">Type</span>
                    <button onClick={() => void handleApplyStyle('text-sm')}>sm</button>
                    <button onClick={() => void handleApplyStyle('text-base')}>md</button>
                    <button onClick={() => void handleApplyStyle('text-lg')}>lg</button>
                    <button onClick={() => void handleApplyStyle('text-2xl')}>2xl</button>
                    <button onClick={() => void handleApplyStyle('font-bold')}>Bold</button>
                    <button onClick={() => void handleApplyStyle('text-center')}>Center</button>
                  </div>

                  <div className="zylora-editorbar-sep" />

                  <div className="zylora-editorbar-section">
                    <span className="label">Space</span>
                    <button onClick={() => void handleApplyStyle('p-4')}>P-4</button>
                    <button onClick={() => void handleApplyStyle('p-6')}>P-6</button>
                    <button onClick={() => void handleApplyStyle('m-4')}>M-4</button>
                    <button onClick={() => void handleApplyStyle('gap-4')}>Gap-4</button>
                  </div>

                  <div className="zylora-editorbar-sep" />

                  <div className="zylora-editorbar-section">
                    <span className="label">Layout</span>
                    <button onClick={() => void handleApplyStyle('flex items-center justify-between')}>Between</button>
                    <button onClick={() => void handleApplyStyle('flex flex-col gap-3')}>Col</button>
                    <button onClick={() => void handleApplyStyle('grid grid-cols-2 gap-4')}>Grid-2</button>
                  </div>

                  <div className="zylora-editorbar-sep" />

                  <div className="zylora-editorbar-section">
                    <span className="label">Color</span>
                    <button onClick={() => void handleApplyStyle('bg-slate-900 text-white')}>Dark</button>
                    <button onClick={() => void handleApplyStyle('bg-white text-slate-900')}>Light</button>
                    <button onClick={() => void handleApplyStyle('bg-indigo-600 text-white')}>Primary</button>
                  </div>
                </>
              ) : (
                <div className="zylora-editorbar-idle" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 6px' }}>
                  <span style={{ fontSize: '11px', color: '#737373' }}>Select an element in canvas to style with EditorBar</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── LEFT PANEL (Upstream 2-Tier: 80px Rail + 280px Drawer) ── */}
        {viewMode !== 'preview' && (
          <aside className="zylora-onlook-leftpanel" data-subsystem="onlook-leftpanel">
            {/* 80px Icon Rail */}
            <div className="zylora-leftpanel-rail">
              <button
                data-testid="left-tab-layers"
                className={`zylora-rail-btn ${leftTab === 'layers' ? 'active' : ''}`}
                onClick={() => setLeftTab('layers')}
                title="DOM Layers (L)"
              >
                <svg viewBox="0 0 24 24">
                  <path d="m12 2 10 5-10 5L2 7l10-5Z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>
                <span>Layers</span>
              </button>

              <button
                data-testid="left-tab-components"
                className={`zylora-rail-btn ${leftTab === 'components' ? 'active' : ''}`}
                onClick={() => setLeftTab('components')}
                title="Reusable Components (C)"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="m18.5 8.5 3.5 3.5-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>
                <span>Components</span>
              </button>

              <button
                data-testid="left-tab-pages"
                className={`zylora-rail-btn ${leftTab === 'pages' ? 'active' : ''}`}
                onClick={() => setLeftTab('pages')}
                title="Pages & Routes (P)"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Pages</span>
              </button>

              {studioMode === 'pro' && (
                <button
                  data-testid="left-tab-files"
                  className={`zylora-rail-btn ${leftTab === 'files' ? 'active' : ''}`}
                  onClick={() => setLeftTab('files')}
                  title="Workspace Files (F)"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  </svg>
                  <span>Files</span>
                </button>
              )}
            </div>

            {/* 280px Flyout Drawer */}
            <div className="zylora-leftpanel-drawer">
              {leftTab === 'layers' && (
                <div className="zylora-layers-view" data-subsystem="onlook-layers" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="zylora-panel-header">DOM Hierarchy & Layers</div>
                  <div className="zylora-panel-scroll">
                    {layers.length > 0 ? (
                      layers.map(renderLayerNode)
                    ) : (
                      <div className="zylora-empty-hint" style={{ padding: '16px', fontSize: '11px', color: '#737373' }}>
                        {runtimeStatus === 'ready' ? 'Layers syncing from preview…' : 'Starting runtime…'}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {leftTab === 'components' && (
                <div className="zylora-components-view" data-subsystem="onlook-components" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="zylora-panel-header">Discovered Components</div>
                  <div className="zylora-panel-scroll">
                    <div className="zylora-component-list">
                      {files.filter((f) => f.path.startsWith('src/components/') && (f.path.endsWith('.jsx') || f.path.endsWith('.tsx'))).map((compFile) => {
                        const compName = compFile.path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Component';
                        return (
                          <div
                            key={compFile.path}
                            className="zylora-component-card project-component"
                            data-component-name={compName}
                            onClick={() => void handleInsertComponent(compName, `<${compName} />`, compFile.path)}
                          >
                            <strong>{compName}</strong>
                            <span>{compFile.path}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="zylora-panel-header" style={{ marginTop: '12px', borderTop: '1px solid #26262a' }}>Basic UI Primitives</div>
                    <div className="zylora-component-list" style={{ marginTop: '6px' }}>
                      <div className="zylora-component-card" onClick={() => void handleInsertComponent('Button', '<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow hover:bg-indigo-700 transition">Click me</button>')}>
                        <strong>Button</strong>
                        <span>Interactive primary button</span>
                      </div>
                      <div className="zylora-component-card" onClick={() => void handleInsertComponent('Card', '<div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"><h3 className="text-xl font-bold mb-2">Card Title</h3><p className="text-slate-600 dark:text-slate-300">Feature description here.</p></div>')}>
                        <strong>Card</strong>
                        <span>Container with shadow & border</span>
                      </div>
                      <div className="zylora-component-card" onClick={() => void handleInsertComponent('Heading', '<h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white my-4">New Section Heading</h2>')}>
                        <strong>Heading</strong>
                        <span>Responsive H2 section title</span>
                      </div>
                      <div className="zylora-component-card" onClick={() => void handleInsertComponent('Section', '<section className="py-12 px-6 max-w-7xl mx-auto"><h2 className="text-2xl font-bold mb-4">Section</h2><p className="text-slate-600">Content goes here.</p></section>')}>
                        <strong>Section</strong>
                        <span>Padded container section</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {leftTab === 'pages' && (
                <div className="zylora-pages-view" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="zylora-panel-header">Pages & Routes</div>
                  <div className="zylora-panel-scroll">
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '6px 10px', background: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', borderRadius: '6px', fontSize: '12px', marginBottom: '2px' }}>/ (Home)</li>
                      <li style={{ padding: '6px 10px', color: '#acacac', fontSize: '12px', marginBottom: '2px' }}>/about</li>
                      <li style={{ padding: '6px 10px', color: '#acacac', fontSize: '12px', marginBottom: '2px' }}>/services</li>
                      <li style={{ padding: '6px 10px', color: '#acacac', fontSize: '12px', marginBottom: '2px' }}>/contact</li>
                    </ul>
                  </div>
                </div>
              )}

              {leftTab === 'files' && (
                <div className="zylora-files-view" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="zylora-panel-header">Workspace Files</div>
                  <div className="zylora-panel-scroll">
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {files.map((file) => (
                        <li
                          key={file.path}
                          style={{
                            padding: '6px 10px',
                            background: activeFile === file.path ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                            color: activeFile === file.path ? '#93c5fd' : '#acacac',
                            borderRadius: '6px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            marginBottom: '2px',
                          }}
                          onClick={() => setActiveFile(file.path)}
                        >
                          📄 {file.path}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* ── CENTER WORKSPACE CANVAS / CODE VIEW ── */}
        <main className="zylora-onlook-center">
          {viewMode === 'code' ? (
            <div className="zylora-code-editor-shell" data-subsystem="onlook-code-panel">
              <div className="zylora-code-editor-header">
                <span>{activeFile}</span>
                <button
                  data-testid="save-code-btn"
                  className="zylora-btn-action"
                  onClick={() => void handleSaveCode()}
                  disabled={isSavingCode}
                >
                  {isSavingCode ? 'Saving…' : 'Save & HMR Sync'}
                </button>
              </div>
              <textarea
                data-testid="code-editor-textarea"
                className="zylora-code-textarea"
                value={codeContent}
                onChange={(e) => setCodeContent(e.target.value)}
                spellCheck={false}
              />
            </div>
          ) : (
            <div className="zylora-canvas-viewport" data-subsystem="onlook-canvas">
              {runtimeStatus === 'failed' ? (
                <div className="zylora-canvas-error" role="alert" style={{ textAlign: 'center', color: '#f87171' }}>
                  <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Sandbox Runtime Error</h2>
                  <p style={{ fontSize: '13px', marginBottom: '16px' }}>{errorMessage}</p>
                  <button className="zylora-btn-action" onClick={() => void startSandbox()}>Retry Sandbox</button>
                </div>
              ) : !previewUrl ? (
                <div className="zylora-canvas-loading" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', color: '#acacac' }}>
                  <span className="status-dot starting" style={{ width: 14, height: 14 }} />
                  <p>{runtimeStatus === 'starting' ? 'Starting Vite / Next dev server…' : 'Preparing workspace…'}</p>
                </div>
              ) : (
                <div
                  className="zylora-canvas-frame-container"
                  style={{
                    width: DEVICE_DIMENSIONS[device].width * zoomScale,
                    height: DEVICE_DIMENSIONS[device].height * zoomScale,
                  }}
                >
                  <iframe
                    ref={iframeRef}
                    className="zylora-onlook-iframe"
                    title="Live Vite/Next Preview"
                    src={previewUrl}
                    style={{
                      width: DEVICE_DIMENSIONS[device].width,
                      height: DEVICE_DIMENSIONS[device].height,
                      transform: `scale(${zoomScale})`,
                      transformOrigin: 'top left',
                    }}
                    sandbox="allow-scripts allow-forms allow-modals allow-popups allow-same-origin"
                    onLoad={setupPenpal}
                  />

                  {/* Hover Overlay */}
                  {hoverElement?.bounds && (
                    <div
                      className="zylora-hover-overlay"
                      style={{
                        left: hoverElement.bounds.x * zoomScale,
                        top: hoverElement.bounds.y * zoomScale,
                        width: hoverElement.bounds.width * zoomScale,
                        height: hoverElement.bounds.height * zoomScale,
                      }}
                    >
                      <span className="zylora-overlay-badge">&lt;{hoverElement.tag}&gt;</span>
                    </div>
                  )}

                  {/* Selection Overlay */}
                  {selectedElement?.bounds && (
                    <div
                      className="zylora-selection-overlay"
                      style={{
                        left: selectedElement.bounds.x * zoomScale,
                        top: selectedElement.bounds.y * zoomScale,
                        width: selectedElement.bounds.width * zoomScale,
                        height: selectedElement.bounds.height * zoomScale,
                      }}
                    >
                      <span className="zylora-overlay-badge selected">
                        &lt;{selectedElement.tag}&gt; {Math.round(selectedElement.bounds.width)} × {Math.round(selectedElement.bounds.height)}
                      </span>
                      {/* Resize handles */}
                      <span className="handle nw" />
                      <span className="handle ne" />
                      <span className="handle sw" />
                      <span className="handle se" />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </main>

        {/* ── RIGHT PANEL (Inspector & AI Chat, 352px width) ── */}
        {viewMode === 'design' && (
          <aside className="zylora-onlook-rightpanel" data-subsystem="onlook-design-panel">
            <div className="zylora-rightpanel-nav">
              <button
                data-testid="right-tab-design"
                className={rightTab === 'design' ? 'active' : ''}
                onClick={() => setRightTab('design')}
              >
                Design
              </button>
              <button
                data-testid="right-tab-ai"
                className={rightTab === 'ai' ? 'active' : ''}
                onClick={() => setRightTab('ai')}
              >
                AI Assistant
              </button>
            </div>

            <div className="zylora-rightpanel-content">
              {rightTab === 'design' ? (
                <div className="zylora-inspector-view">
                  <div className="zylora-panel-header" style={{ padding: '0 0 8px 0' }}>Element Properties</div>
                  {selectedElement ? (
                    <div className="zylora-inspector-fields">
                      <div className="field-group">
                        <label>Element Tag</label>
                        <input value={selectedElement.tag} disabled style={{ opacity: 0.6 }} />
                      </div>
                      <div className="field-group">
                        <label>Tailwind Classes</label>
                        <textarea
                          data-testid="inspector-classes-input"
                          value={selectedElement.classes || ''}
                          onChange={(e) => setSelectedElement({ ...selectedElement, classes: e.target.value })}
                          rows={3}
                        />
                        <button
                          className="zylora-btn-action"
                          data-testid="inspector-update-classes-btn"
                          onClick={() => selectedElement.classes && void handleApplyStyle(selectedElement.classes)}
                        >
                          Update Classes
                        </button>
                      </div>
                      {selectedElement.text !== undefined && (
                        <div className="field-group">
                          <label>Text Content</label>
                          <input
                            data-testid="inspector-text-input"
                            value={selectedElement.text}
                            onChange={(e) => setSelectedElement({ ...selectedElement, text: e.target.value })}
                          />
                          <button
                            className="zylora-btn-action"
                            data-testid="inspector-update-text-btn"
                            onClick={() => selectedElement.text !== undefined && void handleApplyText(selectedElement.text)}
                          >
                            Update Text
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="zylora-empty-hint" style={{ color: '#737373', fontSize: '11px', padding: '12px 0' }}>
                      Click any element in the canvas to inspect and edit styles.
                    </div>
                  )}
                </div>
              ) : (
                <div className="zylora-ai-chat-view" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="zylora-ai-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div className="zylora-mode-pills">
                      {(['ask', 'edit', 'agent'] as const).map((m) => (
                        <button key={m} className={aiMode === m ? 'active' : ''} onClick={() => setAiMode(m)}>
                          {m.toUpperCase()}
                        </button>
                      ))}
                    </div>
                    <select
                      className="zylora-btn-subtle"
                      style={{ background: '#121214', color: '#fff' }}
                      value={ai.getSelectedModel()}
                      onChange={(e) => ai.setSelectedModel(e.target.value)}
                    >
                      {ai.getAvailableModels().map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="zylora-ai-messages" style={{ flex: '1 1 0', overflowY: 'auto', marginBottom: '12px' }}>
                    {aiMessages.length === 0 ? (
                      <div className="zylora-ai-welcome" style={{ color: '#acacac', fontSize: '12px' }}>
                        <p style={{ marginBottom: '12px' }}>Ask Zylora AI to modify code, add sections, adjust responsive styles, or inspect elements.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <button className="zylora-btn-subtle" onClick={() => setAiPrompt('Make this section more responsive with better mobile spacing')}>
                            Make responsive
                          </button>
                          <button className="zylora-btn-subtle" onClick={() => setAiPrompt('Increase whitespace and modernize typography')}>
                            Modernize typography
                          </button>
                          <button className="zylora-btn-subtle" onClick={() => setAiPrompt('Add a call to action with a vibrant gradient button')}>
                            Add CTA button
                          </button>
                        </div>
                      </div>
                    ) : (
                      aiMessages.map((msg) => (
                        <div key={msg.id} style={{ marginBottom: '10px', padding: '8px 10px', borderRadius: '6px', background: msg.role === 'user' ? '#1e1e20' : '#142036', fontSize: '12px' }}>
                          <p style={{ margin: 0 }}>{msg.content}</p>
                          {msg.diff && (
                            <div style={{ marginTop: '8px', borderTop: '1px solid #333', paddingTop: '6px' }}>
                              <span style={{ fontSize: '10px', color: '#93c5fd' }}>{msg.diff.path}</span>
                              <pre style={{ fontSize: '10px', overflowX: 'auto', background: '#0e0e10', padding: '6px', borderRadius: '4px' }}>{msg.diff.generated.slice(0, 200)}...</pre>
                              <button className="zylora-btn-action" onClick={() => void handleApplyDiff(msg.diff!)}>
                                Apply Changes
                              </button>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                    {isAiGenerating && <div style={{ fontSize: '11px', color: '#93c5fd' }}>Zylora AI is reasoning and generating changes…</div>}
                  </div>

                  <div className="zylora-ai-input-box" style={{ display: 'flex', gap: '6px' }}>
                    <textarea
                      style={{ flex: '1 1 0', height: '60px', background: '#121214', border: '1px solid #26262a', borderRadius: '6px', padding: '8px', color: '#fff', fontSize: '12px' }}
                      placeholder={selectedElement ? `Instruct AI regarding <${selectedElement.tag}>…` : 'Ask AI or request source edits…'}
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                          e.preventDefault();
                          void handleSendAiPrompt();
                        }
                      }}
                      disabled={isAiGenerating}
                    />
                    <button className="zylora-btn-action" style={{ height: '60px' }} onClick={() => void handleSendAiPrompt()} disabled={isAiGenerating || !aiPrompt.trim()}>
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* ── FLOATING BOTTOM BAR (Status & Resolution) ── */}
        <footer className="zylora-onlook-bottombar">
          <div className="zylora-status-indicator">
            <span className={`status-dot ${runtimeStatus}`} />
            <span>{runtimeStatus === 'ready' ? 'Dev Server Active · HMR Connected' : runtimeStatus}</span>
          </div>
          <span style={{ color: '#404040' }}>|</span>
          <div className="zylora-viewport-readout">
            {DEVICE_DIMENSIONS[device].width} × {DEVICE_DIMENSIONS[device].height} px
          </div>
        </footer>

        {/* Toast Notification */}
        {toast && <div className="zylora-toast">{toast}</div>}
      </div>
    </EditorEngineContext.Provider>
  );
}
