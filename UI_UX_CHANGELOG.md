# Zylora — Master UI/UX Production Changelog

**Release Version**: Production Ready Launch v4.0  
**Audit & Polish Date**: September 4, 2026  
**Theme**: Apple-Inspired Calm Light SaaS Interface  
**Design Standard**: WCAG 2.1 AA Compliant, 8-Viewport Zero-Overflow Certified  

---

## 1. Overview of Changes

This release executes a comprehensive visual polish and defect remediation pass across the **Zylora User Dashboard** (`/dashboard`) and **Super Admin Control Plane** (`/super-admin`). The application visual language has been elevated from an internal dark/technical MVP aesthetic to a calm, refined, Apple-inspired SaaS product with crisp typography, soft elevation, and disciplined brand accent restraint.

### Non-Negotiable Invariants Upheld:
- **Zero Route or Architectural Mutations**: All routes, page navigation, endpoints, database schemas, and permissions remain 100% unaltered.
- **Zero Business Logic Regressions**: Authentication, role isolation, credit accounting, Razorpay subscriptions, and AI behavior remain intact.
- **Zero Customer Website Impact**: Customer-created websites, templates, editor canvas, and public runtimes are strictly preserved.
- **No Mock / Fake Production Data**: All metrics reflect server-authoritative live data.

---

## 2. Component & Screen-by-Screen Changelog

### A. Theme System & Global Tokens (`dashboard-sneat.css`, `super-admin.html`)
- **Page Foundation**: Applied `--zy-bg-app: #F5F5F7` off-white canvas with visual breathing room.
- **Card Surfaces**: Applied pure white surfaces (`#FFFFFF`) with Apple-style diffused elevation (`0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)`) and `16px` border-radius.
- **Typography Scale**: High-contrast `#1D1D1F` for primary headings and metrics; `#6E6E73` for secondary body copy and labels; `#86868B` for tertiary metadata.
- **Brand Restraint**: Preserved Zylora brand accent (`#A6E22E` lime) exclusively for primary CTAs (`Create Website`, `Save`), active nav indicators, and subtle accents.
- **Semantic Color Tokens**: Active toggles standardized to Apple Green (`#34C759`), focus rings and info tags to Apple Blue (`#0071E3`), warnings to Amber (`#FF9F0A`), and errors to Red (`#FF3B30`).

### B. Hero Website Preview (`dashboard.html`, `dashboard-sneat.css`, `dashboard.js`)
- **Resolved Defect 1**: Restyled `.site-preview-frame` with clean white background, `14px` radius, and gentle elevation.
- **Browser Mockup Header**: Upgraded `.browser-mockup-bar` to `#F9F9FB` with hairline divider and colorful Apple window controls (red, yellow, green).
- **Domain Pill**: Fixed invisible `.browser-address-pill` by applying `#FFFFFF` background, subtle border, and monospace typography.
- **Preview Badge**: Converted dark overlay pill to translucent white frosted glass (`rgba(255,255,255,0.92)`, `backdrop-filter: blur(8px)`) with `#1D1D1F` text.
- **Image Error Handling**: Cleanly hides broken image icon on network failure, smoothly revealing the browser mockup fallback.

### C. Template Catalogue (`dashboard.js`, `dashboard-sneat.css`)
- **Resolved Defects 2 & 3**: Added comprehensive styles for `.template-fallback-preview` with icon (`❖`), template name, and `#F9F9FB` background.
- **Image Fallback Trigger**: Ensured `onerror` event seamlessly switches to the fallback box without broken image placeholders.
- **Card Hierarchy**: Cards feature subtle `1px solid rgba(0,0,0,0.05)` borders, quiet metadata kickers, and restrained action buttons.

### D. AI Sales Assistant View (`dashboard-sneat.css`)
- **Resolved Defect 4**: Removed hardcoded `height: 540px !important` from `.chat-box`. Replaced with responsive `min-height: 420px; max-height: 580px; height: 100%`, eliminating dead vertical space.
- **Light Theme Bubbles**: Restyled `.chat-bubble.assistant` to calm `#F2F2F7` with `#1D1D1F` text (replacing dark `#151D29`). Restyled `.chat-bubble.user` to soft lime wash (`rgba(166, 226, 46, 0.18)`).
- **Container Styling**: Refined `.chat-box` with `#FFFFFF` card surface and soft shadow.

