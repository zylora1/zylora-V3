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
