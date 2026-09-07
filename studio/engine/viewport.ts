export const MIN_ZOOM=.25;
export const MAX_ZOOM=2;
export const clampZoom=(value:number)=>Math.max(MIN_ZOOM,Math.min(MAX_ZOOM,value));

export function fitCanvasZoom(workspaceWidth:number,canvasWidth:number,panelAllowance=260):number {
  return clampZoom(Math.min(1,(workspaceWidth-panelAllowance)/Math.max(1,canvasWidth)));
}
