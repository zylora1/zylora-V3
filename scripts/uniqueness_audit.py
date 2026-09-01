from __future__ import annotations
import hashlib,json,re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
import sys; sys.path.insert(0,str(ROOT))
from app.templates import TEMPLATES
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'data'/'template-uniqueness-qa.json'
groups={}
for t in TEMPLATES:
 p=ROOT/'template_projects'/t['slug']/'render'/'home.html'; s=p.read_text(encoding='utf-8',errors='ignore')
 s=re.sub(r'\s+',' ',s).strip(); h=hashlib.sha256(s.encode()).hexdigest();groups.setdefault(h,[]).append(t['slug'])
dupes=[v for v in groups.values() if len(v)>1]
report={'templates':len(TEMPLATES),'exact_duplicate_groups':dupes,'unique_hashes':len(groups)};OUT.parent.mkdir(exist_ok=True);OUT.write_text(json.dumps(report,indent=2))
print(f"uniqueness_audit: {len(TEMPLATES)} templates; exact duplicate groups {len(dupes)}")
for d in dupes: print('ERROR duplicate',','.join(d))
sys.exit(1 if dupes else 0)
