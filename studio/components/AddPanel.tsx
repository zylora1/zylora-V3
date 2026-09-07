import React from 'react';
import {Node, useStudio} from '../store';

type AddItem={label:string;description:string;node:Partial<Node>&Pick<Node,'type'>;preview:string};
type SectionAsset={label:string;description:string;rootId:string;nodes:Record<string,Node>;preview:string};
type PanelMode='sections'|'elements'|'text'|'draw';

const element=(label:string,type:string,preview:string,css:Record<string,string>,content:Record<string,any>={},kind?:string):AddItem=>({
  label,description:`Add ${label.toLowerCase()}`,preview,node:{type,content,style:{css,tokens:{}},metadata:{displayName:label,kind:kind||preview}},
});

const elements:AddItem[]=[
  element('Rectangle','container','rectangle',{width:'220px',height:'150px',background:'#111827'}, {}, 'shape'),
  element('Rounded shape','container','rounded',{width:'220px',height:'150px',borderRadius:'24px',background:'#7c3aed'}, {}, 'shape'),
  element('Circle','container','circle',{width:'170px',height:'170px',borderRadius:'50%',background:'#06b6d4'}, {}, 'shape'),
  element('Line','divider','line',{width:'240px',height:'1px',background:'#111827'}, {}, 'divider'),
  element('Button','button','button',{width:'150px',height:'48px',display:'grid',placeItems:'center',borderRadius:'10px',background:'#111827',color:'#fff',fontWeight:'700'}, {text:'Button',href:'#'}, 'button'),
  element('Card','container','card',{width:'300px',height:'220px',padding:'24px',borderRadius:'20px',background:'#fff',boxShadow:'0 18px 45px rgba(15,23,42,.14)'}, {}, 'card'),
  element('Container','container','container',{width:'420px',height:'260px',border:'1px dashed #94a3b8',background:'rgba(255,255,255,.4)'}, {}, 'group'),
  element('Icon','icon','icon',{width:'56px',height:'56px',display:'grid',placeItems:'center',borderRadius:'14px',background:'#111827',color:'#fff',fontSize:'25px'}, {text:'✦'}, 'icon'),
  element('Badge','text','badge',{padding:'8px 14px',borderRadius:'999px',background:'#eef2ff',color:'#4338ca',fontWeight:'700'}, {text:'New'}, 'badge'),
  element('Spacer','container','spacer',{width:'200px',height:'48px',border:'1px dashed #cbd5e1',background:'transparent'}, {}, 'spacer'),
];

const frames:AddItem[]=[
  element('Square frame','image','frame-square',{width:'260px',height:'260px',objectFit:'cover',background:'#e2e8f0'}, {src:'',alt:'',crop:{x:0,y:0,scale:1}}, 'image-frame'),
  element('Portrait frame','image','frame-portrait',{width:'240px',height:'320px',objectFit:'cover',background:'#e2e8f0'}, {src:'',alt:'',crop:{x:0,y:0,scale:1}}, 'image-frame'),
  element('Landscape frame','image','frame-landscape',{width:'360px',height:'220px',objectFit:'cover',background:'#e2e8f0'}, {src:'',alt:'',crop:{x:0,y:0,scale:1}}, 'image-frame'),
  element('Circle frame','image','frame-circle',{width:'260px',height:'260px',borderRadius:'50%',objectFit:'cover',background:'#e2e8f0'}, {src:'',alt:'',crop:{x:0,y:0,scale:1}}, 'image-frame'),
  element('Rounded frame','image','frame-rounded',{width:'340px',height:'240px',borderRadius:'28px',objectFit:'cover',background:'#e2e8f0'}, {src:'',alt:'',crop:{x:0,y:0,scale:1}}, 'image-frame'),
];

const fullNode=(id:string,type:string,parentId:string|null,children:string[],content:Record<string,any>,css:Record<string,string>,name:string,kind?:string):Node=>({
  id,type,parentId,children,content,style:{css,tokens:{}},layout:{},responsiveOverrides:{},visibility:'visible',bindings:{},accessibility:{},interactions:[],metadata:{displayName:name,kind:kind||type},
});

