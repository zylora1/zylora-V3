from __future__ import annotations
import re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
errors=[]; templates=0; refs=0; iframes=0
mutable=[r'@(?:next|latest|\^|~)',r'@v?\d+\.x(?:\.x)?',r'/npm/(?:swiper|bootstrap|alpinejs|isotope-layout)(?:/|$)']
for project in sorted((ROOT/'template_projects').glob('*')):
    if not (project/'metadata.json').exists():continue
    templates+=1
    for p in (project/'render').glob('*.html'):
        s=p.read_text(encoding='utf-8',errors='ignore')
        if re.search(r'<img\b[^>]*\bsrc=["\']https?://',s,re.I):errors.append(f'{project.name}/{p.name}: remote production image')
        for tag in re.findall(r'<script\b[^>]*\bsrc=["\']https?://[^>]+>',s,re.I):
            refs+=1; u=re.search(r'\bsrc=["\']([^"\']+)',tag,re.I).group(1)
            if any(re.search(x,u,re.I) for x in mutable):errors.append(f'{project.name}/{p.name}: mutable executable dependency {u}')
        for tag in re.findall(r'<iframe\b[^>]*\bsrc=["\']https?://[^>]+>',s,re.I):
            iframes+=1
            for attr in ('loading=','title=','referrerpolicy='):
                if attr not in tag.lower():errors.append(f'{project.name}/{p.name}: external iframe missing {attr[:-1]}')
print(f'template_dependency_security_qa: {templates} templates; {refs} external scripts; {iframes} external iframes; errors {len(errors)}')
for e in errors[:100]:print('ERROR',e)
sys.exit(1 if errors else 0)
