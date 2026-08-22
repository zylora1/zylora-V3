from pathlib import Path
from PIL import Image
import re, sys
root=Path(__file__).resolve().parents[1]
web=root/'apps/web'
errors=[]
files=sorted((web/'templates').glob('template-*.tsx'))
if len(files)!=1008: errors.append(f'web template count {len(files)} != 1008')
reg=(web/'lib/templateRegistry.ts').read_text(encoding='utf-8')
if '../../../templates' in reg: errors.append('registry still imports templates outside Next app root')
imports=re.findall(r'import\("\.\./templates/template-[^\"]+"\)',reg)
if len(imports)!=1008: errors.append(f'local registry imports {len(imports)} != 1008')
if "../templates/types" not in reg: errors.append('registry type import is not local to apps/web')
turn=(web/'components/Turnstile.tsx').read_text(encoding='utf-8')
if 'useRef<string|undefined>(undefined)' not in turn: errors.append('Turnstile React 19 useRef fix missing')
nav=(web/'components/MarketingNav.tsx')
if not nav.exists(): errors.append('MarketingNav missing')
else:
    t=nav.read_text(encoding='utf-8')
    for token in ['aria-expanded','mobile-menu','Menu','X','Managed by experts','Templates']:
        if token not in t: errors.append(f'MarketingNav missing {token}')
css=(web/'app/globals.css').read_text(encoding='utf-8')
for token in ['.menuButton{display:none', '.mobileMenu.open', '@media(max-width:520px)', '.dashhead>.muted']:
    if token not in css: errors.append(f'CSS regression fix missing {token}')
for name in ['zylora-logo.png','zylora-mark.png']:
    p=web/'public'/name
    im=Image.open(p)
    if im.format!='PNG': errors.append(f'{name} is not actual PNG')
    if im.mode!='RGBA': errors.append(f'{name} not RGBA')
    else:
        a=im.getchannel('A')
        lo,hi=a.getextrema()
        if lo!=0 or hi!=255: errors.append(f'{name} missing transparent and opaque pixels: {lo},{hi}')
if errors:
    print('FRONTEND BUILD REGRESSION AUDIT FAIL')
    print('\n'.join(errors))
    sys.exit(1)
print('FRONTEND BUILD REGRESSION AUDIT PASS: 1008 local templates, local registry imports, React 19 Turnstile ref, mobile nav, transparent PNG logos, narrow dashboard spacing')
