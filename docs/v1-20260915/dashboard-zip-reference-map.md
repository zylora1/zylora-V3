# Dashboard ZIP Reference Map

The supplied `free-react-tailwind-admin-dashboard-main.zip` was inspected and its SHA-256 and MIT license are recorded in `dashboard-provenance.json`. The audit copy contains selected TailAdmin source components/icons rather than a runnable app entrypoint, so a reference screenshot cannot be produced from the archive in this workspace.

| REFERENCE COMPONENT | ZYLORA COMPONENT | STRATEGY | CURRENT EVIDENCE |
|---|---|---|---|
| `src/layout/AppLayout.tsx` | `static/dashboard.html`, `static/dashboard-sneat.css` | Adapt shell and responsive layout while preserving authenticated Zylora routes and real data | Chromium responsive probe passed |
| `src/layout/AppSidebar.tsx` | dashboard rail and mobile navigation | Adapt spacing, collapse behavior and icon vocabulary; keep USER/SUPER_ADMIN separation | Chromium responsive probe passed |
| `src/layout/AppHeader.tsx` | dashboard topbar/search/profile | Reuse structural hierarchy with live session, search and notification state | Chromium responsive probe passed |
| `src/components/ecommerce/*` | KPI cards, health gauges, analytics panels | Use Zylora metrics and empty states; no TailAdmin sample identities/orders | Dashboard QA and feature tests |
| `src/components/ui/*` | buttons, badges, tables, modals | Adapt accessible states and existing Zylora actions | Dashboard QA; accessibility checks remain broader open work |
| `src/icons/*` | inline SVG dashboard icon system | Use coherent SVG controls; third-party brand assets remain absent until verified | Emoji/app-logo scan clean for dashboard/CRM surfaces |

## Visual-diff certification

Current-dashboard screenshots were captured at 1440x900, 1280x800, 1024x768, 768x1024, 430x932, 390x844, 375x812 and 360x640 by `scripts/verify_dashboard_redesign.py`; all supported views and admin tabs activated with zero console/page errors. A perceptual/overlay diff against the reference remains **NOT CERTIFIED** because the supplied archive has no runnable reference entrypoint or baseline screenshots. Evidence is in `artifacts/redesign_qa/dashboard-visual-diff-report.json`.
