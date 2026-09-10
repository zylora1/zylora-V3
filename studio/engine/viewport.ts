import type {Point} from '../geometry/math';
export const MIN_ZOOM=.1;
export const MAX_ZOOM=5;
// Legacy callers can still use the wider range; the Studio editor itself is
// deliberately bounded to a usable 25–300% authoring range.
export const EDITOR_MIN_ZOOM=.25;
export const EDITOR_MAX_ZOOM=3;
export const clampZoom=(value:number)=>Math.max(MIN_ZOOM,Math.min(MAX_ZOOM,value));
export const clampEditorZoom=(value:number)=>Math.max(EDITOR_MIN_ZOOM,Math.min(EDITOR_MAX_ZOOM,value));

export interface ViewportState { zoom:number; panX:number; panY:number; }

/** Keep viewport math independent from document geometry. */
export const createViewport=(zoom=1,panX=0,panY=0):ViewportState=>({zoom:clampEditorZoom(zoom),panX,panY});
export const zoomAtPoint=(viewport:ViewportState,nextZoom:number,screenPoint:Point):ViewportState=>{
  const zoom=clampEditorZoom(nextZoom), ratio=zoom/Math.max(.0001,viewport.zoom);
  return {zoom,panX:screenPoint.x-(screenPoint.x-viewport.panX)*ratio,panY:screenPoint.y-(screenPoint.y-viewport.panY)*ratio};
};

export function fitCanvasZoom(workspaceWidth:number,canvasWidth:number,panelAllowance=260):number {
  return clampEditorZoom(Math.min(1,(workspaceWidth-panelAllowance)/Math.max(1,canvasWidth)));
}
