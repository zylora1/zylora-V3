from app.main import _apply_hosting_attribution


def test_free_hosting_attribution_is_server_injected_once():
    html = '<html><body><footer><span>Business</span></footer></body></html>'
    rendered = _apply_hosting_attribution(html, {'is_paid': False})
    assert rendered.count('data-zylora-hosting-brand="true"') == 1
    assert rendered.count('Built with Zylora') == 1
    assert 'rel="nofollow noopener"' in rendered


def test_paid_hosting_attribution_is_removed_even_when_draft_html_contains_it():
    html = (
        '<html><body><footer>'
        '<a data-zylora-hosting-brand="true">Fake client marker</a>'
        '<span>Built with Zylora</span>'
        '</footer></body></html>'
    )
    rendered = _apply_hosting_attribution(html, {'is_paid': True})
    assert 'data-zylora-hosting-brand' not in rendered
    assert 'Built with Zylora' not in rendered
    assert 'Fake client marker' not in rendered
