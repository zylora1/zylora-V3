# Zylora — Final Local Release Audit

**Audit date:** 2026-08-26

## Release state

This package is the AI-first cleanup requested after the local visual review. The legacy template catalogue, template projects, preview thumbnails and template asset library are removed. `GET /api/templates` returns an empty list until new individually art-directed templates are intentionally added.

AI-created websites no longer select or inherit a catalogue template. Their information architecture and design direction are derived from the business brief and rendered through a hidden internal `ai-runtime`. The runtime is not available through catalogue or preview-template endpoints.

## Product polish

- Product typography moved to Inter + Space Grotesk, including the Zylora text wordmark.
- Landing, AI creation, template empty state, dashboard/editor surfaces use a restrained minimal visual system.
- Broken catalogue/media preview dependencies were removed rather than masked with fake thumbnails.
- Existing legacy sites are migrated to the internal runtime so deleted template files are not required.
- Next.js source export is generated from the SiteDocument instead of copying a legacy template project.

## Blog policy

Customer accounts and customer websites have **no blog CMS**. The normal-user dashboard has no Blog navigation or site Blog action; `/api/sites/{site_id}/blog*` endpoints do not exist; `/s/{site}/blog*` resolves as not found; customer sitemaps do not include blog URLs; and AI information architecture filters Blog/Journal/News pages. Migration `014_platform_blog_super_admin_only.sql` removes legacy site-owned blog rows.

The only retained blog is Zylora's public platform editorial surface at `/blog`. Creating and publishing those posts is available only through `/api/admin/blog*`, protected by SUPER_ADMIN authorization. Public visitors may read published Zylora articles.

## Verification

- `pytest -q --ignore=tests/test_e2e.py`: **96 passed**.
- `python scripts/browser_e2e.py`: **89 checks / 0 errors**.
- Python compileall: PASS.
- Static JavaScript syntax: PASS.
- Zero public catalogue templates: verified.
- No legacy `site_templates/` or `template_projects/` tree: verified.

## Deployment gates

Credentialed external services and network-installed production builds cannot be honestly certified from this local sandbox. Before production promotion, execute staging checks for OpenAI, Razorpay/webhooks, Cloudflare custom domains/SSL, Google OAuth/Sheets, Resend/SMTP, WhatsApp, Turnstile, PostgreSQL concurrency/backups, and a dependency-installed Next.js export build.

**Local deterministic verdict:** PASS.
**External production certification:** requires credentialed staging.
