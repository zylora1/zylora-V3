from __future__ import annotations

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal
from app.main import app
from app.credits import grant_topup
from app.sales_assistant import save_site_config, search_business_knowledge
from tests.test_ai_first_rebuild import auth, reset_db


def _site(client:TestClient,headers:dict,name:str)->str:
    response=client.post('/api/sites',headers=headers,json={
        'business_name':name,
        'description':'A production CMS test website with editorial content and contact information.',
        'origin':'AI','industry':'Publishing','style':'Editorial',
    })
    assert response.status_code == 200, response.text
    return response.json()['id']


def _collection(client:TestClient,headers:dict,site_id:str,name:str='Articles')->dict:
    response=client.post(f'/api/sites/{site_id}/cms/collections',headers=headers,json={'name':name})
    assert response.status_code == 200, response.text
    return response.json()


def _field(client:TestClient,headers:dict,site_id:str,collection_id:str,**payload)->dict:
    response=client.post(f'/api/sites/{site_id}/cms/collections/{collection_id}/fields',headers=headers,json=payload)
    assert response.status_code == 200, response.text
    return response.json()


def test_cms_crud_validation_typed_indexes_revisions_and_safe_schema_changes():
    reset_db(); client,headers=auth(); site_id=_site(client,headers,'CMS Core QA'); collection=_collection(client,headers,site_id)
    title=_field(client,headers,site_id,collection['id'],name='Title',type='TEXT',required=True,unique=True,validation={'min_length':3})
    rating=_field(client,headers,site_id,collection['id'],name='Rating',type='NUMBER',unique=True,validation={'minimum':0,'maximum':5})
    body=_field(client,headers,site_id,collection['id'],name='Body',type='RICH_TEXT')

    invalid=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'invalid','values':{title['id']:'No',rating['id']:9}})
    assert invalid.status_code == 422
    assert invalid.json()['detail']['code'] == 'CMS_VALIDATION_FAILED'

    created=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'first','values':{title['id']:'First story',rating['id']:4.5,body['id']:'<p>Hello</p><script>alert(1)</script>'}})
    assert created.status_code == 200, created.text
    item=created.json(); assert '<script>' not in item['values'][body['id']]
    with SessionLocal() as db:
        index=db.execute(text('SELECT value_text,value_number FROM cms_item_values WHERE item_id=:item AND field_id=:field'),{
            'item':item['id'],'field':rating['id']}).mappings().one()
    assert index['value_text'] == '4.5' and index['value_number'] == 4.5

    duplicate=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'duplicate','values':{title['id']:'Another story',rating['id']:4.5}})
    assert duplicate.status_code == 409 and duplicate.json()['detail']['code'] == 'CMS_UNIQUE_VALUE_CONFLICT'

    updated=client.patch(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}",headers=headers,json={
        'expected_revision':item['revision'],'values':{rating['id']:5}})
    assert updated.status_code == 200 and updated.json()['revision'] == 2
    stale=client.patch(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}",headers=headers,json={
        'expected_revision':1,'values':{rating['id']:3}})
    assert stale.status_code == 409 and stale.json()['detail']['code'] == 'CMS_ITEM_REVISION_CONFLICT'
    revisions=client.get(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}/revisions").json()['items']
    assert [entry['revision'] for entry in revisions[:2]] == [2,1]

    required_without_default=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/fields",headers=headers,json={
        'name':'Category','type':'TEXT','required':True})
    assert required_without_default.status_code == 409
    category=_field(client,headers,site_id,collection['id'],name='Category',type='TEXT',required=True,default='News')
    migrated=client.get(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}").json()
    assert migrated['values'][category['id']] == 'News' and migrated['revision'] == 3

    removed=client.delete(f"/api/sites/{site_id}/cms/collections/{collection['id']}/fields/{body['id']}",headers=headers)
    assert removed.status_code == 200
    assert body['id'] not in client.get(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}").json()['values']


