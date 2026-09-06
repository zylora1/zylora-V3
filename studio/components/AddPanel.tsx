import React from 'react';
import { Node, useStudio } from '../store';

const groups:Record<string,Array<[string,string,string]>>={
 Basic:[['Section','section','▭'],['Container','container','□'],['Stack','stack','↕'],['Flex','flex','↔'],['Grid','grid','⊞'],['Text','text','T'],['Heading','heading','H'],['Rich text','text','¶'],['Button','button','◉'],['Image','image','▧'],['Video','video','▶'],['Icon','icon','◇'],['Divider','divider','—'],['Spacer','container','↕']],
 Navigation:[['Navbar','navigation','☰'],['Menu','navigation','≡'],['Mobile navigation','navigation','☷'],['Breadcrumb','navigation','›'],['Tabs','container','▤']],
 Content:[['Card','container','▣'],['Feature block','section','✦'],['Testimonial','container','❝'],['FAQ','container','?'],['Team member','container','♙'],['Logo cloud','gallery','◫'],['Stats','grid','#'],['Badge','text','●'],['Quote','text','❞']],
 Conversion:[['Form','form','▤'],['Contact form','form','✉'],['Lead form','lead_form','◎'],['CTA','section','↗'],['Newsletter','form','✉'],['Appointment widget','appointment_booking','◷'],['Chatbot widget','ai_sales_assistant','✦']],
 Business:[['Pricing','grid','$'],['Services','grid','✣'],['Gallery','gallery','▦'],['Portfolio','gallery','▧'],['Testimonials','carousel','❝'],['Location / map','map','⌖'],['Social links','navigation','⌁']],
 CMS:[['Repeater','repeater','⟳'],['Dynamic list','list','☷'],['Dynamic grid','grid','⊞'],['Dynamic gallery','gallery','▦'],['CMS table','table','▤'],['Collection field','text','{ }'],['Dynamic page link','link','↗']],
 Advanced:[['Embed','embed','</>'],['Safe HTML','embed','<>'],['Reusable component','component_instance','◇'],['Global section','section','◎']]
};
const presets:Record<string,Partial<Node>>={
 section:{style:{css:{padding:'80px 40px',minHeight:'240px'},tokens:{}}},container:{style:{css:{padding:'24px',maxWidth:'1200px',margin:'0 auto'},tokens:{}}},stack:{style:{css:{display:'flex',flexDirection:'column',gap:'16px'},tokens:{}}},flex:{style:{css:{display:'flex',gap:'16px',alignItems:'center'},tokens:{}}},grid:{style:{css:{display:'grid',gridTemplateColumns:'repeat(3, minmax(0, 1fr))',gap:'24px'},tokens:{}}},heading:{content:{text:'A clear, confident heading'},style:{css:{fontSize:'48px',lineHeight:'1.05',fontWeight:'700'},tokens:{}}},text:{content:{text:'Add thoughtful supporting copy here.'},style:{css:{fontSize:'16px',lineHeight:'1.6'},tokens:{}}},button:{content:{text:'Get started',href:'#'},style:{css:{padding:'12px 18px',borderRadius:'8px'},tokens:{}}},image:{content:{src:'',alt:''},style:{css:{width:'100%',height:'auto',objectFit:'cover'},tokens:{}}},divider:{style:{css:{width:'100%',borderWidth:'1px 0 0',borderStyle:'solid'},tokens:{}}}
};
export function AddPanel(){
 const {state,dispatch}=useStudio();const [search,setSearch]=React.useState('');
 const insert=(label:string,type:string)=>dispatch({type:'INSERT_NODE',payload:{node:{type,...(presets[type]||{}),metadata:{displayName:label,global:label==='Global section'}}}});
 return <div className="studio-panel add-panel"><div className="panel-search"><span>⌕</span><input aria-label="Search elements" placeholder="Search elements" value={search} onChange={e=>setSearch(e.target.value)}/></div>
  {Object.entries(groups).map(([group,items])=>{const visible=items.filter(([label])=>label.toLowerCase().includes(search.toLowerCase()));return visible.length?<section className="element-group" key={group}><h3>{group}</h3><div className="element-grid">{visible.map(([label,type,icon])=><button key={label} draggable onDragStart={e=>{e.dataTransfer.setData('application/x-zylora-node',JSON.stringify({label,type}));e.dataTransfer.effectAllowed='copy'}} onClick={()=>insert(label,type)} title={`Add ${label}`}><b>{icon}</b><span>{label}</span></button>)}</div></section>:null})}
  <p className="panel-hint">Click to add to the selected container, or drag onto a highlighted drop zone.</p>
 </div>;
}

