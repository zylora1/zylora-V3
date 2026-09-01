# Zylora — AI-first website builder

Zylora is a FastAPI website builder and business workspace. This build ships a 40-template public catalogue adapted from user-supplied licensed source archives. Each public template is normalized into Zylora’s verified template-project runtime for editing, publishing and export. AI-created websites still use a separate prompt-derived SiteDocument runtime and do not depend on a starting template.

## Design system

The product uses **Inter** for interface/body text and **Space Grotesk** for display typography and the Zylora wordmark. No font binaries are bundled. The landing page, AI creator, template-status page and resources page use a restrained neutral system with minimal decoration and generous spacing.

## Current creation model

1. The user describes the business, audience, offer and website requirements.
2. Zylora extracts requirements and creates an information architecture.
3. Page count is determined by the brief/business needs, not the subscription plan.
4. A visual direction is selected or inferred; there is no starting catalogue template.
5. Zylora generates the SiteDocument and validates it.
6. The site opens in the same manual + AI editor used for all sites.
7. Publishing, leads, appointments, domains, SEO, notifications and source export continue from the same workspace.

`GET /api/templates` returns the verified public template catalogue. The internal `ai-runtime` remains infrastructure only and is never exposed as a selectable template.

## Major product features

- AI website creation without a starting template.
- Structured manual editor and AI editor with revisions/undo.
- Responsive desktop/tablet/mobile preview modes.
- Managed media replacement/editing and accessibility metadata.
- Draft/live publishing with one live website per account.
- Leads, appointments, chatbot, notifications and Google Sheets integration.
- SEO/GEO settings, canonical URLs, sitemap, robots and structured data.
- Public Zylora editorial/blog publishing is managed only by SUPER_ADMIN; customer websites have no blog CMS or `/blog` route.
- Custom domains, Cloudflare integration path and SSL lifecycle.
- Free/Starter/Growth billing, separate AI/lead credit wallets and top-ups.
- Freelancer marketplace, support system and SUPER_ADMIN surfaces.
- Independent Next.js source export generated from the SiteDocument at export time.

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000`.

Optional development account data can be prepared with the scripts under `scripts/` where applicable.

For the first production deployment, set `SUPER_ADMIN_EMAIL` and `SUPER_ADMIN_PASSWORD` as server-side environment secrets. Startup creates the account only when it does not already exist, stores only the salted password hash, and never resets an existing SUPER_ADMIN on redeploy. After the initial bootstrap succeeds, remove `SUPER_ADMIN_PASSWORD` (and `SUPER_ADMIN_EMAIL` with it) from the deployment environment.

## Validation

Run the core local checks before deployment:

```bash
python -m compileall -q app scripts tests
for f in static/*.js; do node --check "$f"; done
pytest -q
```

Before creating a distributable release from a clean checkout/worktree, remove local test/runtime state and run the fail-closed package gate:

```bash
make clean-test-data
make release-package-qa
```

`release-package-qa` rejects local databases, `.env`, caches/bytecode, runtime uploads, logs, private-key material, symlinks, `node_modules` and `.next` output so audit/development state cannot be accidentally shipped.

Live OpenAI, Razorpay, Cloudflare, Google, Resend, Twilio WhatsApp and Turnstile paths require real production credentials and provider-side verification. A network-enabled CI environment should also run `npm install && npm run build` on a generated source export before production deployment.

See `REBUILD_NOTES_2026-08-26.md` for the catalogue-removal and migration details.

## Railway deployment

This repository deploys as one FastAPI web/API service. The application serves the frontend from `static/`, runs its bounded maintenance loop in-process, and does not require a separate worker or Redis. Build with the root `Dockerfile`, run `python scripts/run_migrations.py` as the Railway pre-deploy command, and let the image start through `run.sh`. The server binds to `0.0.0.0` and Railway's `PORT`; configure the health check as `/api/health`.

Use Railway PostgreSQL through `DATABASE_URL`. Set `APP_ENV=production`, an HTTPS `APP_URL`, and the production variables documented in `.env.example`. Production validation fails closed when a release-critical provider is missing. User media must use S3-compatible storage (`MEDIA_STORAGE_PROVIDER=s3`) or a Railway volume mounted at `MEDIA_STORAGE_DIR` with `MEDIA_STORAGE_DURABLE=true`; the container filesystem is not durable.

Migrations are ordered, forward-only SQL files recorded in `schema_migrations`. Run the pre-deploy command once before application replicas start. To roll back application code, redeploy the previous Git commit; do not delete tables or rewrite migration history. Database rollback requires a separately reviewed compensating migration or a verified backup restore.

## Universal website import

Zylora can safely import an `.html` file or a ZIP project and normalize it into the existing SiteDocument/editor runtime. Framework detection covers HTML/CSS/JS, React, Next.js, Angular, Vue, Nuxt, Svelte, SvelteKit and Astro. Rendered `out`/`dist`/`build` output is preferred when present; otherwise supported source markup is normalized without executing uploaded package scripts or application JavaScript. Imported pages participate in the normal draft, preview, publish, SEO, media, history and independent Next.js export pipelines.

Local raster assets are copied into Zylora managed media. Image replacement is unified across normal `<img>` elements, responsive `<picture>` sources, video posters, SVG `<image>` elements, inline backgrounds and background images discovered in imported stylesheets. Original imported assets remain retained so Reset can restore the source design.

Security limits: imports reject path traversal and symlinks, cap archive/file/expanded sizes and page count, remove executable `<script>`, iframe/object/embed content and inline event handlers, and never run uploaded build commands on the Zylora server.
