from __future__ import annotations
import json,re,sys
from pathlib import Path
from bs4 import BeautifulSoup
ROOT=Path(__file__).resolve().parents[1];STATIC=ROOT/'static';OUT=ROOT/'data'/'platform-responsive-qa.json'
widths=[1440,1280,1024,768,430,390,375,360];pages=['index.html','templates.html','login.html','signup.html','choose-plan.html','dashboard.html','editor.html']
errors=[];checks=[]
for page in pages:
 p=STATIC/page
 if not p.exists(): errors.append(f'{page}: missing');continue
 soup=BeautifulSoup(p.read_text(encoding='utf-8',errors='ignore'),'html.parser');vp=soup.find('meta',attrs={'name':'viewport'})
 if not vp or 'width=device-width' not in (vp.get('content') or ''): errors.append(f'{page}: viewport meta missing')
 css='\n'.join((STATIC/(l.get('href') or '').split('/static/')[-1]).read_text(encoding='utf-8',errors='ignore') for l in soup.find_all('link',rel='stylesheet') if (l.get('href') or '').startswith('/static/') and (STATIC/(l.get('href') or '').split('/static/')[-1]).exists())
 css_scan=re.sub(r'@media\s*\([^)]*\)', '@media', css, flags=re.I)
 for w in widths:
  bad=[m.group(0) for m in re.finditer(r'min-width\s*:\s*(\d{4,})px',css_scan,re.I) if int(re.search(r'\d+',m.group(0)).group())>w]
  checks.append({'page':page,'width':w,'large_min_width_rules':len(bad)})
  if bad: errors.append(f'{page}@{w}: fixed min-width can overflow ({bad[0]})')
report={'widths':widths,'checks':checks,'errors':errors};OUT.parent.mkdir(exist_ok=True);OUT.write_text(json.dumps(report,indent=2))
print(f"platform_responsive_qa: {len(checks)} checks across {len(widths)} widths; errors {len(errors)}")
for e in errors[:30]:print('ERROR',e)
sys.exit(1 if errors else 0)
