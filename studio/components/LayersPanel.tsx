import React from 'react';
import { useStudio } from '../store';

export function LayersPanel() {
    const { state, dispatch } = useStudio();
    const [query,setQuery]=React.useState('');
    const [collapsed,setCollapsed]=React.useState<Set<string>>(new Set());
    const panelRef=React.useRef<HTMLDivElement>(null);
    React.useEffect(()=>{panelRef.current?.querySelector<HTMLElement>('[data-layer-selected="true"]')?.scrollIntoView({block:'nearest'})},[state.selectedNodeIds.join('|')]);

    if (!state.document) return <div style={{padding: '1rem', color: '#888'}}>Loading...</div>;
    const page = state.document.pages[state.currentPageId];
    if (!page) return <div style={{padding: '1rem', color: '#888'}}>Loading...</div>;

    const normalizedQuery=query.trim().toLowerCase();
    const treeMatches=(nodeId:string):boolean => {
        const candidate=page.nodes[nodeId];
        if (!candidate) return false;
        const label=String(candidate.metadata?.displayName || candidate.type).toLowerCase();
        return !normalizedQuery || label.includes(normalizedQuery) || nodeId.toLowerCase().includes(normalizedQuery) || candidate.children.some(treeMatches);
    };

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
        const label=String(node.metadata?.displayName || node.type);
        if (!treeMatches(nodeId)) return null;
        
        return (
            <div key={nodeId}>
                <div 
                    data-layer-selected={isSelected?'true':'false'}
                    tabIndex={0}
                    onClick={(event) => dispatch({type: 'SELECT_NODE', payload: event.shiftKey ? (isSelected?state.selectedNodeIds.filter(id=>id!==nodeId):[...state.selectedNodeIds,nodeId]) : [nodeId]})}
                    onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();dispatch({type:'SELECT_NODE',payload:[nodeId]})}else if(event.key==='Delete'){event.preventDefault();dispatch({type:'DELETE_NODE',payload:{nodeId}})}}}
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
                    <span style={{display:'flex',alignItems:'center',gap:'4px',minWidth:0}}>
                        {!!node.children.length && <button onClick={(e)=>{e.stopPropagation();setCollapsed(current=>{const next=new Set(current);next.has(nodeId)?next.delete(nodeId):next.add(nodeId);return next;});}} aria-label={collapsed.has(nodeId)?'Expand layer':'Collapse layer'} style={{background:'none',border:0,color:'inherit',padding:0}}>{collapsed.has(nodeId)?'›':'⌄'}</button>}
                        <span title={nodeId}>{label} ({nodeId.substring(0, 6)})</span>
                        {node.metadata?.locked && <span title="Locked">🔒</span>}
                    </span>
                    {isSelected && (
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <button 
                                onClick={(e) => { e.stopPropagation(); dispatch({type:'DUPLICATE_NODE',payload:{nodeId}}); }}
                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '10px' }}
                                title="Duplicate"
                            >
                                ⧉
                            </button>
                            <button 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    dispatch({type:'TOGGLE_NODE_VISIBILITY',payload:{nodeId,breakpoint:state.currentBreakpoint}});
                                }} 
                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '10px' }}
                                title="Toggle Visibility"
                            >
                                👁
                            </button>
                            <button onClick={(e)=>{e.stopPropagation();dispatch({type:'TOGGLE_NODE_LOCK',payload:{nodeId}});}} style={{background:'none',border:'none',color:'#888',cursor:'pointer',fontSize:'10px'}} title={node.metadata?.locked?'Unlock':'Lock'}>⌾</button>
                            <button onClick={(e)=>{e.stopPropagation();const name=window.prompt('Layer name',label);if(name)dispatch({type:'RENAME_NODE',payload:{nodeId,name}});}} style={{background:'none',border:'none',color:'#888',cursor:'pointer',fontSize:'10px'}} title="Rename">✎</button>
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
                {!collapsed.has(nodeId) && node.children.map(childId => renderLayers(childId, depth + 1))}
            </div>
        );
    };

    return (
        <div className="studio-layers" ref={panelRef}>
            <input aria-label="Search layers" placeholder="Search layers" value={query} onChange={e=>setQuery(e.target.value)} style={{width:'calc(100% - 16px)',margin:'8px',boxSizing:'border-box',background:'#222',color:'#fff',border:'1px solid #444',padding:'6px'}} />
            {renderLayers(page.rootNodeId)}
        </div>
    );
}
