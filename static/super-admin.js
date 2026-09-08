// Zylora SUPER_ADMIN Control Plane Runtime
const state = {
  me: null,
  adminUsers: [],
  adminTemplates: [],
  adminLeads: [],
  adminPlans: [],
  adminFreelancers: [],
  adminSupport: [],
  adminPlatformBlog: [],
  adminCampaigns: [],
  adminPayments: [],
  adminIntegrations: [],
  adminHealth: null
  ,adminIntelligence: []
};

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

function toast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3200);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }
}

async function api(path, opts = {}) {
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
  const csrf = sessionStorage.getItem('csrf') || window.__CSRF;
  if (csrf) headers['X-CSRF-Token'] = csrf;
  const res = await fetch(path, { credentials: 'same-origin', ...opts, headers });
  if (res.status === 401) {
    location.href = '/login?next=' + encodeURIComponent(location.pathname);
    throw new Error('Authentication required');
  }
  if (res.status === 403) {
    const j = await res.json().catch(() => ({}));
    const msg = typeof j.detail === 'string' ? j.detail : (j.detail?.message || 'Access denied');
    throw new Error(msg);
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Request failed' }));
    throw new Error(typeof err.detail === 'string' ? err.detail : (err.detail?.[0]?.msg || err.detail?.message || 'Request failed'));
  }
  return res.json();
}

// Navigation & Tab Switching
const TAB_MAP = {
  'adminOverview': { title: 'Platform Administration', sub: 'Overview and operating metrics across all platform operations.' },
  'adminIntelligence': { title: 'Zylora Intelligence', sub: 'Read-only, server-authorized operational answers across the platform.' },
  'adminUsers': { title: 'Platform User Management', sub: 'Inspect accounts, adjust roles, restrict or restore users.' },
  'adminTemplates': { title: 'Template Catalogue & Universal Import', sub: 'Inspect verification readiness, toggle visibility, or import projects.' },
  'adminPlatformBlog': { title: 'Zylora Blog CMS', sub: 'Draft, publish, edit and moderate official blog content.' },
  'adminPlans': { title: 'Plans & Pricing', sub: 'Configure limits, quotas, and regional pricing tiers.' },
  'adminCampaigns': { title: 'Platform Campaigns', sub: 'Broadcast announcements and marketing campaigns across platform channels.' },
  'adminLeads': { title: 'Global Platform Leads', sub: 'Unified enquiry pipeline across all platform websites.' },
  'adminFreelancers': { title: 'Freelancer Network Moderation', sub: 'Review applications, edit public profiles, and moderate freelancers.' },
  'adminSupport': { title: 'Platform Support Desk', sub: 'Triage customer inquiries and live support tickets.' },
  'adminPro': { title: 'Managed CRM', sub: 'Bespoke customer requests and enterprise enquiries.' },
  'adminPayments': { title: 'Platform Payments & Revenue', sub: 'Audited Razorpay transactions, credit top-ups, and export revenue.' },
  'adminIntegrations': { title: 'Ecosystem Integrations', sub: 'Third-party API health, authentication, and webhook delivery status.' },
  'adminHealth': { title: 'Platform & Infrastructure Health', sub: 'Database latency, connection pooling, and operational engine status.' },
  'adminAudit': { title: 'Platform Audit Log', sub: 'Security audit trail of administrative operations.' },
  'adminSystem': { title: 'System Configuration', sub: 'Global platform settings, payment IDs, and guardrails.' }
};

const TAB_ROUTES = {
  'adminOverview': '/super-admin',
  'adminIntelligence': '/super-admin/intelligence',
  'adminUsers': '/super-admin/users',
  'adminTemplates': '/super-admin/templates',
  'adminPlatformBlog': '/super-admin/blogs',
  'adminPlans': '/super-admin/plans',
  'adminCampaigns': '/super-admin/campaigns',
  'adminLeads': '/super-admin/leads',
  'adminFreelancers': '/super-admin/freelancers',
  'adminSupport': '/super-admin/support',
  'adminPro': '/super-admin/pro',
  'adminPayments': '/super-admin/payments',
  'adminIntegrations': '/super-admin/integrations',
  'adminHealth': '/super-admin/health',
  'adminAudit': '/super-admin/audit',
  'adminSystem': '/super-admin/system'
};

function switchAdminTab(tabId, pushState = true) {
  $$('.rail-btn[data-admin-tab]').forEach(b => {
    b.classList.toggle('active', b.dataset.adminTab === tabId);
  });
  $$('.admin-pane').forEach(p => {
    p.classList.toggle('active', p.id === tabId);
  });
  const meta = TAB_MAP[tabId] || TAB_MAP['adminOverview'];
  if ($('#paneTitle')) $('#paneTitle').textContent = meta.title;
  if ($('#paneSubtitle')) $('#paneSubtitle').textContent = meta.sub;
  if (pushState) {
    const route = TAB_ROUTES[tabId] || '/super-admin';
    if (location.pathname !== route) {
      history.pushState({ tabId }, '', route);
    }
  }
}

function loadTabData(tabId) {
  if (tabId === 'adminOverview') loadAdminOverview();
  else if (tabId === 'adminIntelligence') loadAdminIntelligence();
  else if (tabId === 'adminUsers') loadAdminUsers();
  else if (tabId === 'adminTemplates') loadAdminTemplates();
  else if (tabId === 'adminLeads') loadAdminLeads();
  else if (tabId === 'adminPlans') loadAdminPlans();
  else if (tabId === 'adminPlatformBlog') loadAdminPlatformBlog();
  else if (tabId === 'adminCampaigns') loadAdminCampaigns();
  else if (tabId === 'adminFreelancers') loadAdminFreelancers();
  else if (tabId === 'adminSupport') loadAdminSupport();
  else if (tabId === 'adminPro') loadAdminPro();
  else if (tabId === 'adminPayments') loadAdminPayments();
  else if (tabId === 'adminIntegrations') loadAdminIntegrations();
  else if (tabId === 'adminHealth') loadAdminHealth();
  else if (tabId === 'adminAudit') loadAdminAudit();
  else if (tabId === 'adminSystem') loadAdminSystem();
}

// Handle subpaths /super-admin/users, /super-admin/templates, etc.
function syncRouteFromUrl() {
  const path = location.pathname.replace(/\/+$/, '');
  let targetTab = 'adminOverview';
  if (path === '/super-admin/intelligence') targetTab = 'adminIntelligence';
  else if (path === '/super-admin/users') targetTab = 'adminUsers';
  else if (path === '/super-admin/templates') targetTab = 'adminTemplates';
  else if (path === '/super-admin/blogs' || path === '/super-admin/blog') targetTab = 'adminPlatformBlog';
  else if (path === '/super-admin/pricing' || path === '/super-admin/plans') targetTab = 'adminPlans';
  else if (path === '/super-admin/campaigns') targetTab = 'adminCampaigns';
  else if (path === '/super-admin/leads') targetTab = 'adminLeads';
  else if (path === '/super-admin/freelancers') targetTab = 'adminFreelancers';
  else if (path === '/super-admin/support') targetTab = 'adminSupport';
  else if (path === '/super-admin/pro' || path === '/super-admin/crm') targetTab = 'adminPro';
  else if (path === '/super-admin/payments') targetTab = 'adminPayments';
  else if (path === '/super-admin/integrations') targetTab = 'adminIntegrations';
  else if (path === '/super-admin/health') targetTab = 'adminHealth';
  else if (path === '/super-admin/audit') targetTab = 'adminAudit';
  else if (path === '/super-admin/system') targetTab = 'adminSystem';
  else targetTab = 'adminOverview';

  switchAdminTab(targetTab, false);
  loadTabData(targetTab);
}

