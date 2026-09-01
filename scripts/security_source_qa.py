from __future__ import annotations
import json,re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'data'/'security-source-qa.json'
roots=[ROOT/'app',ROOT/'static',ROOT/'scripts']; exts={'.py','.js','.jsx','.ts','.tsx','.html','.css','.yml','.yaml'}
secret_patterns=[('openai_key',re.compile(r'\bsk-[A-Za-z0-9_-]{20,}')),('razorpay_live',re.compile(r'\brzp_live_[A-Za-z0-9]{8,}')),('private_key',re.compile(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'))]
stale_patterns=[('raw_price_var',re.compile(r'\{\{(?:STARTER|GROWTH)_(?:USD|INR)\}\}')),('internal_haulix',re.compile(r'\bHaulix\b',re.I)),('catalogue_rebuild_copy',re.compile(r'Rebuilding the catalogue from zero',re.I))]
errors=[];files=0
for base in roots:
 for p in base.rglob('*'):
  if not p.is_file() or p.suffix.lower() not in exts or p.name=='security_source_qa.py':continue
  files+=1;s=p.read_text(encoding='utf-8',errors='ignore')
  for label,pat in secret_patterns+stale_patterns:
   if pat.search(s):errors.append({'file':str(p.relative_to(ROOT)),'kind':label})
report={'files_scanned':files,'errors':errors};OUT.parent.mkdir(exist_ok=True);OUT.write_text(json.dumps(report,indent=2))
print(f'security_source_qa: {files} files; errors {len(errors)}')
for e in errors[:50]:print('ERROR',e)
sys.exit(1 if errors else 0)
