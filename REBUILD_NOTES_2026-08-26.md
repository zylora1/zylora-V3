# Zylora minimal AI-first rebuild — 2026-08-26

This build intentionally removes the legacy template catalogue and all shipped template project/assets. `/api/templates` returns an empty public catalogue until individually art-directed replacements are added and verified.

AI website creation no longer requires or accepts a starting catalogue template in the product UI. The generation pipeline derives information architecture from the business brief, records a design direction in the SiteDocument, and renders through the internal `ai-runtime`. The internal runtime is infrastructure and is never exposed as a selectable template.

Existing sites are migrated to the internal AI runtime so rows cannot point at deleted template files. Source export creates a fresh Next.js project from the SiteDocument at export time rather than copying a legacy template project.

Visual polish in this build uses Inter for interface/body text and Space Grotesk for display typography and the Zylora wordmark. The landing page, public template status page, AI creator and platform blog were simplified to a restrained neutral system. Broken template thumbnails were removed rather than hidden behind fallbacks.

Customer/site-level blog CMS and public `/s/<site>/blog` routes were removed. The only blog retained is the public Zylora platform blog, whose write/publish API is SUPER_ADMIN-only; migration 014 deletes legacy site-owned blog rows. AI information architecture also filters Blog/Journal/News pages from customer websites.
