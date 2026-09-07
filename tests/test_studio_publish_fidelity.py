from app.studio_document import BreakpointOverride, Node, NodeContent, NodeStyle, Page, SiteDocument
from app.studio_renderer import render_page


def _controlled_document() -> SiteDocument:
    root = Node(id='root', type='page', children=['hero'])
    hero = Node(
        id='hero', type='section', parentId='root', children=['back', 'front', 'copy', 'photo'],
        style=NodeStyle(css={'position': 'relative', 'width': '1360px', 'height': '720px', 'background': '#f7f6f2'}),
    )
    back = Node(
        id='back', type='container', parentId='hero',
        style=NodeStyle(css={'position': 'absolute', 'left': '120px', 'top': '80px', 'width': '420px', 'height': '240px', 'zIndex': '1'}),
    )
    front = Node(
        id='front', type='container', parentId='hero',
        style=NodeStyle(css={'position': 'absolute', 'left': '180px', 'top': '140px', 'width': '420px', 'height': '240px', 'zIndex': '2', 'rotate': '17deg', 'scale': '1.02'}),
    )
    copy = Node(
        id='copy', type='heading', parentId='hero', content=NodeContent(text='Published geometry'),
        style=NodeStyle(css={'position': 'absolute', 'left': '72px', 'top': '430px', 'fontSize': '48px', 'rotate': '-3deg'}),
        responsiveOverrides={'mobile': BreakpointOverride(style=NodeStyle(css={'left': '24px', 'top': '260px', 'fontSize': '32px'}))},
    )
    photo = Node(
        id='photo', type='image', parentId='hero', content=NodeContent(src='/media/test/photo.png', alt='Test photo', crop={'x': 12, 'y': -8, 'scale': 1.4}),
        style=NodeStyle(css={'position': 'absolute', 'left': '760px', 'top': '100px', 'width': '420px', 'height': '320px', 'objectFit': 'cover', 'borderRadius': '24px'}),
    )
    page = Page(id='home', slug='home', name='Home', rootNodeId='root', nodes={
        'root': root, 'hero': hero, 'back': back, 'front': front, 'copy': copy, 'photo': photo,
    })
    return SiteDocument(pages={'home': page})


def test_published_renderer_preserves_overlap_rotation_crop_and_breakpoint_geometry():
    html = render_page(_controlled_document(), 'home')
    assert '.z-node-front' in html
    assert 'z-index: 2;' in html
    assert 'rotate: 17deg;' in html and 'scale: 1.02;' in html
    assert 'object-position:62.0% 42.0%;' in html
    assert 'transform:scale(1.4);' in html
    assert '@media (max-width: 767px)' in html
    assert 'left: 24px;' in html and 'font-size: 32px;' in html
