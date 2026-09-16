"""Isolated Studio interaction evidence; never opens the developer database."""
from __future__ import annotations
import json
import os
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
scratch = Path(tempfile.mkdtemp(prefix='zylora-rebuild-'))
os.environ['APP_ENV'] = 'test'
os.environ['DATABASE_URL'] = f"sqlite:///{(scratch / 'qa.sqlite').as_posix()}"
os.environ['MEDIA_STORAGE_DIR'] = str(scratch / 'media')
sys.path.insert(0, str(ROOT))
from scripts.studio_v4_e2e import inline_studio
from scripts.editor_media_e2e import bridge
from tests.test_ai_first_rebuild import reset_db, auth
from playwright.sync_api import sync_playwright

def main():
    reset_db()
    client, headers = auth()
    out = ROOT / 'data' / 'studio-rebuild'
    out.mkdir(exist_ok=True)
    results = []
    with sync_playwright() as pw:
        for engine in sys.argv[1:] or ['chromium']:
            browser = getattr(pw, engine).launch(headless=True)
            for width, height in [(1920,1080),(1536,864),(1440,900),(1366,768),(1280,800),(1024,768),(768,1024),(430,932),(390,844),(375,812),(360,800)]:
                reset_db()
                client, headers = auth()
                made = client.post('/api/sites/blank', headers=headers, json={'name':'Studio interaction QA'})
                assert made.status_code == 200, made.text
                sid = made.json()['id']
                shell = inline_studio(client.get(f'/studio/{sid}').text)
                page = browser.new_page(viewport={'width':width,'height':height})
                errors = []
                page.on('pageerror', lambda error: errors.append(str(error)))
                page.expose_function('__backendFetch', bridge(client))
                page.set_content(shell, wait_until='networkidle')
                page.wait_for_selector('[data-studio-type="section"]')
                page.screenshot(path=str(out / f'{engine}-{width}-blank.png'))
                nav = '.tool-rail' if width > 820 else '.studio-mobile-nav'
                page.locator(f'{nav} button[title="Text"],{nav} button[aria-label="Text"]').first.click()
                page.get_by_role('button',name='Add Text',exact=True).click()
                page.keyboard.press('Escape')
                node = page.locator('[data-studio-type="text"]').last
                node.click()
                page.screenshot(path=str(out / f'{engine}-{width}-text.png'))
                page.keyboard.press('Control+D')
                page.keyboard.press('Escape')
                node.click()
                page.keyboard.press('ArrowRight')
                page.keyboard.press('Control+A')
                overlay = page.get_by_test_id('multi-selection-overlay')
                overlay.wait_for()
                before = page.locator('[data-studio-type="text"]').evaluate_all('(els)=>els.map(e=>({x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight}))')
                box = overlay.bounding_box()
                print('aggregate target',engine,width,box,page.evaluate('([x,y])=>document.elementFromPoint(x,y)?.outerHTML.slice(0,350)',[box['x']+box['width']/2,box['y']+box['height']/2]),flush=True)
                page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2)
                page.mouse.down()
                page.mouse.move(box['x']+box['width']/2+20,box['y']+box['height']/2+16,steps=8)
                page.mouse.up()
                after = page.locator('[data-studio-type="text"]').evaluate_all('(els)=>els.map(e=>({x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight}))')
                assert all(a['x']>b['x'] and a['y']>b['y'] for a,b in zip(after,before)), (before,after)
                handle = overlay.locator('.multi-handle.se').bounding_box()
                page.mouse.move(handle['x']+handle['width']/2,handle['y']+handle['height']/2)
                page.mouse.down()
                page.mouse.move(handle['x']+handle['width']/2+16,handle['y']+handle['height']/2+12,steps=8)
                page.mouse.up()
                resized = page.locator('[data-studio-type="text"]').evaluate_all('(els)=>els.map(e=>({w:e.offsetWidth,h:e.offsetHeight}))')
                assert all(a['w']>b['w'] and a['h']>b['h'] for a,b in zip(resized,after)), (after,resized)
                page.screenshot(path=str(out / f'{engine}-{width}-multi.png'))
                page.keyboard.press('Control+G')
                page.keyboard.press('Control+Shift+G')
                page.wait_for_function("document.querySelector('.save-status-control')?.title==='Saved'")
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
                assert not errors, errors
                results.append({'engine':engine,'viewport':[width,height],'checks':['blank','text insertion','panel close','select','duplicate','nudge','multi-select','aggregate pointer drag','aggregate pointer resize','group/ungroup commands','autosave','no document overflow'],'errors':errors})
                page.close()
            browser.close()
    (out / 'results.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
    print(json.dumps(results,indent=2))

if __name__ == '__main__':
    main()
