import json
from pathlib import Path

from app import providers
from app.api import SiteIn

ROOT = Path(__file__).resolve().parents[1]


def test_ai_prompt_guidance_is_build_with_ai_only_and_dismissible():
    html = (ROOT / 'static/ai-create.html').read_text(encoding='utf-8')
    dashboard = (ROOT / 'static/templates.html').read_text(encoding='utf-8')
    assert 'id="promptGuidance"' in html
    assert 'id="promptGuidanceDismiss"' in html
    assert 'Get a better site — use a detailed prompt.' in html
    assert 'A single line like ‘gym website’ gives a generic result.' in html
    assert 'write a detailed website description for [your business]' in html
    assert 'id="promptGuidance"' not in dashboard


def test_ai_prompt_placeholder_models_a_detailed_brief():
    html = (ROOT / 'static/ai-create.html').read_text(encoding='utf-8')
    assert 'premium fitness studio in Chennai' in html
    assert 'busy professionals aged 25–45' in html
    assert 'Testimonials, Pricing, Booking, FAQ and Contact' in html


def test_ai_prompt_word_count_is_advisory_and_no_frontend_minimum_gate_remains():
    js = (ROOT / 'static/ai-create.js').read_text()
    assert 'PROMPT_DETAIL_WORD_THRESHOLD=20' in js
    assert 'consider adding more detail like target audience' in js
    assert "if(desc.length<" not in js
    assert "$('#businessDescription').focus();return" not in js


def test_ai_prompt_dismissal_is_persisted_per_user():
    js = (ROOT / 'static/ai-create.js').read_text()
    assert "PROMPT_GUIDANCE_STORAGE_PREFIX='zylora:ai-prompt-guidance-dismissed:'" in js
    assert "state.me?.id||state.me?.email||'guest'" in js
    assert "localStorage.setItem(promptGuidanceKey(),'1')" in js
    assert "localStorage.removeItem(promptGuidanceKey('guest'))" in js


def test_ai_site_request_accepts_short_or_empty_descriptions_without_minimum_length():
    assert SiteIn(business_name='Gym', description='gym').description == 'gym'
    assert SiteIn(business_name='Gym').description == ''


def test_openai_architecture_response_filters_disallowed_blog_pages(monkeypatch):
    class Response:
        def raise_for_status(self):
            return None

        def json(self):
            return {'output_text': json.dumps({'pages': [
                {'id': 'home', 'title': 'Home', 'purpose': 'Overview'},
                {'id': 'blog', 'title': 'Blog', 'purpose': 'News'},
                {'id': 'services', 'title': 'Services', 'purpose': 'Offerings'},
            ], 'design_direction': 'editorial-asymmetric'})}

    class Client:
        def __init__(self, **_kwargs):
            pass

        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return None

        def post(self, *_args, **_kwargs):
            return Response()

    monkeypatch.setattr(providers.settings, 'openai_api_key', 'test-only-key')
    monkeypatch.setattr(providers.httpx, 'Client', Client)
    result = providers.plan_site_architecture('Acme', 'Services and a blog', 'Agency', 'Editorial')
    assert result['provider'] == 'openai'
    assert [page['id'] for page in result['pages']] == ['home', 'services']
