window.addEventListener('pageshow',async e=>{if(!e.persisted)return;try{const r=await fetch('/api/auth/me',{credentials:'same-origin',cache:'no-store'});if(r.ok){const j=await r.json();if(j.csrf_token)sessionStorage.setItem('csrf',j.csrf_token)}else if(r.status===401){location.replace('/login?next='+encodeURIComponent(location.pathname+location.search+location.hash))}}catch{}});
const state={me:null,sites:[],leads:[],adminLeads:[],selectedDomainSite:null,selectedIntegrationSite:null,settingsLoaded:false,pageLimit:null,freelancer:null,analyticsRange:30,creatingSite:false};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function initials(name=''){const parts=String(name).trim().split(/\s+/).filter(Boolean);return (parts.slice(0,2).map(x=>x[0]).join('')||'Z').toUpperCase()}
function renderAvatar(el){if(!el)return;const name=state.me?.name||'Zylora User',fallback=initials(name).slice(0,2),url=String(state.me?.profile_image_url||'').trim();el.replaceChildren();if(!url){el.textContent=fallback;return}try{const parsed=new URL(url);if(parsed.protocol!=='https:'){el.textContent=fallback;return}}catch{el.textContent=fallback;return}const img=document.createElement('img');img.src=url;img.alt='';img.referrerPolicy='no-referrer';img.loading='lazy';img.decoding='async';img.onerror=()=>{el.replaceChildren(document.createTextNode(fallback))};el.appendChild(img)}
function formatMoney(amountMinor,currency='INR'){if(amountMinor===null||amountMinor===undefined)return '—';try{return new Intl.NumberFormat(undefined,{style:'currency',currency:currency||'INR',maximumFractionDigits:2}).format(Number(amountMinor)/100)}catch{return `${currency||''} ${(Number(amountMinor)/100).toFixed(2)}`}}
function leadDetailData(lead){const q=lead.qualification_data||{},reasons=Array.isArray(lead.score_reasons)?lead.score_reasons:[];return [{label:'Name',value:lead.name||'—'},{label:'Email',value:lead.email||'—'},{label:'Phone',value:lead.phone||'—'},{label:'Source',value:String(lead.source||'—').replaceAll('_',' ')},{label:'Status',value:lead.status||'NEW'},{label:'Intent',value:lead.intent||'—'},{label:'Service interest',value:lead.service_interest||q.service||'—'},{label:'Score',value:lead.lead_score===null||lead.lead_score===undefined?'—':`${lead.lead_score}/100 · ${lead.lead_temperature||'—'}`},{label:'Score reasons',value:reasons.length?reasons.join(' · '):'—',wide:true},{label:'Qualification',value:Object.entries(q).filter(([k])=>!k.endsWith('_consent')&&k!=='conversion_paths').map(([k,v])=>`${k.replaceAll('_',' ')}: ${Array.isArray(v)?v.join(', '):v}`).join(' · ')||'—',wide:true},{label:'Attribution',value:[lead.utm_source,lead.utm_medium,lead.utm_campaign,lead.page_url].filter(Boolean).join(' → ')||lead.referrer||'—',wide:true},{label:'Website',value:lead.business_name||'—'},{label:'Created',value:lead.created_at?new Date(lead.created_at).toLocaleString():'—'},{label:'Summary',value:lead.summary||lead.message||'No summary yet.',wide:true}]}
function leadTemperatureClass(lead){const t=String(lead.lead_temperature||'').toLowerCase();return t==='hot'?'hot':t==='warm'?'warm':'cold'}
async function openLeadConversation(lead){if(!lead?.conversation_id||!lead.site_id)return;try{const j=await api(`/api/sites/${lead.site_id}/assistant/conversations/${lead.conversation_id}`);$('#assistantConversationTitle').textContent=lead.name?`${lead.name} · Assistant conversation`:'Assistant conversation';const msgs=j.messages||j.items||[];$('#assistantConversationBody').innerHTML=msgs.length?msgs.map(m=>`<div class="stack-item assistant-owner-message"><div><b>${escapeHtml(String(m.role||m.sender||'message').replaceAll('_',' '))}</b><small>${escapeHtml(m.content||m.message||m.text||'')}</small></div><time>${m.created_at?new Date(m.created_at).toLocaleString():''}</time></div>`).join(''):'<p class="muted-copy">No transcript messages are available.</p>';openModal('assistantConversationModal')}catch(e){toast(e.message)}}
function openLeadDetails(lead){if(!lead)return;$('#leadDetailName').textContent=lead.name||'Lead';$('#leadDetailBody').innerHTML=leadDetailData(lead).map(x=>`<div class="lead-detail-field ${x.wide?'wide':''}"><small>${escapeHtml(x.label)}</small>${x.wide?`<p>${escapeHtml(x.value)}</p>`:`<b>${escapeHtml(x.value)}</b>`}</div>`).join('')+`<div class="lead-detail-field wide lead-detail-actions"><small>Pipeline</small><div class="form-actions"><select id="leadStatusPicker" aria-label="Lead status">${['NEW','CONTACTED','QUALIFIED','WON','LOST'].map(v=>`<option ${String(lead.status||'NEW')===v?'selected':''}>${v}</option>`).join('')}</select><button class="accent-btn" id="leadStatusSave" type="button">Update status</button>${lead.conversation_id?'<button class="ghost-btn" id="leadConversationOpen" type="button">View AI conversation</button>':''}</div></div>`;$('#leadStatusSave').onclick=async()=>{try{await api(`/api/leads/${lead.id}/status`,{method:'PATCH',body:JSON.stringify({status:$('#leadStatusPicker').value})});toast('Lead status updated');closeModal('leadDetailModal');await loadLeads()}catch(e){toast(e.message)}};if($('#leadConversationOpen'))$('#leadConversationOpen').onclick=()=>openLeadConversation(lead);openModal('leadDetailModal')}
function tenantLeadRow(lead,index){const source=String(lead.source||'OTHER').replaceAll('_',' '),temp=lead.lead_temperature?`<span class="lead-temperature ${leadTemperatureClass(lead)}">${escapeHtml(lead.lead_temperature)}</span>`:'';return `<tr data-search="${escapeHtml(`${lead.name} ${lead.email} ${lead.business_name} ${lead.source} ${lead.intent||''}`.toLowerCase())}"><td class="check-cell"><input class="checkbox lead-row-check" aria-label="Select ${escapeHtml(lead.name)}" type="checkbox"></td><td><div class="lead-person"><span class="lead-avatar">${escapeHtml(initials(lead.name))}</span><span><b>${escapeHtml(lead.name)}</b><small>${escapeHtml(lead.email)}</small></span></div></td><td><span class="source-pill source-${escapeHtml(String(lead.source||'other').toLowerCase())}">${escapeHtml(source)}</span></td><td>${escapeHtml(lead.business_name||'—')}</td><td>${temp}${lead.lead_score!==null&&lead.lead_score!==undefined?` <small>${lead.lead_score}/100</small>`:''}</td><td>${lead.created_at?new Date(lead.created_at).toLocaleString():'—'}</td><td><button class="lead-detail-btn" data-lead-detail="${index}">Open</button></td></tr>`}
function adminLeadRow(lead,index){return `<tr data-search="${escapeHtml(`${lead.name} ${lead.email} ${lead.business_name} ${lead.owner_name} ${lead.owner_email} ${lead.source}`.toLowerCase())}"><td class="check-cell"><span class="lead-avatar">${escapeHtml(initials(lead.name))}</span></td><td><div class="lead-person"><span><b>${escapeHtml(lead.name)}</b><small>${escapeHtml(lead.email)}</small></span></div></td><td>${escapeHtml(lead.owner_name||'—')}<small style="display:block;color:#98a2b3">${escapeHtml(lead.owner_email||'')}</small></td><td><span class="source-pill">${escapeHtml(lead.source)}</span></td><td>${escapeHtml(lead.business_name||'—')}</td><td>${escapeHtml(lead.phone||lead.email||'—')}</td><td>${lead.created_at?new Date(lead.created_at).toLocaleString():'—'}</td><td><button class="lead-detail-btn" data-admin-lead-detail="${index}">details</button></td></tr>`}
function renderAnalytics(){let start, end, range = Number(state.analyticsRange||30); const now=Date.now(); if (state.customDateRange && state.customDateRange.from) { start = new Date(state.customDateRange.from).setHours(0,0,0,0); end = state.customDateRange.to ? new Date(state.customDateRange.to).setHours(23,59,59,999) : now; range = Math.max(1, Math.round((end - start) / 86400000)); } else { start = now - range*86400000; end = now; }const leads=(state.leads||[]).filter(l=>{const t=Date.parse(l.created_at||'');return Number.isFinite(t)&&t>=start&&t<=end});$('#aLeads')&&($('#aLeads').textContent=leads.length);$('#aPublished')&&($('#aPublished').textContent=(state.sites||[]).filter(s=>s.status==='LIVE').length);$('#aCredits')&&($('#aCredits').textContent=state.me?.ai_credits??0);$('#analyticsLeadTotal')&&($('#analyticsLeadTotal').textContent=`${leads.length} lead${leads.length===1?'':'s'}`);const buckets=range<=30?6:9,bucketMs=(range*86400000)/buckets,counts=Array(buckets).fill(0),labels=[];for(const l of leads){const idx=Math.min(buckets-1,Math.max(0,Math.floor((Date.parse(l.created_at)-start)/bucketMs)));counts[idx]++}for(let i=0;i<buckets;i++){const d=new Date(start+(i+1)*bucketMs);labels.push(d.toLocaleDateString(undefined,{month:'short',day:'numeric'}))}const max=Math.max(1,...counts),w=720,h=220,pad=20;const pts=counts.map((v,i)=>[pad+(i*(w-2*pad)/Math.max(1,buckets-1)),h-pad-(v/max)*(h-2*pad)]);const line=pts.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');const area=pts.length?`${line} L${pts.at(-1)[0].toFixed(1)} ${h} L${pts[0][0].toFixed(1)} ${h} Z`:'';$('#analyticsLinePath')?.setAttribute('d',line);$('#analyticsAreaPath')?.setAttribute('d',area);const layer=$('#analyticsPointLayer');if(layer)layer.innerHTML=pts.map(([x,y],i)=>`<circle class="chart-point" cx="${x}" cy="${y}" r="3.5"><title>${counts[i]} leads</title></circle>`).join('');const grid=$('.chart-grid',$('#analyticsLineChart'));if(grid)grid.innerHTML=[0,1,2,3].map(i=>`<line x1="20" y1="${20+i*60}" x2="700" y2="${20+i*60}"></line>`).join('');if($('#analyticsAxis'))$('#analyticsAxis').innerHTML=labels.map(x=>`<span>${escapeHtml(x)}</span>`).join('');const sources={};for(const l of leads){const k=(l.source||'OTHER').toUpperCase();sources[k]=(sources[k]||0)+1}const entries=Object.entries(sources).sort((a,b)=>b[1]-a[1]);const palette=['#4f46e5','#12b76a','#f79009','#667085','#e4e7ec'];if($('#analyticsDonut'))$('#analyticsDonut').style.background=leads.length?'#4f46e5':'#e4e7ec';if($('#analyticsDonutTotal'))$('#analyticsDonutTotal').textContent=leads.length;if($('#analyticsDonutLegend'))$('#analyticsDonutLegend').innerHTML=entries.length?entries.map(([k,v],i)=>`<div><span><i style="background:${palette[i%palette.length]}"></i>${escapeHtml(k)}</span><b>${v}</b></div>`).join(''):'<div><span>No lead sources yet</span><b>0</b></div>';if($('#analyticsRecentLeads'))$('#analyticsRecentLeads').innerHTML=leads.slice(0,6).map(l=>`<div class="analytics-recent-row"><b>${escapeHtml(l.name)}</b><span>${escapeHtml(l.business_name||'Website')}</span><span>${escapeHtml(l.source||'Lead')}</span><time>${new Date(l.created_at).toLocaleDateString()}</time></div>`).join('')||'<p class="muted-copy">No leads yet.</p>'}
async function refreshNotificationIndicator(){try{const j=await api('/api/support/conversations'),n=(j.items||[]).reduce((a,x)=>a+(Number(x.unread_count)||0),0),badge=$('#notificationCount');if(badge){badge.textContent=String(n);badge.hidden=!n}return n}catch{return 0}}
async function saveProfile(e){e.preventDefault();const status=$('#profileStatus');status.textContent='Saving…';try{const j=await api('/api/auth/profile',{method:'PATCH',body:JSON.stringify({name:$('#profileName').value.trim()})});state.me.name=j.name;$('#userName').textContent=j.name;$('#avatar').textContent=initials(j.name).slice(0,1);status.textContent='Profile saved.';toast('Profile updated')}catch(err){status.textContent=err.message}}
function syncDeleteAccountButton(){const email=$('#deleteAccountEmail')?.value.trim().toLowerCase()||'',text=$('#deleteAccountText')?.value.trim().toUpperCase()||'',understood=!!$('#deleteAccountUnderstand')?.checked,btn=$('#deleteAccountSubmit');if(btn)btn.disabled=!(state.me&&email===String(state.me.email).toLowerCase()&&text==='DELETE'&&understood)}
function openDeleteAccount(){if(state.me?.role==='SUPER_ADMIN'){toast('Platform administrator accounts cannot be deleted from self-service settings');return}$('#deleteAccountEmail').value='';$('#deleteAccountText').value='';$('#deleteAccountUnderstand').checked=false;$('#deleteAccountMsg').textContent='';$('#deleteAccountReauth').hidden=true;$('#deleteAccountSubmit').hidden=false;syncDeleteAccountButton();openModal('deleteAccountModal')}
async function reauthenticateForAccountDeletion(){try{await api('/api/auth/logout',{method:'POST'})}catch{}sessionStorage.clear();location.href='/login?next='+encodeURIComponent('/dashboard?view=settings&deleteAccount=1')}
async function deleteAccount(e){e.preventDefault();const btn=$('#deleteAccountSubmit'),msg=$('#deleteAccountMsg');btn.disabled=true;msg.textContent='Deleting account and owned data…';try{const j=await api('/api/auth/account',{method:'DELETE',body:JSON.stringify({email:$('#deleteAccountEmail').value.trim(),confirmation:$('#deleteAccountText').value.trim()})});msg.classList.add('success');msg.textContent='Account deleted. Redirecting…';sessionStorage.clear();if(j.cleanup_warnings?.length)console.warn('Account deletion cleanup warnings',j.cleanup_warnings);setTimeout(()=>location.replace('/'),500)}catch(err){msg.classList.remove('success');msg.textContent=err.message;if(err.detail?.code==='REAUTH_REQUIRED'){$('#deleteAccountReauth').hidden=false;btn.hidden=true}else{btn.disabled=false}}}
function apiErrorMessage(detail,status){if(typeof detail==='string')return detail;const d=detail||{};if(d.message)return d.message;const map={AI_CREDITS_EXHAUSTED:'You have used your available AI credits. Buy an AI-credit top-up, upgrade your plan, or wait for the next reset.',LEAD_CREDITS_EXHAUSTED:'You have used your available lead credits. Buy a lead-credit top-up, upgrade your plan, or wait for the next reset.',DRAFT_LIMIT_REACHED:'You have reached the draft-site limit. Delete an unused draft before creating another.',MANAGED_SERVICE_REQUIRED:'This request needs Zylora managed service. Contact our experts to continue.',SOURCE_EXPORT_PAYMENT_REQUIRED:'Source export requires a one-time purchase.',PLAN_SELECTION_REQUIRED:'Choose a plan before publishing.',PLAN_UPGRADE_REQUIRED:'Your current plan cannot publish this website yet. Choose an eligible plan to continue.',SCHEMA_CAPABILITY_REQUIRED:'This edit needs a website capability that the current SiteDocument does not support safely.'};return map[d.code]||d.code?.replaceAll('_',' ').toLowerCase().replace(/^./,c=>c.toUpperCase())||`Request failed (${status})`}
async function api(url,opts={}){const headers={...(opts.headers||{})};if(!(opts.body instanceof FormData))headers['Content-Type']='application/json';if(opts.method&&opts.method!=='GET'){headers['X-CSRF-Token']=sessionStorage.getItem('csrf')||state.me?.csrf_token||'';}const r=await fetch(url,{...opts,headers});let j={};try{j=await r.json()}catch{}if(r.status===401){location.href='/login';throw new Error('Authentication required')}if(!r.ok){const detail=j.detail??j;const e=new Error(apiErrorMessage(detail,r.status));e.status=r.status;e.detail=typeof detail==='object'&&detail?detail:{};throw e}return j}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
function openModal(id){const el=$('#'+id);el.classList.add('open');el.setAttribute('aria-hidden','false')}
function closeModal(id){const el=$('#'+id);el.classList.remove('open');el.setAttribute('aria-hidden','true')}
function setView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$('#knowledgeFile')?.addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;try{$('#knowledgeContent').value=await f.text();if(!$('#knowledgeTitle').value)$('#knowledgeTitle').value=f.name.replace(/\.[^.]+$/,'')}catch{$('#knowledgeMsg').textContent='Could not read that text file.'}});
$$('.rail-btn[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));if(id.startsWith('crm-')&&window.ZyloraCRM)window.ZyloraCRM.onView(id);if(id==='overview')renderHeroSiteCard();if(id==='assistant')loadDedicatedAssistant();if(id==='appointments')loadAppointments();if(id==='leads')loadLeads();if(id==='analytics')loadGrowth();if(id==='health')loadHealth();if(id==='settings')loadSettings();if(id==='billing')loadBilling();if(id==='domains')loadDomains();if(id==='integrations'){loadGoogleSheet();loadKnowledge()}if(id==='freelancer')loadFreelancer();if(id==='support')loadSupport();window.scrollTo({top:0,behavior:'smooth'})}
function updateVerificationUI(){const banner=$('#verifyBanner');banner.hidden=!!state.me.email_verified;if(!state.me.email_verified){$('#verifyEmail').textContent=state.me.email;const token=sessionStorage.getItem('debugVerifyToken');$('#devVerify').hidden=!token}}
async function init(){state.me=await api('/api/auth/me');sessionStorage.setItem('csrf',state.me.csrf_token);if($('#userName'))$('#userName').textContent=state.me.name;if($('#userPlan'))$('#userPlan').textContent=state.me.plan_selected?state.me.plan:'Choose at publish';renderAvatar($('#avatar'));renderAvatar($('#sideAvatar'));if($('#sideUserName'))$('#sideUserName').textContent=state.me.name;if($('#sideUserRole'))$('#sideUserRole').textContent=state.me.role==='SUPER_ADMIN'?'Super admin':'User';if($('#creditCount'))$('#creditCount').textContent=state.me.ai_credits;if($('#leadCreditCount'))$('#leadCreditCount').textContent=state.me.lead_credits??'—';if($('#aCredits'))$('#aCredits').textContent=state.me.ai_credits;const d=new Date();if($('#todayLabel'))$('#todayLabel').textContent=d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'})+' · Real-time overview';updateVerificationUI();if(state.me.role==='SUPER_ADMIN'&&$('#accountDangerCard')){$('#accountDangerCard').hidden=true;}loadBilling().catch(e=>toast(e.message));await loadSites();await loadLeads();loadGrowth().catch(()=>{});await loadSettings();await refreshNotificationIndicator();const params=new URLSearchParams(location.search),resumePublish=params.get('resumePublish');if(resumePublish){history.replaceState({},'',location.pathname);await publishFromDashboard(resumePublish)}if(params.get('view')){setView(params.get('view'));if(params.get('view')==='health'&&params.get('site')&&$('#healthSite')){$('#healthSite').value=params.get('site');loadHealth()}}if(params.get('deleteAccount')==='1'){setView('settings');openDeleteAccount();history.replaceState({},'',location.pathname)}}
async function loadSites(){const r=await api('/api/sites');state.sites=r.items;renderSites();fillSiteSelectors();renderHeroSiteCard();const live=state.sites.filter(s=>s.status==='LIVE').length;if($('#liveCount'))$('#liveCount').textContent=`${live}/1`;if($('#siteCount'))$('#siteCount').textContent=state.sites.length;if($('#aPublished'))$('#aPublished').textContent=live;renderOverviewMomentum();const p=$('#priorityList');if(p){if(live){const s=state.sites.find(x=>x.status==='LIVE');p.innerHTML=`<div class="priority"><i style="background:#6ce481"></i><div><b>${escapeHtml(s.business_name)} is live</b><small>Published at /s/${escapeHtml(s.slug)}</small></div><span>✓</span></div>`}else p.innerHTML=`<div class="priority warn"><i></i><div><b>No site published yet</b><small>Create or publish a website to start collecting leads.</small></div><span>→</span></div>`;}renderAnalytics();
const analyticsCalendarRoot=$('#analyticsCalendarRoot');
if (window.ZyloraCalendar && analyticsCalendarRoot && !analyticsCalendarRoot.dataset.mounted) {
  analyticsCalendarRoot.dataset.mounted='true';
  const initialFrom = new Date();
  initialFrom.setDate(initialFrom.getDate() - 29);
  const initialTo = new Date();
  ZyloraCalendar.mount(analyticsCalendarRoot, {
    initialRange: { from: initialFrom, to: initialTo },
    onRangeChange: function(range) {
      state.customDateRange = range;
      $$('[data-analytics-range]').forEach(x => x.classList.remove('active'));
      renderAnalytics();
      if (typeof loadGrowth === 'function') loadGrowth();
    }
  });
}
const assistantPromptInputRoot=$('#assistantPromptInputRoot');
if (window.PromptInputModule && assistantPromptInputRoot && !assistantPromptInputRoot.dataset.mounted) {
  assistantPromptInputRoot.dataset.mounted='true';
  PromptInputModule.mount(assistantPromptInputRoot, {
    placeholder: "Test conversation: ask about services, pricing, hours...",
    onSubmit: function(text) {
      const inp = $('#assistantTestInput');
      if (inp) inp.value = text;
      if (typeof sendAssistantTest === 'function') sendAssistantTest();
    }
  });
}}
function fillSiteSelectors(){for(const id of ['domainSite','integrationSite','knowledgeSite','studioSiteSelect','healthSite','assistantSite','assistantViewSite','appointmentsSite']){const sel=$('#'+id);const current=sel?.value;if(!sel)continue;sel.innerHTML=state.sites.map(s=>`<option value="${s.id}">${escapeHtml(s.business_name)}</option>`).join('');if(current&&state.sites.some(s=>s.id===current))sel.value=current}state.selectedDomainSite=$('#domainSite')?.value||null;state.selectedIntegrationSite=$('#integrationSite')?.value||null}
function periodTrend(current,previous){if(previous<=0)return current>0?{label:'NEW',kind:'up'}:null;const pct=((current-previous)/previous)*100;return{label:`${pct>=0?'▲':'▼'}${Math.abs(pct).toFixed(pct>=100?0:1)}%`,kind:pct>=0?'up':'down'}}
function renderOverviewMomentum(){const now=Date.now(),week=7*864e5,month=30*864e5,count=(items,start,end)=>items.filter(x=>{const t=Date.parse(x.created_at||'');return Number.isFinite(t)&&t>=start&&t<=end&&t<end}).length;const lead=periodTrend(count(state.leads||[],now-week,now),count(state.leads||[],now-2*week,now-week));const site=periodTrend(count(state.sites||[],now-month,now),count(state.sites||[],now-2*month,now-month));for(const [id,v] of [['leadTrend',lead],['siteTrend',site]]){const el=$('#'+id);if(!el)continue;if(!v){el.hidden=true;continue}el.hidden=false;el.textContent=v.label;el.className=`micro-trend ${v.kind}`}}
function renderOverviewLeadChart(){const now=new Date(),days=[];for(let i=6;i>=0;i--){const d=new Date(now);d.setHours(0,0,0,0);d.setDate(d.getDate()-i);days.push(d)}const counts=days.map(d=>{const e=new Date(d);e.setDate(e.getDate()+1);return(state.leads||[]).filter(l=>{const t=Date.parse(l.created_at||'');return Number.isFinite(t)&&t>=d.getTime()&&t<e.getTime()}).length});const chartData=days.map((d,i)=>{const s=d.toLocaleDateString(undefined,{weekday:'short'}),f=d.toLocaleDateString(undefined,{month:'short',day:'numeric'});return{day:s,leads:counts[i],label:`${s}, ${f}`}});if(window.ZyloraCharts&&typeof window.ZyloraCharts.renderLeadCaptureChart==='function'){window.ZyloraCharts.renderLeadCaptureChart('shadcnLeadCaptureRoot',chartData)}const bars=$$('#barChart i');if(!bars.length)return;const max=Math.max(1,...counts);bars.forEach((b,i)=>{const h=counts[i]?Math.max(12,Math.round(counts[i]/max*92)):4;b.style.setProperty('--h',h+'%');b.classList.toggle('hot',counts[i]===max&&max>0);b.title=`${counts[i]} lead${counts[i]===1?'':'s'}`});const labels=$$('.axis span');days.forEach((d,i)=>{if(labels[i])labels[i].textContent=d.toLocaleDateString(undefined,{weekday:'short'})})}
function renderCreditDensity(wallet){const ai=wallet?.ai;if(!ai||!$('#aiCreditSegments'))return;const vals=[ai.monthly_remaining||0,ai.signup_remaining||0,ai.topup_remaining||0],total=Math.max(1,vals.reduce((a,b)=>a+b,0));const seg=$$('#aiCreditSegments i');vals.forEach((v,i)=>{if(seg[i])seg[i].style.width=(v/total*100)+'%'});$('#creditDensityTotal').textContent=`${vals.reduce((a,b)=>a+b,0)} AI credits`;$('#aiCreditSegments').setAttribute('aria-label',`AI credits: ${vals[0]} monthly, ${vals[1]} signup, ${vals[2]} top-up`) }
function renderCreditTopups(catalogue){
  const grid=$('#creditTopupGrid');
  if(!grid)return;
  const packs=catalogue?.packs||{};
  if(!catalogue?.available||!Object.keys(packs).length){
    grid.innerHTML='<div class="topup-empty"><b>Managed credit capacity</b><p>Credit top-ups are not available for this plan.</p></div>';
    return;
  }
  const groups=[['ai','AI credits'],['lead','Lead credits']];
  grid.innerHTML = groups.map(([type,label]) => {
    const entries=Object.entries(packs[type]||{});
    if(!entries.length) return '';
    return `<section class="topup-group" aria-label="${escapeHtml(label)}">
      <div class="topup-group-head">
        <span class="topup-group-title">${escapeHtml(label)}</span>
        <span class="topup-group-meta">One-time add-on  USD</span>
      </div>
      <div class="topup-pack-list">
        ${entries.map(([code,pack])=>`
          <button class="topup-pack" type="button" data-topup-type="${type}" data-topup-code="${escapeHtml(code)}">
            <span class="topup-pack-left">
              <span class="topup-pack-icon">${type==='ai'?'<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z\"/></svg>':'<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>'}</span>
              <b class="topup-pack-amount">${Number(pack.credits).toLocaleString()}</b>
              <span class="topup-pack-unit">credits</span>
            </span>
            <strong class="topup-pack-price">${formatMoney(pack.price_usd_minor,'USD')}</strong>
          </button>
        `).join('')}
      </div>
    </section>`;
  }).join('');
  $$('[data-topup-type]',grid).forEach(btn=>btn.onclick=()=>buyCreditTopup(btn.dataset.topupType,btn.dataset.topupCode));
}
function renderSites(){
  const g=$('#siteGrid'),empty=$('#siteEmpty');
  g.innerHTML='';
  empty.style.display=state.sites.length?'none':'grid';
  for(const s of state.sites){
    const c=document.createElement('article');
    c.className='site-card';
    c.dataset.search=`${s.business_name} ${s.slug} ${s.template_slug}`.toLowerCase();
    const isLive = s.status === 'LIVE';
    c.innerHTML = `
      <div class="site-thumb" style="--site-accent:${escapeHtml(s.accent||'#b7ff3b')}"></div>
      <div class="site-card-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <h3>${escapeHtml(s.business_name)}</h3>
          <span class="status-badge ${isLive ? 'pass' : 'info'}" data-status="${s.status}">${isLive ? '✓ LIVE' : '○ DRAFT'}</span>
        </div>
        <div class="site-meta">
          <span>${escapeHtml(s.origin==='AI'?'AI-assisted':s.origin==='IMPORT'?'Imported source':s.origin==='TEMPLATE'?'Legacy site':'Manual Studio')}</span>
        </div>
        <div class="site-actions restrained-actions">
          <a class="site-primary" href="/studio/${s.id}">Edit website</a>
          <a class="site-secondary" href="/api/sites/${s.id}/preview" target="_blank" rel="noopener">Preview</a>
          <details class="site-overflow">
            <summary aria-label="More website actions" title="More actions">•••</summary>
            <div class="site-overflow-menu" role="menu">
              ${isLive ? `<a role="menuitem" href="/s/${s.slug}" target="_blank" rel="noopener">Open live site</a>` : `<button role="menuitem" data-publish="${s.id}">Publish website</button>`}
              <button role="menuitem" data-source-export="${s.id}">Export Next.js</button>
              <button role="menuitem" data-domain-site="${s.id}">Domain & SSL</button>
              <button role="menuitem" data-transfer="${s.id}">Transfer ownership</button>
              ${!isLive ? `<button role="menuitem" class="danger" data-delete-draft="${s.id}" data-site-name="${escapeHtml(s.business_name)}">Delete draft</button>` : ''}
            </div>
          </details>
        </div>
      </div>`;
    g.appendChild(c);
  }
  $$('[data-publish]').forEach(b=>b.onclick=()=>publishFromDashboard(b.dataset.publish));
  $$('[data-domain-site]').forEach(b=>b.onclick=()=>{$('#domainSite').value=b.dataset.domainSite;setView('domains');loadDomains()});
  $$('[data-transfer]').forEach(b=>b.onclick=()=>{$('#transferSiteId').value=b.dataset.transfer;$('#transferMsg').textContent='';openModal('transferModal')});
  $$('[data-source-export]').forEach(b=>b.onclick=()=>unlockSourceExport(b.dataset.sourceExport));
  $$('[data-delete-draft]').forEach(b=>b.onclick=()=>{
    state.pendingDeleteSiteId = b.dataset.deleteDraft;
    $('#deleteDraftSiteName').textContent = b.dataset.siteName || 'this website';
    $('#deleteDraftMsg').textContent = '';
    openModal('deleteDraftModal');
  });
}
$('#confirmDeleteDraftBtn')?.addEventListener('click', async () => {
  const siteId = state.pendingDeleteSiteId;
  if (!siteId) return;
  const btn = $('#confirmDeleteDraftBtn');
  btn.disabled = true;
  btn.textContent = 'Deleting…';
  try {
    await api(`/api/sites/${encodeURIComponent(siteId)}`, { method: 'DELETE' });
    closeModal('deleteDraftModal');
    toast('Draft website deleted');
    await loadSites();
  } catch (err) {
    $('#deleteDraftMsg').textContent = err.message || 'Failed to delete draft';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Delete draft';
  }
});
function showPublishUpgrade(siteId,d){setView('billing');const box=$('#billingMsg');const recommended=String(d.recommended_plan||'STARTER').toUpperCase();const purchasable=['STARTER','GROWTH'].includes(recommended)?recommended:null;const planLabel=purchasable?purchasable[0]+purchasable.slice(1).toLowerCase():'an eligible plan';box.innerHTML=`<div class="publish-upgrade"><b>${purchasable?`Upgrade to ${escapeHtml(planLabel)}`:'Choose an eligible plan'} to publish this ${Number(d.page_count)||''}-page website</b><p>${escapeHtml(d.message||'Publishing limits depend on the selected plan and number of pages.')}</p>${purchasable?`<div class="form-actions"><button class="accent-btn" data-publish-upgrade="${purchasable}">Activate ${escapeHtml(planLabel)}</button></div>`:''}</div>`;const b=$('[data-publish-upgrade]',box);if(b)b.onclick=async()=>{b.disabled=true;const ok=await upgradePaid(purchasable,true);if(ok)await publishFromDashboard(siteId);else b.disabled=false}}
async function publishFromDashboard(siteId){return ZyloraPublishFlow.start(siteId,{onPublished:async j=>{toast(j.structural_reset_applied?'Published on Free · layout reset, content preserved':'Website published');await loadSites();window.open(j.url,'_blank','noopener')},onError:e=>toast(e.message)})}

async function loadLeads(){try{const r=await api('/api/leads');state.leads=r.items||[];const body=$('#leadRows');if(body)body.innerHTML=state.leads.map(tenantLeadRow).join('');if($('#leadEmpty'))$('#leadEmpty').style.display=state.leads.length?'none':'grid';$$('[data-lead-detail]').forEach(b=>b.onclick=()=>openLeadDetails(state.leads[Number(b.dataset.leadDetail)]));if($('#leadCount'))$('#leadCount').textContent=state.leads.length;if($('#overviewLeadCount'))$('#overviewLeadCount').textContent=state.leads.length;$('#aLeads')&&($('#aLeads').textContent=state.leads.length);renderOverviewMomentum();renderOverviewLeadChart();renderAnalytics();
const analyticsCalendarRoot=$('#analyticsCalendarRoot');
if (window.ZyloraCalendar && analyticsCalendarRoot && !analyticsCalendarRoot.dataset.mounted) {
  analyticsCalendarRoot.dataset.mounted='true';
  const initialFrom = new Date();
  initialFrom.setDate(initialFrom.getDate() - 29);
  const initialTo = new Date();
  ZyloraCalendar.mount(analyticsCalendarRoot, {
    initialRange: { from: initialFrom, to: initialTo },
    onRangeChange: function(range) {
      state.customDateRange = range;
      $$('[data-analytics-range]').forEach(x => x.classList.remove('active'));
      renderAnalytics();
      if (typeof loadGrowth === 'function') loadGrowth();
    }
  });
}
const assistantPromptInputRoot=$('#assistantPromptInputRoot');
if (window.PromptInputModule && assistantPromptInputRoot && !assistantPromptInputRoot.dataset.mounted) {
  assistantPromptInputRoot.dataset.mounted='true';
  PromptInputModule.mount(assistantPromptInputRoot, {
    placeholder: "Test conversation: ask about services, pricing, hours...",
    onSubmit: function(text) {
      const inp = $('#assistantTestInput');
      if (inp) inp.value = text;
      if (typeof sendAssistantTest === 'function') sendAssistantTest();
    }
  });
}}catch(e){toast(e.message)}}
async function openCreate(){
  if(state.creatingSite)return;
  state.creatingSite=true;
  const buttons=$$('[data-action="new-site"]');
  buttons.forEach(button=>{button.disabled=true;button.dataset.previousLabel=button.textContent;button.textContent='Opening Studio…'});
  try{
    const site=await api('/api/sites/blank',{method:'POST',body:JSON.stringify({name:'Untitled website'})});
    location.href=site.studio_url||`/studio/${encodeURIComponent(site.id)}`;
  }catch(error){
    toast(error.message);
    state.creatingSite=false;
    buttons.forEach(button=>{button.disabled=false;button.textContent=button.dataset.previousLabel||'Create Website'});
  }
}
let settingsLoadPromise=null;async function loadSettings(force=false){if(settingsLoadPromise&&!force)return settingsLoadPromise;if(state.settingsLoaded&&!force)return;settingsLoadPromise=(async()=>{const j=await api('/api/notifications');const f=$('#notifyForm');if($('#profileName'))$('#profileName').value=state.me?.name||'';if($('#profileEmail'))$('#profileEmail').value=state.me?.email||'';for(const k of ['email_to','country_code','phone_number'])if(f?.elements[k])f.elements[k].value=j[k]||(k==='country_code'?'+91':'');for(const k of ['notify_new_form_lead','notify_new_chatbot_lead','notify_new_appointment','notify_appointment_cancelled_or_rescheduled','notify_other_enquiries'])if(f?.elements[k])f.elements[k].checked=j[k]===undefined?true:!!j[k];$('#verifyState').textContent=j.whatsapp_verified?'WhatsApp number verified ✓':'WhatsApp number not verified';state.settingsLoaded=true;await loadAssistantSettings().catch(()=>{})})().finally(()=>settingsLoadPromise=null);return settingsLoadPromise}
let assistantTestConversation=null;
function assistantSiteId(){return $('#assistantSite')?.value||state.sites?.[0]?.id||null}
async function loadAssistantSettings(){const siteId=assistantSiteId();const form=$('#assistantSettingsForm');if(!form)return;if(!siteId){$('#assistantSettingsMsg').textContent='Create a website first.';form.querySelectorAll('input,select,textarea,button').forEach(x=>x.disabled=true);return}form.querySelectorAll('input,select,textarea,button').forEach(x=>x.disabled=false);const c=await api(`/api/sites/${siteId}/assistant/settings`);$('#assistantEnabled').checked=!!c.enabled;$('#assistantTone').value=String(c.tone||'FRIENDLY').toUpperCase();$('#assistantGoal').value=String(c.primary_goal||'GET_ENQUIRIES').toUpperCase();$('#assistantContact').value=String(c.contact_collection||'BOTH').toUpperCase();$('#assistantQualification').value=(c.qualification_fields||[]).join(', ');$('#assistantProactive').checked=!!c.proactive_prompts;$('#assistantHuman').checked=!!c.human_handoff;$('#assistantWhatsapp').checked=!!c.whatsapp_handoff;$('#assistantAppointment').checked=!!c.appointment_booking;$('#assistantBusinessProfile').checked=!!c.use_business_profile;$('#assistantPublishedSite').checked=!!c.use_published_site;$('#assistantApprovedKnowledge').checked=!!c.use_approved_knowledge;$('#assistantRestricted').value=(c.restricted_topics||[]).join(', ');$('#assistantInstructions').value=c.custom_instructions||'';$('#assistantSettingsMsg').textContent=`Configuration revision ${c.config_revision||1}${c.appointment_configured?' · appointment engine connected':' · appointments not configured'}`;assistantTestConversation=null;$('#assistantTestTranscript').innerHTML='<p class="muted-copy">Start a test conversation.</p>'}
async function saveAssistantSettings(e){e.preventDefault();const siteId=assistantSiteId();if(!siteId)return;const csv=id=>$(id).value.split(',').map(x=>x.trim()).filter(Boolean);const payload={enabled:$('#assistantEnabled').checked,tone:$('#assistantTone').value,primary_goal:$('#assistantGoal').value,contact_collection:$('#assistantContact').value,qualification_fields:csv('#assistantQualification'),proactive_prompts:$('#assistantProactive').checked,human_handoff:$('#assistantHuman').checked,whatsapp_handoff:$('#assistantWhatsapp').checked,appointment_booking:$('#assistantAppointment').checked,use_business_profile:$('#assistantBusinessProfile').checked,use_published_site:$('#assistantPublishedSite').checked,use_approved_knowledge:$('#assistantApprovedKnowledge').checked,restricted_topics:csv('#assistantRestricted'),custom_instructions:$('#assistantInstructions').value.trim()};try{const c=await api(`/api/sites/${siteId}/assistant/settings`,{method:'PATCH',body:JSON.stringify(payload)});$('#assistantSettingsMsg').textContent=`Assistant settings saved · revision ${c.config_revision}.`;toast('AI Sales Assistant updated')}catch(err){$('#assistantSettingsMsg').textContent=err.message}}
function renderAssistantTestLine(role,text){const box=$('#assistantTestTranscript');if(!box)return;if(box.querySelector('.muted-copy'))box.innerHTML='';const row=document.createElement('div');row.className='stack-item assistant-test-line';row.innerHTML=`<div><b>${role==='visitor'?'Visitor':'Assistant'}</b><small>${escapeHtml(text)}</small></div>`;box.appendChild(row);box.scrollTop=box.scrollHeight}
async function startAssistantTest(){const siteId=assistantSiteId();if(!siteId)return;try{const j=await api(`/api/sites/${siteId}/assistant/test/conversations`,{method:'POST',body:JSON.stringify({session_id:`owner-test-${Date.now()}`,page_url:'/owner-test'})});assistantTestConversation=j.id;$('#assistantTestTranscript').innerHTML='<p class="muted-copy">Test mode active — no real lead, notification or booking side effects.</p>';toast('Assistant test started')}catch(e){toast(e.message)}}
async function sendAssistantTest(){const siteId=assistantSiteId(),input=$('#assistantTestInput'),message=input?.value.trim();if(!siteId||!message)return;if(!assistantTestConversation)await startAssistantTest();if(!assistantTestConversation)return;input.value='';renderAssistantTestLine('visitor',message);try{const r=await api(`/api/sites/${siteId}/assistant/test/conversations/${assistantTestConversation}/messages`,{method:'POST',body:JSON.stringify({message})});renderAssistantTestLine('assistant',r.answer||'No answer returned.')}catch(e){renderAssistantTestLine('assistant',`Test error: ${e.message}`)}}
async function saveSettings(e){e.preventDefault();const f=e.currentTarget;const payload={email_to:f.elements.email_to.value||null,country_code:f.elements.country_code.value||'+91',phone_number:f.elements.phone_number.value||null};for(const k of ['notify_new_form_lead','notify_new_chatbot_lead','notify_new_appointment','notify_appointment_cancelled_or_rescheduled','notify_other_enquiries'])payload[k]=f.elements[k].checked;try{const j=await api('/api/notifications',{method:'PUT',body:JSON.stringify(payload)});$('#notifyStatus').textContent='Settings saved.';$('#verifyState').textContent=j.whatsapp_verified?'WhatsApp number verified ✓':'WhatsApp number not verified';state.settingsLoaded=true}catch(err){$('#notifyStatus').textContent=err.message}}
async function requestOtp(){try{const j=await api('/api/notifications/whatsapp/request-otp',{method:'POST'});$('#verifyState').textContent=`Code sent to number ending ${j.destination}.`;if(j.debug_code){$('#otpCode').value=j.debug_code;$('#verifyState').textContent+=` Development code: ${j.debug_code}`}}catch(e){toast(e.message)}}
async function verifyOtp(){try{const code=$('#otpCode').value.trim();await api('/api/notifications/whatsapp/verify',{method:'POST',body:JSON.stringify({code})});$('#verifyState').textContent='WhatsApp number verified ✓';toast('WhatsApp verified')}catch(e){toast(e.message)}}
async function unlockSourceExport(siteId){try{let direct=await fetch(`/api/sites/${siteId}/export`,{credentials:'same-origin'});if(direct.ok){const blob=await direct.blob(),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='zylora-nextjs.zip';a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);return}const err=await direct.json().catch(()=>({}));if(direct.status!==402)throw new Error(err.detail?.message||err.detail||'Export unavailable');const cfg=await api('/api/source-export/config'),currency='USD',price=(cfg.prices[currency]||0)/100;if(!confirm(`Standalone Next.js source export costs ${new Intl.NumberFormat(undefined,{style:'currency',currency}).format(price)}. Ownership transfer remains free. Continue?`))return;const o=await api(`/api/sites/${siteId}/source-export/order`,{method:'POST',body:JSON.stringify({currency})});if(o.entitled){location.href=`/api/sites/${siteId}/export`;return}if(o.provider==='mock'){await api(`/api/sites/${siteId}/source-export/verify`,{method:'POST',body:JSON.stringify({order_id:o.order_id,payment_id:o.mock_payment_id,signature:o.mock_signature})});toast('Source export unlocked');location.href=`/api/sites/${siteId}/export`;return}await loadRazorpay();const rz=new Razorpay({key:o.key_id,amount:o.amount,currency:o.currency,order_id:o.order_id,name:'Zylora',description:'Next.js source export',prefill:{name:state.me.name,email:state.me.email},handler:async r=>{await api(`/api/sites/${siteId}/source-export/verify`,{method:'POST',body:JSON.stringify({order_id:r.razorpay_order_id,payment_id:r.razorpay_payment_id,signature:r.razorpay_signature})});location.href=`/api/sites/${siteId}/export`}});rz.open()}catch(e){toast(e.message)}}
async function loadGrowth(){try{const j=await api(`/api/growth?days=${Number(state.analyticsRange||30)}`),t=j.totals||{},af=j.assistant||{};const convText=Number(t.visitors||0)>0?`${Number(t.lead_conversion_rate||0).toFixed(1)}%`:'—';$('#growthVisitors')&&($('#growthVisitors').textContent=t.visitors||0);$('#growthViews')&&($('#growthViews').textContent=`${t.page_views||0} page views`);$('#growthConversion')&&($('#growthConversion').textContent=convText);$('#growthCtaRate')&&($('#growthCtaRate').textContent=`${Number(t.cta_rate||0).toFixed(1)}% CTA rate`);$('#assistantOpened')&&($('#assistantOpened').textContent=af.opened||0);$('#assistantMeaningful')&&($('#assistantMeaningful').textContent=af.meaningful_conversations||0);$('#assistantLeads')&&($('#assistantLeads').textContent=af.leads_captured||0);$('#assistantQualified')&&($('#assistantQualified').textContent=af.qualified_leads||0);$('#assistantHot')&&($('#assistantHot').textContent=af.hot_leads||0);$('#assistantAppointments')&&($('#assistantAppointments').textContent=af.appointments_booked||0);if($('#overviewLeadCount'))$('#overviewLeadCount').textContent=state.leads?.length||0;if($('#overviewQualifiedLeads'))$('#overviewQualifiedLeads').textContent=(state.leads||[]).filter(l=>['HOT','WARM','QUALIFIED'].includes(String(l.lead_temperature||l.status||'').toUpperCase())).length;if($('#overviewAppointmentsBooked'))$('#overviewAppointmentsBooked').textContent=af.appointments_booked||0;if($('#overviewConversionRate'))$('#overviewConversionRate').textContent=convText;if($('#overviewAssistantConvs'))$('#overviewAssistantConvs').textContent=af.meaningful_conversations||0;if($('#overviewAssistantLeads'))$('#overviewAssistantLeads').textContent=af.leads_captured||0;if($('#overviewAssistantRate'))$('#overviewAssistantRate').textContent=`${Number(af.conversion_rate||0).toFixed(1)}%`;(function(){var _base=Number(af.opened||0);var _bars=[{id:'funnelBarOpened',val:af.opened||0},{id:'funnelBarConversations',val:af.meaningful_conversations||0},{id:'funnelBarLeads',val:af.leads_captured||0},{id:'funnelBarQualified',val:af.qualified_leads||0},{id:'funnelBarHot',val:af.hot_leads||0},{id:'funnelBarAppointments',val:af.appointments_booked||0}];_bars.forEach(function(b){var el=document.getElementById(b.id);if(el){var pct=_base>0?Math.round((b.val/_base)*100):0;el.style.width=(_base>0?(b.id==='funnelBarOpened'?100:pct):0)+'%';}});})();$('#assistantFunnelCount')&&($('#assistantFunnelCount').textContent=af.leads_captured||0);$('#assistantFunnelRate')&&($('#assistantFunnelRate').textContent=`${Number(af.conversion_rate||0).toFixed(1)}% conversion`);const perfData=Array.isArray(j.performance_series)?j.performance_series:[];if(window.ZyloraCharts&&typeof window.ZyloraCharts.renderPerformanceChart==='function'){window.ZyloraCharts.renderPerformanceChart('shadcnWebsitePerfRoot',perfData)}const insights=$('#growthInsights');if(insights)insights.innerHTML=(j.insights||[]).map(x=>`<div class="stack-item"><div><b>${escapeHtml(x.title||x.code)}</b><small>${escapeHtml(x.detail||'')}</small></div>${x.action==='AI_OPTIMIZE_CTA'&&j.sites?.[0]?`<a class="ghost-btn" href="/studio/${j.sites[0].id}?ai=${encodeURIComponent('Improve conversion and CTA clarity using the current website design system. Preserve the brand direction.')}">Fix with AI</a>`:''}</div>`).join('')||'<p class="muted-copy">No recommendations yet. More traffic data will make this view more useful.</p>';const pages=$('#growthPages');if(pages)pages.innerHTML=(j.pages||[]).slice(0,10).map(x=>`<div class="stack-item"><div><b>${escapeHtml(x.path)}</b><small>${x.views} views · ${x.cta_clicks} CTA clicks</small></div><span class="status-badge">${Number(x.cta_rate||0).toFixed(1)}%</span></div>`).join('')||'<p class="muted-copy">No tracked page views yet.</p>'}catch(e){toast(e.message)}}
function formatHealthStatusBadge(status) {
  const s = String(status || '').toUpperCase();
  if (['PASS', 'HEALTHY', 'OK', 'APPROVED', 'LIVE'].includes(s)) {
    return `<span class="status-badge pass" data-status="${escapeHtml(s)}">✓ ${escapeHtml(s)}</span>`;
  }
  if (['WARN', 'WARNING', 'PENDING'].includes(s)) {
    return `<span class="status-badge warn" data-status="${escapeHtml(s)}">! ${escapeHtml(s)}</span>`;
  }
  if (['FAIL', 'ERROR', 'BLOCKED', 'REJECTED', 'SUSPENDED', 'RESTRICTED'].includes(s)) {
    return `<span class="status-badge fail" data-status="${escapeHtml(s)}">× ${escapeHtml(s)}</span>`;
  }
  return `<span class="status-badge info" data-status="${escapeHtml(s)}">ℹ ${escapeHtml(s)}</span>`;
}
async function loadHealth(){
  const sel=$('#healthSite');
  if(!sel)return;
  if(!sel.options.length)fillSiteSelectors();
  const siteId=sel.value||state.sites?.[0]?.id;
  if(!siteId){
    $('#healthStatus').textContent='Create a website first';
    return;
  }
  try{
    const [h,a]=await Promise.all([
      api(`/api/sites/${siteId}/health`),
      api(`/api/audit?site_id=${encodeURIComponent(siteId)}&limit=20`)
    ]), qa=h.launch?.qa||{};
    $('#healthScore').textContent=`${h.score??0}/100`;
    $('#healthStatus').textContent=h.status||'UNKNOWN';
    $('#healthBlockers').textContent=qa.blocking_count||0;
    $('#healthWarnings').textContent=qa.warning_count||0;
    $('#healthChecklist').innerHTML=(h.launch?.items||[]).map(x=>`
      <div class="stack-item">
        <div class="stack-item-text">
          <b class="stack-title">${escapeHtml(x.label)}</b>
          <small class="stack-detail">${escapeHtml(x.detail||'')}</small>
        </div>
        ${formatHealthStatusBadge(x.status)}
      </div>
    `).join('');
    $('#healthComponents').innerHTML=Object.entries(h.components||{}).map(([k,v])=>`
      <div class="stack-item">
        <div class="stack-item-text">
          <b class="stack-title">${escapeHtml(k.replaceAll('_',' ').toUpperCase())}</b>
          <small class="stack-detail">${escapeHtml(v.status==='HEALTHY'?'Operational and verified':v.status)}</small>
        </div>
        ${formatHealthStatusBadge(v.status)}
      </div>
    `).join('');
    const rec=h.components?.recoverability?.latest_backup;
    $('#healthBackupMeta').textContent=rec?`Latest: ${rec.label||rec.reason} · ${new Date(rec.created_at).toLocaleString()}`:'No restore point exists yet.';
    const dc=h.components?.lead_delivery?.counts||{};
    $('#healthDeliveryMeta').textContent=`Sent ${dc.SENT||0} · Failed ${dc.FAILED||0} · Dead-letter ${dc.DEAD_LETTER||0}`;
    $('#healthAudit').innerHTML=(a.items||[]).map(x=>`
      <div class="stack-item">
        <div class="stack-item-text">
          <b class="stack-title">${escapeHtml(x.action.replaceAll('_',' '))}</b>
          <small class="stack-detail">${escapeHtml(new Date(x.created_at).toLocaleString())}</small>
        </div>
      </div>
    `).join('')||'<p class="muted-copy">No audit activity yet.</p>';
  }catch(e){toast(e.message)}
}
async function createHealthBackup(){const siteId=$('#healthSite')?.value;if(!siteId)return;try{await api(`/api/sites/${siteId}/backups`,{method:'POST',body:JSON.stringify({label:'Dashboard restore point'})});toast('Restore point created');loadHealth()}catch(e){toast(e.message)}}
async function retryHealthDeliveries(){const siteId=$('#healthSite')?.value;if(!siteId)return;try{const j=await api(`/api/sites/${siteId}/deliveries/retry`,{method:'POST'});toast(`Retried ${j.attempted||0} delivery item(s)`);loadHealth()}catch(e){toast(e.message)}}
async function loadBillingRecovery(){const box=$('#billingRecoveryList');if(!box)return;try{const j=await api('/api/billing/recovery'),items=j.items||[];box.innerHTML=items.length?items.map(x=>`<div class="stack-item"><div><b>${escapeHtml(x.order_kind.replaceAll('_',' '))}</b><small>${escapeHtml(x.local_order_id)} · ${x.attempt_count} reconciliation attempt(s)${x.last_error?' · '+escapeHtml(x.last_error):''}</small></div><button class="ghost-btn" data-reconcile-payment="${x.id}">Reconcile</button></div>`).join(''):'<p class="muted-copy">No unresolved payment cases.</p>';$$('[data-reconcile-payment]').forEach(b=>b.onclick=async()=>{try{await api(`/api/billing/recovery/${b.dataset.reconcilePayment}/reconcile`,{method:'POST'});toast('Payment state reconciled');loadBillingRecovery();loadBilling()}catch(e){toast(e.message)}})}catch(e){box.innerHTML=`<p class="muted-copy">${escapeHtml(e.message)}</p>`}}
async function loadBilling(){const [j,topups,history]=await Promise.all([api('/api/billing'),api('/api/billing/credit-topups'),api('/api/billing/history')]);const offers=j.regional_offers||{},sub=j.subscription||null;$$('.billing-grid article[data-plan]').forEach(a=>a.classList.toggle('current',a.dataset.plan===j.plan));if($('#creditCount'))$('#creditCount').textContent=j.ai_credits;if($('#leadCreditCount'))$('#leadCreditCount').textContent=j.lead_credits??'—';renderCreditDensity(j.credit_wallet);$('#aCredits')&&($('#aCredits').textContent=j.ai_credits);state.me.plan=j.plan;state.me.ai_credits=j.ai_credits;state.me.lead_credits=j.lead_credits;state.pageLimit=Number(j.limits?.template_page_limit||j.limits?.pages||0)||null;$('#userPlan').textContent=j.plan;const priceText=o=>o?(o.currency==='INR'?`₹${(Number(o.amount_minor)/100).toLocaleString('en-IN',{maximumFractionDigits:0})}/month`:`US$${(Number(o.amount_minor)/100).toLocaleString('en-US',{maximumFractionDigits:0})}/month`):'—';for(const plan of ['STARTER','GROWTH']){const o=offers[plan],el=$(`#${plan.toLowerCase()}RegionalPrice`);if(el&&o){const price=priceText(o);el.innerHTML=`${escapeHtml(price.replace('/month',''))}<small>/month</small>`}}const regionOffer=offers[j.plan]||offers.STARTER||j.regional_offer;const freePriceEl=$('#freeRegionalPrice')||document.querySelector('.billing-grid article[data-plan="FREE"] h2');if(freePriceEl){const isIndia=(regionOffer&&regionOffer.billing_region==='INDIA')||(offers.STARTER&&offers.STARTER.currency==='INR');freePriceEl.innerHTML=`${isIndia?'₹0':'$0'}<small class="plan-period">/month · no card</small>`;}if($('#regionalBillingMeta')&&regionOffer)$('#regionalBillingMeta').textContent=`${regionOffer.billing_region==='INDIA'?'India':'International'} regional pricing · Starter ${priceText(offers.STARTER)} · Growth ${priceText(offers.GROWTH)}. Checkout is recalculated and reconciled server-side.`;const publicName={FREE:'Free',STARTER:'Starter',GROWTH:'Growth',PRO:'Managed',ZYLORA:'Legacy Zylora'}[j.plan]||j.plan;if($('#currentPlanBadge'))$('#currentPlanBadge').textContent=publicName;const activePlanPrice=['STARTER','GROWTH','ZYLORA'].includes(j.plan)?(sub?`${formatMoney(sub.billing_amount_minor,sub.billing_currency)} / month`:(offers[j.plan]?priceText(offers[j.plan]):(j.plan==='GROWTH'?'US$19/month':'US$9/month'))):(j.plan==='PRO'?'Managed':'Free');if($('#currentPlanPrice'))$('#currentPlanPrice').textContent=activePlanPrice;if($('#currentPlanMeta')){$('#currentPlanMeta').textContent=['STARTER','GROWTH','ZYLORA'].includes(j.plan)?`${sub?.billing_region||regionOffer?.billing_region||'Regional'} billing · ${j.ai_credits} AI credits · ${j.lead_credits} lead credits · unlimited AI Sales Assistant${sub?.cancel_at_period_end?' · cancellation scheduled for period end':''}.`:j.plan==='PRO'?'Sales-assisted delivery with no self-service credit wallet.':`${j.ai_credits} AI credits · ${j.lead_credits} lead credits · unlimited AI Sales Assistant.`}for(const plan of ['STARTER','GROWTH']){const btn=$(`[data-paid-plan="${plan}"]`);if(!btn)continue;const label=plan[0]+plan.slice(1).toLowerCase(),active=j.plan===plan;btn.disabled=active;btn.textContent=active?(sub?.cancel_at_period_end?'Active · cancellation scheduled':`${label} active`):(['STARTER','GROWTH','ZYLORA'].includes(j.plan)?`Switch to ${label}`:`Activate ${label}`)}renderCreditTopups(topups);const rows=$('#billingHistoryRows'),empty=$('#billingHistoryEmpty');if(rows)rows.innerHTML=(history.items||[]).map(x=>`<tr><td data-label="Reference">${escapeHtml((x.provider_payment_id||x.id||'').slice(0,22))}</td><td data-label="Date">${x.created_at?new Date(x.created_at).toLocaleDateString():'—'}</td><td data-label="Status"><span class="billing-status ${String(x.status||'').toLowerCase()}">${escapeHtml(x.status||'—')}</span></td><td data-label="Type">${escapeHtml(x.kind==='TOPUP'?x.label:(x.kind==='SUBSCRIPTION'?x.label:`${x.label} plan`))}</td><td data-label="Amount">${formatMoney(x.amount_minor,x.currency)}</td></tr>`).join('');if(empty)empty.style.display=(history.items||[]).length?'none':'grid';renderAnalytics();loadBillingRecovery()}
async function buyCreditTopup(credit_type,pack_code){try{$('#creditTopupMsg').textContent='Creating secure checkout…';const o=await api('/api/billing/credit-topups/order',{method:'POST',body:JSON.stringify({credit_type,pack_code})});if(o.provider==='mock'){const v=await api('/api/billing/credit-topups/verify',{method:'POST',body:JSON.stringify({order_id:o.order_id,payment_id:o.mock_payment_id,signature:o.mock_signature})});$('#creditTopupMsg').textContent=`Added ${o.credits} ${credit_type==='ai'?'AI':'lead'} credits.`;await loadBilling();return}await loadRazorpay();const rz=new Razorpay({key:o.key_id,amount:o.amount,currency:o.currency,order_id:o.order_id,name:'Zylora',description:`${o.credits} ${credit_type} credits`,prefill:{name:state.me.name,email:state.me.email},handler:async r=>{await api('/api/billing/credit-topups/verify',{method:'POST',body:JSON.stringify({order_id:r.razorpay_order_id,payment_id:r.razorpay_payment_id,signature:r.razorpay_signature})});$('#creditTopupMsg').textContent='Credit top-up applied.';await loadBilling()}});rz.open()}catch(e){$('#creditTopupMsg').textContent=e.message}}
async function switchFree(){try{if(['STARTER','GROWTH','ZYLORA'].includes(state.me?.plan)){await api('/api/billing/subscription/cancel',{method:'POST'});$('#billingMsg').textContent='Cancellation scheduled. Paid access remains active through the current billing period.';toast('Cancellation scheduled');await loadBilling();return}const j=await api('/api/billing/change',{method:'POST',body:JSON.stringify({plan:'FREE'})});$('#billingMsg').textContent=`Plan changed to ${j.plan}.`;await loadBilling();toast('Plan: FREE')}catch(e){$('#billingMsg').textContent=e.message}}
async function loadRazorpay(){if(window.Razorpay)return;await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://checkout.razorpay.com/v1/checkout.js';s.onload=resolve;s.onerror=()=>reject(new Error('Could not load Razorpay Checkout'));document.head.appendChild(s)})}
async function upgradePaid(plan='STARTER',waitForCompletion=false){plan=String(plan||'').toUpperCase();if(!['STARTER','GROWTH'].includes(plan)){const msg='Only Starter and Growth can be activated through self-service checkout.';$('#billingMsg').textContent=msg;return false}const label=plan[0]+plan.slice(1).toLowerCase();try{$('#billingMsg').textContent=`Creating server-priced ${label} subscription checkout…`;const idem=crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`;const o=await api('/api/billing/subscription',{method:'POST',headers:{'Idempotency-Key':idem},body:JSON.stringify({plan})});if(o.already_active){$('#billingMsg').textContent=`${label} is already active.`;await loadBilling();return true}const verify=async(paymentId,signature,subscriptionId=o.subscription_id)=>{const v=await api('/api/billing/subscription/verify',{method:'POST',body:JSON.stringify({subscription_id:subscriptionId,payment_id:paymentId,signature})});$('#billingMsg').textContent=`Payment verified. ${label} is active at ${v.currency==='INR'?'₹':'US$'}${Number(v.amount_minor)/100}/month.`;await loadBilling();toast(`${label} active`);return true};if(o.provider==='mock')return await verify(o.mock_payment_id,o.mock_signature,o.subscription_id);await loadRazorpay();return await new Promise(resolve=>{const rz=new Razorpay({key:o.key_id,subscription_id:o.subscription_id,name:'Zylora',description:`${label} · ${o.billing_region==='INDIA'?'India':'International'} monthly`,prefill:{name:state.me.name,email:state.me.email},handler:async r=>{try{resolve(await verify(r.razorpay_payment_id,r.razorpay_signature,r.razorpay_subscription_id||o.subscription_id))}catch(e){$('#billingMsg').textContent=e.message;resolve(false)}}});rz.on?.('payment.failed',()=>{if($('#billingMsg'))$('#billingMsg').textContent='Payment was not completed. Your entitlement has not changed.';resolve(false)});rz.open();if(!waitForCompletion)setTimeout(()=>resolve(false),0)})}catch(e){$('#billingMsg').textContent=e.message;return false}}
async function loadDomains(){const siteId=$('#domainSite').value;if(!siteId){$('#domainList').innerHTML='<p class="muted-copy">Create a website first.</p>';return}try{const r=await api(`/api/sites/${siteId}/domains`);$('#domainList').innerHTML=r.items.length?r.items.map(d=>`<div class="stack-item"><h3>${escapeHtml(d.hostname)}</h3><p>CNAME → ${escapeHtml(d.cname_target||r.cname_target||'')}</p><div class="domain-status"><span class="${d.status==='ACTIVE'?'active':''}">HOST ${escapeHtml(d.status)}</span><span class="${d.ssl_status==='ACTIVE'?'active':''}">SSL ${escapeHtml(d.ssl_status)}</span></div><div class="stack-actions"><button data-domain-refresh="${d.id}">Refresh</button><button class="danger" data-domain-delete="${d.id}">Remove</button></div></div>`).join(''):'<div class="empty-state-box"><div class="empty-state-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div><h4>No custom domains connected</h4><p>Connect a custom domain (e.g. www.yourdomain.com) to serve your website with automatic SSL via Cloudflare.</p></div>';$$('[data-domain-refresh]').forEach(b=>b.onclick=async()=>{try{const j=await api(`/api/domains/${b.dataset.domainRefresh}/refresh`,{method:'POST'});toast(`Domain: ${j.status} / SSL: ${j.ssl_status}`);loadDomains()}catch(e){toast(e.message)}});$$('[data-domain-delete]').forEach(b=>b.onclick=async()=>{try{await api(`/api/domains/${b.dataset.domainDelete}`,{method:'DELETE'});toast('Domain removed');loadDomains()}catch(e){toast(e.message)}})}catch(e){toast(e.message)}}
async function addDomain(e){e.preventDefault();const siteId=$('#domainSite').value;try{const j=await api(`/api/sites/${siteId}/domains`,{method:'POST',body:JSON.stringify({hostname:$('#domainHostname').value})});$('#domainMsg').textContent=`Added ${j.hostname}. Point CNAME to ${j.cname_target}, then refresh status.`;$('#domainHostname').value='';loadDomains()}catch(err){$('#domainMsg').textContent=err.message}}
async function loadGoogleSheet(){const siteId=$('#integrationSite').value;if(!siteId){$('#googleSheetMsg').textContent='Create a website first.';if($('#googleSheetTest'))$('#googleSheetTest').disabled=true;if($('#googleSheetResync'))$('#googleSheetResync').disabled=true;if($('#googleSheetRemove'))$('#googleSheetRemove').disabled=true;return}try{const j=await api(`/api/sites/${siteId}/integrations/google-sheets`);$('#googleSheetUrl').value=j.spreadsheet_url||'';$('#googleSheetName').value=j.sheet_name||'Leads';$('#googleSheetEnabled').checked=j.enabled===undefined?true:!!j.enabled;$('#googleSheetSyncLeads').checked=j.sync_leads===undefined?true:!!j.sync_leads;$('#googleSheetSyncAppointments').checked=j.sync_appointments===undefined?true:!!j.sync_appointments;const isConnected=!!j.id;if($('#googleSheetTest'))$('#googleSheetTest').disabled=!isConnected;if($('#googleSheetResync'))$('#googleSheetResync').disabled=!isConnected;if($('#googleSheetRemove'))$('#googleSheetRemove').disabled=!isConnected;$('#googleSheetMsg').textContent=isConnected?(j.last_error?`Connected, but the last sync reported: ${j.last_error}`:'Spreadsheet connected.'):'No Google Sheet connected.'}catch(e){$('#googleSheetMsg').textContent=e.message;if($('#googleSheetTest'))$('#googleSheetTest').disabled=true;if($('#googleSheetResync'))$('#googleSheetResync').disabled=true;if($('#googleSheetRemove'))$('#googleSheetRemove').disabled=true;}}
async function saveGoogleSheet(e){e.preventDefault();const siteId=$('#integrationSite').value;try{const j=await api(`/api/sites/${siteId}/integrations/google-sheets`,{method:'PUT',body:JSON.stringify({spreadsheet_url:$('#googleSheetUrl').value,sheet_name:$('#googleSheetName').value||'Leads',enabled:$('#googleSheetEnabled').checked,sync_leads:$('#googleSheetSyncLeads').checked,sync_appointments:$('#googleSheetSyncAppointments').checked})});if($('#googleSheetTest'))$('#googleSheetTest').disabled=false;if($('#googleSheetResync'))$('#googleSheetResync').disabled=false;if($('#googleSheetRemove'))$('#googleSheetRemove').disabled=false;$('#googleSheetMsg').textContent=`Connected to ${j.sheet_name||'Leads'}.`;toast('Google Sheets connected')}catch(err){$('#googleSheetMsg').textContent=err.message}}
async function testGoogleSheet(){const siteId=$('#integrationSite').value;if(!siteId)return;try{const j=await api(`/api/sites/${siteId}/integrations/google-sheets/test`,{method:'POST'});$('#googleSheetMsg').textContent=`Test row sent via ${j.provider}.`;toast('Google Sheets test row sent')}catch(e){$('#googleSheetMsg').textContent=e.message}}
async function removeGoogleSheet(){const siteId=$('#integrationSite').value;if(!siteId)return;try{await api(`/api/sites/${siteId}/integrations/google-sheets`,{method:'DELETE'});$('#googleSheetUrl').value='';$('#googleSheetName').value='Leads';if($('#googleSheetTest'))$('#googleSheetTest').disabled=true;if($('#googleSheetResync'))$('#googleSheetResync').disabled=true;if($('#googleSheetRemove'))$('#googleSheetRemove').disabled=true;$('#googleSheetMsg').textContent='Connection removed.';toast('Google Sheets disconnected')}catch(e){$('#googleSheetMsg').textContent=e.message}}
async function resyncGoogleSheet(){const siteId=$('#integrationSite').value;if(!siteId)return;try{const j=await api(`/api/sites/${siteId}/integrations/google-sheets/resync`,{method:'POST'});$('#googleSheetMsg').textContent=`Re-synced ${j.events_synced} existing event${j.events_synced===1?'':'s'}.`;toast('Google Sheets re-sync complete')}catch(e){$('#googleSheetMsg').textContent=e.message}}
async function loadKnowledge(){const siteId=$('#knowledgeSite')?.value||state.sites[0]?.id;if(!siteId){if($('#knowledgeList'))$('#knowledgeList').innerHTML='<p class="muted-copy">Create a website first.</p>';return}try{const j=await api(`/api/sites/${siteId}/knowledge`);$('#knowledgeList').innerHTML=j.items.length?j.items.map(x=>`<div class="stack-item"><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.filename||'Pasted knowledge')} · ${x.characters} characters</p><div class="stack-actions"><button class="danger" data-knowledge-delete="${x.id}">Remove</button></div></div>`).join(''):'<p class="muted-copy">No knowledge documents yet.</p>';$$('[data-knowledge-delete]').forEach(b=>b.onclick=async()=>{try{await api(`/api/sites/${siteId}/knowledge/${b.dataset.knowledgeDelete}`,{method:'DELETE'});toast('Knowledge removed');loadKnowledge()}catch(e){toast(e.message)}})}catch(e){$('#knowledgeMsg').textContent=e.message}}
async function saveKnowledge(e){e.preventDefault();const siteId=$('#knowledgeSite').value;const fileInput=$('#knowledgeFile');const file=fileInput?.files?.[0];try{if(file){const fd=new FormData();fd.append('file',file);if($('#knowledgeTitle').value)fd.append('title',$('#knowledgeTitle').value);const r=await fetch(`/api/sites/${siteId}/knowledge/upload`,{method:'POST',headers:{'X-CSRF-Token':sessionStorage.getItem('csrf')||state.me?.csrf_token||''},body:fd});let j={};try{j=await r.json()}catch{}if(r.status===401){location.href='/login';return}if(!r.ok)throw new Error(apiErrorMessage(j.detail??j,r.status))}else{if(!$('#knowledgeContent').value.trim())throw new Error('Add file or paste text content');await api(`/api/sites/${siteId}/knowledge`,{method:'POST',body:JSON.stringify({title:$('#knowledgeTitle').value,content:$('#knowledgeContent').value})})}$('#knowledgeMsg').textContent='Knowledge added. Published-site chatbot answers can now ground on it.';e.currentTarget.reset();fillSiteSelectors();loadKnowledge();toast('Chatbot knowledge updated')}catch(err){$('#knowledgeMsg').textContent=err.message}}
async function loadFreelancer(){try{const j=await api('/api/freelancer/application');state.freelancer=j;const p=j.profile||{};$('#freelancerFullName').value=p.full_name||state.me.name;$('#freelancerName').value=p.display_name||state.me.name;$('#freelancerPhoto').value=p.profile_photo_url||'';$('#freelancerBio').value=p.bio||'';$('#freelancerDescription').value=p.description||'';$('#freelancerSkills').value=(p.skills||[]).join(', ');$('#freelancerServices').value=(p.services||[]).join(', ');$('#freelancerYears').value=p.years_experience||0;$('#freelancerPrice').value=(p.starting_price_minor||0)/100;$('#freelancerCurrency').value=p.currency||'USD';$('#freelancerLocation').value=p.location||'';$('#freelancerTimezone').value=p.timezone||'';const map={FIVERR:'freelancerFiverr',UPWORK:'freelancerUpwork',CONTRA:'freelancerContra',LINKEDIN:'freelancerLinkedIn',BEHANCE:'freelancerBehance',DRIBBBLE:'freelancerDribbble',GITHUB:'freelancerGitHub'};['freelancerPortfolio','freelancerFiverr','freelancerUpwork','freelancerContra','freelancerLinkedIn','freelancerBehance','freelancerDribbble','freelancerGitHub','freelancerPersonal','freelancerOther'].forEach(id=>$('#'+id).value='');for(const l of j.links||[]){const id=map[l.platform]||(!$('#freelancerPortfolio').value?'freelancerPortfolio':'freelancerOther');if($('#'+id))$('#'+id).value=l.url}const status=p.status||'NOT_APPLIED';$('#freelancerStatusBadge').textContent=status.replace('_',' ');$('#freelancerStatusBadge').dataset.status=status;$('#freelancerProfileMsg').textContent=status==='PENDING'?'Your application is waiting for SUPER_ADMIN review.':status==='APPROVED'?'Your public freelancer profile is approved.':status==='SUSPENDED'?'Your public profile is suspended.':status==='REJECTED'?`Application rejected${p.rejection_reason?`: ${p.rejection_reason}`:''}. You can update and resubmit.`:'Complete the form to apply.';$('#freelancerStats').innerHTML=`<article><small>Public clicks</small><b>${p.outbound_click_count||0}</b></article><article><small>Zylora enquiries</small><b>${p.enquiry_count||0}</b></article><article><small>Spam blocked</small><b>${p.spam_count||0}</b></article>`;$('#freelancerStudio').hidden=status!=='APPROVED';if(status==='APPROVED')loadFreelancerStudio();loadEligibleRatings()}catch(e){toast(e.message)} }
async function loadFreelancerStudio(){try{const j=await api('/api/freelancer/dashboard');const p=j.profile||{};const name=$('#studioDisplayName'),bio=$('#studioBio'),summary=$('#studioRatingsSummary'),ratings=$('#studioRatingsList');if(name)name.value=p.display_name||'';if(bio)bio.value=p.bio||'';const avg=p.rating_average;if(summary)summary.innerHTML=`<article><small>Average rating</small><b>${avg?avg+' / 5':'—'}</b></article><article><small>Ratings received</small><b>${p.rating_count||0}</b></article><article><small>Template catalogue</small><b>Paused</b></article>`;if(ratings)ratings.innerHTML=(j.ratings||[]).map(r=>`<div class="stack-item"><b>${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</b><small>${new Date(r.created_at).toLocaleDateString()}</small></div>`).join('')||'<p class="muted-copy">No ratings yet.</p>'}catch(e){toast(e.message)}}
async function saveStudioProfile(e){e.preventDefault();try{await api('/api/freelancer/profile',{method:'PUT',body:JSON.stringify({display_name:$('#studioDisplayName').value,bio:$('#studioBio').value})});$('#studioProfileMsg').textContent='Studio profile saved.';toast('Studio profile saved');loadFreelancerStudio()}catch(err){$('#studioProfileMsg').textContent=err.message}}
async function publishTemplate(e){e.preventDefault();const siteId=$('#studioSiteSelect').value;if(!siteId){$('#studioTemplateMsg').textContent='Create a website first.';return}try{const j=await api(`/api/freelancer/sites/${siteId}/publish-template`,{method:'POST',body:JSON.stringify({name:$('#studioTemplateName').value,description:$('#studioTemplateDescription').value})});$('#studioTemplateMsg').textContent='Published as a template.';toast('Site published as template');e.currentTarget.reset();loadFreelancerStudio()}catch(err){$('#studioTemplateMsg').textContent=err.message}}
async function loadEligibleRatings(){try{const j=await api('/api/freelancer/ratings/eligible');const items=j.items||[];$('#studioEligibleRatings').innerHTML=items.length?items.map(it=>it.stars?`<div class="stack-item"><b>${escapeHtml(it.business_name)}</b><small>Built by ${escapeHtml(it.display_name)} — you rated ${'★'.repeat(it.stars)}</small></div>`:`<div class="stack-item"><b>${escapeHtml(it.business_name)}</b><small>Built by ${escapeHtml(it.display_name)}</small><div class="rating-picker" data-rate-site="${it.site_id}">${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}">★</button>`).join('')}</div></div>`).join(''):'<p class="muted-copy">No transferred sites eligible for rating.</p>';$$('#studioEligibleRatings [data-star]').forEach(b=>b.onclick=async()=>{const wrap=b.closest('[data-rate-site]');const siteId=wrap.dataset.rateSite;try{await api('/api/freelancer/ratings',{method:'POST',body:JSON.stringify({site_id:siteId,stars:Number(b.dataset.star)})});toast('Rating submitted');loadEligibleRatings()}catch(err){toast(err.message)}})}catch(e){toast(e.message)}}
async function saveFreelancerProfile(e){e.preventDefault();const split=id=>$('#'+id).value.split(',').map(x=>x.trim()).filter(Boolean);const payload={full_name:$('#freelancerFullName').value,display_name:$('#freelancerName').value,profile_photo_url:$('#freelancerPhoto').value||null,bio:$('#freelancerBio').value,description:$('#freelancerDescription').value,skills:split('freelancerSkills'),services:split('freelancerServices'),years_experience:Number($('#freelancerYears').value||0),starting_price_minor:Math.round(Number($('#freelancerPrice').value||0)*100),currency:($('#freelancerCurrency').value||'USD').toUpperCase(),location:$('#freelancerLocation').value||null,timezone:$('#freelancerTimezone').value||null,portfolio_url:$('#freelancerPortfolio').value||null,fiverr_url:$('#freelancerFiverr').value||null,upwork_url:$('#freelancerUpwork').value||null,contra_url:$('#freelancerContra').value||null,linkedin_url:$('#freelancerLinkedIn').value||null,behance_url:$('#freelancerBehance').value||null,dribbble_url:$('#freelancerDribbble').value||null,github_url:$('#freelancerGitHub').value||null,personal_website_url:$('#freelancerPersonal').value||null,other_url:$('#freelancerOther').value||null};try{const j=await api('/api/freelancer/application',{method:'POST',body:JSON.stringify(payload)});$('#freelancerProfileMsg').textContent=`Application saved · ${j.status}.`;toast('Freelancer application saved');loadFreelancer()}catch(err){$('#freelancerProfileMsg').textContent=err.message}}
async function submitTransfer(e){e.preventDefault();try{const j=await api(`/api/sites/${$('#transferSiteId').value}/transfer`,{method:'POST',body:JSON.stringify({email:$('#transferEmail').value})});$('#transferMsg').textContent='Free ownership-transfer invitation sent.';if(j.debug_token){sessionStorage.setItem('debugTransferToken',j.debug_token);$('#transferMsg').textContent+=' Development token stored for testing.'}}catch(err){$('#transferMsg').textContent=err.message}}
async function submitPro(e){e.preventDefault();const form=e.currentTarget;try{const j=await fetch('/api/pro/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:$('#proName').value,email:$('#proEmail').value,website_type:$('#proType').value,preferred_contact_time:$('#proTime').value})}).then(async r=>{const j=await r.json();if(!r.ok)throw new Error(j.detail||'Request failed');return j});$('#proMsg').textContent=`Enquiry received. Reference ${j.lead_code}.`;form.reset()}catch(err){$('#proMsg').textContent=err.message}}
async function resendVerification(){try{const j=await api('/api/auth/email/request-verification',{method:'POST'});if(j.debug_token){sessionStorage.setItem('debugVerifyToken',j.debug_token);$('#devVerify').hidden=false}toast('Verification email sent')}catch(e){toast(e.message)}}
async function devVerify(){const token=sessionStorage.getItem('debugVerifyToken');if(!token)return;try{await api('/api/auth/email/verify',{method:'POST',body:JSON.stringify({token})});state.me=await api('/api/auth/me');updateVerificationUI();toast('Email verified')}catch(e){toast(e.message)}}
function supportComposer(){const sites=state.sites.map(s=>`<option value="${s.id}">${escapeHtml(s.business_name)}</option>`).join('');$('#supportThread').innerHTML=`<form class="support-compose" id="supportComposeForm"><h2>New support conversation</h2><label>Website (optional)<select id="supportWebsite"><option value="">General account question</option>${sites}</select></label><label>Subject<input id="supportSubject" required minlength="3" maxlength="160"></label><label>Category<select id="supportCategory"><option>General</option><option>Website editor</option><option>Publishing</option><option>Domains</option><option>Billing</option><option>Leads & appointments</option><option>Integrations</option></select></label><label>Message<textarea id="supportMessage" class="tall" required minlength="2" maxlength="10000"></textarea></label><button class="accent-btn" type="submit">Send to Zylora Support</button><div class="status-msg" id="supportComposeMsg"></div></form>`;$('#supportComposeForm').onsubmit=createSupportConversation}
async function loadSupport(){try{const j=await api('/api/support/conversations');$('#supportList').innerHTML=j.items.length?j.items.map(x=>`<button class="support-list-item ${x.unread_count?'unread':''}" data-support-thread="${x.id}"><span><b>${escapeHtml(x.reference_code)}</b><small>${escapeHtml(x.status.replaceAll('_',' '))}</small></span><strong>${escapeHtml(x.subject)}</strong>${x.website_name?`<small>${escapeHtml(x.website_name)}</small>`:''}${x.unread_count?`<i>${x.unread_count}</i>`:''}</button>`).join(''):'<p class="muted-copy">No support conversations yet.</p>';$$('[data-support-thread]').forEach(b=>b.onclick=()=>openSupportThread(b.dataset.supportThread));const n=j.items.reduce((a,x)=>a+(Number(x.unread_count)||0),0),badge=$('#notificationCount');if(badge){badge.textContent=String(n);badge.hidden=!n}}catch(e){toast(e.message)}}
async function createSupportConversation(e){e.preventDefault();try{const j=await api('/api/support/conversations',{method:'POST',body:JSON.stringify({website_id:$('#supportWebsite').value||null,subject:$('#supportSubject').value,category:$('#supportCategory').value,message:$('#supportMessage').value})});toast(`Support ${j.reference_code} opened`);await loadSupport();openSupportThread(j.id)}catch(err){$('#supportComposeMsg').textContent=err.message}}
async function openSupportThread(id){try{const j=await api(`/api/support/conversations/${id}`),c=j.conversation;const messageHtml=j.messages.map(m=>{const mine=!m.sender_admin_id,label=m.sender_admin_id?'Zylora Support':'You',avatar=m.sender_admin_id?'ZS':initials(state.me?.name||'You');return `<article class="chat-message ${mine?'chat-end':'chat-start'}"><div class="chat-avatar">${escapeHtml(avatar)}</div><div class="chat-content"><div class="chat-header">${escapeHtml(label)} <time>${new Date(m.created_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</time></div><div class="chat-bubble">${escapeHtml(m.body)}</div><div class="chat-footer">${mine?'Delivered':'Support reply'}</div></div></article>`}).join('');$('#supportThread').innerHTML=`<div class="support-thread-head"><div><p class="eyebrow">${escapeHtml(c.reference_code)}</p><h2>${escapeHtml(c.subject)}</h2><p>${escapeHtml(c.status.replaceAll('_',' '))}${c.website_name?` · ${escapeHtml(c.website_name)}`:''}</p></div><div class="stack-actions">${c.status==='RESOLVED'?`<button class="ghost-btn" id="supportReopen">Reopen</button>`:`<button class="ghost-btn" id="supportResolve">Resolve</button>`}</div></div><div class="message-list">${messageHtml}</div>${c.status==='RESOLVED'?'':`<form id="supportReplyForm" class="support-reply"><textarea id="supportReply" required maxlength="10000" placeholder="Write a reply…"></textarea><button class="accent-btn">Send reply</button></form>`}`;$('#supportReplyForm')?.addEventListener('submit',async e=>{e.preventDefault();try{await api(`/api/support/conversations/${id}/messages`,{method:'POST',body:JSON.stringify({body:$('#supportReply').value})});openSupportThread(id);loadSupport()}catch(err){toast(err.message)}});if($('#supportResolve'))$('#supportResolve').onclick=async()=>{await api(`/api/support/conversations/${id}/resolve`,{method:'POST'});openSupportThread(id);loadSupport()};if($('#supportReopen'))$('#supportReopen').onclick=async()=>{await api(`/api/support/conversations/${id}/reopen`,{method:'POST'});openSupportThread(id);loadSupport()};await loadSupport()}catch(e){toast(e.message)}}

async function renderHeroSiteCard(){
  const card=$('#heroSiteCard');
  if(!card)return;
  const site=state.sites.find(s=>s.status==='LIVE')||state.sites[0];
  const img=$('#heroSitePreviewImg'),fallback=$('#heroSitePreviewFallback'),fallbackPill=$('#heroFallbackDomainPill'),fallbackOpen=$('#heroFallbackOpenBtn');
  if(!site){
    document.body.classList.add('dashboard-empty-account');
    card.classList.add('is-empty');
    if($('#overviewSiteHealthSection'))$('#overviewSiteHealthSection').hidden=true;
    if($('#overviewHealthSubGrid'))$('#overviewHealthSubGrid').hidden=true;
    if($('#heroSiteTitle'))$('#heroSiteTitle').textContent='No website created yet';
    if($('#heroSiteStatusPill'))$('#heroSiteStatusPill').className='status-pill draft';
    if($('#heroSiteStatusText'))$('#heroSiteStatusText').textContent='DRAFT';
    if($('#heroSiteDomainText'))$('#heroSiteDomainText').textContent='Create a website to launch your online presence';
    if($('#heroSiteDomainLink')){$('#heroSiteDomainLink').removeAttribute('href');$('#heroSiteDomainLink').onclick=e=>{e.preventDefault();openCreate()};}
    if($('#heroEditSiteBtn')){$('#heroEditSiteBtn').textContent='Create Website';$('#heroEditSiteBtn').href='#';$('#heroEditSiteBtn').onclick=e=>{e.preventDefault();openCreate()};}
    if($('#heroPreviewSiteBtn'))$('#heroPreviewSiteBtn').hidden=true;
    if($('#heroCopyDomainBtn'))$('#heroCopyDomainBtn').hidden=true;
    if($('#heroSiteActionsWrap'))$('#heroSiteActionsWrap').hidden=true;
    if($('#heroConnectDomainBtn'))$('#heroConnectDomainBtn').hidden=true;
    if($('#heroDomainSeparator'))$('#heroDomainSeparator').hidden=true;
    if($('#heroSiteSettingsBtn'))$('#heroSiteSettingsBtn').hidden=true;
    if(fallbackPill)fallbackPill.textContent='No website yet';
    if(fallbackOpen)fallbackOpen.hidden=true;
    const fallbackMessage=fallback?.querySelector('.fallback-msg');
    if(fallbackMessage)fallbackMessage.innerHTML='Your first website starts here.<br><small>Open a blank Studio and design immediately.</small>';
    if($('#heroSiteUpdatedText'))$('#heroSiteUpdatedText').textContent='Ready when you are';
    const assistantBadge=$('#overviewAssistantBadge');
    if(assistantBadge){assistantBadge.className='status-pill draft';assistantBadge.innerHTML='<i class="status-dot"></i> Not configured';}
    const domainChecklist=$('#overviewDomainChecklist');
    if(domainChecklist)domainChecklist.innerHTML='<div class="domain-check-item"><span>1</span> <b>Create a website</b></div><div class="domain-check-item"><span>2</span> <b>Publish when ready</b></div><div class="domain-check-item"><span>3</span> <b>Connect a custom domain if needed</b></div>';
    if(img)img.style.display='none';
    if(fallback)fallback.style.display='flex';
    return;
  }
  document.body.classList.remove('dashboard-empty-account');
  card.classList.remove('is-empty');
  if($('#overviewSiteHealthSection'))$('#overviewSiteHealthSection').hidden=false;
  if($('#overviewHealthSubGrid'))$('#overviewHealthSubGrid').hidden=false;
  if($('#heroPreviewSiteBtn'))$('#heroPreviewSiteBtn').hidden=false;
  if($('#heroCopyDomainBtn'))$('#heroCopyDomainBtn').hidden=false;
  if($('#heroSiteActionsWrap'))$('#heroSiteActionsWrap').hidden=false;
  if($('#heroConnectDomainBtn'))$('#heroConnectDomainBtn').hidden=false;
  if($('#heroDomainSeparator'))$('#heroDomainSeparator').hidden=false;
  if($('#heroSiteSettingsBtn'))$('#heroSiteSettingsBtn').hidden=false;
  if($('#heroEditSiteBtn')){$('#heroEditSiteBtn').textContent='Edit Website';$('#heroEditSiteBtn').href=`/studio/${site.id}`;$('#heroEditSiteBtn').onclick=null;}
  const isLive=site.status==='LIVE';
  if($('#heroSiteTitle'))$('#heroSiteTitle').textContent=site.business_name||'My Website';
  const pill=$('#heroSiteStatusPill');
  if(pill){pill.className=`status-pill ${isLive?'live':'draft'}`;$('#heroSiteStatusText').textContent=isLive?'LIVE':'DRAFT';}
  const rawPlan=state.me?.plan||'Free';
  const planCap=rawPlan.charAt(0).toUpperCase()+rawPlan.slice(1).toLowerCase();
  const planTag=$('#heroSitePlanTag');
  if(planTag){planTag.innerHTML=`${escapeHtml(planCap)} plan · <a data-view-jump="billing" href="#billing">Compare Plans</a>`;$('[data-view-jump="billing"]',planTag)?.addEventListener('click',e=>{e.preventDefault();setView('billing')});}
  const domain=site.custom_domain||(site.slug?`${site.slug}.zylora.site`:'Draft site');
  const domainUrl=isLive?(site.custom_domain?`https://${site.custom_domain}`:`/s/${site.slug}`):`/api/sites/${site.id}/preview`;
  if($('#heroSiteDomainText'))$('#heroSiteDomainText').textContent=domain;
  if($('#heroSiteDomainLink')){$('#heroSiteDomainLink').href=domainUrl;$('#heroSiteDomainLink').onclick=null;}
  if($('#heroPreviewSiteBtn'))$('#heroPreviewSiteBtn').href=`/api/sites/${site.id}/preview`;
  if(fallbackPill)fallbackPill.textContent=domain;
  if(fallbackOpen){fallbackOpen.href=domainUrl;fallbackOpen.hidden=false;}
  if($('#heroSiteUpdatedText'))$('#heroSiteUpdatedText').textContent=site.updated_at?`Updated ${new Date(site.updated_at).toLocaleDateString()}`:'Updated recently';
  const domainChecklist=$('#overviewDomainChecklist');
  if(domainChecklist){
    const stateRow=(ok,label)=>`<div class="domain-check-item ${ok?'success-text':''}"><span>${ok?'✓':'·'}</span> <b>${escapeHtml(label)}</b></div>`;
    domainChecklist.innerHTML=[
      stateRow(isLive,isLive?'Website live':'Website is still a draft'),
      stateRow(!!site.custom_domain,site.custom_domain?'Custom domain connected':'Using a Zylora preview or subdomain'),
      stateRow(isLive,isLive?'Sitemap available after publish':'Publish to expose sitemap and robots controls')
    ].join('');
  }
  if(img&&fallback){
    let previewSrc=site.preview_image||site.thumbnail||site.cover_image||'';
    if(!previewSrc && site.template_slug){
      previewSrc=`/template-assets/${encodeURIComponent(site.template_slug)}/hero-man.webp`;
    }
    if(previewSrc){
      img.src=previewSrc;
      img.onload=()=>{img.style.display='block';fallback.style.display='none';};
      img.onerror=()=>{img.removeAttribute('src');img.style.display='none';fallback.style.display='flex';};
    }else{
      img.removeAttribute('src');
      img.style.display='none';
      fallback.style.display='flex';
    }
  }
  if($('#heroCopyDomainBtn')){$('#heroCopyDomainBtn').onclick=()=>{const fullUrl=isLive?(site.custom_domain?`https://${site.custom_domain}`:`${location.origin}/s/${site.slug}`):`${location.origin}/api/sites/${site.id}/preview`;navigator.clipboard.writeText(fullUrl).then(()=>toast('Website URL copied to clipboard')).catch(()=>toast('Could not copy URL'))};}
  const actionsWrap=$('#heroSiteActionsWrap'),actionsBtn=$('#heroSiteActionsBtn'),actionsMenu=$('#heroSiteActionsMenu');
  if(actionsBtn&&actionsMenu){
    actionsBtn.onclick=e=>{e.stopPropagation();actionsMenu.hidden=!actionsMenu.hidden;};
    document.addEventListener('click',e=>{if(!actionsWrap?.contains(e.target))actionsMenu.hidden=true;});
    const pubBtn=$('#heroActionPublish');
    if(pubBtn){pubBtn.textContent=isLive?'Republish':'Publish';pubBtn.onclick=()=>{actionsMenu.hidden=true;publishFromDashboard(site.id);};}
    const unpubBtn=$('#heroActionUnpublish');
    if(unpubBtn){unpubBtn.style.display=isLive?'':'none';unpubBtn.onclick=async()=>{actionsMenu.hidden=true;try{await api(`/api/sites/${site.id}/unpublish`,{method:'POST'});toast('Website unpublished to draft');await loadSites();}catch(e){toast(e.message)}};}
    const dupBtn=$('#heroActionDuplicate');
    if(dupBtn){dupBtn.onclick=async()=>{actionsMenu.hidden=true;try{const res=await api(`/api/sites/${site.id}/duplicate`,{method:'POST'});toast(`Website duplicated as ${res.business_name}`);await loadSites();}catch(e){toast(e.message)}};}
    const expBtn=$('#heroActionExport');
    if(expBtn){expBtn.onclick=()=>{actionsMenu.hidden=true;unlockSourceExport(site.id);};}
    const delBtn=$('#heroActionDeleteDraft');
    if(delBtn){delBtn.style.display=!isLive?'':'none';delBtn.onclick=()=>{actionsMenu.hidden=true;state.pendingDeleteSiteId=site.id;$('#deleteDraftSiteName').textContent=site.business_name;$('#deleteDraftMsg').textContent='';openModal('deleteDraftModal');};}
  }
  loadOverviewHealth(site.id);
  loadOverviewAppointments(site.id);
  loadOverviewAssistantStatus(site.id);
}

async function loadOverviewAssistantStatus(siteId){
  const badge=$('#overviewAssistantBadge');
  if(!badge)return;
  try{
    const config=await api(`/api/sites/${siteId}/assistant/settings`);
    const enabled=!!config.enabled;
    badge.className=`status-pill ${enabled?'live':'draft'}`;
    badge.innerHTML=`<i class="status-dot"></i> ${enabled?'Active':'Not enabled'}`;
  }catch{
    badge.className='status-pill draft';
    badge.innerHTML='<i class="status-dot"></i> Status unavailable';
  }
}

async function loadOverviewHealth(siteId){
  if(!siteId)return;
  try{
    const health=await api(`/api/sites/${siteId}/health`);
    const qa=health.launch?.qa||{},rawScore=health.score,score=rawScore==null?null:Number(rawScore),blockers=Number(qa.blocking_count??0),warnings=Number(qa.warning_count??0),items=health.launch?.items||[];
    const passed=items.filter(x=>x.status==='PASS').length,C=264;
    if($('#overviewHealthScore'))$('#overviewHealthScore').textContent=Number.isFinite(score)?score:'—';
    const overallFill=$('#gaugeOverallFill');
    if(overallFill)overallFill.style.strokeDashoffset=Number.isFinite(score)?Math.max(0,C-(score/100*C)):C;
    if($('#overviewErrorsCount'))$('#overviewErrorsCount').textContent=blockers;
    if($('#overviewErrorsSub'))$('#overviewErrorsSub').textContent=blockers===1?'1 issue needs attention':`${blockers} need attention`;
    const errFill=$('#gaugeErrorFill');
    if(errFill)errFill.style.strokeDashoffset=Math.max(0,C-(Math.min(blockers,10)/10*C));
    if($('#overviewWarningsCount'))$('#overviewWarningsCount').textContent=warnings;
    if($('#overviewWarningsSub'))$('#overviewWarningsSub').textContent=warnings===1?'1 recommendation':`${warnings} optional recommendations`;
    const warnFill=$('#gaugeWarningFill');
    if(warnFill)warnFill.style.strokeDashoffset=Math.max(0,C-(Math.min(warnings,10)/10*C));
    if($('#overviewPassedCount'))$('#overviewPassedCount').textContent=passed;
    const passFill=$('#gaugePassedFill');
    if(passFill)passFill.style.strokeDashoffset=Math.max(0,C-(Math.min(passed,15)/15*C));
    const site=state.sites.find(s=>s.id===siteId);
    if($('#uptimeActiveLabel'))$('#uptimeActiveLabel').textContent=site?.status==='LIVE'?'Your site is active':'Draft mode';
    if($('#uptimePct'))$('#uptimePct').innerHTML='— <small>monitoring not configured</small>';
    if($('#accessIssuesCount'))$('#accessIssuesCount').textContent='—';
  }catch(e){console.warn('Overview health error',e);}
}

async function loadOverviewAppointments(siteId){
  if(!siteId)return;
  try{
    const res=await api(`/api/sites/${siteId}/appointments`);
    const items=res.items||[],upcoming=items.filter(x=>x.status==='BOOKED');
    if($('#overviewUpcomingApptsCount'))$('#overviewUpcomingApptsCount').textContent=upcoming.length;
    const nextTime=$('#overviewNextApptTime'),nextClient=$('#overviewNextApptClient');
    if(upcoming.length>0){
      const next=upcoming[0],dt=new Date(next.starts_at);
      if(nextTime)nextTime.textContent=dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
      if(nextClient)nextClient.textContent=`${next.name} (${next.email})`;
    }else{
      if(nextTime)nextTime.textContent='No upcoming appointments';
      if(nextClient)nextClient.textContent='When visitors book via the assistant or website, it appears here.';
    }
  }catch(e){console.warn('Overview appointments error',e);}
}

let dedicatedAssistantConvoId=null;
async function loadDedicatedAssistant(){
  const siteSel=$('#assistantViewSite');
  if(!siteSel)return;
  if(!siteSel.options.length)fillSiteSelectors();
  const siteId=siteSel.value||state.sites[0]?.id;
  if(!siteId)return;
  try{
    const cfg=await api(`/api/sites/${siteId}/assistant/settings`);
    if($('#dedAssistantEnabled'))$('#dedAssistantEnabled').checked=!!cfg.enabled;
    if($('#dedAssistantProactive'))$('#dedAssistantProactive').checked=!!cfg.proactive_prompts;
    if($('#dedAssistantAppointment'))$('#dedAssistantAppointment').checked=!!cfg.appointment_booking;
    if($('#dedAssistantHandoff'))$('#dedAssistantHandoff').checked=!!(cfg.human_handoff||cfg.whatsapp_handoff);
    if($('#dedAssistantTone'))$('#dedAssistantTone').value=String(cfg.tone||'FRIENDLY').toUpperCase();
    if($('#dedAssistantGoal'))$('#dedAssistantGoal').value=String(cfg.primary_goal||'GET_ENQUIRIES').toUpperCase();
    if($('#dedAssistantMsg'))$('#dedAssistantMsg').textContent=`Configuration revision ${cfg.config_revision||1}`;
  }catch(e){if($('#dedAssistantMsg'))$('#dedAssistantMsg').textContent=e.message;}
}

async function saveDedicatedAssistant(e){
  e.preventDefault();
  const siteId=$('#assistantViewSite')?.value||state.sites[0]?.id;
  if(!siteId)return;
  const payload={
    enabled:$('#dedAssistantEnabled')?.checked,
    proactive_prompts:$('#dedAssistantProactive')?.checked,
    appointment_booking:$('#dedAssistantAppointment')?.checked,
    human_handoff:$('#dedAssistantHandoff')?.checked,
    whatsapp_handoff:$('#dedAssistantHandoff')?.checked,
    tone:$('#dedAssistantTone')?.value||'FRIENDLY',
    primary_goal:$('#dedAssistantGoal')?.value||'GET_ENQUIRIES'
  };
  try{
    const c=await api(`/api/sites/${siteId}/assistant/settings`,{method:'PATCH',body:JSON.stringify(payload)});
    if($('#dedAssistantMsg'))$('#dedAssistantMsg').textContent=`Settings saved · revision ${c.config_revision}`;
    toast('Assistant settings saved');
  }catch(err){if($('#dedAssistantMsg'))$('#dedAssistantMsg').textContent=err.message;}
}

async function startDedicatedAssistantTest(){
  const siteId=$('#assistantViewSite')?.value||state.sites[0]?.id;
  if(!siteId)return;
  try{
    const j=await api(`/api/sites/${siteId}/assistant/test/conversations`,{method:'POST',body:JSON.stringify({session_id:`test-${Date.now()}`,page_url:'/interactive-test'})});
    dedicatedAssistantConvoId=j.id;
    if($('#dedicatedAssistantTranscript'))$('#dedicatedAssistantTranscript').innerHTML='<div class="chat-bubble assistant">Hello! I am your website\'s AI Sales Assistant. How can I help you today?</div>';
    toast('Interactive test session started');
  }catch(e){toast(e.message)}
}

async function sendDedicatedAssistantMessage(){
  const siteId=$('#assistantViewSite')?.value||state.sites[0]?.id;
  const input=$('#dedicatedAssistantInput'),text=input?.value.trim();
  if(!siteId||!text)return;
  if(!dedicatedAssistantConvoId)await startDedicatedAssistantTest();
  if(!dedicatedAssistantConvoId)return;
  input.value='';
  const transcript=$('#dedicatedAssistantTranscript');
  if(transcript){
    const userBubble=document.createElement('div');
    userBubble.className='chat-bubble user';
    userBubble.textContent=text;
    transcript.appendChild(userBubble);
    transcript.scrollTop=transcript.scrollHeight;
  }
  try{
    const r=await api(`/api/sites/${siteId}/assistant/test/conversations/${dedicatedAssistantConvoId}/messages`,{method:'POST',body:JSON.stringify({message:text})});
    if(transcript){
      const botBubble=document.createElement('div');
      botBubble.className='chat-bubble assistant';
      botBubble.textContent=r.answer||'I am here to help!';
      transcript.appendChild(botBubble);
      transcript.scrollTop=transcript.scrollHeight;
    }
  }catch(e){
    if(transcript){
      const errBubble=document.createElement('div');
      errBubble.className='chat-bubble assistant';
      errBubble.textContent=`Error: ${e.message}`;
      transcript.appendChild(errBubble);
    }
  }
}

async function loadAppointments(){
  const siteSel=$('#appointmentsSite');
  if(!siteSel)return;
  if(!siteSel.options.length)fillSiteSelectors();
  const siteId=siteSel.value||state.sites[0]?.id;
  if(!siteId){
    if($('#appointmentsList'))$('#appointmentsList').innerHTML='<p class="muted-copy">Create a website first.</p>';
    return;
  }
  try{
    const res=await api(`/api/sites/${siteId}/appointments`);
    const items=res.items||[];
    if($('#appointmentsList')){
      if(!items.length){
        $('#appointmentsList').innerHTML='<div class="empty-state-box"><div class="empty-state-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div><h4>No appointments booked yet</h4><p>When visitors book a time with your AI Sales Assistant on your published website, they will appear here with full contact details.</p></div>';
      }else{
        $('#appointmentsList').innerHTML=items.map(a=>`
          <div class="stack-item appointment-item">
            <div class="stack-item-text">
              <b class="stack-title">${escapeHtml(a.name)} &lt;${escapeHtml(a.email)}&gt;</b>
              <small class="stack-detail">${new Date(a.starts_at).toLocaleString()} · Status: ${escapeHtml(a.status)} · Source: ${escapeHtml(a.source||'WEBSITE')}</small>
            </div>
            <span class="status-badge ${a.status==='BOOKED'?'pass':'warn'}">${escapeHtml(a.status)}</span>
          </div>
        `).join('');
      }
    }
  }catch(e){if($('#appointmentsList'))$('#appointmentsList').innerHTML=`<p class="muted-copy">${escapeHtml(e.message)}</p>`;}
  try{
    const s=await api(`/api/sites/${siteId}/appointment-settings`);
    if(s.configured){
      if($('#apptStartHour'))$('#apptStartHour').value=s.start_hour??9;
      if($('#apptEndHour'))$('#apptEndHour').value=s.end_hour??17;
      if($('#apptDuration'))$('#apptDuration').value=s.duration_minutes??30;
      if($('#apptBuffer'))$('#apptBuffer').value=s.buffer_minutes??10;
      if($('#apptTimezone'))$('#apptTimezone').value=s.timezone||'UTC';
    }
    if($('#appointmentSettingsMsg'))$('#appointmentSettingsMsg').textContent=s.configured?'Settings active.':'Default settings applied. Click save to customize.';
  }catch(e){if($('#appointmentSettingsMsg'))$('#appointmentSettingsMsg').textContent=e.message;}
}

async function saveAppointmentSettings(e){
  e.preventDefault();
  const siteId=$('#appointmentsSite')?.value||state.sites[0]?.id;
  if(!siteId)return;
  const payload={
    timezone:$('#apptTimezone')?.value.trim()||'UTC',
    start_hour:Number($('#apptStartHour')?.value||9),
    end_hour:Number($('#apptEndHour')?.value||17),
    duration_minutes:Number($('#apptDuration')?.value||30),
    buffer_minutes:Number($('#apptBuffer')?.value||10),
    weekdays:[1,2,3,4,5]
  };
  try{
    await api(`/api/sites/${siteId}/appointment-settings`,{method:'PUT',body:JSON.stringify(payload)});
    if($('#appointmentSettingsMsg'))$('#appointmentSettingsMsg').textContent='Booking rules saved successfully.';
    toast('Appointment settings saved');
  }catch(err){if($('#appointmentSettingsMsg'))$('#appointmentSettingsMsg').textContent=err.message;}
}

$$('.rail-btn[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$$('[data-view-jump]').forEach(b=>b.onclick=()=>setView(b.dataset.viewJump));$$('[data-action="new-site"]').forEach(b=>b.onclick=()=>openCreate());$$('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-close]');if(b&&b.dataset.close)closeModal(b.dataset.close);});$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
$('#notifyForm')?.addEventListener('submit',saveSettings);$('#assistantSettingsForm')?.addEventListener('submit',saveAssistantSettings);$('#assistantSite')?.addEventListener('change',loadAssistantSettings);$('#assistantStartTest')?.addEventListener('click',startAssistantTest);$('#assistantSendTest')?.addEventListener('click',sendAssistantTest);$('#assistantTestInput')?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAssistantTest()}});$('#profileForm')?.addEventListener('submit',saveProfile);$('#openDeleteAccount')?.addEventListener('click',openDeleteAccount);$('#deleteAccountForm')?.addEventListener('submit',deleteAccount);$('#deleteAccountEmail')?.addEventListener('input',syncDeleteAccountButton);$('#deleteAccountText')?.addEventListener('input',syncDeleteAccountButton);$('#deleteAccountUnderstand')?.addEventListener('change',syncDeleteAccountButton);$('#deleteAccountReauth')?.addEventListener('click',reauthenticateForAccountDeletion);$('#requestOtp')?.addEventListener('click',requestOtp);$('#verifyOtp')?.addEventListener('click',verifyOtp);$('#refreshLeads')?.addEventListener('click',loadLeads);$('#leadSelectAll')?.addEventListener('change',e=>$$('.lead-row-check').forEach(x=>x.checked=e.target.checked));$$('[data-analytics-range]').forEach(b=>b.onclick=()=>{$$('[data-analytics-range]').forEach(x=>x.classList.toggle('active',x===b));state.analyticsRange=Number(b.dataset.analyticsRange||30);renderAnalytics();loadGrowth()});$$('[data-overview-range]').forEach(b=>b.onclick=()=>{$$('[data-overview-range]').forEach(x=>x.classList.toggle('active',x===b));state.analyticsRange=Number(b.dataset.overviewRange||7);loadGrowth()});$$('[data-billing-scroll-plans]').forEach(b=>b.onclick=()=>$('#billingPlans')?.scrollIntoView({behavior:'smooth',block:'start'}));$('#healthSite')?.addEventListener('change',loadHealth);$('#healthRefresh')?.addEventListener('click',loadHealth);$('#healthBackup')?.addEventListener('click',createHealthBackup);$('#healthRetryDeliveries')?.addEventListener('click',retryHealthDeliveries);$('#refreshBillingRecovery')?.addEventListener('click',loadBillingRecovery);$('#refreshChart')?.addEventListener('click',()=>{const p=$('#refreshChart');if(p){p.textContent='✓';setTimeout(()=>p.textContent='↻',700);}toast('Analytics refreshed')});$('#notificationBell')?.addEventListener('click',async()=>{const n=await refreshNotificationIndicator();toast(n?`${n} unread Support message${n===1?'':'s'}`:'No unread notifications')});$('#logoutBtn')?.addEventListener('click',async()=>{try{await api('/api/auth/logout',{method:'POST'})}finally{sessionStorage.clear();location.href='/'}});
$('#domainForm')?.addEventListener('submit',addDomain);if($('#domainSite'))$('#domainSite').onchange=loadDomains;$('#refreshDomains')?.addEventListener('click',loadDomains);$('#googleSheetConfig')?.addEventListener('submit',saveGoogleSheet);if($('#integrationSite'))$('#integrationSite').onchange=loadGoogleSheet;$('#googleSheetTest')?.addEventListener('click',testGoogleSheet);$('#googleSheetResync')?.addEventListener('click',resyncGoogleSheet);$('#googleSheetRemove')?.addEventListener('click',removeGoogleSheet);$('#knowledgeForm')?.addEventListener('submit',saveKnowledge);if($('#knowledgeSite'))$('#knowledgeSite').onchange=loadKnowledge;$('#refreshKnowledge')?.addEventListener('click',loadKnowledge);$('#freelancerApplicationForm')?.addEventListener('submit',saveFreelancerProfile);$('#freelancerStudioProfileForm')?.addEventListener('submit',saveStudioProfile);$('#publishTemplateForm')?.addEventListener('submit',publishTemplate);$('#refreshStudio')?.addEventListener('click',()=>{loadFreelancerStudio();loadEligibleRatings()});$('#newSupportConversation')?.addEventListener('click',supportComposer);$('#refreshSupport')?.addEventListener('click',loadSupport);$('#transferForm')?.addEventListener('submit',submitTransfer);$('#openProEnquiry')?.addEventListener('click',()=>{openModal('proModal');if($('#proName'))$('#proName').value=state.me?.name||'';if($('#proEmail'))$('#proEmail').value=state.me?.email||'';});$('#proForm')?.addEventListener('submit',submitPro);$('#resendVerify')?.addEventListener('click',resendVerification);$('#devVerify')?.addEventListener('click',devVerify);$$('[data-plan-change="FREE"]').forEach(b=>b.onclick=switchFree);$$('[data-paid-plan]').forEach(b=>b.onclick=()=>upgradePaid(b.dataset.paidPlan));
$('#assistantViewSite')?.addEventListener('change',loadDedicatedAssistant);$('#dedicatedAssistantSettingsForm')?.addEventListener('submit',saveDedicatedAssistant);$('#assistantStartTestBtn')?.addEventListener('click',startDedicatedAssistantTest);$('#dedicatedAssistantSend')?.addEventListener('click',sendDedicatedAssistantMessage);$('#dedicatedAssistantInput')?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendDedicatedAssistantMessage()}});
$('#appointmentsSite')?.addEventListener('change',loadAppointments);$('#refreshAppointments')?.addEventListener('click',loadAppointments);$('#appointmentSettingsForm')?.addEventListener('submit',saveAppointmentSettings);



