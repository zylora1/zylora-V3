'use client';
import {useEffect,useRef,useState} from 'react';
import {api} from '../lib/api';

export default function ManagedForm(){
 const[name,setName]=useState(''),[email,setEmail]=useState(''),[websiteType,setWebsiteType]=useState(''),[date,setDate]=useState('');
 const[slots,setSlots]=useState<string[]>([]),[selected,setSelected]=useState(''),[msg,setMsg]=useState(''),[submitting,setSubmitting]=useState(false);
 const requestId=useRef('');
 const ready=name.trim()&&email.includes('@')&&websiteType.trim().length>=3;
 useEffect(()=>{if(!ready||!date)return;api<string[]>(`/managed/slots?on=${date}`).then(setSlots).catch(e=>setMsg(e.message))},[date,ready]);
 async function submit(e:React.FormEvent){
  e.preventDefault();if(!selected)return setMsg('Choose an available time slot.');
  if(!requestId.current)requestId.current=crypto.randomUUID();
  setSubmitting(true);
  try{
   const r=await api<any>('/managed/enquiries',{method:'POST',body:JSON.stringify({name,email,website_type:websiteType,starts_at:selected,idempotency_key:requestId.current})});
   setMsg(`Request received. Reference: ${r.lead_code}`);requestId.current='';
  }catch(e:any){setMsg(e.message)}finally{setSubmitting(false)}
 }
 return <form className="managedFlow" onSubmit={submit}><div className="managedFields"><label>Name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label className="wide">What type of website or project do you need?<textarea value={websiteType} onChange={e=>setWebsiteType(e.target.value)} rows={5} required/></label></div><section className={`calendar ${ready?'':'disabled'}`}><div className="calendarHead"><div><span className="eyebrow">Choose contact time</span><h2>Pick a date and time</h2></div></div>{!ready?<p className="calendarHint">Please fill out the form before choosing your time slot.</p>:<><label className="datePicker">Date<input type="date" value={date} onChange={e=>{setDate(e.target.value);setSelected('')}}/></label><div className="slots">{slots.map(s=><button type="button" className={`slot ${selected===s?'selected':''}`} onClick={()=>setSelected(s)} key={s}>{new Date(s).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</button>)}{date&&!slots.length&&<p>No available slots on this date.</p>}</div></>}</section><button className="managedSubmit" disabled={!ready||!selected||submitting}>{submitting?'Submitting…':'Submit enquiry'}</button>{msg&&<p className="notice" role="status">{msg}</p>}</form>
}
