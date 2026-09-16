from app.penpot_adapter import project_site_document, translate_penpot_interaction
from app.studio_ai_operations import apply_v4_operations
from app.studio_document import Node, NodeGeometry, Page, SiteDocument, validate_studio_document


def _document():
    root = Node(id='root', type='page', geometry=NodeGeometry(width=1200, height=800), children=['section'])
    section = Node(id='section', type='section', parentId='root', geometry=NodeGeometry(x=0, y=0, width=1200, height=800), children=['title', 'lead'])
    title = Node(id='title', type='heading', parentId='section', content={'text': 'Hello'}, geometry=NodeGeometry(x=24, y=30, width=400, height=60))
    lead = Node(id='lead', type='lead_form', parentId='section', geometry=NodeGeometry(x=24, y=140, width=360, height=240))
    page = Page(id='page_home', slug='home', name='Home', rootNodeId='root', nodes={n.id: n for n in [root, section, title, lead]})
    return validate_studio_document(SiteDocument(id='site-1', pages={page.id: page}, tokens={'brand.primary': '#6f7bff'}).model_dump())


def test_projection_is_ephemeral_and_preserves_business_types():
    doc = _document()
    projection = project_site_document(doc, 'page_home')
    assert projection['source'] == 'zylora-site-document'
    assert projection['page']['rootNodeId'] == 'root'
    business = next(item for item in projection['page']['objects'] if item['id'] == 'lead')
    assert business['kind'] == 'shape'
    assert business['zyloraType'] == 'lead_form'
    assert business['metadata']['businessComponent'] is True
    assert projection['capabilities']['grouping'] is True


def test_penpot_interactions_translate_to_typed_operations():
    doc = _document()
    assert translate_penpot_interaction(doc, {'type': 'drag', 'pageId': 'page_home', 'nodeId': 'title', 'delta': {'x': 10, 'y': 5}})[0]['type'] == 'UPDATE_GEOMETRY'
    assert translate_penpot_interaction(doc, {'type': 'resize', 'pageId': 'page_home', 'nodeId': 'title', 'width': 500})[0]['geometry'] == {'width': 500}
    assert translate_penpot_interaction(doc, {'type': 'rotate', 'pageId': 'page_home', 'nodeId': 'title', 'rotation': 12})[0]['geometry'] == {'rotation': 12}
    assert translate_penpot_interaction(doc, {'type': 'text_edit', 'pageId': 'page_home', 'nodeId': 'title', 'text': 'Updated'})[0]['type'] == 'UPDATE_TEXT'
    assert translate_penpot_interaction(doc, {'type': 'style', 'pageId': 'page_home', 'nodeId': 'title', 'css': {'color': '#111'}})[0]['type'] == 'UPDATE_STYLE'
    assert translate_penpot_interaction(doc, {'type': 'token', 'name': 'brand.primary', 'value': '#123456'})[0]['type'] == 'UPDATE_SITE_TOKEN'
    assert translate_penpot_interaction(doc, {'type': 'group', 'pageId': 'page_home', 'nodeId': 'title', 'nodeIds': ['title', 'lead'], 'groupId': 'group_1'})[0]['type'] == 'GROUP_NODES'


def test_group_and_ungroup_use_same_canonical_mutation_engine():
    doc = _document()
    group = translate_penpot_interaction(doc, {'type': 'group', 'pageId': 'page_home', 'nodeId': 'title', 'nodeIds': ['title', 'lead'], 'groupId': 'group_1'})
    grouped = apply_v4_operations(doc, group)
    page = grouped.pages['page_home']
    assert page.nodes['group_1'].children == ['title', 'lead']
    assert page.nodes['title'].parentId == 'group_1'
    ungrouped = apply_v4_operations(grouped, translate_penpot_interaction(grouped, {'type': 'ungroup', 'pageId': 'page_home', 'nodeId': 'group_1'}))
    page = ungrouped.pages['page_home']
    assert 'group_1' not in page.nodes
    assert page.nodes['title'].parentId == 'section'
    assert page.nodes['lead'].parentId == 'section'
    assert ungrouped.tokens['brand.primary'] == '#6f7bff'
