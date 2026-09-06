from app.studio_document import Node, NodeContent, NodeStyle, Page, SiteDocument
from app.studio_renderer import render_page


def _doc(node: Node) -> SiteDocument:
    root = Node(id='root', type='page', children=[node.id])
    node.parentId = 'root'
    page = Page(id='home', slug='home', name='Home', rootNodeId='root', nodes={'root': root, node.id: node})
    return SiteDocument(id='canva-test', pages={'home': page})


def test_v4_renderer_persists_links_and_motion_without_unsafe_urls():
    node = Node(
        id='cta', type='button', content=NodeContent(text='Book a call', href='https://example.com'),
        interactions=[{'trigger': 'hover', 'effect': 'lift'}, {'trigger': 'animation', 'effect': 'fade'}],
        metadata={'linkTarget': '_blank'},
    )
    html = render_page(_doc(node), 'home')
    assert 'href="https://example.com"' in html
    assert 'target="_blank" rel="noopener noreferrer"' in html
    assert ':hover' in html and 'zyStudioFade' in html


def test_v4_renderer_rejects_javascript_links():
    node = Node(id='cta', type='button', content=NodeContent(text='Unsafe', href='javascript:alert(1)'))
    html = render_page(_doc(node), 'home')
    assert 'javascript:' not in html
    assert '<button' in html


def test_v4_renderer_honors_reduced_motion_for_interactions():
    node = Node(id='headline', type='heading', content=NodeContent(text='Hello'), interactions=[{'trigger': 'animation', 'effect': 'rise'}])
    html = render_page(_doc(node), 'home')
    assert 'prefers-reduced-motion: reduce' in html
