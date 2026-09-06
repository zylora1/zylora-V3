/* ==========================================================================
   ZYLORA CRM CLIENT — ENGINE & CONTROLLERS
   ========================================================================== */
(function() {
  'use strict';

  const CRM = {
    state: {
      activeView: 'crm-overview',
      contacts: [],
      contactsTotal: 0,
      contactsPage: 1,
      contactsLimit: 25,
      contactsSearch: '',
      contactsStageFilter: '',
      contactsScoreFilter: '',
      selectedContactIds: new Set(),
      companies: [],
      pipelines: [],
      activePipeline: null,
      deals: [],
      tasks: [],
      tasksFilter: 'ALL',
      automations: [],
      automationRuns: [],
      analytics: null,
      currentDrawerContact: null,
      currentDrawerDeal: null
    },

    init: function() {
      this.bindGlobalKeys();
      this.bindModals();
      this.bindBulkActions();
    },

    // Global navigation hook called from setView(id)
    onView: function(viewId) {
      this.state.activeView = viewId;
      if (viewId === 'crm-overview') this.loadOverview();
      else if (viewId === 'crm-contacts') this.loadContacts();
      else if (viewId === 'crm-companies') this.loadCompanies();
      else if (viewId === 'crm-deals') this.loadDeals();
      else if (viewId === 'crm-tasks') this.loadTasks();
      else if (viewId === 'crm-automations') this.loadAutomations();
      else if (viewId === 'crm-reports') this.loadReports();
    },

    // --- Helper: Format Currency ---
    formatMoney: function(amount, currency) {
      const num = Number(amount || 0);
      const curr = currency || 'USD';
      if (curr === 'INR') return '₹' + num.toLocaleString('en-IN');
      if (curr === 'EUR') return '€' + num.toLocaleString('de-DE');
      return '$' + num.toLocaleString('en-US');
    },

    // --- Helper: Escape HTML ---
    esc: function(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },

    // ========================================================================
    // 1. CRM OVERVIEW
    // ========================================================================
    loadOverview: async function() {
      try {
        const data = await api('/api/crm/analytics/overview');
        this.state.analytics = data;
        this.renderOverviewMetrics(data);
        this.renderOverviewFunnel(data.funnel || {});
        this.renderOverviewActivity(data.recent_activities || []);
      } catch (err) {
        toast('Failed to load CRM overview: ' + err.message);
      }
    },

    renderOverviewMetrics: function(data) {
      const g = document.getElementById('crmOverviewStats');
      if (!g) return;
      const c = data.contacts || {};
      const d = data.deals || {};
      const t = data.tasks || {};

      g.innerHTML = `
        <div class="crm-stat-card">
          <div class="crm-stat-label">Total Contacts <span>👥</span></div>
          <div class="crm-stat-value">${c.total || 0}</div>
          <div class="crm-stat-sub"><span class="crm-stat-trend up">+${c.new_this_week || 0}</span> this week</div>
        </div>
        <div class="crm-stat-card">
          <div class="crm-stat-label">Hot Leads <span>🔥</span></div>
          <div class="crm-stat-value">${c.hot_leads || 0}</div>
          <div class="crm-stat-sub">Score ≥ 50</div>
        </div>
        <div class="crm-stat-card">
          <div class="crm-stat-label">Pipeline Value <span>💼</span></div>
          <div class="crm-stat-value">${this.formatMoney(d.pipeline_value || 0)}</div>
          <div class="crm-stat-sub">${d.active_deals || 0} open deals</div>
        </div>
        <div class="crm-stat-card">
          <div class="crm-stat-label">Closed Won <span>🏆</span></div>
          <div class="crm-stat-value">${this.formatMoney(d.won_revenue || 0)}</div>
          <div class="crm-stat-sub">Win rate: <b>${d.win_rate_percent || 0}%</b></div>
        </div>
        <div class="crm-stat-card">
          <div class="crm-stat-label">Pending Tasks <span>⚡</span></div>
          <div class="crm-stat-value">${t.pending || 0}</div>
          <div class="crm-stat-sub"><span class="${t.overdue > 0 ? 'crm-stat-trend down' : ''}">${t.overdue || 0} overdue</span></div>
        </div>
      `;
    },

    renderOverviewFunnel: function(f) {
      const root = document.getElementById('crmFunnelBars');
      if (!root) return;
      const steps = [
        { label: 'Website Leads', count: f.leads || 0 },
        { label: 'Qualified Contacts', count: f.qualified || 0 },
        { label: 'Appointments Booked', count: f.appointments || 0 },
        { label: 'Active Deals', count: f.deals || 0 },
        { label: 'Closed Won', count: f.won || 0 }
      ];
      const max = Math.max(1, ...steps.map(s => s.count));

      root.innerHTML = steps.map(s => {
        const pct = Math.round((s.count / max) * 100);
        return `
          <div class="crm-funnel-step">
            <span class="crm-funnel-label">${s.label}</span>
            <div class="crm-funnel-track">
              <div class="crm-funnel-fill" style="width: ${Math.max(4, pct)}%"></div>
            </div>
            <span class="crm-funnel-count">${s.count}</span>
          </div>
        `;
      }).join('');
    },

    renderOverviewActivity: function(items) {
      const feed = document.getElementById('crmOverviewActivityFeed');
      if (!feed) return;
      if (!items.length) {
        feed.innerHTML = '<p class="muted-copy" style="padding: 12px 0;">No recent CRM activities recorded.</p>';
        return;
      }
      feed.innerHTML = items.map(act => `
        <div class="crm-timeline-item" style="padding-bottom: 12px;">
          <div class="crm-timeline-dot"></div>
          <div class="crm-timeline-head">
            <span class="crm-timeline-title">${this.esc(act.title || act.activity_type)}</span>
            <span class="crm-timeline-time">${new Date(act.created_at).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
          </div>
          ${act.body ? `<div class="crm-timeline-content">${this.esc(act.body)}</div>` : ''}
        </div>
      `).join('');
    },

    // ========================================================================
    // 2. CONTACTS VIEW (Attio Data Grid)
    // ========================================================================
    loadContacts: async function() {
      try {
        const params = new URLSearchParams({
          page: this.state.contactsPage,
          limit: this.state.contactsLimit
        });
        if (this.state.contactsSearch) params.set('search', this.state.contactsSearch);
        if (this.state.contactsStageFilter) params.set('lifecycle_stage', this.state.contactsStageFilter);
        if (this.state.contactsScoreFilter) params.set('lead_score_gte', this.state.contactsScoreFilter);

        const res = await api(`/api/crm/contacts?${params.toString()}`);
        this.state.contacts = res.items || [];
        this.state.contactsTotal = res.total || 0;
        this.renderContactsTable();
        this.renderContactsPagination();
      } catch (err) {
        toast('Failed to load contacts: ' + err.message);
      }
    },

    renderContactsTable: function() {
      const tbody = document.getElementById('crmContactsTableBody');
      const empty = document.getElementById('crmContactsEmpty');
      if (!tbody) return;

      if (!this.state.contacts.length) {
        tbody.innerHTML = '';
        if (empty) empty.style.display = 'block';
        return;
      }
      if (empty) empty.style.display = 'none';

      tbody.innerHTML = this.state.contacts.map(c => {
        const initials = ((c.first_name?.[0] || '') + (c.last_name?.[0] || c.email?.[0] || 'C')).toUpperCase();
        const scoreClass = c.lead_score >= 50 ? 'hot' : (c.lead_score >= 25 ? 'warm' : 'cold');
        const scoreIcon = c.lead_score >= 50 ? '🔥' : (c.lead_score >= 25 ? '⚡' : '❄️');
        const isSelected = this.state.selectedContactIds.has(c.id);

        return `
          <tr class="${isSelected ? 'selected' : ''}" data-contact-id="${c.id}">
            <td onclick="event.stopPropagation()" style="width: 38px;">
              <input type="checkbox" class="crm-contact-select" data-id="${c.id}" ${isSelected ? 'checked' : ''}/>
            </td>
            <td>
              <div class="crm-cell-contact">
                <div class="crm-avatar">${initials}</div>
                <div class="crm-contact-meta">
                  <span class="crm-contact-name">${this.esc(c.full_name || (c.first_name ? (c.first_name + ' ' + (c.last_name||'')) : 'Unnamed Contact'))}</span>
                  <span class="crm-contact-title">${this.esc(c.job_title || c.company_name || 'No company')}</span>
                </div>
              </div>
            </td>
            <td>${this.esc(c.email || '—')}</td>
            <td>${this.esc(c.phone || '—')}</td>
            <td>
              <span class="crm-stage-badge">${this.esc(c.lifecycle_stage || 'LEAD')}</span>
            </td>
            <td>
              <span class="crm-score-pill ${scoreClass}">${scoreIcon} ${c.lead_score || 0}</span>
            </td>
            <td>
              ${(c.tags || []).map(t => `<span class="crm-tag">${this.esc(t)}</span>`).join(' ') || '<span style="color:var(--zy-text-3)">—</span>'}
            </td>
            <td>${new Date(c.updated_at || c.created_at).toLocaleDateString()}</td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('tr[data-contact-id]').forEach(tr => {
        tr.onclick = () => this.openContactDrawer(tr.dataset.contactId);
      });

      tbody.querySelectorAll('.crm-contact-select').forEach(chk => {
        chk.onchange = (e) => {
          const id = e.target.dataset.id;
          if (e.target.checked) this.state.selectedContactIds.add(id);
          else this.state.selectedContactIds.delete(id);
          this.syncBulkBar();
          chk.closest('tr')?.classList.toggle('selected', e.target.checked);
        };
      });

      this.syncBulkBar();
    },

    renderContactsPagination: function() {
      const info = document.getElementById('crmContactsPageInfo');
      const prevBtn = document.getElementById('crmContactsPrevBtn');
      const nextBtn = document.getElementById('crmContactsNextBtn');
      if (!info) return;

      const totalPages = Math.max(1, Math.ceil(this.state.contactsTotal / this.state.contactsLimit));
      info.textContent = `Page ${this.state.contactsPage} of ${totalPages} (${this.state.contactsTotal} total)`;
      if (prevBtn) prevBtn.disabled = this.state.contactsPage <= 1;
      if (nextBtn) nextBtn.disabled = this.state.contactsPage >= totalPages;
    },

    syncBulkBar: function() {
      const bar = document.getElementById('crmBulkBar');
      const count = document.getElementById('crmBulkCount');
      if (!bar) return;
      const n = this.state.selectedContactIds.size;
      if (n > 0) {
        bar.style.display = 'flex';
        if (count) count.textContent = `${n} contact${n > 1 ? 's' : ''} selected`;
      } else {
        bar.style.display = 'none';
      }
    },

    bindBulkActions: function() {
      const masterCheck = document.getElementById('crmSelectAllContacts');
      if (masterCheck) {
        masterCheck.onchange = (e) => {
          if (e.target.checked) {
            this.state.contacts.forEach(c => this.state.selectedContactIds.add(c.id));
          } else {
            this.state.selectedContactIds.clear();
          }
          this.renderContactsTable();
        };
      }

      document.getElementById('crmBulkDeleteBtn')?.addEventListener('click', async () => {
        if (!confirm(`Are you sure you want to delete ${this.state.selectedContactIds.size} contacts?`)) return;
        try {
          await api('/api/crm/contacts/bulk', {
            method: 'POST',
            body: JSON.stringify({
              action: 'DELETE',
              contact_ids: Array.from(this.state.selectedContactIds)
            })
          });
          toast('Contacts deleted');
          this.state.selectedContactIds.clear();
          this.loadContacts();
        } catch (err) {
          toast(err.message);
        }
      });
    },

    // ========================================================================
    // 3. CONTACT PROFILE & TIMELINE DRAWER
    // ========================================================================
    openContactDrawer: async function(contactId) {
      const drawer = document.getElementById('crmContactDrawer');
      const backdrop = document.getElementById('crmDrawerBackdrop');
      if (!drawer) return;

      drawer.classList.add('open');
      backdrop?.classList.add('open');

      try {
        const contact = await api(`/api/crm/contacts/${contactId}`);
        this.state.currentDrawerContact = contact;
        this.renderDrawerProfile(contact);
        this.loadContactTimeline(contactId);
      } catch (err) {
        toast('Failed to load contact: ' + err.message);
      }
    },

    closeContactDrawer: function() {
      document.getElementById('crmContactDrawer')?.classList.remove('open');
      document.getElementById('crmDrawerBackdrop')?.classList.remove('open');
      this.state.currentDrawerContact = null;
    },

    renderDrawerProfile: function(c) {
      const nameEl = document.getElementById('crmDrawerContactName');
      const titleEl = document.getElementById('crmDrawerContactTitle');
      const scoreEl = document.getElementById('crmDrawerContactScore');
      if (nameEl) nameEl.textContent = c.full_name || ((c.first_name || '') + ' ' + (c.last_name || '')) || c.email;
      if (titleEl) titleEl.textContent = (c.job_title ? c.job_title + ' · ' : '') + (c.company_name || 'No company');
      if (scoreEl) {
        scoreEl.className = 'crm-score-pill ' + (c.lead_score >= 50 ? 'hot' : (c.lead_score >= 25 ? 'warm' : 'cold'));
        scoreEl.textContent = `Score: ${c.lead_score || 0}`;
      }

      const map = {
        drawerEmail: c.email || '',
        drawerPhone: c.phone || '',
        drawerCompany: c.company_name || '',
        drawerStage: c.lifecycle_stage || 'LEAD'
      };
      for (const [id, val] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) el.value = val;
      }
    },

    loadContactTimeline: async function(contactId) {
      const list = document.getElementById('crmDrawerTimelineList');
      if (!list) return;
      list.innerHTML = '<p class="muted-copy">Loading timeline…</p>';

      try {
        const res = await api(`/api/crm/contacts/${contactId}/timeline`);
        const items = res.timeline || [];
        if (!items.length) {
          list.innerHTML = '<p class="muted-copy">No activities recorded for this contact yet.</p>';
          return;
        }

        list.innerHTML = items.map(act => `
          <div class="crm-timeline-item">
            <div class="crm-timeline-dot"></div>
            <div class="crm-timeline-head">
              <span class="crm-timeline-title">${this.esc(act.title || act.type || 'Event')}</span>
              <span class="crm-timeline-time">${new Date(act.timestamp || act.created_at).toLocaleString()}</span>
            </div>
            ${act.content ? `<div class="crm-timeline-content">${this.esc(act.content)}</div>` : ''}
          </div>
        `).join('');
      } catch (err) {
        list.innerHTML = `<p class="muted-copy">${this.esc(err.message)}</p>`;
      }
    },

    addContactNote: async function(contactId, content) {
      if (!content.trim()) return;
      try {
        await api(`/api/crm/contacts/${contactId}/notes`, {
          method: 'POST',
          body: JSON.stringify({ content: content.trim() })
        });
        toast('Note added');
        this.loadContactTimeline(contactId);
      } catch (err) {
        toast(err.message);
      }
    },

    // ========================================================================
    // 4. PIPELINE & DEALS (Linear / Attio Kanban Board)
    // ========================================================================
    loadDeals: async function() {
      try {
        const pipeRes = await api('/api/crm/pipelines');
        this.state.pipelines = pipeRes.items || [];
        if (!this.state.pipelines.length) return;

        if (!this.state.activePipeline) {
          this.state.activePipeline = this.state.pipelines.find(p => p.is_default) || this.state.pipelines[0];
        }

        const selector = document.getElementById('crmPipelineSelect');
        if (selector) {
          selector.innerHTML = this.state.pipelines.map(p => `
            <option value="${p.id}" ${p.id === this.state.activePipeline.id ? 'selected' : ''}>${this.esc(p.name)}</option>
          `).join('');
          selector.onchange = (e) => {
            this.state.activePipeline = this.state.pipelines.find(p => p.id === e.target.value);
            this.loadDeals();
          };
        }

        const dealsRes = await api(`/api/crm/deals?pipeline_id=${this.state.activePipeline.id}`);
        this.state.deals = dealsRes.items || [];
        this.renderKanbanBoard();
      } catch (err) {
        toast('Failed to load pipeline: ' + err.message);
      }
    },

    renderKanbanBoard: function() {
      const board = document.getElementById('crmKanbanBoard');
      if (!board || !this.state.activePipeline) return;

      const stages = this.state.activePipeline.stages || [];
      const dealsByStage = {};
      stages.forEach(s => { dealsByStage[s.id] = []; });

      this.state.deals.forEach(d => {
        if (dealsByStage[d.stage_id]) dealsByStage[d.stage_id].push(d);
      });

      const totalVal = this.state.deals.reduce((acc, d) => acc + Number(d.amount || 0), 0);
      const totalEl = document.getElementById('crmTotalPipelineVal');
      if (totalEl) totalEl.textContent = this.formatMoney(totalVal);

      board.innerHTML = stages.map(stage => {
        const stageDeals = dealsByStage[stage.id] || [];
        const stageVal = stageDeals.reduce((acc, d) => acc + Number(d.amount || 0), 0);

        return `
          <div class="crm-kanban-col" data-stage-id="${stage.id}">
            <div class="crm-kanban-col-head">
              <div class="crm-kanban-col-title">
                <span>${this.esc(stage.name)}</span>
                <span class="crm-kanban-col-count">${stageDeals.length}</span>
              </div>
              <span class="crm-kanban-col-total">${this.formatMoney(stageVal)}</span>
            </div>
            <div class="crm-kanban-col-cards" data-stage-id="${stage.id}">
              ${stageDeals.map(d => this.renderDealCard(d, stages)).join('')}
            </div>
          </div>
        `;
      }).join('');

      this.bindKanbanDragDrop(stages);
    },

    renderDealCard: function(deal, allStages) {
      const prio = (deal.priority || 'MEDIUM').toLowerCase();
      return `
        <div class="crm-deal-card" draggable="true" data-deal-id="${deal.id}" data-stage-id="${deal.stage_id}">
          <div class="crm-deal-card-top">
            <span class="crm-deal-title">${this.esc(deal.title)}</span>
            <select class="crm-card-quick-move" title="Move to stage..." aria-label="Move deal to stage" data-deal-id="${deal.id}">
              ${allStages.map(s => `
                <option value="${s.id}" ${s.id === deal.stage_id ? 'selected' : ''}>${this.esc(s.name)}</option>
              `).join('')}
            </select>
          </div>
          <div class="crm-deal-amount">${this.formatMoney(deal.amount, deal.currency)}</div>
          <div class="crm-deal-meta">
            <span>${this.esc(deal.company_name || deal.contact_name || 'No company')}</span>
            <span class="crm-priority-pill ${prio}">${prio}</span>
          </div>
        </div>
      `;
    },

    bindKanbanDragDrop: function(stages) {
      const cards = document.querySelectorAll('.crm-deal-card');
      const cols = document.querySelectorAll('.crm-kanban-col');

      cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', card.dataset.dealId);
          e.dataTransfer.setData('application/json', JSON.stringify({
            dealId: card.dataset.dealId,
            sourceStageId: card.dataset.stageId
          }));
          card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
          card.classList.remove('dragging');
        });

        card.addEventListener('click', (e) => {
          if (e.target.tagName === 'SELECT') return;
          this.openDealDrawer(card.dataset.dealId);
        });
      });

      document.querySelectorAll('.crm-card-quick-move').forEach(sel => {
        sel.addEventListener('change', async (e) => {
          e.stopPropagation();
          const dealId = sel.dataset.dealId;
          const newStageId = sel.value;
          await this.moveDealStage(dealId, newStageId);
        });
      });

      cols.forEach(col => {
        col.addEventListener('dragover', (e) => {
          e.preventDefault();
          col.classList.add('drag-over');
        });

        col.addEventListener('dragleave', () => {
          col.classList.remove('drag-over');
        });

        col.addEventListener('drop', async (e) => {
          e.preventDefault();
          col.classList.remove('drag-over');
          const dealId = e.dataTransfer.getData('text/plain');
          const targetStageId = col.dataset.stageId;
          if (!dealId || !targetStageId) return;

          const card = document.querySelector(`.crm-deal-card[data-deal-id="${dealId}"]`);
          if (card && card.dataset.stageId !== targetStageId) {
            await this.moveDealStage(dealId, targetStageId);
          }
        });
      });
    },

    moveDealStage: async function(dealId, newStageId) {
      const deal = this.state.deals.find(d => d.id === dealId);
      if (!deal) return;
      const oldStageId = deal.stage_id;

      deal.stage_id = newStageId;
      this.renderKanbanBoard();

      try {
        await api(`/api/crm/deals/${dealId}/stage`, {
          method: 'POST',
          body: JSON.stringify({
            stage_id: newStageId,
            revision: deal.revision || 1
          })
        });
        toast('Stage updated');
      } catch (err) {
        deal.stage_id = oldStageId;
        this.renderKanbanBoard();
        toast('Failed to update stage: ' + err.message);
      }
    },

    openDealDrawer: async function(dealId) {
      try {
        const deal = await api(`/api/crm/deals/${dealId}`);
        this.state.currentDrawerDeal = deal;
        const drawer = document.getElementById('crmDealDrawer');
        const backdrop = document.getElementById('crmDrawerBackdrop');
        if (!drawer) return;

        document.getElementById('crmDealDrawerTitle').textContent = deal.title;
        document.getElementById('crmDealDrawerAmount').value = deal.amount || 0;
        document.getElementById('crmDealDrawerNotes').value = deal.notes || '';

        drawer.classList.add('open');
        backdrop?.classList.add('open');
      } catch (err) {
        toast('Failed to load deal: ' + err.message);
      }
    },

    closeDealDrawer: function() {
      document.getElementById('crmDealDrawer')?.classList.remove('open');
      document.getElementById('crmDrawerBackdrop')?.classList.remove('open');
      this.state.currentDrawerDeal = null;
    },

    // ========================================================================
    // 5. TASKS & ACTIVITIES
    // ========================================================================
    loadTasks: async function() {
      try {
        const res = await api('/api/crm/tasks');
        this.state.tasks = res.items || [];
        this.renderTasksList();
      } catch (err) {
        toast('Failed to load tasks: ' + err.message);
      }
    },

    renderTasksList: function() {
      const root = document.getElementById('crmTasksList');
      if (!root) return;

      let filtered = this.state.tasks;
      if (this.state.tasksFilter === 'OPEN') filtered = filtered.filter(t => t.status === 'PENDING');
      else if (this.state.tasksFilter === 'COMPLETED') filtered = filtered.filter(t => t.status === 'COMPLETED');

      if (!filtered.length) {
        root.innerHTML = '<p class="muted-copy" style="padding: 16px 0;">No tasks in this view.</p>';
        return;
      }

      const now = new Date();
      root.innerHTML = filtered.map(t => {
        const isDone = t.status === 'COMPLETED';
        const isOverdue = !isDone && t.due_date && new Date(t.due_date) < now;

        return `
          <div class="crm-task-item ${isDone ? 'completed' : ''}">
            <div class="crm-task-left">
              <input type="checkbox" class="crm-task-check" data-task-id="${t.id}" ${isDone ? 'checked' : ''}/>
              <div>
                <div class="crm-task-title">${this.esc(t.title)}</div>
                ${t.description ? `<div style="font-size:12px;color:var(--zy-text-3);">${this.esc(t.description)}</div>` : ''}
              </div>
            </div>
            <div class="crm-task-due ${isOverdue ? 'overdue' : ''}">
              ${t.due_date ? new Date(t.due_date).toLocaleDateString() : 'No due date'}
            </div>
          </div>
        `;
      }).join('');

      root.querySelectorAll('.crm-task-check').forEach(chk => {
        chk.onchange = async (e) => {
          const taskId = e.target.dataset.taskId;
          try {
            await api(`/api/crm/tasks/${taskId}/complete`, { method: 'POST' });
            toast('Task updated');
            this.loadTasks();
          } catch (err) {
            toast(err.message);
          }
        };
      });
    },

    // ========================================================================
    // 6. AUTOMATIONS
    // ========================================================================
    loadAutomations: async function() {
      try {
        const autoRes = await api('/api/crm/automations');
        const runsRes = await api('/api/crm/automations/runs');
        this.state.automations = autoRes.items || [];
        this.state.automationRuns = runsRes.items || [];
        this.renderAutomationsList();
        this.renderAutomationRuns();
      } catch (err) {
        toast('Failed to load automations: ' + err.message);
      }
    },

    renderAutomationsList: function() {
      const root = document.getElementById('crmAutomationsList');
      if (!root) return;

      if (!this.state.automations.length) {
        root.innerHTML = '<p class="muted-copy">No automation rules configured yet. Create one to automate lead scoring, notifications, and stage movements.</p>';
        return;
      }

      root.innerHTML = this.state.automations.map(a => `
        <div class="crm-card" style="margin-bottom: 12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <b style="font-size:15px;color:var(--zy-text);">${this.esc(a.name)}</b>
              <div style="font-size:12px;color:var(--zy-text-2);margin-top:4px;">
                Trigger: <span class="crm-tag">${this.esc(a.trigger_type)}</span> → Action: <span class="crm-tag">${this.esc(a.action_type)}</span>
              </div>
            </div>
            <label class="toggle-row" style="margin:0;">
              <input type="checkbox" class="toggle-input crm-auto-toggle" data-auto-id="${a.id}" ${a.is_active ? 'checked' : ''}/>
            </label>
          </div>
        </div>
      `).join('');

      root.querySelectorAll('.crm-auto-toggle').forEach(t => {
        t.onchange = async (e) => {
          const id = e.target.dataset.autoId;
          try {
            await api(`/api/crm/automations/${id}`, {
              method: 'PATCH',
              body: JSON.stringify({ is_active: e.target.checked ? 1 : 0 })
            });
            toast('Automation updated');
          } catch (err) {
            toast(err.message);
          }
        };
      });
    },

    renderAutomationRuns: function() {
      const tbody = document.getElementById('crmAutomationRunsBody');
      if (!tbody) return;
      if (!this.state.automationRuns.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="muted-copy" style="text-align:center;">No runs recorded yet.</td></tr>';
        return;
      }
      tbody.innerHTML = this.state.automationRuns.map(r => `
        <tr>
          <td>${new Date(r.created_at).toLocaleString()}</td>
          <td><span class="crm-tag">${this.esc(r.trigger_type)}</span></td>
          <td><span class="status-badge ${r.status === 'SUCCESS' ? 'pass' : 'fail'}">${this.esc(r.status)}</span></td>
          <td style="font-size:12px;">${this.esc(r.error_message || 'Completed successfully')}</td>
        </tr>
      `).join('');
    },

    // ========================================================================
    // 7. COMPANIES
    // ========================================================================
    loadCompanies: async function() {
      try {
        const res = await api('/api/crm/companies');
        this.state.companies = res.items || [];
        this.renderCompaniesTable();
      } catch (err) {
        toast('Failed to load companies: ' + err.message);
      }
    },

    renderCompaniesTable: function() {
      const tbody = document.getElementById('crmCompaniesTableBody');
      if (!tbody) return;
      if (!this.state.companies.length) {
        tbody.innerHTML = '<tr><td colspan="5" class="muted-copy" style="text-align:center;">No companies found. Create one or convert from leads.</td></tr>';
        return;
      }
      tbody.innerHTML = this.state.companies.map(c => `
        <tr>
          <td><b>${this.esc(c.name)}</b></td>
          <td>${this.esc(c.domain || '—')}</td>
          <td>${this.esc(c.industry || '—')}</td>
          <td>${c.contacts_count || 0} contacts</td>
          <td>${this.formatMoney(c.annual_revenue || 0)}</td>
        </tr>
      `).join('');
    },

    // ========================================================================
    // 8. REPORTS
    // ========================================================================
    loadReports: async function() {
      await this.loadOverview();
    },

    // ========================================================================
    // 9. COMMAND PALETTE (Cmd+K / Ctrl+K)
    // ========================================================================
    bindGlobalKeys: function() {
      window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          this.openSpotlight();
        } else if (e.key === 'Escape') {
          this.closeSpotlight();
          this.closeContactDrawer();
          this.closeDealDrawer();
        }
      });
    },

    openSpotlight: function() {
      const s = document.getElementById('crmSpotlightBackdrop');
      if (!s) return;
      s.classList.add('open');
      const inp = document.getElementById('crmSpotlightInput');
      if (inp) {
        inp.value = '';
        inp.focus();
        this.renderSpotlightResults('');
      }
    },

    closeSpotlight: function() {
      document.getElementById('crmSpotlightBackdrop')?.classList.remove('open');
    },

    renderSpotlightResults: function(q) {
      const root = document.getElementById('crmSpotlightResults');
      if (!root) return;
      const lower = q.toLowerCase();

      const items = [
        { label: 'Go to CRM Hub', action: () => setView('crm-overview'), badge: 'View' },
        { label: 'Go to Contacts', action: () => setView('crm-contacts'), badge: 'View' },
        { label: 'Go to Deals & Pipeline', action: () => setView('crm-deals'), badge: 'View' },
        { label: 'Go to Tasks', action: () => setView('crm-tasks'), badge: 'View' },
        { label: 'Go to Automations', action: () => setView('crm-automations'), badge: 'View' },
        { label: '+ Create New Contact', action: () => openModal('crmContactModal'), badge: 'Action' },
        { label: '+ Create New Deal', action: () => openModal('crmDealModal'), badge: 'Action' },
        { label: 'Export Contacts CSV', action: () => window.open('/api/crm/export/contacts'), badge: 'Export' }
      ];

      const filtered = items.filter(i => !q || i.label.toLowerCase().includes(lower));
      root.innerHTML = filtered.map(item => `
        <div class="crm-spotlight-item" data-label="${this.esc(item.label)}">
          <span>${this.esc(item.label)}</span>
          <span class="crm-spotlight-item-badge">${item.badge}</span>
        </div>
      `).join('');

      root.querySelectorAll('.crm-spotlight-item').forEach((el, idx) => {
        el.onclick = () => {
          this.closeSpotlight();
          filtered[idx]?.action();
        };
      });
    },

    // ========================================================================
    // 10. MODALS & FORMS BINDINGS
    // ========================================================================
    bindModals: function() {
      document.getElementById('crmSpotlightInput')?.addEventListener('input', (e) => {
        this.renderSpotlightResults(e.target.value);
      });

      document.getElementById('crmContactsSearch')?.addEventListener('input', (e) => {
        this.state.contactsSearch = e.target.value.trim();
        this.state.contactsPage = 1;
        this.loadContacts();
      });
      document.getElementById('crmContactsStageFilter')?.addEventListener('change', (e) => {
        this.state.contactsStageFilter = e.target.value;
        this.state.contactsPage = 1;
        this.loadContacts();
      });
      document.getElementById('crmContactsScoreFilter')?.addEventListener('change', (e) => {
        this.state.contactsScoreFilter = e.target.value;
        this.state.contactsPage = 1;
        this.loadContacts();
      });
      document.getElementById('crmContactsPrevBtn')?.addEventListener('click', () => {
        if (this.state.contactsPage > 1) {
          this.state.contactsPage--;
          this.loadContacts();
        }
      });
      document.getElementById('crmContactsNextBtn')?.addEventListener('click', () => {
        this.state.contactsPage++;
        this.loadContacts();
      });

      document.getElementById('crmCreateContactForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        try {
          await api('/api/crm/contacts', {
            method: 'POST',
            body: JSON.stringify({
              first_name: f.first_name.value.trim(),
              last_name: f.last_name.value.trim(),
              email: f.email.value.trim() || undefined,
              phone: f.phone.value.trim() || undefined,
              company_name: f.company_name.value.trim() || undefined,
              lifecycle_stage: f.lifecycle_stage.value
            })
          });
          toast('Contact created');
          closeModal('crmContactModal');
          f.reset();
          this.loadContacts();
        } catch (err) {
          toast(err.message);
        }
      });

      document.getElementById('crmCreateDealForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        try {
          await api('/api/crm/deals', {
            method: 'POST',
            body: JSON.stringify({
              title: f.title.value.trim(),
              amount: parseFloat(f.amount.value) || 0,
              pipeline_id: this.state.activePipeline?.id,
              stage_id: f.stage_id.value,
              priority: f.priority.value
            })
          });
          toast('Deal created');
          closeModal('crmDealModal');
          f.reset();
          this.loadDeals();
        } catch (err) {
          toast(err.message);
        }
      });

      document.getElementById('crmCreateTaskForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        try {
          await api('/api/crm/tasks', {
            method: 'POST',
            body: JSON.stringify({
              title: f.title.value.trim(),
              task_type: f.task_type.value,
              due_date: f.due_date.value ? new Date(f.due_date.value).toISOString() : undefined,
              priority: f.priority.value
            })
          });
          toast('Task created');
          closeModal('crmTaskModal');
          f.reset();
          this.loadTasks();
        } catch (err) {
          toast(err.message);
        }
      });

      document.getElementById('crmCreateAutoForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        try {
          await api('/api/crm/automations', {
            method: 'POST',
            body: JSON.stringify({
              name: f.name.value.trim(),
              trigger_type: f.trigger_type.value,
              action_type: f.action_type.value,
              action_config: { note: 'Created via visual rule' }
            })
          });
          toast('Automation created');
          closeModal('crmAutomationModal');
          f.reset();
          this.loadAutomations();
        } catch (err) {
          toast(err.message);
        }
      });

      document.getElementById('crmDrawerBackdrop')?.addEventListener('click', () => {
        this.closeContactDrawer();
        this.closeDealDrawer();
      });
      document.getElementById('crmContactDrawerClose')?.addEventListener('click', () => {
        this.closeContactDrawer();
      });
      document.getElementById('crmDealDrawerClose')?.addEventListener('click', () => {
        this.closeDealDrawer();
      });

      document.getElementById('crmDrawerAddNoteBtn')?.addEventListener('click', () => {
        const inp = document.getElementById('crmDrawerNoteText');
        if (inp && this.state.currentDrawerContact) {
          this.addContactNote(this.state.currentDrawerContact.id, inp.value);
          inp.value = '';
        }
      });
    }
  };

  window.ZyloraCRM = CRM;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CRM.init());
  } else {
    CRM.init();
  }
})();
