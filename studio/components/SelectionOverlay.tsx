import React from 'react';
import {useStudio} from '../store';

type Bounds={left:number;top:number;width:number;height:number};
type Kind='move'|'resize'|'rotate';

/** Centralized aggregate transformer for multi-selection. */
export function SelectionOverlay(){
  const {state,dispatch}=useStudio();
  const [bounds,setBounds]=React.useState<Bounds|null>(null);
  const [preview,setPreview]=React.useState({x:0,y:0,sx:1,sy:1,rotate:0});
  const canvasRef=React.useRef<HTMLElement|null>(null);
  const page=state.document?.pages[state.currentPageId];
  const ids=state.selectedNodeIds.filter(id=>!!page?.nodes[id]);
  const recalc=React.useCallback(()=>{
    const canvas=document.querySelector<HTMLElement>('.studio-canvas'); canvasRef.current=canvas;
    if(!canvas||ids.length<2){setBounds(null);return;}
    const cr=canvas.getBoundingClientRect();
    const rects=Array.from(document.querySelectorAll<HTMLElement>('[data-studio-selected="true"]')).map(el=>el.getBoundingClientRect());
    if(rects.length<2){setBounds(null);return;}
    const left=Math.min(...rects.map(r=>(r.left-cr.left)/state.zoom)),top=Math.min(...rects.map(r=>(r.top-cr.top)/state.zoom));
    const right=Math.max(...rects.map(r=>(r.right-cr.left)/state.zoom)),bottom=Math.max(...rects.map(r=>(r.bottom-cr.top)/state.zoom));
    setBounds({left,top,width:right-left,height:bottom-top});
  },[ids.join('|'),state.zoom,state.currentBreakpoint]);
  React.useLayoutEffect(()=>{recalc();const canvas=document.querySelector('.studio-canvas');if(!canvas)return;const observer=new ResizeObserver(recalc);observer.observe(canvas);return()=>observer.disconnect()},[recalc,state.document]);
  if(!bounds||ids.length<2)return null;
  const start=(e:React.PointerEvent,kind:Kind,handle='se')=>{
    e.preventDefault();e.stopPropagation();const canvas=canvasRef.current;if(!canvas)return;
    const cr=canvas.getBoundingClientRect(),startX=e.clientX,startY=e.clientY,initial=bounds;
    const originals=ids.map(id=>{const el=document.querySelector<HTMLElement>(`[data-studio-id="${CSS.escape(id)}"]`),n=page?.nodes[id];if(!el||!n)return null;const r=el.getBoundingClientRect();return{id,el,n,left:(r.left-cr.left)/state.zoom,top:(r.top-cr.top)/state.zoom,width:r.width/state.zoom,height:r.height/state.zoom,rotate:parseFloat(n.style.css.rotate||'0')||0}}).filter(Boolean) as Array<any>;
    const center={x:cr.left+(initial.left+initial.width/2)*state.zoom,y:cr.top+(initial.top+initial.height/2)*state.zoom};
    const startAngle=Math.atan2(e.clientY-center.y,e.clientX-center.x)*180/Math.PI;
    const move=(event:PointerEvent)=>{if(event.pointerId!==e.pointerId)return;const dx=(event.clientX-startX)/state.zoom,dy=(event.clientY-startY)/state.zoom;
      if(kind==='move'){setPreview({x:dx,y:dy,sx:1,sy:1,rotate:0});originals.forEach(o=>o.el.style.transform=`translate(${dx*state.zoom}px,${dy*state.zoom}px)`);return;}
      if(kind==='rotate'){const angle=Math.atan2(event.clientY-center.y,event.clientX-center.x)*180/Math.PI-startAngle;setPreview({x:0,y:0,sx:1,sy:1,rotate:angle});originals.forEach(o=>o.el.style.transform=`rotate(${angle}deg)`);return;}
      let left=initial.left,top=initial.top,right=initial.left+initial.width,bottom=initial.top+initial.height;
      if(handle.includes('left'))left=Math.min(right-10,left+dx);if(handle.includes('right'))right=Math.max(left+10,right+dx);if(handle.includes('top'))top=Math.min(bottom-10,top+dy);if(handle.includes('bottom'))bottom=Math.max(top+10,bottom+dy);
      const sx=(right-left)/initial.width,sy=(bottom-top)/initial.height;setPreview({x:left-initial.left,y:top-initial.top,sx,sy,rotate:0});
      originals.forEach(o=>{const x=left+(o.left-initial.left)*sx,y=top+(o.top-initial.top)*sy,w=o.width*sx,h=o.height*sy;o.el.style.transform=`translate(${(x-o.left)*state.zoom}px,${(y-o.top)*state.zoom}px)`;o.el.style.width=`${w}px`;o.el.style.height=`${h}px`});
    };
    const finish=(event:PointerEvent)=>{if(event.pointerId!==e.pointerId)return;window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',finish);window.removeEventListener('pointercancel',finish);originals.forEach(o=>{o.el.style.transform='';o.el.style.width='';o.el.style.height=''});const dx=(event.clientX-startX)/state.zoom,dy=(event.clientY-startY)/state.zoom;
      if(kind==='move')dispatch({type:'UPDATE_SELECTED_GEOMETRIES',payload:{geometries:originals.map(o=>({nodeId:o.id,geometry:{position:'absolute',left:`${Math.round(o.left+dx)}px`,top:`${Math.round(o.top+dy)}px`}}))}});
      else if(kind==='rotate'){const angle=Math.atan2(event.clientY-center.y,event.clientX-center.x)*180/Math.PI-startAngle;dispatch({type:'UPDATE_SELECTED_GEOMETRIES',payload:{geometries:originals.map(o=>({nodeId:o.id,geometry:{rotate:`${Math.round(o.rotate+angle)}deg`}}))}});}
      else {let left=initial.left,top=initial.top,right=initial.left+initial.width,bottom=initial.top+initial.height;if(handle.includes('left'))left=Math.min(right-10,left+dx);if(handle.includes('right'))right=Math.max(left+10,right+dx);if(handle.includes('top'))top=Math.min(bottom-10,top+dy);if(handle.includes('bottom'))bottom=Math.max(top+10,bottom+dy);const sx=(right-left)/initial.width,sy=(bottom-top)/initial.height;dispatch({type:'UPDATE_SELECTED_GEOMETRIES',payload:{geometries:originals.map(o=>({nodeId:o.id,geometry:{position:'absolute',left:`${Math.round(left+(o.left-initial.left)*sx)}px`,top:`${Math.round(top+(o.top-initial.top)*sy)}px`,width:`${Math.max(10,Math.round(o.width*sx))}px`,height:`${Math.max(10,Math.round(o.height*sy))}px`}}))}});}
      setPreview({x:0,y:0,sx:1,sy:1,rotate:0});requestAnimationFrame(recalc);
    };
    window.addEventListener('pointermove',move);window.addEventListener('pointerup',finish);window.addEventListener('pointercancel',finish);
  };
  const style={left:bounds.left+preview.x,top:bounds.top+preview.y,width:bounds.width*preview.sx,height:bounds.height*preview.sy,transform:`rotate(${preview.rotate}deg)`};
  return <div className="multi-selection-overlay" style={style} data-testid="multi-selection-overlay" onPointerDown={e=>start(e,'move')}>
    <span className="selection-badge">{ids.length} selected</span>
    {['nw','n','ne','e','se','s','sw','w'].map(handle=><span key={handle} className={`multi-handle ${handle}`} onPointerDown={e=>start(e,'resize',handle)}/>)}
    <span className="multi-rotate-handle" aria-label="Rotate selection" onPointerDown={e=>start(e,'rotate')}><em>{preview.rotate?`${Math.round(preview.rotate)}°`:''}</em></span>
  </div>;
}
