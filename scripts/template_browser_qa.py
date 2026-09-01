from __future__ import annotations
import json,sys
from pathlib import Path
from fastapi.testclient import TestClient
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from app.main import app
OUT=ROOT/'data'/'template-browser-qa.json';c=TestClient(app)
j=c.get('/api/templates').json();items=j.get('items') or [];errors=[]
for t in items:
 slug=t['slug']; p=c.get('/template-preview/'+slug)
 if p.status_code!=200 or '<html' not in p.text.lower(): errors.append(f'{slug}: preview {p.status_code}')
 preview=ROOT/str(t.get('preview','')).lstrip('/')
 if not preview.exists() or preview.stat().st_size<500: errors.append(f'{slug}: thumbnail missing/empty')
report={'templates':len(items),'errors':errors};OUT.parent.mkdir(exist_ok=True);OUT.write_text(json.dumps(report,indent=2))
print(f"template_browser_qa: {len(items)} templates; errors {len(errors)}")
for e in errors:print('ERROR',e)
sys.exit(1 if len(items)!=40 or errors else 0)
