import { Rect } from './math';

export type SnapKind = 'edge' | 'center' | 'spacing' | 'guide';
export interface SnapLine { position:number; orientation:'vertical'|'horizontal'; type:SnapKind; label?:string; from?:number; to?:number; }
export interface ExplicitGuide { position:number; orientation:'vertical'|'horizontal'; label?:string; }
export interface SnapOptions { screenTolerance?:number; disableSnapping?:boolean; explicitGuides?:ExplicitGuide[]; }

const EPSILON=.75;
const xEdges=(r:Rect)=>[r.x,r.x+r.w]; const yEdges=(r:Rect)=>[r.y,r.y+r.h];
const xCenter=(r:Rect)=>r.x+r.w/2; const yCenter=(r:Rect)=>r.y+r.h/2;
const spacingOrderCache=new WeakMap<Rect[],{horizontal:Rect[];vertical:Rect[]}>();
const orderedPeers=(peers:Rect[])=>{
  const cached=spacingOrderCache.get(peers);
  if(cached)return cached;
  const value={horizontal:peers.slice().sort((a,b)=>a.x-b.x),vertical:peers.slice().sort((a,b)=>a.y-b.y)};
  spacingOrderCache.set(peers,value);
  return value;
};

function addSpacingCandidates(rect:Rect,peers:Rect[],horizontal:boolean,add:(candidate:number,line:SnapLine)=>void){
  const sorted=horizontal?orderedPeers(peers).horizontal:orderedPeers(peers).vertical;
  // Only adjacent intervals can form a visible gap. Considering every pair
  // made resize cost quadratic on large documents without adding a useful
  // guide, because non-adjacent pairs contain another peer in the interval.
  for(let i=0;i<sorted.length-1;i++){
    const a=sorted[i],b=sorted[i+1],aEnd=horizontal?a.x+a.w:a.y+a.h,bStart=horizontal?b.x:b.y,gap=bStart-aEnd;
    const overlap=horizontal?Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y):Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x);
    if(gap<-EPSILON||overlap<=0)continue;
    const size=horizontal?rect.w:rect.h;
    // When the moving object fits between two peers, the equal-gap position
    // is the midpoint of the available gap, not the peer's edge. This keeps
    // the visible spacing label and snapped geometry mathematically aligned.
    const betweenGap=(gap-size)/2;
    if(betweenGap>=-EPSILON){
      const candidate=aEnd+Math.max(0,betweenGap),line:SnapLine={position:candidate,orientation:horizontal?'vertical':'horizontal',type:'spacing',label:`${Math.round(Math.max(0,betweenGap))} px`,from:aEnd,to:bStart};
      add(candidate,line);
    }
    // Also support placing the moving object before or after an existing
    // evenly-spaced pair, using the pair's measured gap as the target gap.
    const before=(horizontal?a.x:a.y)-size-gap,after=(horizontal?b.x+b.w:b.y+b.h)+gap,label=`${Math.round(Math.max(0,gap))} px`,orientation=horizontal?'vertical':'horizontal';
    add(before,{position:before,orientation,type:'spacing',label,from:before+size,to:horizontal?a.x:a.y});
    add(after,{position:after,orientation,type:'spacing',label,from:horizontal?b.x+b.w:b.y+b.h,to:after+size});
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
  const candidate=(r:Rect)=>{
    // Evaluate every source/target relation: each edge and the centre of the
    // moving rectangle may align to either edge or the centre of a peer. The
    // previous edge-only pairing missed edge-to-centre and centre-to-edge
    // cases even though the guide model supports them.
    const xSources=[rect.x,rect.x+rect.w,xCenter(rect)],xTargets=[r.x,r.x+r.w,xCenter(r)];
    const ySources=[rect.y,rect.y+rect.h,yCenter(rect)],yTargets=[r.y,r.y+r.h,yCenter(r)];
    xSources.forEach((source,sourceIndex)=>xTargets.forEach((target,targetIndex)=>sx(target,source,sourceIndex===2||targetIndex===2?'center':'edge')));
    ySources.forEach((source,sourceIndex)=>yTargets.forEach((target,targetIndex)=>sy(target,source,sourceIndex===2||targetIndex===2?'center':'edge')));
  };
  if(!options.disableSnapping){
    if(parentBounds)candidate(parentBounds);
    // A peer can only snap when one of its edges/centers is near the moving
    // rectangle. Filter by a generous world-space envelope before evaluating
    // candidates; this keeps dense 500-node pages responsive without changing
    // the visible snap threshold.
    const envelope=Math.max(48,threshold*8);
    const nearby=peers.filter(peer=>peer.x<=rect.x+rect.w+envelope&&peer.x+peer.w>=rect.x-envelope&&peer.y<=rect.y+rect.h+envelope&&peer.y+peer.h>=rect.y-envelope);
    nearby.forEach(candidate);
    (options.explicitGuides||[]).forEach(g=>g.orientation==='vertical'?sx(g.position,rect.x,'guide'):sy(g.position,rect.y,'guide'));
    const xs:Array<{candidate:number;line:SnapLine}>=[],ys:Array<{candidate:number;line:SnapLine}>=[];
    // Spacing guides are valuable on ordinary website pages, but scanning
    // every adjacent interval becomes the dominant cost in stress documents.
    // Keep edge/center/parent snapping at any size and reserve distance-guide
    // work for documents with at most 250 peers.
    if(peers.length<=250){
      // Use the full peer set for interval discovery. The final `choose`
      // threshold still limits what can snap, while considering only `nearby`
      // peers can hide the first member of an equal-spacing pair when the
      // moving node is just beyond the spatial envelope.
      addSpacingCandidates(rect,peers,true,(c,line)=>xs.push({candidate:c,line}));
      addSpacingCandidates(rect,peers,false,(c,line)=>ys.push({candidate:c,line}));
      xs.forEach(v=>choose('x',v.candidate-rect.x,v.line));ys.forEach(v=>choose('y',v.candidate-rect.y,v.line));
    }
  }
  const snapX=bestX as {delta:number;distance:number;line:SnapLine}|null;
  const snapY=bestY as {delta:number;distance:number;line:SnapLine}|null;
  const snappedRect={...rect,x:rect.x+(snapX?snapX.delta:0),y:rect.y+(snapY?snapY.delta:0)};
  const snapLines:SnapLine[]=[];
  if(snapX)snapLines.push(snapX.line);
  if(snapY)snapLines.push(snapY.line);
  return {snappedRect,snapLines,measurements:{x:snappedRect.x,y:snappedRect.y,width:snappedRect.w,height:snappedRect.h}};
}

export const guidesAreStable=(a:SnapLine[],b:SnapLine[])=>a.length===b.length&&a.every((line,i)=>{const other=b[i];return !!other&&line.orientation===other.orientation&&line.type===other.type&&Math.abs(line.position-other.position)<=EPSILON;});
