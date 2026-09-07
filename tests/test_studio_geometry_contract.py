from pathlib import Path
import json
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def test_central_geometry_engine_covers_guides_spacing_zoom_and_modifier_bypass():
    snapping = (ROOT / "studio" / "geometry" / "snapping.ts").read_text(encoding="utf-8")
    drag = (ROOT / "studio" / "interactions" / "useDrag.ts").read_text(encoding="utf-8")
    resize = (ROOT / "studio" / "interactions" / "useResize.ts").read_text(encoding="utf-8")
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    assert "type SnapKind = 'edge' | 'center' | 'spacing' | 'guide'" in snapping
    assert "addSpacingCandidates" in snapping and "EPSILON=.75" in snapping
    assert "6/api.zoom" in drag and "e.ctrlKey||e.metaKey" in drag
    assert "computeSnapping" in resize and "e.ctrlKey||e.metaKey" in resize
    assert "snap-${line.type}" in app and "line.label" in app


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
    layers = (ROOT / "studio" / "components" / "LayersPanel.tsx").read_text(encoding="utf-8")
    assert "className={`snap-guide ${line.orientation} snap-${line.type}`}" in app
    assert "left:line.position" in app and "top:line.position" in app
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
console.log(JSON.stringify({resize,centered,aligned,distributed,snapped}));
"""
        result = subprocess.run(['node', '-e', script], cwd=out, check=True, capture_output=True, text=True)
        return json.loads(result.stdout)


def test_geometry_primitives_cover_resize_alignment_distribution_and_screen_threshold():
    vectors = _compiled_geometry_vectors()
    assert vectors['resize']['w'] == 220 and vectors['resize']['h'] == 110
    assert vectors['centered']['x'] == 80 and vectors['centered']['w'] == 240
    assert [item['x'] for item in vectors['aligned']] == [10, 10, 10]
    assert [item['id'] for item in vectors['distributed']] == ['a', 'b', 'c']
    assert [item['x'] for item in vectors['distributed']] == [10, 120, 250]
    assert vectors['snapped']['snappedRect']['x'] == 494
    assert vectors['snapped']['snapLines'][0]['type'] == 'center'
