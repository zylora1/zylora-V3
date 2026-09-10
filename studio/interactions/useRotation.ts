import {useEffect,useRef,useState} from 'react';

export function useRotation(onCommit:(angle:number)=>void){
 const [angle,setAngle]=useState<number|null>(null);
 const cleanup=useRef<null|(()=>void)>(null),commit=useRef(onCommit);
 commit.current=onCommit;
 useEffect(()=>()=>cleanup.current?.(),[]);
 const start=(event:React.PointerEvent,element:HTMLElement|null,base:number)=>{
  event.preventDefault();event.stopPropagation();cleanup.current?.();if(!element)return;
  const bounds=element.getBoundingClientRect(),pointerId=event.pointerId;
  const center={x:bounds.left+bounds.width/2,y:bounds.top+bounds.height/2};
  const initial=Math.atan2(event.clientY-center.y,event.clientX-center.x)*180/Math.PI;
  let frame=0,moved=false;
  const calculate=(e:PointerEvent)=>{
   const current=Math.atan2(e.clientY-center.y,e.clientX-center.x)*180/Math.PI;
   let value=base+((current-initial+540)%360)-180;
   // Shift enables predictable 15-degree magnetic rotation without taking
   // away arbitrary-angle rotation when the modifier is released.
   if(e.shiftKey)value=Math.round(value/15)*15;
   return Math.round(value*100)/100;
  };
  const finish=()=>{cancelAnimationFrame(frame);window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);setAngle(null);cleanup.current=null};
  const move=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;moved=true;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>setAngle(calculate(e)))};
  const up=(e:PointerEvent)=>{if(e.pointerId!==pointerId)return;const value=calculate(e);finish();if(moved)commit.current(value)};
  const cancel=(e:PointerEvent)=>{if(e.pointerId===pointerId)finish()};
  try{event.currentTarget.setPointerCapture(pointerId)}catch{}
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);cleanup.current=finish;
 };
 return {angle,start};
}
