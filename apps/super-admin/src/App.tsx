import { useEffect, useMemo, useState } from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { BarChart3, Globe2, LayoutTemplate, LogOut, Mail, MessageCircle, Search, Sparkles, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const API=(import.meta.env.VITE_API_URL||"").replace(/\/$/,"")
type View="overview"|"users"|"templates"
type Daily={date:string;emails:number;whatsapp:number;chatbot_cost_micros:number;website_cost_micros:number}
type Analytics={overview:Record<string,number>;totals:Record<string,number>;series:Daily[];days:number}
type User={id:string;name:string;email:string;role:string;plan:string;created_at:string}
type Template={slug:string;name:string;category?:string;style?:string;preview?:string;published:boolean}
type UserDetail={user:User;stats:Record<string,number>;sites:Array<Record<string,string>>}

async function api<T>(path:string,init:RequestInit={}):Promise<T>{
  const response=await fetch(API+path,{credentials:"include",...init,headers:{"Content-Type":"application/json",...(init.headers||{})}})
  if(response.status===401){location.href=API+"/login";throw new Error("Authentication required")}
  if(response.status===403)throw new Error("SUPER_ADMIN access required")
  if(!response.ok){const body=await response.json().catch(()=>({}));throw new Error(body.detail||"Request failed")}
  return response.json()
}
const usd=(micros:number)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:4,maximumFractionDigits:4}).format(micros/1_000_000)
const deliveryConfig={emails:{label:"Emails",color:"#7c3aed"},whatsapp:{label:"WhatsApp",color:"#06b6d4"}} satisfies ChartConfig
const costConfig={chatbot_cost:{label:"Chatbot",color:"#111827"},website_cost:{label:"Website AI",color:"#8b5cf6"}} satisfies ChartConfig

function Stat({label,value,icon:Icon,tone}:{label:string;value:string|number;icon:typeof Users;tone:string}){
  return <Card><CardContent className="flex items-center gap-4 pt-6"><span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{background:tone}}><Icon size={19}/></span><div><p className="text-xs font-medium uppercase tracking-[.12em] text-slate-400">{label}</p><strong className="mt-1 block text-2xl tracking-tight text-slate-950">{value}</strong></div></CardContent></Card>
}

function Overview({data}:{data:Analytics}){
  const series=data.series.map(x=>({...x,label:new Date(x.date+"T00:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric"}),chatbot_cost:x.chatbot_cost_micros/1_000_000,website_cost:x.website_cost_micros/1_000_000}))
  return <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><Stat label="Customers" value={data.overview.users||0} icon={Users} tone="#111827"/><Stat label="Websites" value={data.overview.websites||0} icon={Globe2} tone="#7c3aed"/><Stat label="Emails sent" value={data.totals.emails||0} icon={Mail} tone="#ea580c"/><Stat label="WhatsApp sent" value={data.totals.whatsapp||0} icon={MessageCircle} tone="#0891b2"/></div>
    <div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
      <Card><CardHeader><div><CardTitle>Delivery volume</CardTitle><p className="mt-1 text-xs text-slate-400">Successful customer email and WhatsApp delivery</p></div><span className="pill">Last {data.days} days</span></CardHeader><CardContent><ChartContainer config={deliveryConfig} className="h-[320px]"><BarChart accessibilityLayer data={series} barGap={4}><CartesianGrid vertical={false} stroke="#e8edf3"/><XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={11}/><YAxis tickLine={false} axisLine={false} allowDecimals={false} fontSize={11}/><ChartTooltip content={<ChartTooltipContent/>}/><Bar dataKey="emails" fill="var(--color-emails)" radius={[5,5,0,0]}/><Bar dataKey="whatsapp" fill="var(--color-whatsapp)" radius={[5,5,0,0]}/></BarChart></ChartContainer></CardContent></Card>
      <Card><CardHeader><div><CardTitle>OpenAI cost</CardTitle><p className="mt-1 text-xs text-slate-400">Chatbot and website generation tracked separately</p></div><strong className="text-sm">{usd((data.totals.chatbot_cost_micros||0)+(data.totals.website_cost_micros||0))}</strong></CardHeader><CardContent><ChartContainer config={costConfig} className="h-[320px]"><AreaChart accessibilityLayer data={series}><defs><linearGradient id="chat" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-chatbot_cost)" stopOpacity={.28}/><stop offset="95%" stopColor="var(--color-chatbot_cost)" stopOpacity={0}/></linearGradient><linearGradient id="web" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-website_cost)" stopOpacity={.28}/><stop offset="95%" stopColor="var(--color-website_cost)" stopOpacity={0}/></linearGradient></defs><CartesianGrid vertical={false} stroke="#e8edf3"/><XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={11}/><YAxis tickFormatter={v=>`$${v}`} tickLine={false} axisLine={false} fontSize={11}/><ChartTooltip content={<ChartTooltipContent/>}/><Area type="monotone" dataKey="chatbot_cost" stroke="var(--color-chatbot_cost)" fill="url(#chat)" strokeWidth={2}/><Area type="monotone" dataKey="website_cost" stroke="var(--color-website_cost)" fill="url(#web)" strokeWidth={2}/></AreaChart></ChartContainer></CardContent></Card>
    </div>
  </div>
}

