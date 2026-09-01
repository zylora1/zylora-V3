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
