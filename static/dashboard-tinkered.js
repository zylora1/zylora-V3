/*
 * Tinkered-inspired dashboard composition layer.
 *
 * The canonical dashboard controller still owns authentication, navigation,
 * site creation, billing, and API data. This file only composes that state
 * into the visual shell; it never invents website records or mutations.
 */
(function () {
  'use strict';

  var recentRail;
  var accountCard;
  var dashboardSites = [];

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>'\"]/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char];
    });
  }

  function safeColor(value) {
    return /^#[0-9a-f]{3,8}$/i.test(String(value || '')) ? String(value) : '#d8d8d2';
  }

  function safeImage(value) {
    var candidate = String(value || '').trim();
    if (!candidate) return '';
    if (candidate.charAt(0) === '/') return candidate;
    try {
      var parsed = new URL(candidate, window.location.origin);
      return parsed.protocol === 'https:' ? parsed.href : '';
    } catch (_) {
      return '';
    }
  }

  function newSite() {
    var create = document.querySelector('#overviewCreateSiteBtn');
    if (create) create.click();
  }

  function openStudio() {
    var firstSite = dashboardSites[0];
    if (firstSite && firstSite.id) {
      window.location.href = '/studio/' + encodeURIComponent(firstSite.id);
      return;
    }
    newSite();
  }

  function submitPrompt(value) {
    var brief = String(value || '').trim();
    if (!brief) return;
    sessionStorage.setItem('zyloraAiDraft', JSON.stringify({
      business_name: '',
      description: brief,
      origin: 'AI',
      industry: 'Business',
      style: 'swiss-minimal',
      motion_style: 'Subtle'
    }));
    window.location.href = '/ai-create';
  }

  function goToView(view) {
    var target = document.querySelector('[data-view="' + view + '"]');
    if (target) target.click();
  }

  function mountProductShell() {
    var aside = document.querySelector('.rail.sneat-sidebar');
    var logo = aside && aside.querySelector('.rail-logo');
    if (!aside || !logo) return;

    if (!aside.querySelector('.dashboard-product-switcher')) {
      var switcher = document.createElement('div');
      switcher.className = 'dashboard-product-switcher';
      switcher.setAttribute('aria-label', 'Product switcher');
      switcher.innerHTML = '<a class="is-active" href="/dashboard">Zylora</a>' +
        '<button type="button" aria-label="Open Studio">Studio</button>';
      logo.insertAdjacentElement('afterend', switcher);
      switcher.querySelector('button').addEventListener('click', openStudio);
    }

    var nav = aside.querySelector('nav');
    if (nav && !aside.querySelector('.dashboard-new-site')) {
      var newSiteButton = document.createElement('button');
      newSiteButton.className = 'dashboard-new-site';
      newSiteButton.type = 'button';
      newSiteButton.innerHTML = '<span aria-hidden="true">+</span><span>New website</span>';
      nav.insertAdjacentElement('beforebegin', newSiteButton);
      newSiteButton.addEventListener('click', newSite);
    }
  }

  function mountAccountMenu() {
    var aside = document.querySelector('.rail.sneat-sidebar');
    var account = aside && aside.querySelector('.sidebar-user');
    if (!aside || !account || account.dataset.accountMenuMounted) return;
    account.dataset.accountMenuMounted = 'true';
    account.setAttribute('role', 'button');
    account.setAttribute('tabindex', '0');
    account.setAttribute('aria-haspopup', 'menu');
    account.setAttribute('aria-expanded', 'false');

    var popover = document.createElement('div');
    popover.className = 'dashboard-account-popover';
    popover.hidden = true;
    popover.setAttribute('role', 'menu');
    popover.innerHTML =
      '<div class="dashboard-account-popover-heading"><b id="dashboardAccountName">Account</b><small id="dashboardAccountRole">User</small></div>' +
      '<button type="button" role="menuitem" data-account-view="settings">Account settings</button>' +
      '<button type="button" role="menuitem" data-account-view="billing">Plans &amp; billing</button>' +
      '<button type="button" role="menuitem" data-account-view="support">Support</button>' +
      '<button type="button" role="menuitem" data-account-logout="true">Log out</button>';
    account.insertAdjacentElement('afterend', popover);

    function syncLabel() {
      var name = document.querySelector('#sideUserName');
      var role = document.querySelector('#sideUserRole');
      var nameTarget = popover.querySelector('#dashboardAccountName');
      var roleTarget = popover.querySelector('#dashboardAccountRole');
      if (nameTarget) nameTarget.textContent = name ? name.textContent : 'Account';
      if (roleTarget) roleTarget.textContent = role ? role.textContent : 'User';
    }
    function close() {
      popover.hidden = true;
      account.setAttribute('aria-expanded', 'false');
    }
    function open() {
      syncLabel();
      popover.hidden = false;
      account.setAttribute('aria-expanded', 'true');
      var first = popover.querySelector('button');
      if (first) first.focus();
    }
    function toggle(event) {
      if (event) event.preventDefault();
      if (popover.hidden) open(); else close();
    }
    account.addEventListener('click', toggle);
    account.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') toggle(event);
      if (event.key === 'Escape') close();
    });
    popover.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.accountLogout) {
        var logout = document.querySelector('#logoutBtn');
        if (logout) logout.click();
      } else if (button.dataset.accountView) {
        goToView(button.dataset.accountView);
      }
      close();
    });
    document.addEventListener('click', function (event) {
      if (!account.contains(event.target) && !popover.contains(event.target)) close();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !popover.hidden) close();
    });
  }

  function mountResourceCard() {
    var aside = document.querySelector('.rail.sneat-sidebar');
    var account = aside && aside.querySelector('.sidebar-user');
    if (!aside || !account || aside.querySelector('.dashboard-resource-card')) return;
    accountCard = document.createElement('section');
    accountCard.className = 'dashboard-resource-card';
    accountCard.setAttribute('aria-label', 'Account resources');
    accountCard.innerHTML =
      '<div class="dashboard-resource-row"><span>AI credits</span><strong id="dashboardAiCredits">Loading…</strong></div>' +
      '<div class="dashboard-resource-meter" aria-hidden="true"><i id="dashboardAiMeter"></i></div>' +
      '<div class="dashboard-resource-row dashboard-resource-row-muted"><span>Lead credits</span><strong id="dashboardLeadCredits">Loading…</strong></div>' +
      '<button class="dashboard-upgrade-button" type="button" id="dashboardUpgradeButton">Upgrade plan</button>';
    account.insertAdjacentElement('beforebegin', accountCard);
    accountCard.querySelector('#dashboardUpgradeButton').addEventListener('click', function () { goToView('billing'); });

    fetch('/api/billing', { credentials: 'same-origin' }).then(function (response) {
      if (!response.ok) throw new Error('billing unavailable');
      return response.json();
    }).then(function (billing) {
      var wallet = billing.credit_wallet || {};
      var ai = billing.ai_credits == null ? null : billing.ai_credits;
      var lead = billing.lead_credits == null ? null : billing.lead_credits;
      var aiTarget = accountCard.querySelector('#dashboardAiCredits');
      var leadTarget = accountCard.querySelector('#dashboardLeadCredits');
      if (aiTarget) aiTarget.textContent = ai == null ? '—' : String(ai);
      if (leadTarget) leadTarget.textContent = lead == null ? '—' : String(lead);
      var meter = accountCard.querySelector('#dashboardAiMeter');
      var allocation = Number(wallet.normal_allocation || 0);
      var available = Number(wallet.normal_available == null ? ai : wallet.normal_available);
      if (meter) meter.style.width = allocation > 0 ? Math.max(0, Math.min(100, available / allocation * 100)) + '%' : '0%';
      var upgrade = accountCard.querySelector('#dashboardUpgradeButton');
      if (upgrade && ['PRO', 'MANAGED'].includes(String(billing.plan || '').toUpperCase())) upgrade.hidden = true;
    }).catch(function () {
      var aiTarget = accountCard && accountCard.querySelector('#dashboardAiCredits');
      var leadTarget = accountCard && accountCard.querySelector('#dashboardLeadCredits');
      if (aiTarget) aiTarget.textContent = 'Unavailable';
      if (leadTarget) leadTarget.textContent = 'Unavailable';
    });
  }

  function cardMarkup(site) {
    var id = encodeURIComponent(site.id || '');
    var isLive = site.status === 'LIVE';
    var destination = isLive && site.slug ? '/s/' + encodeURIComponent(site.slug) : '/studio/' + id;
    var domain = site.custom_domain || (site.slug ? site.slug + '.zylora.site' : 'Draft website');
    var updated = site.updated_at ? new Date(site.updated_at).toLocaleDateString() : 'Updated recently';
    var preview = safeImage(site.preview_image || site.thumbnail || site.cover_image);
    var thumb = preview
      ? '<div class="dashboard-site-card-thumb dashboard-site-card-thumb-image"><img src="' + escapeHtml(preview) + '" alt="" loading="lazy" decoding="async"><span>' + (isLive ? 'LIVE' : 'DRAFT') + '</span></div>'
      : '<div class="dashboard-site-card-thumb" style="--site-accent:' + safeColor(site.accent) + '"><span>' + (isLive ? 'LIVE' : 'DRAFT') + '</span><i aria-hidden="true"></i></div>';
    return '<article class="dashboard-site-card" role="listitem">' +
      '<a href="' + destination + '" class="dashboard-site-card-link"' + (isLive ? ' target="_blank" rel="noopener"' : '') + '>' +
        thumb +
        '<div class="dashboard-site-card-body"><span class="dashboard-site-card-kicker">Website</span><h3>' + escapeHtml(site.business_name || 'Untitled website') + '</h3><p>' + escapeHtml(domain) + '</p><small>' + escapeHtml(updated) + '</small><span class="dashboard-site-card-arrow" aria-hidden="true">↗</span></div>' +
      '</a>' +
    '</article>';
  }

  function renderRecentSites(sites) {
    if (!recentRail) return;
    var all = Array.isArray(sites) ? sites : [];
    var cards = all.slice(1, 7);
    recentRail.hidden = cards.length === 0;
    recentRail.innerHTML = cards.map(cardMarkup).join('');
  }

  function mountRecentSites() {
    var primary = document.querySelector('#heroSiteCard');
    if (!primary) return;
    var recent = primary.closest('.dashboard-recent-sites');
    if (!recent) {
      recent = document.createElement('section');
      recent.className = 'dashboard-recent-sites';
      recent.setAttribute('aria-label', 'Recent websites');
      primary.parentNode.insertBefore(recent, primary);
      recent.appendChild(primary);
    }
    if (!recent.querySelector('.dashboard-site-card-rail')) {
      recentRail = document.createElement('div');
      recentRail.className = 'dashboard-site-card-rail';
      recentRail.setAttribute('role', 'list');
      recentRail.setAttribute('aria-label', 'More websites');
      recent.appendChild(recentRail);
    } else recentRail = recent.querySelector('.dashboard-site-card-rail');
    window.addEventListener('zylora:sites-loaded', function (event) {
      dashboardSites = Array.isArray(event.detail && event.detail.sites) ? event.detail.sites : [];
      renderRecentSites(dashboardSites);
    });
  }

  function mountPrompt() {
    var overview = document.querySelector('#overview');
    var viewHead = overview && overview.querySelector('.view-head');
    if (!overview || !viewHead || document.querySelector('#dashboardCreateComposer')) return;
    var hero = document.createElement('section');
    hero.className = 'dashboard-ai-hero';
    hero.setAttribute('aria-labelledby', 'dashboardCreateTitle');
    hero.innerHTML =
      '<span class="dashboard-ai-kicker">Zylora workspace</span>' +
      '<h2 id="dashboardCreateTitle">Build something extraordinary.</h2>' +
      '<p>Start with a thought, then shape the details in Studio.</p>' +
      '<form class="dashboard-create-composer" id="dashboardCreateComposer">' +
        '<label class="sr-only" for="dashboardCreateInput">Describe what you want to build</label>' +
        '<textarea id="dashboardCreateInput" name="idea" rows="2" placeholder="Describe a website you want to build…"></textarea>' +
        '<div class="dashboard-create-composer-footer"><span class="dashboard-create-hint">Your idea stays with this project.</span><button type="submit" disabled>Create with AI <span aria-hidden="true">→</span></button></div>' +
      '</form>' +
      '<div class="dashboard-prompt-chips" aria-label="Starter ideas">' +
        '<button type="button" data-dashboard-prompt="A calm clinic website with appointments">Clinic with appointments</button>' +
        '<button type="button" data-dashboard-prompt="A local service website with a lead form">Local service business</button>' +
        '<button type="button" data-dashboard-prompt="A polished portfolio with case studies">Portfolio with case studies</button>' +
      '</div>';
    viewHead.insertAdjacentElement('afterend', hero);
    var heading = document.createElement('div');
    heading.className = 'dashboard-section-heading';
    heading.innerHTML = '<div><span class="dashboard-ai-kicker">Your workspace</span><h2>Recent websites</h2></div><button class="dashboard-text-link" type="button" data-view-jump="websites">Explore projects <span aria-hidden="true">→</span></button>';
    hero.insertAdjacentElement('afterend', heading);
    var form = hero.querySelector('#dashboardCreateComposer');
    var input = hero.querySelector('#dashboardCreateInput');
    var submit = form.querySelector('button[type="submit"]');
    function syncSubmit() {
      var hasBrief = input.value.trim().length > 0;
      submit.disabled = !hasBrief;
      submit.setAttribute('aria-disabled', hasBrief ? 'false' : 'true');
    }
    input.addEventListener('input', syncSubmit);
    syncSubmit();
    form.addEventListener('submit', function (event) { event.preventDefault(); submitPrompt(input.value); });
    hero.querySelectorAll('[data-dashboard-prompt]').forEach(function (chip) {
      chip.addEventListener('click', function () { input.value = chip.getAttribute('data-dashboard-prompt') || ''; input.dispatchEvent(new Event('input')); input.focus(); });
    });
    heading.querySelector('[data-view-jump="websites"]').addEventListener('click', function () { goToView('websites'); });
  }

  function mount() {
    mountProductShell();
    mountAccountMenu();
    mountResourceCard();
    mountPrompt();
    mountRecentSites();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
}());
