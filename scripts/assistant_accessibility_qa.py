from __future__ import annotations
import json,os,re,sys,uuid
from pathlib import Path
from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from app.main import app
from app.db import SessionLocal,migrate
from app.security import clear_rate_limits
from sqlalchemy import text
from scripts.browser_e2e import browser_bootstrap,backend_bridge
OUT=ROOT/'data'/'assistant-accessibility-qa.json'; widths=[1440,1280,1024,768,430,390,375,360]; checks=[]
def ck(x,label): assert x,label;checks.append(label);print('PASS',label,flush=True)
def reset():
 clear_rate_limits();migrate()
 with SessionLocal.begin() as db:
  for t in ['assistant_action_keys','assistant_messages','assistant_usage','assistant_conversations','sales_assistant_configs','subscriptions','billing_profiles','analytics_events','appointment_settings','appointments','leads','site_knowledge_docs','credit_usage','credit_wallets','sites','sessions','auth_tokens','users']:
   try: db.execute(text(f'DELETE FROM {t}'))
   except Exception: pass
def main():
 reset()
 with TestClient(app) as c:
  r=c.post('/api/auth/signup',json={'name':'A11y QA','email':'a11y-'+uuid.uuid4().hex[:8]+'@example.com','password':'SecurePass123!'});j=r.json();c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']});h={'X-CSRF-Token':j['csrf_token']};c.post('/api/billing/select',headers=h,json={'plan':'FREE'})
  s=c.post('/api/sites',headers=h,json={'business_name':'Accessible Studio','description':'A local consulting business that receives customer enquiries and appointment requests.','origin':'AI','industry':'Consulting','style':'Editorial'}); assert s.status_code==200,s.text;sid=s.json()['id']; assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200;slug=c.get(f'/api/sites/{sid}').json()['slug'];html=c.get('/s/'+slug).text
  runtime=(ROOT/'static/public-runtime.js').read_text();html=html.replace('<script src="/static/public-runtime.js"></script>',f'<script>{browser_bootstrap()}</script><script>{runtime}</script>');html=re.sub(r'<link[^>]+href="https://fonts\.[^"]+"[^>]*>','',html)
  with sync_playwright() as p:
   exe='/usr/bin/chromium' if os.path.exists('/usr/bin/chromium') else None;b=p.chromium.launch(headless=True,executable_path=exe,args=['--no-sandbox']);page=b.new_page(viewport={'width':1440,'height':1000});page.expose_function('__backendFetch',backend_bridge(c));page.set_content(html,wait_until='load');page.locator('.zylora-sales-launcher').wait_for();page.locator('.zylora-sales-launcher').click();page.locator('.zylora-sales-panel[data-open="true"]').wait_for()
   ck(page.locator('.zylora-sales-panel').get_attribute('role')=='dialog' and page.locator('.zylora-sales-panel').get_attribute('aria-modal')=='true','assistant uses modal dialog semantics')
   ck(page.locator('.zylora-sales-history').get_attribute('role')=='log','chat history exposes live log semantics')
   for w in widths:
    page.set_viewport_size({'width':w,'height':850 if w<600 else 900});page.wait_for_timeout(80)
    geom=page.evaluate('''()=>{const p=document.querySelector('.zylora-sales-panel'),r=document.querySelector('.zylora-conversion-rail'),i=document.querySelector('.zylora-sales-input'),pr=p.getBoundingClientRect(),ir=i.getBoundingClientRect(),rr=r.getBoundingClientRect();return {overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,panel:pr.left>=-1&&pr.right<=innerWidth+1&&pr.top>=-1&&pr.bottom<=innerHeight+1,inputVisible:ir.top>=pr.top&&ir.bottom<=pr.bottom+1,railOverlap:innerWidth<=640?ir.bottom>rr.top:false}}''')
    ck(not geom['overflow'] and geom['panel'] and geom['inputVisible'] and not geom['railOverlap'],f'assistant responsive layout is safe at {w}px')
   page.locator('.zylora-sales-input').focus();page.keyboard.press('Shift+Tab');first=page.evaluate("document.activeElement.closest('.zylora-sales-panel')!==null");ck(first,'focus remains trapped inside open assistant')
   page.keyboard.press('Escape');ck(page.locator('.zylora-sales-panel').get_attribute('data-open')=='false','Escape closes assistant')
   ck(page.evaluate("document.activeElement===document.querySelector('.zylora-sales-launcher')"),'assistant returns focus to launcher')
   b.close()
 OUT.write_text(json.dumps({'checks':len(checks),'widths':widths,'errors':0,'items':checks},indent=2));print(f'assistant_accessibility_qa: {len(checks)} checks / 0 errors')
if __name__=='__main__':main()