// --- Global Spotlight Search Engine ---
const searchInput = $('#globalSearch');
const searchDropdown = $('#globalSearchResults');
const searchClearBtn = $('#searchClearBtn');
const searchKbd = $('#searchKbd');

const DASHBOARD_VIEWS = [
  { id: 'overview', title: 'Dashboard Overview', subtitle: 'Workspace summary & KPI metrics', icon: '⊞', badge: 'View' },
  { id: 'websites', title: 'Websites & Pages', subtitle: 'Manage active, draft & custom domain sites', icon: '🌐', badge: 'View' },
  { id: 'leads', title: 'Leads & Inquiries', subtitle: 'Captured form leads, scores & contact details', icon: '👥', badge: 'View' },
  { id: 'assistant', title: 'AI Sales Assistant', subtitle: 'Autonomous chatbot configuration & training', icon: '💬', badge: 'View' },
  { id: 'appointments', title: 'Appointments & Booking', subtitle: 'Scheduled calls, calendar rules & client sessions', icon: '📅', badge: 'View' },
  { id: 'analytics', title: 'Growth Center & Analytics', subtitle: 'Funnel stages, conversion rate & visitor traffic', icon: '📈', badge: 'View' },
  { id: 'health', title: 'Site Health & SEO', subtitle: 'Audit diagnostics, uptime & backup exports', icon: '🩺', badge: 'View' },
  { id: 'domains', title: 'Domains & SSL', subtitle: 'Custom hostnames, TLS certificates & DNS verify', icon: '🔒', badge: 'View' },
  { id: 'integrations', title: 'Integrations & Knowledge', subtitle: 'Google Sheets sync, custom knowledge docs', icon: '⚡', badge: 'View' },
  { id: 'freelancer', title: 'Freelancers Marketplace', subtitle: 'Verified independent design specialists', icon: '💼', badge: 'View' },
  { id: 'support', title: 'Support & Tickets', subtitle: 'Direct help, operational inquiries & guidance', icon: '🎧', badge: 'View' },
  { id: 'billing', title: 'Billing & Usage Plans', subtitle: 'Regional pricing, invoices & AI credits', icon: '💳', badge: 'View' },
  { id: 'settings', title: 'Account Settings', subtitle: 'Security, profile, passwords & preferences', icon: '⚙', badge: 'View' }
];

