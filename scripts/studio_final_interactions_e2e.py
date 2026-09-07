from __future__ import annotations

import argparse, json, os, re, shutil, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix='zylora-studio-final-'))
os.environ['APP_ENV'] = 'test'
os.environ['DATABASE_URL'] = f"sqlite:///{(TMP/'e2e.sqlite').as_posix()}"
os.environ['MEDIA_STORAGE_DIR'] = str(TMP/'media')
sys.path.insert(0, str(ROOT))
from tests.test_ai_first_rebuild import reset_db, auth
from scripts.editor_media_e2e import bridge, bootstrap


def inline_shell(html: str) -> str:
    bundle = (ROOT/'static'/'studio.js').read_text(encoding='utf-8')
    ux = (ROOT/'static'/'studio-ux.css').read_text(encoding='utf-8')
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f'<style>{ux}</style>')
    return re.sub(r'<script src="/static/studio\.js"></script>', lambda _: f'<script>{bootstrap()}</script><script>{bundle}</script>', html)


def run(engine_override: str | None = None) -> None:
    reset_db()
    client, headers = auth()
    created = client.post('/api/sites', headers=headers, json={
        'business_name': 'Final Studio Interaction QA',
        'description': 'Controlled section ordering and canvas navigation test.',
        'origin': 'AI', 'industry': 'Design', 'style': 'Editorial',
    })
    assert created.status_code == 200, created.text
    site_id = created.json()['id']
    shell = client.get(f'/studio/{site_id}')
    assert shell.status_code == 200
    engine_name = (engine_override or os.getenv('ZYLORA_BROWSER', 'chromium')).lower()
    checks: list[str] = []
    errors: list[str] = []
    try:
        with sync_playwright() as pw:
            engine = getattr(pw, engine_name)
            browser = engine.launch(headless=True, args=['--no-sandbox'] if engine_name == 'chromium' else [])
            page = browser.new_page(viewport={'width': 1440, 'height': 900})
            page.on('console', lambda msg: errors.append(f'console:{msg.text}') if msg.type == 'error' else None)
            page.on('pageerror', lambda exc: errors.append(f'page:{exc}'))
            page.expose_function('__backendFetch', bridge(client))
            page.set_content(inline_shell(shell.text), wait_until='load')
            page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)

            # Create two real sections through the recording-aligned Templates drawer.
            if not page.get_by_title('Add Editorial hero', exact=True).is_visible():
                page.locator('.tool-rail button[title="Templates"]').click()
            page.wait_for_timeout(250)
            page.get_by_title('Add Editorial hero', exact=True).first.click(timeout=5000)
            page.wait_for_timeout(500)
            page.get_by_title('Add Nature hero', exact=True).first.click()
            page.wait_for_timeout(800)
            page.locator('.panel-collapse[aria-label="Close tool panel"]').click()
            page.wait_for_timeout(200)
            before = client.post(f'/api/sites/{site_id}/studio-migrate', headers=headers).json()['document']
            root_before = list(before['pages']['home']['nodes'][before['pages']['home']['rootNodeId']]['children'])
            section_ids = [node_id for node_id in root_before if before['pages']['home']['nodes'][node_id]['type'] == 'section']
            assert len(section_ids) >= 2
            # The new section is appended after the existing footer section; use those two stable root sections.
            section_ids = section_ids[-2:]
            source_node = page.locator(f'[data-studio-id="{section_ids[1]}"]')
            assert source_node.count() == 1
            source_node.scroll_into_view_if_needed()
            source_box=source_node.bounding_box(); assert source_box
            source_x=source_box['x']+source_box['width']*.72
            source_y=source_box['y']+min(28,source_box['height']*.35)
            page.mouse.click(source_x,source_y)
            page.mouse.click(source_x,source_y,button='right')
            page.get_by_role('menu').get_by_role('button', name=re.compile('Send backward')).click()
            page.wait_for_timeout(800)
            after = client.post(f'/api/sites/{site_id}/studio-migrate', headers=headers).json()['document']
            root_after = list(after['pages']['home']['nodes'][after['pages']['home']['rootNodeId']]['children'])
            assert root_after.index(section_ids[1]) < root_after.index(section_ids[0])
            assert set(section_ids).issubset(set(root_after))
            checks.append('canvas section ordering preserves stable IDs')
            # History reducer coverage is asserted in the focused contract suite; keep this browser check focused on the persisted structural move.

            # Verify middle-mouse and Space+drag pan the viewport without changing node geometry.
            page.locator('.zoom-range').fill('150')
            page.locator('.zoom-range').evaluate('(e)=>e.blur()')
            heading = page.locator('[data-studio-type="heading"]').first
            geometry_before = heading.get_attribute('style')
            workspace = page.locator('.canvas-workspace').bounding_box(); assert workspace
            px, py = workspace['x'] + workspace['width']*.72, workspace['y'] + workspace['height']*.72
            left_before = page.locator('.canvas-workspace').evaluate('(e)=>e.scrollLeft')
            page.mouse.move(px, py); page.mouse.down(button='middle'); page.mouse.move(px-180, py, steps=8); page.mouse.up(button='middle'); page.wait_for_timeout(100)
            left_middle = page.locator('.canvas-workspace').evaluate('(e)=>e.scrollLeft')
            assert left_middle != left_before
            assert heading.get_attribute('style') == geometry_before
            checks.append('middle-mouse pan changes viewport only')
            top_before = page.locator('.canvas-workspace').evaluate('(e)=>e.scrollTop')
            page.keyboard.down('Space'); page.mouse.move(px, py); page.mouse.down(); page.mouse.move(px, py-120, steps=8); page.mouse.up(); page.keyboard.up('Space'); page.wait_for_timeout(100)
            top_space = page.locator('.canvas-workspace').evaluate('(e)=>e.scrollTop')
            assert top_space != top_before
            assert heading.get_attribute('style') == geometry_before
            checks.append('Space+drag pans without mutating component geometry')

            # Application shell matrix; document width must never exceed viewport width.
            for width, height in [(1440,900),(1280,800),(1024,768),(768,1024),(430,932),(390,844),(375,812),(360,800)]:
                page.set_viewport_size({'width': width, 'height': height})
                page.wait_for_timeout(80)
                assert page.evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth')
                assert page.locator('.canvas-workspace').is_visible()
                if width <= 820:
                    assert page.locator('.studio-mobile-nav').is_visible()
                checks.append(f'viewport {width}px has no application overflow')
            assert not errors
            evidence = ROOT/'artifacts'/'studio-canva-grade-rebuild'
            evidence.mkdir(parents=True, exist_ok=True)
            # Use a valid one-page blank document for direct 1280x720 shell parity
            # with the supplied recording instead of letting test content distort
            # the measured canvas geometry.
            parity_document = client.post(f'/api/sites/{site_id}/studio-migrate', headers=headers).json()['document']
            parity_page = parity_document['pages']['home']
            parity_root = parity_page['nodes'][parity_page['rootNodeId']]
            parity_root['children'] = []
            parity_root['style']['css'].update({'minHeight':'766px','background':'#ffffff'})
            parity_page['nodes'] = {parity_root['id']: parity_root}
            parity_document['pages'] = {'home': parity_page}
            saved = client.post(f'/api/sites/{site_id}/studio-save', headers=headers, json=parity_document)
            assert saved.status_code == 200, saved.text
            page.set_viewport_size({'width': 1535, 'height': 777})
            page.set_content(inline_shell(shell.text), wait_until='load')
            page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)
            page.locator('.zoom-range').fill('58')
            page.locator('.canvas-workspace').evaluate('(e)=>{e.scrollLeft=0;e.scrollTop=0}')
            page.screenshot(path=str(evidence/'reference-initial-1535.png'), full_page=False)
            page.locator('.tool-rail button[title="Elements"]').click()
            page.screenshot(path=str(evidence/'reference-elements-1535.png'), full_page=False)
            page.screenshot(path=str(evidence/'recording-aligned-desktop.png'), full_page=False)
            page.locator('.tool-rail button[title="Elements"]').click()
            page.locator('.tool-rail button[title="Brand"]').click()
            labels=page.locator('.tool-rail button span').all_text_contents()
            assert labels == ['Templates','Elements','Text','Brand','Uploads','Tools','Projects','Apps','Photos']
            checks.append('recording-aligned rail contains the nine reference tools in order')
            page.screenshot(path=str(evidence/'recording-aligned-layers.png'), full_page=False)
            page.locator('.tool-rail button[title="Brand"]').click()
            page.set_viewport_size({'width': 390, 'height': 844})
            page.screenshot(path=str(evidence/'recording-aligned-mobile.png'), full_page=False)
            page.screenshot(path=str(ROOT/'data'/'studio-final-interactions.png'), full_page=False)
            browser.close()
    finally:
        shutil.rmtree(TMP, ignore_errors=True)
    print(f'studio_final_interactions_e2e ({engine_name}): {len(checks)} checks / {len(errors)} errors')
    print(json.dumps({'browser': engine_name, 'checks': checks, 'errors': errors}, indent=2))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--browser', choices=('chromium', 'firefox', 'webkit'))
    run(parser.parse_args().browser)
