from __future__ import annotations
import json
from pathlib import Path
from app.templates import TEMPLATES
ROOT=Path(__file__).resolve().parents[1]


def test_licensed_40_catalogue_replaces_prior_template_projects():
    summary=json.loads((ROOT/'data/licensed-40-ingestion-summary.json').read_text(encoding='utf-8'))
    assert summary['input_packages']==40
    assert summary['accepted_into_library']==40
    assert len(summary['templates'])==40
    projects=sorted(p for p in (ROOT/'template_projects').iterdir() if p.is_dir())
    assert len(projects)==40
    assert {p.name for p in projects}=={item['slug'] for item in summary['templates']}
    for project in projects:
        meta=json.loads((project/'metadata.json').read_text(encoding='utf-8'))
        gate=json.loads((project/'verification/render-gate.json').read_text(encoding='utf-8'))
        assert meta['source']['fidelity']=='licensed_archive'
        assert meta['rights']['mode']=='user_supplied_licensed_archive'
        assert meta['rights']['user_attested_commercial_builder_rights'] is True
        assert meta['publication']=={'state':'public','render_gate':'passed'}
        assert gate['status']=='passed' and gate['user_license_attestation'] is True
        assert (ROOT/'static/template-previews'/f"{meta['slug']}.png").is_file()
    assert len(TEMPLATES)==40
    assert all(t.get('publication',{}).get('state')=='public' for t in TEMPLATES)


def test_capacity_policy_requires_unique_real_assets():
    policy=json.loads((ROOT/'data/batch-policy.json').read_text(encoding='utf-8'))
    assert policy['fixed_batch_size'] is False
    assert policy['mode']=='capacity_driven'
    images=policy['requirements']['images']
    assert images['ai_photography_allowed'] is False
    assert images['production_hotlinks'] is False
    assert images['reuse_within_template'] is False
    assert images['reuse_within_batch'] is False
    assert images['unique_source_url_per_placement'] is True
    assert images['unique_binary_hash_per_placement'] is True
