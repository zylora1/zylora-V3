import React from 'react';
import {SiteDocument, useStudio} from '../store';
import {createStudioCommand} from '../engine';
import {buildAIContext, enabledZyloraAIModels, ZyloraAIEditPreview} from '../zylora/aiProviders';

export function AIPanel(){
  const {state,dispatch}=useStudio();
  const [instruction,setInstruction]=React.useState('');
  const [status,setStatus]=React.useState('');
  const [busy,setBusy]=React.useState(false);
  const [mode,setMode]=React.useState<'ask'|'edit'|'agent'>('edit');
  const [model,setModel]=React.useState(enabledZyloraAIModels()[0]?.id||'');
  const [preview,setPreview]=React.useState<ZyloraAIEditPreview|null>(null);
  const siteId=(window as any).ZYLORA_STUDIO_CONTEXT?.siteId;
  const csrf=(window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken;
  const submit=async(event:React.FormEvent)=>{
    event.preventDefault();
    const prompt=instruction.trim();
    if(prompt.length<3||busy||!state.document)return;
    if(mode==='agent'){setStatus('Agent mode is unavailable until project-scoped tools pass authorization and sandbox tests.');return;}
    setBusy(true);setStatus(mode==='ask'?'Zylora is thinking…':'Zylora is preparing a focused edit…');
    try{
      const context=buildAIContext({siteId,pageId:state.currentPageId,selectedNodeIds:state.selectedNodeIds,sourceRevision:state.document.revision,prompt});
      if(mode==='ask'){
        const response=await fetch(`/api/sites/${siteId}/ai-ask`,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify({prompt:context.prompt,page:state.document.pages[state.currentPageId]?.slug||'home',selection:context.selectedNodeIds,model})});
        const result=await response.json();if(!response.ok)throw new Error(result?.detail?.message||result?.detail||'Ask mode failed');
        setInstruction('');setStatus(result.answer||'No answer returned.');return;
      }
      const response=await fetch(`/api/sites/${siteId}/ai-edit`,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf,'Idempotency-Key':crypto.randomUUID()},body:JSON.stringify({instruction:context.prompt,page:state.document.pages[state.currentPageId]?.slug||'home',selection:context.selectedNodeIds,model,preview_only:true})});
      const result=await response.json();
      if(!response.ok)throw new Error(result?.detail?.message||result?.detail||'AI edit failed');
      if(result.structure?.schemaVersion>=5||result.structure?.engineVersion>=2){
        setPreview({requestId:result.request_id,model:result.model||model,operations:result.operations||[],document:result.structure});
        setStatus('Review the proposed edit before applying it.');
      } else { setInstruction('');setStatus(result.message||'No safe change was needed.'); }
    }catch(error){setStatus(error instanceof Error?error.message:'AI edit failed');}
    finally{setBusy(false)}
  };
  const approve=()=>{if(!preview?.document)return;dispatch({type:'EXECUTE_COMMAND',payload:{command:createStudioCommand({type:'APPLY_EXTERNAL_DOCUMENT',payload:preview.document as SiteDocument},{source:'ai',provenance:{actor:'zylora-ai',model:preview.model,requestId:preview.requestId,affectedNodeIds:state.selectedNodeIds}})}});setPreview(null);setInstruction('');setStatus('Edit applied. You can undo it from the toolbar.');};
  return <div className="studio-panel ai-studio-panel"><div className="panel-intro"><b>Zylora AI</b><span>Context: {state.document?.pages[state.currentPageId]?.name||'current page'} · {state.selectedNodeIds.length} selected</span></div><div className="ai-mode-tabs" role="tablist" aria-label="AI mode"><button className={mode==='ask'?'active':''} onClick={()=>setMode('ask')}>Ask</button><button className={mode==='edit'?'active':''} onClick={()=>setMode('edit')}>Edit</button><button className={mode==='agent'?'active':''} onClick={()=>setMode('agent')}>Agent</button></div><label className="ai-model-picker">Model<select value={model} onChange={event=>setModel(event.target.value)}><option value="">Auto</option>{enabledZyloraAIModels().map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label><div className="ai-suggestions">{['Add a hero section','Rewrite this text','Make this section more premium','Improve mobile spacing'].map(item=><button key={item} onClick={()=>setInstruction(item)}>{item}</button>)}</div><form onSubmit={submit}><textarea value={instruction} onChange={event=>setInstruction(event.target.value)} placeholder={mode==='ask'?'Ask about this page…':'Describe one change…'} aria-label="Ask Zylora" rows={5}/><button className="ai-submit" disabled={busy||instruction.trim().length<3}>{busy?'Working…':mode==='ask'?'Ask':mode==='agent'?'Agent unavailable':'Preview edit'}</button></form>{preview&&<div className="ai-preview" role="dialog" aria-label="AI edit preview"><b>Proposed changes</b><ul>{preview.operations.slice(0,8).map((operation,index)=><li key={index}>{operation.summary||operation.type}{operation.nodeId?` · ${operation.nodeId}`:''}</li>)}</ul><div className="ai-preview-actions"><button onClick={()=>setPreview(null)}>Reject</button><button className="ai-submit" onClick={approve}>Approve and apply</button></div></div>}<p className="panel-message" role="status">{status}</p><p className="beginner-tip">Ask is read-only. Edit creates one previewable undo step. Agent stays disabled until secure project tools are enabled.</p></div>;
}