### E. Appointments & Domains Views (`dashboard.js`, `dashboard-sneat.css`)
- **Resolved Defects 5 & 8**: Replaced bare `<p class="muted-copy">` elements with full `.empty-state-box` components featuring:
  - Circular icon containers with SVG icons (Calendar for Appointments, Globe for Domains).
  - High-contrast `<h4>` headings.
  - Explanatory descriptive copy explaining how appointments/domains are populated.

### F. Growth Center Analytics & Operations Math (`app/operations.py`, `dashboard.js`)
- **Resolved Defect 6**:
  - Fixed division-by-zero error in `app/operations.py:282, 287`: When `visitors == 0`, `lead_conversion_rate` and `cta_rate` return `0.0%` rather than `300%`.
  - In `dashboard.js`: When `visitors === 0`, conversion rate cleanly renders as `—` rather than an impossible percentage.
  - Funnel Bars: When `af.opened === 0`, all funnel bars are cleanly set to `0%` width rather than stretching opened bar to `100%`.
  - Header: Ensured funnel counter and conversion rate percentages format cleanly.

### G. Site Health & Status Badges (`dashboard-sneat.css`)
- **Resolved Defect 7**: Replaced low-contrast neon badge colors (`#4ade80`, `#fbbf24`, `#f87171`) with WCAG AA-compliant Apple semantic tokens:
  - `PASS` / `HEALTHY`: `#15803d` text, `rgba(34, 197, 94, 0.10)` background, `rgba(34, 197, 94, 0.22)` border.
  - `WARN` / `WARNING`: `#b45309` text, `rgba(245, 158, 11, 0.10)` background, `rgba(245, 158, 11, 0.22)` border.
  - `FAIL` / `ERROR`: `#b91c1c` text, `rgba(239, 68, 68, 0.10)` background, `rgba(239, 68, 68, 0.22)` border.
  - `INFO`: `#0071E3` text, `rgba(0, 113, 227, 0.08)` background, `rgba(0, 113, 227, 0.20)` border.

### H. Google Sheets Integrations (`dashboard-sneat.css`, `dashboard.js`)
- **Resolved Defect 9**: Fixed `.google-sheets-steps .step-item` color from `#D4D4D8` (1.5:1 unreadable contrast) to `#1D1D1F` on `#F9F9FB` surface.
- **Resolved Defect 10**: Dynamically disable `#googleSheetTest`, `#googleSheetResync`, and `#googleSheetRemove` buttons when no active connection ID exists (`!j.id`).

### I. Billing & Regional Pricing (`dashboard.html`, `dashboard.js`)
- **Resolved Defect 11**: Added `id="freeRegionalPrice"` to Free plan card. Dynamically renders `$0` for international users or `₹0` for Indian users, eliminating regional pricing confusion.

### J. Settings & Account (`dashboard-sneat.css`)
- **Resolved Defect 12**: Replaced dark dividers in `.notification-delivery` and `.notification-toggle-row` with hairline `rgba(0, 0, 0, 0.04)` dividers, removing `border-bottom` on the last item.

### K. Super Admin Control Plane (`super-admin.html`, `super-admin.js`)
- **Latency Formatting**: Fixed DB latency displaying literal `0 ms` or `< 1ms` to clean `< 1 ms`.
- **Shortened UUIDs**: Truncated raw tenant IDs to `89c05121...e5d0` with full string accessible via hover title tooltip.
- **Humanized Technical Strings**: Formatted `CONFIGURED_SIMULATED` to "Simulated", `GOOGLE_LOGIN` to "Google sign-in", and empty metadata `{}` to `—`.
- **Destructive Action Styling**: Added `.btn-danger` with red background and border for Delete User action, paired with a multi-step confirmation warning.
- **Campaigns & Audit Empty States**: Replaced bare text with designed empty state cards featuring icons and descriptive explanations.

---

## 3. Automated Verification Summary

| Suite / Check | Command | Result | Notes |
| :--- | :--- | :--- | :--- |
| **Role Dashboard Separation** | `pytest tests/test_role_dashboard_separation.py` | **PASS (7/7)** | Strict tenant & admin role separation verified |
| **Full End-to-End Suite** | `pytest tests/test_e2e.py` | **PASS (100%)** | End-to-end checkout, site creation, leads, and admin |
| **8-Viewport Responsive QA** | `python scratch/live_production_qa_8_viewports.py` | **PASS (8/8 viewports)** | Zero horizontal overflow (1440px down to 360px) |
| **Visual Gallery Capture** | 24 screenshots across Desktop & Mobile | **PASS** | Captured and certified in brain artifacts |
