from __future__ import annotations

import json, os, re, sys, tempfile, time
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix='zylora-studio-repetition-'))
os.environ['APP_ENV'] = 'test'
os.environ['DATABASE_URL'] = f"sqlite:///{(TMP/'repetition.sqlite').as_posix()}"
os.environ['MEDIA_STORAGE_DIR'] = str(TMP/'media')
sys.path.insert(0, str(ROOT))
from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db


def inline_shell(html: str) -> str:
    bundle = (ROOT/'static/studio.js').read_text(encoding='utf-8')
    css = (ROOT/'static/studio-ux.css').read_text(encoding='utf-8')
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f'<style>{css}</style>')
    return re.sub(r'<script src="/static/studio\.js"></script>', lambda _: f'<script>{bootstrap()}</script><script>{bundle}</script>', html)


def centre(locator):
    box = locator.bounding_box(); assert box
    return box['x'] + box['width']/2, box['y'] + box['height']/2


def wait_saved(page):
    page.wait_for_function("document.querySelector('.cloud-save')?.getAttribute('title')==='Saved'", timeout=15000)


def reload_shell(page, client, site_id):
    fresh = client.get(f'/studio/{site_id}'); fresh.raise_for_status()
    page.set_content(inline_shell(fresh.text), wait_until='load')
    page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)


def drag_node(page, locator, dx, dy):
    x, y = centre(locator)
    page.mouse.move(x, y); page.mouse.down(); page.mouse.move(x + dx, y + dy, steps=4); page.mouse.up(); page.wait_for_timeout(50)


def run() -> dict:
    reset_db(); client, headers = auth()
    created = client.post('/api/sites', headers=headers, json={'business_name':'Studio repetition QA','description':'Repeated interaction certification','origin':'AI','industry':'Design'})
    created.raise_for_status(); site_id = created.json()['id']
    shell = client.get(f'/studio/{site_id}'); shell.raise_for_status()
    image_path = TMP/'repeat.png'; Image.new('RGB', (640, 420), (125, 92, 246)).save(image_path)
    result = {'drag_snap_repetitions': 0, 'autosave_reload_repetitions': 0, 'breakpoint_repetitions': 0, 'crop_persistence_repetitions': 0, 'publish_repetitions': 0, 'errors': []}
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=['--no-sandbox'])
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.expose_function('__backendFetch', bridge(client))
        page.on('console', lambda msg: result['errors'].append(msg.text) if msg.type == 'error' else None)
        page.on('pageerror', lambda exc: result['errors'].append(str(exc)))
        page.set_content(inline_shell(shell.text), wait_until='load')
        page.wait_for_selector('.studio-canvas [data-studio-id]')
        page.get_by_role('button', name='Elements').click(); page.get_by_role('button', name='Add Rectangle', exact=True).click(); page.wait_for_timeout(120)
        rect = page.locator('[data-studio-type="container"]').last; rect.click(); page.wait_for_timeout(50)
        page.get_by_role('button', name='Uploads').click(); page.locator('.asset-upload-button input').set_input_files(image_path)
        page.wait_for_function("document.querySelector('.panel-message')?.textContent.includes('Upload complete')", timeout=15000)
        page.locator('.asset-grid button').first.click(); page.wait_for_timeout(120)
        image = page.locator('[data-studio-type="image"]').last
        for i in range(20):
            rect_id = rect.get_attribute('data-studio-id'); rect = page.locator(f'[data-studio-id="{rect_id}"]')
            page.get_by_role('button', name='Layers', exact=True).first.click(); page.locator(f'[data-layer-node-id="{rect_id}"]').click(); page.get_by_role('button', name='Elements', exact=True).first.click(); page.wait_for_timeout(30)
            page.locator('[data-studio-type="image"]').last.evaluate('e=>e.style.pointerEvents="none"')
            before = rect.get_attribute('style') or ''; drag_node(page, rect, 4 + (i % 3), 2); after = rect.get_attribute('style') or ''
            assert before != after, f'drag/snap repetition {i+1}'
            result['drag_snap_repetitions'] += 1
            page.get_by_title('tablet').click(); page.wait_for_timeout(30); drag_node(page, rect, 3, 1)
            page.get_by_title('mobile').click(); page.wait_for_timeout(30); drag_node(page, rect, 2, 1)
            page.get_by_title('desktop').click(); page.wait_for_timeout(30)
            result['breakpoint_repetitions'] += 1
            wait_saved(page); reload_shell(page, client, site_id)
            rect = page.locator(f'[data-studio-id="{rect_id}"]')
            assert rect.count() == 1, f'reload repetition {i+1}'
            result['autosave_reload_repetitions'] += 1
        for i in range(10):
            image = page.locator('[data-studio-type="image"]').last; image.click(); page.get_by_role('button', name='Crop', exact=True).click(); page.wait_for_selector('.crop-toolbar')
            page.get_by_label('Zoom in crop').click(); frame = image.locator('.studio-image-frame'); x, y = centre(frame); page.mouse.move(x, y); page.mouse.down(); page.mouse.move(x + 5, y + 3, steps=2); page.mouse.up(); page.get_by_role('button', name='Done', exact=True).click(); wait_saved(page)
            image = page.locator('[data-studio-type="image"]').last; image.click(); page.get_by_role('button', name='Crop', exact=True).click(); page.wait_for_selector('.crop-toolbar'); crop_style=image.locator('img').get_attribute('style') or ''; assert 'scale(' in crop_style, f'crop persistence repetition {i+1}: {crop_style}'; page.get_by_role('button', name='Cancel', exact=True).click()
            result['crop_persistence_repetitions'] += 1
        for _ in range(3):
            page.get_by_role('button', name='Publish website', exact=True).click(); page.wait_for_timeout(250); slug = client.get(f'/api/sites/{site_id}', headers=headers).json()['slug']; public = client.get(f'/s/{slug}'); public.raise_for_status(); result['publish_repetitions'] += 1
        browser.close()
    result['pass'] = not result['errors'] and all(result[k] == v for k, v in {'drag_snap_repetitions':20,'autosave_reload_repetitions':20,'breakpoint_repetitions':20,'crop_persistence_repetitions':10,'publish_repetitions':3}.items())
    out = ROOT/'artifacts/final-production-certification/browser-results/studio-repetition.json'; out.parent.mkdir(parents=True, exist_ok=True); out.write_text(json.dumps(result, indent=2), encoding='utf-8'); print(json.dumps(result, indent=2)); return result


if __name__ == '__main__':
    raise SystemExit(0 if run()['pass'] else 1)
