from pathlib import Path

from app.api_gapfixes import _grounded_answer

ROOT = Path(__file__).resolve().parents[1]


def test_admin_freelancer_price_uses_major_units_in_ui_and_minor_units_on_wire():
    js=(ROOT/'static/dashboard.js').read_text()
    html=(ROOT/'static/dashboard.html').read_text()
    assert "$('#freelancerPrice').value=(p.starting_price_minor||0)/100" in js
    assert "starting_price_minor:Math.round(Number($('#freelancerPrice').value||0)*100)" in js
    assert "$('#freelancerPrice').value=(p.starting_price_minor||0)/100" in js
    assert "starting_price_minor:Math.round(Number($('#freelancerPrice').value||0)*100)" in js
    assert "$('#adminFreelancerEditPrice').value=(x.starting_price_minor||0)/100" in js
    assert "starting_price_minor:Math.round(Number($('#adminFreelancerEditPrice').value||0)*100)" in js
    assert 'Starting price minor' not in html
    assert 'Starting price<input id="adminFreelancerEditPrice"' in html


def test_ai_create_does_not_promise_unsupported_ecommerce():
    html=(ROOT/'static/ai-create.html').read_text()
    assert 'data-goal="Sell products"' not in html
    assert 'Show products &amp; get enquiries' in html
    assert 'Functional carts, customer accounts and persisted order systems are not generated.' in html
    assert 'data-goal="Share content"' not in html


def test_sensitive_rate_limit_call_sites_are_durable():
    api=(ROOT/'app/api.py').read_text()
    ext=(ROOT/'app/api_extended.py').read_text()
    gap=(ROOT/'app/api_gapfixes.py').read_text()
    marketplace=(ROOT/'app/api_marketplace_support.py').read_text()
    expected=[
        (api,"durable_rate_limit('login:'+ip"),
        (api,"durable_rate_limit('signup:'+ip"),
        (api,"durable_rate_limit('otp:'+u['id']"),
        (api,"durable_rate_limit('lead-ip:'+ip"),
        (api,"durable_rate_limit('lead-site:'+payload.site_id"),
        (api,"durable_rate_limit('lead-email:'+payload.site_id"),
        (api,"durable_rate_limit('appt-ip:'+ip"),
        (api,"durable_rate_limit('appt-site:'+payload.site_id"),
        (api,"durable_rate_limit('appt-email:'+payload.site_id"),
        (ext,"durable_rate_limit('pwreset:'+ip"),
        (gap,"durable_rate_limit('chatbot-ip:'+ip"),
        (marketplace,"durable_rate_limit(f'freelancer-enquiry:ip15:{ip}'"),
    ]
    for source, marker in expected:
        assert marker in source
    # The legacy single-process limiter must not be called by application endpoints.
    for path in (ROOT/'app').glob('api*.py'):
        assert ' rate_limit(' not in path.read_text().replace('durable_rate_limit(', '')


def test_dev_grounding_understands_explicit_hours_without_literal_hours_word():
    docs=[{'id':'doc-hours','title':'Business information','content':'We are open Monday-Friday, 9am to 6pm. Weekend visits are by appointment.'}]
    answer, doc_id = _grounded_answer('What are your hours?', docs)
    assert doc_id == 'doc-hours'
    assert '9am to 6pm' in answer


def test_removed_freelancer_fee_local_does_not_return_stale_calculation():
    source=(ROOT/'app/api_gapfixes.py').read_text()
    assert 'fees=[]' not in source
    assert "'fees':[]" not in source
    assert "raise HTTPException(410,'Freelancer transfer fees were removed." in source

def test_verified_template_catalogue_uses_current_preview_and_selection_flow():
    js=(ROOT/'static/dashboard.js').read_text()
    html=(ROOT/'static/dashboard.html').read_text()
    assert 'Use template' in js
    assert 'data-template-use' in js
    assert '/template-preview/' in js
    assert 'Only independently verified templates are published here.' in js
    assert 'data-template-upgrade' not in js
    assert "opt.disabled=o==='TEMPLATE'" not in js
    assert 'PLAN_UPGRADE_REQUIRED' in js
    assert 'showPublishUpgrade' in js
    assert 'data-view="blog"' not in html
