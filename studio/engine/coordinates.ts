import type {Point,Rect} from '../geometry/math';

export interface ViewportTransform {zoom:number;panX?:number;panY?:number}

export const screenDeltaToWorld=(delta:Point,zoom:number):Point=>({x:delta.x/Math.max(.01,zoom),y:delta.y/Math.max(.01,zoom)});

export function screenToCanvas(point:Point,canvas:DOMRect|Rect,transform:ViewportTransform):Point {
  const delta=screenDeltaToWorld({x:point.x-canvas.x,y:point.y-canvas.y},transform.zoom);
  return {x:delta.x+(transform.panX||0),y:delta.y+(transform.panY||0)};
}

export function canvasToScreen(point:Point,canvas:DOMRect|Rect,transform:ViewportTransform):Point {
  return {x:canvas.x+(point.x-(transform.panX||0))*transform.zoom,y:canvas.y+(point.y-(transform.panY||0))*transform.zoom};
}

export const rectFromElement=(element:HTMLElement,parent:HTMLElement|null,zoom:number,absolute:boolean,css:Record<string,unknown>):Rect=>{
  const rect=element.getBoundingClientRect(),parentRect=parent?.getBoundingClientRect();
  return {
    x:absolute?(parseFloat(String(css.left||0))||0):(rect.left-(parentRect?.left||rect.left))/zoom,
    y:absolute?(parseFloat(String(css.top||0))||0):(rect.top-(parentRect?.top||rect.top))/zoom,
    w:rect.width/zoom,
    h:rect.height/zoom,
  };
};
