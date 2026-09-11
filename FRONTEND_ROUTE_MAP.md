# Frontend route map

## Public, crawlable, server-rendered

- `/`, `/pricing`, `/features`, `/website-builder`, `/zylora-studio`, `/ai-editor`, `/ai-website-builder`, `/ai-website-generator`, `/ai-sales-assistant`.
- `/lead-generation`, `/appointments`, `/custom-domains`, `/integrations`, `/cms`, `/crm`, `/analytics`, `/seo`.
- `/solutions/small-business`, `/solutions/clinics`, `/solutions/schools`, `/solutions/coaching-centers`, `/solutions/coaches`, `/solutions/agencies`, `/solutions/gyms`, `/solutions/restaurants`, `/solutions/salons`, `/solutions/freelancers`, `/solutions/portfolio`, `/solutions/real-estate`.
- `/blog`, `/blog/{slug}`, `/help`, `/help/{slug}`, `/about`, `/security`, `/status`, `/support`, `/contact`, `/report-abuse`, `/legal`, `/terms`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`.

## Authenticated or private application entry points

- `/dashboard` and `/super-admin[/{subpath}]`.
- `/studio/{site_id}` is the canonical editor; `/editor/{site_id}` is an authenticated compatibility redirect.
- `/preview/{site_id}` and `/studio/{site_id}/publish` require an authenticated owner and are marked noindex.
- `/onboarding` requires authentication and redirects into the existing dashboard site-creation flow.
- `/choose-plan`, `/checkout/{plan}`, `/checkout/processing`, `/checkout/success`, `/checkout/failed` and `/checkout/cancelled` are private/noindex billing surfaces. Plan selection redirects to the existing server-priced checkout page.

## Authentication and account transition pages

`/login`, `/signup`, `/forgot-password`, `/reset-password`, `/verify-email`, `/accept-transfer`, `/auth/error` and `/account/suspended` are private/auth transition surfaces. They do not enter the indexable sitemap.

## Compatibility and legacy

Legacy template preview and published-site paths remain in `app/main.py` and `app/public_seo.py`. Sites that have not migrated to Studio authority continue through the legacy renderer path. No `/studio-v2` route is added.
