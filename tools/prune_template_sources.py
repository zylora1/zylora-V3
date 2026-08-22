from pathlib import Path
import re
import tinycss2

ROOT=Path(__file__).resolve().parents[1]
T=ROOT/'apps/web/templates'

def used_classes_from_jsx(jsx:str):
    classes=set()
    for x in re.findall(r'className="([^"]+)"',jsx):
        classes.update(x.split())
    for x in re.findall(r'className=\{`([^`]+)`\}',jsx):
        literal=re.sub(r'\$\{.*?\}','',x)
        classes.update(literal.split())
        for pref in re.findall(r'\b([A-Za-z_-]+)\$\{',x):
            classes.update(f'{pref}{i}' for i in range(12))
    return classes

def filter_selector_list(prelude,used,rootclass):
    text=tinycss2.serialize(prelude).strip()
    kept=[]
    for sel in [x.strip() for x in text.split(',') if x.strip()]:
        c=set(re.findall(r'\.([A-Za-z_][\w-]*)',sel)); c.discard(rootclass)
        if not c or c.issubset(used): kept.append(sel)
    return ','.join(kept)

def filter_rule_list(tokens,used,rootclass):
    out=[]
    for rule in tokens:
        if rule.type=='qualified-rule':
            pre=filter_selector_list(rule.prelude,used,rootclass)
            if pre: out.append(pre+'{'+tinycss2.serialize(rule.content)+'}')
        elif rule.type=='at-rule':
            name=rule.at_keyword.lower(); pre=tinycss2.serialize(rule.prelude).strip()
            if name=='media' and rule.content is not None:
                inner=tinycss2.parse_rule_list(rule.content,skip_whitespace=True,skip_comments=True)
                body=filter_rule_list(inner,used,rootclass)
                if body.strip(): out.append('@media '+pre+'{'+body+'}')
            elif rule.content is not None:
                out.append('@'+name+(' '+pre if pre else '')+'{'+tinycss2.serialize(rule.content)+'}')
            else:
                out.append('@'+name+(' '+pre if pre else '')+';')
    return '\n'.join(out)

files=list(T.glob('template-*.tsx')); removed_consts=0; before=0; after=0
for p in files:
    s=p.read_text(encoding='utf-8'); before+=len(s)
    # Remove constants never referenced outside their declaration.
    lines=[]
    for line in s.splitlines():
        m=re.match(r'\s*const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=',line)
        if m and len(re.findall(rf'\b{re.escape(m.group(1))}\b',s))==1:
            removed_consts+=1; continue
        lines.append(line)
    s='\n'.join(lines)+'\n'
    m=re.search(r'<style>\{`(.*?)`\}</style>',s,re.S)
    if m:
        jsx=s[:m.start()]+s[m.end():]
        used=used_classes_from_jsx(jsx)
        rm=re.search(r'className="(zp\d{4})"',jsx)
        if rm:
            rootclass=rm.group(1)
            rules=tinycss2.parse_stylesheet(m.group(1),skip_whitespace=True,skip_comments=True)
            filtered=filter_rule_list(rules,used,rootclass)
            s=s[:m.start(1)]+filtered+s[m.end(1):]
    p.write_text(s,encoding='utf-8'); after+=len(s)
print({'files':len(files),'removed_unused_consts':removed_consts,'bytes_before':before,'bytes_after':after,'reduction_percent':round((before-after)/before*100,2)})
