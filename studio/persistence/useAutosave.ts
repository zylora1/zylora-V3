import {useEffect,useRef,useState} from 'react';
import type {SiteDocument} from '../store';

export interface StudioConflict { code:string; message:string; serverRevision:number; serverDocument?:SiteDocument; rebasedDocument?:SiteDocument|null; conflict?:string; }

const equal=(left:unknown,right:unknown)=>JSON.stringify(left)===JSON.stringify(right);
const mergeThreeWay=(base:unknown,local:unknown,server:unknown):unknown=>{
 if(equal(local,base))return server;
 if(equal(server,base)||equal(local,server))return local;
 if(Array.isArray(base)&&Array.isArray(local)&&Array.isArray(server))return undefined;
 if(base&&local&&server&&typeof base==='object'&&typeof local==='object'&&typeof server==='object'&&!Array.isArray(base)&&!Array.isArray(local)&&!Array.isArray(server)){
  const result:Record<string,unknown>={};
  const keys=new Set([...Object.keys(base as object),...Object.keys(local as object),...Object.keys(server as object)]);
  for(const key of keys){
   const value=mergeThreeWay((base as Record<string,unknown>)[key],(local as Record<string,unknown>)[key],(server as Record<string,unknown>)[key]);
   if(value===undefined&&!(key in (base as object))&&!(key in (local as object))&&!(key in (server as object)))continue;
   if(value===undefined)return undefined;
   result[key]=value;
  }
  return result;
 }
 return undefined;
};

/** Merge independent local/server fields while rejecting concurrent array/tree edits. */
export function rebaseStudioDocument(base:SiteDocument|null,local:SiteDocument,server:SiteDocument):SiteDocument|null{
 if(!base)return null;
 const merged=mergeThreeWay(base,local,server);
 if(!merged||typeof merged!=='object')return null;
 return {...merged as SiteDocument,revision:server.revision,engineVersion:Math.max(2,server.engineVersion||2)};
}

export function useAutosave(document:SiteDocument|null,siteId:string,csrf:string){
 const [status,setStatus]=useState('Saved');
 const [conflict,setConflict]=useState<StudioConflict|null>(null);
 const latest=useRef(document),saved=useRef<SiteDocument|null>(null),revision=useRef<number|null>(null);
 const running=useRef(false),mounted=useRef(true),timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 latest.current=document;
 const flush=async():Promise<boolean>=>{
  if(running.current)return false;
  if(!latest.current||latest.current===saved.current)return true;
  if(!navigator.onLine){setStatus('Offline');return false}
  running.current=true;
  try{
   while(latest.current&&latest.current!==saved.current){
    const snapshot=latest.current;
    setStatus('Saving…');
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);
    try{
     const response=await fetch(`/api/sites/${siteId}/studio-save`,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify({...snapshot,revision:revision.current??snapshot.revision}),signal:controller.signal});
     const result=await response.json();
     if(!response.ok||!result.ok){
      if(response.status===409){
       const detail=result?.detail||result;
       const serverDocument=detail?.serverDocument as SiteDocument|undefined;
       const rebasedDocument=serverDocument?rebaseStudioDocument(saved.current,snapshot,serverDocument):null;
       setConflict({...detail,serverRevision:Number(detail?.serverRevision||0),serverDocument,rebasedDocument});
       setStatus('Conflict detected');
       void writeRecovery(siteId,snapshot);
      }else setStatus('Save failed');
      return false;
     }
     revision.current=result.newRevision;saved.current=snapshot;
    }finally{clearTimeout(timeout)}
    if(!mounted.current)return false;
   }
   setStatus('Saved');return true;
  }catch{if(mounted.current)setStatus(navigator.onLine?'Save failed':'Offline');return false}
  finally{running.current=false}
 };
 const flushRef=useRef(flush);flushRef.current=flush;
 useEffect(()=>{
  if(!document)return;
  if(!saved.current){saved.current=document;revision.current=document.revision;return}
  if(document===saved.current)return;
  setStatus(navigator.onLine?'Unsaved changes':'Offline');
  timer.current=setTimeout(()=>void flushRef.current(),700);
  return()=>{if(timer.current)clearTimeout(timer.current)};
 },[document]);
 useEffect(()=>{
  mounted.current=true;
  const online=()=>void flushRef.current();
  const guard=(event:BeforeUnloadEvent)=>{if(latest.current!==saved.current){event.preventDefault();event.returnValue=''}};
  addEventListener('online',online);addEventListener('beforeunload',guard);
  return()=>{mounted.current=false;removeEventListener('online',online);removeEventListener('beforeunload',guard)};
 },[]);
 const acceptServer=(serverDocument:SiteDocument)=>{latest.current=serverDocument;saved.current=serverDocument;revision.current=serverDocument.revision;setConflict(null);setStatus('Saved')};
 const acceptRebased=(document:SiteDocument,serverDocument:SiteDocument)=>{latest.current=document;saved.current=serverDocument;revision.current=serverDocument.revision;setConflict(null);setStatus('Unsaved changes')};
 return {status,flush,conflict,acceptServer,acceptRebased};
}

function writeRecovery(siteId:string,document:SiteDocument){
 try{
  if(!('indexedDB' in window))return;
  const request=indexedDB.open('zylora-studio-recovery',1);
  request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('documents'))request.result.createObjectStore('documents')};
  request.onsuccess=()=>{const db=request.result;const tx=db.transaction('documents','readwrite');tx.objectStore('documents').put({siteId,document,savedAt:new Date().toISOString()},siteId);tx.oncomplete=()=>db.close()};
 }catch{/* recovery is best effort and never replaces the server document */}
}
