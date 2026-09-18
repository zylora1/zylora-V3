"""Execute production TypeScript geometry, including adversarial transforms."""
import json
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]

def test_rotated_resize_and_parent_relative_aggregate_transforms():
    with tempfile.TemporaryDirectory(prefix='studio-transform-') as target:
        subprocess.run([str(ROOT/'node_modules/.bin/tsc.cmd'),
                        'studio/geometry/math.ts','studio/geometry/transform.ts',
                        '--outDir',target,'--module','commonjs','--target','ES2020',
                        '--skipLibCheck'],cwd=ROOT,check=True,capture_output=True,text=True)
        result = subprocess.run(['node','-e',r'''
const assert=require('node:assert/strict');
const {computeResize}=require('./math.js');
const {rotateVector,transformSelectionItem,ungroupRect}=require('./transform.js');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`);
let checks=0;
for(const zoom of [.25,.5,.75,1,1.25,1.5,2]){
 for(const rotation of [0,45,90,135,180,225,270,315]){
  const base={x:100,y:80,w:200,h:100};
  const delta=rotateVector({x:40*zoom,y:0},rotation);
  const resized=computeResize(base,{x:0,y:0},delta,'right',zoom,{rotation});
  close(resized.w,240);close(resized.h,100);
  const oldAnchor=rotateVector({x:-100,y:0},rotation);
  const newAnchor=rotateVector({x:-120,y:0},rotation);
  close(base.x+100+oldAnchor.x,resized.x+120+newAnchor.x);
  close(base.y+50+oldAnchor.y,resized.y+50+newAnchor.y);
  const centered=computeResize(base,{x:0,y:0},delta,'right',zoom,{rotation,center:true});
  close(centered.w,280);close(centered.x+140,200);close(centered.y+50,130);
  checks++;
 }
}
const local={x:20,y:30,w:100,h:50},world={x:420,y:930,w:100,h:50};
const from={x:400,y:900,w:300,h:200},to={...from,x:460,y:940};
const moved=transformSelectionItem(world,local,0,from,to);
close(moved.x,80);close(moved.y,70); // Not 480/970 canvas coordinates.
const nested=transformSelectionItem(world,local,90,from,to);
close(nested.x,60);close(nested.y,-30);
const group={x:100,y:200,w:200,h:100};
const child={x:0,y:0,w:40,h:20};
const ungrouped=ungroupRect(child,group,90);
close(ungrouped.x,220);close(ungrouped.y,160);
console.log(JSON.stringify({checks}));
'''],cwd=target,check=True,capture_output=True,text=True)
        assert json.loads(result.stdout)['checks']==56


