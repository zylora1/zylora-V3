from __future__ import annotations
import io,json,zipfile,tempfile,subprocess,os,sys
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from fastapi.testclient import TestClient
from app.main import app
from app.db import SessionLocal,migrate
from app.security import clear_rate_limits
from tests.billing_helpers import activate_zylora
from sqlalchemy import text

def png():
    b=io.BytesIO();Image.new('RGB',(128,80),(31,84,115)).save(b,'PNG');return b.getvalue()

def reset():
    clear_rate_limits();migrate()
    with SessionLocal.begin() as db:
        for t in ['assistant_action_keys','assistant_messages','assistant_usage','assistant_conversations','sales_assistant_configs','lead_form_configs','subscriptions','billing_profiles','site_revisions','editor_history','media_assets','source_export_entitlements','source_export_orders','credit_usage','credit_wallets','billing_events','audit_log','outbox','notification_settings','sites','sessions','auth_tokens','users']:
            try: db.execute(text(f'DELETE FROM {t}'))
            except Exception: pass

def main():
    reset();c=TestClient(app);r=c.post('/api/auth/signup',json={'name':'Export QA','email':'export-qa@example.com','password':'SecurePass123!'});j=r.json();c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']});h={'X-CSRF-Token':j['csrf_token']};activate_zylora(c,h,'US')
    s=c.post('/api/sites',headers=h,json={'business_name':'Export QA Studio','description':'A source-export verification site.','origin':'AI','industry':'Architecture','style':'Editorial'}).json();sid=s['id']
    a=c.post(f'/api/sites/{sid}/assets',headers=h,files={'file':('hero.png',png(),'image/png')},data={'alt_text':'Export QA hero'}).json()['asset'];d=c.get(f'/api/sites/{sid}/editor-document?page=home').json();hero=next(x for x in d['nodes'] if x.get('role')=='hero-image');sel=f'[data-zylora-id="{hero["id"]}"]'
    ops=[{'page':'home','type':'replace_image','selector':sel,'asset_id':a['id'],'mode':'image','alt':'Export QA hero'},{'page':'home','type':'set_image_crop','selector':sel,'mode':'image','crop':{'x':4,'y':3,'width':92,'height':90},'preset':'free'},{'page':'home','type':'set_image_focal_point','selector':sel,'x':44,'y':61},{'page':'home','type':'set_responsive_image_focal_point','selector':sel,'breakpoint':'mobile','mode':'image','x':70,'y':35},{'page':'home','type':'set_image_fit','selector':sel,'mode':'image','fit':'auto'}]
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':ops,'action':'EXPORT_QA'}).status_code==200
    assert c.patch(f'/api/sites/{sid}/brand',headers=h,json={'primary':'#123456','background':'#fafafa','heading':'#111111','body':'#222222','heading_font':'Georgia','body_font':'Arial','button_radius':'16px','logo_asset_id':a['id'],'favicon_asset_id':a['id']}).status_code==200
    assert c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'home','title':'Export QA Studio — Architecture','description':'Exported metadata verification.','og_title':'Export QA Studio','og_description':'Exported Open Graph metadata.','og_image_asset_id':a['id'],'canonical':'https://export.example/','noindex':False}).status_code==200
    o=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json();assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':o['order_id'],'payment_id':o['mock_payment_id'],'signature':o['mock_signature']}).status_code==200
    zr=c.get(f'/api/sites/{sid}/export');assert zr.status_code==200
    with tempfile.TemporaryDirectory() as td:
        z=zipfile.ZipFile(io.BytesIO(zr.content));z.extractall(td);files=[str(x) for x in Path(td).rglob('*') if x.suffix in {'.js','.jsx','.mjs'}]
        js="""const fs=require('fs'),ts=require('typescript');let e=[];for(const f of process.argv.slice(1)){const s=fs.readFileSync(f,'utf8');const r=ts.transpileModule(s,{compilerOptions:{jsx:ts.JsxEmit.Preserve,target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext},reportDiagnostics:true,fileName:f});for(const d of r.diagnostics||[])if(d.category===ts.DiagnosticCategory.Error)e.push(f+': '+ts.flattenDiagnosticMessageText(d.messageText,' '));}if(e.length){console.error(e.join('\\n'));process.exit(1)}"""
        subprocess.run(['node','-e',js,*files],check=True,cwd=ROOT)
        client=Path(td,'app/zylora-edits.jsx').read_text(encoding='utf-8');page=Path(td,'app/page.jsx').read_text(encoding='utf-8');layout=Path(td,'app/layout.jsx').read_text(encoding='utf-8')
        assert 'set_responsive_image_focal_point' in client and "scale-down" in client and '#123456' in client
        assert 'Export QA Studio — Architecture' in page and 'openGraph' in page and 'NEXT_PUBLIC_SITE_URL' in page
        assert 'alternates:{canonical:"/"}' in page and 'https://export.example/' not in page
        assert Path(td,'app/not-found.jsx').exists() and 'index:false' in Path(td,'app/not-found.jsx').read_text(encoding='utf-8')
        assert 'ZyloraEdits' in layout and any(x.name.startswith(a['id']) for x in Path(td,'public/zylora-assets').iterdir())
    out={'checks':7,'errors':0,'asset':a['id'],'files_checked':len(files)};Path(ROOT/'data/export-source-qa.json').write_text(json.dumps(out,indent=2));print(f"export_source_qa: 7 checks / 0 errors; transpiled {len(files)} JS/JSX/MJS files")
if __name__=='__main__':main()
