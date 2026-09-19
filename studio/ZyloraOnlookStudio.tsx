/**
 * ZyloraOnlookStudio: Actual Onlook Project Editor mounted inside Zylora.
 *
 * Provides thin adapter wiring, project loading, error boundaries, and provider setup
 * for the intact upstream Onlook project editor:
 * <ActualOnlookProjectEditor /> (TopBar, LeftPanel, Layers, Canvas, Overlays, EditorBar, RightPanel, BottomBar).
 */

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { EditorEngineContext } from './onlook/core';
import { EditorEngine } from './onlook/core/engine';
import { HostingProvider } from './onlook/components/store/hosting';
import { ActualOnlookProjectEditor } from './onlook/editor/main';
import { clearZyloraTrpcContext, configureZyloraTrpcContext } from './onlook/trpc-stub';
import type { Branch, Frame } from './onlook/models';
import {
  ZyloraAuthAdapter,
  ZyloraWorkspaceAdapter,
  ZyloraSandboxAdapter,
  ZyloraCodeFileSystemAdapter,
  ZyloraAssetAdapter,
  ZyloraAIAdapter,
  ZyloraHistoryAdapter,
  ZyloraPublishAdapter,
  ZyloraPermissionAdapter,
  ZyloraProjectAdapter,
} from './zylora/adapters';

interface Props {
  siteId: string;
  siteName?: string;
  csrf?: string;
  workspaceId?: string;
  onStatus?: (status: string) => void;
  onBackToNative?: () => void;
}

export interface ZyloraAdapters {
  auth: ZyloraAuthAdapter;
  project: ZyloraProjectAdapter;
  workspace: ZyloraWorkspaceAdapter;
  filesystem: ZyloraCodeFileSystemAdapter;
  sandbox: ZyloraSandboxAdapter;
  assets: ZyloraAssetAdapter;
  ai: ZyloraAIAdapter;
  history: ZyloraHistoryAdapter;
  publish: ZyloraPublishAdapter;
  permissions: ZyloraPermissionAdapter;
}

