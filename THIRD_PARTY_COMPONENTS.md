# Third-Party Components and Fonts

## UI/component code

No competitor UI source code, screenshots or template artwork is bundled in this package. Zylora uses its own product shell and internal AI site runtime.

## Fonts

The interface requests **Inter** and **Space Grotesk** from Google Fonts. The internal technical-grid runtime may also request **IBM Plex Mono**. These families are open-source fonts distributed under their upstream open-font licenses. No font binaries are redistributed in this ZIP. System fallbacks remain in CSS.

## Penpot integration (2026-09-16)

The official Penpot repository and frontend/data architecture documentation
were inspected for the Studio foundation. The pinned official self-hosted
distribution artifact is recorded in `integrations/penpot/` with its upstream
commit and SHA-256. The complete upstream checkout is present at
`vendor/penpot/` as a Git submodule pinned to `2.17.0` /
`bdce5817ea86d028db29113d9ecdadcf07097b36`. Zylora does not copy or modify
Penpot source or persist a second runtime scene graph. `app/penpot_adapter.py`
remains an original compatibility projection/change adapter until a running
Penpot distribution is available.
The upstream MPL-2.0 record is in `THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`.

The first-party `static/penpot-plugin/zylora-website-tools` files, compiler,
mapping and migration helpers are independently authored Zylora code. They do
not bundle Penpot source or provider credentials. The plugin remains a bridge
contract until the pinned distribution can be started and exercised.

## Runtime packages

Python dependencies are declared in `requirements.txt` / `requirements-prod.txt` and retain their respective upstream licenses. This file is a project record, not a substitute for a complete SBOM or legal review.

## AI creation workbench (2026-08-26)
The AI creation screen uses an original Zylora implementation of a two-pane **chat + generated artifact** workflow requested as a visual/interaction reference. The proprietary `@reactbits-pro/ai-chat-2` package is **not vendored, copied, or installed** because this repository is a static FastAPI/HTML/JavaScript frontend and no React Bits Pro registry/license key is present. The implementation preserves the requested interaction model—assistant conversation, generated-artifact side panel, preview tabs, and local version snapshots—without shipping unlicensed React Bits Pro source.
## Sneat Bootstrap HTML Admin Template Free
- Source package supplied by the user: `sneat-bootstrap-html-admin-template-free` v1.0.0
- Upstream: ThemeSelection / `sneat-html-admin-template-free`
- License: MIT
- Zylora usage: dashboard visual/layout adaptation only (vertical navigation, floating top bar, card language, spacing, primary palette) plus the shipped `man-with-laptop-light.png` illustration. Demo pages and unrelated components are not bundled into the dashboard.
- License notice: `THIRD_PARTY_LICENSES/SNEAT_MIT_LICENSE.md`

