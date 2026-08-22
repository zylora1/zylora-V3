
'use client';
import {FormEvent,useEffect,useMemo,useRef,useState} from 'react';

const API=process.env.NEXT_PUBLIC_API_BASE_URL||'http://localhost:8000';
type Msg={role:'user'|'assistant';text:string};

async function request(path:string,init:RequestInit={}){
 const res=await fetch(`${API}${path}`,{...init,headers:{'content-type':'application/json',...(init.headers||{})}});
 const text=await res.text();let body:any={};try{body=text?JSON.parse(text):{}}catch{body={detail:text}}
 if(!res.ok)throw new Error(body.detail||`Request failed (${res.status})`);return body;
}
let pageVisitorKey='';
function visitorKey(){
 if(typeof window==='undefined')return 'server-visitor';
 if(!pageVisitorKey)pageVisitorKey=(crypto.randomUUID?.()||`${Date.now()}-${Math.random()}`);
 return pageVisitorKey;
}
export default function SiteEngagement({siteId,businessName}:{siteId:number;businessName:string}){
 const[leadOpen,setLeadOpen]=useState(false),[chatOpen,setChatOpen]=useState(false);
 const[source,setSource]=useState('FORM'),[leadId,setLeadId]=useState<number|null>(null);
 const[notice,setNotice]=useState(''),[date,setDate]=useState(''),[slots,setSlots]=useState<string[]>([]);
 const[leadBusy,setLeadBusy]=useState(false);
 const[chat,setChat]=useState<Msg[]>([{role:'assistant',text:`Hi — I can help with questions about ${businessName}, contact details, or booking.`}]);
 const[chatText,setChatText]=useState(''),[chatBusy,setChatBusy]=useState(false);
 const triggered=useRef(false);
 const proactiveTimer=useRef<number|undefined>(undefined);
 const leadRequestKey=useRef('');
 function requestKey(){
   if(!leadRequestKey.current)leadRequestKey.current=(crypto.randomUUID?.()||`${Date.now()}-${Math.random()}`);
   return leadRequestKey.current;
 }
 function closeLead(){setLeadOpen(false);setLeadId(null);setNotice('');leadRequestKey.current=''}
 function openLead(nextSource:'FORM'|'PROACTIVE'|'CHATBOT',manual=false){
   if(manual){
     triggered.current=true;
     if(proactiveTimer.current!==undefined){window.clearTimeout(proactiveTimer.current);proactiveTimer.current=undefined}
   }
   if(nextSource==='PROACTIVE'&&triggered.current)return;
   if(nextSource==='PROACTIVE')triggered.current=true;
   setSource(nextSource);setLeadOpen(true);
 }
 useEffect(()=>{
   const open=()=>openLead('PROACTIVE');
   proactiveTimer.current=window.setTimeout(open,10000);
   const scroll=()=>{if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-24)open()};
   window.addEventListener('scroll',scroll,{passive:true});
   return()=>{if(proactiveTimer.current!==undefined)window.clearTimeout(proactiveTimer.current);window.removeEventListener('scroll',scroll)}
 },[]);
 async function submitLead(e:FormEvent<HTMLFormElement>){
   e.preventDefault();if(leadBusy)return;setNotice('');setLeadBusy(true);const f=new FormData(e.currentTarget);
   try{const data=await request('/leads/public',{method:'POST',body:JSON.stringify({site_id:siteId,source,name:String(f.get('name')||''),email:String(f.get('email')||''),phone:String(f.get('phone')||'')||null,message:String(f.get('message')||'')||null,idempotency_key:requestKey()})});setLeadId(data.id);setNotice('Thanks — your details were received. You can also choose a time below.')}catch(err:any){setNotice(err.message)}finally{setLeadBusy(false)}
 }
 async function loadSlots(value:string){setDate(value);setSlots([]);if(!value)return;try{setSlots(await request(`/scheduling/slots?site_id=${siteId}&on=${encodeURIComponent(value)}`))}catch{setSlots([])}}
 async function book(slot:string){if(!leadId)return;try{await request('/scheduling/book',{method:'POST',body:JSON.stringify({site_id:siteId,starts_at:slot,lead_id:leadId})});setNotice(`Appointment confirmed for ${new Date(slot).toLocaleString()}.`);setSlots([])}catch(err:any){setNotice(err.message)}}
 async function sendChat(e:FormEvent){e.preventDefault();const text=chatText.trim();if(!text||chatBusy)return;setChat(m=>[...m,{role:'user',text}]);setChatText('');setChatBusy(true);try{const data=await request('/chatbot/public',{method:'POST',body:JSON.stringify({site_id:siteId,visitor_key:visitorKey(),message:text})});setChat(m=>[...m,{role:'assistant',text:data.reply}]);if(data.force_capture){openLead('CHATBOT',true)}}catch(err:any){setChat(m=>[...m,{role:'assistant',text:`I couldn't answer that right now. ${err.message}`}])}finally{setChatBusy(false)}}
 const minDate=useMemo(()=>new Date().toISOString().slice(0,10),[]);
 return <div className="zyloraEngagement">
   <div className="zeActions"><button className="zeLeadButton" onClick={()=>openLead('FORM',true)}>Get in touch</button><button aria-expanded={chatOpen} onClick={()=>setChatOpen(v=>!v)}>Chat</button></div>
   {chatOpen&&<section className="zePanel zeChat" aria-label="Website chatbot"><header><strong>{businessName}</strong><button aria-label="Close chat" onClick={()=>setChatOpen(false)}>×</button></header><div className="zeMessages">{chat.map((m,i)=><div key={i} className={`zeMsg ${m.role}`}>{m.text}</div>)}</div><button className="zeShare" onClick={()=>openLead('CHATBOT',true)}>Share my details</button><form onSubmit={sendChat}><input aria-label="Chat message" value={chatText} onChange={e=>setChatText(e.target.value)} placeholder="Ask a question…"/><button disabled={chatBusy}>{chatBusy?'…':'Send'}</button></form></section>}
   {leadOpen&&<div className="zeBackdrop" role="presentation"><section className="zePanel zeLead" role="dialog" aria-modal="true" aria-label="Contact and appointment form"><header><div><strong>Get in touch</strong><small>{businessName}</small></div><button aria-label="Close form" onClick={closeLead}>×</button></header><form onSubmit={submitLead}><label>Name<input name="name" maxLength={160} required/></label><label>Email<input name="email" type="email" maxLength={320} required/></label><label>Phone<input name="phone" inputMode="tel" maxLength={64}/></label><label>How can we help?<textarea name="message" rows={3} maxLength={2000}/></label><button type="submit" disabled={leadBusy}>{leadBusy?'Sending…':'Send enquiry'}</button></form>{notice&&<p className="zeNotice" aria-live="polite">{notice}</p>}{leadId&&<div className="zeBooking"><h4>Choose a time</h4><label>Date<input type="date" min={minDate} value={date} onChange={e=>loadSlots(e.target.value)}/></label>{date&&<div className="zeSlots">{slots.map(s=><button key={s} onClick={()=>book(s)}>{new Date(s).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</button>)}{!slots.length&&<small>No available slots for this date.</small>}</div>}</div>}</section></div>}
   <style jsx global>{`
    .zyloraEngagement{font-family:Inter,ui-sans-serif,system-ui,sans-serif}.zeActions{position:fixed;right:20px;bottom:20px;z-index:2147483000;display:flex;flex-direction:column;align-items:flex-end;gap:10px}.zeActions button,.zePanel button{border:0;cursor:pointer}.zeActions button{background:#0b1020;color:#fff;border:1px solid #2b344c;border-radius:999px;padding:12px 17px;font-weight:700;box-shadow:0 12px 36px rgba(0,0,0,.25)}.zePanel{position:fixed;z-index:2147483001;background:#0d111b;color:#f7f8fb;border:1px solid #2a3040;border-radius:20px;box-shadow:0 24px 80px rgba(0,0,0,.42)}.zePanel header{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid #252b39}.zePanel header small{display:block;color:#9ba5b7;margin-top:3px}.zePanel header>button{background:transparent;color:#fff;font-size:24px}.zeChat{right:20px;bottom:76px;width:min(380px,calc(100vw - 28px));overflow:hidden}.zeMessages{height:300px;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:10px}.zeMsg{max-width:86%;padding:10px 12px;border-radius:14px;line-height:1.45;font-size:14px}.zeMsg.assistant{background:#1b2232;align-self:flex-start}.zeMsg.user{background:#4f46e5;align-self:flex-end}.zeChat form{display:flex;gap:8px;padding:12px;border-top:1px solid #252b39}.zeChat input,.zeLead input,.zeLead textarea{width:100%;box-sizing:border-box;border:1px solid #30384b;background:#141a27;color:#fff;border-radius:10px;padding:11px}.zeChat form button,.zeLead form>button,.zeSlots button,.zeShare{background:#fff;color:#10131b;border-radius:10px;padding:10px 14px;font-weight:700}.zeShare{margin:0 16px 6px;background:#252d40;color:#fff}.zeBackdrop{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.55);backdrop-filter:blur(5px);display:grid;place-items:center;padding:18px}.zeLead{position:relative;width:min(520px,100%);max-height:90vh;overflow:auto}.zeLead form{padding:18px;display:grid;gap:12px}.zeLead label,.zeBooking label{display:grid;gap:6px;font-size:13px;color:#c8cfdb}.zeLead textarea{resize:vertical}.zeNotice{margin:0 18px 14px;color:#cdd6e5;font-size:13px}.zeBooking{padding:0 18px 20px}.zeSlots{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.zeSlots button{background:#222a3c;color:#fff}.zeSlots small{color:#9ba5b7}.zeBooking h4{margin:8px 0 12px}.zeBooking input{margin-top:5px}@media(max-width:520px){.zeActions{right:12px;bottom:12px}.zeChat{right:12px;bottom:68px}.zeLead{border-radius:16px}.zeBackdrop{align-items:end;padding:8px}.zeLead{width:100%;max-height:94vh}}
   `}</style>
 </div>
}
