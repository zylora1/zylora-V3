from pathlib import Path


STATIC = Path(__file__).resolve().parents[1] / "static"


def test_dashboard_sidebar_keeps_identity_controls_fixed_and_scrolls_navigation():
    css = (STATIC / "dashboard-sneat.css").read_text(encoding="utf-8")
    assert ".rail.sneat-sidebar{overflow:hidden!important}" in css
    assert ".rail.sneat-sidebar>nav{min-height:0!important;overflow-y:auto!important" in css


def test_ai_creator_desktop_stage_can_shrink_and_scroll_to_final_action():
    css = (STATIC / "ai-create.css").read_text(encoding="utf-8")
    assert "@media(min-width:821px){.chat-pane{min-height:0;overflow:hidden}" in css
    assert ".ai-stage{min-height:0;overflow-y:auto;overflow-x:hidden" in css
    html = (STATIC / "ai-create.html").read_text(encoding="utf-8")
    assert 'data-testid="ai-create-final"' in html


def test_landing_hero_type_scale_is_bounded_for_desktop_and_mobile():
    css = (STATIC / "landing.css").read_text(encoding="utf-8")
    assert ".hero h1{font-size:clamp(58px,9vw,142px);line-height:.86}" in css
    assert "@media(max-width:650px){.hero h1{font-size:clamp(52px,16vw,78px)}}" in css
    main = (STATIC.parent / "app" / "main.py").read_text(encoding="utf-8")
    assert "/static/landing.css?v=20260901-ui2" in main


def test_google_auth_buttons_use_local_four_color_google_logo():
    css = (STATIC / "auth.css").read_text(encoding="utf-8")
    logo = (STATIC / "google-g-logo.svg").read_text(encoding="utf-8")
    main = (STATIC.parent / "app" / "main.py").read_text(encoding="utf-8")
    assert "url('/static/google-g-logo.svg')" in css
    assert "/static/auth.css?v=20260902-google1" in main
    for color in ("#4285F4", "#34A853", "#FBBC05", "#EA4335"):
        assert f'fill="{color}"' in logo
    for page in ("login.html", "signup.html"):
        html = (STATIC / page).read_text(encoding="utf-8")
        assert "Continue with Google" in html


def test_dashboard_uses_wordmark_without_tile_and_app_has_favicon():
    css = (STATIC / "dashboard-sneat.css").read_text(encoding="utf-8")
    manifest = (STATIC / "manifest.webmanifest").read_text(encoding="utf-8")
    favicon = (STATIC / "favicon.svg").read_text(encoding="utf-8")
    main = (STATIC.parent / "app" / "main.py").read_text(encoding="utf-8")
    assert ".zylora-logo-mark{display:none!important}" in css
    assert ".zylora-logo-type{font-size:23px;line-height:1;font-weight:700;letter-spacing:-.06em;color:#111211}" in css
    assert "/static/dashboard-sneat.css?v=20260902-brand1" in main
    assert "@app.get('/favicon.ico'" in main
    assert '"src":"/static/favicon.svg"' in manifest
    assert 'fill="#696CFF"' in favicon
    assert 'fill="#FFFFFF"' in favicon
