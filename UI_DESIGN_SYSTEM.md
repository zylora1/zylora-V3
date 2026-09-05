# ZYLORA UI/UX DESIGN SYSTEM SPECIFICATION
**Version:** 2.0-PROD  
**Release Target:** Final Production Release  
**Status:** Canonical Reference Specification  
**Classification:** Product Design & Frontend Architecture Standard  

---

## 1. DESIGN PHILOSOPHY & CORE PRINCIPLES

Zylora is an enterprise-grade, AI-powered website creation and customer-growth platform. The visual and interactive design balances **executive-level restraint (inspired by Apple design systems)** with **high-density, operational clarity (inspired by Stripe and Sneat control planes)**.

### Core Tenets
1. **Content Over Decoration:** Interfaces serve to elevate user projects, performance metrics, and actionable decisions without unnecessary ornamentation.
2. **Intentional Hierarchy:** Strict typography and tonal contrast guide the user's eye from high-level operational status down to granular row-level data.
3. **Deterministic State Feedback:** Every interactive element provides four deterministic states: Default, Loading, Empty, and Error. No dead-ends or uncommunicative states exist.
4. **Zero Synthetic / Mock Polish:** All metrics, previews, badges, and funnels reflect genuine platform capabilities and live operational facts.

---

## 2. DESIGN TOKENS & FOUNDATIONS

### 2.1 Color Palette & Semantic Tokens

| Category | Token Name | Hex Value | Usage / Semantic Purpose |
| :--- | :--- | :--- | :--- |
| **Neutrals (Light)** | `--z-bg-app` | `#F8FAFC` | Platform background canvas |
| | `--z-bg-surface` | `#FFFFFF` | Primary card and container surfaces |
| | `--z-bg-muted` | `#F1F5F9` | Secondary containers, table header fills, hover states |
| | `--z-border-subtle`| `rgba(0, 0, 0, 0.06)` | Standard card borders, row separators |
| | `--z-border-strong`| `rgba(0, 0, 0, 0.12)` | Active inputs, selected controls, tab borders |
| **Neutrals (Dark/Obsidian)**| `--z-obsidian-950` | `#0B0D13` | Website Editor chrome, dark code canvases |
| | `--z-obsidian-900` | `#12151E` | Website Editor panels, modal overlays |
| | `--z-obsidian-800` | `#1A1E2C` | Website Editor toolbars and card containers |
| | `--z-obsidian-border`| `rgba(255, 255, 255, 0.08)` | Website Editor dividers and border elements |
| **Typography** | `--z-text-primary` | `#0F172A` | High-contrast headlines, primary text (14.2:1 contrast) |
| | `--z-text-secondary`| `#475569` | Secondary descriptions, subheadings (5.6:1 contrast) |
| | `--z-text-muted` | `#64748B` | Timestamps, metadata, microcopy (4.6:1 contrast - WCAG AA) |
| | `--z-text-on-dark` | `#F8FAFC` | Light text on dark obsidian surfaces |
| **Brand Accents** | `--z-brand-indigo` | `#6366F1` | Primary platform action color, focus rings, brand badges |
| | `--z-brand-lime` | `#D4FF32` | High-energy accent, editor accents, editorial themes |
| | `--z-brand-emerald`| `#10B981` | Success states, live deployment indicators, verified checks |
| | `--z-brand-amber` | `#F59E0B` | Warnings, recommendations, review alerts, pending tokens |
| | `--z-brand-crimson`| `#EF4444` | Errors, destructive actions, high-severity audit logs |

### 2.2 Typography Scale

