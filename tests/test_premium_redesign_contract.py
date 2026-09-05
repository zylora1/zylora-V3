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

