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
    modifiers: {aspect?:boolean;center?:boolean;rotation?:number;parentRotation?:number} = {}
): Rect {
    const angle=(modifiers.rotation||0)*Math.PI/180;
    const parentAngle=(modifiers.parentRotation||0)*Math.PI/180;
    const screenX=(pointerCurrent.x-pointerStart.x)/Math.max(.01,zoom);
    const screenY=(pointerCurrent.y-pointerStart.y)/Math.max(.01,zoom);
    // Pointer deltas arrive in viewport coordinates. Resolve them into the
    // parent coordinate system before resolving the node's own rotated axes.
    // Translation does not affect a delta; ancestor rotation does.
    const parentX=screenX*Math.cos(parentAngle)+screenY*Math.sin(parentAngle);
    const parentY=-screenX*Math.sin(parentAngle)+screenY*Math.cos(parentAngle);
    const factor=modifiers.center?2:1;
    const dx = (parentX*Math.cos(angle)+parentY*Math.sin(angle))*factor;
    const dy = (-parentX*Math.sin(angle)+parentY*Math.cos(angle))*factor;
    
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
        x=originalRect.x+(originalRect.w-w)/2;
        y=originalRect.y+(originalRect.h-h)/2;
    }
    // CSS rotates around the centre. Rotate the centre displacement so the
    // opposite handle stays fixed in parent coordinates throughout the resize.
    const cx=x+w/2-(originalRect.x+originalRect.w/2);
    const cy=y+h/2-(originalRect.y+originalRect.h/2);
    x=originalRect.x+originalRect.w/2+cx*Math.cos(angle)-cy*Math.sin(angle)-w/2;
    y=originalRect.y+originalRect.h/2+cx*Math.sin(angle)+cy*Math.cos(angle)-h/2;
    return { x, y, w, h };
}
