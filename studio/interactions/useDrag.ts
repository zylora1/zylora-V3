import {useEffect,useRef,useState} from 'react';import {Rect} from '../geometry/math';import {computeSnapping,SnapLine} from '../geometry/snapping';
type PointerLike={clientX:number;clientY:number;pointerId?:number;stopPropagation?:()=>void;preventDefault?:()=>void};
export function useDrag(onDragUpdate:(rect:Rect,lines:SnapLine[])=>void,onDragEnd:(rect:Rect)=>void,zoom=1,getTargets:()=>{peers:Rect[];parent:Rect|null}=()=>({peers:[],parent:null})){
 const [isDragging,setDragging]=useState(false),cleanup=useRef<null|(()=>void)>(null),latest=useRef({onDragUpdate,onDragEnd,zoom,getTargets});latest.current={onDragUpdate,onDragEnd,zoom,getTargets};useEffect(()=>()=>cleanup.current?.(),[]);
 const startDrag=(event:PointerLike,currentRect:Rect)=>{event.stopPropagation?.();event.preventDefault?.();cleanup.current?.();const start={x:event.clientX,y:event.clientY},base={...currentRect},pointerId=event.pointerId;setDragging(true);
  const calculate=(e:PointerEvent)=>{const api=latest.current,raw={...base,x:base.x+(e.clientX-start.x)/api.zoom,y:base.y+(e.clientY-start.y)/api.zoom},targets=api.getTargets();return computeSnapping(raw,targets.peers,targets.parent,6/api.zoom)};
  const finish=()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);cleanup.current=null;setDragging(false)};
  const move=(e:PointerEvent)=>{if(pointerId!==undefined&&e.pointerId!==pointerId)return;const result=calculate(e);latest.current.onDragUpdate(result.snappedRect,result.snapLines)};
  const up=(e:PointerEvent)=>{if(pointerId!==undefined&&e.pointerId!==pointerId)return;const result=calculate(e);finish();latest.current.onDragEnd(result.snappedRect)};
  const cancel=()=>{finish();latest.current.onDragEnd(base)};
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);cleanup.current=finish;
 };
 return {isDragging,startDrag};
}
