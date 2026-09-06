from __future__ import annotations
import os, re, sys, tempfile, shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
TMP=Path(tempfile.mkdtemp(prefix='zylora-studio-mobile-'))
os.environ['APP_ENV']='test'; os.environ['DATABASE_URL']=f"sqlite:///{(TMP/'e2e.sqlite').as_posix()}"; os.environ['MEDIA_STORAGE_DIR']=str(TMP/'media')
sys.path.insert(0,str(ROOT))
from tests.test_ai_first_rebuild import reset_db, auth
from scripts.editor_media_e2e import bridge, bootstrap

def inline_shell(html:str)->str:
    bundle=(ROOT/'static'/'studio.js').read_text(encoding='utf-8')
    css=(ROOT/'static'/'studio-ux.css').read_text(encoding='utf-8')
    html=html.replace('<link rel="stylesheet" href="/static/studio-ux.css">',f'<style>{css}</style>')
    return re.sub(r'<script src="/static/studio\.js"></script>',lambda _:f'<script>{bootstrap()}</script><script>{bundle}</script>',html)

def main():
    reset_db(); client, headers=auth(); made=client.post('/api/sites',headers=headers,json={'business_name':'Mobile Studio QA','description':'A mobile editor smoke test','origin':'AI','industry':'Design','style':'Editorial'}); assert made.status_code==200, made.text
    site=made.json()['id']; shell=client.get(f'/studio/{site}'); assert shell.status_code==200
    errors=[]
    try:
      with sync_playwright() as pw:
        browser=getattr(pw,os.getenv('ZYLORA_BROWSER','chromium')).launch(headless=True,args=['--no-sandbox'] if os.getenv('ZYLORA_BROWSER','chromium')=='chromium' else [])
        page=browser.new_page(viewport={'width':390,'height':844}); page.on('console',lambda m: errors.append(m.text) if m.type=='error' else None); page.on('pageerror',lambda e: errors.append(str(e))); page.expose_function('__backendFetch',bridge(client)); page.set_content(inline_shell(shell.text),wait_until='load'); page.wait_for_selector('.studio-canvas [data-studio-id]',timeout=15000)
        assert page.locator('.studio-mobile-nav').is_visible(); assert page.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth')
        if not page.locator('.add-panel').is_visible(): page.locator('.studio-mobile-nav button[title="Add"]').click()
        assert page.locator('.add-panel').is_visible(); page.get_by_title('Add Text').click(); node=page.locator('[data-studio-type="text"]').last; node.dispatch_event('click'); assert page.locator('.selection-toolbar').is_visible()
        page.locator('.studio-mobile-nav button[title="Layers"]').click(); assert page.locator('.studio-layers').is_visible(); page.locator('.studio-mobile-nav button[title="Layers"]').click(); assert not page.locator('.studio-layers').is_visible()
        page.locator('.zoom-select').select_option('50'); assert page.locator('.zoom-select').input_value()=='50'; assert not errors
        page.screenshot(path=str(ROOT/'data'/f'studio-mobile-{os.getenv("ZYLORA_BROWSER","chromium")}.png'))
        print(f"studio_mobile_ux_e2e ({os.getenv('ZYLORA_BROWSER','chromium')}): PASS / 0 errors")
        browser.close()
    finally: shutil.rmtree(TMP,ignore_errors=True)
if __name__=='__main__': main()
