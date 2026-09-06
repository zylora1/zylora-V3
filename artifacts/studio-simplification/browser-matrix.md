# Zylora Studio simplification browser evidence

Run date: 2026-09-06

The local isolated browser harness exercised a real SiteDocument, authenticated API bridge, pointer events, autosave and reload:

| Engine | Desktop checks | Desktop errors | Mobile 390px | Mobile errors |
|---|---:|---:|---|---:|
| Chromium | 17 | 0 | PASS | 0 |
| Firefox | 17 | 0 | PASS | 0 |
| WebKit | 17 | 0 | PASS | 0 |

Desktop checks include safe scrolling over unselected nodes, selection, Add-panel drag/drop, text editing, contextual toolbar, direct drag, resize, image upload, responsive breakpoint, keyboard undo/redo, semantic Layers synchronization, autosave and reload persistence.

Mobile checks include the 390px shell, bottom navigation, Add/Layers sheets, no horizontal application overflow, contextual toolbar visibility, zoom selection and console/page-error capture.

Screenshots:

- `data/studio-v4-browser-proof.png`
- `data/studio-mobile-chromium.png`
- `data/studio-mobile-firefox.png`
- `data/studio-mobile-webkit.png`
