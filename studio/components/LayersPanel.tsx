import React from 'react';
import {Node, useStudio} from '../store';

const technical = new Set(['page','container','stack','flex','grid','heading','paragraph','text','image','button','link','navigation','form','divider','component_instance']);
const semanticType = (node:Node, index:number) => {
  const kind=String(node.metadata?.kind||'').toLowerCase();
  if(node.metadata?.displayName && !technical.has(String(node.metadata.displayName).toLowerCase())) return String(node.metadata.displayName);
  if(kind==='card') return index ? `Card ${index+1}` : 'Card';
  if(kind==='image-frame') return index ? `Image frame ${index+1}` : 'Image frame';
  if(kind==='shape') return index ? `Shape ${index+1}` : 'Shape';
  if(node.type==='page') return 'Page';
  if(node.type==='section') return index ? `Section ${index+1}` : 'Section';
  if(['heading','paragraph','text'].includes(node.type)) return index ? `Text ${index+1}` : 'Text';
  if(node.type==='image') return index ? `Image ${index+1}` : 'Image';
  if(node.type==='button'||node.type==='link') return node.content?.text ? String(node.content.text).slice(0,34) : 'Button';
  if(node.type==='navigation') return 'Navigation';
  if(node.type==='lead_form') return 'Lead form';
  if(node.type==='appointment_booking') return 'Appointment';
  if(node.type==='ai_sales_assistant') return 'Sales Assistant';
  if(node.type==='form') return 'Form';
  return node.type.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
};

export function LayersPanel() {
  const {state,dispatch}=useStudio(); const [query,setQuery]=React.useState(''); const [collapsed,setCollapsed]=React.useState<Set<string>>(new Set()); const panelRef=React.useRef<HTMLDivElement>(null);
  React.useEffect(()=>{panelRef.current?.querySelector<HTMLElement>('[data-layer-selected="true"]')?.scrollIntoView({block:'nearest'})},[state.selectedNodeIds.join('|')]);
  if(!state.document)return <div className="empty-state"><b>Loading your page…</b></div>;
  const page=state.document.pages[state.currentPageId]; if(!page)return <div className="empty-state"><b>No page selected</b><p>Choose a page to see its layers.</p></div>;
  const normalized=query.trim().toLowerCase();
  const labelCounts:Record<string,number>={};
  const labelFor=(node:Node)=>{const base=semanticType(node,0), count=labelCounts[base]||0; labelCounts[base]=count+1; return count?`${base} ${count+1}`:base;};
  const treeMatches=(id:string):boolean=>{const n=page.nodes[id];if(!n)return false;const label=String(n.metadata?.displayName||semanticType(n,0)).toLowerCase();return !normalized||label.includes(normalized)||n.children.some(treeMatches)};
  const handleDrop=(e:React.DragEvent,targetNodeId:string)=>{e.preventDefault();e.stopPropagation();const dragged=e.dataTransfer.getData('studio/layer-node-id');if(dragged&&dragged!==targetNodeId)dispatch({type:'REPARENT_NODE',payload:{nodeId:dragged,newParentId:targetNodeId}})};
  const render=(nodeId:string,depth=0):React.ReactNode=>{const node=page.nodes[nodeId];if(!node||!treeMatches(nodeId))return null;const isSelected=state.selectedNodeIds.includes(nodeId),label=labelFor(node);return <div key={nodeId}><div className={`layer-row ${isSelected?'selected':''}`} data-layer-selected={isSelected?'true':'false'} tabIndex={0} onClick={event=>dispatch({type:'SELECT_NODE',payload:event.shiftKey?(isSelected?state.selectedNodeIds.filter(id=>id!==nodeId):[...state.selectedNodeIds,nodeId]):[nodeId]})} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();dispatch({type:'SELECT_NODE',payload:[nodeId]})}else if(event.key==='Delete'){event.preventDefault();dispatch({type:'DELETE_NODE',payload:{nodeId}})}}} draggable onDragStart={e=>{e.stopPropagation();e.dataTransfer.setData('studio/layer-node-id',nodeId)}} onDragOver={e=>{e.preventDefault();e.stopPropagation()}} onDrop={e=>handleDrop(e,nodeId)} style={{paddingLeft:`${depth*14+8}px`}}><span className="layer-label">{node.children.length>0&&<button className="layer-toggle" onClick={e=>{e.stopPropagation();setCollapsed(current=>{const next=new Set(current);next.has(nodeId)?next.delete(nodeId):next.add(nodeId);return next})}} aria-label={collapsed.has(nodeId)?'Expand layer':'Collapse layer'}>{collapsed.has(nodeId)?'›':'⌄'}</button>}<span className="layer-glyph" aria-hidden="true">{node.type==='section'?'▭':node.type==='image'?'▧':node.type==='button'?'↗':node.type==='page'?'⌂':'•'}</span><span className="layer-name">{label}</span>{node.metadata?.locked&&<span className="layer-state" title="Locked">Locked</span>}</span>{isSelected&&<span className="layer-actions"><button onClick={e=>{e.stopPropagation();dispatch({type:'DUPLICATE_NODE',payload:{nodeId}})}} title="Duplicate">+</button><button onClick={e=>{e.stopPropagation();dispatch({type:'TOGGLE_NODE_VISIBILITY',payload:{nodeId,breakpoint:state.currentBreakpoint}})}} title="Hide or show">◌</button><button onClick={e=>{e.stopPropagation();dispatch({type:'TOGGLE_NODE_LOCK',payload:{nodeId}})}} title={node.metadata?.locked?'Unlock':'Lock'}>⌾</button><button onClick={e=>{e.stopPropagation();const name=window.prompt('Rename',label);if(name)dispatch({type:'RENAME_NODE',payload:{nodeId,name}})}} title="Rename">✎</button><button onClick={e=>{e.stopPropagation();dispatch({type:'DELETE_NODE',payload:{nodeId}})}} title="Delete">×</button></span>}</div>{!collapsed.has(nodeId)&&node.children.map(child=>render(child,depth+1))}</div>};
  return <div className="studio-layers" ref={panelRef}><div className="layers-intro"><b>Layers</b><span>Pick any part of your page.</span></div><div className="panel-search"><span>⌕</span><input aria-label="Search layers" placeholder="Search page" value={query} onChange={e=>setQuery(e.target.value)}/></div>{render(page.rootNodeId)}</div>;
}
