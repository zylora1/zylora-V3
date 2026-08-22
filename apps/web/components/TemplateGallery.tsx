'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {api} from '../lib/api';

type T={
  key:string;family:string;display_name:string;description:string;featured?:boolean;
  quality_tier?:string;page_count:number;preview_image?:string|null;tags:string[]
};
const PAGE_SIZE=36;
function tagValue(t:T,prefix:string){const hit=(t.tags||[]).find(x=>x.startsWith(prefix+':'));return hit?.slice(prefix.length+1)||''}

export default function TemplateGallery(){
 const[list,setList]=useState<T[]>([]),[q,setQ]=useState(''),[style,setStyle]=useState('all'),[industry,setIndustry]=useState('all'),[pages,setPages]=useState('all'),[page,setPage]=useState(1),[msg,setMsg]=useState('');
 
 useEffect(()=>{
   fetch('/template-catalogue.json')
     .then(res => {
       if (!res.ok) throw new Error('Static catalogue load failed');
       return res.json();
     })
     .then(data => {
       setList(Array.isArray(data) ? data : data.templates || []);
     })
     .catch(() => {
       api<T[]>('/templates/public').then(setList).catch((e:any)=>setMsg(e.message))
     });
 },[]);
 
 const styles=useMemo(()=>Array.from(new Set(list.map(x=>tagValue(x,'style')).filter(Boolean))).sort(),[list]);
 const industries=useMemo(()=>Array.from(new Set(list.map(x=>tagValue(x,'industry')).filter(Boolean))).sort(),[list]);
 const filtered=useMemo(()=>list.filter(x=>{
   const hay=`${x.key} ${x.family} ${x.display_name} ${x.description} ${(x.tags||[]).join(' ')}`.toLowerCase();
   return (!q||hay.includes(q.toLowerCase()))&&(style==='all'||tagValue(x,'style')===style)&&(industry==='all'||tagValue(x,'industry')===industry)&&(pages==='all'||x.page_count===Number(pages));
 }),[list,q,style,industry,pages]);
 useEffect(()=>setPage(1),[q,style,industry,pages]);
 const pageCount=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
 const shown=filtered.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);
 
 async function useTemplate(t:T){setMsg('Creating site…');try{const slug=`site-${Date.now().toString(36)}`;const s=await api<any>('/sites',{method:'POST',body:JSON.stringify({name:'My new website',slug,origin:'TEMPLATE',page_count:t.page_count,template_key:t.key})});location.href=`/editor/${s.id}`}catch(e:any){setMsg(e.message)}}
 
 return <>
  <div className="galleryToolbar premiumGalleryToolbar">
   <input aria-label="Search templates" placeholder="Search templates, industries, styles…" value={q} onChange={e=>setQ(e.target.value)}/>
   <select aria-label="Filter by style" value={style} onChange={e=>setStyle(e.target.value)}><option value="all">All styles</option>{styles.map(v=><option key={v} value={v}>{v.replaceAll('-',' ')}</option>)}</select>
   <select aria-label="Filter by industry" value={industry} onChange={e=>setIndustry(e.target.value)}><option value="all">All industries</option>{industries.map(v=><option key={v} value={v}>{v.replaceAll('-',' ')}</option>)}</select>
   <select aria-label="Filter by page count" value={pages} onChange={e=>setPages(e.target.value)}><option value="all">Any pages</option>{[1,2,3,4,5,6,7,8].map(v=><option key={v} value={v}>{v} page{v>1?'s':''}</option>)}</select>
   <span>{filtered.length.toLocaleString()} of {list.length.toLocaleString()}</span>
  </div>
  {msg&&<p className="errorPanel">{msg}</p>}
  <div className="templateGrid premiumTemplateGrid">{shown.map((t,i)=><article className={`templateCard family-${t.family}`} key={t.key}>
   <Link className="templatePreviewLink" href={`/template-preview/${encodeURIComponent(t.key)}`} target="_blank" aria-label={`Preview ${t.display_name}`}>
    <div className="templatePreview" style={t.preview_image?{backgroundImage:`url(${t.preview_image})`,backgroundSize:'cover',backgroundPosition:'top'}:undefined}><span>{t.featured?'Featured':String((page-1)*PAGE_SIZE+i+1).padStart(3,'0')}</span></div>
   </Link>
   <div className="templateMeta"><div><h3>{t.display_name||t.key}</h3><p>{t.description||t.family}</p><small>{tagValue(t,'industry').replaceAll('-',' ')} · {t.page_count} page{t.page_count>1?'s':''}</small></div><div className="templateCardActions"><Link href={`/template-preview/${encodeURIComponent(t.key)}`} target="_blank">Preview</Link><button onClick={()=>useTemplate(t)}>Use template</button></div></div>
  </article>)}</div>
  <nav className="templatePager" aria-label="Template gallery pages"><button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Previous</button><span>Page {page} of {pageCount}</span><button disabled={page>=pageCount} onClick={()=>setPage(p=>Math.min(pageCount,p+1))}>Next</button></nav>
 </>
}
