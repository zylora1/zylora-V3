from pathlib import Path
import json, subprocess, tempfile, shutil
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
MAN=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text())
# Same deterministic 50-industry spread as browser QA.
industries=[]
for m in MAN:
    ind=m['industry_tags'][0]
    if ind not in industries: industries.append(ind)
chosen_industry_indexes=sorted({round(i*(len(industries)-1)/49) for i in range(50)})
for i in range(len(industries)):
    if len(chosen_industry_indexes)>=50: break
    if i not in chosen_industry_indexes: chosen_industry_indexes.append(i)
chosen_industry_indexes=sorted(chosen_industry_indexes)[:50]
samples=[]
for n,ii in enumerate(chosen_industry_indexes):
    candidates=[m for m in MAN if m['industry_tags'][0]==industries[ii]]
    samples.append(candidates[(n*11+3)%len(candidates)])

TD=Path(tempfile.mkdtemp(prefix='zylora-a11y-'))
node=TD/'t.cjs';node.write_text(r'''const fs=require('fs'),path=require('path');const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');const out=process.argv[2];for(const f of process.argv.slice(3)){const s=fs.readFileSync(f,'utf8');const r=ts.transpileModule(s,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}});fs.writeFileSync(path.join(out,path.basename(f,'.tsx')+'.js'),r.outputText)}''')
subprocess.run(['node',str(node),str(TD),*[str(ROOT/'apps/web/templates'/m['file']) for m in samples]],check=True,timeout=90)
HARNESS='''const React={Fragment:Symbol('fragment'),createElement(type,props,...children){return {type,props:props||{},children};}};function append(parent,node){if(node==null||node===false||node===true)return;if(Array.isArray(node)){node.forEach(n=>append(parent,n));return;}if(typeof node==='string'||typeof node==='number'){parent.appendChild(document.createTextNode(String(node)));return;}if(node.type===React.Fragment){node.children.forEach(n=>append(parent,n));return;}if(typeof node.type==='function'){append(parent,node.type({...node.props,children:node.children}));return;}const el=document.createElement(node.type);for(const [k,v] of Object.entries(node.props||{})){if(k==='children'||v==null||v===false)continue;if(k==='className'){el.setAttribute('class',String(v));continue;}if(k==='style'&&typeof v==='object'){for(const [sk,sv] of Object.entries(v)){if(sk.startsWith('--'))el.style.setProperty(sk,String(sv));else try{el.style[sk]=String(sv)}catch(e){}}continue;}if(k.startsWith('on'))continue;if(k==='src'&&!v)continue;try{el.setAttribute(k,String(v));}catch(e){}}node.children.forEach(n=>append(el,n));parent.appendChild(el);}'''
def html(m):
 js=(TD/(Path(m['file']).stem+'.js')).read_text().replace('const react_1 = __importDefault(require("react"));','const react_1 = {default: React};').replace('</script>','<\\/script>')
 return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0}*{box-sizing:border-box}</style></head><body><div id="root"></div><script>(function(){var exports={};var module={exports};function require(x){if(x===\'react\')return {default:React,__esModule:true};if(x===\'framer-motion\')return {motion:new Proxy({}, {get:(_,tag)=>tag}),useReducedMotion:()=>true,__esModule:true};throw new Error(x)};'+HARNESS+'\n'+js+'\nappend(document.getElementById(\'root\'),exports.default({content:{},theme:{}}));})();</script></body></html>'
issues=[]
EVAL=r'''() => {
 const parse=s=>{const m=s.match(/rgba?\(([^)]+)\)/);if(!m)return null;const a=m[1].split(/[, ]+/).filter(Boolean).map(Number);return {r:a[0],g:a[1],b:a[2],a:a.length>3?a[3]:1}};
 const lum=c=>{const f=v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b)};
 const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
 const bgFor=el=>{let n=el;while(n){const c=parse(getComputedStyle(n).backgroundColor);if(c&&c.a>.95)return c;n=n.parentElement;}return {r:255,g:255,b:255,a:1}};
 const low=[];[...document.querySelectorAll('body *')].forEach(el=>{const direct=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());if(!direct)return;const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)<.5)return;const fg=parse(cs.color),bg=bgFor(el);if(!fg||!bg)return;const fs=parseFloat(cs.fontSize),fw=parseInt(cs.fontWeight)||400,large=fs>=24||(fs>=18.66&&fw>=700),need=large?3:4.5,cr=contrast(fg,bg);if(cr+.03<need)low.push({tag:el.tagName,cr:+cr.toFixed(2),need,txt:(el.textContent||'').trim().slice(0,60)})});
 const imgs=[...document.querySelectorAll('img')].filter(x=>!x.hasAttribute('alt'));
 const nameless=[...document.querySelectorAll('a,button,summary')].filter(e=>!((e.textContent||'').trim()||e.getAttribute('aria-label')||e.getAttribute('title')));
 const small=[...document.querySelectorAll('a,button,summary')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&(r.width<44||r.height<44)}).length;
 return {low:low.slice(0,20),missingAlt:imgs.length,nameless:nameless.length,h1:document.querySelectorAll('h1').length,small};
}'''
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 page=b.new_page(viewport={'width':1440,'height':1000})
 for m in samples:
  for w in [1440,390]:
   page.set_viewport_size({'width':w,'height':900});page.set_content(html(m),wait_until='load',timeout=8000);r=page.evaluate(EVAL)
   cur=[]
   if r['low']:cur.append({'contrast':r['low']})
   if r['missingAlt']:cur.append({'missing_alt':r['missingAlt']})
   if r['nameless']:cur.append({'nameless_controls':r['nameless']})
   if r['h1']!=1:cur.append({'h1_count':r['h1']})
   if w==390 and r['small']>0:cur.append({'small_touch_targets':r['small']})
   if cur:issues.append({'template':m['template_id'],'width':w,'issues':cur})
 b.close()
shutil.rmtree(TD,ignore_errors=True)
result={'templates_inspected':len(samples),'viewport_checks':len(samples)*2,'serious':len(issues),'critical':0,'issues':issues}
(ROOT/'ACCESSIBILITY_QA.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k!='issues'},indent=2))
if issues:raise SystemExit(1)