const DASHBOARD_ACTIONS = [
  { id: 'act-new-site', title: '＋ Create New Website', subtitle: 'Open a blank Studio immediately', action: () => openCreate(), icon: '＋', badge: 'Action' },
  { id: 'act-export', title: 'Export Workspace Data', subtitle: 'Download sites and leads summary', action: () => { setView('health'); toast('Opened Site Health for export'); }, icon: '📦', badge: 'Action' }
];

let selectedResultIndex = -1;
let currentResults = [];

function renderGlobalSearchResults(query) {
  if (!searchDropdown) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchDropdown.classList.add('hidden');
    searchDropdown.innerHTML = '';
    if (searchClearBtn) searchClearBtn.hidden = true;
    if (searchKbd) searchKbd.hidden = false;
    currentResults = [];
    selectedResultIndex = -1;
    return;
  }

  if (searchClearBtn) searchClearBtn.hidden = false;
  if (searchKbd) searchKbd.hidden = true;

  const matchingViews = DASHBOARD_VIEWS.filter(v => v.title.toLowerCase().includes(q) || v.subtitle.toLowerCase().includes(q) || v.id.includes(q));
  
  const matchingSites = (state.sites || []).filter(s => 
    (s.business_name || '').toLowerCase().includes(q) || 
    (s.slug || '').toLowerCase().includes(q) || 
    (s.template_slug || '').toLowerCase().includes(q)
  ).slice(0, 5).map(s => ({
    type: 'site',
    site: s,
    title: s.business_name || s.slug,
    subtitle: `${s.status} · /s/${s.slug}`,
    icon: '💻',
    badge: 'Website'
  }));

  const matchingLeads = (state.leads || []).filter(l => 
    (l.name || '').toLowerCase().includes(q) || 
    (l.email || '').toLowerCase().includes(q) || 
    (l.business_name || '').toLowerCase().includes(q) ||
    (l.phone || '').toLowerCase().includes(q)
  ).slice(0, 5).map(l => ({
    type: 'lead',
    lead: l,
    title: l.name || l.email,
    subtitle: `${l.email || ''} · ${l.business_name || 'Direct lead'} · ${l.source || 'web'}`,
    icon: '👤',
    badge: 'Lead'
  }));

  const matchingActions = DASHBOARD_ACTIONS.filter(a => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q));

  currentResults = [];
  let html = '';

  if (matchingActions.length > 0) {
    html += '<div class="search-group-title">Actions</div>';
    matchingActions.forEach(item => {
      const idx = currentResults.length;
      currentResults.push({ type: 'action', item });
      html += `<div class="search-result-item" data-res-idx="${idx}" role="option">
        <span class="item-icon">${item.icon}</span>
        <div class="item-content">
          <span class="item-title">${escapeHtml(item.title)}</span>
          <span class="item-subtitle">${escapeHtml(item.subtitle)}</span>
        </div>
        <span class="item-badge">${item.badge}</span>
      </div>`;
    });
  }

  if (matchingSites.length > 0) {
    html += '<div class="search-group-title">Websites</div>';
    matchingSites.forEach(item => {
      const idx = currentResults.length;
      currentResults.push(item);
      html += `<div class="search-result-item" data-res-idx="${idx}" role="option">
        <span class="item-icon">${item.icon}</span>
        <div class="item-content">
          <span class="item-title">${escapeHtml(item.title)}</span>
          <span class="item-subtitle">${escapeHtml(item.subtitle)}</span>
        </div>
        <span class="item-badge">${item.badge}</span>
      </div>`;
    });
  }

  if (matchingLeads.length > 0) {
    html += '<div class="search-group-title">Leads</div>';
    matchingLeads.forEach(item => {
      const idx = currentResults.length;
      currentResults.push(item);
      html += `<div class="search-result-item" data-res-idx="${idx}" role="option">
        <span class="item-icon">${item.icon}</span>
        <div class="item-content">
          <span class="item-title">${escapeHtml(item.title)}</span>
          <span class="item-subtitle">${escapeHtml(item.subtitle)}</span>
        </div>
        <span class="item-badge">${item.badge}</span>
      </div>`;
    });
  }

  if (matchingViews.length > 0) {
    html += '<div class="search-group-title">Navigation &amp; Views</div>';
    matchingViews.forEach(v => {
      const idx = currentResults.length;
      currentResults.push({ type: 'view', view: v });
      html += `<div class="search-result-item" data-res-idx="${idx}" role="option">
        <span class="item-icon">${v.icon}</span>
        <div class="item-content">
          <span class="item-title">${escapeHtml(v.title)}</span>
          <span class="item-subtitle">${escapeHtml(v.subtitle)}</span>
        </div>
        <span class="item-badge">${v.badge}</span>
      </div>`;
    });
  }

  if (currentResults.length === 0) {
    html = `<div class="search-empty-state">No matching websites, leads or actions found for "<strong>${escapeHtml(query)}</strong>".</div>`;
  }

  searchDropdown.innerHTML = html;
  searchDropdown.classList.remove('hidden');
  selectedResultIndex = currentResults.length > 0 ? 0 : -1;
  updateSelectedResultClass();

  searchDropdown.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('mousedown', e => {
      e.preventDefault();
      const idx = Number(el.dataset.resIdx);
      activateSearchResult(idx);
    });
  });
}

