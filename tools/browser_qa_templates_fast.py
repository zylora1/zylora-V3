from __future__ import annotations
import json, subprocess, tempfile, shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
MAN=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text())
OUT=ROOT/'browser-qa-final'; OUT.mkdir(exist_ok=True)
# 50 deterministic templates spread across 50 different industries and varied styles.
industries=[]
for m in MAN:
    ind=m['industry_tags'][0]
    if ind not in industries: industries.append(ind)
chosen_industry_indexes=sorted({round(i*(len(industries)-1)/49) for i in range(50)})
# Rounding can theoretically collapse indexes; fill any gap deterministically.
for i in range(len(industries)):
    if len(chosen_industry_indexes)>=50: break
    if i not in chosen_industry_indexes: chosen_industry_indexes.append(i)
chosen_industry_indexes=sorted(chosen_industry_indexes)[:50]
samples=[]
for n,ii in enumerate(chosen_industry_indexes):
    candidates=[m for m in MAN if m['industry_tags'][0]==industries[ii]]
    samples.append(candidates[(n*11+3)%len(candidates)])

TD=Path(tempfile.mkdtemp(prefix='zylora-js-'))
paths=[str(ROOT/'apps/web/templates'/m['file']) for m in samples]
node=TD/'transpile.cjs'
node.write_text(r'''const fs=require('fs'),path=require('path');const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');const out=process.argv[2];for(const f of process.argv.slice(3)){const src=fs.readFileSync(f,'utf8');const r=ts.transpileModule(src,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true},reportDiagnostics:true});if((r.diagnostics||[]).length){console.error(f);process.exit(2)}fs.writeFileSync(path.join(out,path.basename(f,'.tsx')+'.js'),r.outputText)}''')
subprocess.run(['node',str(node),str(TD),*paths],check=True,timeout=90)

HARNESS='''const React={Fragment:Symbol('fragment'),createElement(type,props,...children){return {type,props:props||{},children};}};
function append(parent,node){if(node==null||node===false||node===true)return;if(Array.isArray(node)){node.forEach(n=>append(parent,n));return;}if(typeof node==='string'||typeof node==='number'){parent.appendChild(document.createTextNode(String(node)));return;}if(node.type===React.Fragment){node.children.forEach(n=>append(parent,n));return;}if(typeof node.type==='function'){append(parent,node.type({...node.props,children:node.children}));return;}const el=document.createElement(node.type);for(const [k,v] of Object.entries(node.props||{})){if(k==='children'||v==null||v===false)continue;if(k==='className'){el.setAttribute('class',String(v));continue;}if(k==='style'&&typeof v==='object'){for(const [sk,sv] of Object.entries(v)){if(sk.startsWith('--'))el.style.setProperty(sk,String(sv));else try{el.style[sk]=String(sv)}catch(e){}}continue;}if(k.startsWith('on'))continue;if(k==='htmlFor'){el.setAttribute('for',String(v));continue;}if(k==='src'&&!v)continue;try{el.setAttribute(k,String(v));}catch(e){}}node.children.forEach(n=>append(el,n));parent.appendChild(el);}'''

def make_html(m):
    js=(TD/(Path(m['file']).stem+'.js')).read_text().replace('const react_1 = __importDefault(require("react"));','const react_1 = {default: React};')
    safe=js.replace('</script>','<\\/script>')
    script="(function(){var exports={};var module={exports};function require(x){if(x==='react')return {default:React,__esModule:true};if(x==='framer-motion')return {motion:new Proxy({}, {get:(_,tag)=>tag}),useReducedMotion:()=>true,__esModule:true};throw new Error('require '+x)};"+HARNESS+'\n'+safe+"\nconst C=exports.default;append(document.getElementById('root'),C({content:{},theme:{}}));})();"
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0}*{box-sizing:border-box}body{overflow-x:hidden}</style></head><body><div id="root"></div><script>'+script+'</script></body></html>'

VIEW=[1440,1280,1024,768,430,390,360]; issues=[]; screenshots=[]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
    page=b.new_page(viewport={'width':1440,'height':1000})
    for si,m in enumerate(samples):
        html=make_html(m); current=[]
        for w in VIEW:
            page.set_viewport_size({'width':w,'height':1000 if w>=768 else 900}); errs=[]
            def on_console(msg):
                if msg.type=='error':errs.append(msg.text)
            page.on('console',on_console)
            try:
                page.set_content(html,wait_until='load',timeout=8000)
                r=page.evaluate(r'''() => { const focus=[...document.querySelectorAll('a,button,summary,input,select,textarea')]; const badTouch=focus.filter(e=>{const x=e.getBoundingClientRect();return x.width>0&&x.height>0&&(x.width<32||x.height<32)}).length; return {sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,h1:document.querySelectorAll('h1').length,contact:!!document.querySelector('#contact'),links:[...document.querySelectorAll('a')].filter(a=>a.textContent.trim()).length,text:document.body.innerText.length,badTouch}; }''')
                if r['sw']>r['cw']+2: current.append(f'{w}px overflow {r["sw"]}>{r["cw"]}')
                if r['h1']!=1: current.append(f'{w}px h1-count={r["h1"]}')
                if not r['contact']: current.append(f'{w}px missing-contact')
                if r['links']<2: current.append(f'{w}px insufficient-links')
                if r['text']<350: current.append(f'{w}px insufficient-content')
                if w<=430 and r['badTouch']>4: current.append(f'{w}px touch-targets={r["badTouch"]}')
                if errs: current.extend(f'{w}px console:{e}' for e in errs[:2])
                if si<10 and w in (1440,390):
                    q=OUT/f'{m["template_id"]}-{w}.png';page.screenshot(path=str(q),full_page=True);screenshots.append(str(q.relative_to(ROOT)))
            except Exception as e: current.append(f'{w}px browser-error:{e}')
            finally:
                page.remove_listener('console',on_console)
        if current:issues.append({'template':m['template_id'],'issues':current})
    b.close()
shutil.rmtree(TD,ignore_errors=True)
result={'browser':'system Chromium','templates_inspected':len(samples),'viewports':VIEW,'render_checks':len(samples)*len(VIEW),'issues_found':sum(len(x['issues']) for x in issues),'templates_with_issues':len(issues),'issues':issues,'sample_templates':[m['template_id'] for m in samples],'screenshots':screenshots}
(OUT/'browser-qa-report.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k not in {'issues','sample_templates','screenshots'}},indent=2))
if issues: raise SystemExit(1)