The type system is anchored on **Inter** with fallbacks to system sans-serif (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`).

| Element | Font Size | Line Height | Weight | Tracking | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `32px` (2.0rem) | `1.20` | `700` (Bold) | `-0.025em` | Main section headings, dashboard hero titles |
| **Section H2** | `24px` (1.5rem) | `1.25` | `600` (SemiBold) | `-0.020em` | Sub-view titles, card section titles |
| **Card H3** | `18px` (1.125rem)| `1.30` | `600` (SemiBold) | `-0.015em` | Modal titles, subsection headers, widget titles |
| **Body (Default)**| `14px` (0.875rem)| `1.50` | `400` (Regular) | `0em` | Primary table text, descriptions, form inputs |
| **Body Medium** | `14px` (0.875rem)| `1.50` | `500` (Medium) | `0em` | Table headers, primary labels, action buttons |
| **Micro / Caption**| `12px` (0.75rem) | `1.40` | `500` (Medium) | `+0.010em` | Badges, status pills, timestamps, helper text |
| **Compact Pill** | `11px` (0.6875rem)| `1.30` | `600` (SemiBold) | `+0.020em` | Plan badges, count pills, micro indicator tags |

### 2.3 Spacing & Layout Architecture

* **Grid Base Unit:** `4px`
* **Spacing Multipliers:**
  * `xs`: `4px`
  * `sm`: `8px`
  * `md`: `12px`
  * `lg`: `16px`
  * `xl`: `24px`
  * `2xl`: `32px`
  * `3xl`: `48px`
* **Container Widths:**
  * Application Shell Max Width: Fluid with `1440px` viewport optimization.
  * Sidebar Rail: Fixed `240px` width on desktop (`> 1200px`), absolute sliding drawer on mobile/tablet (`< 1200px`).
  * Editor Canvas Toolbar: Fixed `56px` height.
  * Table Containers: Full-width responsive with horizontal overflow protection.

### 2.4 Border Radius & Elevations

* **Border Radius Tokens:**
  * Rounded Tiny: `4px` (micro badges, code tags)
  * Rounded Standard: `8px` (form inputs, buttons, table cell wrappers)
  * Rounded Container: `12px` (standard cards, flyout menus, preview panels)
  * Rounded Large: `16px` (modal dialogs, hero callouts, website preview mockups)
  * Rounded Pill: `9999px` (status badges, category tags, avatar markers)
* **Shadow Tokens:**
  * Elevation Low: `0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)`
  * Elevation Medium: `0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)`
  * Elevation High (Floating/Modals): `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

---

## 3. COMPONENT PATTERNS & STANDARDS

### 3.1 Primary & Secondary Navigation Rails
* **Rail Container:** Fixed left rail with brand wordmark, user profile chip, and organized navigational groups.
* **Grouping Structure:** Clear uppercase label headers (`WORKSPACE`, `GROWTH`, `OPERATIONS`, `ACCOUNT` in User Dashboard; `CONTROL PLANE`, `OPERATIONS & CRM`, `REVENUE & ANALYTICS`, `SYSTEM & SECURITY` in Platform Administration).
* **Active State Indicator:** Left-aligned 3px indicator pill with subtle tinted background (`rgba(99, 102, 241, 0.08)`), high-contrast active text, and crisp SVG icon.
* **Mobile Drawer:** Under `< 1200px`, the rail transforms into an off-canvas drawer controlled via `#sidebarToggle` and auto-dismisses upon navigating.

### 3.2 Metric & KPI Stat Cards
* **Layout:** Top row contains metric title in uppercase micro typography (`12px`, weight 500, muted color) paired with a semantic pill or icon.
* **Value Display:** Prominent metric integer or formatted currency (`28px` to `32px`, weight 700).
* **Context Subtitle:** Grounded explanatory text describing the measurement period or operational status (e.g., `"INR & USD reconciled"`, `"Unique active sessions"`).
* **Integrity Constraint:** No estimated or fabricated metrics. If real data is zero, display `0` cleanly with authentic helper context.

### 3.3 Interactive Data Tables
* **Header Row:** Crisp background (`#F8FAFC`), uppercase column labels, subtle 1px border.
* **Data Rows:** `14px` text, row height `56px`, hover highlight transition (`background 0.15s ease`).
* **Column Standards:**
  * Primary Entity: Name + secondary email or slug in stacked layout.
  * Status: Dedicated semantic pill (`.status-pill.live`, `.status-pill.draft`, `.status-pill.pass`).
  * Timestamp: Localized ISO date-time formatted for human scanning.
  * Actions: Grouped right-aligned buttons or clean text action triggers (`Preview`, `Edit`, `Archive`).