function UsersView({csrf}:{csrf:string}){
  const [users,setUsers]=useState<User[]>([]),[selected,setSelected]=useState<UserDetail|null>(null),[query,setQuery]=useState("")
  useEffect(()=>{api<{items:User[]}>("/api/admin/users").then(x=>setUsers(x.items))},[])
  const filtered=useMemo(()=>users.filter(x=>(x.name+" "+x.email).toLowerCase().includes(query.toLowerCase())&&x.role!=="SUPER_ADMIN"),[users,query])
  return <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]"><Card><CardHeader><div><CardTitle>Customer accounts</CardTitle><p className="mt-1 text-xs text-slate-400">Select a customer for individual website, delivery and AI-cost details</p></div><label className="search"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search users"/></label></CardHeader><CardContent><div className="table-wrap"><table><thead><tr><th>Customer</th><th>Plan</th><th>Created</th><th/></tr></thead><tbody>{filtered.map(user=><tr key={user.id} onClick={()=>api<UserDetail>(`/api/admin/users/${user.id}`).then(setSelected)}><td><b>{user.name}</b><small>{user.email}</small></td><td><span className="pill">{user.plan}</span></td><td>{new Date(user.created_at).toLocaleDateString()}</td><td>→</td></tr>)}</tbody></table></div></CardContent></Card>{selected?<Card className="detail"><CardHeader><div><p className="eyebrow">Customer profile</p><CardTitle className="mt-2 text-xl">{selected.user.name}</CardTitle><p className="mt-1 text-xs text-slate-400">{selected.user.email}</p></div></CardHeader><CardContent><div className="detail-grid">{[["Websites",selected.stats.sites],["Live",selected.stats.live_sites],["Leads",selected.stats.leads],["Appointments",selected.stats.appointments],["Emails",selected.stats.emails_sent],["WhatsApp",selected.stats.whatsapp_sent]].map(([k,v])=><div key={String(k)}><small>{k}</small><strong>{v}</strong></div>)}</div><div className="cost-split"><p><span>Chatbot API</span><b>{usd(selected.stats.chatbot_cost_micros||0)}</b></p><p><span>Website API</span><b>{usd(selected.stats.website_cost_micros||0)}</b></p></div><h4>Websites</h4><div className="site-list">{selected.sites.map(site=><div key={site.id}><span><b>{site.name}</b><small>{site.slug}</small></span><i className={site.status==="LIVE"?"live":""}>{site.status}</i></div>)}</div></CardContent></Card>:<Card className="detail empty"><Users/><p>Select a customer to inspect their account.</p></Card>}</div>
}

function TemplatesView({csrf}:{csrf:string}){
  const [items,setItems]=useState<Template[]>([]),[busy,setBusy]=useState("")
  const load=()=>api<{items:Template[]}>("/api/admin/templates").then(x=>setItems(x.items)); useEffect(()=>{load()},[])
  async function toggle(item:Template){setBusy(item.slug);await api(`/api/admin/templates/${item.slug}`,{method:"PATCH",headers:{"X-CSRF-Token":csrf},body:JSON.stringify({published:!item.published})});await load();setBusy("")}
  return <div><div className="section-head"><div><h2>Template catalogue</h2><p>Publish or remove templates from the customer catalogue without deleting source files.</p></div><span className="pill">{items.filter(x=>x.published).length} live</span></div><div className="template-grid">{items.map(item=><Card key={item.slug} className={!item.published?"muted-card":""}><div className="template-art">{item.preview?<img src={API+item.preview} alt=""/>:<LayoutTemplate/>}<span className={item.published?"status-live":"status-off"}>{item.published?"Published":"Hidden"}</span></div><CardContent><p className="eyebrow">{item.category||item.style||"Template"}</p><h3>{item.name}</h3><button disabled={busy===item.slug} onClick={()=>toggle(item)}>{busy===item.slug?"Saving…":item.published?"Remove from catalogue":"Publish template"}</button></CardContent></Card>)}</div></div>
}

export default function App(){
  const [view,setView]=useState<View>("overview"),[analytics,setAnalytics]=useState<Analytics|null>(null),[me,setMe]=useState<Record<string,string>|null>(null),[error,setError]=useState("")
  useEffect(()=>{Promise.all([api<Record<string,string>>("/api/auth/me"),api<Analytics>("/api/admin/analytics?days=30")]).then(([identity,data])=>{if(identity.role!=="SUPER_ADMIN")throw new Error("SUPER_ADMIN access required");setMe(identity);setAnalytics(data)}).catch(e=>setError(e.message))},[])
  async function logout(){await api("/api/auth/logout",{method:"POST",headers:{"X-CSRF-Token":me?.csrf_token||""}});location.href=API+"/login"}
  if(error)return <main className="gate"><div><Sparkles/><h1>Admin access unavailable</h1><p>{error}</p><a href={API+"/login"}>Return to login</a></div></main>
  if(!me||!analytics)return <main className="gate"><div className="loader"/><p>Loading secure admin portal…</p></main>
  const nav:[[View,string,typeof BarChart3],[View,string,typeof BarChart3],[View,string,typeof BarChart3]]=[["overview","Analytics",BarChart3],["users","Customers",Users],["templates","Templates",LayoutTemplate]]
  return <div className="shell"><aside><div className="brand">Zylora <span>ADMIN</span></div><nav>{nav.map(([key,label,Icon])=><button className={view===key?"active":""} key={key} onClick={()=>setView(key)}><Icon size={17}/>{label}</button>)}</nav><div className="identity"><span>{me.name?.slice(0,1)||"A"}</span><div><b>{me.name}</b><small>SUPER_ADMIN</small></div></div><button className="logout" onClick={logout}><LogOut size={16}/>Sign out</button></aside><main><header><div><p className="eyebrow">Zylora control plane</p><h1>{view==="overview"?"Website analytics":view==="users"?"Customers":"Templates"}</h1></div><div className="secure"><i/>Secure administrator session</div></header>{view==="overview"&&<Overview data={analytics}/>} {view==="users"&&<UsersView csrf={me.csrf_token}/>} {view==="templates"&&<TemplatesView csrf={me.csrf_token}/>}</main></div>
}
