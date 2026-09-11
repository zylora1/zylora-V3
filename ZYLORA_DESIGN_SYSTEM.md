# Zylora design system

## Authority and scope

The public marketing system is authored in `static/public-theme.css` and extended by `static/public-redesign.css`. Dashboard tokens are injected by `app/main.py` from `static/zylora-tokens.css`. Studio application chrome is authored in `static/studio-ux.css`. Customer-site theme tokens remain document-owned and are rendered by the site renderer; they are not the same thing as editor chrome.

## Public system

- Surfaces: `#F7F7F5` background, white content surfaces, soft neutral section surfaces and a dark footer/cinematic surface.
- Ink: `#111113` primary, `#686A70` secondary and `#92949A` tertiary.
- Boundary: `#E5E5E7` default and `#CACACE` strong borders.
- Action: `#5B5CF0` with `#4A4BE0` hover and a soft violet action background.
- Status: green success, amber warning and red danger tokens are reserved for status meaning.
- Type: Space Grotesk for display headings and Inter for body/UI text, with system fallbacks.
- Layout: 1380px wide container, 920px narrow content, 780px reading content; heading and intro scales use `clamp()`.

## Dashboard and Studio

Dashboard parity uses light surfaces, compact controls and restrained border/shadow elevation. Studio uses a light drafting-table workspace (`--studio-bg:#edf0f4`), white panels and artboards, graphite text, violet primary actions and explicit focus/selection states. The document artboard remains separate from the application shell and can retain a customer site’s own theme.

## Interaction rules

- Every primary action has a visible focus state and a text label where the action is consequential.
- Selection/guides use the editor accent vocabulary; locked and hidden states are represented in Layers and are not inferred from color alone.
- Reduced-motion behavior is preserved by the existing global/editor CSS paths.
- Mobile controls collapse into the existing mobile rail/bottom-sheet patterns rather than creating a second document engine.

## Responsive defaults

Public layout uses CSS breakpoints already present in the shared styles. Studio authoring defaults remain desktop 1440, tablet 768 and mobile 390, while published document breakpoint thresholds remain 991 and 767. The implementation is tested at exact 1440×900 and 390×844 in this release delta; the broader matrix is listed separately in `RESPONSIVE_QA_REPORT.md`.
