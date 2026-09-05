const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const DIRECTIONS=[
  {id:'swiss-minimal',name:'Swiss minimal',note:'Quiet grid, sharp hierarchy, generous space'},
  {id:'editorial-asymmetric',name:'Editorial asymmetric',note:'Offset composition and strong type rhythm'},
  {id:'cinematic-image-led',name:'Cinematic',note:'Dark, immersive and image-forward'},
  {id:'soft-organic',name:'Warm organic',note:'Soft surfaces, tactile pacing and serif detail'},
  {id:'technical-grid',name:'Technical grid',note:'Precise structure, utility labels and data rhythm'},
  {id:'poster-brutalist',name:'Bold poster',note:'Hard rules, oversized type and direct contrast'},
  {id:'modular-bento',name:'Modular bento',note:'Compact blocks with varied information density'},
  {id:'typography-led',name:'Typography led',note:'Minimal imagery with type as the main visual system'}
];
const state={step:1,goal:'',direction:'',me:null,versions:[],artifactTab:'plan',selectedVersion:null};
const PROMPT_DETAIL_WORD_THRESHOLD=20;
const PROMPT_GUIDANCE_STORAGE_PREFIX='zylora:ai-prompt-guidance-dismissed:';
function csrf(){return sessionStorage.getItem('csrf')||state.me?.csrf_token||''}
async function api(url,opts={}){const h={'Content-Type':'application/json',...(opts.headers||{})};if(opts.method&&opts.method!=='GET')h['X-CSRF-Token']=csrf();const r=await fetch(url,{...opts,headers:h});let j={};try{j=await r.json()}catch{}if(!r.ok){const d=j.detail;const e=new Error(typeof d==='string'?d:(d?.message||`Request failed (${r.status})`));e.status=r.status;e.detail=d;throw e}return j}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function promptWordCount(value=''){const text=String(value).trim();return text?text.split(/\s+/).length:0}
function promptGuidanceIdentity(){return state.me?.id||state.me?.email||'guest'}
function promptGuidanceKey(identity=promptGuidanceIdentity()){return `${PROMPT_GUIDANCE_STORAGE_PREFIX}${identity}`}
function promptGuidanceDismissed(){
  try{
    const identity=promptGuidanceIdentity(),key=promptGuidanceKey(identity);
    if(localStorage.getItem(key)==='1')return true;
    if(identity!=='guest'&&localStorage.getItem(promptGuidanceKey('guest'))==='1'){
      localStorage.setItem(key,'1');
      localStorage.removeItem(promptGuidanceKey('guest'));
      return true;
    }
  }catch{}
  return false;
}
function syncPromptGuidance(){const box=$('#promptGuidance');if(box)box.hidden=promptGuidanceDismissed()}
function dismissPromptGuidance(){
  const box=$('#promptGuidance');if(box)box.hidden=true;
  try{localStorage.setItem(promptGuidanceKey(),'1')}catch{}
}
function updatePromptWordHint(){
  const input=$('#businessDescription'),hint=$('#promptWordHint'),counter=$('#promptWordCount');if(!input||!hint||!counter)return;
  const words=promptWordCount(input.value);counter.textContent=String(words);
  hint.classList.toggle('detailed',words>=PROMPT_DETAIL_WORD_THRESHOLD);
  if(words<PROMPT_DETAIL_WORD_THRESHOLD){
    hint.innerHTML=`<b id="promptWordCount">${words}</b> word${words===1?'':'s'} — consider adding more detail like target audience, key services, tone, or specific sections.`;
  }else{
    hint.innerHTML=`<b id="promptWordCount">${words}</b> words — good detail. Add more specifics only where they matter to your site.`;
  }
}
function liveDraft(){return {goal:state.goal,business_name:$('#businessName')?.value.trim()||'',description:$('#businessDescription')?.value.trim()||'',direction:state.direction,motion:$('#motionStyle')?.value||'Subtle',label:'Live'}}
function snapshot(label){const data={...liveDraft(),label};const prev=state.versions.at(-1);if(prev&&JSON.stringify({...prev,label:undefined})===JSON.stringify({...data,label:undefined}))return;state.versions.push(data);state.selectedVersion=null;renderVersions();renderArtifact()}
function selectedDraft(){return state.selectedVersion===null?liveDraft():(state.versions[state.selectedVersion]||liveDraft())}
function inferPages(desc='',goal=''){const text=`${desc} ${goal}`.toLowerCase();const pages=['Home'];const add=x=>{if(!pages.includes(x))pages.push(x)};const explicit=[['about','About'],['studio','Studio'],['projects','Projects'],['portfolio','Portfolio'],['services','Services'],['service','Services'],['menu','Menu'],['contact','Contact'],['visit','Visit'],['process','Process'],['security','Security'],['platform','Platform'],['use cases','Use Cases'],['doctors','Doctors'],['departments','Departments'],['facilities','Facilities'],['appointments','Appointments'],['book','Appointments'],['events','Events'],['gallery','Gallery'],['pricing','Pricing']];explicit.forEach(([k,v])=>{if(text.includes(k))add(v)});if(/architecture|creative|designer|photograph|portfolio/.test(text)){add('Projects');add('Studio')}if(/software|saas|technology|platform/.test(text)){add('Platform');add('Use Cases')}if(/restaurant|cafe|food/.test(text)){add('Menu');add('Visit')}if(/clinic|hospital|doctor|health/.test(text)){add('Services');add('Appointments');add('Contact')}if(/appointment|booking/.test(text))add('Appointments');if(/lead|enquir|service business|consult/.test(text)){add('Services');add('Contact')}if(pages.length<3){add('About');add('Contact')}return pages.slice(0,20)}
function directionName(value){return DIRECTIONS.find(x=>x.id===value)?.name||value||'Not chosen'}
function renderVersions(){const host=$('#artifactVersions');if(!host)return;host.innerHTML=`<button class="${state.selectedVersion===null?'active':''}" data-version-live>Live</button>`+state.versions.map((v,i)=>`<button class="${state.selectedVersion===i?'active':''}" data-version="${i}">v${i+1} · ${escapeHtml(v.label)}</button>`).join('');$('[data-version-live]')?.addEventListener('click',()=>{state.selectedVersion=null;renderVersions();renderArtifact()});$$('[data-version]').forEach(b=>b.onclick=()=>{state.selectedVersion=Number(b.dataset.version);renderVersions();renderArtifact()})}
function renderArtifact(){const d=selectedDraft(),pages=inferPages(d.description,d.goal),name=d.business_name||'Untitled website',goal=d.goal||'Website goal not chosen';$('#artifactTitle').textContent=name==='Untitled website'?'Website brief':name;$('#artifactPlan').innerHTML=`<article class="artifact-card"><div class="artifact-cover"><small>${escapeHtml(goal)}</small><h3>${escapeHtml(name)}</h3></div><div class="artifact-meta-grid"><div><small>Pages</small><b>${pages.length} draft pages</b></div><div><small>Direction</small><b>${escapeHtml(directionName(d.direction))}</b></div><div><small>Motion</small><b>${escapeHtml(d.motion||'Subtle')}</b></div></div><div class="artifact-note">${escapeHtml(d.description||'Describe the business and the generated artifact preview will update here.')}</div></article>`;$('#artifactPages').innerHTML=`<div class="page-plan">${pages.map((p,i)=>`<article class="page-row"><span class="page-number">${String(i+1).padStart(2,'0')}</span><span><b>${escapeHtml(p)}</b><small>${p==='Home'?'Primary narrative and conversion entry point':'Derived from the current business brief'}</small></span><span>${i===0?'Required':'Draft'}</span></article>`).join('')}</div>`;$('#artifactDesign').innerHTML=`<article class="design-preview-card"><div class="design-swatch"><div>${escapeHtml(name)}</div><div>${escapeHtml(directionName(d.direction))}</div></div><div class="design-copy"><h3>${escapeHtml(directionName(d.direction))}</h3><p>${escapeHtml(d.direction?`Art direction signal with ${d.motion||'Subtle'} motion. This is not a selectable catalogue template.`:'Choose an art direction to preview the visual system.')}</p></div></article>`;$$('[data-artifact-view]').forEach(v=>v.classList.toggle('active',v.dataset.artifactView===state.artifactTab))}
function go(n){state.step=n;$$('.step').forEach(x=>x.classList.toggle('active',Number(x.dataset.step)===n));$$('[data-progress]').forEach(x=>x.classList.toggle('active',Number(x.dataset.progress)<=n));$('.ai-stage')?.scrollTo({top:0,behavior:'smooth'});renderArtifact()}
$$('#goalChoices button').forEach(b=>b.onclick=()=>{$$('#goalChoices button').forEach(x=>x.classList.toggle('active',x===b));state.goal=b.dataset.goal;$('#goalNext').disabled=false;renderArtifact()});
$('#goalNext').onclick=()=>{snapshot('Goal');go(2)};$$('[data-back]').forEach(b=>b.onclick=()=>go(Number(b.dataset.back)));
$('#businessName').oninput=renderArtifact;$('#businessDescription').oninput=e=>{$('#charCount').textContent=e.target.value.length;updatePromptWordHint();renderArtifact()};$('#promptGuidanceDismiss')?.addEventListener('click',dismissPromptGuidance);$$('[data-fill]').forEach(b=>b.onclick=()=>{$('#businessDescription').value=b.dataset.fill;$('#businessDescription').dispatchEvent(new Event('input'))});
$('#briefNext').onclick=()=>{const name=$('#businessName').value.trim();if(name.length<2){$('#businessName').focus();return}snapshot('Brief');go(3)};
function renderDirections(){const custom=$('#stylePrompt').value.trim();$('#directionGrid').innerHTML=DIRECTIONS.map((d,i)=>`<button type="button" class="direction-card ${state.direction===d.id?'selected':''}" data-direction="${d.id}" aria-pressed="${state.direction===d.id}"><span class="direction-preview preview-${i+1}" aria-hidden="true"><i></i><i></i><i></i></span><span class="direction-copy"><b>${d.name}</b><small>${d.note}</small></span></button>`).join('')+(custom?`<button type="button" class="direction-card custom ${state.direction===custom?'selected':''}" data-direction-custom="1" aria-pressed="${state.direction===custom}"><span class="direction-preview preview-custom" aria-hidden="true"><i></i><i></i><i></i></span><span class="direction-copy"><b>Custom direction</b><small>${escapeHtml(custom.slice(0,100))}</small></span></button>`:'');$$('[data-direction]').forEach(b=>b.onclick=()=>{state.direction=b.dataset.direction;state.selectedVersion=null;renderDirections();$('#createSite').disabled=false;renderArtifact()});const c=$('[data-direction-custom]');if(c)c.onclick=()=>{state.direction=custom;state.selectedVersion=null;renderDirections();$('#createSite').disabled=false;renderArtifact()}}
$('#styleApply').onclick=()=>{const q=$('#stylePrompt').value.trim();if(!q)return;state.direction=q;state.selectedVersion=null;renderDirections();$('#createSite').disabled=false;renderArtifact()};$('#stylePrompt').oninput=renderArtifact;$('#motionStyle').onchange=renderArtifact;
$$('[data-artifact-tab]').forEach(b=>b.onclick=()=>{state.artifactTab=b.dataset.artifactTab;$$('[data-artifact-tab]').forEach(x=>x.classList.toggle('active',x===b));renderArtifact()});
renderDirections();renderVersions();updatePromptWordHint();renderArtifact();
const aiCreatePromptInputRoot = $('#aiCreatePromptInputRoot');
if (window.PromptInputModule && aiCreatePromptInputRoot) {
  aiCreatePromptInputRoot.hidden = false;
  const fallbackPromptBox = $('#businessDescription')?.closest('.prompt-box');
  if (fallbackPromptBox) fallbackPromptBox.hidden = true;
  PromptInputModule.mount(aiCreatePromptInputRoot, {
    placeholder: "Example: We're a premium fitness studio in Chennai...",
    onSubmit: function(text, meta) {
      const ta = $('#businessDescription');
      if (ta) { ta.value = text; ta.dispatchEvent(new Event('input')); }
      const briefNext = $('#briefNext');
      if (briefNext) briefNext.click();
    },
    onChange: function(text) {
      const ta = $('#businessDescription');
      if (ta) { ta.value = text; ta.dispatchEvent(new Event('input')); }
    }
  });
}
$('#createSite').onclick=async()=>{const status=$('#createStatus');status.className='status';status.textContent='Planning pages, art direction and content…';if(!state.versions.length||state.versions.at(-1).label!=='Direction')snapshot('Direction');const draft={business_name:$('#businessName').value.trim(),description:$('#businessDescription').value.trim(),origin:'AI',industry:state.goal||'Business',style:state.direction||'swiss-minimal',motion_style:$('#motionStyle').value||'Subtle'};try{if(!state.me){sessionStorage.setItem('zyloraAiDraft',JSON.stringify(draft));location.href='/signup?next=%2Fai-create';return}const j=await api('/api/sites',{method:'POST',headers:{'Idempotency-Key':crypto.randomUUID?.()||String(Date.now())},body:JSON.stringify(draft)});sessionStorage.removeItem('zyloraAiDraft');status.textContent=`Created ${j.page_count||1} page${j.page_count===1?'':'s'}. Opening the editor…`;location.href=`/editor/${j.id}`}catch(e){if(e.status===401){sessionStorage.setItem('zyloraAiDraft',JSON.stringify(draft));location.href='/login?next=%2Fai-create';return}status.classList.add('error');status.textContent=e.message}};
(async()=>{try{state.me=await api('/api/auth/me');sessionStorage.setItem('csrf',state.me.csrf_token);$('#creditPill').hidden=false;$('#creditCount').textContent=state.me.ai_credits;const draft=JSON.parse(sessionStorage.getItem('zyloraAiDraft')||'null');if(draft){$('#businessName').value=draft.business_name||'';$('#businessDescription').value=draft.description||'';$('#businessDescription').dispatchEvent(new Event('input'));state.goal=draft.industry||'';state.direction=draft.style||'';if($('#motionStyle'))$('#motionStyle').value=draft.motion_style||'Subtle';if(state.goal)$$('#goalChoices button').forEach(x=>x.classList.toggle('active',x.dataset.goal===state.goal));renderDirections();snapshot('Recovered');go(3);$('#createSite').disabled=!state.direction}}catch(e){if(e.status!==401)console.warn(e)}finally{syncPromptGuidance()}})();