export function ZyloraOnlookRuntime({
  children,
  adapters,
  editorEngine,
  runtimeStatus,
  errorMessage,
  onRetry,
}: {
  children: React.ReactNode;
  adapters: ZyloraAdapters;
  editorEngine: EditorEngine;
  runtimeStatus: string;
  errorMessage: string;
  onRetry: () => void;
}) {
  // The compatibility surface is synchronous (as are the upstream query
  // hooks), so it must be configured before the actual editor children render.
  // Use a memoized setup followed by an unconditional cleanup effect; this
  // preserves hook order and avoids a first-ready-render context race.
  const configuredContext = useMemo(() => {
    if (runtimeStatus !== 'ready') return null;
    const branchId = editorEngine.branches.activeBranch.id;
    configureZyloraTrpcContext({
      projectId: editorEngine.projectId,
      branchId,
      auth: { user: adapters.auth.user },
      project: adapters.project.getProject() as unknown as Record<string, unknown>,
      projects: [],
      sandbox: {
        start: () => adapters.sandbox.start(),
        stop: () => adapters.sandbox.stop(),
      },
      workspace: {
        readFile: (path) => adapters.workspace.readFile(path),
        writeFile: (path, content) => adapters.workspace.writeFile(path, content),
      },
    });
    return true;
  }, [adapters, editorEngine, runtimeStatus]);

  useEffect(() => {
    return () => {
      if (configuredContext) clearZyloraTrpcContext();
    };
  }, [configuredContext]);

  if (runtimeStatus === 'failed') {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground" data-subsystem="onlook-error">
        <div className="text-xl font-medium">Failed to start Zylora Code Studio: {errorMessage}</div>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  if (runtimeStatus === 'starting' || runtimeStatus === 'bootstrapping') {
    return (
      <div className="h-screen w-screen flex items-center justify-center gap-3 bg-background text-foreground" data-subsystem="onlook-loading">
        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
        <div className="text-lg">Starting Zylora Code Workspace...</div>
      </div>
    );
  }

  return (
    <EditorEngineContext.Provider value={editorEngine}>
      <HostingProvider>
        {children}
      </HostingProvider>
    </EditorEngineContext.Provider>
  );
}

export function ZyloraOnlookStudio({ siteId, siteName, csrf, workspaceId, onStatus, onBackToNative }: Props) {
  // 1. Zylora Platform Adapters initialization
  const auth = useMemo(() => new ZyloraAuthAdapter(csrf), [csrf]);
  const projectAdapter = useMemo(
    () => new ZyloraProjectAdapter({ siteId, siteName, codeWorkspaceId: workspaceId }),
    [siteId, siteName, workspaceId],
  );
  const workspace = useMemo(() => new ZyloraWorkspaceAdapter(siteId, auth), [siteId, auth]);
  const filesystem = useMemo(() => new ZyloraCodeFileSystemAdapter(siteId, auth, workspace), [siteId, auth, workspace]);
  const sandbox = useMemo(() => new ZyloraSandboxAdapter(siteId, auth), [siteId, auth]);
  const assets = useMemo(() => new ZyloraAssetAdapter(siteId, auth), [siteId, auth]);
  const ai = useMemo(() => new ZyloraAIAdapter(siteId, auth, workspace), [siteId, auth, workspace]);
  const history = useMemo(() => new ZyloraHistoryAdapter(siteId, auth), [siteId, auth]);
  const publish = useMemo(() => new ZyloraPublishAdapter(siteId, auth), [siteId, auth]);
  const permissions = useMemo(() => new ZyloraPermissionAdapter(auth), [auth]);

  const adapters: ZyloraAdapters = useMemo(() => ({
    auth,
    project: projectAdapter,
    workspace,
    filesystem,
    sandbox,
    assets,
    ai,
    history,
    publish,
    permissions,
  }), [auth, projectAdapter, workspace, filesystem, sandbox, assets, ai, history, publish, permissions]);

  // 2. Onlook Project & Branch models
  const defaultBranch: Branch = useMemo(
    () => projectAdapter.getDefaultBranch(),
    [projectAdapter],
  );

  // 3. Upstream Onlook Editor Engine Store.  Branch and filesystem
  // initialization is intentionally sequential: the editor must not render
  // against an unhydrated cache or a second filesystem instance.
  const editorEngine = useMemo(() => {
    return new EditorEngine(siteId, { capture: () => {} } as any, filesystem);
  }, [siteId, filesystem]);

  const editorReady = useMemo(
    () => (async () => {
      await editorEngine.initBranches([defaultBranch]);
      await editorEngine.init();
    })(),
    [editorEngine, defaultBranch],
  );

  // 4. Sandbox Lifecycle & Frame Wiring
  const [runtimeStatus, setRuntimeStatus] = useState<string>('bootstrapping');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const startSandbox = useCallback(async () => {
    setRuntimeStatus('starting');
    setErrorMessage('');
    try {
      await editorReady;
      const result = await sandbox.start();
      const previewUrl = result.preview_url;

      // Wire active frame into Onlook editor engine
      const defaultFrame: Frame = {
        id: 'frame-1',
        branchId: defaultBranch.id,
        canvasId: 'canvas-1',
        position: { x: 0, y: 0 },
        dimension: { width: 1440, height: 900 },
        url: previewUrl,
      };
      editorEngine.frames.applyFrames([defaultFrame]);

      setRuntimeStatus('ready');
      onStatus?.('Zylora Code Studio ready');
    } catch (err) {
      setRuntimeStatus('failed');
      const msg = err instanceof Error ? err.message : 'Failed to start sandbox';
      setErrorMessage(msg);
      onStatus?.(`Error: ${msg}`);
    }
  }, [sandbox, defaultBranch.id, editorEngine, editorReady, onStatus]);

  useEffect(() => {
    void startSandbox();
    return () => {
      void sandbox.stop();
    };
  }, [startSandbox, sandbox]);

  return (
    <ZyloraOnlookRuntime
      adapters={adapters}
      editorEngine={editorEngine}
      runtimeStatus={runtimeStatus}
      errorMessage={errorMessage}
      onRetry={startSandbox}
    >
      <ActualOnlookProjectEditor />
    </ZyloraOnlookRuntime>
  );
}
