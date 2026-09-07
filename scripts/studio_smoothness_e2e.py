from __future__ import annotations

import json
import os
import re
import sys
import tempfile
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-smoothness-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'smoothness.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db


OUT = ROOT / "artifacts" / "final-production-certification" / "performance-smoothness.json"


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return re.sub(r'<script src="/static/studio\.js"></script>', lambda _: f"<script>{bootstrap()}</script><script>{bundle}</script>", html)


def start_probe(page):
    page.evaluate(
        """()=>{
          window.__smoothness={samples:[],longtasks:[],active:true,last:0};
          if(window.PerformanceObserver){
            try{new PerformanceObserver(list=>window.__smoothness.longtasks.push(...list.getEntries().map(e=>e.duration))).observe({entryTypes:['longtask']})}catch{}
          }
          const tick=t=>{const p=window.__smoothness;if(!p.active)return;if(p.last)p.samples.push(t-p.last);p.last=t;requestAnimationFrame(tick)};
          requestAnimationFrame(tick);
        }"""
    )


def stop_probe(page) -> dict:
    page.wait_for_timeout(350)
    return page.evaluate(
        """()=>{const p=window.__smoothness||{samples:[],longtasks:[]};p.active=false;const a=p.samples.filter(x=>x>0).sort((x,y)=>x-y);const sum=a.reduce((s,x)=>s+x,0);return {frames:a.length,average_ms:a.length?sum/a.length:0,p95_ms:a.length?a[Math.min(a.length-1,Math.floor(a.length*.95))]:0,max_ms:a.length?a[a.length-1]:0,long_tasks:p.longtasks||[]}}"""
    )


def create_page(client, headers, count: int):
    created = client.post("/api/sites", headers=headers, json={"business_name":f"Smoothness {count}","description":"Studio smoothness benchmark","origin":"AI","industry":"Design"})
    created.raise_for_status(); sid=created.json()["id"]
    shell=client.get(f"/studio/{sid}"); shell.raise_for_status()
    return inline_shell(shell.text)


def action_probe(page, action) -> dict:
    start_probe(page); started=time.perf_counter(); action(); elapsed=(time.perf_counter()-started)*1000; sample=stop_probe(page); sample["wall_ms"]=round(elapsed,2); return sample


def run(count: int) -> dict:
    reset_db(); client, headers=auth(); html=create_page(client,headers,count); errors=[]
    with sync_playwright() as pw:
        browser=pw.chromium.launch(headless=True,args=["--no-sandbox"]); page=browser.new_page(viewport={"width":1440,"height":900})
        page.on("console",lambda msg: errors.append(f"console:{msg.text}") if msg.type=="error" else None); page.on("pageerror",lambda exc: errors.append(f"page:{exc}")); page.expose_function("__backendFetch",bridge(client))
        page.set_content(html,wait_until="load"); page.wait_for_selector('.studio-canvas [data-studio-id]',timeout=15000); page.get_by_role("button",name="Elements").click(); add=page.get_by_role("button",name="Add Rectangle",exact=True)
        started=time.perf_counter()
        for _ in range(count): add.click()
        insertion_ms=(time.perf_counter()-started)*1000; page.wait_for_timeout(300)
        nodes=page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])'); actual=nodes.count(); target=nodes.last; box=target.bounding_box();
        if not box: raise RuntimeError("benchmark target has no bounding box")
        x=box["x"]+box["width"]/2; y=box["y"]+box["height"]/2
        drag=action_probe(page,lambda:(page.mouse.move(x,y),page.mouse.down(),[page.mouse.move(x+i*2,y+i,steps=1) for i in range(24)],page.mouse.up()))
        resize_handle=target.locator('.studio-resize-handle[data-handle="bottom-right"]'); target.evaluate("e=>e.click()"); page.wait_for_timeout(40); hx=resize_handle.bounding_box();
        resize=action_probe(page,lambda:(resize_handle.dispatch_event("pointerdown",{"clientX":hx["x"]+hx["width"]/2,"clientY":hx["y"]+hx["height"]/2,"pointerId":811,"button":0,"pointerType":"mouse"}),[page.evaluate("([x,y,i])=>document.body.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,clientX:x+i*2,clientY:y+i,pointerId:811,pointerType:'mouse'}))",[hx["x"]+hx["width"]/2,hx["y"]+hx["height"]/2,i]) for i in range(1,8)],page.evaluate("([x,y])=>document.body.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y,pointerId:811,pointerType:'mouse'}))",[hx["x"]+hx["width"]/2+14,hx["y"]+hx["height"]/2+7])))
        selection=action_probe(page,lambda:target.evaluate("e=>e.click()")); layer=action_probe(page,lambda:(page.get_by_role("button",name="Layers").click(),page.wait_for_timeout(100),page.get_by_role("button",name="Elements").click()))
        serial_started=time.perf_counter(); page.wait_for_function("document.querySelector('.cloud-save')?.getAttribute('title')==='Saved'",timeout=20000); autosave_ms=(time.perf_counter()-serial_started)*1000
        result={"requested":count,"rendered":actual,"dom_nodes":page.locator("*").count(),"sequential_insertion_ms":round(insertion_ms,2),"steady_state":{"drag":drag,"resize":resize,"selection":selection,"layer_panel":layer,"autosave_wait_ms":round(autosave_ms,2)},"browser_errors":errors}
        browser.close(); return result


if __name__=="__main__":
    results=[run(n) for n in (20,100,250,500)]
    OUT.parent.mkdir(parents=True,exist_ok=True); OUT.write_text(json.dumps(results,indent=2),encoding="utf-8"); print(json.dumps(results,indent=2))
    if any(r["browser_errors"] for r in results): raise SystemExit(1)
