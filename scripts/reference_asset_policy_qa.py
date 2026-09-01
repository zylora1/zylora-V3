from __future__ import annotations
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
errors=[]
for meta_path in sorted((ROOT/'template_projects').glob('*/metadata.json')):
    try: meta=json.loads(meta_path.read_text(encoding='utf-8'))
    except Exception as e:
        errors.append(f'{meta_path.parent.name}: invalid metadata: {e}'); continue
    ref=int(meta.get('reference') or 0)
    if not ref: continue
    # Hidden templates are skipped until their strict re-audit starts.
    if meta.get('hidden') and not meta.get('reference_reaudit_status'):
        continue
    manifest_path=meta_path.parent/'assets-manifest.json'
    if not manifest_path.exists():
        errors.append(f'{meta_path.parent.name}: missing assets-manifest.json'); continue
    man=json.loads(manifest_path.read_text(encoding='utf-8'))
    medium=str(man.get('reference_medium','')).lower()
    photographic='photo' in medium
    if ref>=2 and photographic:
        if man.get('real_photo_search_required') is not True:
            errors.append(f'{meta_path.parent.name}: photographic reference must require real-photo search')
        if man.get('ai_generated_photography_allowed') is not False:
            errors.append(f'{meta_path.parent.name}: AI photographic imagery must be explicitly prohibited')
        selected=(man.get('asset_search') or {}).get('selected_candidates') or []
        blocked=[x for x in selected if x.get('localization')!='LOCALIZED']
        final=[x for x in man.get('assets') or [] if x.get('final_role_asset') is True]
        if blocked:
            errors.append(f'{meta_path.parent.name}: {len(blocked)} selected real-photo candidates are not localized')
        if not final:
            errors.append(f'{meta_path.parent.name}: no final role-specific real photographic assets recorded')
        render=(meta_path.parent/'render/home.html').read_text(encoding='utf-8') if (meta_path.parent/'render/home.html').exists() else ''
        if '<img' not in render:
            errors.append(f'{meta_path.parent.name}: reference 2+ requires a visible hero/image system')
        if any(x in render for x in ['meridian-rhythm.svg','meridian-stillness.svg','meridian-rest.svg','meridian-movement.svg','meridian-portrait.svg']):
            errors.append(f'{meta_path.parent.name}: obsolete illustration assets remain in rendered page')
if errors:
    print('reference_asset_policy_qa: FAIL')
    for e in errors: print(' -',e)
    raise SystemExit(1)
print('reference_asset_policy_qa: PASS')
