import type {Point} from '../geometry/math';
import {clampEditorZoom,zoomAtPoint} from './viewport';
import type {ViewportState} from './viewport';

export const DRAG_ACTIVATION_PX=6;
export const intentionalDrag=(start:Point,current:Point,threshold=DRAG_ACTIVATION_PX)=>Math.hypot(current.x-start.x,current.y-start.y)>=threshold;

export interface PinchGesture {startDistance:number;startCenter:Point;startViewport:ViewportState;}
export const pinchDistance=(a:Point,b:Point)=>Math.max(1,Math.hypot(b.x-a.x,b.y-a.y));
export const pinchCenter=(a:Point,b:Point):Point=>({x:(a.x+b.x)/2,y:(a.y+b.y)/2});
export const beginPinch=(first:Point,second:Point,viewport:ViewportState):PinchGesture=>({startDistance:pinchDistance(first,second),startCenter:pinchCenter(first,second),startViewport:viewport});
export const updatePinch=(gesture:PinchGesture,first:Point,second:Point):ViewportState=>{
 const center=pinchCenter(first,second),zoom=clampEditorZoom(gesture.startViewport.zoom*pinchDistance(first,second)/gesture.startDistance);
 const zoomed=zoomAtPoint(gesture.startViewport,zoom,gesture.startCenter);
 return {zoom,panX:zoomed.panX+center.x-gesture.startCenter.x,panY:zoomed.panY+center.y-gesture.startCenter.y};
};
