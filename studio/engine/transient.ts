import {createElement,Fragment,useSyncExternalStore} from 'react';
import type {SnapLine} from '../geometry/snapping';

let snapshot:SnapLine[]=[];
const listeners=new Set<()=>void>();
const notify=()=>listeners.forEach(listener=>listener());

/** Gesture-only guide state. It deliberately lives outside the document reducer. */
export const setTransientSnapLines=(lines:SnapLine[])=>{snapshot=lines;notify()};
export const clearTransientSnapLines=()=>{if(snapshot.length===0)return;snapshot=[];notify()};
const subscribe=(listener:()=>void)=>{listeners.add(listener);return()=>listeners.delete(listener)};
const getSnapshot=()=>snapshot;

export function TransientSnapLines(){
  const lines=useSyncExternalStore(subscribe,getSnapshot,getSnapshot);
  return createElement(Fragment,null,lines.map((line,index)=>createElement('div',{key:`${line.orientation}-${line.position}-${line.type}-${index}`,className:`snap-guide ${line.orientation} snap-${line.type}`,style:line.orientation==='vertical'?{left:line.position}:{top:line.position}},line.label&&createElement('span',null,line.label))));
}
