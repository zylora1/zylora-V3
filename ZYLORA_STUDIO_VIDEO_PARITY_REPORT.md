# Zylora Studio video and still parity report

The supplied stills were used as the measurable source of truth. Direct playback of the local MP4 could not be completed through the available browser surface because `file://` navigation was blocked by browser security policy; no bypass was attempted.

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
