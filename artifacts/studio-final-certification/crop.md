# Image crop evidence

`scripts/studio_v4_e2e.py` passed in Chromium, Firefox, and WebKit with 18 checks and 0 errors per engine.

- Entered Crop mode on a real image frame.
- Dragged the image inside the stationary frame.
- Used the crop zoom control and confirmed with Done.
- Autosave persisted `{x: 7.9096, y: 5.4545, scale: 1.1}` on the controlled document.
- Reload restored the crop state; renderer emits a clipped wrapper with object-position/scale.
- The final source includes backward-compatible optional `NodeCrop` fields.
