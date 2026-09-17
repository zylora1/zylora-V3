/**
 * Zylora Studio - 2D Affine Matrix Math Engine
 * Derived from Penpot common/src/app/common/geom/matrix.cljc
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

import { Point, Rect, Matrix2D } from '../common/types';

/** Identity matrix [a, b, c, d, tx, ty] */
export const IDENTITY: Matrix2D = [1, 0, 0, 1, 0, 0];

export function identity(): Matrix2D {
  return [1, 0, 0, 1, 0, 0];
}

export function translation(tx: number, ty: number): Matrix2D {
  return [1, 0, 0, 1, tx, ty];
}

export function rotation(degrees: number): Matrix2D {
  const rad = (degrees * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return [c, s, -s, c, 0, 0];
}

export function scale(sx: number, sy: number = sx): Matrix2D {
  return [sx, 0, 0, sy, 0, 0];
}

/** Multiply two affine matrices: m1 x m2 */
export function multiply(m1: Matrix2D, m2: Matrix2D): Matrix2D {
  const [a1, b1, c1, d1, tx1, ty1] = m1;
  const [a2, b2, c2, d2, tx2, ty2] = m2;

  return [
    a1 * a2 + c1 * b2,
    b1 * a2 + d1 * b2,
    a1 * c2 + c1 * d2,
    b1 * c2 + d1 * d2,
    a1 * tx2 + c1 * ty2 + tx1,
    b1 * tx2 + d1 * ty2 + ty1,
  ];
}

/** Invert 2D affine matrix */
export function invert(m: Matrix2D): Matrix2D {
  const [a, b, c, d, tx, ty] = m;
  const det = a * d - b * c;

  if (Math.abs(det) < 1e-12) {
    return identity();
  }

  const invDet = 1 / det;
  return [
    d * invDet,
    -b * invDet,
    -c * invDet,
    a * invDet,
    (c * ty - d * tx) * invDet,
    (b * tx - a * ty) * invDet,
  ];
}

/** Transform a 2D point by matrix */
export function transformPoint(m: Matrix2D, point: Point): Point {
  const [a, b, c, d, tx, ty] = m;
  return {
    x: a * point.x + c * point.y + tx,
    y: b * point.x + d * point.y + ty,
  };
}

/** Transform rectangle corners and compute resulting axis-aligned bounding box */
export function transformRect(m: Matrix2D, rect: Rect): Rect {
  const p1 = transformPoint(m, { x: rect.x, y: rect.y });
  const p2 = transformPoint(m, { x: rect.x + rect.w, y: rect.y });
  const p3 = transformPoint(m, { x: rect.x + rect.w, y: rect.y + rect.h });
  const p4 = transformPoint(m, { x: rect.x, y: rect.y + rect.h });

  const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
  const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
  const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
  const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);

  return {
    x: minX,
    y: minY,
    w: maxX - minX,
    h: maxY - minY,
  };
}

/** Decompose matrix into translation, rotation, and scale components */
export function decompose(m: Matrix2D): {
  tx: number;
  ty: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
} {
  const [a, b, c, d, tx, ty] = m;
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  const rotation = (Math.atan2(b, a) * 180) / Math.PI;

  return { tx, ty, scaleX, scaleY, rotation };
}
