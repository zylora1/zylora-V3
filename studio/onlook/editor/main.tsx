'use client';

import { useEditorEngine } from '@/components/store/editor';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { SettingsModalWithProjects } from '@/components/ui/settings-modal/with-project';
import { EditorAttributes } from '@onlook/constants';
import { EditorMode } from '@onlook/models';
import { Button } from '@onlook/ui/button';
import { Icons } from '@onlook/ui/icons';
import { TooltipProvider } from '@onlook/ui/tooltip';
import { cn } from '@onlook/ui/utils';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { usePanelMeasurements } from '../_hooks/use-panel-measure';
import { useStartProject } from '../_hooks/use-start-project';
import { BottomBar } from './bottom-bar';
import { Canvas } from './canvas';
import { EditorBar } from './editor-bar';
import { LeftPanel } from './left-panel';
import { RightPanel } from './right-panel';
import { TopBar } from './top-bar';
import { emitOnlookEvent, initOnlookDiagnostics } from '../diagnostics';

export const Main = observer(() => {
    const router = useRouter();
    const editorEngine = useEditorEngine();
    const { isProjectReady, error } = useStartProject();
    const leftPanelRef = useRef<HTMLDivElement | null>(null);
    const rightPanelRef = useRef<HTMLDivElement | null>(null);
    const { toolbarLeft, toolbarRight, editorBarAvailableWidth } = usePanelMeasurements(
        leftPanelRef,
        rightPanelRef,
    );

    useEffect(() => {
        if (!isProjectReady) {
            return;
        }

        // Runtime provenance is observed from the actual mounted upstream
        // component roots. The registry is diagnostic-only and never drives
        // editor state or rendering.
        initOnlookDiagnostics(editorEngine, { name: 'Zylora AST parser' });
        emitOnlookEvent('ONLOOK_EDITOR_STORE_READY', { projectId: editorEngine.projectId });

        const surfaces: Array<[string, Parameters<typeof emitOnlookEvent>[0]]> = [
            ['[data-onlook-runtime="topbar"]', 'ONLOOK_SHELL_MOUNTED'],
            ['[data-onlook-runtime="canvas"]', 'ONLOOK_CANVAS_MOUNTED'],
            ['[data-onlook-runtime="layers"]', 'ONLOOK_LAYERS_MOUNTED'],
            ['[data-onlook-runtime="components"]', 'ONLOOK_COMPONENTS_MOUNTED'],
            ['[data-onlook-runtime="left-panel"]', 'ONLOOK_DESIGN_PANEL_MOUNTED'],
            ['[data-onlook-runtime="editor-bar"]', 'ONLOOK_SHELL_MOUNTED'],
            ['[data-onlook-runtime="bottom-bar"]', 'ONLOOK_SHELL_MOUNTED'],
            ['[data-subsystem="onlook-code-panel"]', 'ONLOOK_CODE_PANEL_MOUNTED'],
        ];
        const seen = new Set<string>();
        const scan = () => {
            for (const [selector, event] of surfaces) {
                if (!seen.has(selector) && document.querySelector(selector)) {
                    seen.add(selector);
                    emitOnlookEvent(event, { selector });
                }
            }
        };
        scan();
        const observer = new MutationObserver(scan);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, [editorEngine, isProjectReady]);

    useEffect(() => {
        function handleGlobalWheel(event: WheelEvent) {
            if (!(event.ctrlKey || event.metaKey)) {
                return;
            }

            const canvasContainer = document.getElementById(
                EditorAttributes.CANVAS_CONTAINER_ID,
            );
            if (canvasContainer?.contains(event.target as Node | null)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        }

        window.addEventListener('wheel', handleGlobalWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleGlobalWheel);
        };
    }, []);

    if (error) {
        return (
            <div className="h-screen w-screen flex items-center justify-center gap-2 flex-col">
                <div className="flex flex-row items-center justify-center gap-2">
                    <Icons.ExclamationTriangle className="h-6 w-6 text-foreground-primary" />
                    <div className="text-xl">Error starting project: {error}</div>
                </div>
                <Button onClick={() => {
                    router.push('/');
                }}>
                    Go to home
                </Button>
            </div>
        );
    }

    if (!isProjectReady) {
        return (
            <div className="h-screen w-screen flex items-center justify-center gap-2">
                <Icons.LoadingSpinner className="h-6 w-6 animate-spin text-foreground-primary" />
                <div className="text-xl">Loading project...</div>
            </div>
        );
    }

    return (
        <TooltipProvider>
            <div className="h-screen w-screen flex flex-row select-none relative overflow-hidden" data-subsystem="onlook-shell">
                <Canvas />

                <div className="absolute top-0 w-full" data-subsystem="onlook-topbar">
                    <TopBar />
                </div>

                {/* Left Panel */}
                <div
                    ref={leftPanelRef}
                    className="absolute top-10 left-0 h-[calc(100%-40px)] z-50"
                    data-subsystem="onlook-leftpanel"
                >
                    <LeftPanel />
                </div>
                {/* EditorBar anchored between panels */}
                <div
                    className="absolute top-10 z-49"
                    style={{
                        left: toolbarLeft,
                        right: toolbarRight,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        maxWidth: editorBarAvailableWidth,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                    data-subsystem="onlook-editorbar"
                >
                    <div style={{ pointerEvents: 'auto' }}>
                        <EditorBar availableWidth={editorBarAvailableWidth} />
                    </div>
                </div>

                {/* Right Panel */}
                <div
                    ref={rightPanelRef}
                    className={cn(
                        "absolute top-10 right-0 h-[calc(100%-40px)] z-50",
                        editorEngine.state.editorMode === EditorMode.PREVIEW && 'hidden'
                    )}
                    data-subsystem="onlook-rightpanel"
                >
                    <RightPanel />
                </div>

                <BottomBar />
            </div>
            <SettingsModalWithProjects />
            <SubscriptionModal />
        </TooltipProvider >
    );
});

export const ActualOnlookProjectEditor = Main;
