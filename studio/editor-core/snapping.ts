/**
 * Zylora Studio - Magnetic Snapping & Smart Guides Solver
 * Derived from Penpot common/src/app/common/geom/snap.cljc
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

import { Rect, SnapCandidate } from '../common/types';

export interface SnapLine {
  orientation: 'vertical' | 'horizontal';
  position: number;
  type: 'edge' | 'center' | 'guide' | 'spacing';
  label?: string;
}

export interface SolveSnapOptions {
  threshold?: number; // screen pixels
  zoom?: number;
  guides?: Array<{ orientation: 'horizontal' | 'vertical'; position: number }>;
  artboardWidth?: number;
}

export function solveSnapping(
  draggingRect: Rect,
  otherRects: Rect[],
  options: SolveSnapOptions = {}
): {
  x: number;
  y: number;
  lines: SnapLine[];
} {
  const zoom = Math.max(0.01, options.zoom || 1);
  const threshold = (options.threshold || 6) / zoom;
  let snappedX = draggingRect.x;
  let snappedY = draggingRect.y;
  const lines: SnapLine[] = [];

  const dragCenterX = draggingRect.x + draggingRect.w / 2;
  const dragRight = draggingRect.x + draggingRect.w;
  const dragCenterY = draggingRect.y + draggingRect.h / 2;
  const dragBottom = draggingRect.y + draggingRect.h;

  let bestDistX = threshold + 1;
  let bestDistY = threshold + 1;

  // 1. Snap to Artboard Edges
  if (options.artboardWidth) {
    const artboardTargets = [
      { pos: 0, origin: 'edge' as const },
      { pos: options.artboardWidth / 2, origin: 'center' as const },
      { pos: options.artboardWidth, origin: 'edge' as const },
    ];
    for (const target of artboardTargets) {
      // Left edge
      const dL = Math.abs(draggingRect.x - target.pos);
      if (dL < bestDistX) {
        bestDistX = dL;
        snappedX = target.pos;
        lines.push({ orientation: 'vertical', position: target.pos, type: target.origin });
      }
      // Center
      const dC = Math.abs(dragCenterX - target.pos);
      if (dC < bestDistX) {
        bestDistX = dC;
        snappedX = target.pos - draggingRect.w / 2;
        lines.push({ orientation: 'vertical', position: target.pos, type: target.origin });
      }
      // Right edge
      const dR = Math.abs(dragRight - target.pos);
      if (dR < bestDistX) {
        bestDistX = dR;
        snappedX = target.pos - draggingRect.w;
        lines.push({ orientation: 'vertical', position: target.pos, type: target.origin });
      }
    }
  }

  // 2. Snap to User-defined Ruler Guides
  if (options.guides) {
    for (const guide of options.guides) {
      if (guide.orientation === 'vertical') {
        const dL = Math.abs(draggingRect.x - guide.position);
        if (dL < bestDistX) {
          bestDistX = dL;
          snappedX = guide.position;
          lines.push({ orientation: 'vertical', position: guide.position, type: 'guide' });
        }
        const dC = Math.abs(dragCenterX - guide.position);
        if (dC < bestDistX) {
          bestDistX = dC;
          snappedX = guide.position - draggingRect.w / 2;
          lines.push({ orientation: 'vertical', position: guide.position, type: 'guide' });
        }
        const dR = Math.abs(dragRight - guide.position);
        if (dR < bestDistX) {
          bestDistX = dR;
          snappedX = guide.position - draggingRect.w;
          lines.push({ orientation: 'vertical', position: guide.position, type: 'guide' });
        }
      } else {
        const dT = Math.abs(draggingRect.y - guide.position);
        if (dT < bestDistY) {
          bestDistY = dT;
          snappedY = guide.position;
          lines.push({ orientation: 'horizontal', position: guide.position, type: 'guide' });
        }
        const dM = Math.abs(dragCenterY - guide.position);
        if (dM < bestDistY) {
          bestDistY = dM;
          snappedY = guide.position - draggingRect.h / 2;
          lines.push({ orientation: 'horizontal', position: guide.position, type: 'guide' });
        }
        const dB = Math.abs(dragBottom - guide.position);
        if (dB < bestDistY) {
          bestDistY = dB;
          snappedY = guide.position - draggingRect.h;
          lines.push({ orientation: 'horizontal', position: guide.position, type: 'guide' });
        }
      }
    }
  }

  // 3. Snap to Sibling Rectangles
  for (const other of otherRects) {
    const oLeft = other.x;
    const oCenter = other.x + other.w / 2;
    const oRight = other.x + other.w;
    const oTop = other.y;
    const oMiddle = other.y + other.h / 2;
    const oBottom = other.y + other.h;

    // Horizontal tests (X alignment)
    const xTargets = [
      { target: oLeft, pos: oLeft, type: 'edge' as const },
      { target: oCenter, pos: oCenter - draggingRect.w / 2, type: 'center' as const },
      { target: oRight, pos: oRight - draggingRect.w, type: 'edge' as const },
      { target: oRight, pos: oRight, type: 'edge' as const },
      { target: oLeft, pos: oLeft - draggingRect.w, type: 'edge' as const },
    ];

    for (const t of xTargets) {
      const dist = Math.abs(draggingRect.x - t.pos);
      if (dist < bestDistX) {
        bestDistX = dist;
        snappedX = t.pos;
        lines.push({ orientation: 'vertical', position: t.target, type: t.type });
      }
    }

    // Vertical tests (Y alignment)
    const yTargets = [
      { target: oTop, pos: oTop, type: 'edge' as const },
      { target: oMiddle, pos: oMiddle - draggingRect.h / 2, type: 'center' as const },
      { target: oBottom, pos: oBottom - draggingRect.h, type: 'edge' as const },
      { target: oBottom, pos: oBottom, type: 'edge' as const },
      { target: oTop, pos: oTop - draggingRect.h, type: 'edge' as const },
    ];

    for (const t of yTargets) {
      const dist = Math.abs(draggingRect.y - t.pos);
      if (dist < bestDistY) {
        bestDistY = dist;
        snappedY = t.pos;
        lines.push({ orientation: 'horizontal', position: t.target, type: t.type });
      }
    }
  }

  return {
    x: snappedX,
    y: snappedY,
    lines: lines.slice(0, 4), // Cap to most relevant lines to prevent visual clutter
  };
}
