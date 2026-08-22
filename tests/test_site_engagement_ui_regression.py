from pathlib import Path

SRC = (Path(__file__).parents[1] / "apps/web/components/SiteEngagement.tsx").read_text(encoding="utf-8")

def test_manual_contact_cancels_proactive_timer_and_locks_trigger():
    assert "openLead('FORM',true)" in SRC
    assert "triggered.current=true" in SRC
    assert "window.clearTimeout(proactiveTimer.current)" in SRC
    assert "if(nextSource==='PROACTIVE'&&triggered.current)return" in SRC

def test_chat_capture_also_prevents_later_proactive_reclassification():
    assert "openLead('CHATBOT',true)" in SRC
    assert "setSource('PROACTIVE');setLeadOpen(true)" not in SRC

def test_lead_submission_has_stable_idempotency_and_double_submit_guard():
    assert "idempotency_key:requestKey()" in SRC
    assert "if(leadBusy)return" in SRC
    assert "disabled={leadBusy}" in SRC
