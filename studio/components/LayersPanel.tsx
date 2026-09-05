import React from 'react';
import { useStudio } from '../store';

export function LayersPanel() {
    const { state, dispatch } = useStudio();

    if (!state.document) return <div style={{padding: '1rem', color: '#888'}}>Loading...</div>;
    const page = state.document.pages[state.currentPageId];
    if (!page) return <div style={{padding: '1rem', color: '#888'}}>Loading...</div>;

    const handleDragStart = (e: React.DragEvent, nodeId: string) => {
        e.stopPropagation();
        e.dataTransfer.setData('studio/layer-node-id', nodeId);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent, targetNodeId: string) => {
        e.preventDefault();
        e.stopPropagation();
        const draggedNodeId = e.dataTransfer.getData('studio/layer-node-id');
        if (draggedNodeId && draggedNodeId !== targetNodeId) {
            dispatch({ 
                type: 'REPARENT_NODE', 
                payload: { nodeId: draggedNodeId, newParentId: targetNodeId } 
            });
        }
    };

    const renderLayers = (nodeId: string, depth: number = 0) => {
        const node = page.nodes[nodeId];
        if (!node) return null;
        
        const isSelected = state.selectedNodeIds.includes(nodeId);
        
        return (
            <div key={nodeId}>
                <div 
                    onClick={() => dispatch({type: 'SELECT_NODE', payload: [nodeId]})}
                    draggable
                    onDragStart={(e) => handleDragStart(e, nodeId)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, nodeId)}
                    style={{
                        padding: '4px',
                        paddingLeft: `${depth * 10 + 4}px`,
                        cursor: 'pointer',
                        background: isSelected ? '#333' : 'transparent',
                        color: isSelected ? '#fff' : '#ccc',
                        fontSize: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <span>{node.type} ({nodeId.substring(0, 6)})</span>
                    {isSelected && (
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <button 
                                onClick={(e) => { e.stopPropagation(); /* duplicate logic */ }} 
                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '10px' }}
                                title="Duplicate"
                            >
                                ⧉
                            </button>
                            <button 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    dispatch({
                                        type: 'UPDATE_NODE_STYLE',
                                        payload: {
                                            nodeId,
                                            style: { ...node.style.css, display: node.style.css?.display === 'none' ? 'block' : 'none' },
                                            breakpoint: state.currentBreakpoint
                                        }
                                    });
                                }} 
                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '10px' }}
                                title="Toggle Visibility"
                            >
                                👁
                            </button>
                            <button 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    dispatch({ type: 'DELETE_NODE', payload: { nodeId } });
                                }} 
                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '10px' }}
                                title="Delete"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </div>
                {node.children.map(childId => renderLayers(childId, depth + 1))}
            </div>
        );
    };

    return (
        <div className="studio-layers">
            {renderLayers(page.rootNodeId)}
        </div>
    );
}
