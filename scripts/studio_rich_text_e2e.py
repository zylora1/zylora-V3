from __future__ import annotations

import argparse
import os
import re
import shutil
import sys
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
TMP=Path(tempfile.mkdtemp(prefix='zylora-studio-rich-text-'))
os.environ['APP_ENV']='test';os.environ['DATABASE_URL']=f"sqlite:///{(TMP/'e2e.sqlite').as_posix()}";os.environ['MEDIA_STORAGE_DIR']=str(TMP/'media')
sys.path.insert(0,str(ROOT))
from tests.test_ai_first_rebuild import reset_db, auth
from scripts.editor_media_e2e import bridge, bootstrap


def inline_shell(html:str)->str:
    bundle=(ROOT/'static'/'studio.js').read_text(encoding='utf-8')
    css=(ROOT/'static'/'studio-ux.css').read_text(encoding='utf-8')
    html=html.replace('<link rel="stylesheet" href="/static/studio-ux.css">',f'<style>{css}</style>')
    return re.sub(r'<script src="/static/studio\.js"></script>',lambda _:f'<script>{bootstrap()}</script><script>{bundle}</script>',html)


def select_range(page,start,end):
    return page.evaluate("""([start,end])=>{const el=document.querySelector('.studio-text-editor[contenteditable="true"]');if(!el)return false;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];let node;while(node=walker.nextNode())nodes.push(node);const point=(offset)=>{let cursor=0;for(const text of nodes){const next=cursor+text.textContent.length;if(offset<=next)return [text,Math.max(0,offset-cursor)];cursor=next}return [nodes[nodes.length-1],nodes[nodes.length-1].textContent.length]};const range=document.createRange();const a=point(start),b=point(end);range.setStart(a[0],a[1]);range.setEnd(b[0],b[1]);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);el.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));return true}""",[start,end])


def main(browser_name:str='chromium'):
    reset_db();client,headers=auth();created=client.post('/api/sites/blank',headers=headers,json={'name':'Rich Text QA'});assert created.status_code==200,created.text
    site_id=created.json()['id'];shell=client.get(f'/studio/{site_id}');assert shell.status_code==200
    try:
        with sync_playwright() as playwright:
            browser=getattr(playwright,browser_name).launch(headless=True,args=['--no-sandbox'] if browser_name=='chromium' else [])
            page=browser.new_page(viewport={'width':1440,'height':900});errors=[];page.on('console',lambda msg:errors.append(msg.text) if msg.type=='error' else None);page.on('pageerror',lambda exc:errors.append(str(exc)));page.expose_function('__backendFetch',bridge(client));page.set_content(inline_shell(shell.text),wait_until='load');page.wait_for_selector('.studio-canvas [data-studio-id]',timeout=15000)
            page.locator('.tool-rail button[title="Text"]').click();page.get_by_role('button',name='Add Text').click();page.wait_for_timeout(500);page.wait_for_selector('[data-studio-type="text"]',timeout=5000);node=page.locator('[data-studio-type="text"]').last;node.dispatch_event('click');text=page.locator('.studio-text-editor').last;text.click(click_count=2);page.wait_for_timeout(100);text.press('Control+A');text.type('Design your future today');page.wait_for_timeout(100)
            assert select_range(page,12,18);page.get_by_role('button',name='Font family').click();page.get_by_role('button',name='Georgia').click();page.wait_for_timeout(100)
            text=page.locator('.studio-text-editor').last;text.click(click_count=2);page.wait_for_timeout(100);assert select_range(page,19,24);page.get_by_role('button',name='Bold').click();page.wait_for_timeout(100)
            text=page.locator('.studio-text-editor').last;text.click(click_count=2);page.wait_for_timeout(100);assert select_range(page,19,24);page.get_by_role('button',name='Text gradient').click();page.get_by_role('button',name='+ Add stop').click();page.wait_for_timeout(250)
            page.wait_for_function("document.querySelector('.cloud-save')?.getAttribute('title')==='Saved'",timeout=20000)
            document=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document'];node=next(node for node in document['pages']['home']['nodes'].values() if node.get('type')=='text');runs=node['content'].get('runs',[])
            future=[run for run in runs if run['start']<=12 and run['end']>=18];today=[run for run in runs if run['start']<=19 and run['end']>=24]
            assert any(run['marks'].get('fontFamily')=='Georgia' for run in future),runs
            assert any(run['marks'].get('fontWeight')=='700' for run in today),runs
            assert any(run['marks'].get('gradient') for run in today),runs
            assert not errors,errors
            print(f'studio_rich_text_e2e ({browser_name}): PASS / 4 checks / 0 errors')
            browser.close()
    finally: shutil.rmtree(TMP,ignore_errors=True)


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--browser',choices=('chromium','firefox','webkit'),default='chromium');main(parser.parse_args().browser)
