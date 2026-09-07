import React from 'react';

type UserTemplate={id:string;name:string;description:string;updated_at:string};

export function UserTemplatesPanel({onClose}:{onClose:()=>void}){
  const [items,setItems]=React.useState<UserTemplate[]>([]);
  const [status,setStatus]=React.useState('Loading your templates…');
  const csrf=(window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken;
  React.useEffect(()=>{fetch('/api/user-templates').then(async response=>{const data=await response.json();if(!response.ok)throw new Error(data?.detail||'Could not load templates');setItems(data.items||[]);setStatus(data.items?.length?'':'No saved templates yet.')}).catch(error=>setStatus(String(error.message||error)))},[]);
  const create=async(template:UserTemplate)=>{const name=window.prompt('Name the new website',`${template.name} copy`);if(!name)return;setStatus('Creating website…');const response=await fetch(`/api/user-templates/${template.id}/create`,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify({name})});const data=await response.json();if(response.ok)location.href=data.studio_url;else setStatus(data?.detail?.message||data?.detail||'Could not create website')};
  return <div className="user-template-overlay" role="dialog" aria-modal="true" aria-label="My templates"><div className="user-template-dialog"><header><div><b>My templates</b><span>Private reusable copies of your designs.</span></div><button onClick={onClose} aria-label="Close my templates">×</button></header><div className="user-template-list">{items.map(item=><article key={item.id}><div className="template-miniature" aria-hidden="true"><i/><i/><i/></div><div><b>{item.name}</b><p>{item.description||'Reusable website design'}</p><small>{new Date(item.updated_at).toLocaleDateString()}</small></div><button onClick={()=>create(item)}>Use</button></article>)}</div>{status&&<p className="template-status" role="status">{status}</p>}</div></div>;
}
