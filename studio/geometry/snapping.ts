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
    let bestDx = 0;
    let bestDy = 0;
    let minXDist = threshold;
    let minYDist = threshold;
    const lines: SnapLine[] = [];

    const trySnapX = (targetX: number, sourceX: number, type: 'edge' | 'center') => {
        const dist = Math.abs(targetX - sourceX);
        if (dist < minXDist) {
            minXDist = dist;
            bestDx = targetX - sourceX;
            // Clear previous vertical lines since we found a closer one
            for (let i = lines.length - 1; i >= 0; i--) {
                if (lines[i].orientation === 'vertical') lines.splice(i, 1);
            }
            lines.push({ position: targetX, orientation: 'vertical', type });
        } else if (dist === minXDist && dist < threshold) {
            lines.push({ position: targetX, orientation: 'vertical', type });
        }
    };

    const trySnapY = (targetY: number, sourceY: number, type: 'edge' | 'center') => {
        const dist = Math.abs(targetY - sourceY);
        if (dist < minYDist) {
            minYDist = dist;
            bestDy = targetY - sourceY;
            for (let i = lines.length - 1; i >= 0; i--) {
                if (lines[i].orientation === 'horizontal') lines.splice(i, 1);
            }
            lines.push({ position: targetY, orientation: 'horizontal', type });
        } else if (dist === minYDist && dist < threshold) {
            lines.push({ position: targetY, orientation: 'horizontal', type });
        }
    };

    const myCenterX = rect.x + rect.w / 2;
    const myCenterY = rect.y + rect.h / 2;
    const myRight = rect.x + rect.w;
    const myBottom = rect.y + rect.h;

    if (parentBounds) {
        // Parent Edges
        trySnapX(0, rect.x, 'edge'); // Left
        trySnapX(parentBounds.w, myRight, 'edge'); // Right
        trySnapY(0, rect.y, 'edge'); // Top
        trySnapY(parentBounds.h, myBottom, 'edge'); // Bottom
        // Parent Centers
        trySnapX(parentBounds.w / 2, myCenterX, 'center');
        trySnapY(parentBounds.h / 2, myCenterY, 'center');
    }

    for (const peer of peers) {
        const pCenterX = peer.x + peer.w / 2;
        const pCenterY = peer.y + peer.h / 2;
        const pRight = peer.x + peer.w;
        const pBottom = peer.y + peer.h;

        // Peer Edges X
        trySnapX(peer.x, rect.x, 'edge'); // Left to Left
        trySnapX(peer.x, myRight, 'edge'); // Right to Left
        trySnapX(pRight, rect.x, 'edge'); // Left to Right
        trySnapX(pRight, myRight, 'edge'); // Right to Right
        // Peer Edges Y
        trySnapY(peer.y, rect.y, 'edge');
        trySnapY(peer.y, myBottom, 'edge');
        trySnapY(pBottom, rect.y, 'edge');
        trySnapY(pBottom, myBottom, 'edge');
        // Peer Centers
        trySnapX(pCenterX, myCenterX, 'center');
        trySnapY(pCenterY, myCenterY, 'center');
    }

    return {
        snappedRect: { ...rect, x: rect.x + bestDx, y: rect.y + bestDy },
        snapLines: lines
    };
}
