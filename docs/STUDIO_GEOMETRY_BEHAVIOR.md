# Studio geometry behavior

- Guides and snapping are derived from the active scene geometry. The artboard bounds, sibling node edges/centres, group bounds, section bounds, and explicit guide candidates share one calculation path.
- Snap tolerance is six screen pixels (`6 / zoom` artboard pixels). Holding Ctrl/Cmd during drag or resize temporarily disables snapping.
- Equal-spacing candidates use the gap between two stationary, cross-overlapping peers and an epsilon of `0.75` artboard pixels. Labels are rounded for display only; geometry remains fractional until persistence rounds interaction commits.
- Align and distribute commands are one reducer transaction each. `Space H/V` uses equal gaps; center distribution remains available through the same geometry helper for future toolbar exposure.
