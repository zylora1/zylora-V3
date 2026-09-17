# Zylora Public Site Route Audit

This document inventories every existing public route, template, dynamic dependency, workflow, and current status across the Zylora platform as of September 2026.

---

## 1. Public Route Inventory

### 1.1 Homepage (`/`)
* **Route**: `/` (GET)
* **Serving Handler**: `home(request: Request)` in `app/main.py` -> `_landing_html(request)`
* **File / Template**: `static/index.html`
* **Purpose**: Primary marketing landing page, product narrative, conversion engine, and entry point.
* **Existing Workflow**:
  - Primary CTA: Route to `/ai-create` (AI brief workflow) and `/signup` (Direct registration).
  - Secondary CTA: Route to `/templates` (Template catalogue).
  - Interactive AI creation: Natural-language prompt composer leading into creation flow.
  - Template showcase: Interactive scroll-driven carousel with live preview and "Use template" (`/signup?template={slug}`).
  - Managed by experts modal: `#openPro` button triggers `#proModal`, form submission to `/api/pro/enquiries`.
  - Regional pricing preview: Displays dynamic server-rendered regional prices (`{{STARTER_REGIONAL_PRICE}}`, `{{GROWTH_REGIONAL_PRICE}}`, `{{REGIONAL_PRICE_NOTE}}`).
  - Mobile navigation: Accessible responsive toggle for primary links (`/templates`, `/blog`, `/login`, `/signup`).
* **Dynamic / Server Data**:
  - `{{APP_URL}}`: Canonical origin URL.
  - `{{STARTER_REGIONAL_PRICE}}`: Geo-IP / header-derived starter plan price.
  - `{{GROWTH_REGIONAL_PRICE}}`: Geo-IP / header-derived growth plan price.
  - `{{REGIONAL_PRICE_NOTE}}`: Currency and billing region label (e.g. INR / USD billing).
* **Forms & Actions**:
  - `#proForm` submitting `{name, email, website_type, preferred_contact_time, turnstile_token}` to `/api/pro/enquiries`.
  - FAQ `<details>` / `<summary>` disclosure accordions.
* **SEO & Metadata**:
  - Title: Search-optimized (30-65 chars).
  - Meta description: Factually comprehensive (120-180 chars).
  - Robots: `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`.
  - Canonical: Absolute URL to `{{APP_URL}}/`.
  - Open Graph & Twitter: Local `og-zylora.webp`, summary_large_image.
  - Alternate: `{{APP_URL}}/llms.txt`.
* **Structured Data**:
  - Schema.org `@graph` containing `Organization`, `WebSite`, `SoftwareApplication` (with `Managed by experts` offer), and `FAQPage`.
* **Shared Components**:
  - `site-nav` (Global header, sticky, glass effect).
  - `site-footer` (Global footer with columns for Product, Solutions, Resources, Company, Legal).
* **Current Status**: In-place redesign to harmonize Wix visual richness, Emergent prompt immediacy, Rocket bold typography, and strict Zylora tokens.

---

### 1.2 Template Catalogue (`/templates`)
* **Route**: `/templates` (GET)
* **Serving Handler**: `template_catalogue()` in `app/main.py`
* **File / Template**: `static/templates.html`, `static/templates.css`, `static/templates.js`
* **Purpose**: Discovery, filtering, previewing, and selecting from Zylora's 40+ curated and licensed production templates.
* **Existing Workflow**:
  - Filter tabs: Category filtering (SaaS, Agency, Business, Lifestyle, Restaurant, Portfolio, etc.).
  - Search input: Real-time client-side filter by title and tags.
  - Preview card: Links to `/template-preview/{slug}` in modal/iframe or direct view.
  - Use template action: Routes to `/signup?template={slug}` or `/editor/new?template={slug}` if authenticated.
* **Dynamic / Server Data**:
  - `{{APP_URL}}` substitution in HTML.
  - `static/templates.js` loads template definitions dynamically or renders from embedded dataset.
