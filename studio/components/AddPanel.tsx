import React from 'react';
import {Node, useStudio} from '../store';

type AddItem = {label:string; type:string; icon:string; description:string; style?:Node['style']; content?:Node['content']; metadata?:Record<string,any>};
const primary:AddItem[] = [
  {label:'Text', type:'text', icon:'T', description:'Add a text box'},
  {label:'Button', type:'button', icon:'↗', description:'Add a call-to-action'},
  {label:'Card', type:'container', icon:'▣', description:'Add an editable card', style:{css:{padding:'24px',borderRadius:'16px',background:'#ffffff',boxShadow:'0 10px 30px rgba(16,24,40,.08)',minWidth:'240px',minHeight:'160px'},tokens:{}}, metadata:{kind:'card'}},
  {label:'Image frame', type:'image', icon:'▧', description:'Add a frame for your image', style:{css:{width:'320px',height:'220px',objectFit:'cover',borderRadius:'12px',background:'#f2f4f7'},tokens:{}}, content:{src:'',alt:''}, metadata:{kind:'image-frame'}},
  {label:'Shape', type:'container', icon:'○', description:'Add a simple shape', style:{css:{width:'220px',height:'140px',borderRadius:'18px',background:'#eef0f3'},tokens:{}}, metadata:{kind:'shape'}},
  {label:'Section', type:'section', icon:'▭', description:'Add a new website section', style:{css:{padding:'64px 40px',minHeight:'240px'},tokens:{}}, metadata:{kind:'section'}},
  {label:'Divider', type:'divider', icon:'—', description:'Separate content cleanly'},
];
const business:AddItem[] = [
  {label:'Lead form', type:'lead_form', icon:'◎', description:'Capture an enquiry'},
  {label:'Appointment', type:'appointment_booking', icon:'◷', description:'Let visitors book time'},
  {label:'Sales Assistant', type:'ai_sales_assistant', icon:'✦', description:'Add your AI assistant'},
  {label:'FAQ', type:'container', icon:'?', description:'Answer common questions', metadata:{kind:'faq'}},
  {label:'Gallery', type:'gallery', icon:'▦', description:'Show a collection of images'},
];
const presets:Record<string,Partial<Node>> = {
  text:{content:{text:'Add your text'},style:{css:{fontSize:'18px',lineHeight:'1.5'},tokens:{}}},
  button:{content:{text:'Get started',href:'#'},style:{css:{padding:'12px 18px',borderRadius:'8px',background:'#111827',color:'#ffffff'},tokens:{}}},
  divider:{style:{css:{width:'100%',borderWidth:'1px 0 0',borderStyle:'solid'},tokens:{}}},
};

export function AddPanel() {
  const {dispatch} = useStudio();
  const [search, setSearch] = React.useState('');
  const insert = (item:AddItem) => dispatch({type:'INSERT_NODE', payload:{node:{type:item.type, ...(presets[item.type]||{}), ...(item.style?{style:item.style}:{}), ...(item.content?{content:item.content}:{}), metadata:{displayName:item.label, ...(item.metadata||{})}}}});
  const renderGroup = (title:string, items:AddItem[]) => {
    const visible=items.filter(item => `${item.label} ${item.description}`.toLowerCase().includes(search.toLowerCase()));
    if(!visible.length)return null;
    return <section className="element-group" key={title}><h3>{title}</h3><div className="element-grid">{visible.map(item=><button key={item.label} className="add-item" draggable onDragStart={e=>{const payload={label:item.label,type:item.type};e.dataTransfer.setData('application/x-zylora-node',JSON.stringify(payload));e.dataTransfer.effectAllowed='copy';(window as any).__zyloraDraggingNode=payload}} onDragEnd={()=>{window.setTimeout(()=>delete (window as any).__zyloraDraggingNode,250)}} onClick={()=>insert(item)} title={`Add ${item.label}`} aria-label={`Add ${item.label}`}><b>{item.icon}</b><span>{item.label}</span><small>{item.description}</small></button>)}</div></section>;
  };
    return <div className="studio-panel add-panel"><div className="panel-intro"><b>Build your page</b><span>Drag something onto the page or click to add it.</span></div><div className="panel-search"><span>⌕</span><input aria-label="Search elements" placeholder="Search building blocks" value={search} onChange={e=>setSearch(e.target.value)}/></div>{renderGroup('Essentials',primary)}{renderGroup('Zylora tools',business)}<p className="panel-hint">Your website stays structured automatically — no layout code needed.</p></div>;
}
