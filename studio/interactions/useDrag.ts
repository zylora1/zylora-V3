import {useEffect,useRef,useState} from 'react';import {Rect} from '../geometry/math';import {computeSnapping,SnapLine} from '../geometry/snapping';
import {screenDeltaToWorld} from '../engine/coordinates';
type PointerLike={clientX:number;clientY:number;pointerId?:number;ctrlKey?:boolean;metaKey?:boolean;stopPropagation?:()=>void;preventDefault?:()=>void};
export function useDrag(onDragUpdate:(rect:Rect,lines:SnapLine[])=>void,onDragEnd:(rect:Rect)=>void,zoom=1,getTargets:()=>{peers:Rect[];parent:Rect|null}=()=>({peers:[],parent:null})){
 const [isDragging,setDragging]=useState(false),cleanup=useRef<null|(()=>void)>(null),latest=useRef({onDragUpdate,onDragEnd,zoom,getTargets});latest.current={onDragUpdate,onDragEnd,zoom,getTargets};useEffect(()=>()=>cleanup.current?.(),[]);
 const startDrag=(event:PointerLike,currentRect:Rect)=>{event.stopPropagation?.();event.preventDefault?.();cleanup.current?.();const start={x:event.clientX,y:event.clientY},base={...currentRect},pointerId=event.pointerId,targets=latest.current.getTargets();setDragging(true);
  const calculate=(e:{clientX:number;clientY:number;ctrlKey?:boolean;metaKey?:boolean})=>{const api=latest.current,delta=screenDeltaToWorld({x:e.clientX-start.x,y:e.clientY-start.y},api.zoom),raw={...base,x:base.x+delta.x,y:base.y+delta.y};return computeSnapping(raw,targets.peers,targets.parent,6/api.zoom,{disableSnapping:e.ctrlKey||e.metaKey,explicitGuides:(window as any).__zyloraCanvasGuides||[]})};
  let frame=0;let pending:{clientX:number;clientY:number;ctrlKey?:boolean;metaKey?:boolean}|null=null;
  const finish=()=>{cancelAnimationFrame(frame);pending=null;window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);window.removeEventListener('blur',cancelInteraction);window.removeEventListener('keydown',keyDown);cleanup.current=null;setDragging(false)};
  const move=(e:PointerEvent)=>{if(pointerId!==undefined&&e.pointerId!==pointerId)return;pending={clientX:e.clientX,clientY:e.clientY,ctrlKey:e.ctrlKey,metaKey:e.metaKey};if(frame)return;frame=requestAnimationFrame(()=>{frame=0;const point=pending;if(!point)return;pending=null;const result=calculate(point);latest.current.onDragUpdate(result.snappedRect,result.snapLines)})};
  const up=(e:PointerEvent)=>{if(pointerId!==undefined&&e.pointerId!==pointerId)return;const result=calculate(e);finish();latest.current.onDragEnd(result.snappedRect)};
  const cancel=()=>{cancelInteraction()};
  const keyDown=(e:KeyboardEvent)=>{if(e.key!=='Escape')return;e.preventDefault();cancelInteraction()};
  const cancelInteraction=()=>{finish();latest.current.onDragEnd(base)};
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);window.addEventListener('blur',cancelInteraction);window.addEventListener('keydown',keyDown);cleanup.current=finish;
 };
 return {isDragging,startDrag};
}
