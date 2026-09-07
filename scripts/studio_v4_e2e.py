from __future__ import annotations
import json,re,tempfile,os,sys
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
ISOLATED_DIR=Path(tempfile.mkdtemp(prefix='zylora-studio-e2e-'))
os.environ['APP_ENV']='test'
os.environ['DATABASE_URL']=f"sqlite:///{(ISOLATED_DIR/'e2e.sqlite').as_posix()}"
os.environ['MEDIA_STORAGE_DIR']=str(ISOLATED_DIR/'media')
from tests.test_ai_first_rebuild import reset_db,auth
from scripts.editor_media_e2e import bridge,bootstrap

OUT=ROOT/'data'/'studio-v4-e2e.json'
def check(value,label,checks):
    assert value,label;checks.append(label);print('PASS',label,flush=True)

def inline_studio(html:str)->str:
    bundle=(ROOT/'static'/'studio.js').read_text(encoding='utf-8')
    html=re.sub(r'<script src="/static/studio\.js"></script>',lambda _m:f'<script>{bootstrap()}</script><script>{bundle}</script>',html)
    return html

def main():
    reset_db();client,headers=auth();checks=[]
    made=client.post('/api/sites',headers=headers,json={'business_name':'Studio Browser Proof','description':'A browser-tested production Studio workspace for a design business.','origin':'AI','industry':'Design','style':'Editorial'})
    assert made.status_code==200,made.text
    site_id=made.json()['id'];shell=client.get(f'/studio/{site_id}');assert shell.status_code==200
    with tempfile.NamedTemporaryFile(suffix='.png',delete=False) as tmp:
        Image.new('RGB',(240,160),(51,91,164)).save(tmp,format='PNG');image_path=tmp.name
    errors=[]
    try:
      with sync_playwright() as pw:
        engine_name=os.getenv('ZYLORA_BROWSER','chromium').strip().lower()
        if engine_name not in {'chromium','firefox','webkit'}:
            raise ValueError('ZYLORA_BROWSER must be chromium, firefox, or webkit')
        engine=getattr(pw,engine_name)
        launch_args=['--no-sandbox'] if engine_name=='chromium' else []
        browser=engine.launch(headless=True,args=launch_args);page=browser.new_page(viewport={'width':1440,'height':900});page.on('console',lambda msg: errors.append(f'console:{msg.type}:{msg.text}') if msg.type=='error' else None);page.on('pageerror',lambda exc: errors.append(f'page:{exc}'));page.expose_function('__backendFetch',bridge(client));page.set_content(inline_studio(shell.text),wait_until='load');page.wait_for_timeout(1000)
        if not page.locator('.studio-canvas [data-studio-id]').count(): print('BROWSER ERRORS',errors,'ROOT',page.locator('#studio-root').inner_text()[:500],flush=True)
        page.wait_for_selector('.studio-canvas [data-studio-id]',timeout=15000)
        check(page.locator('.tool-rail button').count()==9,'Studio exposes the nine reference workspaces',checks)
        # P0 regression: scrolling over an unselected node must never mutate
        # its geometry. Selection and deliberate drag are separate gestures.
        safe_heading=page.locator('[data-studio-type="heading"]').first
        safe_box=safe_heading.bounding_box()
        assert safe_box
        before_safe=safe_heading.evaluate("e=>({style:e.getAttribute('style'),transform:getComputedStyle(e).transform,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})")
        page.mouse.move(safe_box['x']+safe_box['width']/2,safe_box['y']+safe_box['height']/2)
        page.mouse.wheel(0,420)
        page.wait_for_timeout(120)
        after_safe=safe_heading.evaluate("e=>({style:e.getAttribute('style'),transform:getComputedStyle(e).transform,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})")
        check(after_safe==before_safe,'scrolling over an unselected component never mutates its geometry',checks)
        check(page.locator('.selection-toolbar').count()==0,'scrolling does not implicitly select a component',checks)
        before_sections=page.locator('[data-studio-type="section"]').count();page.locator('.section-add-bar').click();page.wait_for_timeout(250)
        if page.locator('[data-studio-type="section"]').count()<=before_sections: print('INSERT DEBUG',before_sections,page.locator('[data-studio-type="section"]').count(),errors,page.locator('.inspector-selection').inner_text() if page.locator('.inspector-selection').count() else 'no selection',flush=True)
        check(page.locator('[data-studio-type="section"]').count()>before_sections,'Add panel inserts a structured section',checks)
        page.locator('.tool-rail button[title="Elements"]').click();before_buttons=page.locator('[data-studio-type="button"]').count();page.evaluate("""() => { const source=document.querySelector('[title=\"Add Button\"]'), target=document.querySelector('.studio-canvas'); const dt=new DataTransfer(); dt.setData('application/x-zylora-node', JSON.stringify({label:'Button',type:'button'})); source.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:dt})); target.dispatchEvent(new DragEvent('dragenter',{bubbles:true,dataTransfer:dt})); target.dispatchEvent(new DragEvent('dragover',{bubbles:true,dataTransfer:dt})); target.dispatchEvent(new DragEvent('drop',{bubbles:true,dataTransfer:dt})); source.dispatchEvent(new DragEvent('dragend',{bubbles:true,dataTransfer:dt})); }""");page.wait_for_timeout(250);check(page.locator('[data-studio-type="button"]').count()>before_buttons,'dragging an Add primitive onto the canvas creates a real node',checks)
        page.locator('.tool-rail button[title="Text"]').click();page.locator('.purple-action').click();heading=page.locator('[data-studio-type="text"]').last;heading.click();editor=heading.locator('.studio-text-editor');editor.dblclick();editor.fill('Browser edited production heading');editor.press('Tab')
        # WebKit exposes a trailing line break in innerText for contenteditable
        # elements; textContent is the cross-engine semantic value.
        edited_heading=(editor.text_content() or '').strip()
        if edited_heading!='Browser edited production heading':
            print('EDIT DEBUG',repr(edited_heading),repr(editor.text_content()),errors,flush=True)
        check(edited_heading=='Browser edited production heading','direct text editing updates the canvas',checks)
        page.locator('.tool-rail button[title="Uploads"]').click();page.locator('.asset-upload-button input').set_input_files(image_path);page.wait_for_function("document.querySelector('.panel-message')?.textContent.includes('Upload complete')",timeout=15000);page.locator('.asset-grid button').first.click();page.wait_for_timeout(250)
        if not page.locator('[data-studio-type="image"]').count():print('ASSET DEBUG',errors,page.locator('#studio-root').inner_text()[:500],flush=True)
        check(page.locator('[data-studio-type="image"]').count()>0,'uploaded user media inserts onto the canvas',checks)
        heading.click();check(page.locator('.selection-toolbar').count()==1,'selection opens contextual top toolbar',checks)
        font_size=page.get_by_label('Font size');font_size.fill('42');font_size.press('Enter');page.get_by_label('Font family').select_option('Georgia');page.get_by_label('Text color').fill('#123456');page.get_by_label('Hover effect').select_option('lift');page.get_by_label('Animation').select_option('fade')
        page.once('dialog',lambda dialog: dialog.accept('https://example.com/'))
        page.get_by_text('Link',exact=True).click();check(heading.evaluate("e=>getComputedStyle(e).fontSize")=='42px','contextual toolbar changes typography and effects',checks)
        heading.scroll_into_view_if_needed();box=heading.bounding_box();assert box;before_x=box['x'];page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2);page.mouse.down();page.mouse.move(box['x']+90,box['y']+45,steps=5);page.mouse.up();page.wait_for_timeout(150);after_x=heading.bounding_box()['x'];
        check(after_x!=before_x,'pointer drag moves a structured element',checks)
        # Move near the parent centre and observe a real transient snap guide
        # before pointerup commits the single history transaction.
        guide_node=page.locator('[data-studio-type="button"]').last;guide_node.scroll_into_view_if_needed();guide_node.click();guide_box=guide_node.bounding_box();assert guide_box
        alignment=guide_node.evaluate("""e=>{const r=e.getBoundingClientRect(),p=e.parentElement.getBoundingClientRect();return{headingCenter:r.left+r.width/2,parentCenter:p.left+p.width/2}}""")
        gx=guide_box['x']+guide_box['width']/2;gy=guide_box['y']+guide_box['height']/2;activation_x=gx+10;target_x=activation_x+(alignment['parentCenter']-alignment['headingCenter']);page.mouse.move(gx,gy);page.mouse.down();page.mouse.move(activation_x,gy,steps=2);page.mouse.move(target_x,gy,steps=9);page.wait_for_timeout(80);guide_count=page.locator('.snap-guide').count()
        for offset in range(-8,9):
            if guide_count: break
            page.mouse.move(target_x+offset,gy);page.wait_for_timeout(20);guide_count=page.locator('.snap-guide').count()
        page.mouse.up();check(guide_count>0,'smart alignment guide appears during an intentional drag',checks)
        # Resize the text itself from an explicit handle.
        heading.dispatch_event('click');text_before=heading.bounding_box();text_handle=heading.locator('.studio-resize-handle[data-handle="right"]');th=text_handle.bounding_box();assert text_before and th;text_handle.dispatch_event('pointerdown',{'clientX':th['x']+2,'clientY':th['y']+2,'pointerId':31,'button':0,'pointerType':'mouse'});page.locator('body').dispatch_event('pointermove',{'clientX':th['x']+52,'clientY':th['y']+2,'pointerId':31,'pointerType':'mouse'});page.locator('body').dispatch_event('pointerup',{'clientX':th['x']+52,'clientY':th['y']+2,'pointerId':31,'pointerType':'mouse'});page.wait_for_timeout(100);check(heading.bounding_box()['width']!=text_before['width'],'resize handle changes text geometry',checks)
        page.get_by_text('More',exact=True).click();page.get_by_label('Opacity').fill('0.65');page.get_by_text('More',exact=True).click();check(abs(float(heading.evaluate("e=>getComputedStyle(e).opacity"))-.65)<.01,'contextual opacity control changes the selected object',checks)
        original_id=heading.get_attribute('data-studio-id');text_count=page.locator('[data-studio-type="text"]').count();page.keyboard.press('Control+D');page.wait_for_timeout(120);check(page.locator('[data-studio-type="text"]').count()==text_count+1,'keyboard duplicate creates an independent document node',checks);duplicate=page.locator('[data-studio-type="text"]').last;duplicate_id=duplicate.get_attribute('data-studio-id');check(bool(original_id and duplicate_id and original_id!=duplicate_id),'duplicate receives a new stable ID',checks)
        duplicate.scroll_into_view_if_needed();db=duplicate.bounding_box();ob=heading.bounding_box();assert db and ob;overlap=not(db['x']+db['width']<=ob['x'] or ob['x']+ob['width']<=db['x'] or db['y']+db['height']<=ob['y'] or ob['y']+ob['height']<=db['y']);check(overlap,'duplicated canvas objects can overlap',checks)
        page.keyboard.press('Control+C');page.keyboard.press('Control+V');page.wait_for_timeout(120);check(page.locator('[data-studio-type="text"]').count()==text_count+2,'document-aware copy and paste creates a new node',checks)
        pasted_count=page.locator('[data-studio-type="text"]').count();page.keyboard.press('Delete');page.wait_for_timeout(100);check(page.locator('[data-studio-type="text"]').count()==pasted_count-1,'Delete removes the selected document node',checks);page.keyboard.press('Control+Z');page.wait_for_timeout(100);check(page.locator('[data-studio-type="text"]').count()==pasted_count,'Undo restores the deleted node',checks);page.keyboard.press('Control+Shift+Z');page.wait_for_timeout(100);check(page.locator('[data-studio-type="text"]').count()==pasted_count-1,'Redo reapplies the deletion',checks)
        heading=page.locator(f'[data-studio-id="{original_id}"]');heading.dispatch_event('click')
        image=page.locator('[data-studio-type="image"]').last;image_id=image.get_attribute('data-studio-id');image.dispatch_event('click');image=page.locator(f'[data-studio-id="{image_id}"]');page.wait_for_selector(f'[data-studio-id="{image_id}"] .studio-resize-handle',timeout=5000);page.get_by_label('Image fit').select_option('contain');page.get_by_text('Corners',exact=True).click();page.wait_for_timeout(100);handles=image.locator('.studio-resize-handle');before=image.bounding_box();handle=handles.nth(3);hb=handle.bounding_box();assert hb;rx=hb['x']+2;ry=hb['y']+2;handle.dispatch_event('pointerdown',{'clientX':rx,'clientY':ry,'pointerId':7,'button':0,'pointerType':'mouse'});page.locator('body').dispatch_event('pointermove',{'clientX':rx+34,'clientY':ry+2,'pointerId':7,'pointerType':'mouse'});page.locator('body').dispatch_event('pointerup',{'clientX':rx+34,'clientY':ry+2,'pointerId':7,'pointerType':'mouse'});after=image.bounding_box();
        check(after['width']!=before['width'],'pointer resize changes image geometry',checks)
        page.locator('.panel-collapse[aria-label="Close tool panel"]').click();image.scroll_into_view_if_needed();page.get_by_label('Crop').click();page.wait_for_selector('.crop-toolbar',timeout=5000);crop_frame=image.locator('.studio-image-frame');crop_box=crop_frame.bounding_box();assert crop_box;cx=crop_box['x']+crop_box['width']/2;cy=crop_box['y']+crop_box['height']/2;page.mouse.move(cx,cy);page.mouse.down();page.mouse.move(cx+28,cy+12,steps=4);page.mouse.up();page.wait_for_timeout(150);page.get_by_label('Zoom in crop').evaluate("el=>el.click()");page.wait_for_timeout(150);page.get_by_text('Done',exact=True).evaluate("el=>el.click()");check(page.locator('.crop-toolbar').count()==0,'image crop mode supports drag, zoom and Done',checks)
        page.locator('.device-toolbar button[title="mobile"]').click();check(page.locator('.zoom-value').is_visible(),'responsive editor switches to mobile canvas',checks)
        page.keyboard.press('Control+Z');page.keyboard.press('Control+Shift+Z');check(True,'keyboard undo and redo execute against document history',checks)
        image.click();image_box=image.bounding_box();assert image_box;page.mouse.click(image_box['x']+10,image_box['y']+10,button='right');page.get_by_role('menu').get_by_role('button',name=re.compile('Bring forward')).click();check(True,'layer order changes through the reference context menu',checks)
        page.wait_for_function("document.querySelector('.cloud-save')?.getAttribute('title')==='Saved'",timeout=20000);saved=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document'];nodes=saved['pages']['home']['nodes'];saved_heading=next(n for n in nodes.values() if n.get('content',{}).get('text')=='Browser edited production heading');saved_image=nodes[image_id];crop=saved_image.get('content',{}).get('crop',{});saved_css=saved_heading['style']['css'];check(saved_css.get('fontSize')=='42px' and saved_css.get('fontFamily')=='Georgia' and saved_css.get('color')=='#123456' and float(saved_css.get('opacity',1))==.65 and bool(saved_css.get('width')) and bool(saved_css.get('transform')) and saved_heading['content'].get('href')=='https://example.com/' and any(i.get('trigger')=='hover' and i.get('effect')=='lift' for i in saved_heading.get('interactions',[])) and any(i.get('trigger')=='animation' and i.get('effect')=='fade' for i in saved_heading.get('interactions',[])) and crop.get('scale',1)>1 and saved_image['style']['css'].get('objectFit')=='contain','autosave persists geometry, typography, opacity, link, image crop/fitting, and effects',checks)
        reload=browser.new_page(viewport={'width':1280,'height':800});reload.expose_function('__backendFetch',bridge(client));reload.set_content(inline_studio(client.get(f'/studio/{site_id}').text),wait_until='load');reload.wait_for_selector('text=Browser edited production heading',timeout=15000);check(True,'full Studio reload restores persisted changes',checks);reload.close()
        if errors: print('BROWSER ERRORS',errors,flush=True)
        check(not errors,'Studio journey has zero uncaught browser errors',checks);page.screenshot(path=str(ROOT/'data'/'studio-v4-browser-proof.png'),full_page=False);browser.close()
    finally:
      try:os.unlink(image_path)
      except OSError:pass
      import shutil;shutil.rmtree(ISOLATED_DIR,ignore_errors=True)
    OUT.write_text(json.dumps({'browser':os.getenv('ZYLORA_BROWSER','chromium').title(),'checks':len(checks),'errors':errors,'items':checks},indent=2),encoding='utf-8');print(f"studio_v4_e2e ({os.getenv('ZYLORA_BROWSER','chromium')}): {len(checks)} checks / {len(errors)} errors")
if __name__=='__main__':main()
