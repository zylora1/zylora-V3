import React from 'react';
import {SiteDocument, useStudio} from '../store';
import {createStudioCommand} from '../engine';

export function AIPanel(){
  const {state,dispatch}=useStudio();
  const [instruction,setInstruction]=React.useState('');
  const [status,setStatus]=React.useState('');
  const [busy,setBusy]=React.useState(false);
  const siteId=(window as any).ZYLORA_STUDIO_CONTEXT?.siteId;
  const csrf=(window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken;
  const submit=async(event:React.FormEvent)=>{
    event.preventDefault();
    const prompt=instruction.trim();
    if(prompt.length<3||busy||!state.document)return;
    setBusy(true);setStatus('Zylora is applying a focused edit…');
    try{
      const response=await fetch(`/api/sites/${siteId}/ai-edit`,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf,'Idempotency-Key':crypto.randomUUID()},body:JSON.stringify({instruction:prompt,page:state.document.pages[state.currentPageId]?.slug||'home',selection:state.selectedNodeIds})});
      const result=await response.json();
      if(!response.ok)throw new Error(result?.detail?.message||result?.detail||'AI edit failed');
      if(result.structure?.schemaVersion>=5||result.structure?.engineVersion>=2){
        // AI edits use the same native Studio command envelope as human edits.
        // The backend has already validated the operation plan and CAS write;
        // applying the returned snapshot here keeps the visible canvas and the
        // persisted revision in lockstep and makes the edit one undo step.
        dispatch({type:'EXECUTE_COMMAND',payload:{command:createStudioCommand(
          {type:'APPLY_EXTERNAL_DOCUMENT',payload:result.structure as SiteDocument},
          {source:'ai',provenance:{actor:'zylora-ai',model:result.model,requestId:result.request_id,affectedNodeIds:state.selectedNodeIds}}
        )}});
      }
      setInstruction('');setStatus(result.operations?.length?'Edit applied. You can undo it from the toolbar.':result.message||'No safe change was needed.');
    }catch(error){setStatus(error instanceof Error?error.message:'AI edit failed');}
    finally{setBusy(false)}
  };
  return <div className="studio-panel ai-studio-panel"><div className="panel-intro"><b>Ask Zylora</b><span>Optional help for the page you are already designing.</span></div><div className="ai-suggestions">{['Add a hero section','Rewrite this text','Make this section more premium','Improve mobile spacing'].map(item=><button key={item} onClick={()=>setInstruction(item)}>{item}</button>)}</div><form onSubmit={submit}><textarea value={instruction} onChange={event=>setInstruction(event.target.value)} placeholder="Describe one change…" aria-label="Ask Zylora to edit the current design" rows={5}/><button className="ai-submit" disabled={busy||instruction.trim().length<3}>{busy?'Applying…':'Apply edit'}</button></form><p className="panel-message" role="status">{status}</p><p className="beginner-tip">AI and manual edits use the same design. Nothing is regenerated unless you ask for it.</p></div>;
}
