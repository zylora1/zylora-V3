# Zylora Dashboard Capability Map

The authenticated Dashboard exposes twenty working view surfaces over the existing API and authorization layer. The redesign consolidates their navigation without removing capability.

| Product destination | Existing view IDs | Preserved capabilities |
|---|---|---|
| Home | `overview` | Resume primary site, create website, health alerts, recent activity |
| Projects | `websites` | Browse sites, open Studio, preview, publish, duplicate, delete |
| CRM | `crm-overview`, `crm-contacts`, `crm-companies`, `crm-deals`, `crm-tasks`, `crm-automations`, `crm-reports` | Contacts, companies, pipeline, tasks, automations, CRM analytics |
| Leads | `leads` | Lead table, detail panel, status updates, AI conversation access |
| Growth | `analytics`, `assistant`, `appointments` | Growth metrics, AI Sales Assistant, appointment operations |
| Domains | `domains` | Domain and SSL states, connect/configure flows |
| Integrations | `integrations` | Google Sheets and knowledge integrations |
| Site health | `health` | Launch checklist and system health |
| Marketplace | `freelancer` | Freelancer discovery and application |
| Support | `support` | Support conversations and help actions |
| Billing | `billing` | Plan, regional billing, usage and credit actions |
| Settings | `settings` | Profile, notifications, security and account controls |

## Navigation decisions

The left rail now uses user-facing destinations rather than exposing every internal CRM screen as a peer. CRM remains a single product area with its existing subviews available through the CRM hub. Growth groups analytics, assistant, and appointments without changing their routes. Account-level destinations remain Billing, Settings, and Support.

No backend contracts, API endpoints, view IDs, permissions, or tenant boundaries were changed for this information-architecture pass.