* **Forms & Actions**: Search filter `#templateSearch`, category tabs, CTA buttons.
* **SEO & Metadata**: Canonical, OG, Twitter tags, `CollectionPage` schema.
* **Current Status**: Needs visual elevation to match the new editorial design system while strictly retaining client-side search, filtering, and "use template" flows.

---

### 1.3 Plan Selection & Pricing (`/choose-plan`)
* **Route**: `/choose-plan` (GET)
* **Serving Handler**: `choose_plan()` in `app/main.py`
* **File / Template**: `static/choose-plan.html`, `static/choose-plan.css`, `static/choose-plan.js`
* **Purpose**: Interactive pricing, plan feature comparisons, currency toggle (INR / USD), and subscription checkout initiation.
* **Existing Workflow**:
  - Calls `/api/public/plans` and `/api/public/regional-price`.
  - Authenticated selection calls `/api/billing/select` with CSRF token.
  - Initiates payment gateway (Razorpay / Stripe) when upgrading from free to paid.
* **Dynamic / Server Data**: Server-authoritative plan configs, regional currency, billing periods (Monthly/Annual).
* **Forms & Actions**: Plan selection buttons (`data-plan-id`), billing toggle.
* **SEO & Metadata**: Pricing page metadata.
* **Current Status**: Redesign presentation in place, maintaining exact backend API bindings and regional price display.

---

### 1.4 AI Creation Flow (`/ai-create`)
* **Route**: `/ai-create` (GET)
* **Serving Handler**: `ai_create()` in `app/main.py`
* **File / Template**: `static/ai-create.html`, `static/ai-create.css`, `static/ai-create.js`
* **Purpose**: Multi-step natural-language guided builder asking for business goal, description, and visual direction.
* **Existing Workflow**:
  - Step 1: Goal selection (`[data-goal]`).
  - Step 2: Brief input (`#businessName`, `#businessDescription`) with live word counter (`#promptWordHint`).
  - Step 3: Direction selection (`[data-direction]`), style prompt (`#stylePrompt`).
  - Step 4: Submission (`[data-testid="ai-create-final"]`), deducting 5 credits, creating site via `/api/sites/ai-generate`, redirecting to `/editor/{site_id}`.
* **Dynamic / Server Data**: Session auth, credit check, generation status.
* **Forms & Actions**: Multi-step wizard with navigation checks and guidance.
* **Current Status**: Fully preserve all data-attributes, step classes, and JS logic while polishing theme tokens.

---

### 1.5 Freelancer Marketplace (`/freelancers`) & Profiles (`/freelancers/{slug}`)
* **Route**: `/freelancers` (GET), `/freelancers/{slug}` (GET)
* **Serving Handler**: `freelancers_page()`, `freelancer_profile_page(slug)` in `app/main.py`
* **File / Template**: `static/freelancers.html`, `static/freelancer-profile.html`, `static/freelancers.js`
* **Purpose**: Directory and individual profile pages of approved independent Zylora experts.
* **Existing Workflow**:
  - Filter by skill, service, name search.
  - Profile inquiry form submitting to `/api/freelancers/{slug}/enquiries` with Turnstile captcha.
  - Outbound links to external portfolios tracked via `/api/freelancers/{slug}/click`.
* **Dynamic / Server Data**:
  - Directory: `{{APP_URL}}` substitution, client fetches `/api/freelancers`.
  - Profile: Server-rendered title, description, Open Graph image, JSON-LD `ProfilePage` schema.
* **Current Status**: Keep exact schema generation and APIs; modernize layout and typography.

---

### 1.6 Editorial Blog (`/blog`) & Articles (`/blog/{post_slug}`)
* **Route**: `/blog` (GET), `/blog/{post_slug}` (GET)
* **Serving Handler**: `platform_blog()`, `platform_blog_post(post_slug)` in `app/main.py`
* **File / Template**: Server-rendered HTML generated directly in `app/main.py`
* **Purpose**: Zylora Journal / Knowledge center with published articles, SEO guides, and business tips.
* **Existing Workflow**:
  - Reads published posts from SQLite `blog_posts` table where `site_id IS NULL AND status='PUBLISHED' AND indexable=1`.
  - Individual post renders structured paragraphs, author, dates, and schema `BlogPosting`.
