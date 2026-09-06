// Revalidate an authenticated page restored from BFCache/history. The
// HttpOnly session cookie remains authoritative; transient network failures do
// not turn a valid session into a logout.
(() => {
  if (window.__zyloraSessionRestoreInstalled) return;
  window.__zyloraSessionRestoreInstalled = true;
  async function restore() {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'same-origin', cache: 'no-store' });
      if (response.ok) {
        const body = await response.json();
        if (body.csrf_token) sessionStorage.setItem('csrf', body.csrf_token);
        window.dispatchEvent(new CustomEvent('zylora:session-restored', { detail: body }));
      } else if (response.status === 401) {
        const next = `${location.pathname}${location.search}${location.hash}`;
        location.replace(`/login?next=${encodeURIComponent(next)}`);
      }
    } catch (_) { /* keep the current page during transient network loss */ }
  }
  window.addEventListener('pageshow', event => { if (event.persisted) restore(); });
})();
