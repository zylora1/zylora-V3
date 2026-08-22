from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
from tempfile import TemporaryDirectory
import json, subprocess, sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
from apps.api.app.models import Site
from apps.api.app.services.exporting import build_source_zip
man=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text(encoding='utf-8'))
# 20 examples spread across catalogue/style/industry dimensions.
idxs=[int(i*1007/19) for i in range(20)]
samples=[man[i] for i in idxs]
errors=[]; total_bytes=0
with TemporaryDirectory() as td:
    td=Path(td); transpile=[]
    for n,m in enumerate(samples):
        s=Site(name=f'{m["template_name"]} “QA”',slug=f'qa-{n}',origin='TEMPLATE',page_count=m['page_count'],template_key=m['template_id'],state='DRAFT',owner_id=1)
        content={'businessName':f'{m["template_name"]} & Partners','headline':'A real customer headline — tested','description':'Export QA with quotes " and Unicode ✓','email':'hello@example.com','services':['Primary service','Second service']}
        seo={'title':f'{m["template_name"]} | QA','description':'Search description','canonical':f'https://example.com/{n}'}
        theme={'accent':m['palette'][2]}
        source=(ROOT/'apps/web/templates'/m['file']).read_text(encoding='utf-8')
        payload=build_source_zip(s,source,content=content,seo=seo,theme=theme); total_bytes+=len(payload)
        with ZipFile(BytesIO(payload)) as z:
            names=set(z.namelist()); required={'package.json','tsconfig.json','next.config.ts','app/page.tsx','app/template.tsx','app/types.ts','app/site-data.ts','app/layout.tsx','README.md','site.json'}
            if not required<=names: errors.append([m['template_id'],'missing',sorted(required-names)])
            if any(x.startswith('/') or '..' in Path(x).parts for x in names): errors.append([m['template_id'],'unsafe-path'])
            site=json.loads(z.read('site.json'))
            if site['template_key']!=m['template_id'] or site['content']['headline']!=content['headline']:errors.append([m['template_id'],'content-mismatch'])
            package=json.loads(z.read('package.json'))
            if 'framer-motion' in source and 'framer-motion' not in package.get('dependencies',{}):
                errors.append([m['template_id'],'missing-framer-motion-dependency'])
            if 'framer-motion' not in source and 'framer-motion' in package.get('dependencies',{}):
                errors.append([m['template_id'],'unnecessary-framer-motion-dependency'])
            for rel in ['app/page.tsx','app/template.tsx']:
                text=z.read(rel).decode();
                if '/mnt/data' in text or '../templates/' in text:errors.append([m['template_id'],'internal-dependency',rel])
                q=td/f'{n}-{Path(rel).name}';q.write_text(text,encoding='utf-8');transpile.append(str(q))
    node=td/'check.cjs';node.write_text(r'''const fs=require('fs');const ts=require(process.argv[2]);let bad=[];for(const f of process.argv.slice(3)){const s=fs.readFileSync(f,'utf8');const r=ts.transpileModule(s,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022},reportDiagnostics:true});if((r.diagnostics||[]).length)bad.push(f)}console.log(JSON.stringify({files:process.argv.length-3,bad}));if(bad.length)process.exit(1)''',encoding='utf-8')
    typescript=str(ROOT/'apps/web/node_modules/typescript/lib/typescript.js')
    r=subprocess.run(['node',str(node),typescript,*transpile],capture_output=True,text=True,timeout=60)
    if r.returncode:errors.append(['typescript-transpile',r.stdout,r.stderr])
result={'exports_tested':len(samples),'template_keys':[m['template_id'] for m in samples],'typescript_files_transpiled':len(transpile),'total_zip_bytes':total_bytes,'errors':errors}
(ROOT/'EXPORT_QA.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps({k:v for k,v in result.items() if k!='template_keys'},indent=2))
if errors:sys.exit(1)
