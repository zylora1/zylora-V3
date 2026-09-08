(()=>{
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const csrf=()=>sessionStorage.getItem('csrf')||'';
  async function request(url,opts={}){
    const headers={...(opts.headers||{})};
    if(opts.body&&!headers['Content-Type'])headers['Content-Type']='application/json';
    if(opts.method&&opts.method!=='GET')headers['X-CSRF-Token']=csrf();
    const r=await fetch(url,{...opts,headers});let j={};try{j=await r.json()}catch{}
    if(r.status===401){location.href='/login';throw new Error('Authentication required')}
    if(!r.ok){const d=j.detail;const e=new Error(typeof d==='string'?d:(d?.message||d?.code||'Request failed'));e.status=r.status;e.detail=d;throw e}
    return j;
  }
  function ensureStyles(){
    if(document.getElementById('zylora-publish-flow-style'))return;
    const s=document.createElement('style');s.id='zylora-publish-flow-style';s.textContent=`
      .zpf-backdrop{position:fixed;inset:0;z-index:2147483000;background:rgba(10,12,11,.72);backdrop-filter:blur(10px);display:grid;place-items:center;padding:22px;font-family:Inter,system-ui,sans-serif}
      .zpf-card{width:min(920px,100%);max-height:min(820px,calc(100vh - 44px));overflow:auto;background:#fff;color:#121414;border-radius:24px;padding:28px;box-shadow:0 30px 100px #0007}
      .zpf-head{display:flex;justify-content:space-between;gap:20px;align-items:start}.zpf-head h2{font-size:clamp(28px,4vw,46px);line-height:1;margin:6px 0 10px}.zpf-kicker{font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#65706a}.zpf-copy{color:#667069;line-height:1.55;max-width:720px}.zpf-close{border:0;background:#f0f2f0;width:40px;height:40px;border-radius:50%;font-size:24px;cursor:pointer}.zpf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:24px}.zpf-plan{border:1px solid #dfe4df;border-radius:18px;padding:20px;display:flex;flex-direction:column;gap:10px;min-height:245px}.zpf-plan.recommended{border-color:#181b19;box-shadow:0 0 0 1px #181b19}.zpf-plan h3{font-size:24px;margin:0}.zpf-price{font-size:28px;font-weight:800}.zpf-plan ul{padding-left:18px;color:#65706a;line-height:1.6;flex:1}.zpf-btn{border:0;border-radius:999px;background:#151816;color:#fff;padding:12px 16px;font-weight:750;cursor:pointer}.zpf-btn.secondary{background:#eef1ee;color:#181b19}.zpf-warning{background:#fff4d9;border:1px solid #f1cf72;border-radius:16px;padding:16px;margin:20px 0;color:#4b3a0b;line-height:1.5}.zpf-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}.zpf-status{margin-top:14px;color:#65706a;min-height:22px}.zpf-safe{font-weight:750;color:#176236}.zpf-reset{font-weight:750;color:#8b3e08}@media(max-width:760px){.zpf-grid{grid-template-columns:1fr}.zpf-card{padding:20px;border-radius:18px}}
    `;document.head.appendChild(s);
  }
  let overlay=null;
  function close(){overlay?.remove();overlay=null}
  function shell(title,copy){ensureStyles();close();overlay=document.createElement('div');overlay.className='zpf-backdrop';overlay.innerHTML=`<section class="zpf-card" role="dialog" aria-modal="true"><div class="zpf-head"><div><div class="zpf-kicker">Publish website</div><h2>${esc(title)}</h2><p class="zpf-copy">${esc(copy)}</p></div><button class="zpf-close" aria-label="Close">×</button></div><div data-zpf-body></div><div class="zpf-status" data-zpf-status></div></section>`;document.body.appendChild(overlay);overlay.querySelector('.zpf-close').onclick=close;overlay.addEventListener('click',e=>{if(e.target===overlay)close()});return overlay.querySelector('[data-zpf-body]')}
  const status=t=>{const e=overlay?.querySelector('[data-zpf-status]');if(e)e.textContent=t||''}
  function planCards(plans,onChoose){
    const money=(minor,currency)=>Number(minor||0)>0?`${currency}${Math.round(Number(minor)/100).toLocaleString()} / month`:'';
    const body=overlay.querySelector('[data-zpf-body]');body.innerHTML=`<div class="zpf-grid">${(plans||[]).map(p=>{const prices=[money(p.price_inr_minor,'₹'),money(p.price_usd_minor,'US$')].filter(Boolean);const label=p.plan==='FREE'?'Free':prices.join(' · ')||'Contact us';return `<article class="zpf-plan ${p.plan==='STARTER'?'recommended':''}"><span class="zpf-kicker">${p.plan==='STARTER'?'Best to start':p.contact_only?'Managed publishing':'Self-service'}</span><h3>${esc(p.name||p.public_name||p.plan)}</h3><div class="zpf-price">${esc(label)}</div><ul><li>${Number(p.page_limit||0)} template pages</li><li>${p.is_paid?'Keeps layout & sizing edits':'Text & images always kept'}</li>${p.plan==='FREE'?'<li>Free-plan layout rules apply at publish</li>':'<li>Structural edits publish as designed</li>'}${p.domain_entitlement?`<li>${esc(p.domain_entitlement)}</li>`:''}</ul><button class="zpf-btn" data-zpf-plan="${esc(p.plan)}">Choose ${esc(p.name||p.public_name||p.plan)}</button></article>`}).join('')}</div>`;body.querySelectorAll('[data-zpf-plan]').forEach(b=>b.onclick=()=>onChoose(b.dataset.zpfPlan));
  }
  async function loadRazorpay(){if(window.Razorpay)return;await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://checkout.razorpay.com/v1/checkout.js';s.onload=ok;s.onerror=()=>no(new Error('Could not load Razorpay Checkout'));document.head.appendChild(s)})}
  async function activatePaid(plan,ctx){
    if(!['STARTER','GROWTH'].includes(plan))throw new Error('Only Starter and Growth are available through self-service checkout.');
    status(`Creating secure regional ${plan.toLowerCase()} subscription…`);
    const idem=(crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`);
    const o=await request('/api/billing/subscription',{method:'POST',headers:{'Idempotency-Key':idem},body:JSON.stringify({plan})});
    if(o.already_active){close();return execute(ctx,{})}
    if(o.provider==='mock'){
      await request('/api/billing/subscription/verify',{method:'POST',body:JSON.stringify({subscription_id:o.subscription_id,payment_id:o.mock_payment_id,signature:o.mock_signature})});
      close();return execute(ctx,{});
    }
    await loadRazorpay();const me=await request('/api/auth/me');
    const label=plan[0]+plan.slice(1).toLowerCase();
    return await new Promise((resolve,reject)=>{const rz=new Razorpay({key:o.key_id,subscription_id:o.subscription_id,name:'Zylora',description:`${label} · ${o.billing_region==='INDIA'?'India':'International'} monthly`,prefill:{name:me.name,email:me.email},handler:async r=>{try{await request('/api/billing/subscription/verify',{method:'POST',body:JSON.stringify({subscription_id:r.razorpay_subscription_id||o.subscription_id,payment_id:r.razorpay_payment_id,signature:r.razorpay_signature})});close();resolve(await execute(ctx,{}))}catch(e){status(e.message);reject(e)}}});rz.on?.('payment.failed',()=>status('Payment was not completed. Your draft is unchanged.'));rz.open()})
  }
  function selection(detail,ctx){
    shell('Choose a plan to publish','You can build and edit first. Your plan is selected only now, when you publish.');
    planCards(detail.plans||[],plan=>execute(ctx,{selected_plan:plan}));
    if(detail.has_structural_changes){const b=overlay.querySelector('[data-zpf-body]');b.insertAdjacentHTML('afterbegin','<div class="zpf-warning"><span class="zpf-safe">Your text and image replacements are safe on every plan.</span> Free resets layout/position and text/image sizing to the original template defaults.</div>')}
  }
  function freeWarning(detail,ctx){
    const body=shell('Free will reset layout & sizing',detail.message||'Your layout and sizing changes require a paid plan and will reset to the template default. Your text and images are safe.');
    body.innerHTML=`<div class="zpf-warning"><div class="zpf-reset">Layout, position, text-size and image-size changes will reset to the original template.</div><div class="zpf-safe">Text content and image replacements will remain exactly as edited.</div></div><div class="zpf-actions"><button class="zpf-btn secondary" data-zpf-back>Go back</button><button class="zpf-btn" data-zpf-free>Publish Free & reset layout</button>${(detail.plans||[]).filter(p=>p.is_paid).map(p=>`<button class="zpf-btn" data-zpf-paid="${esc(p.plan)}">Keep layout with ${esc(p.name||p.plan)}</button>`).join('')}</div>`;
    body.querySelector('[data-zpf-back]').onclick=close;body.querySelector('[data-zpf-free]').onclick=()=>execute(ctx,{selected_plan:'FREE',confirm_free_structural_reset:true});body.querySelectorAll('[data-zpf-paid]').forEach(b=>b.onclick=()=>execute(ctx,{selected_plan:b.dataset.zpfPaid}));
  }
  function upgrade(detail,ctx){
    const plans=detail.suitable_plans||[];shell('Choose a plan that can publish this site',detail.message||'This website needs a larger publishing plan.');planCards(plans,p=>execute(ctx,{selected_plan:p}));
  }
  async function execute(ctx,body){
    try{
      status('Checking publish settings…');
      const result=await request(`/api/sites/${ctx.siteId}/publish`,{method:'POST',body:Object.keys(body||{}).length?JSON.stringify(body):undefined});
      close();ctx.onPublished?.(result);return result;
    }catch(e){const d=e.detail||{};
      if(d.code==='PUBLISH_QA_BLOCKED'){const body=shell('Site Health found blocking issues',d.message||'Fix the blocking checks before publishing.');const qa=d.qa||{};body.innerHTML=`<div class="zpf-warning"><b>${Number(qa.blocking_count||0)} blocking issue(s)</b><p>${(qa.blockers||[]).slice(0,5).map(x=>esc(x.message||x.code)).join('<br>')}</p></div><div class="zpf-actions"><a class="zpf-btn" href="/dashboard?view=health&site=${encodeURIComponent(ctx.siteId)}">Open Site Health</a><button class="zpf-btn secondary" data-zpf-back>Keep editing</button></div>`;body.querySelector('[data-zpf-back]').onclick=close;return}
      if(d.code==='PLAN_SELECTION_REQUIRED'){selection(d,ctx);return}
      if(d.code==='FREE_STRUCTURAL_RESET_CONFIRMATION_REQUIRED'){freeWarning(d,ctx);return}
      if(d.code==='PAID_PLAN_ACTIVATION_REQUIRED'){try{return await activatePaid(d.plan,ctx)}catch(err){if(!overlay)shell('Payment could not be completed','Your draft is unchanged.');status(err.message);return}}
      if(d.code==='PLAN_UPGRADE_REQUIRED'){if(d.managed){shell('Managed project required',d.message);return}upgrade(d,ctx);return}
      if(d.code==='MANAGED_PRO_PUBLISH'){shell('Managed by RootPro',d.message);return}
      close();ctx.onError?.(e);throw e;
    }
  }
  window.ZyloraPublishFlow={start(siteId,{onPublished,onError,initialBody={}}={}){return execute({siteId,onPublished,onError},initialBody||{})},close};
})();
