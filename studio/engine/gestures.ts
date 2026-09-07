import type {Point} from '../geometry/math';

export const DRAG_ACTIVATION_PX=6;
export const intentionalDrag=(start:Point,current:Point,threshold=DRAG_ACTIVATION_PX)=>Math.hypot(current.x-start.x,current.y-start.y)>=threshold;
