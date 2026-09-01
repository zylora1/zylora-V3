from __future__ import annotations
import base64, json, re, tempfile, io, zipfile, os
from pathlib import Path
from typing import Any
from PIL import Image
from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT=Path(__file__).resolve().parents[1]
import sys; sys.path.insert(0,str(ROOT))
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from tests.billing_helpers import activate_zylora
from scripts.browser_e2e import inline_document, patch_editor, check, no_overflow

OUT=ROOT/'data'/'editor-media-e2e.json'
checks=[]

def ck(cond,label):
    assert cond,label; checks.append(label); print('PASS',label,flush=True)

def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in ['assistant_action_keys','assistant_messages','assistant_usage','assistant_conversations','sales_assistant_configs','lead_form_configs','subscriptions','billing_profiles','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']:
            db.execute(text(f'DELETE FROM {table}'))

def signup(client):
    r=client.post('/api/auth/signup',json={'name':'Editor Browser','email':'editor-browser@example.com','password':'SecurePass123!'}); assert r.status_code==200,r.text
    j=r.json(); client.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}); csrf=j['csrf_token']
    activate_zylora(client,{'X-CSRF-Token':csrf},'US')
    return {'X-CSRF-Token':csrf}

def bridge(client:TestClient):
    def invoke(payload:dict[str,Any]):
        url=str(payload.get('url') or '/'); path='/' + url.split('/',3)[3] if url.startswith(('http://','https://')) and url.count('/')>=3 else url
        method=str(payload.get('method') or 'GET').upper(); headers={str(k):str(v) for k,v in (payload.get('headers') or {}).items()}
        kind=payload.get('body_kind')
        if kind=='formdata':
            data={}; files={}
            for item in payload.get('form_items') or []:
                if item.get('file'):
                    files[item['name']] = (item.get('filename') or 'upload.bin', base64.b64decode(item.get('base64') or ''), item.get('type') or 'application/octet-stream')
                else: data[item['name']]=item.get('value','')
            r=client.request(method,path,headers=headers,data=data,files=files)
        else:
            body=payload.get('body'); r=client.request(method,path,headers=headers,content=body.encode() if isinstance(body,str) else body)
        try: text_body=r.content.decode(r.encoding or 'utf-8')
        except Exception: text_body=r.content.decode('utf-8',errors='replace')
        return {'status':r.status_code,'headers':{'Content-Type':r.headers.get('content-type','text/plain')},'body':text_body}
    return invoke

def bootstrap():
    return r'''
    (()=>{const store={};Object.defineProperty(window,'sessionStorage',{value:{getItem:k=>Object.prototype.hasOwnProperty.call(store,k)?store[k]:null,setItem:(k,v)=>store[k]=String(v),removeItem:k=>delete store[k],clear:()=>Object.keys(store).forEach(k=>delete store[k])}});window.__NAV='';window.__OPENED=[];window.confirm=()=>true;window.open=(...a)=>{window.__OPENED.push(a);return null};window.fetch=async(url,opts={})=>{const headers={};if(opts.headers instanceof Headers)opts.headers.forEach((v,k)=>headers[k]=v);else if(opts.headers)Object.assign(headers,opts.headers);let payload={url:String(url),method:String(opts.method||'GET'),headers,body:null};if(opts.body instanceof FormData){payload.body_kind='formdata';payload.form_items=[];for(const [name,v] of opts.body.entries()){if(v instanceof File){const bytes=new Uint8Array(await v.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));payload.form_items.push({name,file:true,filename:v.name,type:v.type,base64:btoa(binary)})}else payload.form_items.push({name,file:false,value:String(v)})}}else payload.body=opts.body==null?null:String(opts.body);const result=await window.__backendFetch(payload);return new Response(result.body,{status:result.status,headers:result.headers})}})();
    '''

def create_site(client,h,name='Studio Browser'):
    r=client.post('/api/sites',headers=h,json={'business_name':name,'description':'An independent architecture studio creating calm material spaces.','origin':'AI','industry':'Architecture','style':'Editorial'}); assert r.status_code==200,r.text; return r.json()['id']

