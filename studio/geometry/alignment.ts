import { Rect } from './math';

export type Alignment = 'left'|'horizontal-center'|'right'|'top'|'vertical-center'|'bottom';
export type Distribution = 'horizontal-center'|'vertical-center'|'horizontal-gap'|'vertical-gap';

export interface GeometryUpdate { id:string; x:number; y:number; }

const round = (value:number) => Math.round(value * 1000) / 1000;

export function alignRects(items:Array<{id:string;rect:Rect}>,alignment:Alignment):GeometryUpdate[]{
  if(items.length<2)return [];
  const left=Math.min(...items.map(item=>item.rect.x)), right=Math.max(...items.map(item=>item.rect.x+item.rect.w));
  const top=Math.min(...items.map(item=>item.rect.y)), bottom=Math.max(...items.map(item=>item.rect.y+item.rect.h));
  return items.map(({id,rect})=>({id,x:round(alignment==='left'?left:alignment==='right'?right-rect.w:alignment==='horizontal-center'?(left+right-rect.w)/2:rect.x),y:round(alignment==='top'?top:alignment==='bottom'?bottom-rect.h:alignment==='vertical-center'?(top+bottom-rect.h)/2:rect.y)}));
}

/** Distributes centers or gaps deterministically while preserving each size. */
export function distributeRects(items:Array<{id:string;rect:Rect}>,distribution:Distribution):GeometryUpdate[]{
  if(items.length<3)return [];
  const horizontal=distribution.startsWith('horizontal');
  const ordered=items.slice().sort((a,b)=>(horizontal?a.rect.x-b.rect.x:a.rect.y-b.rect.y));
  const first=ordered[0].rect,last=ordered[ordered.length-1].rect;
  if(distribution.endsWith('center')){
    const start=horizontal?first.x+first.w/2:first.y+first.h/2;
    const end=horizontal?last.x+last.w/2:last.y+last.h/2;
    const step=(end-start)/(ordered.length-1);
    return ordered.map((item,index)=>({id:item.id,x:horizontal?round(start+step*index-item.rect.w/2):round(item.rect.x),y:horizontal?round(item.rect.y):round(start+step*index-item.rect.h/2)}));
  }
  const totalSize=ordered.reduce((sum,item)=>sum+(horizontal?item.rect.w:item.rect.h),0);
  const span=(horizontal?last.x+last.w:last.y+last.h)-(horizontal?first.x:first.y);
  const gap=(span-totalSize)/(ordered.length-1);
  let cursor=horizontal?first.x:first.y;
  return ordered.map(item=>{const update={id:item.id,x:horizontal?round(cursor):round(item.rect.x),y:horizontal?round(item.rect.y):round(cursor)};cursor+=(horizontal?item.rect.w:item.rect.h)+gap;return update;});
}

export const rectFromGeometry=(id:string,css:Record<string,string>):{id:string;rect:Rect}=>({id,rect:{x:parseFloat(css.left||'0')||0,y:parseFloat(css.top||'0')||0,w:Math.max(1,parseFloat(css.width||'0')||1),h:Math.max(1,parseFloat(css.height||'0')||1)}});