function updateSelectedResultClass() {
  if (!searchDropdown) return;
  const items = searchDropdown.querySelectorAll('.search-result-item');
  items.forEach((el, idx) => {
    el.classList.toggle('selected', idx === selectedResultIndex);
    if (idx === selectedResultIndex) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

function activateSearchResult(idx) {
  const result = currentResults[idx];
  if (!result) return;
  if (result.type === 'view') {
    setView(result.view.id);
  } else if (result.type === 'site') {
    location.href = `/studio/${result.site.id}`;
  } else if (result.type === 'lead') {
    setView('leads');
    toast(`Viewing lead: ${result.lead.name || result.lead.email}`);
  } else if (result.type === 'action') {
    result.item.action();
  }
  closeGlobalSearch();
}

function closeGlobalSearch() {
  if (searchDropdown) {
    searchDropdown.classList.add('hidden');
    searchDropdown.innerHTML = '';
  }
  if (searchInput) {
    searchInput.value = '';
    searchInput.blur();
  }
  if (searchClearBtn) searchClearBtn.hidden = true;
  if (searchKbd) searchKbd.hidden = false;
  currentResults = [];
  selectedResultIndex = -1;
  $$('.site-card,[data-search],.template-item').forEach(el => {
    if (el.classList.contains('site-card') || el.classList.contains('template-item') || el.tagName === 'TR') {
      el.style.display = '';
    }
  });
}

if (searchInput) {
  searchInput.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    renderGlobalSearchResults(e.target.value);
    $$('.site-card,[data-search],.template-item').forEach(el => {
      if (el.classList.contains('site-card') || el.tagName === 'TR') {
        el.style.display = !q || (el.dataset.search || '').includes(q) ? '' : 'none';
      } else if (el.classList.contains('template-item')) {
        const text = (el.textContent || '').toLowerCase();
        el.style.display = !q || text.includes(q) ? '' : 'none';
      }
    });
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentResults.length > 0) {
        selectedResultIndex = (selectedResultIndex + 1) % currentResults.length;
        updateSelectedResultClass();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentResults.length > 0) {
        selectedResultIndex = (selectedResultIndex - 1 + currentResults.length) % currentResults.length;
        updateSelectedResultClass();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedResultIndex >= 0 && selectedResultIndex < currentResults.length) {
        activateSearchResult(selectedResultIndex);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeGlobalSearch();
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
      renderGlobalSearchResults(searchInput.value);
    }
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', e => {
    e.preventDefault();
    closeGlobalSearch();
    searchInput?.focus();
  });
}

