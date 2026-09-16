"""Execute the actual reducer to verify bounded undo and responsive inheritance."""
import json
from pathlib import Path
import subprocess
import tempfile

import pytest

ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(scope='module')
def vectors():
    with tempfile.TemporaryDirectory(prefix='v1-reducer-', dir=ROOT / '.codex-tmp') as target:
        subprocess.run(['node', str(ROOT / 'node_modules/typescript/bin/tsc'),
                        'studio/store.ts', '--outDir', target, '--module', 'commonjs',
                        '--target', 'ES2022', '--skipLibCheck', '--esModuleInterop'],
                       cwd=ROOT, check=True, capture_output=True, text=True)
        script = r"""
const {studioReducer:reduce,initialState,resolveNodeGeometry}=require('./store.js');
const root={id:'root',type:'page',parentId:null,children:['text'],content:{},style:{css:{},tokens:{}},layout:{},responsiveOverrides:{},visibility:'visible'};
const node={...root,id:'text',type:'text',parentId:'root',children:[],content:{text:'original'},geometry:{x:20,y:30,width:400,height:60,rotation:0,mode:'freeform'},style:{css:{left:'20px',top:'30px',width:'400px',height:'60px'},tokens:{}}};
const doc={revision:1,breakpoints:{desktop:1440,tablet:768,mobile:390},pages:{home:{id:'home',slug:'home',name:'Home',rootNodeId:'root',nodes:{root,text:node}}}};
let state={...initialState,document:doc,history:[doc],historyIndex:0,currentPageId:'home'};
for(let i=0;i<250;i++)state=reduce(state,{type:'UPDATE_NODE_TEXT',payload:{nodeId:'text',text:'Edit '+i}});
const historyLength=state.history.length;
state=reduce(state,{type:'UNDO'});
const undoText=state.document.pages.home.nodes.text.content.text;
state=reduce(state,{type:'REDO'});
const redoText=state.document.pages.home.nodes.text.content.text;
state=reduce(state,{type:'UNDO'});
state=reduce(state,{type:'UPDATE_NODE_TEXT',payload:{nodeId:'text',text:'Branched'}});
state=reduce(state,{type:'REDO'});
const branchText=state.document.pages.home.nodes.text.content.text;
state={...state,currentBreakpoint:'mobile'};
state=reduce(state,{type:'UPDATE_NODE_GEOMETRY',payload:{nodeId:'text',geometry:{left:'50px'}}});
const mobileOverride=state.document.pages.home.nodes.text.responsiveOverrides.mobile;
state={...state,currentBreakpoint:'desktop'};
state=reduce(state,{type:'UPDATE_NODE_GEOMETRY',payload:{nodeId:'text',geometry:{width:'600px'}}});
const mobileGeometry=resolveNodeGeometry(state.document.pages.home.nodes.text,'mobile');
console.log(JSON.stringify({historyLength,undoText,redoText,branchText,mobileOverride,mobileGeometry}));
"""
        result = subprocess.run(['node', '-e', script], cwd=target, check=True, capture_output=True, text=True)
        return json.loads(result.stdout)


def test_history_is_bounded_and_undo_redo_branching_preserved(vectors):
    assert vectors['historyLength'] <= 100
    assert vectors['undoText'] == 'Edit 248'
    assert vectors['redoText'] == 'Edit 249'
    assert vectors['branchText'] == 'Branched'


def test_mobile_move_does_not_freeze_inherited_width(vectors):
    assert vectors['mobileOverride']['geometry'] == {'x': 50}
    assert vectors['mobileOverride']['style']['css'] == {'left': '50px'}
    assert vectors['mobileGeometry']['width'] == 600
    assert vectors['mobileGeometry']['x'] == 50
