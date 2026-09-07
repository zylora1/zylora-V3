from __future__ import annotations
import json, os, re, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]; TMP=Path(tempfile.mkdtemp(prefix='zylora-studio-controls-')); os.environ['APP_ENV']='test'; os.environ['DATABASE_URL']=f"sqlite:///{(TMP/'controls.sqlite').as_posix()}"; os.environ['MEDIA_STORAGE_DIR']=str(TMP/'media'); sys.path.insert(0,str(ROOT))
from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db
def inline(html):
 b=(ROOT/'static/studio.js').read_text(encoding='utf-8'); c=(ROOT/'static/studio-ux.css').read_text(encoding='utf-8'); html=html.replace('<link rel="stylesheet" href="/static/studio-ux.css">',f'<style>{c}</style>'); return re.sub(r'<script src="/static/studio\.js"></script>',lambda _:f'<script>{bootstrap()}</script><script>{b}</script>',html)
def run():
 reset_db(); client,headers=auth(); site=client.post('/api/sites',headers=headers,json={'business_name':'Control QA','description':'Interaction control states','origin':'AI','industry':'Design'}); site.raise_for_status(); shell=client.get(f"/studio/{site.json()['id']}"); errors=[]
 with sync_playwright() as pw:
  browser=pw.chromium.launch(headless=True,args=['--no-sandbox']); page=browser.new_page(viewport={'width':1440,'height':900}); page.expose_function('__backendFetch',bridge(client)); page.on('console',lambda m: errors.append(m.text) if m.type=='error' else None); page.on('pageerror',lambda e: errors.append(str(e))); page.set_content(inline(shell.text),wait_until='load'); page.wait_for_selector('.studio-canvas [data-studio-id]')
  disabled_initial=True
  add=page.get_by_role('button',name='Elements').locator('..').locator('button').first if False else None
  page.locator('.tool-rail button[title="Elements"]').click(); add=page.get_by_role('button',name='Add Rectangle',exact=True); base=add.evaluate('e=>{const s=getComputedStyle(e);return [s.backgroundColor,s.borderColor,s.transform]}'); add.hover(); hover=add.evaluate('e=>{const s=getComputedStyle(e);return [s.backgroundColor,s.borderColor,s.transform]}'); add.click(); page.wait_for_timeout(80); page.locator('.tool-rail button[title="AI"]').click(); page.wait_for_timeout(50); disabled_initial=page.get_by_role('button',name='Apply edit').is_disabled(); page.locator('.tool-rail button[title="Elements"]').click(); add=page.get_by_role('button',name='Add Rectangle',exact=True); add.hover(); page.mouse.down(); pressed=add.evaluate('e=>{const s=getComputedStyle(e);return [s.transform,s.backgroundColor]}'); page.mouse.up(); add.focus(); focus=add.evaluate('e=>{const s=getComputedStyle(e);return [s.outlineStyle,s.outlineWidth]}')
  add.focus(); page.keyboard.press('Tab'); page.keyboard.press('Shift+Tab'); focus=add.evaluate('e=>{const s=getComputedStyle(e);return [s.outlineStyle,s.outlineWidth]}'); result={'disabled_initial':disabled_initial,'hover_changed':hover!=base,'pressed_state':pressed[0] != 'none' or pressed[1] != hover[0],'focus_visible':focus[0] != 'none' and focus[1] != '0px','errors':errors}; result['pass']=not errors and all(result[k] for k in ('disabled_initial','hover_changed','pressed_state','focus_visible')); browser.close()
 out=ROOT/'artifacts/final-production-certification/browser-results/studio-control-states.json'; out.parent.mkdir(parents=True,exist_ok=True); out.write_text(json.dumps(result,indent=2),encoding='utf-8'); print(json.dumps(result,indent=2)); return result
if __name__=='__main__': raise SystemExit(0 if run()['pass'] else 1)
