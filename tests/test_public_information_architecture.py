from __future__ import annotations

from bs4 import BeautifulSoup
from fastapi.testclient import TestClient

from app.main import app
from app.public_seo import HELP_ARTICLES, INFO_PAGES, PRODUCTS, SOLUTIONS


def test_required_public_product_solution_and_resource_routes_are_server_rendered():
    paths = [
        '/pricing',
        '/features',
        '/ai-editor',
        '/seo',
        '/solutions/schools',
        '/solutions/coaching-centers',
        '/solutions/portfolio',
        *INFO_PAGES,
        '/help',
        *[f'/help/{slug}' for slug in HELP_ARTICLES],
    ]
    with TestClient(app) as client:
        for path in paths:
            response = client.get(path)
            assert response.status_code == 200, (path, response.text[:300])
            soup = BeautifulSoup(response.text, 'html.parser')
            assert soup.title and soup.title.get_text(strip=True)
            assert soup.find('meta', attrs={'name': 'description'})
            assert soup.find('link', rel='canonical')
            assert soup.find('h1')
            assert len(soup.find_all('h1')) == 1
            assert 'noindex' not in (soup.find('meta', attrs={'name': 'robots'}).get('content') or '').lower()
            assert soup.find('script', attrs={'type': 'application/ld+json'})


def test_required_solution_pages_have_distinct_business_content():
    with TestClient(app) as client:
        pages = {path: BeautifulSoup(client.get(path).text, 'html.parser') for path in SOLUTIONS}
    required = ['/solutions/schools', '/solutions/coaching-centers', '/solutions/portfolio']
    h1s = [pages[path].find('h1').get_text(' ', strip=True) for path in required]
    intros = [pages[path].select_one('.seo-intro').get_text(' ', strip=True) for path in required]
    assert len(set(h1s)) == len(required)
    assert len(set(intros)) == len(required)
    assert 'admissions' in intros[0].lower()
    assert 'enrolment' in intros[1].lower()
    assert 'portfolio' in intros[2].lower()


def test_pricing_is_crawlable_while_checkout_surface_remains_private():
    with TestClient(app) as client:
        pricing = client.get('/pricing')
        checkout = client.get('/choose-plan')
    assert pricing.status_code == 200
    assert 'index,follow' in pricing.text
    assert checkout.status_code == 200
    assert 'noindex,nofollow' in checkout.text


def test_private_preview_and_publish_entry_require_authentication():
    with TestClient(app) as client:
        assert client.get('/preview/not-a-site').status_code == 401
        assert client.get('/studio/not-a-site/publish').status_code == 401


def test_auth_onboarding_and_checkout_surfaces_are_explicit_and_private():
    with TestClient(app) as client:
        for path in ['/auth/error', '/account/suspended', '/checkout/processing', '/checkout/success', '/checkout/failed', '/checkout/cancelled']:
            response = client.get(path)
            assert response.status_code == 200, (path, response.text[:300])
            assert 'noindex,nofollow' in response.text
        assert client.get('/onboarding').status_code == 401
        assert client.get('/checkout/starter', follow_redirects=False).status_code == 307
        assert client.get('/checkout/not-a-plan').status_code == 404


def test_public_route_registries_include_the_new_indexable_paths():
    assert {'/features', '/ai-editor', '/seo'} <= set(PRODUCTS)
    assert {'/solutions/schools', '/solutions/coaching-centers', '/solutions/portfolio'} <= set(SOLUTIONS)
    assert {'/about', '/security', '/status', '/support', '/contact', '/report-abuse'} <= set(INFO_PAGES)
