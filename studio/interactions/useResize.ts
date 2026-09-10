import {useEffect,useRef,useState} from 'react';
import {computeResize,Rect} from '../geometry/math';
import {computeSnapping} from '../geometry/snapping';
type Targets={peers:Rect[];parent:Rect|null};

export function useResize(_initialRect:Rect,onResizeUpdate:(rect:Rect,lines?:any[])=>void,onResizeEnd:(rect:Rect)=>void,zoom=1,getTargets:()=>Targets=()=>({peers:[],parent:null}),rotation=0){
 const [isResizing,setResizing]=useState(false);
 const cleanup=useRef<null|(()=>void)>(null);
 const latest=useRef({onResizeUpdate,onResizeEnd,zoom,getTargets,rotation});
 latest.current={onResizeUpdate,onResizeEnd,zoom,getTargets,rotation};
 useEffect(()=>()=>cleanup.current?.(),[]);
 const startResize=(event:React.PointerEvent,handle:string,currentRect:Rect)=>{
  event.stopPropagation();event.preventDefault();cleanup.current?.();
  const target=event.currentTarget as HTMLElement,pointerId=event.pointerId;
  try{target.setPointerCapture(pointerId)}catch{}
  const start={x:event.clientX,y:event.clientY},base={...currentRect};
  const targets=latest.current.getTargets();
  let frame=0;
  setResizing(true);
  const calc=(e:PointerEvent)=>{
   const api=latest.current;
   const raw=computeResize(base,start,{x:e.clientX,y:e.clientY},handle,api.zoom,{aspect:e.shiftKey,center:e.altKey,rotation:api.rotation});
   // Snap the moving edge, not the entire rectangle and its fixed anchor.
   if(api.rotation||e.shiftKey||e.altKey)return {snappedRect:raw,snapLines:[]};
   const right=handle.includes('right'),bottom=handle.includes('bottom');
   const horizontal=right||handle.includes('left'),vertical=bottom||handle.includes('top');
   const point={x:raw.x+(right?raw.w:0),y:raw.y+(bottom?raw.h:0),w:0,h:0};
   const snap=computeSnapping(point,targets.peers,targets.parent,6/api.zoom,{disableSnapping:e.ctrlKey||e.metaKey});
   const dx=horizontal?snap.snappedRect.x-point.x:0,dy=vertical?snap.snappedRect.y-point.y:0;
   const rect={x:raw.x+(right?0:dx),y:raw.y+(bottom?0:dy),w:raw.w+(right?dx:-dx),h:raw.h+(bottom?dy:-dy)};
   if(rect.w<10||rect.h<10)return {snappedRect:raw,snapLines:[]};
   return {snappedRect:rect,snapLines:snap.snapLines.filter(l=>l.orientation==='vertical'?horizontal:vertical)};
  };
  const finish=()=>{
   cancelAnimationFrame(frame);
   window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);
   if(target.hasPointerCapture(pointerId))target.releasePointerCapture(pointerId);
   cleanup.current=null;setResizing(false);
  };
  const move=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const result=calc(e);latest.current.onResizeUpdate(result.snappedRect,result.snapLines)})};
  const up=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;const rect=calc(e).snappedRect;finish();latest.current.onResizeEnd(rect)};
  const cancel=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;finish();latest.current.onResizeUpdate(base,[])};
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);cleanup.current=finish;
 };
 return {isResizing,startResize};
}
