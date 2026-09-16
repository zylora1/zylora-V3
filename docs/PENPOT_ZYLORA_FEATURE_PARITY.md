# Penpot ↔ Zylora V1 feature parity

**Policy:** Penpot owns how a website looks. Zylora owns what it does. The
compiler is the only boundary that turns design-time objects into the
runtime/publish `SiteDocument`.

Status meanings: `PASS` means the local contract and relevant Zylora tests
pass; `PARTIAL` means the boundary exists but the real Penpot runtime flow is
not certified; `BLOCKED_BY_EXTERNAL_ENVIRONMENT` means the check requires the
unavailable Penpot/Docker/provider environment; `NOT_REQUIRED` means Penpot is
not the authority for that capability.

| Feature | Penpot responsibility | Zylora responsibility | Plugin support | Compiler support | Runtime support | Test/evidence | Status |
|---|---|---|---|---|---|---|---|
| Pages | Visual page canvas | IDs, slugs, routing, SEO, 298-page limit | Pages bridge contract | Page mapping | Hosted routes | page/CAS tests | PARTIAL |
| Navigation | Appearance and layout | Relationships, active/mobile behavior, routing, accessibility | Registry component | Semantic binding | Zylora renderer | semantic schema tests | PARTIAL |
| Buttons | Visual treatment | Explicit action target and validation | Registry component | `actions` validation | Link/action runtime | unsafe URL tests | PARTIAL |
| Links | Visual text/icon | internal, external, anchor, email, phone, booking, form, modal targets | Metadata contract | Safe action validation | Zylora runtime | link validator tests | PASS |
| Text/headings | Typography and layout | semantic role and accessible HTML meaning | Registry component | text/heading mapping | Semantic renderer | schema registry tests | PARTIAL |
| Images | Crop, frame, effects | asset ownership, alt text, CDN and responsive media | Registry component | image mapping | Media runtime | existing media/security suite | PARTIAL |
| Sections/cards | Geometry and visual grouping | semantic structure and publish behavior | Registry component | frame/section mapping | Renderer | compiler tests | PARTIAL |
| Forms | Visual fields and layout | validation, ownership, submission, spam protection | Contact/lead registry components | semantic config/bindings | Lead/form services | lead/form suite | PARTIAL |
| Lead capture | Form appearance | lead persistence, notifications, one lead credit | Lead Form | `lead-form` metadata | Lead service/Telnyx | security/credit tests | PARTIAL |
| Appointments | Widget appearance | timezone, availability, conflicts, buffers, cancellation | Appointment component | `appointment-widget` metadata | Appointment service | appointment suite | PARTIAL |
| AI Sales Assistant | Launcher/chat placement | AIService, RAG, credits, moderation, lead capture | AI assistant component | semantic metadata | Hosted assistant runtime | AI/security suite | PARTIAL |
| CMS | Binding/layout visualisation | collections, records, ownership and queries | CMS list/item/field registry | bindings preserved | CMS runtime | CMS suite | PARTIAL |
| Blog | Article/card layout | posts, slugs, publication, SEO and canonical routes | Blog registry components | bindings preserved | Blog runtime | blog/SEO suite | PARTIAL |
| SEO | Optional editor controls | title, description, canonical, OG, schema, sitemap, robots | SEO surface planned | page SEO preserved | Public SEO renderer | SEO suite | PARTIAL |
| Domains | None | subdomains, DNS, SSL, CDN, custom domains | Not applicable | Not applicable | Hosted Zylora | domain suite | NOT_REQUIRED |
| Analytics | Visual analytics blocks only | event collection and reporting | Not applicable | visual-only safe | Zylora analytics | analytics suite | NOT_REQUIRED |
| Responsive behavior | Visual breakpoints and layout | deterministic desktop/tablet/mobile overrides | Responsive metadata | overrides preserved | Responsive renderer | responsive matrix | PARTIAL |
| Accessibility | Visual hierarchy | roles, names, labels, alt, focus and semantic HTML | Metadata fields | accessibility preserved | Published HTML | axe/local accessibility | PARTIAL |
| Publishing | Save design source | validate, enforce plans/branding, publish and host | Preview/publish bridge contract | SiteDocument compiler | Zylora publisher | publishing suite | PARTIAL |
| Branding | Visual brand styling | server/compile/runtime entitlement enforcement | Not authoritative | preserved metadata | Publisher enforcement | branding tests | NOT_REQUIRED |
| Plan restrictions | UI affordances only | authoritative plan, credit and page enforcement | UX only | no bypass | Backend | entitlement/page tests | NOT_REQUIRED |
| Credits | None | AI and lead credit accounting | No provider secrets | no bypass | AI/Telnyx services | ledger/security tests | NOT_REQUIRED |
| AI editing | Visual result | typed semantic commands and CAS | Interaction bridge | canonical operations | Mutation service | agent gateway tests | PARTIAL |
| External AI editing | None | MCP/REST/OAuth scopes, allowlists, CAS and semantic commands | Authenticated bridge | canonical operations | Gateway/mutation service | gateway/OAuth suite | PARTIAL |
| Design tokens | Tokens and visual values | token semantics and safe propagation | Metadata/registry contract | document tokens | Renderer | token tests | PARTIAL |
| Semantic duplication | Penpot object duplication | regenerate runtime instance IDs, retain shared references | Metadata helper | deterministic normalization | SiteDocument | duplicate helper tests | PASS |
| Schema validation | PluginData transport | schema versions, component registry, unsafe-value rejection | JSON Schema v1 | compiler enforcement | publish gate | semantic/compiler tests | PASS |

## Current cutover gate

The source boundary is real and pinned at `vendor/penpot/`, but actual Penpot
runtime, OIDC SSO, real file persistence, plugin execution and real-file
compile/publish remain `BLOCKED_BY_EXTERNAL_ENVIRONMENT` until a Linux-capable
Docker/staging environment is available. `STUDIO_ENGINE=legacy` therefore
remains the active default and rollback path.
