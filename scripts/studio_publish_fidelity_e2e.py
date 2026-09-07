from __future__ import annotations

import io
import json
import os
import re
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-fidelity-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'fidelity.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db


OUT = ROOT / "artifacts" / "final-production-certification" / "publish-fidelity"
VIEWPORTS = (1440, 1280, 1024, 768, 430, 390, 375, 360)


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return re.sub(
        r'<script src="/static/studio\.js"></script>',
        lambda _: f"<script>{bootstrap()}</script><script>{bundle}</script>",
        html,
    )


def css(**values: object) -> dict:
    unitless = {"opacity", "zIndex", "fontWeight", "lineHeight"}
    rendered = {}
    for key, value in values.items():
        if isinstance(value, (int, float)) and key not in unitless:
            rendered[key] = f"{value}px"
        else:
            rendered[key] = str(value)
    return {"position": "absolute", **rendered}


def controlled_document(document: dict, asset: dict) -> tuple[dict, dict]:
    page = document["pages"]["home"]
    root = page["nodes"][page["rootNodeId"]]
    root["style"] = {"css": {"position": "relative", "width": "1360px", "height": "980px", "background": "#f8fafc"}, "tokens": {}}
    root["children"] = []
    nodes: dict[str, dict] = {root["id"]: root}

    def node(node_id: str, kind: str, parent: str, *, style: dict | None = None, content: dict | None = None, z: int = 0, mobile: dict | None = None):
        item = {
            "id": node_id,
            "type": kind,
            "parentId": parent,
            "children": [],
            "content": content or {},
            "style": {"css": {**(style or {}), "zIndex": str(z)}, "tokens": {}},
            "layout": {},
            "responsiveOverrides": {},
            "interactions": [],
            "visibility": "visible",
            "accessibility": {},
            "bindings": {},
            "metadata": {"displayName": node_id},
        }
        if mobile:
            item["responsiveOverrides"]["mobile"] = {"style": {"css": mobile, "tokens": {}}, "visibility": "visible"}
        nodes[node_id] = item
        nodes[parent]["children"].append(node_id)
        return item

    hero = node("fidelity-hero", "section", root["id"], style=css(left=0, top=0, width="1360px", height="540px", background="#e8eefc"), z=0, mobile={"left": "0px", "top": "0px", "width": "100%", "height": "620px"})
    lower = node("fidelity-lower", "section", root["id"], style=css(left=0, top=540, width="1360px", height="440px", background="#fff7ed"), z=1, mobile={"left": "0px", "top": "620px", "width": "100%", "height": "480px"})

    node("fidelity-heading", "heading", hero["id"], style=css(left=72, top=70, width=540, height=72, fontFamily="Georgia", fontSize="52px", lineHeight="1.05", fontWeight=700, color="#111827", letterSpacing="-0.5px", textAlign="left", opacity=1), content={"text": "Design with intent."}, z=5, mobile={"left": "22px", "top": "34px", "width": "320px", "fontSize": "32px"})
    node("fidelity-paragraph", "paragraph", hero["id"], style=css(left=76, top=165, width=450, height=64, fontFamily="Arial", fontSize="19px", lineHeight="1.45", color="#334155", textAlign="left", opacity="0.88"), content={"text": "A controlled composition proving Studio and published geometry share one document model."}, z=5, mobile={"left": "22px", "top": "118px", "width": "320px", "fontSize": "16px"})
    node("fidelity-button", "button", hero["id"], style=css(left=76, top=265, width=170, height=52, background="#111827", color="#ffffff", borderRadius="26px", fontSize="16px", fontWeight=700, textAlign="center", opacity="0.96"), content={"text": "Explore Studio", "href": "https://example.com/"}, z=10, mobile={"left": "22px", "top": "218px", "width": "170px"})
    node("fidelity-card", "container", hero["id"], style=css(left=740, top=74, width=430, height=310, background="#ffffff", border="1px solid #cbd5e1", borderRadius="24px", opacity="0.94", boxShadow="0 18px 40px rgba(15,23,42,.12)"), z=20, mobile={"left": "22px", "top": "310px", "width": "320px", "height": "240px"})
    node("fidelity-image", "image", hero["id"], style=css(left=770, top=105, width=310, height=248, objectFit="cover", borderRadius="18px", opacity="0.91", rotate="-8deg"), content={"src": asset["url"], "asset_id": asset["id"], "alt": "Blue architecture detail", "crop": {"x": 12, "y": -8, "scale": 1.25}}, z=30, mobile={"left": "40px", "top": "322px", "width": "284px", "height": "210px", "rotate": "0deg"})
    node("fidelity-badge", "container", hero["id"], style=css(left=1070, top=350, width=150, height=54, background="#7c3aed", borderRadius="27px", opacity="0.88", rotate="17deg"), content={"text": "LIVE"}, z=40, mobile={"left": "196px", "top": "254px", "width": "120px"})
    node("fidelity-lower-title", "heading", lower["id"], style=css(left=72, top=64, width=480, height=52, fontFamily="Arial", fontSize="34px", lineHeight="1.15", fontWeight=700, color="#7c2d12"), content={"text": "Responsive by contract."}, z=5, mobile={"left": "22px", "top": "42px", "width": "320px", "fontSize": "27px"})
    node("fidelity-lower-copy", "paragraph", lower["id"], style=css(left=76, top=132, width=520, height=70, fontSize="18px", lineHeight="1.5", color="#7c2d12", opacity="0.82"), content={"text": "Desktop, tablet, and mobile overrides are explicit, isolated, and reloadable."}, z=5, mobile={"left": "22px", "top": "100px", "width": "320px", "fontSize": "15px"})
    node("fidelity-overlay", "container", lower["id"], style=css(left=520, top=100, width=520, height=190, background="#fb7185", borderRadius="20px", opacity="0.55", rotate="4deg"), content={"text": "Overlap"}, z=20, mobile={"left": "22px", "top": "230px", "width": "320px", "height": "140px", "rotate": "0deg"})

    page["nodes"] = nodes
    return document, {"root": root["id"], "nodes": tuple(n for n in nodes if n != root["id"])}


