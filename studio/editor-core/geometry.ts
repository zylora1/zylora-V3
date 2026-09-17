/**
 * Zylora Studio - Geometry & Transform Calculations
 * Derived from Penpot common/src/app/common/geom/rect.cljc & modifiers.cljc
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

import { Point, Rect } from '../common/types';

export const rotateVector = (point: Point, degrees: number): Point => {
  const radians = (degrees * Math.PI) / 180;
  const c = Math.cos(radians);
  const s = Math.sin(radians);
  return { x: point.x * c - point.y * s, y: point.x * s + point.y * c };
};

export function distance(p1: Point, p2: Point): number {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

export function pointInRect(p: Point, rect: Rect): boolean {
  return p.x >= rect.x && p.x <= rect.x + rect.w && p.y >= rect.y && p.y <= rect.y + rect.h;
}

export function rectsIntersect(r1: Rect, r2: Rect): boolean {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.y + r1.h > r2.y
  );
}

export function enclosingRect(rects: Rect[]): Rect | null {
  if (!rects.length) return null;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const r of rects) {
    minX = Math.min(minX, r.x);
    minY = Math.min(minY, r.y);
    maxX = Math.max(maxX, r.x + r.w);
    maxY = Math.max(maxY, r.y + r.h);
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

/**
 * 8-handle resize calculation with aspect ratio locking, center-scaling, and rotation compensation.
 * Guarantees that the opposite anchor remains fixed in parent coordinates.
 */
export function computeResize(
  originalRect: Rect,
  pointerStart: Point,
  pointerCurrent: Point,
  handle: string,
  zoom: number = 1,
  modifiers: { aspect?: boolean; center?: boolean; rotation?: number } = {}
): Rect {
  const angle = ((modifiers.rotation || 0) * Math.PI) / 180;
  const screenX = (pointerCurrent.x - pointerStart.x) / Math.max(0.01, zoom);
  const screenY = (pointerCurrent.y - pointerStart.y) / Math.max(0.01, zoom);
  const factor = modifiers.center ? 2 : 1;
  const dx = (screenX * Math.cos(angle) + screenY * Math.sin(angle)) * factor;
  const dy = (-screenX * Math.sin(angle) + screenY * Math.cos(angle)) * factor;

  let { x, y, w, h } = originalRect;

  if (handle.includes('right') || handle === 'e' || handle === 'ne' || handle === 'se') {
    w = Math.max(10, w + dx);
  }
  if (handle.includes('left') || handle === 'w' || handle === 'nw' || handle === 'sw') {
    const d = Math.min(w - 10, dx);
    x += d;
    w -= d;
  }
  if (handle.includes('bottom') || handle === 's' || handle === 'se' || handle === 'sw') {
    h = Math.max(10, h + dy);
  }
  if (handle.includes('top') || handle === 'n' || handle === 'ne' || handle === 'nw') {
    const d = Math.min(h - 10, dy);
    y += d;
    h -= d;
  }

  if (modifiers.aspect) {
    const ratio = Math.max(0.01, originalRect.w / Math.max(1, originalRect.h));
    if (Math.abs(w - originalRect.w) >= Math.abs(h - originalRect.h)) {
      h = Math.max(10, w / ratio);
    } else {
      w = Math.max(10, h * ratio);
    }
    if (handle.includes('top') || handle === 'n' || handle === 'ne' || handle === 'nw') {
      y = originalRect.y + originalRect.h - h;
    }
    if (handle.includes('left') || handle === 'w' || handle === 'nw' || handle === 'sw') {
      x = originalRect.x + originalRect.w - w;
    }
  }

  if (modifiers.center) {
    x = originalRect.x + (originalRect.w - w) / 2;
    y = originalRect.y + (originalRect.h - h) / 2;
  }

  // CSS rotates around the centre. Rotate the centre displacement so the
  // opposite handle stays fixed in parent coordinates throughout the resize.
  const cx = x + w / 2 - (originalRect.x + originalRect.w / 2);
  const cy = y + h / 2 - (originalRect.y + originalRect.h / 2);
  x = originalRect.x + originalRect.w / 2 + cx * Math.cos(angle) - cy * Math.sin(angle) - w / 2;
  y = originalRect.y + originalRect.h / 2 + cx * Math.sin(angle) + cy * Math.cos(angle) - h / 2;

  return { x, y, w, h };
}

/**
 * Move a child's centre with an aggregate transform, then express its
 * displacement in its own parent's axes. No canvas origin enters persistence.
 */
export function transformSelectionItem(
  item: Rect,
  local: Rect,
  parentRotation: number,
  from: Rect,
  to: Rect,
  rotation = 0
): Rect {
  const sx = to.w / from.w;
  const sy = to.h / from.h;
  const oldCenter = { x: item.x + item.w / 2, y: item.y + item.h / 2 };
  const scaled = { x: to.x + (oldCenter.x - from.x) * sx, y: to.y + (oldCenter.y - from.y) * sy };
  const center = { x: to.x + to.w / 2, y: to.y + to.h / 2 };
  const rotated = rotateVector({ x: scaled.x - center.x, y: scaled.y - center.y }, rotation);
  const delta = rotateVector({ x: center.x + rotated.x - oldCenter.x, y: center.y + rotated.y - oldCenter.y }, -parentRotation);
  const w = local.w * sx;
  const h = local.h * sy;
  return { x: local.x + delta.x + (local.w - w) / 2, y: local.y + delta.y + (local.h - h) / 2, w, h };
}

/** Convert group-local geometry back to its parent, preserving CSS centre rotation. */
export function ungroupRect(child: Rect, group: Rect, angle: number): Rect {
  const center = rotateVector({ x: child.x + child.w / 2 - group.w / 2, y: child.y + child.h / 2 - group.h / 2 }, angle);
  return { ...child, x: group.x + group.w / 2 + center.x - child.w / 2, y: group.y + group.h / 2 + center.y - child.h / 2 };
}
