'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {api,SessionUser,Site} from '../lib/api';

type Lead={id:number;name:string;email:string;source:string;created_at:string;whatsapp_status:'PENDING'|'SENDING'|'SENT'|'FAILED'|'SKIPPED'};
const whatsappLabel=(status:Lead['whatsapp_status'])=>({PENDING:'WhatsApp pending',SENDING:'WhatsApp sending',SENT:'WhatsApp sent',FAILED:'WhatsApp failed',SKIPPED:'WhatsApp not configured'}[status]||'WhatsApp not configured');

function greeting(){
  const h=new Date().getHours();
  return h<12?'Good morning,':h<17?'Good afternoon,':'Good evening,';
}

export default function DashboardClient(){
  const[user,setUser]=useState<SessionUser|null>(null);
  const[sites,setSites]=useState<Site[]>([]);
  const[leads,setLeads]=useState<Lead[]>([]);
  const[error,setError]=useState('');
  
  useEffect(()=>{
    Promise.all([
      api<SessionUser>('/auth/me').catch(e => { if(e.status===401) location.href='/login'; throw e; }),
      api<Site[]>('/sites').catch(() => []),
      api<Lead[]>('/leads').catch(() => [])
    ])
    .then(([u,s,l])=>{setUser(u);setSites(s);setLeads(l)})
    .catch((e:any)=>{
      if(e.status!==401) console.error(e);
    })
  },[]);
  
  return <>
    <div className="topbar">
      <div className="pills">
        <span className="user-email">{user?.email || 'Loading workspace...'}</span>
        <span className="dash-pill"><span className="highlight">PLAN</span> {user?.plan||'FREE'}</span>
        <span className="dash-pill"><span className="highlight">AI</span> {user?.ai_credits??'0'}</span>
        <span className="dash-pill"><span className="highlight">LEADS</span> {user?.lead_credits??'0'}</span>
      </div>
      <Link className="primaryAction" href="/templates">Create website</Link>
    </div>
    
    <div className="dashhead">
      <div>
        <p className="eyebrow darkEye">Workspace Overview</p>
        <h1>{greeting()} {user?.email?.split('@')[0] || ''}</h1>
      </div>
    </div>
    
    {error&&<div className="errorPanel">{error}</div>}
    
    <section className="metricrow">
      <div className="metric">
        <span>Active Websites</span>
        <b>{sites.length}</b>
        <small>{sites.filter(s=>s.state==='LIVE').length} published and live</small>
      </div>
      <div className="metric">
        <span>Total Leads</span>
        <b>{leads.length}</b>
        <small>Captured across all sites</small>
      </div>
      <div className="metric">
        <span>AI Operations</span>
        <b>{user?.ai_credits??0}</b>
        <small>Credits available</small>
      </div>
    </section>
    
    <section className="dashgrid" id="sites">
      <div className="panel">
        <div className="panelTitle">
          <h3>Your websites</h3>
          <Link href="/templates">Browse templates →</Link>
        </div>
        <div className="siteRows">
          {sites.length?sites.map(s=>(
            <Link className="siteRow" key={s.id} href={`/editor/${s.id}`}>
              <div>
                <strong>{s.name}</strong>
                <span>{s.slug} · {s.origin}</span>
              </div>
              <span className={`status ${s.state.toLowerCase()}`}>{s.state}</span>
            </Link>
          )):(
            <div className="emptyState">
              No websites yet. Choose a template to create your first site and start building your online presence.
            </div>
          )}
        </div>
      </div>
      <div className="panel" id="leads">
        <div className="panelTitle">
          <h3>Recent leads</h3>
          <span>{leads.length} total</span>
        </div>
        <div className="activity">
          {leads.slice(0,6).map(l=>(
            <div key={l.id}>
              <span>
                <b>{l.name}</b>
                <small>{l.email}</small>
                <small>{whatsappLabel(l.whatsapp_status)}</small>
              </span>
              <em>{l.source}</em>
            </div>
          ))}
          {!leads.length&&(
            <div className="emptyState">
              Leads captured from your website forms and chatbot will appear here automatically.
            </div>
          )}
        </div>
      </div>
    </section>
  </>
}