def test_cms_references_and_cross_tenant_ids_are_rejected_without_disclosure():
    reset_db(); owner,owner_headers=auth(); site_id=_site(owner,owner_headers,'CMS Tenant A')
    authors=_collection(owner,owner_headers,site_id,'Authors'); articles=_collection(owner,owner_headers,site_id,'Articles')
    author_name=_field(owner,owner_headers,site_id,authors['id'],name='Name',type='TEXT',required=True)
    author=owner.post(f"/api/sites/{site_id}/cms/collections/{authors['id']}/items",headers=owner_headers,json={
        'slug':'ada','values':{author_name['id']:'Ada'}}).json()
    relation=_field(owner,owner_headers,site_id,articles['id'],name='Author',type='REFERENCE',reference_collection_id=authors['id'])
    valid=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items",headers=owner_headers,json={
        'slug':'valid','values':{relation['id']:author['id']}})
    assert valid.status_code == 200, valid.text
    blocked=owner.delete(f"/api/sites/{site_id}/cms/collections/{authors['id']}/items/{author['id']}",headers=owner_headers)
    assert blocked.status_code == 409 and blocked.json()['detail']['code'] == 'CMS_ITEM_REFERENCED'

    nullable_collection=_collection(owner,owner_headers,site_id,'Quotes')
    nullable_reference=_field(owner,owner_headers,site_id,nullable_collection['id'],name='Author',type='REFERENCE',reference_collection_id=authors['id'],deletion_behavior='NULLIFY')
    second_author=owner.post(f"/api/sites/{site_id}/cms/collections/{authors['id']}/items",headers=owner_headers,json={
        'slug':'grace','values':{author_name['id']:'Grace'}}).json()
    quote=owner.post(f"/api/sites/{site_id}/cms/collections/{nullable_collection['id']}/items",headers=owner_headers,json={
        'slug':'quote','values':{nullable_reference['id']:second_author['id']}}).json()
    assert owner.delete(f"/api/sites/{site_id}/cms/collections/{authors['id']}/items/{second_author['id']}",headers=owner_headers).status_code == 200
    nulled=owner.get(f"/api/sites/{site_id}/cms/collections/{nullable_collection['id']}/items/{quote['id']}").json()
    assert nulled['values'][nullable_reference['id']] is None and nulled['revision'] == 2

    outsider=TestClient(app)
    signup=outsider.post('/api/auth/signup',json={'name':'Outsider','email':'cms-outsider@example.com','password':'SecurePass123!'})
    assert signup.status_code == 200, signup.text
    outsider_headers={'X-CSRF-Token':signup.json()['csrf_token']}
    if signup.json().get('debug_verification_token'):
        assert outsider.post('/api/auth/email/verify',json={'token':signup.json()['debug_verification_token']}).status_code == 200
    assert outsider.get(f'/api/sites/{site_id}/cms/collections').status_code == 404
    assert outsider.post(f'/api/sites/{site_id}/cms/collections',headers=outsider_headers,json={'name':'Stolen'}).status_code == 404

    other_site=_site(outsider,outsider_headers,'CMS Tenant B'); other_collection=_collection(outsider,outsider_headers,other_site,'People')
    other_name=_field(outsider,outsider_headers,other_site,other_collection['id'],name='Name',type='TEXT')
    other_item=outsider.post(f"/api/sites/{other_site}/cms/collections/{other_collection['id']}/items",headers=outsider_headers,json={
        'slug':'mallory','values':{other_name['id']:'Mallory'}}).json()
    rejected=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items",headers=owner_headers,json={
        'slug':'cross-tenant','values':{relation['id']:other_item['id']}})
    assert rejected.status_code == 422 and rejected.json()['detail']['code'] == 'CMS_VALIDATION_FAILED'


