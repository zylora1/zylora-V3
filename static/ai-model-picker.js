(() => {
  const modelSelect = document.querySelector('#aiModel');
  let assistantSelect = document.querySelector('#assistantModel');
  if (!assistantSelect && document.querySelector('#assistantTone')) {
    const label = document.createElement('label');
    label.textContent = 'AI model';
    assistantSelect = document.createElement('select');
    assistantSelect.id = 'assistantModel';
    assistantSelect.innerHTML = '<option value="">Loading available models…</option>';
    label.appendChild(assistantSelect);
    document.querySelector('#assistantTone').closest('label')?.before(label);
  }
  async function load() {
    try {
      const response = await fetch('/api/ai/models', { credentials: 'same-origin' });
      if (!response.ok) return;
      const items = (await response.json()).items || [];
      const fill = (el, selected) => {
        if (!el) return;
        el.innerHTML = items.length ? items.map(m => `<option value="${String(m.id).replaceAll('"','&quot;')}">${m.name} · ${m.tier}</option>`).join('') : '<option value="">Provider unavailable</option>';
        if (selected) el.value = selected;
      };
      fill(modelSelect, null);
      if (assistantSelect) {
        const site = document.querySelector('#assistantSite')?.value;
        if (site) {
          const cfg = await (await fetch(`/api/sites/${site}/assistant/settings`, { credentials: 'same-origin' })).json();
          fill(assistantSelect, cfg.model);
        } else fill(assistantSelect, null);
      }
    } catch (_) { /* provider availability is surfaced by the backend */ }
  }
  // The existing AI-creation handler remains authoritative; this adds the
  // validated model to its request without duplicating the creation flow.
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : input?.url || '';
    if (url === '/api/sites' && init?.method === 'POST' && typeof init.body === 'string' && modelSelect?.value) {
      try { const body = JSON.parse(init.body); if (body.origin === 'AI') { body.model = modelSelect.value; init = {...init, body: JSON.stringify(body)}; } } catch (_) {}
    }
    if (url.includes('/assistant/settings') && init?.method === 'PATCH' && typeof init.body === 'string' && assistantSelect?.value) {
      try { const body = JSON.parse(init.body); body.model = assistantSelect.value; init = {...init, body: JSON.stringify(body)}; } catch (_) {}
    }
    return originalFetch.call(this, input, init);
  };
  load();
  document.querySelector('#assistantSite')?.addEventListener('change', load);
})();
