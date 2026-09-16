/* Registry-driven connector controls for the dashboard Integrations view. */
(function () {
  'use strict';

  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const css = `
    .agent-gateway-ui{margin:0 0 18px}.agent-gateway-ui .agent-registry-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:14px 0}.agent-gateway-ui .agent-registry-item{border:1px solid var(--z-border,#e3e7ee);border-radius:12px;padding:13px;background:var(--z-surface,#fff)}.agent-gateway-ui .agent-registry-item header{display:flex;align-items:center;gap:9px}.agent-gateway-ui .agent-registry-item img{width:25px;height:25px}.agent-gateway-ui .agent-registry-item p{margin:8px 0 0}.agent-gateway-ui .agent-registry-item small{display:block;margin-top:8px}.agent-gateway-ui .agent-connector-fields{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px}.agent-gateway-ui .agent-connector-fields select{min-height:76px}.agent-gateway-ui .agent-token{display:block;word-break:break-all;margin-top:8px;padding:9px;border-radius:8px;background:#101318;color:#d3ff75}.agent-gateway-ui .agent-list{display:grid;gap:7px;margin-top:12px}.agent-gateway-ui .agent-row{display:flex;justify-content:space-between;align-items:center;gap:10px;border-top:1px solid var(--z-border,#e3e7ee);padding-top:9px}.agent-gateway-ui .agent-row small{display:block}.agent-gateway-ui .agent-row button{white-space:nowrap}@media(max-width:720px){.agent-gateway-ui .agent-registry-grid,.agent-gateway-ui .agent-connector-fields{grid-template-columns:1fr}}
  `;

  function mount() {
    const view = document.getElementById('integrations');
    if (!view || document.getElementById('agentGatewayUi')) return;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    const card = document.createElement('article');
    card.id = 'agentGatewayUi';
    card.className = 'settings-card agent-gateway-ui';
    card.innerHTML = `
      <div class="card-head"><div><span class="integration-badge">Universal AI / agent access</span><h2>Connect compatible tools</h2></div><span class="status-badge" data-agent-status>Loading…</span></div>
      <p class="muted-copy">Create a scoped connector for compatible MCP or REST clients. Tokens are shown once and can be revoked.</p>
      <div class="agent-registry-grid" data-agent-registry></div>
      <form data-agent-form><div class="agent-connector-fields"><label>Connector name<input name="name" maxlength="120" placeholder="My automation" required></label><label>Site access<select name="site_ids" multiple size="3"></select></label></div><div class="muted-copy">Choose one or more sites for least-privilege access. Use “all sites” only when the connector needs the whole workspace.</div><div class="check-row"><input name="all_sites" type="checkbox"><span>Allow all current and future sites</span></div><div class="check-row"><input name="account" type="checkbox" checked><span>Account read</span></div><div class="check-row"><input name="sites" type="checkbox" checked><span>Sites read</span></div><div class="check-row"><input name="edit" type="checkbox"><span>Studio edits (typed patches)</span></div><div class="form-actions"><button class="accent-btn" type="submit">Create connector token</button></div><div class="status-msg" data-agent-message aria-live="polite"></div></form>
      <div class="agent-list" data-agent-list></div>`;
    const anchor = view.querySelector('.settings-grid');
    view.insertBefore(card, anchor || view.firstChild);
    card.querySelector('[data-agent-form]').addEventListener('submit', createConnector);
    card.querySelector('[data-agent-list]').addEventListener('click', (event) => {
      const button = event.target.closest('[data-agent-revoke]');
      if (button) revokeConnector(button.dataset.agentRevoke);
    });
    loadRegistry();
    loadSites();
    loadConnectors();
  }

  async function loadRegistry() {
    const card = document.getElementById('agentGatewayUi');
    if (!card) return;
    try {
      const payload = await api('/api/agent/registry');
      const surface = payload.registry?.surface || {};
      const assets = Object.fromEntries((payload.brand_assets?.assets || []).map((item) => [item.id, item]));
      const items = payload.registry?.integrations || [];
      card.querySelector('[data-agent-status]').textContent = surface.status || 'AVAILABLE';
      card.querySelector('[data-agent-registry]').innerHTML = items.map((item) => {
        const asset = item.icon_asset ? assets[item.icon_asset] : null;
        const icon = asset ? `<img src="${esc(asset.path)}" alt="" aria-hidden="true">` : '';
        return `<div class="agent-registry-item"><header>${icon}<strong>${esc(item.label)}</strong></header><small>${esc(item.status || 'UNVERIFIED')}</small><p class="muted-copy">${esc(item.notes || item.connection || 'Connection details are shown after verification.')}</p></div>`;
      }).join('');
    } catch (error) {
      card.querySelector('[data-agent-status]').textContent = 'UNAVAILABLE';
      card.querySelector('[data-agent-message]').textContent = error.message;
    }
  }

  async function loadSites() {
    const select = document.querySelector('#agentGatewayUi select[name="site_ids"]');
    if (!select) return;
    try {
      const payload = await api('/api/sites');
      select.innerHTML = (payload.items || []).map((site) => `<option value="${esc(site.id)}">${esc(site.business_name || site.name)}</option>`).join('');
    } catch (error) {
      const message = document.querySelector('#agentGatewayUi [data-agent-message]');
      if (message) message.textContent = error.message;
    }
  }

  async function loadConnectors() {
    const list = document.querySelector('#agentGatewayUi [data-agent-list]');
    if (!list) return;
    try {
      const payload = await api('/api/agent/connectors');
      list.innerHTML = (payload.items || []).map((item) => `<div class="agent-row"><div><b>${esc(item.name)}</b><small>${esc(item.status)} · ${esc((item.scopes || []).join(', '))}</small></div>${item.status === 'ACTIVE' ? `<button class="ghost-btn inline-danger" type="button" data-agent-revoke="${esc(item.id)}">Revoke</button>` : ''}</div>`).join('') || '<p class="muted-copy">No connector tokens yet.</p>';
    } catch (error) {
      list.innerHTML = `<p class="muted-copy">${esc(error.message)}</p>`;
    }
  }

  async function createConnector(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.querySelector('[data-agent-message]');
    const values = new FormData(form);
    const scopes = [];
    if (form.elements.account.checked) scopes.push('account.read');
    if (form.elements.sites.checked) scopes.push('sites.read');
    if (form.elements.edit.checked) scopes.push('sites.edit');
      const siteIds = [...form.elements.site_ids.selectedOptions].map((option) => option.value);
    try {
      const created = await api('/api/agent/connectors', { method: 'POST', body: JSON.stringify({ name: values.get('name'), scopes, site_ids: siteIds, all_sites: form.elements.all_sites.checked }) });
      message.innerHTML = `Copy this token now; it will not be shown again:<code class="agent-token">${esc(created.token)}</code>`;
      form.reset();
      await loadConnectors();
    } catch (error) {
      message.textContent = error.message;
    }
  }

  async function revokeConnector(id) {
    try {
      await api(`/api/agent/connectors/${encodeURIComponent(id)}/revoke`, { method: 'POST' });
      await loadConnectors();
    } catch (error) {
      const message = document.querySelector('#agentGatewayUi [data-agent-message]');
      if (message) message.textContent = error.message;
    }
  }

  window.addEventListener('DOMContentLoaded', mount, { once: true });
})();