def test_cms_binding_dynamic_route_seo_and_published_snapshot_isolation():
    reset_db(); client,headers=auth(); site_id=_site(client,headers,'CMS Runtime QA')
    site=client.get(f'/api/sites/{site_id}').json(); collection=_collection(client,headers,site_id,'Stories')
    title=_field(client,headers,site_id,collection['id'],name='Title',type='TEXT',required=True)
    item=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'launch-story','status':'PUBLISHED','values':{title['id']:'CMS launch story'}})
    assert item.status_code == 200, item.text

    migrated=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers)
    assert migrated.status_code == 200, migrated.text
    document=migrated.json()['document']; page_id=next(iter(document['pages'])); page=document['pages'][page_id]
    heading=next(node for node in page['nodes'].values() if node['type'] in {'heading','text','paragraph'})
    bound=client.put(f'/api/sites/{site_id}/cms/bindings',headers=headers,json={
        'collection_id':collection['id'],'field_id':title['id'],'page_id':page_id,'node_id':heading['id'],
        'target_property':'text','binding_kind':'FIELD','expected_revision':document['revision']})
    assert bound.status_code == 200, bound.text
    mismatch=client.put(f'/api/sites/{site_id}/cms/bindings',headers=headers,json={
        'collection_id':collection['id'],'field_id':title['id'],'page_id':page_id,'node_id':heading['id'],
        'target_property':'src','binding_kind':'FIELD','expected_revision':bound.json()['newRevision']})
    assert mismatch.status_code == 422 and mismatch.json()['detail']['code'] == 'CMS_BINDING_TYPE_MISMATCH'

    dynamic=client.post(f'/api/sites/{site_id}/cms/dynamic-pages',headers=headers,json={
        'collection_id':collection['id'],'page_id':page_id,'page_kind':'ITEM','route_prefix':'stories',
        'status':'PUBLISHED','seo':{'title_template':'{{field:'+title['id']+'}} | Runtime','description_template':'Read {{field:'+title['id']+'}}'}})
    assert dynamic.status_code == 200, dynamic.text
    published=client.post(f'/api/sites/{site_id}/publish',headers=headers)
    assert published.status_code == 200, published.text
    live=client.get(f"/s/{site['slug']}/stories/launch-story")
    assert live.status_code == 200, live.text
    assert 'CMS launch story' in live.text and '<title>CMS launch story | Runtime</title>' in live.text
    assert f'/s/{site["slug"]}/stories/launch-story' in live.text
    sitemap=client.get(f"/s/{site['slug']}/sitemap.xml")
    assert sitemap.status_code == 200 and f'/s/{site["slug"]}/stories/launch-story' in sitemap.text

    draft=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'draft-story','values':{title['id']:'Unpublished draft'}})
    assert draft.status_code == 200
    assert client.get(f"/s/{site['slug']}/stories/draft-story").status_code == 404


def test_cms_csv_restore_and_collection_scoped_content_editor_role():
    reset_db(); owner,headers=auth(); site_id=_site(owner,headers,'CMS Operations QA')
    articles=_collection(owner,headers,site_id,'Articles'); _collection(owner,headers,site_id,'Private Notes')
    title=_field(owner,headers,site_id,articles['id'],name='Title',key='title',type='TEXT',required=True)
    csv_text='slug,status,title\nalpha,PUBLISHED,Alpha title\nbeta,DRAFT,Beta title\n'
    dry=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/import.csv",headers=headers,json={
        'csv_text':csv_text,'mode':'UPSERT','dry_run':True})
    assert dry.status_code == 200 and dry.json()['creates'] == 2
    imported=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/import.csv",headers=headers,json={
        'csv_text':csv_text,'mode':'UPSERT'})
    assert imported.status_code == 200 and imported.json()['creates'] == 2
    exported=owner.get(f"/api/sites/{site_id}/cms/collections/{articles['id']}/export.csv")
    assert exported.status_code == 200 and 'alpha,PUBLISHED,Alpha title' in exported.text
    filtered=owner.get(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items",params={
        'filter_field':title['id'],'filter_op':'contains','filter_value':'alpha','sort_field':title['id'],'direction':'asc'})
    assert filtered.status_code == 200 and filtered.json()['total'] == 1 and filtered.json()['items'][0]['slug'] == 'alpha'
    view=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/views",headers=headers,json={
        'name':'Published titles','config':{'status':'PUBLISHED','sort_field':title['id'],'direction':'asc'}})
    assert view.status_code == 200
    assert owner.get(f"/api/sites/{site_id}/cms/collections/{articles['id']}/views").json()['items'][0]['config']['status'] == 'PUBLISHED'

    item=next(entry for entry in owner.get(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items").json()['items'] if entry['slug']=='alpha')
    changed=owner.patch(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items/{item['id']}",headers=headers,json={
        'expected_revision':item['revision'],'values':{title['id']:'Changed title'}}).json()
    restored=owner.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items/{item['id']}/revisions/1/restore",headers=headers,json={
        'expected_revision':changed['revision']})
    assert restored.status_code == 200 and restored.json()['values'][title['id']] == 'Alpha title' and restored.json()['revision'] == 3

    collaborator=TestClient(app)
    signup=collaborator.post('/api/auth/signup',json={'name':'CMS Editor','email':'cms-editor@example.com','password':'SecurePass123!'})
    assert signup.status_code == 200, signup.text
    collaborator_headers={'X-CSRF-Token':signup.json()['csrf_token']}
    if signup.json().get('debug_verification_token'):
        assert collaborator.post('/api/auth/email/verify',json={'token':signup.json()['debug_verification_token']}).status_code == 200
    permission=owner.put(f'/api/sites/{site_id}/cms/permissions',headers=headers,json={
        'principal_email':'cms-editor@example.com','role':'CONTENT_EDITOR','collection_id':articles['id']})
    assert permission.status_code == 200, permission.text
    visible=collaborator.get(f'/api/sites/{site_id}/cms/collections')
    assert visible.status_code == 200 and [entry['id'] for entry in visible.json()['items']] == [articles['id']]
    editor_item=collaborator.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/items",headers=collaborator_headers,json={
        'slug':'editor-created','values':{title['id']:'Editor created'}})
    assert editor_item.status_code == 200, editor_item.text
    denied=collaborator.post(f"/api/sites/{site_id}/cms/collections/{articles['id']}/fields",headers=collaborator_headers,json={
        'name':'Forbidden','type':'TEXT'})
    assert denied.status_code == 404