def test_all_resize_handles_keep_the_opposite_anchor_across_zoom_and_rotation():
    """Exercise the production resize math, rather than only the browser handle."""
    with tempfile.TemporaryDirectory(prefix='studio-resize-matrix-') as target:
        subprocess.run([str(ROOT/'node_modules/.bin/tsc.cmd'),
                        'studio/geometry/math.ts',
                        '--outDir',target,'--module','commonjs','--target','ES2020',
                        '--skipLibCheck'],cwd=ROOT,check=True,capture_output=True,text=True)
        result = subprocess.run(['node','-e',r'''
const assert=require('node:assert/strict');
const {computeResize}=require('./math.js');
const close=(a,b,tolerance=0.5)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);
const handles=['right','left','bottom','top','bottom-right','bottom-left','top-right','top-left'];
const angles=[0,15,30,45,90,135,180];
const zooms=[.25,.5,.75,1,1.25,1.5,2,4];
const base={x:100,y:80,w:200,h:100};
const rotate=(point,angle)=>{const radians=angle*Math.PI/180;return {
  x:point.x*Math.cos(radians)-point.y*Math.sin(radians),
  y:point.x*Math.sin(radians)+point.y*Math.cos(radians)
};};
const add=(a,b)=>({x:a.x+b.x,y:a.y+b.y});
const corners=(rect,angle)=>{const center={x:rect.x+rect.w/2,y:rect.y+rect.h/2};return {
  tl:add(center,rotate({x:-rect.w/2,y:-rect.h/2},angle)),
  tr:add(center,rotate({x:rect.w/2,y:-rect.h/2},angle)),
  br:add(center,rotate({x:rect.w/2,y:rect.h/2},angle)),
  bl:add(center,rotate({x:-rect.w/2,y:rect.h/2},angle))
};};
const opposite={right:'tl',left:'tr',bottom:'tl',top:'bl','bottom-right':'tl','bottom-left':'tr','top-right':'bl','top-left':'br'};
let matrixChecks=0;
for(const zoom of zooms) for(const angle of angles) for(const handle of handles){
  const local={x:0,y:0};
  if(handle.includes('right')) local.x=40;
  if(handle.includes('left')) local.x=-40;
  if(handle.includes('bottom')) local.y=30;
  if(handle.includes('top')) local.y=-30;
  const pointer=rotate({x:local.x*zoom,y:local.y*zoom},angle);
  const resized=computeResize(base,{x:0,y:0},pointer,handle,zoom,{rotation:angle});
  const before=corners(base,angle)[opposite[handle]];
  const after=corners(resized,angle)[opposite[handle]];
  close(before.x,after.x);close(before.y,after.y);
  assert.ok(resized.w>=10&&resized.h>=10);
  matrixChecks++;
}
const ratioBase={x:100.25,y:88.5,w:301.75,h:200.5};
const ratioAngle=30;
const ratioDelta=rotate({x:40*1.5,y:10*1.5},ratioAngle);
const ratioResize=computeResize(ratioBase,{x:0,y:0},ratioDelta,'bottom-right',1.5,{rotation:ratioAngle,aspect:true});
close(ratioResize.w/ratioResize.h,ratioBase.w/ratioBase.h,1e-9);
const ratioBefore=corners(ratioBase,ratioAngle).tl;
const ratioAfter=corners(ratioResize,ratioAngle).tl;
close(ratioBefore.x,ratioAfter.x,1e-7);close(ratioBefore.y,ratioAfter.y,1e-7);
const centered=computeResize(base,{x:0,y:0},rotate({x:40,y:30},45),'bottom-right',1,{rotation:45,center:true});
close(centered.x+centered.w/2,base.x+base.w/2,1e-7);
close(centered.y+centered.h/2,base.y+base.h/2,1e-7);
const clamped=computeResize({x:20,y:30,w:20,h:20},{x:0,y:0},{x:200,y:200},'top-left',1,{});
assert.equal(clamped.w,10);assert.equal(clamped.h,10);
const fractional=computeResize(ratioBase,{x:0,y:0},{x:.25,y:0},'right',1,{});
close(fractional.x,ratioBase.x,1e-9);close(fractional.w,302,1e-9);close(fractional.y,ratioBase.y,1e-9);
console.log(JSON.stringify({matrixChecks}));
'''],cwd=target,check=True,capture_output=True,text=True)
        assert json.loads(result.stdout)['matrixChecks']==448


def test_resize_resolves_pointer_delta_through_a_rotated_parent():
    """A child resize must use parent-local coordinates before node rotation."""
    with tempfile.TemporaryDirectory(prefix='studio-parent-transform-') as target:
        subprocess.run([str(ROOT/'node_modules/.bin/tsc.cmd'),
                        'studio/geometry/math.ts', 'studio/geometry/transform.ts',
                        '--outDir',target,'--module','commonjs','--target','ES2020',
                        '--skipLibCheck'],cwd=ROOT,check=True,capture_output=True,text=True)
        result = subprocess.run(['node','-e',r'''
const assert=require('node:assert/strict');
const {computeResize}=require('./math.js');
const close=(a,b,tolerance=1e-7)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);
const rotate=(p,deg)=>{const r=deg*Math.PI/180;return {x:p.x*Math.cos(r)-p.y*Math.sin(r),y:p.x*Math.sin(r)+p.y*Math.cos(r)}};
const corners=(rect,angle)=>{const c={x:rect.x+rect.w/2,y:rect.y+rect.h/2};const p=(x,y)=>{const q=rotate({x,y},angle);return {x:c.x+q.x,y:c.y+q.y}};return {tl:p(-rect.w/2,-rect.h/2),tr:p(rect.w/2,-rect.h/2),br:p(rect.w/2,rect.h/2),bl:p(-rect.w/2,rect.h/2)}};
const base={x:140,y:90,w:200,h:100};
const cases=[[0,0],[30,0],[90,0],[30,25],[90,25]];
for(const [parentRotation,nodeRotation] of cases){
  const pointer=rotate({x:40*1.5,y:0},parentRotation+nodeRotation);
  const next=computeResize(base,{x:0,y:0},pointer,'right',1.5,{rotation:nodeRotation,parentRotation});
  close(next.w,240);close(next.h,100);
  const before=corners(base,nodeRotation).tl,after=corners(next,nodeRotation).tl;
  close(before.x,after.x);close(before.y,after.y);
}
console.log(JSON.stringify({cases:cases.length}));
'''],cwd=target,check=True,capture_output=True,text=True)
        assert json.loads(result.stdout)['cases']==5