def browser_metrics(page, ids: tuple[str, ...], root_selector: str, *, studio: bool) -> dict:
    return page.evaluate(
        """({ids,rootSelector,studio})=>{
          const root=document.querySelector(rootSelector); if(!root) throw new Error('root missing '+rootSelector);
          const out={};
          for(const id of ids){
            const el=studio?document.querySelector(`[data-studio-id="${id}"]`):document.getElementById(id);
            if(!el) throw new Error('node missing '+id);
            const s=getComputedStyle(el), r=el.getBoundingClientRect(), rr=root.getBoundingClientRect();
            const img=el.tagName==='IMG'?el:el.querySelector('img');
            out[id]={left:parseFloat(s.left)||0,top:parseFloat(s.top)||0,width:parseFloat(s.width)||0,height:parseFloat(s.height)||0,
              rotate:s.rotate||'',transform:s.transform||'',opacity:s.opacity,borderRadius:s.borderRadius,background:s.backgroundColor,color:s.color,
              fontSize:s.fontSize,lineHeight:s.lineHeight,textAlign:s.textAlign,zIndex:s.zIndex,visibility:s.visibility,
              rect:{x:r.x-rr.x,y:r.y-rr.y,w:r.width,h:r.height},
              crop:img?{objectPosition:getComputedStyle(img).objectPosition,transform:getComputedStyle(img).transform}:null,
              styleAttr:el.getAttribute('style')||''};
          }
          return out;
        }""",
        {"ids": ids, "rootSelector": root_selector, "studio": studio},
    )


def compare_metrics(studio: dict, published: dict) -> dict:
    fields = ("left", "top", "width", "height", "opacity", "fontSize", "lineHeight", "textAlign", "zIndex", "visibility", "borderRadius", "background", "color", "rotate")
    failures = []
    max_delta = 0.0
    for node_id in studio:
        a, b = studio[node_id], published.get(node_id)
        if not b:
            failures.append(f"missing published node {node_id}")
            continue
        css_names = {part.split(":", 1)[0].strip().lower() for part in a.get("styleAttr", "").split(";") if ":" in part}
        css_field_names = {"fontSize":"font-size","lineHeight":"line-height","textAlign":"text-align","borderRadius":"border-radius","background":"background","color":"color","opacity":"opacity","zIndex":"z-index","rotate":"rotate","left":"left","top":"top","width":"width","height":"height"}
        for field in fields:
            if field not in {"left", "top", "width", "height", "zIndex", "visibility"} and css_field_names.get(field) not in css_names:
                continue
            if field in {"opacity"}:
                try: delta=abs(float(a[field])-float(b[field]))
                except (TypeError,ValueError): delta=0 if a[field]==b[field] else 1
                limit=.02
            elif field in {"left","top","width","height"}:
                try: delta=abs(float(a[field])-float(b[field]))
                except (TypeError,ValueError): delta=0 if a[field]==b[field] else 999
                limit=1.1
            else:
                delta=0 if a[field]==b[field] else 1
                limit=0
            max_delta=max(max_delta,float(delta))
            if delta>limit:
                failures.append(f"{node_id}.{field}: {a[field]!r} != {b[field]!r}")
        if a.get("crop") and b.get("crop") and a["crop"] != b["crop"]:
            failures.append(f"{node_id}.crop: {a['crop']!r} != {b['crop']!r}")
    return {"pass": not failures, "max_delta": round(max_delta, 4), "failures": failures[:20]}


