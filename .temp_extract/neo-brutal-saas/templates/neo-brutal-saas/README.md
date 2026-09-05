# Neo Brutal SaaS

A self-contained React/Next.js landing-page template based on the supplied neo-brutalist reference.

## Structure
- `page.tsx` – Next.js App Router entry point
- `Template.tsx` – reusable template component
- `styles.module.css` – all template-specific styling
- `components/` – section components
- `assets/` – locally generated WEBP mockup assets
- `metadata.ts` / `metadata.json` – catalogue metadata

No third-party image assets are bundled. The hero composition itself is CSS-based so it stays sharp and responsive; `assets/hero.webp` is included as a preview/fallback asset.
