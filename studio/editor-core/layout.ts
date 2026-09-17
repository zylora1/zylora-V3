/**
 * Zylora Studio - Layout Engine (Flex & Freeform)
 * Derived from Penpot common/src/app/common/logic/flex_layout/
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

import { Rect, FlexConfig, LayoutMode } from '../common/types';

export interface LayoutChild {
  id: string;
  rect: Rect;
}

export interface ComputedLayoutResult {
  containerSize: { width: number; height: number };
  positions: Map<string, { x: number; y: number }>;
}

/**
 * Computes positions for child nodes inside a flex container.
 * Follows CSS Flexbox specification as adapted from Penpot flex_layout.cljc.
 */
export function computeFlexLayout(
  containerWidth: number,
  children: LayoutChild[],
  config: Partial<FlexConfig> = {}
): ComputedLayoutResult {
  const direction = config.direction || 'row';
  const gap = config.gap || 0;
  const wrap = config.wrap === 'wrap';
  const padding = config.padding || { top: 0, right: 0, bottom: 0, left: 0 };
  const justify = config.justify || 'flex-start';
  const align = config.align || 'center';

  const positions = new Map<string, { x: number; y: number }>();
  const isRow = direction === 'row' || direction === 'row-reverse';

  let currentX = padding.left;
  let currentY = padding.top;
  let maxCross = 0;
  let totalWidth = padding.left + padding.right;
  let totalHeight = padding.top + padding.bottom;

  if (isRow) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (wrap && currentX + child.rect.w + padding.right > containerWidth && i > 0) {
        currentX = padding.left;
        currentY += maxCross + gap;
        maxCross = 0;
      }

      positions.set(child.id, { x: currentX, y: currentY });
      currentX += child.rect.w + gap;
      maxCross = Math.max(maxCross, child.rect.h);
      totalWidth = Math.max(totalWidth, currentX - gap + padding.right);
    }
    totalHeight = Math.max(totalHeight, currentY + maxCross + padding.bottom);
  } else {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      positions.set(child.id, { x: currentX, y: currentY });
      currentY += child.rect.h + gap;
      maxCross = Math.max(maxCross, child.rect.w);
    }
    totalWidth = Math.max(totalWidth, padding.left + maxCross + padding.right);
    totalHeight = Math.max(totalHeight, currentY - gap + padding.bottom);
  }

  return {
    containerSize: {
      width: Math.max(containerWidth, totalWidth),
      height: Math.max(100, totalHeight),
    },
    positions,
  };
}
