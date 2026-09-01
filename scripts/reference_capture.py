from __future__ import annotations

"""Capture a third-party website strictly as private reconstruction evidence.

Outputs live under template_workbench/ and are not part of the public/exportable
catalogue. The capture is for visual analysis only; it does not download source
bundles or production media for redistribution.
"""

import argparse
import asyncio
from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.parse import urlsplit

from playwright.async_api import async_playwright

ROOT=Path(__file__).resolve().parents[1]
QUEUE=ROOT/'data/reference-reconstruction-queue.json'
VIEWPORTS=[('desktop',1440,1000),('tablet',768,900),('mobile',390,844)]


def slugify(value:str,fallback:str)->str:
    value=re.sub(r'[^a-z0-9]+','-',value.lower()).strip('-')
    return value[:64].strip('-') or fallback


def load_item(ref_id:str)->dict:
    data=json.loads(QUEUE.read_text(encoding='utf-8'))
    for item in data.get('items',[]):
        if item.get('id')==ref_id:
            return item
    raise SystemExit(f'Unknown reference id: {ref_id}')


ANALYZE_JS=r'''() => {
  const pick=(el)=>{
    const r=el.getBoundingClientRect(); const s=getComputedStyle(el);
    return {
      tag:el.tagName.toLowerCase(), id:el.id||null,
      classes:[...el.classList].slice(0,8),
      text:(el.innerText||'').replace(/\s+/g,' ').trim().slice(0,280),
      rect:{x:Math.round(r.x),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)},
      style:{display:s.display,position:s.position,fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,color:s.color,backgroundColor:s.backgroundColor,borderRadius:s.borderRadius,textAlign:s.textAlign,overflow:s.overflow}
    };
  };
  const visible=(el)=>{const r=el.getBoundingClientRect();const s=getComputedStyle(el);return r.width>2&&r.height>2&&s.display!=='none'&&s.visibility!=='hidden'};
  const sections=[...document.querySelectorAll('header,main>section,main>div,section,footer')].filter(visible).slice(0,160).map(pick);
  const headings=[...document.querySelectorAll('h1,h2,h3')].filter(visible).slice(0,120).map(pick);
  const interactive=[...document.querySelectorAll('a,button,[role=button]')].filter(visible).slice(0,180).map(pick);
  const media=[...document.querySelectorAll('img,video,picture,canvas,svg')].filter(visible).slice(0,180).map(el=>({...pick(el),src:(el.currentSrc||el.src||null)}));
  return {
    title:document.title,
    location:location.href,
    viewport:{width:innerWidth,height:innerHeight},
    document:{width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight},
    bodyStyle:pick(document.body).style,
    sections,headings,interactive,media
  };
}'''


async def capture(item:dict, timeout_ms:int)->Path:
    url=str(item.get('live_url') or item.get('reference_url') or '')
    if not url.startswith(('http://','https://')):
        raise SystemExit('Reference has no usable URL')
    host=urlsplit(url).hostname or item['id']
    slug=slugify(str(item.get('title') or host),item['id'])
    out=ROOT/'template_workbench'/slug/'reference'
    out.mkdir(parents=True,exist_ok=True)
    evidence={'reference_id':item['id'],'title':item.get('title'),'url':url,'captured_at':datetime.now(timezone.utc).isoformat(),'viewports':{}}
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
        for name,w,h in VIEWPORTS:
            page=await browser.new_page(viewport={'width':w,'height':h},device_scale_factor=1)
            await page.goto(url,wait_until='domcontentloaded',timeout=timeout_ms)
            try: await page.wait_for_load_state('networkidle',timeout=min(timeout_ms,8000))
            except Exception: pass
            await page.evaluate('window.scrollTo(0,0)')
            await page.screenshot(path=str(out/f'{name}.png'),full_page=True,animations='disabled')
            evidence['viewports'][name]=await page.evaluate(ANALYZE_JS)
            await page.close()
        await browser.close()
    (out/'analysis.json').write_text(json.dumps(evidence,indent=2,ensure_ascii=False),encoding='utf-8')
    (out/'REFERENCE-ONLY-NOT-FOR-REDISTRIBUTION.md').write_text(
        '# Private reference evidence\n\nThese screenshots and measurements are analysis inputs only. Do not copy or redistribute the reference website’s proprietary source code, logos, trademarks, photography, illustrations, video or other protected assets.\n',
        encoding='utf-8')
    return out


async def main_async()->int:
    ap=argparse.ArgumentParser(); ap.add_argument('reference_id'); ap.add_argument('--timeout-ms',type=int,default=20000); args=ap.parse_args()
    item=load_item(args.reference_id)
    out=await capture(item,args.timeout_ms)
    print(out.relative_to(ROOT))
    return 0

if __name__=='__main__':
    raise SystemExit(asyncio.run(main_async()))
