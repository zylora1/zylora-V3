import React from 'react';
import {useStudio} from '../store';
import {useResize} from '../interactions/useResize';
import {useDrag} from '../interactions/useDrag';

function EditableText({value,onChange,onEnter}:{value:string;onChange:(value:string)=>void;onEnter:()=>void}){
 const ref=React.useRef<HTMLSpanElement>(null),editing=React.useRef(false);
 React.useLayoutEffect(()=>{if(ref.current&&!editing.current&&ref.current.textContent!==value)ref.current.textContent=value},[value]);
 return <span ref={ref} className="studio-text-editor" contentEditable suppressContentEditableWarning
   onDoubleClick={e=>{e.stopPropagation();editing.current=true;ref.current?.focus()}}
   onFocus={()=>{editing.current=true}}
   onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();onEnter()};if(e.key==='Escape'){e.preventDefault();ref.current?.blur();onEnter()}}}
   onInput={e=>onChange(e.currentTarget.textContent||'')}
   onBlur={e=>{editing.current=false;onChange(e.currentTarget.textContent||'')}}/>;
}

const acceptsChildren=(type:string)=>['page','section','container','stack','flex','grid','repeater','list','gallery'].includes(type);
const editableTypes=['heading','paragraph','text','button','link'];

export function CanvasNode({nodeId}:{nodeId:string}){
 const {state,dispatch}=useStudio();
 const page=state.document?.pages[state.currentPageId],node=page?.nodes[nodeId];
 if(!page||!node)return null;
 const [rectOverride,setRectOverride]=React.useState<any>(null);
 const dragBase=React.useRef<any>(null);
 const cropMode=state.cropNodeId===nodeId&&node.type==='image';
 const cropValue=node.content?.crop||{x:0,y:0,scale:1};
 const [cropDraft,setCropDraft]=React.useState<{x:number;y:number;scale:number}>(cropValue);
 const cropGesture=React.useRef<{pointerId:number;startX:number;startY:number;base:{x:number;y:number};width:number;height:number}|null>(null);
 const cropCleanup=React.useRef<null|(()=>void)>(null);
 React.useEffect(()=>()=>cropCleanup.current?.(),[]);
 React.useEffect(()=>{if(!cropMode)setCropDraft(node.content?.crop||{x:0,y:0,scale:1})},[cropMode,node.content?.crop?.x,node.content?.crop?.y,node.content?.crop?.scale]);
 let cssStyles:any={...node.style.css};let effectiveVisibility=node.visibility;
 if(state.currentBreakpoint!=='desktop'){
  const override=node.responsiveOverrides[state.currentBreakpoint];
  const tablet=state.currentBreakpoint==='mobile'?node.responsiveOverrides.tablet:null;
  cssStyles={...cssStyles,...(tablet?.style?.css||{}),...(override?.style?.css||{})};
  effectiveVisibility=override?.visibility||tablet?.visibility||effectiveVisibility;
 }
 const isSelected=state.selectedNodeIds.includes(nodeId),isLocked=!!node.metadata?.locked;
 const isAbsolute=cssStyles.position==='absolute'||cssStyles.position==='fixed';
 const elementRef=React.useRef<HTMLElement|null>(null);
 const gesture=React.useRef<{pointerId:number;startX:number;startY:number;base:any;active:false;kind:'select'|'move'}|null>(null);
 const suppressClick=React.useRef(false);
 const getRect=()=>{const el=elementRef.current;if(!el)return{x:parseFloat(cssStyles.left)||0,y:parseFloat(cssStyles.top)||0,w:100,h:40};const r=el.getBoundingClientRect();const parent=el.parentElement?.getBoundingClientRect();return{x:isAbsolute?parseFloat(cssStyles.left)||0:(r.left-(parent?.left||r.left))/state.zoom,y:isAbsolute?parseFloat(cssStyles.top)||0:(r.top-(parent?.top||r.top))/state.zoom,w:r.width/state.zoom,h:r.height/state.zoom}};
 const previewUpdate=(rect:any,lines:any[]=[])=>{setRectOverride(rect);dispatch({type:'SET_SNAP_LINES',payload:lines})};
 const endDrag=(rect:any)=>{const base=dragBase.current||getRect();setRectOverride(null);dispatch({type:'SET_SNAP_LINES',payload:[]});if(!state.document)return;const geometry=isAbsolute?{left:`${Math.round(rect.x)}px`,top:`${Math.round(rect.y)}px`}:{transform:`translate(${Math.round(rect.x-base.x)}px, ${Math.round(rect.y-base.y)}px)`};dragBase.current=null;dispatch({type:'UPDATE_NODE_GEOMETRY',payload:{nodeId,geometry}})};
 const {startDrag}=useDrag(previewUpdate,endDrag,state.zoom,()=>{const el=elementRef.current,parent=el?.parentElement;if(!el||!parent)return{peers:[],parent:null};const pr=parent.getBoundingClientRect();const peers=Array.from(parent.children).filter(x=>x!==el).map(x=>{const r=(x as HTMLElement).getBoundingClientRect();return{x:(r.left-pr.left)/state.zoom,y:(r.top-pr.top)/state.zoom,w:r.width/state.zoom,h:r.height/state.zoom}});return{peers,parent:{x:0,y:0,w:pr.width/state.zoom,h:pr.height/state.zoom}}});
 const endResize=(rect:any)=>{setRectOverride(null);dispatch({type:'SET_SNAP_LINES',payload:[]});dispatch({type:'UPDATE_NODE_GEOMETRY',payload:{nodeId,geometry:{width:`${Math.round(rect.w)}px`,height:`${Math.round(rect.h)}px`,...(isAbsolute?{left:`${Math.round(rect.x)}px`,top:`${Math.round(rect.y)}px`}:{})}}})};
 const {startResize}=useResize({x:0,y:0,w:0,h:0},previewUpdate,endResize,state.zoom);
 const finishCrop=()=>{dispatch({type:'UPDATE_NODE_CROP',payload:{nodeId,crop:cropDraft}});dispatch({type:'SET_CROP_MODE',payload:null})};
 const cancelCrop=()=>{setCropDraft(cropValue);dispatch({type:'SET_CROP_MODE',payload:null})};
 const cropPointerDown=(e:React.PointerEvent)=>{e.stopPropagation();e.preventDefault();const frame=elementRef.current?.getBoundingClientRect();if(!frame)return;const start={x:cropDraft.x,y:cropDraft.y};const g={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,base:start,width:frame.width,height:frame.height};cropGesture.current=g;const move=(event:PointerEvent)=>{if(event.pointerId!==g.pointerId)return;const scale=Math.max(1,cropDraft.scale),max=50*scale;setCropDraft(previous=>({...previous,x:Math.max(-max,Math.min(max,g.base.x+(event.clientX-g.startX)/g.width*100)),y:Math.max(-max,Math.min(max,g.base.y+(event.clientY-g.startY)/g.height*100))}))};const up=(event:PointerEvent)=>{if(event.pointerId!==g.pointerId)return;window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);cropCleanup.current=null;cropGesture.current=null};cropCleanup.current=()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);cropGesture.current=null};window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up)};
 const cropPointerMove=(_:React.PointerEvent)=>{};
 const cropPointerUp=(_:React.PointerEvent)=>{};
 const select=(e:React.MouseEvent)=>{e.stopPropagation();dispatch({type:'SELECT_NODE',payload:e.shiftKey?(isSelected?state.selectedNodeIds.filter(id=>id!==nodeId):[...state.selectedNodeIds,nodeId]):[nodeId]})};
 const pointerDown=(e:React.PointerEvent)=>{
  if(isLocked)return;
  if(e.button===1||(window as any).__zyloraSpacePressed)return;
  if((e.target as HTMLElement).closest('.studio-resize-handle,.studio-floating-actions'))return;
  // Keep nested node gestures isolated; this does not prevent native scrolling.
  e.stopPropagation();
  // A pointerdown is only a click candidate. Geometry is never mutated until
  // an already-selected node crosses the intentional-drag threshold.
  const el=elementRef.current;if(!el)return;
  const base=getRect();dragBase.current=base;
  gesture.current={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,base,active:false,kind:isSelected?'move':'select'};
  const move=(event:PointerEvent)=>{
   const g=gesture.current;if(!g||event.pointerId!==g.pointerId)return;
   const distance=Math.hypot(event.clientX-g.startX,event.clientY-g.startY);
   if(g.kind==='select'||g.active||distance<6)return;
   g.active=true;suppressClick.current=true;
   window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);
   el.setPointerCapture?.(event.pointerId);
   startDrag(event,g.base);
  };
  const finish=(cancelled=false)=>{
   const g=gesture.current;if(!g||g.pointerId!==e.pointerId)return;
   window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);
   gesture.current=null;
   if(!g.active&&!cancelled&&g.kind==='select')select(e as unknown as React.MouseEvent);
   if(!g.active&&!cancelled&&g.kind==='move')dragBase.current=null;
  };
  const up=(event:PointerEvent)=>{if(event.pointerId!==e.pointerId)return;finish(false)};
  const cancel=()=>finish(true);
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);
 };
 const drop=(e:React.DragEvent)=>{
  // Let file drops bubble to the workspace so the normal upload pipeline handles
  // them. Canvas nodes only consume document-aware layer drops and Add-panel
  // primitives; this keeps a drag over a node from swallowing OS file drops.
  if(Array.from(e.dataTransfer.types).includes('Files'))return;
  e.preventDefault();e.stopPropagation();
  const dropped=e.dataTransfer.getData('studio/node-id');
  if(dropped&&dropped!==nodeId&&acceptsChildren(node.type))dispatch({type:'REPARENT_NODE',payload:{nodeId:dropped,newParentId:nodeId}});
  const raw=e.dataTransfer.getData('application/x-zylora-node')||((window as any).__zyloraDraggingNode?JSON.stringify((window as any).__zyloraDraggingNode):'');
  if(raw&&acceptsChildren(node.type)){
   try{const item=JSON.parse(raw);dispatch({type:'INSERT_NODE',payload:{parentId:nodeId,node:{type:item.type||'text',metadata:{displayName:item.label||'Text'}}}})}catch{/* invalid drag payloads are ignored safely */}
  }
 };
 const Tag:any=node.type==='section'?'section':node.type==='heading'?'h2':node.type==='button'?'button':node.type==='link'?'a':node.type==='form'?'form':node.type==='navigation'?'nav':'div';
 const renderHandle=(pos:string)=>{if(!isSelected||isLocked)return null;const style:any={position:'absolute',width:9,height:9,background:'#fff',border:'1px solid #4263eb',zIndex:1000};if(pos.includes('top'))style.top=-5;if(pos.includes('bottom'))style.bottom=-5;if(pos.includes('left'))style.left=-5;if(pos.includes('right'))style.right=-5;if(pos==='top'||pos==='bottom'){style.left='calc(50% - 4px)';style.cursor='ns-resize'}if(pos==='left'||pos==='right'){style.top='calc(50% - 4px)';style.cursor='ew-resize'}if(pos.includes('top')&&pos.includes('left')||pos.includes('bottom')&&pos.includes('right'))style.cursor='nwse-resize';if(pos.includes('top')&&pos.includes('right')||pos.includes('bottom')&&pos.includes('left'))style.cursor='nesw-resize';return <span key={pos} className="studio-resize-handle" data-handle={pos} style={style} onPointerDown={e=>{e.stopPropagation();const el=elementRef.current;if(el)startResize(e,pos,getRect())}}/>};
 const renderStyle:any={...cssStyles,...(rectOverride?{width:`${rectOverride.w}px`,height:`${rectOverride.h}px`,...(isAbsolute?{left:`${rectOverride.x}px`,top:`${rectOverride.y}px`}:{transform:`translate(${rectOverride.x-(dragBase.current?.x||0)}px, ${rectOverride.y-(dragBase.current?.y||0)}px)`})}:{}),position:cssStyles.position||'relative',display:effectiveVisibility==='hidden'?'none':cssStyles.display};
 const props:any={ref:elementRef,style:renderStyle,onClick:(e:React.MouseEvent)=>{if(suppressClick.current){suppressClick.current=false;return}select(e)},onPointerDown:pointerDown,onDragOver:e=>e.preventDefault(),onDrop:drop,'data-studio-id':node.id,'data-studio-type':node.type,'data-studio-selected':isSelected?'true':undefined,'aria-label':node.accessibility?.ariaLabel||undefined};
 if(Tag==='img'){props.src=node.content.src;props.alt=node.content.alt||''}
 if(Tag==='a'&&node.content.href){props.href=node.content.href; if(node.metadata?.linkTarget==='_blank'){props.target='_blank';props.rel='noopener noreferrer'}}
 const imageContent=node.type==='image'?<div className={`studio-image-frame${cropMode?' crop-mode':''}`} onPointerDown={cropMode?cropPointerDown:undefined} onPointerMove={cropMode?cropPointerMove:undefined} onPointerUp={cropMode?cropPointerUp:undefined} style={{width:'100%',height:'100%',overflow:'hidden',position:'relative',cursor:cropMode?'grab':undefined}}><img src={node.content.src||undefined} alt={node.content.alt||''} style={{width:'100%',height:'100%',objectFit:cssStyles.objectFit||'cover',objectPosition:`${50+cropDraft.x}% ${50+cropDraft.y}%`,transform:`scale(${cropDraft.scale})`,display:'block',pointerEvents:cropMode?'none':'auto'}}/>{cropMode&&<div className="crop-toolbar" onPointerDown={e=>e.stopPropagation()}><button aria-label="Zoom out crop" onClick={()=>setCropDraft(v=>({...v,scale:Math.max(1,+(v.scale-.1).toFixed(2))}))}>−</button><input aria-label="Crop zoom" type="range" min="1" max="3" step=".05" value={cropDraft.scale} onChange={e=>setCropDraft(v=>({...v,scale:Number(e.target.value)}))}/><button aria-label="Zoom in crop" onClick={()=>setCropDraft(v=>({...v,scale:Math.min(3,+(v.scale+.1).toFixed(2))}))}>＋</button><button onClick={()=>setCropDraft({x:0,y:0,scale:1})}>Reset</button><button className="primary" onClick={finishCrop}>Done</button><button onClick={cancelCrop}>Cancel</button></div>}</div>:null;
 const content=node.type==='image'?imageContent:editableTypes.includes(node.type)&&node.children.length===0?<EditableText value={node.content.text||''} onChange={text=>dispatch({type:'UPDATE_NODE_TEXT',payload:{nodeId,text}})} onEnter={()=>elementRef.current?.blur()}/>:node.content.text||node.content.html||null;
 return <Tag {...props}>{isSelected&&!cropMode&&<div className="studio-floating-actions" aria-hidden="true">•••</div>}{isSelected&&!cropMode&&['top-left','top','top-right','right','bottom-right','bottom','bottom-left','left'].map(renderHandle)}{content}{node.children.map(id=><CanvasNode key={id} nodeId={id}/>)}</Tag>;
}
