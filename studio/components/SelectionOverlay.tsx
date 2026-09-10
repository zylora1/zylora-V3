import React from 'react';
import {isNodeLocked, useStudio} from '../store';
import {computeResize,Rect} from '../geometry/math';
import {transformSelectionItem} from '../geometry/transform';

const handles:Record<string,string>={nw:'top-left',n:'top',ne:'top-right',e:'right',se:'bottom-right',s:'bottom',sw:'bottom-left',w:'left'};
type Kind='move'|'resize'|'rotate';

/** Aggregate transforms preview locally; one canonical mutation on pointer-up. */
export function SelectionOverlay(){
 const {state,dispatch}=useStudio();
 const [bounds,setBounds]=React.useState<Rect|null>(null);
 const [preview,setPreview]=React.useState<{rect:Rect;angle:number}|null>(null);
 const cleanup=React.useRef<null|(()=>void)>(null);
 const page=state.document?.pages[state.currentPageId];
 const ids=state.selectedNodeIds.filter(id=>{
  const node=page?.nodes[id];
  if(!node||isNodeLocked(node)||id===page?.rootNodeId)return false;
  let parent=node.parentId;
  while(parent){if(state.selectedNodeIds.includes(parent))return false;parent=page?.nodes[parent]?.parentId||null}
  return true;
 });
 const elements=()=>ids.map(id=>document.querySelector<HTMLElement>(`[data-studio-id="${CSS.escape(id)}"]`)).filter(Boolean) as HTMLElement[];
 const recalc=React.useCallback(()=>{
  const canvas=document.querySelector<HTMLElement>('.studio-canvas');
  const selected=elements();
  if(!canvas||selected.length<2){setBounds(null);return}
  const cr=canvas.getBoundingClientRect(),rects=selected.map(el=>el.getBoundingClientRect());
  const x=(Math.min(...rects.map(r=>r.left))-cr.left)/state.zoom,y=(Math.min(...rects.map(r=>r.top))-cr.top)/state.zoom;
  setBounds({x,y,w:(Math.max(...rects.map(r=>r.right))-cr.left)/state.zoom-x,h:(Math.max(...rects.map(r=>r.bottom))-cr.top)/state.zoom-y});
 },[ids.join('|'),state.zoom,state.currentBreakpoint,state.document]);
 React.useLayoutEffect(()=>{recalc();const canvas=document.querySelector('.studio-canvas');if(!canvas)return;const observer=new ResizeObserver(recalc);observer.observe(canvas);return()=>observer.disconnect()},[recalc]);
 React.useEffect(()=>()=>cleanup.current?.(),[]);
 if(!bounds||ids.length<2)return null;
 const start=(event:React.PointerEvent,kind:Kind,handle='se')=>{
  event.preventDefault();event.stopPropagation();cleanup.current?.();
  const canvas=document.querySelector<HTMLElement>('.studio-canvas');if(!canvas)return;
  const cr=canvas.getBoundingClientRect(),initial={...bounds},pointerId=event.pointerId;
  const startPoint={x:event.clientX,y:event.clientY},zoom=state.zoom;
  const originals=elements().map(el=>{
   const r=el.getBoundingClientRect(),css=getComputedStyle(el);
   let parent=el.parentElement,parentRotation=0;
   while(parent&&parent!==canvas){parentRotation+=parseFloat(getComputedStyle(parent).rotate)||0;parent=parent.parentElement}
   return {id:el.dataset.studioId!,el,style:el.getAttribute('style'),angle:parseFloat(css.rotate)||0,parentRotation,
    local:{x:el.offsetLeft,y:el.offsetTop,w:el.offsetWidth,h:el.offsetHeight},
    world:{x:(r.left-cr.left)/zoom,y:(r.top-cr.top)/zoom,w:r.width/zoom,h:r.height/zoom}};
  });
  const center={x:cr.left+(initial.x+initial.w/2)*zoom,y:cr.top+(initial.y+initial.h/2)*zoom};
  const startAngle=Math.atan2(event.clientY-center.y,event.clientX-center.x)*180/Math.PI;
  let frame=0,moved=false;
  const calculate=(e:PointerEvent)=>{
   let rect={...initial},angle=0;
   if(kind==='move'){rect.x+=(e.clientX-startPoint.x)/zoom;rect.y+=(e.clientY-startPoint.y)/zoom}
   else if(kind==='resize')rect=computeResize(initial,startPoint,{x:e.clientX,y:e.clientY},handles[handle],zoom,{aspect:e.shiftKey,center:e.altKey});
   else{angle=Math.atan2(e.clientY-center.y,e.clientX-center.x)*180/Math.PI-startAngle;if(e.shiftKey)angle=Math.round(angle/15)*15}
   return {rect,angle};
  };
  const geometries=(value:{rect:Rect;angle:number})=>originals.map(o=>{
   const r=transformSelectionItem(o.world,o.local,o.parentRotation,initial,value.rect,value.angle);
   return {nodeId:o.id,geometry:{position:'absolute',left:`${r.x}px`,top:`${r.y}px`,width:`${r.w}px`,height:`${r.h}px`,rotate:`${o.angle+value.angle}deg`}};
  });
  const restore=()=>originals.forEach(o=>{if(o.style===null)o.el.removeAttribute('style');else o.el.setAttribute('style',o.style)});
  const finish=()=>{cancelAnimationFrame(frame);window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);restore();setPreview(null);cleanup.current=null};
  const move=(e:PointerEvent)=>{
   if(e.pointerId!==pointerId)return;
   moved=moved||Math.hypot(e.clientX-startPoint.x,e.clientY-startPoint.y)>=3;
   if(!moved)return;
   cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const value=calculate(e);setPreview(value);geometries(value).forEach((g,i)=>Object.assign(originals[i].el.style,g.geometry))});
  };
  const up=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;const changes=geometries(calculate(e));finish();if(moved)dispatch({type:'UPDATE_SELECTED_GEOMETRIES',payload:{geometries:changes}})};
  const cancel=(e:PointerEvent)=>{if(e.pointerId===pointerId)finish()};
  try{event.currentTarget.setPointerCapture(pointerId)}catch{}
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);cleanup.current=finish;
 };
 const rect=preview?.rect||bounds;
 return <div className="multi-selection-overlay" style={{left:rect.x,top:rect.y,width:rect.w,height:rect.h,transform:`rotate(${preview?.angle||0}deg)`,'--handle-scale':1/state.zoom} as React.CSSProperties} data-testid="multi-selection-overlay" onPointerDown={e=>start(e,'move')}>
  <span className="selection-badge">{ids.length} selected</span>
  {Object.keys(handles).filter(handle=>!(['n','s'].includes(handle)&&rect.h*state.zoom<28)&&!(['e','w'].includes(handle)&&rect.w*state.zoom<28)).map(handle=><span key={handle} className={`multi-handle ${handle}`} aria-label={`Resize selection ${handles[handle]}`} onPointerDown={e=>start(e,'resize',handle)}/>)}
  <span className="multi-rotate-handle" aria-label="Rotate selection" onPointerDown={e=>start(e,'rotate')}><em>{preview?.angle?`${Math.round(preview.angle)}°`:''}</em></span>
 </div>;
}
