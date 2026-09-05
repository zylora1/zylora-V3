# Zylora — Master Visual Defect Inventory & Baseline Audit

**Audit Date**: September 3, 2026  
**Auditor**: Antigravity UI/UX Quality Certification  
**Target Architecture**: Dark charcoal / near-black foundation + restrained chartreuse accent + modern minimal high-end SaaS presentation  
**Audited Viewports**: 1440px, 1280px, 1024px, 768px, 430px, 390px, 375px, 360px  

---

## 1. Executive Summary & Core Identity Mismatch

The inspection of rendered pages confirms that the current production interface suffers from a fundamental design divergence:
1. **Third-Party Theme Contamination (`dashboard-sneat.css`)**:
   - The application has had a generic open-source theme ("Sneat Free admin template") overlaid on top of it.
   - This introduced light purple branding (`--sneat-primary: #696cff`), light grey background (`#f5f5f9`), rounded pastel cards, and a cartoon clipart illustration (`/static/vendor/sneat/man-with-laptop-light.png`).
   - This directly contradicts Zylora's authentic, sophisticated identity: dark charcoal foundation (`#0c0e0d` / `#111412`), restrained chartreuse accent (`#b7ff3b` / `#d8ff45`), crisp neutral typography, and understated elevation.
2. **"Card Inflation" & Nested Rectangles**:
   - Almost every element is boxed inside an outlined rectangle or generic white card with fuzzy drop shadows.
   - Visual grouping lacks typographic rhythm and relies entirely on card borders.
3. **Broken Text & Status Concatenation**:
   - In Site Health (`#health`), label text and details/statuses are smashed together horizontally with zero whitespace (e.g. `Content and links0`, `Responsive basicsViewport`, `recoverabilityWARNING`).
   - Status badges are 100% white-on-white, making PASS, WARNING, BLOCKED, and HEALTHY indistinguishable at a glance.
4. **Developer/MVP Screens Exposed to Users**:
   - SUPER_ADMIN portal displays 8 oversized KPI boxes with tiny lowercase titles, and the users table consists of raw `<input>` boxes directly embedded in table cells with a bare `Save` button.
   - Missing critical operations: user inspection detail view, user restriction/restoration, user deletion, template management, and comprehensive blog management.
5. **Mobile Viewport Breakdowns**:
   - At <= 620px, the AI Editor completely hides the secondary navigation buttons (`.rail-action`, `.left-rail hr` set to `display:none`), preventing mobile users from editing Business profile, Brand system, SEO, Revisions, or Accessibility!

---

## 2. Screen-by-Screen Visual Defect Inventory

### A. Dashboard Shell & Navigation (`#overview`, `#websites`, `#templates`, etc.)
- **Defect D-01 (Brand Contamination)**: Left sidebar and topbar use Sneat purple gradient (`#696cff`), pastel icons, and light grey background (`#f5f5f9`), completely violating Zylora's dark charcoal + chartreuse visual language.
- **Defect D-02 (Amateur Clipart)**: Welcome card prominently renders `/static/vendor/sneat/man-with-laptop-light.png` clipart, making the product look like an unfinished tutorial project.
- **Defect D-03 (Sidebar Rhythm & Item Sizing)**: Navigation items use uneven vertical heights, large icons without crisp SVG alignment, and full-width gradient pills when active instead of restrained charcoal elevation and chartreuse indicator.
- **Defect D-04 (Topbar Detached Layout)**: Search input floats in an empty white header without clear keyboard shortcut hint (`⌘K`), blurred backdrop, or tight alignment.
- **Defect D-05 (Card Clutter)**: Overview stats (Websites, Leads, AI credits, Lead credits) are 4 separate identical outlined cards with arbitrary pastel icon colors (blue, green, yellow, cyan).

### B. Websites View (`#websites`)
- **Defect W-01 (Equal-Priority Button Clutter)**: Website cards feature competing buttons ("Edit website", "Publish", "•••") with inconsistent visual weight.
- **Defect W-02 (Oversized Placeholder Image)**: Draft websites render a giant solid green rectangle (`.site-thumb`) that conveys no information about the site layout or template.
- **Defect W-03 (Privilege Leak in Action Bar)**: "Import website" button is prominently displayed for normal users next to "+ Create Website", despite project import being a SUPER_ADMIN privileged operation.
- **Defect W-04 (Missing Draft Deletion Flow)**: No delete draft affordance in the card or overflow menu; users cannot clean up unused drafts without deleting their entire account.

### C. Templates Catalogue (`#templates`)
- **Defect T-01 (Authentication Loop Bug)**: Clicking "Use template" executes `location.href = /signup?template=...`, redirecting logged-in users to the signup page.
- **Defect T-02 (Card Presentation & Hierarchy)**: White-bordered cards with harsh black "Use template" buttons and thin outline "Preview" buttons. Lack category filtering chips, search, and responsive grid density.
- **Defect T-03 (Mobile Grid)**: On mobile viewports (360px-430px), template items stack with excessive height, requiring tedious scrolling through 81 templates without quick filters.

