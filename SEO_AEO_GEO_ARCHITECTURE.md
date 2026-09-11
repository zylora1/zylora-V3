# SEO, AEO and GEO architecture

## SEO

Public product, solution, information, help, blog and template surfaces are server-rendered. The page builders in `app/public_seo.py` emit unique title, description, canonical URL, Open Graph/Twitter metadata, one H1, semantic sections, internal related links and JSON-LD. `robots.txt`, sitemap partitioning and `llms.txt` are served by `app/main.py`; private editor, dashboard, authentication, checkout and preview surfaces use noindex headers/metadata.

The public inventory is registry-backed through `PRODUCTS`, `SOLUTIONS`, `INFO_PAGES`, `HELP_ARTICLES` and `PUBLIC_SEO_PATHS`, reducing the risk that a page exists in copy but not in sitemap generation. Customer sites continue through the existing SEO engine, published-site view, redirects, canonical resolution, structured data and CMS repeater paths.

## AEO

Pages answer the primary question in the H1/intro, then use descriptive H2s, short workflow steps and FAQ blocks where the product actually has a supported answer. FAQs are explanatory content, not instructions to ranking systems. The help center uses a small client-side filter after its server-rendered article index; the content remains available without requiring that interaction.

## GEO

The entity is consistently named as Zylora, a website and customer-growth platform. Product clusters cover Studio, AI editing, websites, publishing, leads, appointments, CMS, CRM, analytics, domains and SEO. Solution clusters cover the business contexts represented by the existing route registry. Internal links connect product → solution → help/support paths without inventing third-party authority or customer proof.

## Executed checks

The focused information-architecture suite passed 19 tests with one known Starlette/httpx deprecation warning. Chromium and Firefox each checked 15 public routes at 1440×900 and 390×844: 30 results per browser, all HTTP 200, one H1, no horizontal overflow and zero console errors. Full indexing and external search-console behavior remain unverified.
