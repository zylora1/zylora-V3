const $=s=>document.querySelector(s);const menu=$('[data-testid="mobile-menu"]'),nav=$('#primaryNav');if(menu)menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')};const openPro=$('#openPro'),closePro=$('#closePro'),proModal=$('#proModal');if(openPro)openPro.onclick=()=>{proModal.classList.add('open');proModal.setAttribute('aria-hidden','false')};if(closePro)closePro.onclick=()=>{proModal.classList.remove('open');proModal.setAttribute('aria-hidden','true')};if(proModal)proModal.addEventListener('click',e=>{if(e.target===proModal)closePro.click()});const form=$('#proForm');if(form)form.onsubmit=async e=>{e.preventDefault();const msg=$('#proMsg');msg.textContent='Sending…';try{const r=await fetch('/api/pro/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:$('#proName').value,email:$('#proEmail').value,website_type:$('#proType').value,preferred_contact_time:$('#proTime').value,turnstile_token:window.ZyloraTurnstile?.getToken?.()||null})});const j=await r.json();if(!r.ok)throw new Error(j.detail||'Could not send enquiry');msg.textContent=`Thanks — your reference is ${j.lead_code}.`;form.reset()}catch(err){msg.textContent=err.message}finally{window.ZyloraTurnstile?.reset?.()}};

const rotateWord=document.querySelector('[data-rotate-word]');
if(rotateWord){
  const words=[['your business','rotate-teal'],['your bookings','rotate-red'],['your next launch','rotate-blue']];
  let rotateIndex=0;
  const reduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion)setInterval(()=>{rotateWord.classList.add('rotate-out');setTimeout(()=>{rotateIndex=(rotateIndex+1)%words.length;rotateWord.textContent=words[rotateIndex][0];rotateWord.classList.remove('rotate-teal','rotate-red','rotate-blue');rotateWord.classList.add(words[rotateIndex][1]);requestAnimationFrame(()=>rotateWord.classList.remove('rotate-out'))},220)},2600);
}


// Contained pointer-drag interaction for the landing hero.
(()=>{
  const item=document.querySelector('[data-hero-drag]');
  const stage=document.querySelector('[data-hero-drag-stage]');
  if(!item||!stage)return;
  const mq=window.matchMedia('(max-width:700px), (prefers-reduced-motion: reduce)');
  let active=false,startX=0,startY=0,baseX=0,baseY=0,x=0,y=0,pointerId=null;
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  const paint=()=>{item.style.setProperty('--drag-x',`${x}px`);item.style.setProperty('--drag-y',`${y}px`)};
  const reset=()=>{x=0;y=0;baseX=0;baseY=0;paint()};
  item.addEventListener('pointerdown',e=>{
    if(mq.matches||e.button!==0)return;
    active=true;pointerId=e.pointerId;startX=e.clientX;startY=e.clientY;baseX=x;baseY=y;
    item.setPointerCapture?.(e.pointerId);item.classList.add('is-dragging');
  });
  item.addEventListener('pointermove',e=>{
    if(!active||e.pointerId!==pointerId)return;
    const bounds=stage.getBoundingClientRect();
    const maxX=Math.min(110,Math.max(28,bounds.width*.08));
    const maxY=56;
    x=clamp(baseX+(e.clientX-startX),-maxX,maxX);
    y=clamp(baseY+(e.clientY-startY),-maxY,maxY);paint();
  });
  const stop=e=>{if(!active)return;if(e&&pointerId!==null&&e.pointerId!==pointerId)return;active=false;pointerId=null;item.classList.remove('is-dragging')};
  item.addEventListener('pointerup',stop);item.addEventListener('pointercancel',stop);
  item.addEventListener('keydown',e=>{
    if(mq.matches)return;const step=e.shiftKey?20:8;
    if(e.key==='ArrowLeft'){x=clamp(x-step,-110,110);e.preventDefault()}
    else if(e.key==='ArrowRight'){x=clamp(x+step,-110,110);e.preventDefault()}
    else if(e.key==='ArrowUp'){y=clamp(y-step,-56,56);e.preventDefault()}
    else if(e.key==='ArrowDown'){y=clamp(y+step,-56,56);e.preventDefault()}
    else if(e.key==='Escape'||e.key==='Home'){reset();e.preventDefault()}else return;paint();
  });
  mq.addEventListener?.('change',()=>{if(mq.matches)reset()});
})();

// Regional pricing is a display hint only. Checkout always resolves the authoritative region server-side.
(()=>{const starter=document.getElementById('starterRegionalPrice'),growth=document.getElementById('growthRegionalPrice'),note=document.getElementById('regionalPriceNote');if(!starter&&!growth)return;Promise.all(['STARTER','GROWTH'].map(plan=>fetch(`/api/public/regional-price?plan=${plan}`).then(r=>r.ok?r.json():null))).then(([s,g])=>{if(s&&starter)starter.textContent=s.currency==='INR'?`₹${Number(s.amount_minor/100).toLocaleString('en-IN',{maximumFractionDigits:0})}`:`US$${Number(s.amount_minor/100).toLocaleString('en-US',{maximumFractionDigits:0})}`;if(g&&growth)growth.textContent=g.currency==='INR'?`₹${Number(g.amount_minor/100).toLocaleString('en-IN',{maximumFractionDigits:0})}`:`US$${Number(g.amount_minor/100).toLocaleString('en-US',{maximumFractionDigits:0})}`;if(note&&s)note.textContent=s.billing_region==='INDIA'?'India regional price · INR billing':'International regional price · USD billing'}).catch(()=>{})})();