### 3.4 Feedback & State Machines

#### Loading State
* Dedicated centered container with a smoothly spinning circular loader (`border: 3px solid rgba(99, 102, 241, 0.2); border-top-color: #6366f1; border-radius: 50%;`).
* Accompanied by descriptive text (e.g., `"Loading website canvas…"`, `"Refreshing operational metrics…"`).

#### Error State
* Explanatory error card with danger/alert icon, human-readable root cause explanation, and actionable recovery buttons (`"Retry"`, `"Open in new tab"`).

#### Empty State
* Centered illustration or icon, clear headline (e.g., `"No leads captured yet"`), clarifying subtitle, and primary call-to-action button to initiate the workflow.

#### Toast Notifications
* Fixed viewport positioning (bottom-right or top-right), high elevation, subtle entrance animation, auto-dismissing after 3500ms, and explicit dismiss button.

---

## 4. PLATFORM SURFACES ARCHITECTURE

### 4.1 Surface 1: Public Marketing & Conversion Surface
* **Routes:** `/`, `/login`, `/signup`, `/ai-create`, `/choose-plan`, `/terms`
* **Aesthetic:** Clean light canvas, high-converting copy, prominent typography, seamless plan feature matrix, interactive AI generation wizard.
* **Auth Boundary:** Clear separation between marketing CTAs ("Get started", "Explore templates") and protected application sessions.

### 4.2 Surface 2: Customer Self-Serve Dashboard
* **Routes:** `/dashboard` with multi-view tab switching (`overview`, `websites`, `templates`, `leads`, `assistant`, `appointments`, `analytics`, `health`, `domains`, `integrations`, `freelancer`, `support`, `billing`, `settings`).
* **Aesthetic:** Apple-inspired light workspace, rounded cards, instant tab switching, live Site Health radar, automated conversion funnel visualization.

### 4.3 Surface 3: Visual Website Editor
* **Routes:** `/editor/{site_id}`
* **Aesthetic:** Obsidian dark canvas (`#0B0D13`), distraction-free editing workspace.
* **Canvas Shell:** Multi-device preview frame (Desktop, Tablet, Mobile), zoom & pan support, live iframe renderer with isolated sandboxing.
* **Side Panels:** Left drawer for Pages, Business Profile, Brand System, SEO, and Revisions; right contextual panel for active element property inspection.

### 4.4 Surface 4: Super Admin / Platform Administration
* **Routes:** `/super-admin` with 15 persistent subpath routes (`/super-admin/users`, `/super-admin/templates`, `/super-admin/blogs`, `/super-admin/plans`, `/super-admin/campaigns`, `/super-admin/leads`, `/super-admin/freelancers`, `/super-admin/support`, `/super-admin/pro`, `/super-admin/payments`, `/super-admin/integrations`, `/super-admin/health`, `/super-admin/audit`, `/super-admin/system`).
* **Aesthetic:** Executive operational dashboard, high-density data tables, real-time platform health monitoring, comprehensive moderation tools.
* **Safety Controls:** Confirmation modals for destructive actions (user suspension, template archiving, plan deletion).

---

## 5. ACCESSIBILITY & QUALITY STANDARDS

1. **Color Contrast:** All body text meets or exceeds WCAG 2.1 AA requirement of `4.5:1` against adjacent backgrounds; large headings exceed `3.0:1`.
2. **Keyboard Navigation:** All interactive elements support sequential keyboard navigation (`Tab` / `Shift+Tab`) with visible, high-contrast focus rings (`outline: 2px solid #6366f1; outline-offset: 2px`).
3. **Screen Reader Landmarks:** Proper semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`) paired with descriptive `aria-label` attributes across all interactive rails and dialogs.
4. **Form Inputs:** All form controls have permanently associated `<label>` tags or explicit `aria-label` definitions with clear error validation states.
