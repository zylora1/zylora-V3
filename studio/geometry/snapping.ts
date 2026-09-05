import { Rect } from './math';

export interface SnapLine {
    position: number;
    orientation: 'vertical' | 'horizontal';
    type: 'edge' | 'center';
}

export function computeSnapping(
    rect: Rect,
    peers: Rect[],
    parentBounds: Rect | null,
    threshold: number = 5
): { snappedRect: Rect; snapLines: SnapLine[] } {
    let dx = 0;
    let dy = 0;
    const lines: SnapLine[] = [];

    // Simple implementation for demonstration
    // Real implementation would check all peers and parent
    let bestXDist = Infinity;
    let bestYDist = Infinity;

    if (parentBounds) {
        // Horizontal centers
        const pCenterX = parentBounds.w / 2;
        const myCenterX = rect.x + rect.w / 2;
        if (Math.abs(myCenterX - pCenterX) < threshold) {
            dx = pCenterX - myCenterX;
            lines.push({ position: pCenterX, orientation: 'vertical', type: 'center' });
        }
        
        // Vertical centers
        const pCenterY = parentBounds.h / 2;
        const myCenterY = rect.y + rect.h / 2;
        if (Math.abs(myCenterY - pCenterY) < threshold) {
            dy = pCenterY - myCenterY;
            lines.push({ position: pCenterY, orientation: 'horizontal', type: 'center' });
        }
    }

    return {
        snappedRect: { ...rect, x: rect.x + dx, y: rect.y + dy },
        snapLines: lines
    };
}