def screenshot_mae(first: Path, second: Path) -> float:
    a=Image.open(first).convert("RGB").resize((480,320))
    b=Image.open(second).convert("RGB").resize((480,320))
    diff=ImageChops.difference(a,b)
    return round(sum(sum(px) for px in diff.getdata())/(480*320*3*255), 6)


def run(browser_name: str) -> dict:
    reset_db(); client, headers = auth()
    created=client.post("/api/sites",headers=headers,json={"business_name":"Studio fidelity","description":"Controlled publish fidelity page","origin":"AI","industry":"Design"})
    created.raise_for_status(); site_id=created.json()["id"]; slug=created.json()["slug"]
    image=Image.new("RGB",(240,160),(24,84,132)); bio=io.BytesIO(); image.save(bio,format="PNG")
    uploaded=client.post(f"/api/sites/{site_id}/assets",headers=headers,files={"file":("fidelity.png",bio.getvalue(),"image/png")},data={"alt_text":"Blue architecture detail"})
    uploaded.raise_for_status(); asset=uploaded.json()["asset"]
    document=client.post(f"/api/sites/{site_id}/studio-migrate",headers=headers).json()["document"]
    document, manifest=controlled_document(document,asset)
    saved=client.post(f"/api/sites/{site_id}/studio-save",headers=headers,json=document); saved.raise_for_status()
    document["revision"]=saved.json()["newRevision"]
    published=client.post(f"/api/sites/{site_id}/publish",headers=headers,json={})
    if published.status_code not in {200,201}: raise RuntimeError(f"publish failed: {published.status_code} {published.text[:500]}")
    public_html=client.get(f"/s/{slug}").text
    shell=client.get(f"/studio/{site_id}"); shell.raise_for_status()
    OUT.mkdir(parents=True,exist_ok=True); (OUT / f"public-{browser_name}.html").write_text(public_html,encoding="utf-8"); screenshots=[]; viewport_results=[]
    errors=[]
    with sync_playwright() as pw:
        browser=getattr(pw,browser_name).launch(headless=True,args=["--no-sandbox"] if browser_name=="chromium" else None)
        for width in VIEWPORTS:
            height=900 if width>800 else 850
            studio=browser.new_page(viewport={"width":width,"height":height}); studio.expose_function("__backendFetch",bridge(client))
            studio.on("console",lambda msg: errors.append(f"studio:{msg.text}") if msg.type=="error" else None); studio.on("pageerror",lambda exc: errors.append(f"studio:{exc}"))
            studio.set_content(inline_shell(shell.text),wait_until="load"); studio.wait_for_selector('.studio-canvas [data-studio-id="fidelity-heading"]',timeout=15000)
            bp="desktop" if width>=992 else "tablet" if width>=768 else "mobile"
            studio.locator('[data-studio-id="fidelity-heading"]').evaluate("e=>e.click()")
            studio.locator(f'.device-toolbar button[title="{bp}"]').click(); studio.wait_for_timeout(80)
            sm=browser_metrics(studio,manifest["nodes"],'.studio-canvas',studio=True)
            sp=OUT/f"studio-{browser_name}-{width}.png"; studio.locator('.studio-canvas').screenshot(path=str(sp))
            public=browser.new_page(viewport={"width":width,"height":height})
            public.route("**/media/**",lambda route: route.fulfill(body=bio.getvalue(),content_type="image/png"))
            public.set_content(public_html.replace("<head>",'<head><base href="http://testserver/">'),wait_until="load"); public.wait_for_selector('body > .z-node',timeout=10000)
            pm=browser_metrics(public,manifest["nodes"],'body > .z-node',studio=False)
            pp=OUT/f"published-{browser_name}-{width}.png"; public.locator('body > .z-node').screenshot(path=str(pp))
            result=compare_metrics(sm,pm); result.update({"viewport":width,"breakpoint":bp,"studio_nodes":len(sm),"published_nodes":len(pm),"screenshot_mae":screenshot_mae(sp,pp),"studio_metrics":sm,"published_metrics":pm})
            viewport_results.append(result); screenshots.extend([str(sp),str(pp)])
            studio.close(); public.close()
        browser.close()
    result={"browser":browser_name,"viewports":viewport_results,"errors":errors,"screenshots":screenshots,"pass":not errors and all(x["pass"] for x in viewport_results)}
    (OUT/f"studio-publish-fidelity-{browser_name}.json").write_text(json.dumps(result,indent=2),encoding="utf-8")
    return result


if __name__ == "__main__":
    selected=sys.argv[1:] or ["chromium"]
    results=[run(name) for name in selected]
    print(json.dumps(results,indent=2))
    if not all(r["pass"] for r in results): raise SystemExit(1)
