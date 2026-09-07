from __future__ import annotations

import json
import os
import re
import sys
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]; TMP=Path(tempfile.mkdtemp(prefix='zylora-studio-cursor-'))
os.environ['APP_ENV']='test'; os.environ['DATABASE_URL']=f"sqlite:///{(TMP/'cursor.sqlite').as_posix()}"; os.environ['MEDIA_STORAGE_DIR']=str(TMP/'media'); sys.path.insert(0,str(ROOT))
from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db

def inline_shell(html):
    bundle=(ROOT/'static/studio.js').read_text(encoding='utf-8'); css=(ROOT/'static/studio-ux.css').read_text(encoding='utf-8')
    html=html.replace('<link rel="stylesheet" href="/static/studio-ux.css">',f'<style>{css}</style>')
    return re.sub(r'<script src="/static/studio\.js"></script>',lambda _:f'<script>{bootstrap()}</script><script>{bundle}</script>',html)

def run(name):
    reset_db(); client,headers=auth(); created=client.post('/api/sites',headers=headers,json={'business_name':'Cursor QA','description':'Cursor feedback page','origin':'AI','industry':'Design'}); created.raise_for_status(); shell=client.get(f"/studio/{created.json()['id']}"); shell.raise_for_status(); errors=[]
    with sync_playwright() as pw:
        browser=getattr(pw,name).launch(headless=True,args=['--no-sandbox'] if name=='chromium' else None); page=browser.new_page(viewport={'width':1440,'height':900}); page.expose_function('__backendFetch',bridge(client)); page.on('console',lambda msg:errors.append(msg.text) if msg.type=='error' else None); page.on('pageerror',lambda exc:errors.append(str(exc))); page.set_content(inline_shell(shell.text),wait_until='load'); page.wait_for_selector('.studio-canvas [data-studio-id]'); page.get_by_role('button',name='Elements').click(); page.get_by_role('button',name='Add Rectangle',exact=True).click(); page.wait_for_timeout(120); node=page.locator('.studio-canvas [data-studio-type="container"]').last; node.evaluate('e=>e.click()'); page.wait_for_timeout(50)
        handles={h:node.locator(f'.studio-resize-handle[data-handle="{h}"]').evaluate('e=>getComputedStyle(e).cursor') for h in ('left','right','top','bottom','top-left','top-right','bottom-left','bottom-right')}
        rotate=page.get_by_label('Rotate selection').evaluate('e=>getComputedStyle(e).cursor'); selected=node.evaluate('e=>getComputedStyle(e).cursor'); workspace=page.locator('.canvas-workspace').evaluate('e=>getComputedStyle(e).cursor')
        page.keyboard.down('Space'); page.wait_for_timeout(20); space=page.locator('.canvas-workspace').evaluate('e=>getComputedStyle(e).cursor'); page.keyboard.up('Space')
        workspace_box=page.locator('.canvas-workspace').bounding_box(); assert workspace_box
        page.mouse.move(workspace_box['x']+workspace_box['width']-12,workspace_box['y']+workspace_box['height']-12); page.mouse.down(); page.wait_for_timeout(20); active=page.locator('.canvas-workspace').evaluate('e=>getComputedStyle(e).cursor'); page.mouse.up()
        page.get_by_role('button',name='Text',exact=True).click(); page.wait_for_timeout(80); page.locator('.add-text-action').click(); page.wait_for_timeout(80); textnode=page.locator('.studio-canvas .studio-text-editor').last; textnode.dblclick(); page.wait_for_timeout(30); text_cursor=textnode.evaluate('e=>getComputedStyle(e).cursor')
        result={'browser':name,'selected':selected,'handles':handles,'rotation':rotate,'workspace':workspace,'space_pan':space,'active_pan':active,'text_edit':text_cursor,'errors':errors,'pass':not errors and selected in {'grab','move'} and workspace=='default' and space=='grab' and active=='grabbing' and rotate in {'grab','grabbing'} and text_cursor=='text' and all(handles[h]==({'left':'ew-resize','right':'ew-resize','top':'ns-resize','bottom':'ns-resize','top-left':'nwse-resize','bottom-right':'nwse-resize','top-right':'nesw-resize','bottom-left':'nesw-resize'}[h]) for h in handles)}
        browser.close(); return result

if __name__=='__main__':
    results=[run(name) for name in (sys.argv[1:] or ['chromium','firefox','webkit'])]; out=ROOT/'artifacts/final-production-certification/browser-results/studio-cursor-state.json'; out.parent.mkdir(parents=True,exist_ok=True); out.write_text(json.dumps(results,indent=2),encoding='utf-8'); print(json.dumps(results,indent=2)); raise SystemExit(0 if all(r['pass'] for r in results) else 1)