* **Dynamic / Server Data**: SQL database queries with automatic caching headers.
* **SEO & Metadata**: Complete `CollectionPage`, `BlogPosting`, canonical, and Open Graph generation.
* **Current Status**: Enhance the server-rendered HTML/CSS directly inside `app/main.py` with modern editorial styling matching the Rocket/Apple aesthetic.

---

### 1.7 Authentication Surfaces
* **Login**: `/login` -> `static/login.html`, `auth.css`, `auth.js`
* **Signup**: `/signup` -> `static/signup.html`, `auth.css`, `auth.js`
* **Forgot Password**: `/forgot-password` -> `static/forgot-password.html`
* **Reset Password**: `/reset-password` -> `static/reset-password.html`
* **Verify Email**: `/verify-email` -> `static/verify-email.html`
* **Accept Transfer**: `/accept-transfer` -> `static/accept-transfer.html`
* **Purpose**: User onboarding, session initialization, credential reset, and project handoff.
* **Existing Workflow**:
  - Form validation with `/api/auth/login`, `/api/auth/signup`, `/api/auth/forgot-password`, `/api/auth/reset-password`.
  - Google OAuth entry point: `/api/auth/google/start` via `[data-testid="google-signup"]`.
  - Post-signup redirect directly to `/dashboard`.
* **Current Status**: Visual re-skinning with shared Zylora design tokens, ensuring zero changes to field names, IDs, or API request payloads.

---

### 1.8 Legal & Compliance Surfaces
* **Legal Hub**: `/legal` -> `static/legal.html`
* **Terms of Service**: `/terms` -> `static/terms.html`
* **Privacy Policy**: `/privacy` -> `static/privacy.html`
* **Purpose**: Standard platform terms, privacy commitments, and legal disclaimers.
* **Current Status**: Format as readable editorial documents with clean typography, generous line-height, and consistent navigation/footer chrome.

---

### 1.9 Template Previews & Runtime
* **Preview Home**: `/template-preview/{slug}` (Server-rendered HTML)
* **Preview Subpage**: `/template-preview/{slug}/{page_slug}` (Server-rendered HTML)
* **Published Sites**: `/s/{slug}` and `/s/{slug}/{path}`
* **Assets**: `/template-assets/{slug}/{asset_path:path}`
* **Purpose**: Live sandboxed execution of templates and published client sites.
* **Current Status**: Kept strictly authoritative; no alterations to runtime engines.

---

## 2. Technical Contracts & Regression Invariants
1. `index.html`:
   - Must contain `{{APP_URL}}`, `{{STARTER_REGIONAL_PRICE}}`, `{{GROWTH_REGIONAL_PRICE}}`, `{{REGIONAL_PRICE_NOTE}}`.
   - Must support `#proModal`, `#proForm`, `#proName`, `#proEmail`, `#proType`, `#proTime`, `#proMsg`, `#openPro`, `#closePro`.
   - Must wire `[data-testid="hero-ai"]` -> `/ai-create`.
   - Must wire `[data-testid="nav-start"]` -> `/signup`.
   - Must wire `[data-testid="mobile-menu"]` to open `.site-nav nav`.
   - Must contain `<details>` in `.faq`.
   - Must include `SoftwareApplication`, `Organization`, `WebSite`, and `FAQPage` in `@graph` JSON-LD.
2. `templates.html`:
   - Must support client-side filtering and preview/use URLs.
3. `choose-plan.html`:
   - Must call `/api/public/plans` and display regional billing options without broken dependencies.
4. `ai-create.html`:
   - Must preserve all step identifiers (`data-goal`, `data-direction`, `#businessName`, `#businessDescription`, `#promptWordHint`, `#promptGuidance`, `[data-testid="ai-create-final"]`).
5. `auth.html` (`login.html`, `signup.html`):
   - Must preserve `[data-testid="google-signup"]` pointing to `/api/auth/google/start`, and `[data-testid="signup-submit"]`.
