import {Point,Rect} from './math';

export const rotateVector=(point:Point,degrees:number):Point=>{
 const radians=degrees*Math.PI/180,c=Math.cos(radians),s=Math.sin(radians);
 return {x:point.x*c-point.y*s,y:point.x*s+point.y*c};
};

/** Move a child's centre with an aggregate transform, then express its
 * displacement in its own parent's axes. No canvas origin enters persistence. */
export function transformSelectionItem(item:Rect,local:Rect,parentRotation:number,from:Rect,to:Rect,rotation=0):Rect{
 const sx=to.w/from.w,sy=to.h/from.h;
 const oldCenter={x:item.x+item.w/2,y:item.y+item.h/2};
 const scaled={x:to.x+(oldCenter.x-from.x)*sx,y:to.y+(oldCenter.y-from.y)*sy};
 const center={x:to.x+to.w/2,y:to.y+to.h/2};
 const rotated=rotateVector({x:scaled.x-center.x,y:scaled.y-center.y},rotation);
 const delta=rotateVector({x:center.x+rotated.x-oldCenter.x,y:center.y+rotated.y-oldCenter.y},-parentRotation);
 const w=local.w*sx,h=local.h*sy;
 return {x:local.x+delta.x+(local.w-w)/2,y:local.y+delta.y+(local.h-h)/2,w,h};
}

/** Convert group-local geometry back to its parent, preserving CSS centre rotation. */
export function ungroupRect(child:Rect,group:Rect,angle:number):Rect{
 const center=rotateVector({x:child.x+child.w/2-group.w/2,y:child.y+child.h/2-group.h/2},angle);
 return {...child,x:group.x+group.w/2+center.x-child.w/2,y:group.y+group.h/2+center.y-child.h/2};
}
