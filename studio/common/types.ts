/**
 * Zylora Studio - Common Geometric & Visual Types
 * Derived from Penpot common/src/app/common/types/ and geom/
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** 2D Affine transformation matrix: [a, b, c, d, tx, ty] */
export type Matrix2D = [number, number, number, number, number, number];

export interface Transform {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // degrees
  scaleX?: number;
  scaleY?: number;
}

export type ResizeHandle =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'n'
  | 's'
  | 'e'
  | 'w'
  | 'nw'
  | 'ne'
  | 'sw'
  | 'se';

export interface SnapCandidate {
  position: number;
  orientation: 'vertical' | 'horizontal';
  type: 'edge' | 'center' | 'guide' | 'spacing';
  distance?: number;
  targetId?: string;
}

export interface SnapResult {
  x: number;
  y: number;
  guides: SnapCandidate[];
}

export type LayoutMode = 'freeform' | 'flow' | 'flex' | 'grid';

export interface FlexConfig {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  gap: number;
  padding?: { top: number; right: number; bottom: number; left: number };
}

export interface GridConfig {
  columns: string; // e.g. "repeat(3, 1fr)" or "200px 1fr"
  rows?: string;
  columnGap: number;
  rowGap: number;
}
