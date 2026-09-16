import json
from pathlib import Path

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"


def test_marketing_surfaces_do_not_ship_fabricated_proof():
    landing = (STATIC / "index.html").read_text(encoding="utf-8")
    login = (STATIC / "login.html").read_text(encoding="utf-8")

    for unsupported_claim in (
        "AggregateRating",
        "1,280",
        "99.9% Uptime",
        "4.2x",
        "apexhealth.zylora.com",
        "Dr. Sarah Chen consultation",
        "Visits today</small>\n          <strong>342",
    ):
        assert unsupported_claim not in landing + login

    soup = BeautifulSoup(landing, "html.parser")
    for script in soup.select('script[type="application/ld+json"]'):
        payload = json.loads(script.string or "{}")
        assert "AggregateRating" not in json.dumps(payload)


def test_landing_page_uses_neutral_product_examples_and_full_plan_comparison():
    landing = (STATIC / "index.html").read_text(encoding="utf-8")
    for fictional_detail in (
        "AURA CLINIC",
        "Aurora Dental",
        "Dr. Elena",
        "Rahul Sharma",
        "rahul@example.com",
        "Lead Score:",
        "Lead Qualified:",
        "Oceanfront Villa",
        "Next.js 14 + Tailwind",
        "global edge CDN",
        "priority edge delivery",
    ):
        assert fictional_detail not in landing
    for section_id in ("how-it-works", "capabilities", "pricing", "comparison", "faq"):
        assert f'id="{section_id}"' in landing
    assert 'class="comparison-table"' in landing
    assert 'id="starterRegionalPrice"' in landing
    assert 'id="growthRegionalPrice"' in landing


def test_dashboard_empty_state_is_honest_and_actionable():
    html = (STATIC / "dashboard.html").read_text(encoding="utf-8")
    js = (STATIC / "dashboard.js").read_text(encoding="utf-8")
    css = (STATIC / "dashboard-sneat.css").read_text(encoding="utf-8")

    assert 'id="overviewSiteHealthSection"' in html
    assert 'id="overviewHealthSubGrid"' in html
    assert "No website created yet" in js
    assert "Not configured" in html
    assert "Monitoring not configured" in html
    assert "[hidden]" in css and "display: none !important" in css


def test_ai_creator_keeps_a_native_prompt_fallback():
    html = (STATIC / "ai-create.html").read_text(encoding="utf-8")
    js = (STATIC / "ai-create.js").read_text(encoding="utf-8")

    assert 'id="businessDescription"' in html
    assert '<label class="prompt-box">' in html
    assert "const aiCreatePromptInputRoot = $('#aiCreatePromptInputRoot')" in js
    assert "&& #aiCreatePromptInputRoot" not in js
    assert "sessionStorage.getItem('zyloraAiDraft')" in js


def test_tinkered_visual_skin_is_shared_without_replacing_product_mechanics():
    landing = (STATIC / "index.html").read_text(encoding="utf-8")
    dashboard = (STATIC / "dashboard.html").read_text(encoding="utf-8")
    studio = (STATIC / "studio.html").read_text(encoding="utf-8")
    dashboard_script = (STATIC / "dashboard-tinkered.js").read_text(encoding="utf-8")
    studio_source = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")

    assert '/static/zylora-tinkered.css' in landing
    assert '/static/zylora-tinkered.css' in dashboard
    assert '/static/zylora-tinkered.css' in studio
    assert '/static/dashboard-tinkered.js' in dashboard
    assert 'id="dashboardCreateComposer"' in dashboard_script
    assert 'data-action="new-site"' not in dashboard_script
    assert 'data-action="new-site"' in dashboard
    assert 'studio-product-switcher' in studio_source
    assert 'studio-sidebar-right' in studio_source
    assert 'ai-panel-open' in studio_source
    assert "zylora:sites-loaded" in (STATIC / "dashboard.js").read_text(encoding="utf-8")
    assert "dashboard-site-card-rail" in dashboard_script
    assert "dashboard-account-popover" in dashboard_script
    assert "dashboard-resource-card" in dashboard_script
    assert "fetch('/api/billing'" in dashboard_script
    assert "zyloraAiDraft" in dashboard_script
    assert "window.location.href = '/ai-create'" in dashboard_script
    assert "window.location.href = '/studio/'" in dashboard_script
