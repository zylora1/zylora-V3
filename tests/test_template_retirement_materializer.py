import json

from sqlalchemy import text

from app.db import SessionLocal
from app.studio_document import validate_studio_document
from app.studio_legacy_materializer import dependency_counts, materialize_all
from tests.test_ai_first_rebuild import auth, reset_db


def test_legacy_materializer_preserves_site_identity_and_creates_independent_v4_snapshots():
    reset_db()
    client,headers=auth()
    created=client.post('/api/sites',headers=headers,json={
        'business_name':'Retirement Contract',
        'description':'A controlled site used to prove template retirement preserves instantiated websites.',
        'origin':'AI','industry':'Business','style':'Editorial',
    })
    assert created.status_code==200
    site_id=created.json()['id']
    publish=client.post(f'/api/sites/{site_id}/publish',headers=headers,json={})
    assert publish.status_code==200
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE sites SET studio_document_json=NULL,published_studio_document_json=NULL,renderer_state='LEGACY' WHERE id=:site"),{'site':site_id})
        before=dependency_counts(db)
        assert before['draft_dependencies']==1 and before['public_dependencies']==1
        result=materialize_all(db,apply=True)
        assert result['failures']==[]
        assert result['after']['draft_dependencies']==0
        assert result['after']['public_dependencies']==0
    with SessionLocal() as db:
        row=dict(db.execute(text('SELECT * FROM sites WHERE id=:site'),{'site':site_id}).mappings().one())
    assert row['id']==site_id
    assert row['renderer_state']=='V4'
    draft=validate_studio_document(json.loads(row['studio_document_json']))
    public=validate_studio_document(json.loads(row['published_studio_document_json']))
    assert draft.pages and public.pages
    assert draft.metadata['materializedFromLegacy'] is True
    assert public.metadata['publishedSnapshot'] is True
    assert row['legacy_snapshot_backup_json'] or row['legacy_structure_backup_json']
