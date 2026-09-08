(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const header = $('[data-header]');
  const menu = $('.zr-menu-toggle');
  const nav = $('#primaryNav');
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
  };
  menu?.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      if ($('#proModal')?.classList.contains('is-open')) closePro();
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); }, { passive: true });
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 14), { passive: true });

  // SonarGrid reconstruction: bounded canvas, capped DPR, offscreen pause and reduced-motion support.
  const field = $('[data-sonar-field]');
  const canvas = $('#sonarCanvas');
  if (field && canvas) {
    const context = canvas.getContext('2d', { alpha: false });
    let width = 0, height = 0, dpr = 1, frame = 0, visible = true;
    const waves = [];
    const labels = $$('.zr-signal-label', field);
    const resize = () => {
      const rect = field.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const draw = () => {
      context.fillStyle = '#000000';
      context.fillRect(0, 0, width, height);
      const spacing = width < 500 ? 27 : 31;
      const centerX = width / 2;
      const centerY = height / 2;
      context.fillStyle = 'rgba(255,255,255,.68)';
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const distance = Math.hypot(x - centerX, y - centerY);
          const pulse = waves.reduce((value, wave) => {
            const radius = wave.progress * Math.max(width, height) * .68;
            return value + Math.max(0, 1 - Math.abs(distance - radius) / 52) * (1 - wave.progress) * .9;
          }, 0);
          const dot = Math.min(2.6, 1.25 + pulse * 2.1);
          context.globalAlpha = Math.min(.96, .4 + pulse);
          context.beginPath();
          context.arc(x, y, dot, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalAlpha = 1;
      waves.forEach(wave => {
        const radius = wave.progress * Math.max(width, height) * .68;
        context.beginPath();
        context.arc(wave.x, wave.y, radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(255,255,255,${Math.max(0, .42 * (1 - wave.progress))})`;
        context.lineWidth = 1.2;
        context.stroke();
        context.beginPath();
        context.arc(wave.x, wave.y, radius * .72, 0, Math.PI * 2);
        context.strokeStyle = `rgba(210,210,210,${Math.max(0, .18 * (1 - wave.progress))})`;
        context.lineWidth = 1;
        context.stroke();
      });
    };
    const tick = timestamp => {
      if (!visible || reduceMotion) { frame = 0; return; }
      waves.forEach(wave => { wave.progress += Math.min(.025, (timestamp - wave.last) / 5200); wave.last = timestamp; });
      while (waves.length && waves[0].progress >= 1) waves.shift();
      draw();
      if (waves.length) frame = requestAnimationFrame(tick); else frame = 0;
    };
    const spawnWave = (x, y) => {
      if (reduceMotion) { draw(); return; }
      waves.push({ x, y, progress: 0, last: performance.now() });
      while (waves.length > 4) waves.shift();
      labels.forEach((label, index) => {
        window.setTimeout(() => { label.classList.add('is-lit'); window.setTimeout(() => label.classList.remove('is-lit'), 480); }, index * 100);
      });
      if (!frame) frame = requestAnimationFrame(tick);
    };
    field.addEventListener('pointerdown', event => {
      if (event.target.closest('button')) return;
      const rect = field.getBoundingClientRect();
      spawnWave(event.clientX - rect.left, event.clientY - rect.top);
    });
    $('[data-sonar-trigger]')?.addEventListener('click', () => spawnWave(width / 2, height / 2));
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(field);
    const visibilityObserver = new IntersectionObserver(entries => {
      visible = Boolean(entries[0]?.isIntersecting);
      if (!visible && frame) { cancelAnimationFrame(frame); frame = 0; }
      if (visible && waves.length && !frame && !reduceMotion) frame = requestAnimationFrame(tick);
    }, { threshold: 0.01 });
    visibilityObserver.observe(field);
    resize();
  }

  const templateCopy = {
    all: ['01 / Northline Workshop', 'Objects for the<br/><i>everyday ritual.</i>', 'A considered starting point for a studio, maker or small brand with a clear point of view.', '#252525'],
    services: ['02 / Field Practice', 'Make the offer<br/><i>easy to enter.</i>', 'Put the service, proof and enquiry path in the order a real visitor needs them.', '#1c1c1c'],
    commerce: ['03 / Northline Shop', 'Give the product<br/><i>a clear stage.</i>', 'Make the thing, the reason and the next action visible without extra noise.', '#303030'],
    studio: ['04 / Workroom', 'Let the work<br/><i>lead the way.</i>', 'Create a visual home for selected work, the story behind it and an easy first conversation.', '#222222']
  };
  $$('.zr-template-tabs button').forEach(button => button.addEventListener('click', () => {
    $$('.zr-template-tabs button').forEach(item => item.classList.toggle('is-active', item === button));
    const content = templateCopy[button.dataset.templateTab] || templateCopy.all;
    $('[data-template-label]').textContent = content[0];
    $('[data-template-heading]').innerHTML = content[1];
    $('[data-template-copy]').textContent = content[2];
    $('[data-template-art]').style.background = content[3];
  }));

  const formatOffer = offer => offer.currency === 'INR'
    ? `₹${Math.round(Number(offer.amount_minor || 0) / 100).toLocaleString('en-IN')}`
    : `US$${Math.round(Number(offer.amount_minor || 0) / 100).toLocaleString('en-US')}`;
  const starterPrice = $('#starterRegionalPrice');
  const growthPrice = $('#growthRegionalPrice');
  const starterComparison = $('#starterComparisonPrice');
  const growthComparison = $('#growthComparisonPrice');
  const regionalNote = $('#regionalPriceNote');
  Promise.all(['STARTER', 'GROWTH'].map(plan => fetch(`/api/public/regional-price?plan=${plan}`).then(response => response.ok ? response.json() : null)))
    .then(([starter, growth]) => {
      if (starter) { const value = formatOffer(starter); if (starterPrice) starterPrice.textContent = value; if (starterComparison) starterComparison.textContent = value; }
      if (growth) { const value = formatOffer(growth); if (growthPrice) growthPrice.textContent = value; if (growthComparison) growthComparison.textContent = value; }
      if (regionalNote && starter) regionalNote.textContent = starter.billing_region === 'INDIA' ? 'India regional price · INR billing' : 'International regional price · USD billing';
    }).catch(() => {
      if (regionalNote) regionalNote.textContent = 'See plans for current regional pricing';
      if (starterPrice) starterPrice.textContent = 'See plans';
      if (growthPrice) growthPrice.textContent = 'See plans';
    });

  const modal = $('#proModal');
  const openPro = () => { modal?.classList.add('is-open'); modal?.setAttribute('aria-hidden', 'false'); $('#proName')?.focus(); };
  const closePro = () => { modal?.classList.remove('is-open'); modal?.setAttribute('aria-hidden', 'true'); };
  $('#openPro')?.addEventListener('click', openPro);
  $('#closePro')?.addEventListener('click', closePro);
  modal?.addEventListener('click', event => { if (event.target === modal) closePro(); });
  $('#proForm')?.addEventListener('submit', async event => {
    event.preventDefault();
    const message = $('#proMsg');
    message.textContent = 'Sending…';
    try {
      const response = await fetch('/api/pro/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: $('#proName').value, email: $('#proEmail').value, website_type: $('#proType').value, preferred_contact_time: $('#proTime').value, turnstile_token: window.ZyloraTurnstile?.getToken?.() || null }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.detail || 'Could not send enquiry');
      message.textContent = `Thanks — your reference is ${payload.lead_code}.`;
      event.target.reset();
    } catch (error) { message.textContent = error.message; }
    finally { window.ZyloraTurnstile?.reset?.(); }
  });
})();
