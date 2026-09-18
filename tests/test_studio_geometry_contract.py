from pathlib import Path
import json
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def test_central_geometry_engine_covers_guides_spacing_zoom_and_modifier_bypass():
    snapping = (ROOT / "studio" / "geometry" / "snapping.ts").read_text(encoding="utf-8")
    drag = (ROOT / "studio" / "interactions" / "useDrag.ts").read_text(encoding="utf-8")
    resize = (ROOT / "studio" / "interactions" / "useResize.ts").read_text(encoding="utf-8")
    transient = (ROOT / "studio" / "engine" / "transient.ts").read_text(encoding="utf-8")
    assert "type SnapKind = 'edge' | 'center' | 'spacing' | 'guide'" in snapping
    assert "addSpacingCandidates" in snapping and "EPSILON=.75" in snapping
    assert "6/api.zoom" in drag and "e.ctrlKey||e.metaKey" in drag
    assert "computeSnapping" in resize and "e.ctrlKey||e.metaKey" in resize
    assert "parentRotation" in resize and "parentRotation" in (ROOT / "studio" / "geometry" / "math.ts").read_text(encoding="utf-8")
    assert "parentX" in (ROOT / "studio" / "geometry" / "math.ts").read_text(encoding="utf-8")
    assert "lostpointercapture" in resize and "window.addEventListener('blur',cancelInteraction)" in resize
    assert "e.key!=='Escape'" in resize and "onResizeUpdate(base,[])" in resize
    assert "window.addEventListener('blur',cancelInteraction)" in drag
    assert "e.key!=='Escape'" in drag and "onDragEnd(base)" in drag
    assert "snap-${line.type}" in transient and "line.label" in transient
    canvas_node = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    assert "canvasSnapLines" in canvas_node and "parentRect.left-canvasRect.left" in canvas_node


def test_alignment_math_and_single_transaction_reducer_commands_exist():
    alignment = (ROOT / "studio" / "geometry" / "alignment.ts").read_text(encoding="utf-8")
    store = (ROOT / "studio" / "store.ts").read_text(encoding="utf-8")
    toolbar = (ROOT / "studio" / "components" / "ContextToolbar.tsx").read_text(encoding="utf-8")
    assert "export function alignRects" in alignment
    assert "export function distributeRects" in alignment
    assert "horizontal-gap" in alignment and "vertical-gap" in alignment
    assert "ALIGN_SELECTED" in store and "DISTRIBUTE_SELECTED" in store
    assert "payload:'left'" in toolbar and "payload:'bottom'" in toolbar


def test_guides_render_inside_transformed_artboard_and_layers_remain_semantic():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    transient = (ROOT / "studio" / "engine" / "transient.ts").read_text(encoding="utf-8")
    layers = (ROOT / "studio" / "components" / "LayersPanel.tsx").read_text(encoding="utf-8")
    assert "<TransientSnapLines />" in app
    assert "className:`snap-guide ${line.orientation} snap-${line.type}`" in transient
    assert "left:line.position" in transient and "top:line.position" in transient
    assert "return next" in layers


def _compiled_geometry_vectors():
    """Execute the actual TypeScript geometry primitives, not a Python copy."""
    with tempfile.TemporaryDirectory(prefix='zylora-geometry-') as target:
        out = Path(target)
        tsc = ROOT / 'node_modules' / '.bin' / 'tsc.cmd'
        subprocess.run([
            str(tsc), 'studio/geometry/math.ts', 'studio/geometry/alignment.ts',
            'studio/geometry/snapping.ts', '--outDir', str(out), '--module', 'commonjs',
            '--target', 'ES2020', '--skipLibCheck', '--esModuleInterop',
        ], cwd=ROOT, check=True, capture_output=True, text=True)
        script = """
const {computeResize} = require('./math.js');
const {alignRects, distributeRects} = require('./alignment.js');
const {computeSnapping} = require('./snapping.js');
const r = {x:100,y:80,w:200,h:100};
const resize = computeResize(r,{x:0,y:0},{x:40,y:20},'bottom-right',2,{aspect:true});
const centered = computeResize(r,{x:0,y:0},{x:40,y:20},'right',1,{center:true});
const aligned = alignRects([
  {id:'a',rect:{x:10,y:10,w:40,h:20}},
  {id:'b',rect:{x:120,y:35,w:60,h:30}},
  {id:'c',rect:{x:250,y:5,w:20,h:10}},
], 'left');
const distributed = distributeRects([
  {id:'c',rect:{x:250,y:0,w:20,h:10}},
  {id:'a',rect:{x:10,y:0,w:40,h:10}},
  {id:'b',rect:{x:120,y:0,w:60,h:10}},
], 'horizontal-gap');
const snapped = computeSnapping({x:492,y:100,w:12,h:80}, [], {x:0,y:0,w:1000,h:600}, 6);
const spacing = computeSnapping({x:218,y:20,w:60,h:40}, [
  {x:100,y:10,w:100,h:60},
  {x:300,y:10,w:100,h:60},
], null, 6);
console.log(JSON.stringify({resize,centered,aligned,distributed,snapped,spacing}));
"""
        result = subprocess.run(['node', '-e', script], cwd=out, check=True, capture_output=True, text=True)
        return json.loads(result.stdout)


