import React, { useEffect, useReducer, useRef } from 'react';
import { StudioContext, studioReducer, initialState } from './store';
import { CanvasNode } from './components/CanvasNode';
import { Inspector } from './components/Inspector';
import { LayersPanel } from './components/LayersPanel';

export function App() {
    const [state, dispatch] = useReducer(studioReducer, initialState);
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [saveStatus, setSaveStatus] = React.useState<'Saved'|'Unsaved'|'Saving...'|'Save failed'>('Saved');

    useEffect(() => {
        const siteId = (window as any).ZYLORA_STUDIO_CONTEXT?.siteId;
        if (siteId) {
            fetch(`/api/sites/${siteId}/studio-migrate`, { method: 'POST' })
                .then(res => res.json())
                .then(data => {
                    if (data.ok && data.document) {
                        dispatch({ type: 'SET_DOCUMENT', payload: data.document });
                    }
                });
        }
    }, []);

    // Autosave effect
    useEffect(() => {
        if (!state.document || state.historyIndex <= 0) return; // Don't save initial load
        
        setSaveStatus('Unsaved');
        if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
        
        saveTimeoutRef.current = setTimeout(() => {
            setSaveStatus('Saving...');
            const siteId = (window as any).ZYLORA_STUDIO_CONTEXT?.siteId;
            fetch(`/api/sites/${siteId}/studio-save`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state.document)
            })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setSaveStatus('Saved');
                    // Sync the client revision with the newly generated server revision
                    // so the next save doesn't conflict. We dispatch this without triggering history.
                    dispatch({ type: 'SYNC_REVISION', payload: data.newRevision });
                } else if (data.conflict) {
                    setSaveStatus('Conflict detected');
                    alert("A newer version of this document exists on the server. Your changes cannot be saved. Please refresh.");
                } else {
                    setSaveStatus('Save failed');
                }
            })
            .catch(() => setSaveStatus('Save failed'));
        }, 1000); // 1s debounce
    }, [state.document]);

    // Render layers logic moved to LayersPanel component

    return (
        <StudioContext.Provider value={{ state, dispatch }}>
            <div className="zylora-studio-app">
                <header className="studio-topbar">
                    <div className="studio-brand">Zylora Studio</div>
                    <div className="studio-controls">
                        <span style={{marginRight: '1rem', fontSize: '0.8rem', color: saveStatus === 'Save failed' ? '#ff4444' : '#888'}}>
                            {saveStatus}
                        </span>
                        <span style={{marginRight: '1rem', fontSize: '0.85rem'}}>
                            Breakpoint: {state.currentBreakpoint}
                        </span>
                        <button onClick={() => dispatch({type: 'UNDO'})}>Undo</button>
                        <button onClick={() => dispatch({type: 'REDO'})}>Redo</button>
                        <button>Preview</button>
                        <button>Publish</button>
                    </div>
                </header>
                
                <div className="studio-main">
                    <aside className="studio-sidebar-left">
                        <div className="panel-title">Layers</div>
                        <div style={{padding: '0.5rem 0'}}>
                            <LayersPanel />
                        </div>
                    </aside>
                    
                    <main className="studio-canvas-container" onClick={() => dispatch({type: 'SELECT_NODE', payload: []})}>
                        <div className="studio-canvas" style={{
                            width: state.currentBreakpoint === 'desktop' ? '100%' : state.currentBreakpoint === 'tablet' ? '768px' : '375px',
                            margin: '0 auto',
                            transition: 'width 0.2s'
                        }}>
                            {state.document && state.document.pages[state.currentPageId] ? (
                                <CanvasNode nodeId={state.document.pages[state.currentPageId].rootNodeId} />
                            ) : (
                                <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                                    Loading Canvas...
                                </div>
                            )}
                        </div>
                    </main>
                    
                    <aside className="studio-sidebar-right">
                        <div className="panel-title">Inspector</div>
                        <div style={{padding: '1rem'}}>
                            <div style={{marginBottom: '1rem', display: 'flex', gap: '4px'}}>
                                <button style={{flex:1}} onClick={() => dispatch({type: 'SET_BREAKPOINT', payload: 'desktop'})}>Desktop</button>
                                <button style={{flex:1}} onClick={() => dispatch({type: 'SET_BREAKPOINT', payload: 'tablet'})}>Tablet</button>
                                <button style={{flex:1}} onClick={() => dispatch({type: 'SET_BREAKPOINT', payload: 'mobile'})}>Mobile</button>
                            </div>
                        </div>
                        <Inspector />
                    </aside>
                </div>
            </div>
        </StudioContext.Provider>
    );
}