// 1. Overview
async function loadAdminOverview() {
  try {
    const o = await api('/api/admin/overview');
    if ($('#statTotalUsers')) $('#statTotalUsers').textContent = o.users ?? 0;
    if ($('#statActiveSites')) $('#statActiveSites').textContent = o.live_sites ?? 0;
    if ($('#statTotalTemplates')) $('#statTotalTemplates').textContent = o.templates ?? 43;
    if ($('#statTotalLeads')) $('#statTotalLeads').textContent = o.leads ?? 0;
    
    // Additional 4 KPIs
    if ($('#statRevenue')) $('#statRevenue').textContent = o.revenue_30d?.formatted || (o.revenue_30d?.amount_inr_minor ? '₹' + Math.round(o.revenue_30d.amount_inr_minor/100).toLocaleString() : '₹0');
    if ($('#statActiveUsers')) $('#statActiveUsers').textContent = o.active_users_30d ?? 0;
    if ($('#statAiUsage')) $('#statAiUsage').textContent = `${o.ai_stats?.generations_24h ?? 0} calls`;
    if ($('#statAiTokens')) $('#statAiTokens').textContent = `${Number(o.ai_stats?.tokens_24h ?? 0).toLocaleString()} tokens consumed`;
    if ($('#statDbLatency')) $('#statDbLatency').textContent = `DB Latency: ${(o.health?.db_latency_ms == null || o.health?.db_latency_ms < 1) ? '< 1ms' : `${o.health?.db_latency_ms}ms`}`;
    
    // User Growth Widget
    if (o.user_growth) {
      if ($('#overviewGrowthBadge')) $('#overviewGrowthBadge').textContent = `+${o.user_growth.growth_rate_pct ?? 0}%`;
      if ($('#growth7dVal')) $('#growth7dVal').textContent = o.user_growth.new_users_7d ?? 0;
      if ($('#growth30dVal')) $('#growth30dVal').textContent = o.user_growth.new_users_30d ?? 0;
      const pct7d = Math.min(100, Math.round(((o.user_growth.new_users_7d || 0) / Math.max(1, o.user_growth.new_users_30d || 1)) * 100));
      if ($('#growth7dBar')) $('#growth7dBar').style.width = `${pct7d}%`;
      if ($('#growth30dBar')) $('#growth30dBar').style.width = '100%';
    }

    // Conversion Funnel Widget
    if (o.funnel) {
      if ($('#overviewFunnelRate')) $('#overviewFunnelRate').textContent = `${o.funnel.conversion_rate_pct ?? 0}% conversion`;
      if ($('#funnelVisitors')) $('#funnelVisitors').textContent = (o.funnel.visitors ?? 0).toLocaleString();
      if ($('#funnelLeads')) $('#funnelLeads').textContent = (o.funnel.leads ?? 0).toLocaleString();
      if ($('#funnelPaid')) $('#funnelPaid').textContent = (o.funnel.paid_customers ?? 0).toLocaleString();
    }

    // AI Usage Stats
    if (o.ai_stats) {
      if ($('#aiCreatorTokens')) $('#aiCreatorTokens').textContent = `${Number(o.ai_stats.creator_tokens ?? 0).toLocaleString()} tokens`;
      if ($('#aiAssistantTokens')) $('#aiAssistantTokens').textContent = `${Number(o.ai_stats.assistant_tokens ?? 0).toLocaleString()} tokens`;
      if ($('#aiTotalGenerations')) $('#aiTotalGenerations').textContent = o.ai_stats.total_generations ?? 0;
    }

    // Messaging Stats
    if (o.messaging) {
      if ($('#msgSentCount')) $('#msgSentCount').textContent = o.messaging.sent ?? 0;
      if ($('#msgFailedCount')) $('#msgFailedCount').textContent = o.messaging.failed ?? 0;
      if ($('#msgSuccessRate')) $('#msgSuccessRate').textContent = `${o.messaging.success_rate_pct ?? 100}%`;
    }

    // Audit Stream
    const stream = $('#overviewAuditStream');
    if (stream && o.recent_audit) {
      stream.innerHTML = o.recent_audit.map(a => `
        <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;">
          <div>
            <b>${escapeHtml(a.action.replaceAll('_', ' '))}</b>
            <small style="display:block;color:var(--zy-text-secondary);font-size:11px;">Target: ${escapeHtml(a.target_type || 'system')} ${a.target_id ? `· ID: ${escapeHtml(a.target_id).slice(0, 12)}` : ''}</small>
          </div>
          <small style="color:var(--zy-text-secondary);font-size:11.5px;">${new Date(a.created_at).toLocaleString()}</small>
        </div>
      `).join('') || '<p class="muted-copy">No recent audit events.</p>';
    }
  } catch (e) {
    console.error('Failed to load admin overview:', e);
  }
}

// Super Admin Intelligence Assistant
function appendAdminAssistantMessage(kind, text, data = null) {
  const box = $('#adminAssistantMessages');
  if (!box) return;
  const item = document.createElement('div');
  item.style.cssText = 'padding:12px 14px;border-radius:12px;border:1px solid var(--zy-border);background:' + (kind === 'user' ? 'var(--zy-bg-card-inner)' : 'rgba(185,255,56,.08)') + ';';
  item.innerHTML = `<small style="display:block;color:var(--zy-text-secondary);margin-bottom:4px;">${kind === 'user' ? 'You' : 'Zylora Intelligence'}</small><div>${escapeHtml(text)}</div>`;
  if (data?.tool_calls?.length) {
    const meta = document.createElement('small');
    meta.style.cssText = 'display:block;color:var(--zy-text-secondary);margin-top:8px;';
    meta.textContent = `Source: ${data.tool_calls.join(', ')} · as of ${data.as_of || 'now'}`;
    item.appendChild(meta);
  }
  box.appendChild(item);
  box.scrollTop = box.scrollHeight;
}

async function loadAdminIntelligence() {
  const form = $('#adminAssistantForm');
  if (!form || form.dataset.bound === '1') return;
  form.dataset.bound = '1';
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = $('#adminAssistantInput');
    const msg = $('#adminAssistantMsg');
    const value = (input?.value || '').trim();
    if (!value) return;
    appendAdminAssistantMessage('user', value);
    if (input) input.value = '';
    if (msg) msg.textContent = 'Checking approved platform data…';
    try {
      const result = await api('/api/super-admin/assistant', { method: 'POST', body: JSON.stringify({ message: value }) });
      appendAdminAssistantMessage('assistant', result.answer || 'No answer returned.', result);
      if (msg) msg.textContent = 'Grounded answer returned.';
    } catch (err) {
      if (msg) msg.textContent = err.message;
    }
  });
}

// 2. Users Management
async function loadAdminUsers() {
  try {
    const r = await api('/api/admin/users');
    state.adminUsers = r.items || [];
    renderAdminUsers();
  } catch (e) { toast(e.message); }
}

