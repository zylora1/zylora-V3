import React from 'react';
import {useStudio} from '../store';
import {useResize} from '../interactions/useResize';
import {useDrag} from '../interactions/useDrag';
import {intentionalDrag,rectFromElement} from '../engine';

function studioGradientCss(gradient:any){if(!gradient?.stops?.length)return '';const stops=gradient.stops.map((stop:any)=>`${stop.color}${stop.opacity<1&&/^#[0-9a-f]{6}$/i.test(stop.color)?` / ${stop.opacity}`:''} ${Math.max(0,Math.min(1,Number(stop.position)||0))*100}%`).join(', ');return gradient.type==='radial'?`radial-gradient(circle at ${gradient.centerX??50}% ${gradient.centerY??50}%, ${stops})`:`linear-gradient(${gradient.angle||0}deg, ${stops})`}
function richMarkup(value:string,runs:any[]){const esc=(x:string)=>x.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[c]);if(!runs?.length)return esc(value);const points=Array.from(new Set([0,value.length,...runs.flatMap((r:any)=>[r.start,r.end])].map((x:any)=>Math.max(0,Math.min(value.length,Number(x)))))).sort((a,b)=>a-b);return points.slice(0,-1).map((start,i)=>{const end=points[i+1],marks=runs.filter((r:any)=>r.start<=start&&r.end>=end).reduce((a:any,r:any)=>({...a,...r.marks}),{}),style=Object.entries(marks).filter(([k])=>['fontFamily','fontSize','fontWeight','fontStyle','textDecoration','color','letterSpacing','lineHeight'].includes(k)).map(([k,v])=>`${k.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}:${v}`).join(';'),gradient=studioGradientCss((marks as any).gradient);const gradientStyle=gradient?`background:${gradient};background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;`:'';return `<span${style||gradientStyle?` style="${esc(style+gradientStyle)}"`:''}>${esc(value.slice(start,end))}</span>`}).join('')}
function EditableText({nodeId,value,runs,onChange,onEnter}:{nodeId:string;value:string;runs:any[];onChange:(value:string)=>void;onEnter:()=>void}){
 const ref=React.useRef<HTMLSpanElement>(null);const [editing,setEditing]=React.useState(false);
 const capture=()=>{const sel=window.getSelection();if(!sel||sel.rangeCount===0||sel.isCollapsed||!ref.current?.contains(sel.anchorNode)||!ref.current.contains(sel.focusNode))return;const range=sel.getRangeAt(0),walker=document.createTreeWalker(ref.current,NodeFilter.SHOW_TEXT);let cursor=0,start=-1,end=-1,node:Node|null;while(node=walker.nextNode()){if(node===range.startContainer)start=cursor+range.startOffset;if(node===range.endContainer)end=cursor+range.endOffset;cursor+=(node.textContent||'').length}if(start>=0&&end>=0){if(start>end)[start,end]=[end,start];(window as any).__zyloraRichSelection={nodeId,start,end}}};
 React.useLayoutEffect(()=>{if(!ref.current)return;const markup=richMarkup(value,runs);if(!editing&&ref.current.innerHTML!==markup)ref.current.innerHTML=markup;if(editing&&ref.current.textContent!==value)ref.current.innerHTML=markup},[editing]);
 const richProps:any={ref,className:'studio-text-editor',contentEditable:editing,suppressContentEditableWarning:true};if(!editing)richProps.dangerouslySetInnerHTML={__html:richMarkup(value,runs)};
 return <span {...richProps}
   onMouseDown={e=>{if(e.detail>=2){e.stopPropagation();setEditing(true);requestAnimationFrame(()=>ref.current?.focus())}}}
   onClick={e=>{if(e.detail>=2){e.stopPropagation();setEditing(true);requestAnimationFrame(()=>ref.current?.focus())}}}
   onDoubleClick={e=>{e.stopPropagation();setEditing(true);requestAnimationFrame(()=>ref.current?.focus())}}
   onFocus={()=>setEditing(true)}
   onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();onEnter()};if(e.key==='Escape'){e.preventDefault();ref.current?.blur();onEnter()}}}
   onMouseUp={capture} onKeyUp={capture} onInput={e=>onChange(e.currentTarget.textContent||'')}
   onBlur={e=>{setEditing(false);onChange(e.currentTarget.textContent||'')}}/>;
}