### D. Site Health (`#health`)
- **Defect H-01 (White-on-White Status Presentation)**: Every status badge (`PASS`, `WARN`, `HEALTHY`, `WARNING`, `BLOCKED`) renders with identical white background and grey border.
- **Defect H-02 (Inline Text Concatenation Glitch)**:
  - `Content and links0 blocking issue(s)`
  - `Responsive basicsViewport and static overflow checks`
  - `Lead captureZylora public lead...`
  - `AI Sales AssistantReview Assistant settings...`
  - `SEO discoverability7 SEO warning(s)`
  - `content qaHEALTHY`
  - `recoverabilityWARNING`
  - `publishingHEALTHY`
  - `lead deliveryHEALTHY`
  - `operationsHEALTHY`
- **Defect H-03 (Lack of Semantic Colors & Accessible Icons)**: No green checkmarks (`✓`), amber warning badges (`!`), or red error indicators (`×`). Statuses are un-scannable.

### E. SUPER_ADMIN Control Plane (`#admin`)
- **Defect A-01 (Oversized KPI Cards)**: 8 giant identical rectangular cards fill the entire screen above the fold with tiny lowercase labels ("users", "sites", "live sites", etc.).
- **Defect A-02 (MVP Raw Input Table)**: Users management table renders raw unstyled text inputs in table cells (`<input value="SUPER_ADMIN">`, `<input value="GROWTH">`, `<input value="305">`) with a plain `Save` button, looking like a database dump rather than a production SaaS operations console.
- **Defect A-03 (Missing Operational Features)**:
  - No user detail modal to inspect tenant sites, storage, credits, and audit logs.
  - No user restriction/suspension controls (`status='RESTRICTED'`).
  - No user deletion flow.
  - No template administration tab (cannot view render gate, toggle public status, edit metadata, or manage template assets).
  - Blog admin only has create/publish without editing, unpublishing, or deleting posts.

### F. AI Editor (`/editor/{site_id}`)
- **Defect E-01 (Cramped Left Sidebar)**: Width is locked to 230px (210px on tablet), causing text labels like "Premium experience NEW" and form controls to wrap awkwardly.
- **Defect E-02 (Mobile Nav Disappearance)**: At `<= 620px`, CSS hides `.rail-action` buttons (`display:none!important`), making Business profile, Brand system, SEO & Discoverability, Revisions, Navigation, and Accessibility completely inaccessible on mobile phones!
- **Defect E-03 (Empty Canvas Hierarchy)**: Empty inspector on the right is a stark blank white column taking 330px with just "Select an element".
- **Defect E-04 (Form Controls & Typography)**: Inputs and textareas lack refined dark/neutral elevation, focus rings, and clear micro-labels.

### G. AI Sales Assistant Widget & Floating Runtime (`static/public-runtime.js`)
- **Defect S-01 (Cut-Off Enquiry Funnel)**: Fixed-height panel with `overflow: hidden` and rigid grid rows clips off the lower half of the enquiry form (name, email, phone, custom fields, message, Turnstile, and submit button).
- **Defect S-02 (Improvised Composer Layout)**: Large standalone textarea with a detached floating black "Send" button.
- **Defect S-03 (Outlined Message Bubbles)**: Chat bubbles are heavily bordered boxes with inconsistent padding.
- **Defect S-04 (Header Composition)**: Business name, status, and close button lack cohesive alignment and live status indicator.

---

## 3. Standardized Visual Design System Targets

| Design Token | Specification | Implementation Target |
| :--- | :--- | :--- |
| **Surface 0 (App Canvas)** | `#090a0a` / `#0c0e0d` | Deep charcoal foundation for entire workspace |
| **Surface 1 (Panels & Shell)** | `#121513` / `#141715` | Sidebar, topbar, table containers, inspector |
| **Surface 2 (Cards & Inputs)** | `#1a1d1b` / `#1c201d` | Card surfaces, inputs, hover states |
| **Surface 3 (Elevated / Modals)** | `#222724` / `#252a27` | Dialogs, dropdown menus, tooltips |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | Default dividers and panel borders |
| **Border Interactive** | `rgba(255, 255, 255, 0.16)` | Inputs, hover states, active outlines |
| **Accent Primary** | `#c4f042` / `#b5e836` | Restrained chartreuse for primary CTA, active pill, live badge |
| **Status Pass / Healthy** | `#12b76a` / `rgba(18,183,106,0.12)` | Semantic green pill + `✓ Passed` |
| **Status Warning** | `#f79009` / `rgba(247,144,9,0.12)` | Semantic amber pill + `! Warning` |
| **Status Error / Blocked** | `#f04438` / `rgba(240,68,56,0.12)` | Semantic red pill + `× Error` |
| **Status Info / Pending** | `#2e90fa` / `rgba(46,144,250,0.12)` | Semantic blue pill + `ℹ Info` |
| **Typography Scale** | Inter + Space Grotesk | Display: 28-36px (-0.04em); Headings: 18-22px (-0.02em); Body: 13-14px; Caption: 11-12px |
| **Spacing Scale** | 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px | Consistent across all pages |
