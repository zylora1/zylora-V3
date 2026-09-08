from __future__ import annotations
import json
from html.parser import HTMLParser
from pathlib import Path
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[1]
import sys
sys.path.insert(0, str(ROOT))
from app.main import app

class HeadParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.in_head=False; self.title=''; self._in_title=False; self.metas=[]; self.links=[]; self.scripts=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if tag=='head': self.in_head=True
        if not self.in_head: return
        if tag=='meta': self.metas.append(attrs)
        elif tag=='link': self.links.append(attrs)
        elif tag=='script': self.scripts.append({'attrs':attrs,'data':''})
        elif tag=='title': self._in_title=True
    def handle_endtag(self, tag):
        if tag=='head': self.in_head=False
        if tag=='title': self._in_title=False
    def handle_data(self, data):
        if self._in_title: self.title += data
        if self.in_head and self.scripts: self.scripts[-1]['data'] += data

def one(items, **criteria):
    for item in items:
        if all(item.get(k)==v for k,v in criteria.items()): return item
    return None

checks=[]; errors=[]
def check(ok,label):
    checks.append(label)
    if not ok: errors.append(label)

with TestClient(app) as c:
    r=c.get('/'); check(r.status_code==200,'landing returns 200')
    p=HeadParser(); p.feed(r.text)
    check(30 <= len(p.title.strip()) <= 65,'title length is search-friendly')
    desc=one(p.metas,name='description'); check(bool(desc and 120 <= len(desc.get('content','')) <= 180),'meta description is present and useful length')
    robots=one(p.metas,name='robots'); check(bool(robots and 'index' in robots.get('content','') and 'max-image-preview:large' in robots.get('content','')),'robots meta enables rich previews')
    canonical=one(p.links,rel='canonical'); check(bool(canonical and canonical.get('href','').startswith('http')),'absolute canonical URL present')
    check(bool(one(p.links,rel='manifest')),'web manifest linked')
    check(bool(one(p.metas,property='og:title') and one(p.metas,property='og:description') and one(p.metas,property='og:image')),'Open Graph title/description/image present')
    check(bool(one(p.metas,name='twitter:card') and one(p.metas,name='twitter:title') and one(p.metas,name='twitter:image')),'Twitter card metadata present')
    ld=[s for s in p.scripts if s['attrs'].get('type')=='application/ld+json']
    ok_ld=False; types=set()
    for s in ld:
        try:
            data=json.loads(s['data']); graph=data.get('@graph',[]); types={x.get('@type') for x in graph}; ok_ld=True
        except Exception: pass
    check(ok_ld,'JSON-LD parses as valid JSON')
    check({'Organization','WebSite','SoftwareApplication','FAQPage'} <= types,'Organization, WebSite, SoftwareApplication and FAQPage schemas present')
    # Platform templates are retired. The public route intentionally redirects
    # to signup; it is not an indexable catalogue page anymore.
    tr=c.get('/templates',follow_redirects=False)
    check(tr.status_code==307 and tr.headers.get('location')=='/signup','retired templates route redirects to signup')
    rr=c.get('/robots.txt'); check(rr.status_code==200 and 'Sitemap:' in rr.text and 'Disallow: /dashboard' in rr.text,'robots.txt exposes sitemap and protects private routes')
    sm=c.get('/sitemap.xml'); check(sm.status_code==200 and '<urlset' in sm.text and '/blog' in sm.text and '/templates' not in sm.text,'dynamic sitemap contains current public routes and excludes retired templates')
    mf=c.get('/manifest.webmanifest'); check(mf.status_code==200 and 'application/manifest+json' in mf.headers.get('content-type',''),'manifest endpoint has correct content type')
    og=c.get('/static/og-zylora.webp'); check(og.status_code==200 and len(og.content)>1000,'Open Graph image is locally served')
    llms=c.get('/llms.txt'); check(llms.status_code==200 and 'Zylora' in llms.text,'llms.txt is available')

report={'checks':len(checks),'errors':errors,'items':checks}
(ROOT/'data'/'seo-audit.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(f"SEO CHECKS: {len(checks)}")
print(f"ERRORS: {len(errors)}")
for e in errors: print('ERROR',e)
raise SystemExit(1 if errors else 0)