const sectionAsset=(label:string,index:number):SectionAsset=>{
  const key=label.toLowerCase().replace(/[^a-z]+/g,'_'), root=`${key}_root`,title=`${key}_title`,body=`${key}_body`,action=`${key}_action`,visual=`${key}_visual`;
  const dark=index%4===0,split=index%3!==2,background=dark?'#0b1020':index%4===1?'#f3f0ff':index%4===2?'#fff7ed':'#ecfeff',color=dark?'#fff':'#111827';
  const nodes:Record<string,Node>={
    [root]:fullNode(root,'section',null,[title,body,action,visual],{}, {position:'relative',width:'100%',height:index%3===0?'580px':'500px',overflow:'hidden',background},label,'section'),
    [title]:fullNode(title,'text',root,[],{text:label==='Header / Navbar'?'Zylora Studio':label==='Footer'?'Let’s build something useful.':`${label} that makes the next step clear.`},{position:'absolute',left:'72px',top:label==='Header / Navbar'?'38px':'110px',width:split?'520px':'760px',fontSize:label==='Header / Navbar'?'28px':'54px',lineHeight:'1.02',fontWeight:'750',letterSpacing:'-0.04em',color},label==='Header / Navbar'?'Logo':`${label} title`,'text'),
    [body]:fullNode(body,'text',root,[],{text:label==='Header / Navbar'?'Home   Work   About   Contact':`Use this editable ${label.toLowerCase()} arrangement as a starting point. Move, resize, restyle or remove every part.`},{position:'absolute',left:label==='Header / Navbar'?'720px':'72px',top:label==='Header / Navbar'?'46px':'250px',width:split?'490px':'660px',fontSize:label==='Header / Navbar'?'16px':'19px',lineHeight:'1.55',color:dark?'#cbd5e1':'#475569'},label==='Header / Navbar'?'Navigation':`${label} description`,'text'),
    [action]:fullNode(action,'button',root,[],{text:label==='Footer'?'Contact us':'Get started',href:'#'},{position:'absolute',left:'72px',top:label==='Header / Navbar'?'30px':'360px',width:'152px',height:'48px',display:'grid',placeItems:'center',borderRadius:'10px',background:dark?'#fff':'#111827',color:dark?'#111827':'#fff',fontWeight:'700'},`${label} button`,'button'),
    [visual]:fullNode(visual,'container',root,[],{}, {position:'absolute',left:split?'780px':'900px',top:label==='Header / Navbar'?'24px':'76px',width:label==='Header / Navbar'?'180px':'430px',height:label==='Header / Navbar'?'56px':'350px',borderRadius:index%2?'999px 32px 32px 999px':'32px',background:dark?'linear-gradient(135deg,#7c3aed,#22d3ee)':'linear-gradient(135deg,#a78bfa,#f0abfc)',opacity:'.92'},`${label} visual`,'shape'),
  };
  return {label,description:`Editable ${label.toLowerCase()} section`,rootId:root,nodes,preview:`section-${index%6}`};
};

const sectionNames=['Header / Navbar','Hero','Features','Services','About','Gallery','Logo strip','Statistics','Testimonials','Pricing','Team','FAQ','Contact','CTA','Footer'];
const sections=sectionNames.map(sectionAsset);
const textItem=element('Add Text','text','text',{width:'360px',fontSize:'32px',lineHeight:'1.15',fontWeight:'650',color:'#111827'}, {text:'Add your text'}, 'text');

export function AddPanel({mode='elements'}:{mode?:PanelMode}){
  const {dispatch}=useStudio();
  const [query,setQuery]=React.useState('');
  const insertItem=(item:AddItem)=>dispatch({type:'INSERT_NODE',payload:{node:item.node}});
  const insertSection=(asset:SectionAsset)=>dispatch({type:'INSERT_SUBTREE',payload:{rootId:asset.rootId,nodes:asset.nodes}});
  const drag=(event:React.DragEvent,payload:Record<string,any>)=>{event.dataTransfer.setData('application/x-zylora-node',JSON.stringify(payload));event.dataTransfer.effectAllowed='copy';(window as any).__zyloraDraggingNode=payload};
  const card=(item:AddItem)=><button key={item.label} className={`asset-card ${item.preview}`} onClick={()=>insertItem(item)} draggable onDragStart={event=>drag(event,{label:item.label,type:item.node.type,node:item.node})} onDragEnd={()=>delete (window as any).__zyloraDraggingNode} aria-label={`Add ${item.label}`}><span className="asset-preview" aria-hidden="true"/><b>{item.label}</b><small>{item.description}</small></button>;
  const sectionCard=(asset:SectionAsset)=><button key={asset.label} className={`section-asset ${asset.preview}`} onClick={()=>insertSection(asset)} draggable onDragStart={event=>drag(event,{label:asset.label,subtree:{rootId:asset.rootId,nodes:asset.nodes}})} onDragEnd={()=>delete (window as any).__zyloraDraggingNode} aria-label={`Add ${asset.label} section`}><span className="section-preview" aria-hidden="true"><i/><i/><i/></span><b>{asset.label}</b><small>{asset.description}</small></button>;
  const search=<div className="asset-search"><span aria-hidden="true">⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder={`Search ${mode}`} aria-label={`Search ${mode}`}/></div>;
  if(mode==='text')return <div className="studio-panel blank-asset-panel"><div className="panel-intro"><b>Text</b><span>Add text, then style it on the canvas.</span></div>{search}<button className="add-text-action" onClick={()=>insertItem(textItem)}>T <span>Add Text</span></button><p className="beginner-tip">Double-click text on the page to type.</p></div>;
  if(mode==='draw')return <div className="studio-panel blank-asset-panel"><div className="panel-intro"><b>Draw</b><span>Simple visual marks for website compositions.</span></div>{search}<div className="asset-grid">{elements.filter(item=>['rectangle','rounded','circle','line'].includes(item.preview)).filter(item=>item.label.toLowerCase().includes(query.toLowerCase())).map(card)}</div></div>;
  if(mode==='sections')return <div className="studio-panel blank-asset-panel"><div className="panel-intro"><b>Sections</b><span>Editable starting arrangements—not locked templates.</span></div>{search}<div className="section-assets">{sections.filter(item=>item.label.toLowerCase().includes(query.toLowerCase())).map(sectionCard)}</div></div>;
  const filtered=elements.filter(item=>item.label.toLowerCase().includes(query.toLowerCase()));
  const filteredFrames=frames.filter(item=>item.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="studio-panel blank-asset-panel"><div className="panel-intro"><b>Elements</b><span>Click or drag anything onto your page.</span></div>{search}<h3>Basic elements</h3><div className="asset-grid">{filtered.map(card)}</div><h3>Image frames</h3><div className="frame-strip">{filteredFrames.map(card)}</div></div>;
}
