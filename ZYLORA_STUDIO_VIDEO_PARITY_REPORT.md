# Zylora Studio video and still parity report

Both supplied MP4 recordings were decoded through an isolated local HTTP range server and a browser media pipeline before implementation changes. The evidence manifest and contact sheets are retained under `C:\Zylora-Ithanda finalu\.codex-tmp\video-parity-evidence\`.

| Recording | Duration | Resolution | Frames extracted | Sampling |
|---|---:|---:|---:|---|
| `50242_1280x720.mp4` | 368.924 s | 1280 x 720 | 370 | 1 s + terminal frame |
| `VID_20260908_161043064.mp4` | 102.248 s | 1920 x 1080 | 104 | 1 s + terminal frame |

All 474 extracted frames were hashed for uniqueness; 474/474 were unique. Contact sheets covering the complete timelines were manually inspected, including the blank canvas, media/assets, apps, frames, buttons, text, color, animation/position, mobile preview and terminal states. Camera bezel, glare, taskbar and browser chrome were treated as capture artifacts and excluded from the implementation contract.

The reference-sized Elements state was captured at 1535 x 777 and compared without resizing. Measured landmarks match exactly:

| Landmark | Reference | Implementation |
|---|---|---|
| Top bar | 0,0 to 1535,58 | 0,0 to 1535,58 |
| Rail | 0,58 to 70,777 | 0,58 to 70,777 |
| Drawer | 70,58 to 432,777 | 70,58 to 432,777 |
| Canvas | 605,123 to 1392,567 | 605,123 to 1392,567 |
| Add section | 605,591 to 1392,630 | 605,591 to 1392,630 |

Whole-frame normalized mean absolute pixel difference: **0.032877**.

This is strong structural similarity, not mathematical pixel identity. The Zylora implementation uses original local SVG/CSS icons instead of copying Canva's proprietary artwork, and the site title/content is real project data.

Evidence is in `artifacts/studio-canva-grade-rebuild/`, including `reference-elements-1535.png`, `reference-initial-1535.png`, `video-parity/overlay-50.png`, `video-parity/difference-2x.png`, edge images and `metrics.json`.

Verdict: **VISUAL PARITY PARTIAL; STRUCTURAL LANDMARK PARITY PASS**.

The supplied videos show the same shell and interaction family as the measured still. The Studio browser matrix (`scripts/blank_studio_browser_e2e.py`) passes on Chromium, Firefox and WebKit; exact frame-by-frame pixel identity is not claimed because the recordings contain camera perspective, moiré and different project content.