def main():
    reset_db()
    client=TestClient(app); client.__enter__(); h=signup(client); sid=create_site(client,h)
    with tempfile.NamedTemporaryFile(suffix='.png',delete=False) as tmp:
        im=Image.new('RGB',(180,120),(26,84,132)); im.save(tmp,format='PNG'); image_path=tmp.name
    editor_html=inline_document('editor.html','editor.css','editor.js',bootstrap(),lambda js:patch_editor(js,sid))
    with sync_playwright() as p:
        executable = '/usr/bin/chromium' if os.path.exists('/usr/bin/chromium') else None
        browser=p.chromium.launch(headless=True, executable_path=executable, args=['--no-sandbox']); page=browser.new_page(viewport={'width':1440,'height':1000}); page.expose_function('__backendFetch',bridge(client)); page.set_content(editor_html,wait_until='load'); page.wait_for_function("document.querySelector('#siteName').textContent==='Studio Browser'")
        ck(no_overflow(page),'editor desktop has no horizontal overflow')
        frame=page.frame_locator('#previewFrame'); frame.locator('[data-zylora-role="hero-image"]').wait_for(); frame.locator('#zylora-editor-canvas-style').wait_for(state='attached'); frame.locator('[data-zylora-role="hero-image"]').dispatch_event('click'); page.locator('#replaceImage').wait_for(); ck(page.locator('#editabilityBadge').inner_text()=='EDITABLE','canvas image selection opens contextual inspector')
        page.locator('#replaceImage').click(); page.locator('[data-media-tab="uploadMedia"]').click(); page.locator('#mediaFile').set_input_files(image_path); page.fill('#uploadAlt','Studio storefront in blue evening light'); page.locator('#uploadBtn').click(); page.wait_for_function("document.querySelector('#mediaModal').classList.contains('hidden')")
        page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        assets=client.get(f'/api/sites/{sid}/assets').json()['items']; ck(len(assets)==1 and assets[0]['width']==180,'browser upload creates optimized managed media asset'); aid=assets[0]['id']; ck(aid in client.get(f'/api/sites/{sid}/preview').text,'browser image replacement persists in draft preview')
        # Re-select after preview refresh, then crop/focal/fit/alt.
        frame.locator('[data-zylora-role="hero-image"]').dispatch_event('click'); page.fill('#cropX','5');page.fill('#cropY','6');page.fill('#cropW','90');page.fill('#cropH','80');page.locator('#applyCrop').click();page.wait_for_timeout(900);page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        frame.locator('[data-zylora-role="hero-image"]').dispatch_event('click'); page.locator('#focalX').fill('42');page.locator('#focalY').fill('67');page.locator('#applyFocal').click();page.wait_for_timeout(900);page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        frame.locator('[data-zylora-role="hero-image"]').dispatch_event('click');page.select_option('#iFit','contain');page.fill('#iAlt','Accessible storefront photo');page.locator('#applyImageMeta').click();page.wait_for_timeout(900);page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        html=client.get(f'/api/sites/{sid}/preview').text; ck('object-position:42.0% 67.0%' in html and 'object-fit:contain' in html and 'Accessible storefront photo' in html,'crop focal fit and alt text survive autosave')
        # Reload a fresh editor document to prove image state is persisted server-side, not only in browser memory.
        reload_page=browser.new_page(viewport={'width':1280,'height':900}); reload_page.expose_function('__backendFetch',bridge(client)); reload_page.set_content(editor_html,wait_until='load'); reload_page.wait_for_function("document.querySelector('#siteName').textContent==='Studio Browser'")
        reload_frame=reload_page.frame_locator('#previewFrame'); reload_frame.locator('[data-zylora-role="hero-image"]').wait_for(); reload_html=reload_frame.locator('body').inner_html(); ck(aid in reload_html and 'Accessible storefront photo' in reload_html and '42.0% 67.0%' in reload_html,'image replacement survives full editor reload')
        reload_page.close()
        # Heading content + undo/redo + typography + responsive override.
        frame.locator('h1').dispatch_event('click'); page.fill('#iText','Architecture with a clear point of view.'); page.locator('#applyText').click(); page.wait_for_timeout(900); page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        page.locator('#undoBtn').click(); page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000); page.wait_for_timeout(150); ck('Architecture with a clear point of view.' not in client.get(f'/api/sites/{sid}/preview').text,'undo restores previous structured content state')
        page.locator('#redoBtn').click(); page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000); page.wait_for_timeout(150); ck('Architecture with a clear point of view.' in client.get(f'/api/sites/{sid}/preview').text,'redo restores updated structured content state')
        frame.locator('h1').dispatch_event('click'); page.locator('[data-inspector="styleInspector"]').click(); page.select_option('#iFont',label='Georgia');page.fill('#iFontSize','68');page.select_option('#iWeight','700');page.locator('#applyTypography').click();page.wait_for_timeout(900);page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        frame.locator('h1').dispatch_event('click');page.locator('[data-inspector="responsiveInspector"]').click();page.select_option('#iBreakpoint','mobile');page.fill('#rFontSize','36');page.locator('#applyResponsive').click();page.wait_for_timeout(900);page.wait_for_function("document.querySelector('#saveState').textContent==='Saved'", timeout=8000)
        html=client.get(f'/api/sites/{sid}/preview').text; ck('Architecture with a clear point of view.' in html and 'font-size:68px' in html and '@media(max-width:640px)' in html,'text typography and responsive overrides persist')
        # Revision UI and device previews after real browser image/text edits.
        page.locator('[data-open="revisionPanel"]').click(); page.locator('[data-preview-rev]').first.wait_for(); ck(page.locator('[data-preview-rev]').count()>0,'revision history is visible in editor'); page.locator('#revisionPanel [data-close]').click()
        for width in ['768px','390px','100%']:
            page.locator(f'[data-width="{width}"]').click(); ck(page.locator('#previewFrame').evaluate('e=>e.style.width')==width,f'editor device preview switches to {width}')
        # Publish + template isolation.
        page.locator('[data-testid="editor-publish"]').click(); page.wait_for_timeout(150); slug=client.get(f'/api/sites/{sid}').json()['slug']; public=client.get(f'/s/{slug}').text; ck(aid in public and 'Architecture with a clear point of view.' in public,'published public site matches edited image and content')
        sid2=create_site(client,h,'Fresh Template Copy'); ck(aid not in client.get(f'/api/sites/{sid2}/preview').text,'second site from same template retains original image')
        # Export source with managed asset.
        order=client.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json(); client.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']}); z=zipfile.ZipFile(io.BytesIO(client.get(f'/api/sites/{sid}/export').content)); ck(any(n.startswith('public/zylora-assets/') for n in z.namelist()) and aid in z.read('app/zylora-edits.jsx').decode(),'Next.js export bundles managed image and structured edits')
        page.set_viewport_size({'width':390,'height':850}); ck(no_overflow(page),'editor mobile shell has no document horizontal overflow')
        browser.close()
    client.__exit__(None,None,None)
    OUT.write_text(json.dumps({'checks':len(checks),'errors':0,'items':checks},indent=2));print(f'editor_media_e2e: {len(checks)} checks / 0 errors')

if __name__=='__main__':main()
