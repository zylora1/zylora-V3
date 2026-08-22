from pathlib import Path
import json,hashlib,itertools,re,statistics,sys
ROOT=Path(__file__).resolve().parents[1]
T=ROOT/'apps/web/templates'; CAT=ROOT/'apps/web/public/template-catalogue.json'; MAN=ROOT/'apps/web/public/template-design-manifests.json'; REG=ROOT/'apps/web/lib/templateRegistry.ts'
cat=json.loads(CAT.read_text(encoding='utf-8')); manifests=json.loads(MAN.read_text(encoding='utf-8')); files=sorted(T.glob('template-*.tsx'))
errors=[]
def req(ok,msg):
    if not ok: errors.append(msg)
req(len(cat)==1008,f'catalogue count {len(cat)} != 1008');req(len(manifests)==1008,f'manifest count {len(manifests)} != 1008');req(len(files)==1008,f'file count {len(files)} != 1008')
keys=[x['key'] for x in cat];req(len(set(keys))==1008,'duplicate template ids');req(len({x['file'] for x in cat})==1008,'duplicate implementation files')
req(all(1<=int(x['page_count'])<=10 for x in cat),'page count out of range')
reg=REG.read_text(encoding='utf-8'); req(sum(1 for k in keys if json.dumps(k) in reg)==1008,'registry missing keys')
source_hashes=[]; structural=[]
for x,m in zip(cat,manifests):
    p=T/x['file'];req(p.exists(),f'missing {x["file"]}')
    if not p.exists():continue
    s=p.read_text(encoding='utf-8');source_hashes.append(hashlib.sha256(s.encode()).hexdigest());structural.append(m['structural_signature'])
    for needle in ['SiteTemplateProps','content = {}','theme = {}','businessName','headline','description','heroImage','imageAlt','prefers-reduced-motion','id="contact"']:
        req(needle in s,f'{x["key"]} missing {needle}')
    for width in (1024,768,430):
        req(re.search(rf'@media\s*\(max-width:{width}px\)',s) is not None,f'{x["key"]} missing responsive media {width}px')
    req('GenericTemplate' not in s,f'{x["key"]} uses GenericTemplate')
req(len(set(source_hashes))==1008,'source hashes not unique');req(len(set(structural))==1008,'structural signatures not unique')

def seq_similarity(a,b):
    sa=a['section_architecture'];sb=b['section_architecture'];
    inter=len(set(sa)&set(sb));union=max(1,len(set(sa)|set(sb)));j=inter/union
    pos=sum(1 for i,x in enumerate(sa) if i<len(sb) and sb[i]==x)/max(len(sa),len(sb))
    return .65*j+.35*pos

def similarity(a,b):
    score=0
    score+=.13*(a['design_style']==b['design_style']);score+=.12*(a['layout_archetype']==b['layout_archetype']);score+=.12*(a['hero_archetype']==b['hero_archetype']);score+=.09*(a['navigation_pattern']==b['navigation_pattern']);score+=.08*(a['typography_personality']==b['typography_personality']);score+=.05*(a['palette_family']==b['palette_family']);score+=.06*(a['geometry_language']==b['geometry_language']);score+=.05*(a['motion_language']==b['motion_language']);score+=.05*(a['conversion_goal']==b['conversion_goal']);score+=.25*seq_similarity(a,b)
    return score
near=[]; max_pair=(0,None,None)
for i in range(len(manifests)):
    a=manifests[i]
    for j in range(i+1,len(manifests)):
        b=manifests[j];s=similarity(a,b)
        if s>max_pair[0]:max_pair=(s,a['template_id'],b['template_id'])
        if s>=.86:near.append((round(s,4),a['template_id'],b['template_id']))
req(not near,f'{len(near)} near duplicate pairs >= .86')
# Random-50 deterministic structural + normalized-source audit.
ids=[(i*37+19)%1008 for i in range(50)];sample=[manifests[i] for i in ids];sample_sigs={m['structural_signature'] for m in sample};req(len(sample_sigs)==50,'random-50 structural duplicate')
file_for_key={x['key']:x['file'] for x in cat}
def normalized_source_tokens(text):
    # Remove values that legitimately vary per customer/template so the audit measures
    # composition/code topology instead of rewarding different copy, colours or IDs.
    text=re.sub(r'/\*.*?\*/',' ',text,flags=re.S)
    text=re.sub(r'//[^\n]*',' ',text)
    text=re.sub(r'(["\'`])(?:\\.|(?!\1).)*\1',' STR ',text,flags=re.S)
    text=re.sub(r'\b\d+(?:\.\d+)?\b',' NUM ',text)
    text=re.sub(r'Template\d+',' TemplateN ',text)
    text=re.sub(r'template-\d+',' template-N ',text)
    return re.findall(r'[A-Za-z_$][\w$-]*|=>|===|!==|&&|\|\||[{}()\[\].,:;<>+*/=-]',text)
def shingles(tokens,n=12):
    return {tuple(tokens[i:i+n]) for i in range(max(0,len(tokens)-n+1))}
source_sets={}
for m in sample:
    src=(T/file_for_key[m['template_id']]).read_text(encoding='utf-8')
    source_sets[m['template_id']]=shingles(normalized_source_tokens(src))
source_max=(0,None,None);source_scores=[]
for i,a in enumerate(sample):
    A=source_sets[a['template_id']]
    for b in sample[i+1:]:
        B=source_sets[b['template_id']];union=len(A|B)
        sim=(len(A&B)/union) if union else 1.0
        source_scores.append(sim)
        if sim>source_max[0]:source_max=(sim,a['template_id'],b['template_id'])
# A high score here indicates the files are effectively the same implementation even
# if manifest metadata differs. Keep this stricter than the manifest-only gate.
req(source_max[0] < .82,f'random-50 normalized source similarity too high: {source_max[0]:.4f} {source_max[1]} vs {source_max[2]}')
stats={
 'total_templates':len(cat),'unique_ids':len(set(keys)),'unique_implementation_files':len(set(x['file'] for x in cat)),'industry_count':len(set(m['industry_tags'][0] for m in manifests)),'design_style_count':len(set(m['design_style'] for m in manifests)),'layout_archetype_count':len(set(m['layout_archetype'] for m in manifests)),'hero_archetype_count':len(set(m['hero_archetype'] for m in manifests)),'navigation_pattern_count':len(set(m['navigation_pattern'] for m in manifests)),'typography_system_count':len(set(m['typography_personality'] for m in manifests)),'geometry_count':len(set(m['geometry_language'] for m in manifests)),'motion_language_count':len(set(m['motion_language'] for m in manifests)),'structural_signatures':len(set(structural)),'source_hashes':len(set(source_hashes)),'near_duplicate_pairs':len(near),'max_similarity':round(max_pair[0],4),'max_similarity_pair':max_pair[1:],'random_50_unique':len(sample_sigs),'random_50_source_max_similarity':round(source_max[0],4),'random_50_source_max_pair':source_max[1:],'random_50_source_mean_similarity':round(statistics.mean(source_scores),4) if source_scores else 0,'errors':errors,
 'templates_by_page_count':{str(n):sum(1 for x in cat if x['page_count']==n) for n in range(1,11)}
}
(ROOT/'PREMIUM_CATALOGUE_AUDIT.json').write_text(json.dumps(stats,indent=2),encoding='utf-8')
print(json.dumps(stats,indent=2))
sys.exit(1 if errors else 0)
