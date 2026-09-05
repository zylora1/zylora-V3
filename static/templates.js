(async () => {
  const count = document.getElementById('templateCount');
  const catalogue = document.getElementById('catalogue');

  let currentUser = null;
  try {
    const authRes = await fetch('/api/auth/me', { headers: { Accept: 'application/json' } });
    if (authRes.ok) {
      currentUser = await authRes.json();
      const authLinks = document.querySelector('header div');
      if (authLinks && currentUser?.id) {
        authLinks.innerHTML = '<a class="cta" href="/dashboard">Go to Dashboard</a>';
      }
    }
  } catch {}

  try {
    const r = await fetch('/api/templates', { headers: { Accept: 'application/json' } });
    const j = await r.json();
    const items = Array.isArray(j.items) ? j.items : [];
    if (count) count.textContent = String(items.length);
    if (!catalogue) return;
    if (!items.length) return;

    catalogue.innerHTML = `
      <div class="catalogue-grid">
        ${items.map(t => `
          <article class="catalogue-card">
            <a class="catalogue-image" href="/template-preview/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">
              <img src="${escapeHtml(t.preview)}" alt="Rendered preview of ${escapeHtml(t.name)}" loading="lazy">
            </a>
            <div class="catalogue-meta">
              <div>
                <span>${escapeHtml(t.category || t.industry || 'Template')}</span>
                <span>${Number(t.pages || 1)} page${Number(t.pages || 1) === 1 ? '' : 's'}</span>
              </div>
              <h2>${escapeHtml(t.name)}</h2>
              <p>${escapeHtml(t.description || t.art_direction || t.style || 'Independently art-directed website')}</p>
              <div class="catalogue-actions">
                <a href="/template-preview/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">Preview</a>
                <a class="cta" data-slug="${escapeHtml(t.slug)}" href="${currentUser ? `/dashboard?view=websites` : `/signup?template=${encodeURIComponent(t.slug)}`}">Use template</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    if (currentUser) {
      document.querySelectorAll('[data-slug]').forEach(btn => {
        btn.addEventListener('click', async e => {
          e.preventDefault();
          const slug = btn.dataset.slug;
          btn.textContent = 'Creating…';
          btn.style.pointerEvents = 'none';
          try {
            const tmpl = items.find(x => x.slug === slug) || {};
            const res = await fetch('/api/sites', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                origin: 'TEMPLATE',
                template_slug: slug,
                business_name: tmpl.name ? `${tmpl.name} Site` : 'My Website',
                style: 'swiss-minimal'
              })
            });
            const data = await res.json();
            if (res.ok && data.id) {
              window.location.href = `/editor/${encodeURIComponent(data.id)}`;
            } else {
              alert(data.detail || 'Could not create website from template');
              btn.textContent = 'Use template';
              btn.style.pointerEvents = '';
            }
          } catch (err) {
            alert(err.message || 'Error creating website');
            btn.textContent = 'Use template';
            btn.style.pointerEvents = '';
          }
        });
      });
    }
  } catch (err) {
    if (count) count.textContent = '—';
  }
})();

function escapeHtml(v) {
  return String(v ?? '').replace(/[&<>'"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c]));
}

