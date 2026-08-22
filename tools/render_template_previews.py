from pathlib import Path
import json, subprocess, tempfile, shutil
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
MAN=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text())
OUT=ROOT/'apps/web/public/template-previews'; OUT.mkdir(exist_ok=True)
TD=Path(tempfile.mkdtemp(prefix='zylora-preview-js-'))
node=TD/'transpile.cjs'; node.write_text(r'''const fs=require('fs'),path=require('path');const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');const out=process.argv[2];const dir=process.argv[3];for(const f of fs.readdirSync(dir).filter(x=>/^template-.*\.tsx$/.test(x))){const src=fs.readFileSync(path.join(dir,f),'utf8');const r=ts.transpileModule(src,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true},reportDiagnostics:true});if((r.diagnostics||[]).length)process.exit(2);fs.writeFileSync(path.join(out,path.basename(f,'.tsx')+'.js'),r.outputText)}''')
subprocess.run(['node',str(node),str(TD),str(ROOT/'apps/web/templates')],check=True,timeout=90)
HARNESS='''const React={Fragment:Symbol('fragment'),createElement(type,props,...children){return {type,props:props||{},children};}};function append(parent,node){if(node==null||node===false||node===true)return;if(Array.isArray(node)){node.forEach(n=>append(parent,n));return;}if(typeof node==='string'||typeof node==='number'){parent.appendChild(document.createTextNode(String(node)));return;}if(node.type===React.Fragment){node.children.forEach(n=>append(parent,n));return;}if(typeof node.type==='function'){append(parent,node.type({...node.props,children:node.children}));return;}const el=document.createElement(node.type);for(const [k,v] of Object.entries(node.props||{})){if(k==='children'||v==null||v===false)continue;if(k==='className'){el.setAttribute('class',String(v));continue;}if(k==='style'&&typeof v==='object'){for(const [sk,sv] of Object.entries(v)){if(sk.startsWith('--'))el.style.setProperty(sk,String(sv));else try{el.style[sk]=String(sv)}catch(e){}}continue;}if(k.startsWith('on'))continue;if(k==='src'&&!v)continue;try{el.setAttribute(k,String(v));}catch(e){}}node.children.forEach(n=>append(el,n));parent.appendChild(el);}'''
def html_for(m):
 js=(TD/(Path(m['file']).stem+'.js')).read_text().replace('const react_1 = __importDefault(require("react"));','const react_1 = {default: React};').replace('</script>','<\\/script>')
 script="(function(){var exports={};var module={exports};function require(x){if(x==='react')return {default:React,__esModule:true};throw new Error('require '+x)};"+HARNESS+'\n'+js+"\nconst C=exports.default;append(document.getElementById('root'),C({content:{},theme:{}}));})();"
 return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0}*{box-sizing:border-box}body{overflow:hidden}</style></head><body><div id="root"></div><script>'+script+'</script></body></html>'
errors=[]
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 page=b.new_page(viewport={'width':900,'height':540},device_scale_factor=1)
 for i,m in enumerate(MAN,1):
  if (OUT/(m['template_id']+'.jpg')).exists():
   continue
  try:
   page.set_content(html_for(m),wait_until='load',timeout=6000)
   page.screenshot(path=str(OUT/(m['template_id']+'.jpg')),type='jpeg',quality=52,full_page=False)
  except Exception as e: errors.append([m['template_id'],str(e)])
  if i%100==0: print('rendered',i,flush=True)
 b.close()
shutil.rmtree(TD,ignore_errors=True)
if errors:
 print(errors[:10]);raise SystemExit(1)
# update catalogue and manifests to real browser previews
for path in [ROOT/'apps/web/public/template-catalogue.json',ROOT/'apps/web/public/template-design-manifests.json']:
 data=json.loads(path.read_text())
 for x in data:x['preview_image']=f"/template-previews/{x.get('key',x.get('template_id'))}.jpg"
 path.write_text(json.dumps(data,indent=2))
# remove obsolete generated SVG placeholders
for p in OUT.glob('template-*.svg'):p.unlink()
print('PREVIEWS PASS',len(MAN))
