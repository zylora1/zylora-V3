(() => {
  const shell = document.querySelector('.app-shell');
  const toggle = document.querySelector('#sidebarToggle');
  if (!shell || !toggle) return;
  const storageKey = 'zylora.sidebar.collapsed';
  const applyState = collapsed => {
    shell.classList.toggle('sidebar-collapsed', collapsed && window.innerWidth > 760);
    toggle.setAttribute('aria-expanded', String(!collapsed));
    toggle.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation');
  };
  try { applyState(localStorage.getItem(storageKey) === 'true'); } catch { applyState(false); }
  toggle.addEventListener('click', () => {
    if (window.innerWidth <= 760) return;
    const collapsed = !shell.classList.contains('sidebar-collapsed');
    try { localStorage.setItem(storageKey, String(collapsed)); } catch { /* Storage is optional. */ }
    applyState(collapsed);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 760) shell.classList.remove('sidebar-collapsed');
    else {
      try { applyState(localStorage.getItem(storageKey) === 'true'); } catch { applyState(false); }
    }
  }, { passive: true });
  document.querySelectorAll('.rail-btn[data-view]').forEach(button => {
    if (!button.title) button.title = button.querySelector('.menu-label')?.textContent?.trim() || 'Open section';
  });
})();
