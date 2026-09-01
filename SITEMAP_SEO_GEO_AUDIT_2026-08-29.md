# Zylora Sitemap + SEO/GEO Discovery Audit — 2026-08-29

## Scope

Audited the latest Zylora release archive `Zylora-AI-Detailed-Prompt-Nudge-2026-08-29.zip`, including the platform sitemap, customer-site sitemap generation, canonical logic, public routing, robots.txt, llms.txt, platform acquisition pages, blog and freelancer profile discovery output.

This report uses a transparent **sitemap/discovery-layer** rubric. It does not pretend that an XML sitemap alone can guarantee Google rankings, AI citations, traffic, leads, or sales.

## Before changes — score

### SEO sitemap/discovery score: 44/100

| Area | Weight | Before | Reason |
|---|---:|---:|---|
| XML validity + absolute URLs | 10 | 10 | Valid XML and absolute platform URLs. |
| Canonical consistency | 20 | 7 | Platform sitemap could advertise Zylora fallback URLs for sites whose custom domain was canonical; advanced canonical overrides were not enforced in sitemap membership. |
| Published/indexable-only accuracy | 20 | 8 | LIVE/PUBLISHED filtering existed, but customer page discovery could read the mutable draft page graph and platform sitemap did not consistently exclude site/page noindex state. |
| Accurate freshness (`lastmod`) | 15 | 3 | Platform core, blog and freelancer URLs omitted lastmod; customer lastmod could reflect mutable site updates rather than the successful published version. |
| robots/sitemap discovery | 10 | 8 | Sitemap was linked from robots.txt and public crawling was generally allowed. |
| Protocol scale safety | 10 | 0 | No sitemap index/sharding at the 50,000-URL / 50-MB limits. |
| Duplicate/private/preview hygiene | 10 | 8 | Basic private routes were excluded, but canonical duplicates and draft leakage remained possible. |
| Signal hygiene | 5 | 0 | `<priority>` was emitted even though major engines ignore it. |
| **Total** | **100** | **44** | |

### GEO / generative-discovery score: 48/100

The starting point already had meaningful SEO/GEO infrastructure, but the sitemap/discovery surface weakened it: freshness was incomplete, canonical identity could conflict, secondary acquisition pages had limited machine-readable context, template previews were not explicitly noindex, freelancer profile shells were weak for crawler understanding/404 handling, and platform llms.txt used relative/minimal discovery references.

## Defects corrected

1. **Canonical conflict removed** — once a customer custom domain is authoritative, the platform sitemap no longer advertises the duplicate fallback `/s/{slug}` URL.
2. **Draft leakage removed** — public sitemap/routing uses the immutable published site document, not post-publication draft edits.
3. **Noindex enforcement** — site-level/page-level noindex state is respected before URLs enter discovery output.
4. **Accurate lastmod** — sitemap freshness is derived from real file/content modification or successful publication timestamps and normalized to UTC W3C/ISO-8601 timestamps.
5. **Ignored tags removed** — no `<priority>` or `<changefreq>` noise.
6. **Scale support added** — platform sitemap automatically becomes a sitemap index and shards by both 50,000-URL and 50-MB uncompressed limits.
7. **Duplicate elimination** — canonical URL entries are deterministic and deduplicated.
8. **Crawler groups corrected** — OAI-SearchBot, Googlebot and Bingbot can access public content while retaining private dashboard/editor/API disallows.
9. **Template previews noindexed** — preview pages cannot become low-value competing search results.
10. **Acquisition metadata strengthened** — Templates, Freelancers and Blog receive stronger titles/descriptions, canonical metadata, rich-preview directives, Open Graph/Twitter metadata and JSON-LD where truthful.
11. **Freelancer profile crawl quality fixed** — approved profiles receive server-rendered canonical/profile structured data; nonexistent profiles return a true 404 instead of a generic shell.
12. **Blog crawl/GEO output strengthened** — only published/indexable posts are surfaced, with canonical, rich-preview, social metadata and BlogPosting structured data.
13. **llms.txt discovery clarified** — canonical absolute platform URLs and factual product/discovery boundaries are emitted; it remains supplemental rather than a substitute for standard SEO.
14. **Customer sitemap lastmod normalized** — customer/custom-domain sitemap timestamps now use a consistent `YYYY-MM-DDTHH:MM:SSZ` form.

## After changes — deterministic technical score

### SEO sitemap/discovery implementation: 100/100

All controllable items in the rubric are now implemented: protocol-valid XML, canonical-only URLs, published/indexable-only membership, truthful lastmod, robots discovery, duplicate hygiene, private/preview exclusion, 50k/50MB sharding, and removal of ignored sitemap fields.

### GEO / generative-discovery implementation: 100/100 on controllable technical checks

Public discovery is canonical and fresh, OAI-SearchBot is allowed on public resources, acquisition/detail pages expose substantially stronger server-readable metadata/structured context, invalid profile URLs return real 404s, and llms.txt provides canonical discovery references.

**Important:** 100/100 here means all items in this deterministic technical rubric pass. It does **not** mean Zylora is guaranteed to rank #1, be cited by every AI engine, or achieve maximum traffic/sales. Search engines and AI retrieval systems make independent decisions, and commercial outcomes depend on content quality, brand demand, backlinks/mentions, competition, Core Web Vitals, pricing, offer strength, conversion UX, distribution and real user behavior.

## Runtime sitemap behavior

The clean repository database currently has no LIVE customer sites, no PUBLISHED platform blog posts and no APPROVED freelancer profiles, so its platform sitemap correctly contains only four canonical acquisition URLs:

- `/`
- `/templates`
- `/freelancers`
- `/blog`

As real content is published/approved, the dynamic sitemap automatically adds eligible canonical URLs with real lastmod values. Custom-domain customer sites serve their own canonical sitemap.

## Verification

- 122/122 non-browser repository tests passed across split complete test groups.
- Browser E2E wrapper passed; underlying browser workflow reports 91 checks / 0 errors.
- `scripts/seo_audit.py`: 17 checks / 0 errors.
- Python compilation for modified sitemap/SEO modules passed.
- Generated sample XML parses successfully.

## Deployment note

The repository has no real production `APP_URL`; `.env.example` still uses localhost. Therefore the standalone XML sample supplied with this audit intentionally uses the reserved `.example` placeholder host. **Do not deploy that sample unchanged.** The updated application ZIP is the production implementation: configure the real HTTPS `APP_URL`, and `/sitemap.xml` will generate the correct canonical URLs automatically.

## What still requires real-world/production validation

These are not sitemap defects and cannot be honestly certified from an offline repository:

- Real production HTTPS/domain/canonical response behavior.
- Google Search Console sitemap submission/index coverage.
- Bing Webmaster Tools / IndexNow production credentials and observed processing.
- Cloudflare/WAF bot rules allowing legitimate public crawlers in production.
- Actual Google/Bing/ChatGPT/Perplexity discovery, ranking or citation behavior.
- Backlinks, branded search demand, content authority, competitive rankings and conversion/sales performance.
