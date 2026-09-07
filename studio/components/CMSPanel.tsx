import React, { useEffect, useMemo, useState } from 'react';
import { useStudio } from '../store';

type Collection={id:string;name:string;slug:string;fields?:Field[];item_count?:number;ai_assistant_enabled?:boolean};
type Field={id:string;name:string;key:string;type:string;required:boolean;unique:boolean};
type Item={id:string;slug:string;status:string;values:Record<string,any>;revision:number};

const fieldTypes=['TEXT','LONG_TEXT','RICH_TEXT','NUMBER','BOOLEAN','DATE','DATE_TIME','EMAIL','PHONE','URL','SLUG','COLOR','IMAGE','VIDEO','FILE','MEDIA_GALLERY','OPTION','MULTI_OPTION','REFERENCE','MULTI_REFERENCE','JSON_OBJECT','LOCATION'];

export function CMSPanel({contentOnly=false}:{contentOnly?:boolean}) {
  const {state,dispatch}=useStudio();
  const siteId=(window as any).ZYLORA_STUDIO_CONTEXT?.siteId;
  const csrf=(window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken;
  const [collections,setCollections]=useState<Collection[]>([]);
  const [collection,setCollection]=useState<Collection|null>(null);
  const [items,setItems]=useState<Item[]>([]);
  const [item,setItem]=useState<Item|null>(null);
  const [values,setValues]=useState<Record<string,any>>({});
  const [tab,setTab]=useState<'content'|'schema'|'bindings'|'pages'>('content');
  const [message,setMessage]=useState('');
  const [proposal,setProposal]=useState<any>(null);
  const headers={'Content-Type':'application/json','X-CSRF-Token':csrf};
  const api=async(path:string,options:RequestInit={})=>{
    const response=await fetch(`/api/sites/${siteId}/cms${path}`,options);
    const data=await response.json().catch(()=>({}));
    if(!response.ok) throw new Error(data?.detail?.message||data?.detail||'CMS request failed');
    return data;
  };
  const refreshCollections=()=>api('/collections').then(data=>setCollections(data.items)).catch(error=>setMessage(String(error.message)));
  const openCollection=async(id:string)=>{
    const detail=await api(`/collections/${id}`); setCollection(detail);
    const listed=await api(`/collections/${id}/items`); setItems(listed.items); setItem(null); setValues({});
  };
  useEffect(()=>{refreshCollections()},[]);
  useEffect(()=>{if(!collection&&collections[0]) openCollection(collections[0].id)},[collections]);
  const selectedNode=useMemo(()=>{
    const page=state.document?.pages[state.currentPageId];
    return state.selectedNodeIds.length===1?page?.nodes[state.selectedNodeIds[0]]:null;
  },[state.document,state.currentPageId,state.selectedNodeIds]);
  const createCollection=async()=>{
    const name=window.prompt('Collection name'); if(!name)return;
    const created=await api('/collections',{method:'POST',headers,body:JSON.stringify({name})}); await refreshCollections(); await openCollection(created.id);
  };
  const createField=async()=>{
    if(!collection)return; const name=window.prompt('Field name'); if(!name)return;
    const type=(window.prompt(`Field type: ${fieldTypes.join(', ')}`,'TEXT')||'').toUpperCase(); if(!fieldTypes.includes(type))return setMessage('Unsupported field type');
    await api(`/collections/${collection.id}/fields`,{method:'POST',headers,body:JSON.stringify({name,type})}); await openCollection(collection.id);
  };
  const newItem=()=>{setItem({id:'',slug:'',status:'DRAFT',values:{},revision:1});setValues({})};
  const saveItem=async(publish=false)=>{
    if(!collection||!item)return;
    const body=item.id?{slug:item.slug,values,expected_revision:item.revision}:{slug:item.slug||undefined,values,status:publish?'PUBLISHED':'DRAFT'};
    let saved=await api(`/collections/${collection.id}/items${item.id?'/'+item.id:''}`,{method:item.id?'PATCH':'POST',headers,body:JSON.stringify(body)});
    if(publish&&item.id) saved=await api(`/collections/${collection.id}/items/${item.id}/publish`,{method:'POST',headers});
    setMessage('Saved'); await openCollection(collection.id); setItem(saved); setValues(saved.values);
  };
  const bindSelected=async(field:Field)=>{
    if(!collection||!selectedNode||!state.document)return;
    const target=selectedNode.type==='image'||selectedNode.type==='video'?'src':selectedNode.type==='link'||selectedNode.type==='button'&&['URL','SLUG','EMAIL','PHONE'].includes(field.type)?'href':field.type==='RICH_TEXT'?'html':'text';
    const result=await api('/bindings',{method:'PUT',headers,body:JSON.stringify({collection_id:collection.id,field_id:field.id,
      page_id:state.currentPageId,node_id:selectedNode.id,target_property:target,binding_kind:'FIELD',expected_revision:state.document.revision})});
    dispatch({type:'SYNC_REVISION',payload:result.newRevision});
    const migrated=await fetch(`/api/sites/${siteId}/studio-migrate`,{method:'POST',headers:{'X-CSRF-Token':csrf}}).then(r=>r.json());
    if(migrated.document)dispatch({type:'SET_DOCUMENT',payload:migrated.document}); setMessage(`${field.name} bound to ${target}`);
  };
  const repeatSelected=async()=>{
    if(!collection||!selectedNode||!state.document)return;
    const result=await api('/bindings',{method:'PUT',headers,body:JSON.stringify({collection_id:collection.id,page_id:state.currentPageId,
      node_id:selectedNode.id,target_property:'items',binding_kind:'REPEATER',config:{limit:20,sort:'published_at',direction:'desc'},expected_revision:state.document.revision})});
    dispatch({type:'SYNC_REVISION',payload:result.newRevision});
    const migrated=await fetch(`/api/sites/${siteId}/studio-migrate`,{method:'POST',headers:{'X-CSRF-Token':csrf}}).then(r=>r.json());
    if(migrated.document)dispatch({type:'SET_DOCUMENT',payload:migrated.document});setMessage(`${selectedNode.type} repeats ${collection.name} items.`);
  };
  const createDynamic=async()=>{
    if(!collection||!state.document)return; const prefix=window.prompt('Public route prefix',collection.slug); if(!prefix)return;
    const kind=(window.prompt('Page kind: ITEM or COLLECTION','ITEM')||'ITEM').toUpperCase();
    await api('/dynamic-pages',{method:'POST',headers,body:JSON.stringify({collection_id:collection.id,page_id:state.currentPageId,
      page_kind:kind,route_prefix:prefix,status:'PUBLISHED',seo:{title_template:'{{slug}}',description_template:`${collection.name} content`}})});
    setMessage(`Published dynamic ${kind.toLowerCase()} route /${prefix}`);
  };
  const askAssistant=async()=>{
    if(!collection)return;
    if(!collection.ai_assistant_enabled){await api(`/collections/${collection.id}`,{method:'PATCH',headers,body:JSON.stringify({ai_assistant_enabled:true})});await openCollection(collection.id)}
    const instruction=window.prompt('What should the CMS assistant do?');if(!instruction)return;
    const result=await api('/assistant/proposals',{method:'POST',headers:{...headers,'Idempotency-Key':crypto.randomUUID()},body:JSON.stringify({
      collection_id:collection.id,action:item?'REWRITE':'GENERATE_ITEMS',instruction,item_ids:item?.id?[item.id]:[]})});
    setProposal(result);setMessage(`Review ${result.operations.length} proposed change(s). Nothing has been written yet.`);
  };
  const applyProposal=async()=>{
    if(!proposal)return;await api('/assistant/apply',{method:'POST',headers,body:JSON.stringify({proposal_id:proposal.id,confirm:true})});
    setProposal(null);if(collection)await openCollection(collection.id);setMessage('Confirmed assistant changes applied as CMS revisions.');
  };
  const renderField=(field:Field)=>{
    const value=values[field.id]??'';
    if(field.type==='BOOLEAN')return <input type="checkbox" checked={!!value} onChange={e=>setValues({...values,[field.id]:e.target.checked})}/>;
    if(['JSON_OBJECT','LOCATION','MULTI_OPTION','MULTI_REFERENCE','MEDIA_GALLERY'].includes(field.type))return <textarea value={typeof value==='string'?value:JSON.stringify(value)} onChange={e=>{try{setValues({...values,[field.id]:JSON.parse(e.target.value)})}catch{}}}/>;
    return <input type={field.type==='NUMBER'?'number':field.type==='DATE'?'date':'text'} value={value} onChange={e=>setValues({...values,[field.id]:field.type==='NUMBER'?Number(e.target.value):e.target.value})}/>;
  };
  return <div className="cms-panel">
    <div className="cms-panel__title"><strong>CMS</strong><button onClick={createCollection}>+ Collection</button></div>
    <select value={collection?.id||''} onChange={e=>openCollection(e.target.value)}><option value="">Choose collection</option>{collections.map(c=><option key={c.id} value={c.id}>{c.name} ({c.item_count||0})</option>)}</select>
    {!contentOnly&&<div className="cms-panel__tabs">{(['content','schema','bindings','pages'] as const).map(name=><button className={tab===name?'active':''} onClick={()=>setTab(name)}>{name}</button>)}</div>}
    {(contentOnly||tab==='content')&&collection&&<>
      <div style={{display:'flex',gap:4}}><button onClick={newItem}>+ New item</button><button onClick={askAssistant}>AI assistant</button></div>
      <div className="cms-item-list">{items.map(entry=><button key={entry.id} onClick={()=>{setItem(entry);setValues(entry.values)}}>{entry.slug}<small>{entry.status}</small></button>)}</div>
      {item&&<div className="cms-editor"><label>Slug<input value={item.slug} onChange={e=>setItem({...item,slug:e.target.value})}/></label>{collection.fields?.map(field=><label key={field.id}>{field.name}{field.required?' *':''}{renderField(field)}</label>)}<div><button onClick={()=>saveItem(false)}>Save draft</button><button onClick={()=>saveItem(true)}>Publish</button></div></div>}
      {proposal&&<div className="cms-editor"><strong>AI proposal</strong><pre style={{whiteSpace:'pre-wrap',maxHeight:180,overflow:'auto'}}>{JSON.stringify(proposal.operations,null,2)}</pre><button onClick={applyProposal}>Confirm and apply</button><button onClick={()=>setProposal(null)}>Discard</button></div>}
    </>}
    {!contentOnly&&tab==='schema'&&collection&&<><button onClick={createField}>+ Field</button>{collection.fields?.map(field=><div className="cms-row" key={field.id}><span>{field.name}</span><code>{field.type}</code></div>)}</>}
    {!contentOnly&&tab==='bindings'&&<><p>{selectedNode?`Selected: ${selectedNode.metadata?.displayName||'Page item'}`:'Select an item on your page.'}</p><button disabled={!selectedNode||!['repeater','list','carousel','gallery','table','container','section','grid','stack','flex'].includes(selectedNode.type)} onClick={repeatSelected}>Repeat items from collection</button>{collection?.fields?.map(field=><button disabled={!selectedNode} key={field.id} onClick={()=>bindSelected(field)}>Connect {field.name}</button>)}</>}
    {!contentOnly&&tab==='pages'&&<><p>Publish the current Studio page as a collection or item template.</p><button disabled={!collection||!state.document} onClick={createDynamic}>Create dynamic page</button></>}
    {message&&<p className="cms-message">{message}</p>}
  </div>;
}
