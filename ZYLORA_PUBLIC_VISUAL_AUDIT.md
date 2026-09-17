# ZYLORA — COMPREHENSIVE PUBLIC WEBSITE VISUAL AUDIT
## Pre-Recovery In-Browser Baseline Audit

This document records the visual inspection of all 14 active public routes across 5 responsive breakpoints (1440px, 1280px, 1024px, 768px, 390px).

---

## Summary Scorecard & Root Cause Analysis
Across all 14 public routes, the average visual consistency score is **4.4 / 10**.
Critical findings:
1. **Homepage (/):** Visually congested with 62 small card containers. Lacks the breathtaking scale, editorial typography (96–120px hero), and multi-layered product demonstration requested.
2. **Fragmentation Across Routes:** `/choose-plan`, `/login`, and `/signup` were still executing legacy Apple-era inline style overrides with `Newsreader` serifs and `#0071e3` blues. `/legal`, `/terms`, and `/privacy` were rendering unstyled or with mismatched `#f5f3ee` beige backgrounds.
3. **Missing Shared Design System:** Each page had its own header/footer markup and isolated CSS, rather than importing a single unified public design system (`public-theme.css`).

## Route-by-Route Detailed Visual Audit Table

| Route | Name | Current Visual System | Legacy Styles? | Tokens Applied? | Shared Nav? | Shared Footer? | Typography | Button Styling | Visual Score | Required Action |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- | :---: | :--- |
| `/` | homepage | Partial (cards overload) | NO | Partial | Custom landing nav | Custom dark footer | "Space Grotesk" (76px) | rgba(0, 0, 0, 0) | **5.5/10** | Over-reliance on 62 small cards; hero product visual lacks depth and scale; looks like a generic SaaS template; needs massive editorial hero and asymmetric showcase. |
| `/templates` | templates | Templates CSS isolated | NO | Partial | Custom landing nav | Minimal dark footer | "Space Grotesk" (68px) | rgb(17, 17, 19) | **5.0/10** | Previews do not dominate the viewport; cards feel small; lacks Wix-scale visual discovery and editorial filtering hero. |
| `/choose-plan` | pricing | YES (Newsreader serif, Apple blue #0071e3) | YES | NO (Overrides present) | NO (Missing global nav) | NO (Missing global footer) | Newsreader (56px) | rgb(0, 113, 227) | **3.5/10** | Still using Apple serif typography; missing global header and footer; feels disconnected from homepage. |
| `/login` | login | YES (Newsreader, blue buttons #0071e3) | YES | Partial | NO (Missing global nav) | NO (Missing global footer) | Newsreader (56px) | rgb(0, 113, 227) | **4.0/10** | Uses old Apple auth layout and serif headings; lacks Zylora brand identity. |
| `/signup` | signup | YES (Newsreader, blue buttons #0071e3) | YES | Partial | NO (Missing global nav) | NO (Missing global footer) | Newsreader (56px) | rgb(0, 113, 227) | **4.0/10** | Uses old Apple auth layout and serif headings; lacks Zylora brand identity. |
| `/forgot-password` | forgot_password | YES (Auth split pane) | YES | Partial | NO | NO | "Space Grotesk" (56px) | rgb(91, 92, 240) | **4.5/10** | Missing global design system framing. |
| `/reset-password` | reset_password | YES (Auth split pane) | YES | Partial | NO | NO | "Space Grotesk" (56px) | rgb(91, 92, 240) | **4.5/10** | Missing global design system framing. |
| `/verify-email` | verify_email | YES (Auth split pane) | YES | Partial | NO | NO | "Space Grotesk" (56px) | rgb(91, 92, 240) | **4.5/10** | Missing global design system framing. |
| `/accept-transfer` | accept_transfer | YES (Auth split pane) | YES | Partial | NO | NO | "Space Grotesk" (56px) | rgb(91, 92, 240) | **4.5/10** | Missing global design system framing. |
| `/blog` | blog | YES (Old minimal plain text) | YES | Partial | Basic custom header | NO | "Space Grotesk" (142px) | None | **5.0/10** | Very plain; lacks featured story hierarchy; missing global footer. |
| `/legal` | legal | YES (Old beige #f5f3ee) | YES | NO | Basic custom header | NO | "Space Grotesk" (110px) | None | **4.5/10** | Different background color; missing global footer; isolated styling. |
| `/terms` | terms | YES (Old unstyled document) | YES | NO | Basic custom header | NO | "Space Grotesk" (84px) | None | **4.0/10** | Lacks shared layout container and global footer. |
| `/privacy` | privacy | YES (Old unstyled document) | YES | NO | Basic custom header | NO | "Space Grotesk" (84px) | None | **4.0/10** | Lacks shared layout container and global footer. |
| `/freelancers` | freelancers | YES (Isolated freelancers.css) | YES | NO | Different header | Different footer | "Space Grotesk" (100.8px) | None | **4.5/10** | White background, different navbar styling, disconnected visual language. |

---

## Visual Screenshots Captured
Screenshots captured at 1440, 1280, 1024, 768, and 390px for each route are stored under `static/audit_screenshots/`:
- **/ (homepage)**: `static/audit_screenshots/homepage_1440.png`, `static/audit_screenshots/homepage_390.png`
- **/templates (templates)**: `static/audit_screenshots/templates_1440.png`, `static/audit_screenshots/templates_390.png`
- **/choose-plan (pricing)**: `static/audit_screenshots/pricing_1440.png`, `static/audit_screenshots/pricing_390.png`
- **/login (login)**: `static/audit_screenshots/login_1440.png`, `static/audit_screenshots/login_390.png`
- **/signup (signup)**: `static/audit_screenshots/signup_1440.png`, `static/audit_screenshots/signup_390.png`
- **/forgot-password (forgot_password)**: `static/audit_screenshots/forgot_password_1440.png`, `static/audit_screenshots/forgot_password_390.png`
- **/reset-password (reset_password)**: `static/audit_screenshots/reset_password_1440.png`, `static/audit_screenshots/reset_password_390.png`
- **/verify-email (verify_email)**: `static/audit_screenshots/verify_email_1440.png`, `static/audit_screenshots/verify_email_390.png`
- **/accept-transfer (accept_transfer)**: `static/audit_screenshots/accept_transfer_1440.png`, `static/audit_screenshots/accept_transfer_390.png`
- **/blog (blog)**: `static/audit_screenshots/blog_1440.png`, `static/audit_screenshots/blog_390.png`
- **/legal (legal)**: `static/audit_screenshots/legal_1440.png`, `static/audit_screenshots/legal_390.png`
- **/terms (terms)**: `static/audit_screenshots/terms_1440.png`, `static/audit_screenshots/terms_390.png`
- **/privacy (privacy)**: `static/audit_screenshots/privacy_1440.png`, `static/audit_screenshots/privacy_390.png`
- **/freelancers (freelancers)**: `static/audit_screenshots/freelancers_1440.png`, `static/audit_screenshots/freelancers_390.png`