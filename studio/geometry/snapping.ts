import { Rect } from './math';

export type SnapKind = 'edge' | 'center' | 'spacing' | 'guide';
export interface SnapLine { position:number; orientation:'vertical'|'horizontal'; type:SnapKind; label?:string; from?:number; to?:number; }
export interface ExplicitGuide { position:number; orientation:'vertical'|'horizontal'; label?:string; }
export interface SnapOptions { screenTolerance?:number; disableSnapping?:boolean; explicitGuides?:ExplicitGuide[]; }

const EPSILON=.75;
const xEdges=(r:Rect)=>[r.x,r.x+r.w]; const yEdges=(r:Rect)=>[r.y,r.y+r.h];
const xCenter=(r:Rect)=>r.x+r.w/2; const yCenter=(r:Rect)=>r.y+r.h/2;

function addSpacingCandidates(rect:Rect,peers:Rect[],horizontal:boolean,add:(candidate:number,line:SnapLine)=>void){
  const sorted=peers.slice().sort((a,b)=>(horizontal?a.x-b.x:a.y-b.y));
  for(let i=0;i<sorted.length;i++)for(let j=i+1;j<sorted.length;j++){
    const a=sorted[i],b=sorted[j],aEnd=horizontal?a.x+a.w:a.y+a.h,bStart=horizontal?b.x:b.y,gap=bStart-aEnd;
    const overlap=horizontal?Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y):Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x);
    if(gap<-EPSILON||overlap<=0)continue;
    const first=aEnd+gap,second=bStart-(horizontal?rect.w:rect.h)-gap,label=`${Math.round(Math.max(0,gap))} px`;
    const line:SnapLine={position:first,orientation:horizontal?'vertical':'horizontal',type:'spacing',label,from:aEnd,to:bStart};
    add(first,line);add(second,{...line,position:second});
  }
}

/** Centralized snap calculation. Tolerance is screen-space when supplied. */
export function computeSnapping(rect:Rect,peers:Rect[],parentBounds:Rect|null,legacyThreshold=5,options:SnapOptions={}):{snappedRect:Rect;snapLines:SnapLine[];measurements:{width:number;height:number;x:number;y:number}}{
  // Callers pass screenTolerance/zoom as a world value through legacyThreshold;
  // keeping this conversion at the boundary prevents zoom-dependent feel.
  const threshold=options.screenTolerance===undefined?legacyThreshold:options.screenTolerance;
  let bestX:{delta:number;distance:number;line:SnapLine}|null=null,bestY:{delta:number;distance:number;line:SnapLine}|null=null;
  const choose=(axis:'x'|'y',delta:number,line:SnapLine)=>{const distance=Math.abs(delta);if(options.disableSnapping||distance>threshold)return;const current=axis==='x'?bestX:bestY;if(!current||distance<current.distance-EPSILON){const next={delta,distance,line};if(axis==='x')bestX=next;else bestY=next;}};
  const sx=(target:number,source:number,type:SnapKind='edge')=>choose('x',target-source,{position:target,orientation:'vertical',type});
  const sy=(target:number,source:number,type:SnapKind='edge')=>choose('y',target-source,{position:target,orientation:'horizontal',type});
  const candidate=(r:Rect)=>{xEdges(r).forEach(v=>{sx(v,rect.x);sx(v,rect.x+rect.w)});yEdges(r).forEach(v=>{sy(v,rect.y);sy(v,rect.y+rect.h)});sx(xCenter(r),xCenter(rect),'center');sy(yCenter(r),yCenter(rect),'center');};
  if(!options.disableSnapping){if(parentBounds)candidate(parentBounds);peers.forEach(candidate);(options.explicitGuides||[]).forEach(g=>g.orientation==='vertical'?sx(g.position,rect.x,'guide'):sy(g.position,rect.y,'guide'));
    const xs:Array<{candidate:number;line:SnapLine}>=[],ys:Array<{candidate:number;line:SnapLine}>=[];
    addSpacingCandidates(rect,peers,true,(c,line)=>xs.push({candidate:c,line}));addSpacingCandidates(rect,peers,false,(c,line)=>ys.push({candidate:c,line}));
    xs.forEach(v=>choose('x',v.candidate-rect.x,v.line));ys.forEach(v=>choose('y',v.candidate-rect.y,v.line));
  }
  const snappedRect={...rect,x:rect.x+(bestX?.delta||0),y:rect.y+(bestY?.delta||0)};
  return {snappedRect,snapLines:[bestX?.line,bestY?.line].filter(Boolean) as SnapLine[],measurements:{x:snappedRect.x,y:snappedRect.y,width:snappedRect.w,height:snappedRect.h}};
}

export const guidesAreStable=(a:SnapLine[],b:SnapLine[])=>a.length===b.length&&a.every((line,i)=>{const other=b[i];return !!other&&line.orientation===other.orientation&&line.type===other.type&&Math.abs(line.position-other.position)<=EPSILON;});
