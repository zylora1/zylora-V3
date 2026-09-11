# Zylora design reference audit

Audit date: 2026-09-11. The references were inspected directly for information architecture, interaction language and product storytelling. They are references, not copied assets or application architecture.

## References inspected

| Reference | Observed pattern | Zylora translation |
| --- | --- | --- |
| [Linearity](https://www.linearity.io/) | A focused product promise, prompt-to-output narrative, editable work, role-based use cases, pricing/FAQ and a support-oriented footer. | Zylora leads with the business outcome, then explains the connected path from Studio to publishing, leads, appointments and measurement. |
| [Wix](https://www.wix.com/) | Broad product mega-navigation grouped by creation, AI, business tools, solutions and resources; the homepage makes the website-builder category explicit. | Zylora keeps the public route inventory discoverable through Product, Solutions, Resources and Pricing links while keeping the authenticated workspace separate. |

## Decisions made

- Public product pages use a light paper-white surface, restrained borders, dark editorial type, violet action states and a small lime/green status vocabulary. The editor uses its own drafting-table chrome so customer-site themes are not accidentally treated as editor chrome.
- The first screen answers what Zylora is, who it helps and what the next action is. Product pages then show a workflow, concrete capabilities, FAQs and related routes.
- Navigation is intentionally shorter than the reference mega-menus. The full inventory remains available through semantic footer groups and server-rendered route families.
- Product visuals are CSS/UI explanations of the current product workflow. No reference screenshots, logos, illustrations or third-party assets were imported.

## Anti-patterns rejected

The current translation does not depend on glowing hero blobs, decorative gradient backgrounds, fake testimonials, invented customer logos, card-wall-only information architecture or claims that are not backed by the existing backend. Public copy also avoids telling search engines or AI systems how to rank the page.

## Local evidence

Representative captures from the executed Chromium smoke run are stored under `artifacts/public-route-browser/` for home, features and help at 1440×900 and 390×844. The browser check found one H1, no horizontal overflow and zero console errors on every checked route and viewport.
