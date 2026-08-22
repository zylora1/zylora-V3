from __future__ import annotations
import json, math, re, subprocess, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
MAN=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text())
OUT=ROOT/'browser-qa'
OUT.mkdir(exist_ok=True)
SAMPLES=[]
# 50 deterministic samples spread over whole catalogue, maximizing style/industry coverage.
seen_style=set(); seen_ind=set()
for m in MAN:
    ind=m['industry_tags'][0]; st=m['design_style']
    if (st not in seen_style or ind not in seen_ind) and len(SAMPLES)<50:
        SAMPLES.append(m); seen_style.add(st); seen_ind.add(ind)
for i in range(50-len(SAMPLES)):
    SAMPLES.append(MAN[(i*997+431)%len(MAN)])
# de-dupe preserving then top up evenly
uniq=[]; ids=set()
for m in SAMPLES:
    if m['template_id'] not in ids: uniq.append(m); ids.add(m['template_id'])
step=len(MAN)/50
k=0
while len(uniq)<50:
    m=MAN[int(k*step)%len(MAN)]; k+=1
    if m['template_id'] not in ids: uniq.append(m);ids.add(m['template_id'])
SAMPLES=uniq[:50]

NODE='''const fs=require('fs');const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');const src=fs.readFileSync(process.argv[1],'utf8');process.stdout.write(ts.transpileModule(src,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText);'''

def transpile(p:Path)->str:
    r=subprocess.run(['node','-e',NODE,str(p)],capture_output=True,text=True,check=True)
    js=r.stdout
    js=js.replace('const react_1 = __importDefault(require("react"));','const react_1 = {default: React};')
    return js

HARNESS='''
const React={Fragment:Symbol('fragment'),createElement(type,props,...children){return {type,props:props||{},children};}};
function append(parent,node){
 if(node==null||node===false||node===true)return;
 if(Array.isArray(node)){node.forEach(n=>append(parent,n));return;}
 if(typeof node==='string'||typeof node==='number'){parent.appendChild(document.createTextNode(String(node)));return;}
 if(node.type===React.Fragment){node.children.forEach(n=>append(parent,n));return;}
 if(typeof node.type==='function'){append(parent,node.type({...node.props,children:node.children}));return;}
 const el=document.createElement(node.type);
 for(const [k,v] of Object.entries(node.props||{})){
   if(k==='children'||v==null||v===false)continue;
   if(k==='className'){el.setAttribute('class',String(v));continue;}
   if(k==='style'&&typeof v==='object'){for(const [sk,sv] of Object.entries(v)){if(sk.startsWith('--'))el.style.setProperty(sk,String(sv));else try{el.style[sk]=String(sv)}catch(e){}}continue;}
   if(k.startsWith('on'))continue;
   if(k==='htmlFor'){el.setAttribute('for',String(v));continue;}
   if(k==='src'&&!v)continue;
   try{el.setAttribute(k,String(v));}catch(e){}
 }
 node.children.forEach(n=>append(el,n)); parent.appendChild(el);
}
'''

def make_html(js:str)->str:
    safe=js.replace('</script>','<\\/script>')
    script = "(function(){var exports={};var module={exports};function require(x){if(x==='react')return {default:React,__esModule:true};throw new Error('require '+x)};" + HARNESS + "\n" + safe + "\nconst C=exports.default;append(document.getElementById('root'),C({content:{},theme:{}}));})();"
    return '<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>html,body{margin:0;padding:0}*{box-sizing:border-box}body{overflow-x:hidden}</style></head><body><div id=\"root\"></div><script>'+script+'</script></body></html>'


VIEWPORTS=[1440,1280,1024,768,430,390,360]
issues=[]; inspected=[]
shots=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
    page=browser.new_page(viewport={'width':1440,'height':1100})
    for si,m in enumerate(SAMPLES):
        key=m['template_id']; html=make_html(transpile(ROOT/'apps/web/templates'/m['file']))
        template_issues=[]
        for w in VIEWPORTS:
            page.set_viewport_size({'width':w,'height':1000 if w>=768 else 900})
            console=[]
            def on_console(msg):
                if msg.type=='error': console.append(msg.text)
            page.on('console',on_console)
            try:
                page.set_content(html,wait_until='load',timeout=10000)
                result=page.evaluate(r'''() => {
                  const parse = s => { const m=s.match(/rgba?\(([^)]+)\)/); if(!m)return null; const a=m[1].split(/[, ]+/).filter(Boolean).map(Number); return {r:a[0],g:a[1],b:a[2],a:a.length>3?a[3]:1}; };
                  const lum = c => { const f=v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)}; return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b)};
                  const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
                  const bgFor=el=>{let n=el; while(n){const c=parse(getComputedStyle(n).backgroundColor);if(c&&c.a>.95)return c;n=n.parentElement;} return {r:255,g:255,b:255,a:1};};
                  const low=[]; if([1440,390].includes(innerWidth)) [...document.querySelectorAll('body *')].forEach(el=>{ const direct=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()); if(!direct)return; const cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)<.5)return; const fg=parse(cs.color),bg=bgFor(el); if(!fg||!bg)return; const fs=parseFloat(cs.fontSize),fw=parseInt(cs.fontWeight)||400; const large=fs>=24||(fs>=18.66&&fw>=700); const need=large?3:4.5; const cr=contrast(fg,bg); if(cr+0.02<need) low.push({tag:el.tagName,txt:(el.textContent||'').trim().slice(0,70),cr:+cr.toFixed(2),need,fs}); });
                  return {sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,h1:document.querySelectorAll('h1').length,contact:!!document.querySelector('#contact'),links:[...document.querySelectorAll('a')].filter(a=>a.textContent.trim()).length,bodyText:document.body.innerText.length,low:low.slice(0,20)};
                }''')
                if result['sw']>result['cw']+2: template_issues.append(f'{w}px horizontal-overflow {result["sw"]}>{result["cw"]}')
                if result['h1']!=1: template_issues.append(f'{w}px h1-count={result["h1"]}')
                if not result['contact']: template_issues.append(f'{w}px missing-contact-anchor')
                if result['links']<2: template_issues.append(f'{w}px insufficient-navigation-links')
                if result['bodyText']<350: template_issues.append(f'{w}px insufficient-content')
                if result.get('low'): template_issues.extend(f'{w}px contrast:{x["cr"]}<{x["need"]} {x["tag"]} {x["txt"][:32]}' for x in result['low'][:5])
                if console: template_issues.extend(f'{w}px console:{x}' for x in console[:3])
                if si<6 and w in (1440,390):
                    path=OUT/f'{key}-{w}.png';page.screenshot(path=str(path),full_page=True);shots.append(str(path.relative_to(ROOT)))
            except Exception as e: template_issues.append(f'{w}px browser-error:{e}')
            finally:
                try: page.remove_listener('console',on_console)
                except Exception: pass
        if template_issues: issues.append({'template':key,'issues':template_issues})
        inspected.append(key)
    browser.close()

result={'browser':'system Chromium /usr/bin/chromium','templates_inspected':len(inspected),'viewports':VIEWPORTS,'render_checks':len(inspected)*len(VIEWPORTS),'issues_found':sum(len(x['issues']) for x in issues),'templates_with_issues':len(issues),'issues':issues,'sample_templates':inspected,'screenshots':shots}
(OUT/'browser-qa-report.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k not in {'issues','sample_templates','screenshots'}},indent=2))
if issues:
    raise SystemExit(1)
