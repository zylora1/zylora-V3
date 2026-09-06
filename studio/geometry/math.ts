export interface Point {
    x: number;
    y: number;
}

export interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}

export function computeResize(
    originalRect: Rect,
    pointerStart: Point,
    pointerCurrent: Point,
    handle: string,
    zoom: number = 1
): Rect {
    const dx = (pointerCurrent.x - pointerStart.x) / zoom;
    const dy = (pointerCurrent.y - pointerStart.y) / zoom;
    
    let { x, y, w, h } = originalRect;

    if (handle.includes('right')) {
        w = Math.max(10, w + dx);
    }
    if (handle.includes('left')) {
        const d = Math.min(w - 10, dx);
        x += d;
        w -= d;
    }
    if (handle.includes('bottom')) {
        h = Math.max(10, h + dy);
    }
    if (handle.includes('top')) {
        const d = Math.min(h - 10, dy);
        y += d;
        h -= d;
    }

    return { x, y, w, h };
}