const acceptsChildren=(type:string,kind?:string)=>['page','section','container','stack','flex','grid','repeater','list','gallery'].includes(type)&&!['shape','card','spacer'].includes(String(kind||'').toLowerCase());
const editableTypes=['heading','paragraph','text','button','link'];

export function CanvasNode({nodeId}:{nodeId:string}){
 const {state,dispatch}=useStudio();
 const page=state.document?.pages[state.currentPageId],node=page?.nodes[nodeId];
 if(!page||!node)return null;
 const [rectOverride,setRectOverride]=React.useState<any>(null);
 const [marquee,setMarquee]=React.useState<{left:number;top:number;width:number;height:number}|null>(null);
 const [assetOver,setAssetOver]=React.useState(false);
 const dragBase=React.useRef<any>(null);
 const cropMode=state.cropNodeId===nodeId&&node.type==='image';
 const cropValue=node.content?.crop||{x:0,y:0,scale:1};
 const [cropDraft,setCropDraft]=React.useState<{x:number;y:number;scale:number}>(cropValue);
 const cropGesture=React.useRef<{pointerId:number;startX:number;startY:number;base:{x:number;y:number};width:number;height:number}|null>(null);
 const cropCleanup=React.useRef<null|(()=>void)>(null);
 const previewFrame=React.useRef<number|null>(null);
 const previewLines=React.useRef<any[]>([]);
 React.useEffect(()=>()=>{cropCleanup.current?.();rotationCleanup.current?.();if(previewFrame.current!==null)cancelAnimationFrame(previewFrame.current)},[]);
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
 const [rotationDraft,setRotationDraft]=React.useState<number|null>(null);
 const rotationCleanup=React.useRef<null|(()=>void)>(null);
  const gesture=React.useRef<{pointerId:number;startX:number;startY:number;base:any;active:boolean;kind:'select'|'move'}|null>(null);
 const suppressClick=React.useRef(false);
 const getRect=()=>{const el=elementRef.current;if(!el)return{x:parseFloat(cssStyles.left)||0,y:parseFloat(cssStyles.top)||0,w:100,h:40};return rectFromElement(el,el.parentElement,state.zoom,isAbsolute,cssStyles)};
 const clearPreview=()=>{if(previewFrame.current!==null){cancelAnimationFrame(previewFrame.current);previewFrame.current=null}previewLines.current=[];dispatch({type:'SET_SNAP_LINES',payload:[]})};
 const previewUpdate=(rect:any,lines:any[]=[])=>{setRectOverride(rect);previewLines.current=lines;if(previewFrame.current===null)previewFrame.current=requestAnimationFrame(()=>{previewFrame.current=null;dispatch({type:'SET_SNAP_LINES',payload:previewLines.current})})};
 const endDrag=(rect:any)=>{setRectOverride(null);clearPreview();if(!state.document)return;const geometry={position:'absolute',left:`${Math.round(rect.x)}px`,top:`${Math.round(rect.y)}px`};dragBase.current=null;dispatch({type:'UPDATE_NODE_GEOMETRY',payload:{nodeId,geometry}})};
  const getTargets=()=>{const el=elementRef.current,parent=el?.parentElement;if(!el||!parent)return{peers:[],parent:null};const pr=parent.getBoundingClientRect();const peers=Array.from(parent.children).filter(x=>x!==el).map(x=>{const r=(x as HTMLElement).getBoundingClientRect();return{x:(r.left-pr.left)/state.zoom,y:(r.top-pr.top)/state.zoom,w:r.width/state.zoom,h:r.height/state.zoom}}).filter(r=>r.w>0&&r.h>0);return{peers,parent:{x:0,y:0,w:pr.width/state.zoom,h:pr.height/state.zoom}}};
  const {startDrag}=useDrag(previewUpdate,endDrag,state.zoom,getTargets);
 const endResize=(rect:any)=>{setRectOverride(null);clearPreview();dispatch({type:'UPDATE_NODE_GEOMETRY',payload:{nodeId,geometry:{position:'absolute',width:`${Math.round(rect.w)}px`,height:`${Math.round(rect.h)}px`,left:`${Math.round(rect.x)}px`,top:`${Math.round(rect.y)}px`}}})};
  const {startResize}=useResize({x:0,y:0,w:0,h:0},previewUpdate,endResize,state.zoom,getTargets);
 const startRotate=(e:React.PointerEvent)=>{e.preventDefault();e.stopPropagation();const bounds=elementRef.current?.getBoundingClientRect();if(!bounds)return;const center={x:bounds.left+bounds.width/2,y:bounds.top+bounds.height/2},base=parseFloat(cssStyles.rotate||'0')||0,start=Math.atan2(e.clientY-center.y,e.clientX-center.x)*180/Math.PI;const move=(event:PointerEvent)=>{if(event.pointerId!==e.pointerId)return;const angle=Math.atan2(event.clientY-center.y,event.clientX-center.x)*180/Math.PI;setRotationDraft(Math.round(base+angle-start))};const finish=(event:PointerEvent)=>{if(event.pointerId!==e.pointerId)return;window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',finish);window.removeEventListener('pointercancel',finish);rotationCleanup.current=null;setRotationDraft(current=>{if(current!==null)dispatch({type:'UPDATE_NODE_GEOMETRY',payload:{nodeId,geometry:{rotate:`${current}deg`}}});return null})};rotationCleanup.current=()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',finish);window.removeEventListener('pointercancel',finish)};window.addEventListener('pointermove',move);window.addEventListener('pointerup',finish);window.addEventListener('pointercancel',finish)};
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
  // Commit selection at pointer-down so modifier-key multi-selection remains
  // deterministic even for native button/link nodes whose click event can be
  // consumed by the browser. Geometry still waits for the drag threshold.
  if(!isSelected) dispatch({type:'SELECT_NODE',payload:e.shiftKey?[...state.selectedNodeIds,nodeId]:[nodeId]});
  // A pointerdown is only a click candidate. Geometry is never mutated until
  // an already-selected node crosses the intentional-drag threshold.
  const el=elementRef.current;if(!el)return;
  if(node.type==='page'&&e.target===el){
   e.preventDefault();e.stopPropagation();const bounds=el.getBoundingClientRect(),start={x:(e.clientX-bounds.left)/state.zoom,y:(e.clientY-bounds.top)/state.zoom},pointerId=e.pointerId;let moved=false,latestBox:{left:number;top:number;width:number;height:number}|null=null;
   const move=(event:PointerEvent)=>{if(event.pointerId!==pointerId)return;const current={x:(event.clientX-bounds.left)/state.zoom,y:(event.clientY-bounds.top)/state.zoom};moved=moved||Math.hypot(current.x-start.x,current.y-start.y)>4;if(moved){latestBox={left:Math.min(start.x,current.x),top:Math.min(start.y,current.y),width:Math.abs(current.x-start.x),height:Math.abs(current.y-start.y)};setMarquee(latestBox)}};
   const finish=(event:PointerEvent)=>{if(event.pointerId!==pointerId)return;window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',finish);window.removeEventListener('pointercancel',finish);if(moved&&latestBox){const box=latestBox;const selected=Array.from(el.querySelectorAll<HTMLElement>('[data-studio-id]')).filter(candidate=>{const id=candidate.dataset.studioId||'',candidateNode=page.nodes[id];if(!id||candidateNode?.type==='page'||candidateNode?.metadata?.locked||candidateNode?.children.length)return false;const rect=candidate.getBoundingClientRect(),left=(rect.left-bounds.left)/state.zoom,top=(rect.top-bounds.top)/state.zoom,right=left+rect.width/state.zoom,bottom=top+rect.height/state.zoom;return left<box.left+box.width&&right>box.left&&top<box.top+box.height&&bottom>box.top}).map(candidate=>candidate.dataset.studioId!);dispatch({type:'SELECT_NODE',payload:selected})}else dispatch({type:'SELECT_NODE',payload:[]});setMarquee(null)};
   window.addEventListener('pointermove',move);window.addEventListener('pointerup',finish);window.addEventListener('pointercancel',finish);return;
  }
  const base=getRect();dragBase.current=base;
  gesture.current={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,base,active:false,kind:isSelected?'move':'select'};
  const move=(event:PointerEvent)=>{
   const g=gesture.current;if(!g||event.pointerId!==g.pointerId)return;
   if(g.kind==='select'||g.active||!intentionalDrag({x:g.startX,y:g.startY},{x:event.clientX,y:event.clientY}))return;
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
 const drop=(e:React.DragEvent)=>{setAssetOver(false);
  // Let file drops bubble to the workspace so the normal upload pipeline handles
  // them. Canvas nodes only consume document-aware layer drops and Add-panel
  // primitives; this keeps a drag over a node from swallowing OS file drops.
  if(Array.from(e.dataTransfer.types).includes('Files'))return;
  e.preventDefault();e.stopPropagation();
  const assetRaw=e.dataTransfer.getData('application/x-zylora-asset');
  if(assetRaw&&node.type==='image'){
   try{const asset=JSON.parse(assetRaw);if(asset?.src){dispatch({type:'UPDATE_NODE_CONTENT',payload:{nodeId,content:{...node.content,src:asset.src,alt:asset.alt||node.content.alt||asset.name||'Uploaded image',mime:asset.mime||node.content.mime}}});return}}catch{/* invalid asset payloads are ignored safely */}
  }
  const dropped=e.dataTransfer.getData('studio/node-id');
   if(dropped&&dropped!==nodeId&&acceptsChildren(node.type,node.metadata?.kind))dispatch({type:'REPARENT_NODE',payload:{nodeId:dropped,newParentId:nodeId}});
  const raw=e.dataTransfer.getData('application/x-zylora-node')||((window as any).__zyloraDraggingNode?JSON.stringify((window as any).__zyloraDraggingNode):'');
   if(raw&&acceptsChildren(node.type,node.metadata?.kind)){
   try{const item=JSON.parse(raw);if(item.subtree){dispatch({type:'INSERT_SUBTREE',payload:{parentId:nodeId,rootId:item.subtree.rootId,nodes:item.subtree.nodes}});return}const bounds=elementRef.current?.getBoundingClientRect(),visual=!['section','page','navigation','footer'].includes(item.type),base=item.node||{type:item.type||'text'},css={...(base.style?.css||{}),...(visual&&bounds?{position:'absolute',left:`${Math.round(Math.max(0,(e.clientX-bounds.left)/state.zoom-60))}px`,top:`${Math.round(Math.max(0,(e.clientY-bounds.top)/state.zoom-20))}px`}:{})};dispatch({type:'INSERT_NODE',payload:{parentId:nodeId,node:{...base,type:item.type||base.type||'text',style:{css,tokens:{...(base.style?.tokens||{})}},metadata:{displayName:item.label||'Text',...(base.metadata||{})}}}})}catch{/* invalid drag payloads are ignored safely */}
  }
 };
 const Tag:any=node.type==='section'?'section':node.type==='heading'?'h2':node.type==='button'?'button':node.type==='link'?'a':node.type==='form'?'form':node.type==='navigation'?'nav':'div';
 const renderHandle=(pos:string)=>{if(!isSelected||isLocked)return null;const controlSize=9/Math.max(.1,state.zoom),half=controlSize/2;const style:any={position:'absolute',width:controlSize,height:controlSize,background:'#fff',border:'1px solid #4263eb',zIndex:1000};if(pos.includes('top'))style.top=-half;if(pos.includes('bottom'))style.bottom=-half;if(pos.includes('left'))style.left=-half;if(pos.includes('right'))style.right=-half;if(pos==='top'||pos==='bottom'){style.left=`calc(50% - ${half}px)`;style.cursor='ns-resize'}if(pos==='left'||pos==='right'){style.top=`calc(50% - ${half}px)`;style.cursor='ew-resize'}if(pos.includes('top')&&pos.includes('left')||pos.includes('bottom')&&pos.includes('right'))style.cursor='nwse-resize';if(pos.includes('top')&&pos.includes('right')||pos.includes('bottom')&&pos.includes('left'))style.cursor='nesw-resize';return <span key={pos} className="studio-resize-handle" data-handle={pos} style={style} onPointerDown={e=>{e.stopPropagation();const el=elementRef.current;if(el)startResize(e,pos,getRect())}}/>};
 const nodeGradient=node.style.gradient?.stops?.length?{background:studioGradientCss(node.style.gradient)}:{};const textGradient=node.style.textGradient?.stops?.length?{background:studioGradientCss(node.style.textGradient),backgroundClip:'text',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}:{};const renderStyle:any={...cssStyles,...nodeGradient,...(editableTypes.includes(node.type)?textGradient:{}),...(rotationDraft!==null?{rotate:`${rotationDraft}deg`}:{}),...(rectOverride?{width:`${rectOverride.w}px`,height:`${rectOverride.h}px`,...(isAbsolute?{left:`${rectOverride.x}px`,top:`${rectOverride.y}px`}:{transform:`translate(${rectOverride.x-(dragBase.current?.x||0)}px, ${rectOverride.y-(dragBase.current?.y||0)}px)`})}:{}),position:cssStyles.position||'relative',display:effectiveVisibility==='hidden'?'none':cssStyles.display,cursor:node.type==='page'?'default':isLocked?'not-allowed':isSelected?'move':'grab'};
 const props:any={ref:elementRef,style:renderStyle,onClick:(e:React.MouseEvent)=>{if(suppressClick.current){suppressClick.current=false;return}select(e)},onPointerDown:pointerDown,onDragOver:e=>e.preventDefault(),onDrop:drop,'data-studio-id':node.id,'data-studio-type':node.type,'data-studio-selected':isSelected?'true':undefined,'aria-label':node.accessibility?.ariaLabel||undefined};
 if(Tag==='img'){props.src=node.content.src;props.alt=node.content.alt||''}
 if(Tag==='a'&&node.content.href){props.href=node.content.href; if(node.metadata?.linkTarget==='_blank'){props.target='_blank';props.rel='noopener noreferrer'}}
 const imageContent=node.type==='image'?<div className={`studio-image-frame${cropMode?' crop-mode':''}${assetOver?' media-drop-target':''}`} onPointerDown={cropMode?cropPointerDown:undefined} onPointerMove={cropMode?cropPointerMove:undefined} onPointerUp={cropMode?cropPointerUp:undefined} onDragEnter={e=>{if(Array.from(e.dataTransfer.types).includes('application/x-zylora-asset'))setAssetOver(true)}} onDragLeave={()=>setAssetOver(false)} style={{width:'100%',height:'100%',overflow:'hidden',position:'relative',cursor:cropMode?'grab':undefined}}>{node.content.src?<img src={node.content.src} alt={node.content.alt||''} style={{width:'100%',height:'100%',objectFit:cssStyles.objectFit||'cover',objectPosition:`${50+cropDraft.x}% ${50+cropDraft.y}%`,transform:`scale(${cropDraft.scale})`,display:'block',pointerEvents:cropMode?'none':'auto'}}/>:<div className="studio-image-empty" aria-label="Drop image here">Drop image here</div>}{cropMode&&<div className="crop-toolbar" onPointerDown={e=>e.stopPropagation()}><button aria-label="Zoom out crop" onClick={()=>setCropDraft(v=>({...v,scale:Math.max(1,+(v.scale-.1).toFixed(2))}))}>−</button><input aria-label="Crop zoom" type="range" min="1" max="3" step=".05" value={cropDraft.scale} onChange={e=>setCropDraft(v=>({...v,scale:Number(e.target.value)}))}/><button aria-label="Zoom in crop" onClick={()=>setCropDraft(v=>({...v,scale:Math.min(3,+(v.scale+.1).toFixed(2))}))}>＋</button><button onClick={()=>setCropDraft({x:0,y:0,scale:1})}>Reset</button><button className="primary" onClick={finishCrop}>Done</button><button onClick={cancelCrop}>Cancel</button></div>}</div>:null;
 const content=node.type==='image'?imageContent:editableTypes.includes(node.type)&&node.children.length===0?<EditableText nodeId={node.id} value={node.content.text||''} runs={node.content.runs||[]} onChange={text=>dispatch({type:'UPDATE_NODE_TEXT',payload:{nodeId,text}})} onEnter={()=>elementRef.current?.blur()}/>:node.content.text||node.content.html||null;
 const singleSelected=isSelected&&!cropMode&&state.selectedNodeIds.length===1;
  return <Tag {...props}>{marquee&&node.type==='page'&&<span className="studio-marquee" style={marquee}/>} {singleSelected&&<div className="studio-floating-actions" aria-hidden="true">•••</div>}{rectOverride&&isSelected&&<div className="studio-measurement" aria-live="polite">x {Math.round(rectOverride.x)} · y {Math.round(rectOverride.y)} · {Math.round(rectOverride.w)} × {Math.round(rectOverride.h)}</div>}{singleSelected&&<button className="studio-rotate-handle" aria-label="Rotate selection" onPointerDown={startRotate}><span/><em>{rotationDraft!==null?`${Math.round(rotationDraft)}°`:''}</em></button>}{singleSelected&&['top-left','top','top-right','right','bottom-right','bottom','bottom-left','left'].map(renderHandle)}{content}{node.children.map(id=><CanvasNode key={id} nodeId={id}/>)}</Tag>;
}
