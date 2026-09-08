from __future__ import annotations
import json, re, sys
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup

ROOT=Path(__file__).resolve().parents[1]
STATIC=ROOT/'static'
OUT=ROOT/'data'/'control-inventory-qa.json'

ALLOWED_SCHEMES={'','http','https','mailto','tel'}
SKIP_HTML={'template-preview.html'}  # render-only shell; dynamic template controls exercised elsewhere

def source_for(html_path:Path,soup:BeautifulSoup)->str:
    parts=[]
    for tag in soup.find_all('script'):
        src=tag.get('src')
        if src:
            if src.startswith('/static/'):
                p=STATIC/src.split('/static/',1)[1].split('?',1)[0]
                if p.exists() and p.is_file(): parts.append(p.read_text(encoding='utf-8',errors='ignore'))
        else:
            parts.append(tag.get_text('\n'))
    return '\n'.join(parts)

def token_candidates(button):
    out=[]
    bid=button.get('id')
    if bid: out += [bid, f'#{bid}']
    for k,v in button.attrs.items():
        if not k.startswith('data-') or k=='data-testid': continue
        vals=v if isinstance(v,list) else [v]
        out.append(k)
        out.extend(str(x) for x in vals if str(x))
        camel=''.join([k[5:].split('-')[0]]+[x.title() for x in k[5:].split('-')[1:]])
        out.append(camel)
    testid=button.get('data-testid')
    if testid: out.append(testid)
    return [x for x in out if x]

def has_handler(button, source:str)->tuple[bool,str]:
    if button.get('disabled') is not None:
        return True,'disabled-static'
    if button.get('onclick'):
        return True,'inline-onclick'
    typ=(button.get('type') or 'submit').lower()
    form=button.find_parent('form')
    if typ=='submit' and form is not None:
        fid=form.get('id')
        # Native submit is valid if JS wires the form explicitly or a generic form variable/listener is used.
        if fid and (fid in source or f'#{fid}' in source): return True,'form-submit'
        if re.search(r"querySelector\(['\"]form['\"]\)|\.addEventListener\(['\"]submit['\"]",source): return True,'generic-form-submit'
        # HTML form action alone is a valid native workflow.
        if form.get('action'): return True,'native-form-action'
    toks=token_candidates(button)
    for tok in toks:
        if tok in source:
            return True,'js-token'
    # buttons inside dialog close groups may be generically delegated by class/attribute
    cls=button.get('class') or []
    for c in cls:
        if c and c in source: return True,'js-class'
    return False,'unwired'

def anchor_valid(a)->tuple[bool,str]:
    href=(a.get('href') or '').strip()
    if not href:
        # JS-only links need some binding token or inline onclick, checked separately below.
        return False,'empty-href'
    if href=='#': return False,'placeholder-href'
    if href.lower().startswith(('javascript:','data:','vbscript:')): return False,'unsafe-scheme'
    if href.startswith('#'): return True,'fragment'
    parsed=urlparse(href)
    if parsed.scheme.lower() not in ALLOWED_SCHEMES: return False,'unsupported-scheme'
    return True,'href'

def main():
    errors=[]; buttons=[]; links=[]
    for html_path in sorted(STATIC.glob('*.html')):
        if html_path.name in SKIP_HTML: continue
        text=html_path.read_text(encoding='utf-8',errors='ignore')
        soup=BeautifulSoup(text,'html.parser')
        source=source_for(html_path,soup)
        for i,b in enumerate(soup.find_all('button'),1):
            # The landing page contains a static Studio illustration. Its
            # sample CTA is intentionally artwork, not an actionable control;
            # exclude it from the user-control inventory rather than treating
            # decorative copy as a product interaction.
            if html_path.name == 'index.html' and b.find_parent(class_='zr-artboard') is not None:
                continue
            ok,why=has_handler(b,source)
            rec={'page':html_path.name,'index':i,'text':' '.join(b.stripped_strings)[:90],'id':b.get('id'),'type':b.get('type') or 'submit','ok':ok,'reason':why}
            buttons.append(rec)
            if not ok: errors.append({'kind':'button',**rec})
        for i,a in enumerate(soup.find_all('a'),1):
            href=(a.get('href') or '').strip()
            ok,why=anchor_valid(a)
            if not ok:
                # accept JS-wired anchors only when id/class/data token is explicitly referenced by page JS
                toks=[]
                if a.get('id'): toks.append(a.get('id'))
                toks += [x for x in (a.get('class') or []) if x]
                for k,v in a.attrs.items():
                    if k.startswith('data-'):
                        toks.append(k); toks.extend(v if isinstance(v,list) else [v])
                if a.get('onclick') or any(str(t) in source for t in toks if str(t)):
                    ok=True; why='js-wired'
            rec={'page':html_path.name,'index':i,'text':' '.join(a.stripped_strings)[:90],'href':href,'ok':ok,'reason':why}
            links.append(rec)
            if not ok: errors.append({'kind':'link',**rec})
    report={'buttons':buttons,'links':links,'button_total':len(buttons),'button_passed':sum(x['ok'] for x in buttons),'link_total':len(links),'link_passed':sum(x['ok'] for x in links),'errors':errors}
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(f"control_inventory_qa: buttons {report['button_passed']}/{report['button_total']}; links {report['link_passed']}/{report['link_total']}; errors {len(errors)}")
    for e in errors[:80]: print('ERROR',e)
    return 1 if errors else 0
if __name__=='__main__': sys.exit(main())