def test_geometry_primitives_cover_resize_alignment_distribution_and_screen_threshold():
    vectors = _compiled_geometry_vectors()
    assert vectors['resize']['w'] == 220 and vectors['resize']['h'] == 110
    # The dragged edge follows the pointer; its opposite moves equally from centre.
    assert vectors['centered']['x'] == 60 and vectors['centered']['w'] == 280
    assert [item['x'] for item in vectors['aligned']] == [10, 10, 10]
    assert [item['id'] for item in vectors['distributed']] == ['a', 'b', 'c']
    assert [item['x'] for item in vectors['distributed']] == [10, 120, 250]
    assert vectors['snapped']['snappedRect']['x'] == 494
    assert vectors['snapped']['snapLines'][0]['type'] == 'center'
    assert vectors['spacing']['snappedRect']['x'] == 220
    assert any(line['type'] == 'spacing' for line in vectors['spacing']['snapLines'])


def test_snapping_matrix_covers_edges_centers_spacing_parent_bounds_and_zoom():
    """Exercise every alignment relation against the production snap engine."""
    with tempfile.TemporaryDirectory(prefix='studio-snap-matrix-') as target:
        subprocess.run([
            str(ROOT / 'node_modules' / '.bin' / 'tsc.cmd'),
            'studio/geometry/snapping.ts',
            '--outDir', target,
            '--module', 'commonjs',
            '--target', 'ES2020',
            '--skipLibCheck',
        ], cwd=ROOT, check=True, capture_output=True, text=True)
        result = subprocess.run(['node', '-e', r'''
const assert=require('node:assert/strict');
const {computeSnapping}=require('./snapping.js');
const close=(a,b,t=.000001)=>assert.ok(Math.abs(a-b)<=t,`${a} != ${b}`);
const relationOffsets={left:0,center:20,right:40};
const relationTargets={left:100,center:200,right:300};
const relations=['left','center','right'];
let horizontal=0,vertical=0;
for(const source of relations) for(const target of relations){
  const x=relationTargets[target]-relationOffsets[source]+3;
  const result=computeSnapping({x,y:180,w:40,h:40},[{x:100,y:100,w:200,h:200}],null,6);
  const line=result.snapLines.find(item=>item.orientation==='vertical');
  assert.ok(line,`${source}->${target} has no vertical guide`);
  close(line.position,relationTargets[target]);
  close(result.snappedRect.x,relationTargets[target]-relationOffsets[source]);
  horizontal++;
  const y=relationTargets[target]-relationOffsets[source]+3;
  const verticalResult=computeSnapping({x:180,y,w:40,h:40},[{x:100,y:100,w:200,h:200}],null,6);
  const verticalLine=verticalResult.snapLines.find(item=>item.orientation==='horizontal');
  assert.ok(verticalLine,`${source}->${target} has no horizontal guide`);
  close(verticalLine.position,relationTargets[target]);
  close(verticalResult.snappedRect.y,relationTargets[target]-relationOffsets[source]);
  vertical++;
}
const gapX=computeSnapping({x:385,y:20,w:80,h:40},[
  {x:100,y:10,w:80,h:60},{x:204,y:10,w:160,h:60}
],null,6);
const spacingX=gapX.snapLines.find(item=>item.type==='spacing');
assert.ok(spacingX);close(gapX.snappedRect.x,388);close(spacingX.position,388);assert.equal(spacingX.label,'24 px');
const gapY=computeSnapping({x:20,y:385,w:40,h:80},[
  {x:10,y:100,w:60,h:80},{x:10,y:204,w:60,h:160}
],null,6);
const spacingY=gapY.snapLines.find(item=>item.type==='spacing');
assert.ok(spacingY);close(gapY.snappedRect.y,388);close(spacingY.position,388);assert.equal(spacingY.label,'24 px');
const nested=computeSnapping({x:196,y:130,w:40,h:40},[],{x:0,y:0,w:400,h:300},6);
const parentLine=nested.snapLines.find(item=>item.orientation==='vertical');
assert.ok(parentLine);close(parentLine.position,200);close(nested.snappedRect.x,200);
const rotatedPolicy=computeSnapping({x:296,y:120,w:40,h:40},[{x:100,y:100,w:200,h:200}],null,6);
assert.equal(rotatedPolicy.snapLines.find(item=>item.orientation==='vertical')?.position,300);
for(const zoom of [.25,.5,.75,1,1.25,1.5,2,4]){
  const threshold=6/zoom, offset=3/zoom;
  const zoomed=computeSnapping({x:100-offset,y:180,w:200,h:40},[{x:100,y:100,w:100,h:200}],null,threshold);
  close(zoomed.snappedRect.x,100);close(zoomed.snapLines.find(item=>item.orientation==='vertical').position,100);
}
console.log(JSON.stringify({horizontal,vertical,zoomLevels:8,policy:'axis-aligned bounding boxes'}));
'''], cwd=target, check=False, capture_output=True, text=True)
        assert result.returncode == 0, result.stderr + result.stdout
        result_json = json.loads(result.stdout)
        assert result_json == {'horizontal': 9, 'vertical': 9, 'zoomLevels': 8, 'policy': 'axis-aligned bounding boxes'}
