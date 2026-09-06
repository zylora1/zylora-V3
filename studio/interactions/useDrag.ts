import {useEffect,useRef,useState} from 'react';import {Rect} from '../geometry/math';import {computeSnapping,SnapLine} from '../geometry/snapping';
export function useDrag(onDragUpdate:(rect:Rect,lines:SnapLine[])=>void,onDragEnd:(rect:Rect)=>void,zoom=1,getTargets:()=>{peers:Rect[];parent:Rect|null}=()=>({peers:[],parent:null})){
 const [isDragging,setDragging]=useState(false),cleanup=useRef<null|(()=>void)>(null),latest=useRef({onDragUpdate,onDragEnd,zoom,getTargets});latest.current={onDragUpdate,onDragEnd,zoom,getTargets};useEffect(()=>()=>cleanup.current?.(),[]);
 const startDrag=(event:React.MouseEvent,currentRect:Rect)=>{event.stopPropagation();event.preventDefault();cleanup.current?.();const start={x:event.clientX,y:event.clientY},base={...currentRect};setDragging(true);
  const calculate=(e:MouseEvent)=>{const api=latest.current,raw={...base,x:base.x+(e.clientX-start.x)/api.zoom,y:base.y+(e.clientY-start.y)/api.zoom},targets=api.getTargets();return computeSnapping(raw,targets.peers,targets.parent,6/api.zoom)};
  const move=(e:MouseEvent)=>{const result=calculate(e);latest.current.onDragUpdate(result.snappedRect,result.snapLines)};
  const up=(e:MouseEvent)=>{const result=calculate(e);window.removeEventListener('mousemove',move);window.removeEventListener('mouseup',up);cleanup.current=null;setDragging(false);latest.current.onDragEnd(result.snappedRect)};
  window.addEventListener('mousemove',move);window.addEventListener('mouseup',up);cleanup.current=()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseup',up)};
 };
 return {isDragging,startDrag};
}