def test_cms_ai_is_proposal_first_credit_metered_and_confirmation_gated():
    reset_db(); client,headers=auth(); site_id=_site(client,headers,'CMS Assistant QA'); collection=_collection(client,headers,site_id,'Drafts')
    enabled=client.patch(f"/api/sites/{site_id}/cms/collections/{collection['id']}",headers=headers,json={'ai_assistant_enabled':True})
    assert enabled.status_code == 200
    title=_field(client,headers,site_id,collection['id'],name='Title',type='TEXT')
    item=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'draft','values':{title['id']:'Original copy'}}).json()
    with SessionLocal.begin() as db:
        user_id=db.execute(text("SELECT id FROM users WHERE email='rebuild-qa@example.com'")).scalar_one()
        grant_topup(user_id,10,db=db)
    proposal=client.post(f'/api/sites/{site_id}/cms/assistant/proposals',headers={**headers,'Idempotency-Key':'cms-ai-proposal-test'},json={
        'collection_id':collection['id'],'action':'REWRITE','instruction':'Keep this factual and concise','item_ids':[item['id']]})
    assert proposal.status_code == 200, proposal.text
    body=proposal.json(); assert body['requires_confirmation'] is True and body['operations']
    unchanged=client.get(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items/{item['id']}").json()
    assert unchanged['revision'] == 1
    denied=client.post(f'/api/sites/{site_id}/cms/assistant/apply',headers=headers,json={'proposal_id':body['id'],'confirm':False})
    assert denied.status_code == 409
    applied=client.post(f'/api/sites/{site_id}/cms/assistant/apply',headers=headers,json={'proposal_id':body['id'],'confirm':True})
    assert applied.status_code == 200, applied.text
    assert applied.json()['items'][0]['revision'] == 2
    published=client.post(f"/api/sites/{site_id}/cms/collections/{collection['id']}/items",headers=headers,json={
        'slug':'faq','status':'PUBLISHED','values':{title['id']:'Custom engraving is available for wooden signs.'}})
    assert published.status_code == 200
    assistant_config=save_site_config(site_id,{'cms_collection_ids':[collection['id']]})
    with SessionLocal() as db:
        site=dict(db.execute(text('SELECT * FROM sites WHERE id=:site'),{'site':site_id}).mappings().one())
    matches=search_business_knowledge(site,'Do you offer custom engraving?',assistant_config)['matches']
    assert matches and matches[0]['source'].startswith('CMS:') and 'engraving' in matches[0]['text'].lower()