document.addEventListener('click', e => {
  const container = $('#globalSearchWrapper') || $('.search');
  if (container && !container.contains(e.target)) {
    if (searchDropdown && !searchDropdown.classList.contains('hidden')) {
      searchDropdown.classList.add('hidden');
    }
  }
});

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    searchInput?.focus();
    searchInput?.select();
    if (searchInput?.value.trim()) {
      renderGlobalSearchResults(searchInput.value);
    }
  }
});


// Sneat-inspired responsive navigation shell.
const dashboardShell=document.querySelector('.app-shell');
const sidebarToggle=document.querySelector('#sidebarToggle');
if(sidebarToggle&&dashboardShell){sidebarToggle.addEventListener('click',()=>dashboardShell.classList.toggle('sidebar-open'));}
$$('.rail-btn[data-view]').forEach(b=>b.addEventListener('click',()=>dashboardShell?.classList.remove('sidebar-open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape')dashboardShell?.classList.remove('sidebar-open')});

async function loadAiCreditPanel(){try{const [j,t]=await Promise.all([api('/api/ai-credits'),api('/api/ai-credits/transactions?limit=25')]);const w=j.wallet||{};const fmt=v=>Number(v||0).toLocaleString(undefined,{maximumFractionDigits:2});if($('#normalAiBalance'))$('#normalAiBalance').textContent=fmt(w.normal_available);if($('#normalAiAllocation'))$('#normalAiAllocation').textContent=`${fmt(w.plan_allocation)} included this cycle`;if($('#chatbotReserveBalance'))$('#chatbotReserveBalance').textContent=fmt(w.chatbot_reserved_available);if($('#chatbotReserveMeta'))$('#chatbotReserveMeta').textContent=`${fmt(w.chatbot_reserved_allocation)} protection credits · resets each cycle`;const usage=j.usage?.by_feature||[];if($('#aiUsageByFeature'))$('#aiUsageByFeature').innerHTML=usage.length?usage.map(x=>`<div class="stack-item"><span>${escapeHtml(String(x.feature||'AI').replaceAll('_',' '))}</span><b>${fmt(x.credits)} credits</b></div>`).join(''):'<p class="muted-copy">No AI usage this cycle.</p>';if($('#aiCreditTransactionRows'))$('#aiCreditTransactionRows').innerHTML=(t.items||[]).map(x=>`<tr><td>${x.created_at?new Date(x.created_at).toLocaleDateString():'—'}</td><td>${escapeHtml(String(x.feature||'AI').replaceAll('_',' '))}</td><td>${escapeHtml(x.wallet_type||'NORMAL')}</td><td>${fmt(x.amount)}</td></tr>`).join('')}catch(e){if($('#aiUsageByFeature'))$('#aiUsageByFeature').innerHTML=`<p class="muted-copy">${escapeHtml(e.message)}</p>`}}
init().catch(console.error);
async function updateAiCreditStatus(){try{const j=await api('/api/ai-credits');const w=j.wallet||{};const el=$('#aiCreditStatus');if(!el)return;const normal=Number(w.normal_available||0),allocation=Number(w.plan_allocation||0),reserve=Number(w.chatbot_reserved_available||0),reserveAllocation=Number(w.chatbot_reserved_allocation||0);if(normal<=0&&reserve>0)el.textContent='Your regular AI credits have been used. Your published website assistant is continuing through protected Sales Assistant credits.';else if(normal<=0&&reserve<=0)el.textContent='Paid AI is paused until credits are added, but your published assistant remains available for business facts and lead capture.';else if(reserveAllocation>0&&reserve/reserveAllocation<=0.1)el.textContent='Your Sales Assistant Protection balance is running low.';else if(reserveAllocation>0&&reserve/reserveAllocation<=0.2)el.textContent='Your Sales Assistant Protection balance is below 20%.';else if(allocation>0&&normal/allocation<=0.1)el.textContent='Your regular AI credits are running low. Sales Assistant Protection remains reserved for published-site conversations.';else if(allocation>0&&normal/allocation<=0.2)el.textContent='You have used most of your regular AI credits.';else el.textContent='';}catch(e){}}
loadAiCreditPanel().then(updateAiCreditStatus).catch(()=>{});
// Keep the legacy billing renderer from reintroducing the retired unlimited
// entitlement wording after it refreshes plan metadata.
setTimeout(()=>document.querySelectorAll('#currentPlanMeta').forEach(el=>{
  el.textContent=el.textContent.replace(/unlimited AI Sales Assistant/gi,'finite Sales Assistant Protection allowance');
}),0);
const _planCopy=document.querySelector('#currentPlanMeta');
if(_planCopy){new MutationObserver(()=>{
  const text=_planCopy.textContent||'';
  if(/unlimited AI Sales Assistant/i.test(text)) _planCopy.textContent=text.replace(/unlimited AI Sales Assistant/gi,'finite Sales Assistant Protection allowance');
}).observe(_planCopy,{childList:true,characterData:true,subtree:true});}

// Plan allowances are enforcement data, not marketing constants.  Refresh the
// visible plan cards from the same public catalogue used by the API so a
// Super Admin change cannot leave stale credit quantities in the dashboard.
(async()=>{try{const catalogue=await api('/api/public/plans');for(const plan of (catalogue.items||[])){const key=String(plan.plan||'').toUpperCase();for(const [attr,field] of [['data-plan-pages','page_limit'],['data-plan-ai','ai_credits'],['data-plan-leads','lead_credits'],['data-plan-reserve','chatbot_reserved_credits']])document.querySelectorAll(`[${attr}="${key}"]`).forEach(el=>{if(plan[field]!==undefined)el.textContent=Number(plan[field]).toLocaleString()})}}catch(e){/* billing remains usable with server-rendered defaults */}})();
