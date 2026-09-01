(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){document.documentElement.dataset.reducedMotion='true';return}

  const activate=(n)=>{
    n.classList.add('zy-in');
    if(n.dataset.zyStagger){
      const ms=Math.max(20,Math.min(300,+n.dataset.zyStagger||80));
      [...n.children].forEach((child,i)=>child.style.transitionDelay=`${i*ms}ms`);
    }
  };

  // Geometry-based reveal detection is intentional. IntersectionObserver can
  // report a fully clipped `clip-path` reveal target as non-intersecting,
  // leaving off-screen clip reveals permanently invisible after scrolling.
  const pending=new Set(document.querySelectorAll('[data-zy-reveal],[data-zy-stagger]'));
  let revealScheduled=false;
  const checkReveals=()=>{
    revealScheduled=false;
    for(const n of [...pending]){
      const r=n.getBoundingClientRect();
      if(r.bottom>0&&r.top<innerHeight*.95){activate(n);pending.delete(n)}
    }
  };
  const scheduleReveal=()=>{
    if(!revealScheduled){revealScheduled=true;requestAnimationFrame(checkReveals)}
  };
  addEventListener('scroll',scheduleReveal,{passive:true});
  addEventListener('resize',scheduleReveal,{passive:true});
  checkReveals();

  const marquees=[...document.querySelectorAll('[data-zy-marquee]')];
  const parallax=[...document.querySelectorAll('[data-zy-parallax]')];
  function tick(now){
    for(const n of marquees){
      const s=Math.max(4,Math.min(60,+n.dataset.zyMarquee||18));
      const x=-((now/1000*s)%Math.max(600,n.scrollWidth/2));
      n.style.transform=`translate3d(${x}px,0,0)`;
    }
    for(const n of parallax){
      const r=n.getBoundingClientRect(),amt=Math.max(2,Math.min(28,+n.dataset.zyParallax||10));
      if(r.bottom>0&&r.top<innerHeight)n.style.transform=`translate3d(0,${(r.top-innerHeight/2)/innerHeight*amt}px,0)`;
    }
    requestAnimationFrame(tick);
  }
  if(marquees.length||parallax.length)requestAnimationFrame(tick);
})();
