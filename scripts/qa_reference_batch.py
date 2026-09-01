#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from html import escape
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
WIDTHS=(1440,1280,1024,768,430,390,375,360)
SHOT_WIDTHS={1440:900,768:1024,390:844}


def load_batch(path: Path) -> dict:
    return json.loads(path.read_text(encoding='utf-8'))


def composed_html(project: Path) -> str:
    body=(project/'render/home.html').read_text(encoding='utf-8')
    css=(project/'app/globals.css').read_text(encoding='utf-8')
    meta=json.loads((project/'metadata.json').read_text(encoding='utf-8'))
    values={
      '{{BUSINESS_NAME}}':escape(str(meta.get('demo_business_name') or meta.get('name') or 'Business')),
      '{{TAGLINE}}':escape(str(meta.get('demo_tagline') or 'A distinctive website.')),
      '{{DESCRIPTION}}':escape(str(meta.get('demo_description') or '')),
      '{{ACCENT}}':escape(str(meta.get('accent') or '#111111')),
    }
    for key,value in values.items():
        body=body.replace(key,value); css=css.replace(key,value)
    effects_css=(ROOT/'static/zylora-template-effects.css').read_text(encoding='utf-8')
    effects_js=(ROOT/'static/zylora-template-effects.js').read_text(encoding='utf-8').replace('</script>','<\\/script>')
    return (
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<style>{css}\n{effects_css}</style></head><body>{body}'
        f'<script>{effects_js}</script></body></html>'
    )


def static_checks(project: Path, slug: str) -> list[str]:
    failures=[]
    html=(project/'render/home.html').read_text(encoding='utf-8')
    css=(project/'app/globals.css').read_text(encoding='utf-8')
    meta=json.loads((project/'metadata.json').read_text(encoding='utf-8'))
    manifest=json.loads((project/'assets-manifest.json').read_text(encoding='utf-8'))
    gate=json.loads((project/'verification/render-gate.json').read_text(encoding='utf-8'))
    if len(re.findall(r'<h1\b',html,re.I))!=1: failures.append('h1_count')
    if len(re.findall(r'<footer\b',html,re.I))!=1: failures.append('footer_missing_or_duplicate')
    if len(re.findall(r'<a\b',html,re.I))<4: failures.append('insufficient_links')
    for token in ('{{BUSINESS_NAME}}','{{TAGLINE}}','{{DESCRIPTION}}'):
        if token not in html: failures.append(f'missing_content_token:{token}')
    if re.search(r'<(?:img|source|video|audio)[^>]+(?:src|srcset)=["\']https?://',html,re.I): failures.append('remote_media_hotlink')
    if re.search(r'url\(\s*["\']?https?://',css,re.I): failures.append('remote_css_hotlink')
    if len(set(re.findall(r'font-family\s*:\s*([^;}]+)',css,re.I)))<2: failures.append('single_typography_voice')
    if not meta.get('hidden') or meta.get('publication',{}).get('state')!='workbench': failures.append('candidate_not_private')
    if gate.get('status')!='blocked': failures.append('gate_not_blocked')
    if manifest.get('reference_medium')=='photographic' and manifest.get('all_assets_local') is not False: failures.append('pending_asset_wrongly_local')
    return failures


def main() -> int:
    ap=argparse.ArgumentParser()
    ap.add_argument('--batch',default='data/reference-batch-001.json')
    ap.add_argument('--screenshots',default='template_workbench/batch-001-layout-qa')
    ap.add_argument('--chromium',default='/usr/bin/chromium')
    args=ap.parse_args()
    batch_path=(ROOT/args.batch).resolve()
    batch=load_batch(batch_path)
    shot_root=(ROOT/args.screenshots).resolve(); shot_root.mkdir(parents=True,exist_ok=True)
    results=[]

    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True,executable_path=args.chromium,args=['--no-sandbox','--disable-dev-shm-usage'])
        for item in batch['projects']:
            slug=item['slug']; project=ROOT/'template_projects'/slug
            entry={'slug':slug,'static_failures':static_checks(project,slug),'viewports':{},'page_errors':[]}
            html=composed_html(project)
            page=browser.new_page(viewport={'width':1440,'height':900},device_scale_factor=1)
            errors=[]
            page.on('pageerror',lambda exc,errors=errors: errors.append(str(exc)))
            for width in WIDTHS:
                height=SHOT_WIDTHS.get(width,900)
                errors.clear()
                page.set_viewport_size({'width':width,'height':height})
                page.set_content(html,wait_until='domcontentloaded')
                page.wait_for_timeout(35)
                # Exercise every reveal/stagger target once at desktop width;
                # the remaining viewports focus on responsive geometry.
                if width==1440:
                    targets=page.locator('[data-zy-reveal],[data-zy-stagger]')
                    target_count=targets.count()
                    for i in range(target_count):
                        targets.nth(i).scroll_into_view_if_needed()
                        page.wait_for_timeout(18)
                page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
                page.wait_for_timeout(22)
                metrics=page.evaluate('''() => ({
                  innerWidth: window.innerWidth,
                  scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
                  h1: document.querySelectorAll('h1').length,
                  footer: !!document.querySelector('footer') && document.querySelector('footer').getBoundingClientRect().height > 1,
                  main: !!document.querySelector('main') && document.querySelector('main').getBoundingClientRect().height > 1,
                  bodyHeight: document.body.getBoundingClientRect().height,
                  revealCount: document.querySelectorAll('[data-zy-reveal],[data-zy-stagger]').length,
                  revealedCount: document.querySelectorAll('.zy-in').length,
                  motionTargets: document.querySelectorAll('[data-zy-reveal],[data-zy-stagger]').length
                })''')
                overflow=metrics['scrollWidth'] > metrics['innerWidth'] + 1
                motion_ok=(width!=1440 or metrics['motionTargets']==0 or metrics['revealedCount']==metrics['motionTargets'])
                passed=(not overflow and metrics['h1']==1 and metrics['footer'] and metrics['main'] and motion_ok and not errors)
                entry['viewports'][str(width)]={**metrics,'overflow':overflow,'passed':passed,'errors':errors}
                if width in SHOT_WIDTHS:
                    out=shot_root/f'{slug}-{width}.png'
                    if not out.exists():
                        # Screenshot layout with reduced motion so full-page
                        # evidence never captures elements mid-transition.
                        page.emulate_media(reduced_motion='reduce')
                        page.wait_for_timeout(25)
                        page.screenshot(path=str(out),full_page=True)
                        page.emulate_media(reduced_motion='no-preference')
            page.close()
            entry['responsive_passed']=not entry['static_failures'] and all(v['passed'] for v in entry['viewports'].values())
            results.append(entry)
        browser.close()

    report={
      'batch':batch['batch'],
      'candidate_count':len(results),
      'widths':list(WIDTHS),
      'screenshots_saved_at':str(shot_root.relative_to(ROOT)),
      'responsive_passed_count':sum(1 for x in results if x['responsive_passed']),
      'all_responsive_passed':all(x['responsive_passed'] for x in results),
      'results':results,
    }
    out=shot_root/'qa-report.json'
    out.write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(json.dumps({k:v for k,v in report.items() if k!='results'},indent=2))
    if not report['all_responsive_passed']:
        for x in results:
            if not x['responsive_passed']:
                print(json.dumps(x,indent=2))
        return 1
    return 0

if __name__=='__main__':
    raise SystemExit(main())
