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
    zoom: number = 1,
    modifiers: {aspect?:boolean;center?:boolean} = {}
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

    if(modifiers.aspect){
        const ratio=Math.max(.01,originalRect.w/Math.max(1,originalRect.h));
        if(Math.abs(w-originalRect.w)>=Math.abs(h-originalRect.h)) h=Math.max(10,w/ratio); else w=Math.max(10,h*ratio);
        if(handle.includes('top')) y=originalRect.y+originalRect.h-h;
        if(handle.includes('left')) x=originalRect.x+originalRect.w-w;
    }
    if(modifiers.center){
        if(handle.includes('left')||handle.includes('right')) x=originalRect.x+(originalRect.w-w)/2;
        if(handle.includes('top')||handle.includes('bottom')) y=originalRect.y+(originalRect.h-h)/2;
    }
    return { x, y, w, h };
}
