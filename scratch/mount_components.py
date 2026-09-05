import re
from pathlib import Path

def patch_file(filepath, find_str, replace_str):
    p = Path(filepath)
    content = p.read_text(encoding='utf-8')
    if find_str in content:
        p.write_text(content.replace(find_str, replace_str), encoding='utf-8')
        print(f"Patched {filepath}")
    else:
        print(f"Could not find target in {filepath}")

def mount_components():
    # 1. dashboard.html: Add scripts/styles
    dashboard_html = Path('static/dashboard.html').read_text(encoding='utf-8')
    if 'date-range-calendar.css' not in dashboard_html:
        dashboard_html = dashboard_html.replace(
            '<link href="/static/zylora-apple.css" rel="stylesheet"/>',
            '<link href="/static/zylora-apple.css" rel="stylesheet"/>\n<link href="/static/date-range-calendar.css" rel="stylesheet"/>\n<link href="/static/prompt-input.css" rel="stylesheet"/>'
        )
        dashboard_html = dashboard_html.replace(
            '<script src="/static/vendor/react-dom.production.min.js"></script>',
            '<script src="/static/vendor/react-dom.production.min.js"></script>\n<script src="/static/date-range-calendar.js"></script>\n<script src="/static/prompt-input.js"></script>'
        )
        # 2. dashboard.html: Mount points
        # Calendar
        dashboard_html = dashboard_html.replace(
            '<div aria-label="Analytics range" class="range-segment" role="group">',
            '<div class="analytics-range-toolbar" style="display:flex;align-items:center;gap:12px;"><div id="analyticsCalendarRoot"></div><div aria-label="Analytics range" class="range-segment" role="group">'
        )
        dashboard_html = dashboard_html.replace(
            '</button><button data-analytics-range="90" type="button">90D</button></div></div>',
            '</button><button data-analytics-range="90" type="button">90D</button></div></div></div>'
        )
        # PromptInput
        dashboard_html = dashboard_html.replace(
            '<div class="form-actions"><input id="assistantTestInput"',
            '<div id="assistantPromptInputRoot"></div><div class="form-actions" id="legacyAssistantActions" style="display:none;"><input id="assistantTestInput"'
        )
        Path('static/dashboard.html').write_text(dashboard_html, encoding='utf-8')
        print("Patched dashboard.html")

    # 3. dashboard.js: Initialize components
    dashboard_js = Path('static/dashboard.js').read_text(encoding='utf-8')
    if 'ZyloraCalendar.mount' not in dashboard_js:
        dashboard_js = dashboard_js.replace(
            "renderAnalytics()}",
            """renderAnalytics();
if (window.ZyloraCalendar && #analyticsCalendarRoot) {
  const initialFrom = new Date();
  initialFrom.setDate(initialFrom.getDate() - 29);
  const initialTo = new Date();
  ZyloraCalendar.mount(#analyticsCalendarRoot, {
    initialRange: { from: initialFrom, to: initialTo },
    onRangeChange: function(range) {
      state.customDateRange = range;
      ('[data-analytics-range]').forEach(x => x.classList.remove('active'));
      renderAnalytics();
      if (typeof loadGrowth === 'function') loadGrowth();
    }
  });
}
if (window.PromptInputModule && #assistantPromptInputRoot) {
  PromptInputModule.mount(#assistantPromptInputRoot, {
    placeholder: "Test conversation: ask about services, pricing, hours...",
    onSubmit: function(text, meta) {
      const inp = #assistantTestInput;
      if (inp) inp.value = text;
      if (typeof sendAssistantTest === 'function') sendAssistantTest();
    }
  });
}}"""
        )
        dashboard_js = dashboard_js.replace(
            "const range=Number(state.analyticsRange||30),now=Date.now(),start=now-range*86400000;",
            "let start, end, range = Number(state.analyticsRange||30); const now=Date.now(); if (state.customDateRange && state.customDateRange.from) { start = new Date(state.customDateRange.from).setHours(0,0,0,0); end = state.customDateRange.to ? new Date(state.customDateRange.to).setHours(23,59,59,999) : now; range = Math.max(1, Math.round((end - start) / 86400000)); } else { start = now - range*86400000; end = now; }"
        )
        dashboard_js = dashboard_js.replace(
            "return Number.isFinite(t)&&t>=start",
            "return Number.isFinite(t)&&t>=start&&t<=end"
        )
        Path('static/dashboard.js').write_text(dashboard_js, encoding='utf-8')
        print("Patched dashboard.js")

    # 4. ai-create.html
    ai_create_html = Path('static/ai-create.html').read_text(encoding='utf-8')
    if 'prompt-input.css' not in ai_create_html:
        ai_create_html = ai_create_html.replace(
            '<link rel="stylesheet" href="/static/ai-create.css">',
            '<link rel="stylesheet" href="/static/ai-create.css">\n  <link rel="stylesheet" href="/static/prompt-input.css">'
        )
        ai_create_html = ai_create_html.replace(
            '<script src="/static/vendor/react-dom.production.min.js"></script>',
            '<script src="/static/vendor/react-dom.production.min.js"></script>\n<script src="/static/prompt-input.js"></script>'
        )
        ai_create_html = ai_create_html.replace(
            '<label class="prompt-box"><textarea id="businessDescription"',
            '<div id="aiCreatePromptInputRoot" style="margin-bottom:12px;"></div><label class="prompt-box" style="display:none;"><textarea id="businessDescription"'
        )
        Path('static/ai-create.html').write_text(ai_create_html, encoding='utf-8')
        print("Patched ai-create.html")
        
    # 5. ai-create.js
    ai_create_js = Path('static/ai-create.js').read_text(encoding='utf-8')
    if 'PromptInputModule.mount' not in ai_create_js:
        ai_create_js = ai_create_js.replace(
            "renderDirections();renderVersions();updatePromptWordHint();renderArtifact();",
            """renderDirections();renderVersions();updatePromptWordHint();renderArtifact();
if (window.PromptInputModule && #aiCreatePromptInputRoot) {
  PromptInputModule.mount(#aiCreatePromptInputRoot, {
    placeholder: "Example: We're a premium fitness studio in Chennai...",
    onSubmit: function(text, meta) {
      const ta = #businessDescription;
      if (ta) { ta.value = text; ta.dispatchEvent(new Event('input')); }
      if (#briefNext) #briefNext.click();
    },
    onChange: function(text) {
      const ta = #businessDescription;
      if (ta) { ta.value = text; ta.dispatchEvent(new Event('input')); }
    }
  });
}"""
        )
        Path('static/ai-create.js').write_text(ai_create_js, encoding='utf-8')
        print("Patched ai-create.js")

if __name__ == '__main__':
    mount_components()