function renderAdminUsers() {
  const search = ($('#adminUserSearch')?.value || '').toLowerCase().trim();
  const roleFilter = $('#adminUserRoleFilter')?.value || '';
  const planFilter = $('#adminUserPlanFilter')?.value || '';
  const statusFilter = $('#adminUserStatusFilter')?.value || '';
  const filtered = (state.adminUsers || []).filter(x => {
    if (search && !(`${x.name} ${x.email} ${x.id}`).toLowerCase().includes(search)) return false;
    if (roleFilter && x.role !== roleFilter) return false;
    if (planFilter && x.plan !== planFilter) return false;
    if (statusFilter && (x.status || 'ACTIVE') !== statusFilter) return false;
    return true;
  });

  const tbody = $('#adminUserRows');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(x => {
    const isRestricted = (x.status || 'ACTIVE') === 'RESTRICTED';
    return `
      <tr>
        <td>
          <b>${escapeHtml(x.name)}</b>
          <small style="display:block;color:var(--zy-text-secondary);font-size:11px;">${escapeHtml(x.email)} · <code title="${escapeHtml(x.id)}">${escapeHtml((x.id || '').slice(0, 8))}…${escapeHtml((x.id || '').slice(-4))}</code></small>
        </td>
        <td><span class="status-badge ${x.role === 'SUPER_ADMIN' ? 'pass' : 'info'}">${escapeHtml(x.role)}</span></td>
        <td><span class="status-badge info">${escapeHtml(x.plan)}</span></td>
        <td><b>${x.ai_credits ?? 0}</b> <small style="color:var(--z-text-muted);">AI</small></td>
        <td><span class="status-badge ${isRestricted ? 'fail' : 'pass'}">${isRestricted ? 'RESTRICTED' : 'ACTIVE'}</span></td>
        <td><small style="color:var(--z-text-muted);">${new Date(x.created_at).toLocaleDateString()}</small></td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn-sm btn-secondary" data-admin-inspect="${x.id}">Inspect</button>
            ${x.id !== state.me?.id && x.role !== 'SUPER_ADMIN' ? `
              <button class="btn-sm btn-secondary" data-admin-toggle-status="${x.id}">${isRestricted ? 'Restore' : 'Restrict'}</button>
              <button class="btn-sm btn-danger" data-admin-delete-user="${x.id}">Delete</button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('') || '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--z-text-muted);">No users match filter criteria.</td></tr>';

  $$('[data-admin-inspect]').forEach(b => b.onclick = () => openAdminUserDetail(b.dataset.adminInspect));
  $$('[data-admin-toggle-status]').forEach(b => b.onclick = () => toggleAdminUserStatus(b.dataset.adminToggleStatus));
  $$('[data-admin-delete-user]').forEach(b => b.onclick = () => deleteAdminUser(b.dataset.adminDeleteUser));
}

async function openAdminUserDetail(userId) {
  openModal('adminUserDetailModal');
  const body = $('#adminUserDetailBody');
  body.innerHTML = '<p class="muted-copy">Loading complete User 360 profile…</p>';
  try {
    const data = await api(`/api/admin/users/${userId}/360`);
    const u = data.user;
    $('#adminUserDetailTitle').textContent = `${u.name} · User 360 Inspection`;
    const isRestricted = (u.status || 'ACTIVE') === 'RESTRICTED';
    
    body.innerHTML = `
      <!-- User Summary & Quick Actions -->
      <div style="background:var(--zy-bg-card-inner);padding:16px;border-radius:10px;border:1px solid var(--zy-border);margin-bottom:18px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="margin:0 0 4px 0;font-size:16px;">${escapeHtml(u.name)}</h3>
            <p style="margin:0;color:var(--zy-text-secondary);font-size:12px;">${escapeHtml(u.email)} · ID: <code title="${escapeHtml(u.id)}" style="cursor:help;">${escapeHtml((u.id || '').slice(0, 8))}…${escapeHtml((u.id || '').slice(-4))}</code></p>
            <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
              <span class="status-badge ${u.role === 'SUPER_ADMIN' ? 'pass' : 'info'}">${escapeHtml(u.role)}</span>
              <span class="status-badge info">${escapeHtml(u.plan)} Plan</span>
              <span class="status-badge ${isRestricted ? 'fail' : 'pass'}">${isRestricted ? 'RESTRICTED' : 'ACTIVE'}</span>
              <span class="status-badge neutral">Joined ${new Date(u.created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <a class="ghost-btn compact-btn" href="/dashboard?stay=1" target="_blank" title="Impersonate / Customer view">Customer View ↗</a>
            <button class="ghost-btn compact-btn" id="btnUser360Plan" data-user-id="${u.id}">Change Plan</button>
            <button class="ghost-btn compact-btn" id="btnUser360Credits" data-user-id="${u.id}">Adjust Credits</button>
            ${u.id !== state.me?.id && u.role !== 'SUPER_ADMIN' ? `
              <button class="ghost-btn compact-btn ${isRestricted ? 'accent-btn' : 'inline-danger'}" id="btnUser360Status" data-user-id="${u.id}">
                ${isRestricted ? 'Restore User' : 'Restrict User'}
              </button>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px;">
        <div class="panel" style="padding:12px;background:var(--zy-bg-card-inner);">
          <small style="color:var(--zy-text-secondary);font-size:10.5px;text-transform:uppercase;">AI Wallet</small>
          <b style="display:block;margin-top:4px;font-size:18px;">${data.wallet?.ai_credits ?? u.ai_credits}</b>
          <span style="font-size:11px;color:var(--zy-text-secondary);">${data.ai_transactions?.length || 0} usage records</span>
        </div>
        <div class="panel" style="padding:12px;background:var(--zy-bg-card-inner);">
          <small style="color:var(--zy-text-secondary);font-size:10.5px;text-transform:uppercase;">Lead Credits</small>
          <b style="display:block;margin-top:4px;font-size:18px;">${data.wallet?.lead_credits ?? u.lead_credits ?? 0}</b>
          <span style="font-size:11px;color:var(--zy-text-secondary);">${data.leads?.length || 0} leads received</span>
        </div>
        <div class="panel" style="padding:12px;background:var(--zy-bg-card-inner);">
          <small style="color:var(--zy-text-secondary);font-size:10.5px;text-transform:uppercase;">Websites</small>
          <b style="display:block;margin-top:4px;font-size:18px;">${data.sites?.length || 0}</b>
          <span style="font-size:11px;color:var(--zy-text-secondary);">${(data.sites || []).filter(s => s.status==='LIVE').length} live</span>
        </div>
        <div class="panel" style="padding:12px;background:var(--zy-bg-card-inner);">
          <small style="color:var(--zy-text-secondary);font-size:10.5px;text-transform:uppercase;">Platform Orders</small>
          <b style="display:block;margin-top:4px;font-size:18px;">${data.orders?.length || 0}</b>
          <span style="font-size:11px;color:var(--zy-text-secondary);">${data.messaging_deliveries?.length || 0} notifications</span>
        </div>
      </div>

      <!-- Associated Websites -->
      <h3 style="margin:16px 0 8px;font-size:13.5px;color:var(--zy-text-primary);">Websites (${data.sites?.length || 0})</h3>
      <div class="stack-list" style="margin-bottom:18px;">
        ${(data.sites || []).map(s => `
          <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;">
            <div>
              <b>${escapeHtml(s.business_name)}</b>
              <small style="display:block;color:var(--zy-text-secondary);">${escapeHtml(s.slug)} · <span class="status-badge ${s.status==='LIVE'?'pass':'info'}">${s.status}</span> · Origin: ${s.origin}</small>
            </div>
            <div style="display:flex;gap:8px;">
              <a class="ghost-btn compact-btn" href="/api/sites/${s.id}/preview" target="_blank">Preview</a>
              <a class="accent-btn compact-btn" href="/editor/${s.id}" target="_blank">Editor</a>
            </div>
          </div>
        `).join('') || '<p class="muted-copy">No websites created yet.</p>'}
      </div>

      <!-- Orders & Payments -->
      <h3 style="margin:16px 0 8px;font-size:13.5px;color:var(--zy-text-primary);">Orders &amp; Payments (${data.orders?.length || 0})</h3>
      <div class="stack-list" style="margin-bottom:18px;">
        ${(data.orders || []).map(o => `
          <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;">
            <div>
              <b>${escapeHtml(o.order_kind || o.plan || 'Order')} · ${o.currency || 'USD'} ${(Number(o.amount_minor || o.amount || 0)/100).toFixed(2)}</b>
              <small style="display:block;color:var(--zy-text-secondary);">Ref: ${escapeHtml(o.razorpay_order_id || o.id)} · Status: <span class="status-badge pass">${o.status}</span></small>
            </div>
            <small style="color:var(--zy-text-secondary);">${new Date(o.created_at).toLocaleDateString()}</small>
          </div>
        `).join('') || '<p class="muted-copy">No payment records found.</p>'}
      </div>

      <!-- Notification Deliveries -->
      <h3 style="margin:16px 0 8px;font-size:13.5px;color:var(--zy-text-primary);">Messaging &amp; Notification History (${(data.messaging?.deliveries || data.messaging_deliveries || []).length})</h3>
      <div class="stack-list" style="margin-bottom:18px;">
        ${(data.messaging?.deliveries || data.messaging_deliveries || []).map(m => `
          <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;">
            <div>
              <b>${escapeHtml(m.channel || 'EMAIL')} · To: ${escapeHtml(m.recipient || m.destination || '')}</b>
              <small style="display:block;color:var(--zy-text-secondary);">Status: ${escapeHtml(m.status)} · Attempts: ${m.attempt_count ?? m.attempts ?? 1}</small>
            </div>
            <small style="color:var(--zy-text-secondary);">${new Date(m.created_at).toLocaleString()}</small>
          </div>
        `).join('') || '<p class="muted-copy">No notifications delivered to this account yet.</p>'}
      </div>

      <!-- Audit Activity -->
      <h3 style="margin:16px 0 8px;font-size:13.5px;color:var(--zy-text-primary);">Security &amp; Operational Audit Trail</h3>
      <div class="stack-list">
        ${(data.activity || data.audit || []).map(a => `
          <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;">
            <div>
              <b>${escapeHtml(a.action.replaceAll('_', ' '))}</b>
              <small style="display:block;color:var(--zy-text-secondary);">${escapeHtml(a.object_type || a.target_type || '')} ${a.object_id || a.target_id ? `· ${escapeHtml(a.object_id || a.target_id).slice(0, 12)}` : ''}</small>
            </div>
            <small style="color:var(--zy-text-secondary);">${new Date(a.created_at).toLocaleString()}</small>
          </div>
        `).join('') || '<p class="muted-copy">No audit events recorded for this user.</p>'}
      </div>
    `;

    // Wire quick actions
    $('#btnUser360Plan')?.addEventListener('click', async () => {
      const newPlan = prompt('Enter new plan (FREE, STARTER, GROWTH, PRO):', u.plan);
      if (!newPlan || newPlan === u.plan) return;
      try {
        await api(`/api/admin/users/${userId}`, { method: 'PUT', body: JSON.stringify({ plan: newPlan.toUpperCase() }) });
        toast(`Plan updated to ${newPlan.toUpperCase()}`);
        openAdminUserDetail(userId);
        loadAdminUsers();
      } catch (err) { toast(err.message); }
    });

    $('#btnUser360Credits')?.addEventListener('click', async () => {
      const deltaStr = prompt('Enter AI credit adjustment (e.g. +50, -10):', '50');
      if (!deltaStr) return;
      const delta = parseInt(deltaStr, 10);
      if (isNaN(delta)) return toast('Invalid credit amount');
      try {
        await api(`/api/admin/users/${userId}/adjust-credits`, { method: 'POST', body: JSON.stringify({ ai_credits_delta: delta, reason: 'Super Admin adjustment' }) });
        toast(`Adjusted credits by ${delta}`);
        openAdminUserDetail(userId);
        loadAdminUsers();
      } catch (err) { toast(err.message); }
    });

    $('#btnUser360Status')?.addEventListener('click', async () => {
      try {
        if (isRestricted) {
          await api(`/api/admin/users/${userId}/restore`, { method: 'POST' });
          toast('User restored to active');
        } else {
          await api(`/api/admin/users/${userId}/restrict`, { method: 'POST' });
          toast('User restricted');
        }
        openAdminUserDetail(userId);
        loadAdminUsers();
      } catch (err) { toast(err.message); }
    });

  } catch (err) {
    body.innerHTML = `<p style="color:var(--zy-error);">${escapeHtml(err.message)}</p>`;
  }
}

async function toggleAdminUserStatus(userId) {
  const user = state.adminUsers?.find(u => u.id === userId);
  if (!user) return;
  const isRestricted = (user.status || 'ACTIVE') === 'RESTRICTED';
  const action = isRestricted ? 'restore' : 'restrict';
  if (!confirm(`Are you sure you want to ${action} ${user.email}?`)) return;
  try {
    await api(`/api/admin/users/${userId}/${action}`, { method: 'POST' });
    toast(`User ${action}ed successfully`);
    await loadAdminUsers();
  } catch (err) { toast(err.message); }
}

async function deleteAdminUser(userId) {
  const user = state.adminUsers?.find(u => u.id === userId);
  if (!user) return;
  if (!confirm(`DANGER: Permanently delete ${user.email} and all owned websites, leads, appointments, and data? This action CANNOT be undone.`)) return;
  try {
    await api(`/api/admin/users/${userId}`, { method: 'DELETE' });
    toast('User permanently deleted');
    await loadAdminUsers();
  } catch (err) { toast(err.message); }
}

// 3. Templates & Universal Import
async function loadAdminTemplates() {
  try {
    const r = await api('/api/admin/templates');
    state.adminTemplates = r.items || [];
    renderAdminTemplates();
  } catch (e) { toast(e.message); }
}

function renderAdminTemplates() {
  const search = ($('#adminTemplateSearch')?.value || '').toLowerCase().trim();
  const stateFilter = $('#adminTemplateStateFilter')?.value || '';
  const filtered = (state.adminTemplates || []).filter(t => {
    if (search && !(`${t.name} ${t.slug} ${t.category}`).toLowerCase().includes(search)) return false;
    if (stateFilter && (t.state || 'public') !== stateFilter) return false;
    return true;
  });
  const tbody = $('#adminTemplateRows');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(t => {
    const isPublic = (t.state || 'public') === 'public';
    return `
      <tr>
        <td>
          <b>${escapeHtml(t.name)}</b>
          <small style="display:block;color:var(--z-text-muted);font-size:11px;">${escapeHtml(t.slug)}</small>
        </td>
        <td>${escapeHtml(t.category || t.industry || 'General')}</td>
        <td>${Number(t.pages || 1)}</td>
        <td><span class="status-badge ${isPublic ? 'pass' : 'warn'}">${isPublic ? 'PUBLIC' : 'ARCHIVED'}</span></td>
        <td><span class="status-badge ${t.is_ready ? 'pass' : 'warn'}">${t.is_ready ? '✓ PASS' : 'INCOMPLETE'}</span></td>
        <td>
          <div style="display:flex;gap:6px;">
            <a class="btn-sm btn-secondary" href="/template-preview/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">Preview</a>
            <button class="btn-sm btn-secondary" data-admin-tmpl-edit="${encodeURIComponent(t.slug)}">Edit</button>
            <button class="btn-sm ${isPublic ? 'btn-secondary' : 'btn-primary'}" data-admin-tmpl-toggle="${encodeURIComponent(t.slug)}">${isPublic ? 'Archive' : 'Publish'}</button>
          </div>
        </td>
      </tr>
    `;
  }).join('') || '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--z-text-muted);">No templates match filter criteria.</td></tr>';

  $$('[data-admin-tmpl-toggle]').forEach(b => b.onclick = async () => {
    try {
      await api(`/api/admin/templates/${b.dataset.adminTmplToggle}/toggle-state`, { method: 'POST' });
      toast('Template state updated');
      await loadAdminTemplates();
    } catch (err) { toast(err.message); }
  });

  $$('[data-admin-tmpl-edit]').forEach(b => b.onclick = () => {
    const slug = decodeURIComponent(b.dataset.adminTmplEdit);
    const tmpl = state.adminTemplates?.find(t => t.slug === slug);
    if (!tmpl) return;
    $('#adminTemplateEditSlug').value = slug;
    $('#adminTemplateEditName').value = tmpl.name || '';
    $('#adminTemplateEditCategory').value = tmpl.category || tmpl.industry || '';
    $('#adminTemplateEditDesc').value = tmpl.description || tmpl.art_direction || '';
    $('#adminTemplateEditTags').value = (tmpl.tags || []).join(', ');
    $('#adminTemplateEditMsg').textContent = '';
    openModal('adminTemplateEditModal');
  });
}

// 4. Global Leads
async function loadAdminLeads() {
  try {
    const leads = await api('/api/admin/leads');
    state.adminLeads = leads.items || [];
    const tbody = $('#adminLeadRows');
    if (tbody) {
      tbody.innerHTML = state.adminLeads.map(l => `
        <tr>
          <td></td>
          <td><b>${escapeHtml(l.name)}</b></td>
          <td>${escapeHtml(l.user_email || '—')}</td>
          <td><span class="status-badge info">${escapeHtml(l.source || 'FORM')}</span></td>
          <td>${escapeHtml(l.site_name || l.site_id)}</td>
          <td>${escapeHtml(l.email)} ${l.phone ? '· ' + escapeHtml(l.phone) : ''}</td>
          <td>${new Date(l.created_at).toLocaleDateString()}</td>
          <td></td>
        </tr>
      `).join('');
    }
    if ($('#adminLeadEmpty')) $('#adminLeadEmpty').style.display = state.adminLeads.length ? 'none' : 'grid';
  } catch (e) { toast(e.message); }
}

// 5. Plans & Pricing
async function loadAdminPlans() {
  try {
    const p = await api('/api/admin/plans');
    $('#adminPlanGrid').innerHTML = p.items.map(x => `
      <form class="plan-admin-card" data-plan-form="${x.plan}">
        <h3>${escapeHtml(x.public_name)}</h3>
        <label>Public name<input name="public_name" value="${escapeHtml(x.public_name)}"></label>
        <label>INR price (paise)<input name="price_inr_minor" type="number" value="${x.price_inr_minor}"></label>
        <label>USD price (cents)<input name="price_usd_minor" type="number" value="${x.price_usd_minor}"></label>
        <label>Draft/site limit<input name="site_limit" type="number" value="${x.site_limit}"></label>
        <label>Page limit<input name="page_limit" type="number" max="10" value="${x.page_limit}"></label>
        <label>Monthly AI credits<input name="ai_credits" type="number" min="0" value="${x.ai_credits}"></label>
        <label>Monthly lead credits<input name="lead_credits" type="number" min="0" value="${x.lead_credits ?? 0}"></label>
        <label>Signup bonus credits<input name="signup_bonus_credits" type="number" value="${x.signup_bonus_credits ?? 5}"></label>
        <label>AI site cost<input name="ai_site_cost" type="number" value="${x.ai_site_cost ?? 5}"></label>
        <label>AI edit cost<input name="ai_edit_cost" type="number" value="${x.ai_edit_cost ?? 2}"></label>
        <label class="check-row"><input name="contact_only" type="checkbox" ${x.contact_only ? 'checked' : ''}><span>Contact-only plan</span></label>
        <button class="accent-btn" type="submit">Save ${x.plan}</button>
      </form>
    `).join('');
    $$('[data-plan-form]').forEach(f => f.onsubmit = async e => {
      e.preventDefault();
      const plan = f.dataset.plan;
      const data = Object.fromEntries(new FormData(f).entries());
      data.contact_only = f.querySelector('[name="contact_only"]').checked;
      for (const k of ['price_inr_minor', 'price_usd_minor', 'site_limit', 'page_limit', 'ai_credits', 'lead_credits', 'signup_bonus_credits', 'ai_site_cost', 'ai_edit_cost']) {
        if (data[k] !== undefined) data[k] = Number(data[k]);
      }
      try {
        await api(`/api/admin/plans/${plan}`, { method: 'PATCH', body: JSON.stringify(data) });
        toast(`Plan ${plan} saved`);
      } catch (err) { toast(err.message); }
    });
  } catch (e) { toast(e.message); }
}

// 6. Platform Blog CMS
async function loadAdminPlatformBlog() {
  try {
    const b = await api('/api/admin/blog');
    renderPlatformBlog(b.items || []);
  } catch (e) { toast(e.message); }
}

function renderPlatformBlog(items) {
  const el = $('#platformBlogList');
  if (!el) return;
  el.innerHTML = items.map(p => `
    <div class="stack-item" style="display:flex;justify-content:space-between;align-items:center;">
      <div>
        <b>${escapeHtml(p.title)}</b>
        <small style="display:block;color:var(--z-text-muted);">${escapeHtml(p.slug)} · <span class="status-badge ${p.is_published ? 'pass' : 'warn'}">${p.is_published ? 'PUBLISHED' : 'DRAFT'}</span></small>
      </div>
      <div style="display:flex;gap:6px;">
        <button class="btn-sm btn-secondary" data-blog-edit="${p.id}">Edit</button>
        <button class="btn-sm ${p.is_published ? 'btn-secondary' : 'btn-primary'}" data-blog-toggle="${p.id}">${p.is_published ? 'Unpublish' : 'Publish'}</button>
      </div>
    </div>
  `).join('') || '<p class="muted-copy">No blog articles yet.</p>';

  $$('[data-blog-toggle]').forEach(b => b.onclick = async () => {
    const id = b.dataset.blogToggle;
    const post = items.find(x => x.id === id);
    const action = post?.is_published ? 'unpublish' : 'publish';
    try {
      await api(`/api/admin/blog/${id}/${action}`, { method: 'POST' });
      toast(`Article ${action}ed`);
      await loadAdminPlatformBlog();
    } catch (err) { toast(err.message); }
  });

  $$('[data-blog-edit]').forEach(b => b.onclick = () => {
    const id = b.dataset.blogEdit;
    const post = items.find(x => x.id === id);
    if (!post) return;
    $('#adminBlogEditId').value = post.id;
    $('#adminBlogEditTitle').value = post.title || '';
    $('#adminBlogEditSlug').value = post.slug || '';
    $('#adminBlogEditExcerpt').value = post.excerpt || '';
    $('#adminBlogEditContent').value = post.content || '';
    $('#adminBlogEditSeoTitle').value = post.seo_title || '';
    $('#adminBlogEditCover').value = post.cover_image_url || '';
    $('#adminBlogTogglePublish').textContent = post.is_published ? 'Unpublish' : 'Publish';
    openModal('adminBlogEditModal');
  });
}

// Freelancers Moderation
async function loadAdminFreelancers() {
  const qs = new URLSearchParams({ search: $('#adminFreelancerSearch')?.value || '', status: $('#adminFreelancerStatus')?.value || '' });
  try {
    const j = await api('/api/admin/freelancers?' + qs);
    state.adminFreelancers = j.items;
    $('#adminFreelancerList').innerHTML = j.items.length ? j.items.map(x => `<button class="support-list-item" data-admin-freelancer="${x.user_id}"><span><b>${escapeHtml(x.display_name)}</b><small>${escapeHtml(x.status)}</small></span><strong>${escapeHtml(x.email)}</strong><small>${x.click_count || 0} clicks · ${x.lead_count || 0} enquiries</small></button>`).join('') : '<p class="muted-copy">No freelancer applications match.</p>';
    $$('[data-admin-freelancer]').forEach(b => b.onclick = () => editAdminFreelancer(b.dataset.adminFreelancer));
  } catch (e) { toast(e.message); }
}

function editAdminFreelancer(id) {
  const x = state.adminFreelancers?.find(f => f.user_id === id);
  if (!x) return;
  $('#adminFreelancerId').value = id;
  $('#adminFreelancerEditStatus').value = x.status;
  $('#adminFreelancerEditName').value = x.display_name || '';
  $('#adminFreelancerEditFullName').value = x.full_name || '';
  $('#adminFreelancerEditBio').value = x.bio || '';
  $('#adminFreelancerEditDescription').value = x.description || '';
  $('#adminFreelancerEditSkills').value = (x.skills || []).join(', ');
  $('#adminFreelancerEditServices').value = (x.services || []).join(', ');
  $('#adminFreelancerEditYears').value = x.years_experience || 0;
  $('#adminFreelancerEditPrice').value=(x.starting_price_minor||0)/100;
  $('#adminFreelancerEditCurrency').value = x.currency || 'USD';
  $('#adminFreelancerEditLocation').value = x.location || '';
  $('#adminFreelancerEditLinks').value = (x.links || []).map(l => l.url).join('\n');
  $('#adminFreelancerEditReason').value = x.rejection_reason || '';
  $('#adminFreelancerMsg').textContent = `${x.click_count || 0} tracked outbound clicks · ${x.lead_count || 0} Zylora enquiries`;
}

async function saveAdminFreelancer(e) {
  e.preventDefault();
  const id = $('#adminFreelancerId').value;
  if (!id) { $('#adminFreelancerMsg').textContent = 'Select an application first.'; return; }
  const split = id => $('#' + id).value.split(',').map(x => x.trim()).filter(Boolean);
  const payload = {
    status: $('#adminFreelancerEditStatus').value,
    display_name: $('#adminFreelancerEditName').value,
    full_name: $('#adminFreelancerEditFullName').value,
    bio: $('#adminFreelancerEditBio').value,
    description: $('#adminFreelancerEditDescription').value,
    skills: split('adminFreelancerEditSkills'),
    services: split('adminFreelancerEditServices'),
    years_experience: Number($('#adminFreelancerEditYears').value || 0),
    starting_price_minor:Math.round(Number($('#adminFreelancerEditPrice').value||0)*100),
    currency: $('#adminFreelancerEditCurrency').value || 'USD',
    location: $('#adminFreelancerEditLocation').value || null,
    links: $('#adminFreelancerEditLinks').value.split('\n').map(x => x.trim()).filter(Boolean),
    rejection_reason: $('#adminFreelancerEditReason').value || null
  };
  try {
    await api(`/api/admin/freelancers/${id}`, { method: 'PATCH', body: JSON.stringify(payload) });
    toast('Freelancer moderation saved');
    await loadAdminFreelancers();
    editAdminFreelancer(id);
  } catch (err) { $('#adminFreelancerMsg').textContent = err.message; }
}

// 7. System Settings
async function loadAdminSystem() {
  try {
    const sys = await api('/api/admin/settings');
    const sm = Object.fromEntries(sys.items.map(x => [x.key, x.value]));
    if ($('#adminNotificationEmail')) $('#adminNotificationEmail').value = sm.admin_notification_email || '';
    if ($('#publicSignupEnabled')) $('#publicSignupEnabled').checked = sm.public_signup_enabled !== 'false';
    if ($('#sourceExportUsd')) $('#sourceExportUsd').value = sm.source_export_usd_minor || 9900;
    if ($('#sourceExportInr')) $('#sourceExportInr').value = sm.source_export_inr_minor || 829900;
    if ($('#starterIndiaPlanId')) $('#starterIndiaPlanId').value = sm.starter_india_provider_plan_id || '';
    if ($('#starterInternationalPlanId')) $('#starterInternationalPlanId').value = sm.starter_international_provider_plan_id || '';
    if ($('#growthIndiaPlanId')) $('#growthIndiaPlanId').value = sm.growth_india_provider_plan_id || '';
    if ($('#growthInternationalPlanId')) $('#growthInternationalPlanId').value = sm.growth_international_provider_plan_id || '';
    if ($('#assistantSessionLimit')) $('#assistantSessionLimit').value = sm.assistant_session_message_limit || 40;
  } catch (e) { toast(e.message); }
}

// Universal Import Form (Dedicated to SUPER_ADMIN)
function setupImportForm() {
  const form = $('#importForm');
  if (!form) return;
  form.onsubmit = async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const msg = $('#importMsg');
    btn.disabled = true;
    msg.textContent = 'Uploading and normalizing project…';
    try {
      const fd = new FormData(form);
      const csrf = sessionStorage.getItem('csrf') || window.__CSRF;
      const r = await fetch('/api/sites/import', {
        method: 'POST',
        headers: csrf ? { 'X-CSRF-Token': csrf } : {},
        body: fd
      });
      const j = await r.json();
      if (!r.ok) throw new Error(typeof j.detail === 'string' ? j.detail : (j.detail?.message || 'Import failed'));
      msg.textContent = 'Import successful! Opening editor…';
      toast('Project imported successfully');
      setTimeout(() => { location.href = `/editor/${j.site_id}`; }, 600);
    } catch (err) {
      msg.textContent = err.message;
      btn.disabled = false;
    }
  };
}

// 8. Platform Campaigns
async function loadAdminCampaigns() {
  try {
    const res = await api('/api/admin/campaigns');
    state.adminCampaigns = res.items || [];
    renderAdminCampaigns();
  } catch (err) {
    toast(err.message);
  }
}

function renderAdminCampaigns() {
  const list = $('#campaignList');
  if (!list) return;
  if (!state.adminCampaigns.length) {
    list.innerHTML = '<div style="text-align:center;padding:40px 20px;background:var(--zy-bg-card-inner);border:1px dashed var(--zy-border);border-radius:14px;margin:12px 0;"><div style="width:44px;height:44px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,0.05);display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;color:var(--zy-text-secondary);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></div><h4 style="margin:0 0 6px 0;font-size:14.5px;font-weight:600;color:var(--zy-text-primary);">No campaigns created yet</h4><p style="margin:0;font-size:12px;color:var(--zy-text-secondary);max-width:380px;display:inline-block;line-height:1.45;">Draft an announcement or email broadcast using the form to reach platform users.</p></div>';
    return;
  }
  list.innerHTML = state.adminCampaigns.map(c => `
    <div class="stack-item" style="display:flex;justify-content:space-between;align-items:flex-start;padding:14px;background:var(--zy-bg-card-inner);border:1px solid var(--zy-border);border-radius:8px;margin-bottom:10px;">
      <div style="flex:1;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
          <b style="color:var(--zy-text-primary);">${escapeHtml(c.title)}</b>
          <span class="status-badge ${c.status === 'SENT' ? 'pass' : 'warn'}">${escapeHtml(c.status)}</span>
          <span style="font-size:11px;color:var(--zy-text-secondary);">${escapeHtml(c.delivery_channel || 'EMAIL')} · ${escapeHtml(c.audience || 'ALL')}</span>
        </div>
        <p style="margin:0 0 6px 0;font-size:13px;color:var(--zy-text-secondary);">${escapeHtml(c.subject)}</p>
        <div style="font-size:11px;color:var(--zy-text-secondary);">
          Created: ${new Date(c.created_at).toLocaleDateString()} ${c.sent_at ? `· Sent: ${new Date(c.sent_at).toLocaleDateString()} (${c.sent_count ?? 0} recipients)` : ''}
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        ${c.status !== 'SENT' ? `
          <button class="ghost-btn compact-btn" onclick="testSendCampaign('${escapeHtml(c.id)}')">Test Send</button>
          <button class="accent-btn compact-btn" onclick="sendCampaign('${escapeHtml(c.id)}')">Send Now</button>
        ` : ''}
        <button class="danger-btn compact-btn" onclick="deleteCampaign('${escapeHtml(c.id)}')">Delete</button>
      </div>
    </div>
  `).join('');
}

window.testSendCampaign = async function(id) {
  try {
    const res = await api(`/api/admin/campaigns/${id}/test-send`, { method: 'POST' });
    toast(`Test campaign sent to ${res.sent_to}`);
  } catch (e) {
    toast(e.message);
  }
};

window.sendCampaign = async function(id) {
  if (!confirm('Are you sure you want to broadcast this campaign to live users?')) return;
  try {
    const res = await api(`/api/admin/campaigns/${id}/send`, { method: 'POST' });
    toast(`Campaign broadcasted to ${res.sent_count} users`);
    loadAdminCampaigns();
  } catch (e) {
    toast(e.message);
  }
};

window.deleteCampaign = async function(id) {
  if (!confirm('Delete this campaign?')) return;
  try {
    await api(`/api/admin/campaigns/${id}`, { method: 'DELETE' });
    toast('Campaign deleted');
    loadAdminCampaigns();
  } catch (e) {
    toast(e.message);
  }
};

function setupAdminCampaignForm() {
  const form = $('#adminCampaignForm');
  if (!form) return;
  form.onsubmit = async e => {
    e.preventDefault();
    const msg = $('#campaignMsg');
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    msg.textContent = 'Creating campaign…';
    try {
      await api('/api/admin/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          title: $('#campaignTitle').value.trim(),
          audience: $('#campaignAudience').value,
          subject: $('#campaignSubject').value.trim(),
          body_html: $('#campaignBody').value
        })
      });
      msg.textContent = 'Campaign created!';
      toast('Campaign created');
      form.reset();
      loadAdminCampaigns();
    } catch (err) {
      msg.textContent = err.message;
    } finally {
      submitBtn.disabled = false;
    }
  };
}

// 9. Platform Payments & Revenue
async function loadAdminPayments() {
  try {
    const res = await api('/api/admin/payments');
    state.adminPayments = res.items || [];
    renderAdminPayments();
  } catch (e) {
    toast(e.message);
  }
}

function renderAdminPayments() {
  const rows = $('#adminPaymentRows');
  if (!rows) return;
  const q = ($('#adminPaymentSearch')?.value || '').toLowerCase().trim();
  const kind = $('#adminPaymentKindFilter')?.value || '';
  const status = ($('#adminPaymentStatusFilter')?.value || '').toLowerCase();

  const filtered = state.adminPayments.filter(p => {
    if (kind && p.kind !== kind) return false;
    if (status && (p.status || '').toLowerCase() !== status) return false;
    if (q) {
      const match = (p.id || '').toLowerCase().includes(q) ||
                    (p.user_email || '').toLowerCase().includes(q) ||
                    (p.user_name || '').toLowerCase().includes(q) ||
                    (p.provider_payment_id || '').toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  if (!filtered.length) {
    rows.innerHTML = '<tr><td colspan="6" class="muted-copy" style="text-align:center;padding:24px;">No payment transactions found matching filter criteria.</td></tr>';
    return;
  }

  rows.innerHTML = filtered.map(p => {
    const amt = p.amount_minor != null ? (p.currency === 'INR' ? '₹' + Math.round(p.amount_minor / 100).toLocaleString() : '$' + (p.amount_minor / 100).toFixed(2)) : '—';
    const statusCls = (p.status || '').toLowerCase() === 'paid' || (p.status || '').toLowerCase() === 'captured' ? 'pass' : ((p.status || '').toLowerCase() === 'failed' ? 'fail' : 'warn');
    return `
      <tr>
        <td>
          <b>${escapeHtml(p.id)}</b>
          ${p.provider_payment_id ? `<br><small style="color:var(--zy-text-secondary);font-family:monospace;">${escapeHtml(p.provider_payment_id)}</small>` : ''}
        </td>
        <td>
          <b>${escapeHtml(p.user_name || 'Anonymous')}</b><br>
          <small style="color:var(--zy-text-secondary);">${escapeHtml(p.user_email || '—')}</small>
        </td>
        <td>
          <span class="status-badge" style="background:var(--zy-bg-card-inner);border:1px solid var(--zy-border);">${escapeHtml(p.kind || 'SUBSCRIPTION')}</span>
          ${p.plan ? `<small style="display:block;margin-top:4px;color:var(--zy-accent);font-weight:600;">${escapeHtml(p.plan)}</small>` : ''}
        </td>
        <td><b>${amt}</b></td>
        <td><span class="status-badge ${statusCls}">${escapeHtml(p.status || 'unknown')}</span></td>
        <td><small style="color:var(--zy-text-secondary);">${p.created_at ? new Date(p.created_at).toLocaleString() : '—'}</small></td>
      </tr>
    `;
  }).join('');
}

// 10. Integrations Status
async function loadAdminIntegrations() {
  const grid = $('#adminIntegrationGrid');
  if (!grid) return;
  grid.innerHTML = '<p class="muted-copy">Checking integration endpoints…</p>';
  try {
    const res = await api('/api/admin/integrations');
    state.adminIntegrations = res.integrations || [];
    grid.innerHTML = state.adminIntegrations.map(item => `
      <div class="settings-card" style="padding:18px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid var(--zy-border);border-radius:10px;background:var(--zy-bg-card);">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
            <b style="font-size:15px;color:var(--zy-text-primary);">${escapeHtml(item.name)}</b>
            <span class="status-badge ${item.status === 'HEALTHY' ? 'pass' : 'warn'}">${item.status === 'HEALTHY' ? 'Healthy' : (item.status === 'CONFIGURED_SIMULATED' ? 'Simulated' : escapeHtml(item.status.replaceAll('_', ' ')))}</span>
          </div>
          <p style="font-size:12px;color:var(--zy-text-secondary);margin:0 0 12px 0;">${escapeHtml(item.category)}</p>
          <div style="font-size:12px;display:flex;flex-direction:column;gap:4px;color:var(--zy-text-secondary);">
            <div>Configured: <b style="color:${item.configured ? 'var(--zy-success)' : 'var(--zy-warning)'};">${item.configured ? 'Yes' : 'Environment fallback'}</b></div>
            <div>Active Connections: <b style="color:var(--zy-text-primary);">${item.active_connections ?? 0}</b></div>
          </div>
        </div>
        <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--zy-border-subtle);font-size:11px;color:var(--zy-text-secondary);display:flex;justify-content:space-between;align-items:center;">
          <span>Provider Driver</span>
          <span style="color:var(--zy-accent);font-weight:600;">ACTIVE</span>
        </div>
      </div>
    `).join('');
  } catch (e) {
    grid.innerHTML = `<p class="muted-copy" style="color:var(--zy-error);">${escapeHtml(e.message)}</p>`;
  }
}

// 11. Platform Health
async function loadAdminHealth() {
  try {
    const h = await api('/api/admin/health');
    state.adminHealth = h;
    if ($('#healthDbLatency')) $('#healthDbLatency').textContent = (h.database?.latency_ms == null || h.database?.latency_ms < 1) ? '< 1 ms' : `${h.database?.latency_ms} ms`;
    if ($('#healthDbEngine')) $('#healthDbEngine').textContent = `Engine: ${h.database?.engine || 'SQLite'}`;
    if ($('#healthEngineStatus')) {
      $('#healthEngineStatus').textContent = h.overall_status || 'HEALTHY';
      $('#healthEngineStatus').style.color = h.overall_status === 'HEALTHY' ? 'var(--zy-success)' : 'var(--zy-warning)';
    }
    if ($('#healthRedisStatus')) $('#healthRedisStatus').textContent = h.redis?.status || 'HEALTHY';
    if ($('#healthEventCount')) $('#healthEventCount').textContent = `${h.open_issues_count ?? 0} open alerts`;

    const rows = $('#healthEventRows');
    if (rows) {
      try {
        const audit = await api('/api/admin/audit?limit=25');
        const items = audit.items || [];
        if (!items.length) {
          rows.innerHTML = '<tr><td colspan="5" class="muted-copy" style="text-align:center;padding:18px;">No critical operational events recorded.</td></tr>';
        } else {
          rows.innerHTML = items.slice(0, 15).map(ev => `
            <tr>
              <td><small style="color:var(--zy-text-secondary);">${ev.created_at ? new Date(ev.created_at).toLocaleTimeString() : '—'}</small></td>
              <td><span class="status-badge pass">INFO</span></td>
              <td><b>${escapeHtml(ev.action === 'GOOGLE_LOGIN' ? 'Google sign-in' : ev.action.replaceAll('_', ' '))}</b></td>
              <td><span style="font-family:monospace;font-size:11px;color:var(--zy-accent);">${escapeHtml(ev.object_type || 'system')}</span></td>
              <td><small style="color:var(--zy-text-secondary);">${ev.metadata && typeof ev.metadata === 'object' && Object.keys(ev.metadata).length > 0 ? escapeHtml(JSON.stringify(ev.metadata)) : '—'}</small></td>
            </tr>
          `).join('');
        }
      } catch (err) {
        rows.innerHTML = '<tr><td colspan="5" class="muted-copy" style="text-align:center;padding:18px;">Operational events stream standby.</td></tr>';
      }
    }
  } catch (e) {
    toast(e.message);
  }
}

// 12. Audit Logs
async function loadAdminAudit() {
  const list = $('#auditList');
  if (!list) return;
  list.innerHTML = '<p class="muted-copy">Loading audit stream…</p>';
  try {
    const res = await api('/api/admin/audit');
    const items = res.items || [];
    if (!items.length) {
      list.innerHTML = '<div style="text-align:center;padding:40px 20px;background:var(--zy-bg-card-inner);border:1px dashed var(--zy-border);border-radius:14px;margin:12px 0;"><div style="width:44px;height:44px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,0.05);display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;color:var(--zy-text-secondary);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h4 style="margin:0 0 6px 0;font-size:14.5px;font-weight:600;color:var(--zy-text-primary);">No audit events recorded</h4><p style="margin:0;font-size:12px;color:var(--zy-text-secondary);max-width:380px;display:inline-block;line-height:1.45;">Security audit trail of administrative operations and system mutations will appear here.</p></div>';
      return;
    }
    list.innerHTML = items.map(a => `
      <div class="stack-item" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;padding:12px 16px;margin-bottom:8px;background:var(--zy-bg-card-inner);border:1px solid var(--zy-border);border-radius:8px;">
        <div style="flex:1;min-width:200px;">
          <b style="color:var(--zy-text-primary);">${escapeHtml(a.action.replaceAll('_', ' '))}</b>
          <small style="display:block;color:var(--zy-text-secondary);font-size:11.5px;margin-top:2px;word-break:break-word;">
            Actor ID: <code>${escapeHtml(a.user_id || 'system')}</code> · Target: ${escapeHtml(a.object_type || a.target_type || 'system')} ${a.object_id || a.target_id ? `· ${escapeHtml(a.object_id || a.target_id)}` : ''}
          </small>
          ${a.metadata ? `<pre style="margin:6px 0 0 0;font-size:11px;color:var(--zy-accent);background:var(--zy-bg-app);padding:4px 8px;border-radius:4px;overflow-x:auto;white-space:pre-wrap;word-break:break-all;">${escapeHtml(typeof a.metadata === 'object' ? JSON.stringify(a.metadata, null, 2) : a.metadata)}</pre>` : ''}
        </div>
        <small style="color:var(--zy-text-secondary);margin-left:auto;">${new Date(a.created_at).toLocaleString()}</small>
      </div>
    `).join('');
  } catch (e) {
    list.innerHTML = `<p class="muted-copy" style="color:var(--zy-error);">${escapeHtml(e.message)}</p>`;
  }
}

// 13. Managed CRM (Pro Leads)
async function loadAdminPro() {
  const rows = $('#adminProRows');
  if (!rows) return;
  rows.innerHTML = '<tr><td colspan="7" class="muted-copy" style="text-align:center;padding:24px;">Loading managed CRM requests…</td></tr>';
  try {
    const res = await api('/api/admin/pro-leads');
    const items = res.items || [];
    if (!items.length) {
      rows.innerHTML = '<tr><td colspan="7" class="muted-copy" style="text-align:center;padding:24px;">No managed CRM requests yet.</td></tr>';
      return;
    }
    rows.innerHTML = items.map(item => `
      <tr>
        <td><b>${escapeHtml(item.referral_code || item.id.slice(0, 8))}</b></td>
        <td>
          <b>${escapeHtml(item.client_name || item.name || 'Client')}</b><br>
          <small style="color:var(--zy-text-secondary);">${escapeHtml(item.client_email || item.email || '—')} ${item.client_phone ? `· ${escapeHtml(item.client_phone)}` : ''}</small>
        </td>
        <td>
          <b>${escapeHtml(item.project_name || 'Custom Website')}</b><br>
          <small style="color:var(--zy-text-secondary);">${escapeHtml(item.industry || 'General')}</small>
        </td>
        <td><small style="color:var(--zy-text-secondary);">${escapeHtml(item.preferred_time || item.timeline || 'Flexible')}</small></td>
        <td><span class="status-badge ${item.status === 'CLOSED' ? 'pass' : (item.status === 'PENDING' ? 'warn' : 'info')}">${escapeHtml(item.status || 'PENDING')}</span></td>
        <td><b>${item.amount_received_minor != null ? (item.currency === 'INR' ? '₹' + Math.round(item.amount_received_minor / 100).toLocaleString() : '$' + (item.amount_received_minor / 100).toFixed(2)) : '—'}</b></td>
        <td>
          <button class="ghost-btn compact-btn" onclick="updateProLeadStatus('${escapeHtml(item.id)}', '${item.status === 'CLOSED' ? 'PENDING' : 'CLOSED'}')">
            ${item.status === 'CLOSED' ? 'Reopen' : 'Mark Closed'}
          </button>
        </td>
      </tr>
    `).join('');
  } catch (e) {
    rows.innerHTML = `<tr><td colspan="7" style="color:var(--zy-error);text-align:center;padding:24px;">${escapeHtml(e.message)}</td></tr>`;
  }
}

window.updateProLeadStatus = async function(id, newStatus) {
  try {
    await api(`/api/admin/pro-leads/${id}`, { method: 'PATCH', body: JSON.stringify({ status: newStatus }) });
    toast(`CRM request updated to ${newStatus}`);
    loadAdminPro();
  } catch (err) {
    toast(err.message);
  }
};

// 14. Support Desk
async function loadAdminSupport() {
  const list = $('#adminSupportList');
  if (!list) return;
  const qs = new URLSearchParams({
    search: $('#adminSupportSearch')?.value || '',
    status: $('#adminSupportStatus')?.value || '',
    plan: $('#adminSupportPlan')?.value || ''
  });
  try {
    const res = await api('/api/admin/support?' + qs);
    state.adminSupport = res.items || [];
    if (!state.adminSupport.length) {
      list.innerHTML = '<p class="muted-copy">No support conversations found.</p>';
      return;
    }
    list.innerHTML = state.adminSupport.map(c => `
      <button class="support-list-item" data-support-conv="${c.id}" style="width:100%;text-align:left;cursor:pointer;margin-bottom:6px;">
        <span>
          <b>${escapeHtml(c.subject || 'Support Request')}</b>
          <span class="status-badge ${c.status === 'OPEN' ? 'pass' : 'warn'}">${escapeHtml(c.status)}</span>
        </span>
        <strong>${escapeHtml(c.user_email || c.user_name || 'Customer')}</strong>
        <small>${c.site_name ? `Site: ${escapeHtml(c.site_name)} · ` : ''}Plan: ${escapeHtml(c.user_plan || 'FREE')} · ${new Date(c.created_at).toLocaleDateString()}</small>
      </button>
    `).join('');
    $$('[data-support-conv]').forEach(btn => {
      btn.onclick = () => openAdminSupportThread(btn.dataset.supportConv);
    });
  } catch (e) {
    list.innerHTML = `<p class="muted-copy" style="color:var(--zy-error);">${escapeHtml(e.message)}</p>`;
  }
}

async function openAdminSupportThread(convId) {
  const thread = $('#adminSupportThread');
  if (!thread) return;
  thread.innerHTML = '<p class="muted-copy">Loading conversation…</p>';
  try {
    const conv = await api(`/api/admin/support/${convId}`);
    thread.innerHTML = `
      <div style="border-bottom:1px solid var(--zy-border);padding-bottom:12px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
        <div>
          <b style="font-size:15px;color:var(--zy-text-primary);">${escapeHtml(conv.subject || 'Support Ticket')}</b>
          <p style="margin:2px 0 0 0;font-size:12px;color:var(--zy-text-secondary);">${escapeHtml(conv.user_email || '')} · Ref: <code>${escapeHtml(conv.reference_code || conv.id)}</code></p>
        </div>
        <select id="adminSupportUpdateStatus" style="font-size:12px;padding:4px 8px;background:var(--zy-bg-card-inner);color:var(--zy-text-primary);border:1px solid var(--zy-border);border-radius:6px;">
          <option value="OPEN" ${conv.status === 'OPEN' ? 'selected' : ''}>OPEN</option>
          <option value="WAITING_ON_SUPPORT" ${conv.status === 'WAITING_ON_SUPPORT' ? 'selected' : ''}>WAITING_ON_SUPPORT</option>
          <option value="WAITING_ON_USER" ${conv.status === 'WAITING_ON_USER' ? 'selected' : ''}>WAITING_ON_USER</option>
          <option value="RESOLVED" ${conv.status === 'RESOLVED' ? 'selected' : ''}>RESOLVED</option>
        </select>
      </div>
      <div style="max-height:360px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;margin-bottom:14px;padding-right:4px;">
        ${(conv.messages || []).map(m => `
          <div style="padding:10px 12px;border-radius:8px;background:${m.sender_role === 'ADMIN' || m.sender_role === 'SUPER_ADMIN' ? 'var(--zy-bg-card-inner);border-left:3px solid var(--zy-accent);' : 'var(--zy-bg-app);border-left:3px solid var(--zy-text-secondary);'}">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:11px;color:var(--zy-text-secondary);">
              <b>${escapeHtml(m.sender_name || (m.sender_role === 'ADMIN' || m.sender_role === 'SUPER_ADMIN' ? 'Platform Support' : 'Customer'))}</b>
              <small>${new Date(m.created_at).toLocaleTimeString()}</small>
            </div>
            <div style="font-size:13px;line-height:1.4;white-space:pre-wrap;">${escapeHtml(m.body || m.message || '')}</div>
          </div>
        `).join('') || '<p class="muted-copy">No messages in this thread yet.</p>'}
      </div>
      <form id="adminSupportReplyForm" style="display:flex;gap:10px;">
        <input id="adminSupportReplyInput" placeholder="Reply to customer…" style="flex:1;background:var(--zy-bg-card-inner);border:1px solid var(--zy-border);border-radius:6px;padding:8px 12px;color:var(--zy-text-primary);" required/>
        <button class="accent-btn" type="submit">Send</button>
      </form>
    `;
    $('#adminSupportUpdateStatus')?.addEventListener('change', async (e) => {
      try {
        await api(`/api/admin/support/${convId}`, { method: 'PATCH', body: JSON.stringify({ status: e.target.value }) });
        toast('Ticket status updated');
        loadAdminSupport();
      } catch (err) { toast(err.message); }
    });
    $('#adminSupportReplyForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = $('#adminSupportReplyInput');
      const val = input.value.trim();
      if (!val) return;
      try {
        await api(`/api/admin/support/${convId}/messages`, { method: 'POST', body: JSON.stringify({ body: val }) });
        input.value = '';
        toast('Reply sent');
        openAdminSupportThread(convId);
      } catch (err) { toast(err.message); }
    });
  } catch (e) {
    thread.innerHTML = `<p class="muted-copy" style="color:var(--zy-error);">${escapeHtml(e.message)}</p>`;
  }
}

// 15. System Settings Form
function setupAdminSystemForm() {
  const form = $('#adminSystemForm');
  if (!form) return;
  form.onsubmit = async e => {
    e.preventDefault();
    const msg = $('#adminSystemMsg');
    msg.textContent = 'Saving platform settings…';
    try {
      const payload = {
        admin_notification_email: $('#adminNotificationEmail').value.trim() || null,
        public_signup_enabled: $('#publicSignupEnabled').checked,
        source_export_usd_minor: Number($('#sourceExportUsd').value || 9900),
        source_export_inr_minor: Number($('#sourceExportInr').value || 829900),
        starter_india_provider_plan_id: $('#starterIndiaPlanId').value.trim() || null,
        starter_international_provider_plan_id: $('#starterInternationalPlanId').value.trim() || null,
        growth_india_provider_plan_id: $('#growthIndiaPlanId').value.trim() || null,
        growth_international_provider_plan_id: $('#growthInternationalPlanId').value.trim() || null,
        assistant_session_message_limit: Number($('#assistantSessionLimit').value || 40),
        assistant_site_hourly_limit: Number($('#assistantSiteHourlyLimit')?.value || 500),
        assistant_input_char_limit: Number($('#assistantInputLimit')?.value || 4000),
        assistant_output_token_limit: Number($('#assistantOutputLimit')?.value || 500),
        assistant_retention_days: Number($('#assistantRetentionDays')?.value || 365)
      };
      await api('/api/admin/settings', { method: 'PUT', body: JSON.stringify(payload) });
      msg.textContent = 'Platform settings saved successfully!';
      toast('Platform settings saved');
    } catch (err) {
      msg.textContent = err.message;
    }
  };
}

// Initialise Super Admin
async function initSuperAdmin() {
  try {
    state.me = await api('/api/auth/me');
    if (state.me.role !== 'SUPER_ADMIN') {
      location.href = '/dashboard';
      return;
    }
    if ($('#sideUserName')) $('#sideUserName').textContent = state.me.name || 'Super Admin';
    if ($('#sideAvatar')) $('#sideAvatar').textContent = (state.me.name || 'SA').slice(0, 2).toUpperCase();

    // Wire tab navigation
    $$('.rail-btn[data-admin-tab]').forEach(btn => {
      btn.onclick = () => {
        const tab = btn.dataset.adminTab;
        $('.super-shell')?.classList.remove('sidebar-open');
        switchAdminTab(tab, true);
        loadTabData(tab);
      };
    });

    $$('[data-admin-jump]').forEach(btn => {
      btn.onclick = () => {
        const tab = btn.dataset.adminJump;
        $('.super-shell')?.classList.remove('sidebar-open');
        switchAdminTab(tab, true);
        loadTabData(tab);
      };
    });

    // Mobile sidebar toggle
    const sidebarToggle = $('#sidebarToggle');
    const superShell = $('.super-shell');
    if (sidebarToggle && superShell) {
      sidebarToggle.addEventListener('click', () => {
        superShell.classList.toggle('sidebar-open');
      });
    }

    window.addEventListener('popstate', syncRouteFromUrl);

    // Import modal buttons
    $$('[data-action="admin-import-template"]').forEach(b => {
      b.onclick = () => openModal('importModal');
    });

    // Close modals
    $$('.modal [data-close]').forEach(b => {
      b.onclick = () => closeModal(b.dataset.close);
    });

    // Global filters & action handlers
    $('#adminUserSearch')?.addEventListener('input', renderAdminUsers);
    $('#adminUserRoleFilter')?.addEventListener('change', renderAdminUsers);
    $('#adminUserPlanFilter')?.addEventListener('change', renderAdminUsers);
    $('#adminUserStatusFilter')?.addEventListener('change', renderAdminUsers);

    $('#adminTemplateSearch')?.addEventListener('input', renderAdminTemplates);
    $('#adminTemplateStateFilter')?.addEventListener('change', renderAdminTemplates);

    $('#adminPaymentSearch')?.addEventListener('input', renderAdminPayments);
    $('#adminPaymentKindFilter')?.addEventListener('change', renderAdminPayments);
    $('#adminPaymentStatusFilter')?.addEventListener('change', renderAdminPayments);
    $('#refreshPayments')?.addEventListener('click', loadAdminPayments);

    $('#refreshCampaigns')?.addEventListener('click', loadAdminCampaigns);
    $('#refreshHealth')?.addEventListener('click', loadAdminHealth);

    $('#adminFreelancerEditor')?.addEventListener('submit', saveAdminFreelancer);
    $('#adminFreelancerFilter')?.addEventListener('click', loadAdminFreelancers);
    $('#adminSupportFilter')?.addEventListener('click', loadAdminSupport);

    $('#refreshAdmin')?.addEventListener('click', () => {
      loadAdminOverview();
      loadAdminUsers();
      loadAdminTemplates();
      toast('Platform data refreshed');
    });

    $('#logoutBtn')?.addEventListener('click', async () => {
      await api('/api/auth/logout', { method: 'POST' });
      location.href = '/login';
    });

    setupImportForm();
    setupAdminCampaignForm();
    setupAdminSystemForm();
    syncRouteFromUrl();
  } catch (err) {
    console.error('Super admin init failed:', err);
  }
}

document.addEventListener('DOMContentLoaded', initSuperAdmin);
