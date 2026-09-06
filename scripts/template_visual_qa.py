from __future__ import annotations
import argparse, asyncio, base64, mimetypes, os, re, sys
from pathlib import Path
from playwright.async_api import async_playwright

REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
if str(REPOSITORY_ROOT) not in sys.path:
    sys.path.insert(0, str(REPOSITORY_ROOT))

from app.config import ROOT
from app.templates import render_template_page

def inline_assets(html:str,slug:str)->str:
    base=ROOT/'template_projects'/slug/'public'/'assets'
    pattern=re.compile(rf'/template-assets/{re.escape(slug)}/([^\"\'<> )]+)')
    def repl(m):
        rel=m.group(1); path=(base/rel).resolve()
        if base.resolve() not in path.parents or not path.is_file(): return m.group(0)
        mime=mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
        return f'data:{mime};base64,{base64.b64encode(path.read_bytes()).decode()}'
    return pattern.sub(repl,html)

async def run(slug:str,page_key:str,outdir:Path):
    html=inline_assets(render_template_page(slug,{},page_key),slug)
    outdir.mkdir(parents=True,exist_ok=True)
    viewports=[(1440,1000),(1280,900),(1024,820),(768,900),(430,900),(390,850),(375,820),(360,800)]
    results=[]
    async with async_playwright() as p:
        system_chromium='/usr/bin/chromium' if os.path.exists('/usr/bin/chromium') else None
        browser=await p.chromium.launch(headless=True,executable_path=system_chromium,args=['--no-sandbox'])
        for w,h in viewports:
            pg=await browser.new_page(viewport={'width':w,'height':h})
            await pg.set_content(html,wait_until='load')
            sw=await pg.evaluate('document.documentElement.scrollWidth'); cw=await pg.evaluate('document.documentElement.clientWidth')
            results.append({'width':w,'height':h,'scroll_width':sw,'client_width':cw,'overflow':sw>cw})
            if w in {1440,390}:
                await pg.screenshot(path=str(outdir/f'{slug}-{page_key}-{w}.png'),full_page=True)
            await pg.close()
        await browser.close()
    return results

if __name__=='__main__':
    ap=argparse.ArgumentParser(); ap.add_argument('slug'); ap.add_argument('--page',default='home'); ap.add_argument('--out',default=str(ROOT/'data'/'template-qa')); a=ap.parse_args()
    rows=asyncio.run(run(a.slug,a.page,Path(a.out)))
    for r in rows: print(r)
    raise SystemExit(1 if any(r['overflow'] for r in rows) else 0)
