from __future__ import annotations
import json, os, re
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
import sys; sys.path.insert(0,str(ROOT))
from scripts.browser_e2e import inline_document, no_overflow
OUT=ROOT/'data'/'freelancer-turnstile-ui-qa.json'

def main():
    profile={"display_name":"Maya Studio","slug":"maya-studio","description":"Designer","bio":"Independent designer","skills":[],"services":[],"starting_price_minor":10000,"currency":"USD","years_experience":4,"links":[]}
    bootstrap=f'''<script>window.__turnstileRender=0;window.__submitted=null;window.turnstile={{render:(sel,opt)=>{{window.__turnstileRender++;return "widget-1"}},getResponse:()=>"verified-browser-token",reset:()=>{{}}}};window.fetch=async(url,opts={{}})=>{{url=String(url);if(url==="/api/public/security-config")return new Response(JSON.stringify({{turnstile_required:true,turnstile_configured:true,turnstile_site_key:"site-key"}}),{{status:200,headers:{{"Content-Type":"application/json"}}}});if(url.includes("/api/public/freelancers/maya-studio/enquiries")){{window.__submitted=JSON.parse(opts.body);return new Response(JSON.stringify({{ok:true}}),{{status:200,headers:{{"Content-Type":"application/json"}}}})}}if(url.includes("/api/public/freelancers/maya-studio"))return new Response(JSON.stringify({json.dumps(profile)}),{{status:200,headers:{{"Content-Type":"application/json"}}}});return new Response("{{}}",{{status:404,headers:{{"Content-Type":"application/json"}}}})}};</script>'''
    def patch(js): return re.sub(r"const slug=decodeURIComponent\(location\.pathname\.split\('/'\).*?;const money=",'const slug="maya-studio";const money=',js,count=1)
    html=inline_document('freelancer-profile.html','freelancers.css','freelancer-profile.js','',patch).replace('<script>',''+bootstrap+'<script>',1)
    checks=[]
    with sync_playwright() as p:
        exe='/usr/bin/chromium' if os.path.exists('/usr/bin/chromium') else None
        b=p.chromium.launch(headless=True,executable_path=exe,args=['--no-sandbox']); page=b.new_page(viewport={'width':390,'height':850}); page.set_content(html,wait_until='load'); page.wait_for_selector('#openEnquiry'); page.locator('#openEnquiry').click(); page.wait_for_function('window.__turnstileRender===1'); checks.append('Turnstile widget renders when production security config requires it')
        page.fill('#enquiryName','Guest'); page.fill('#enquiryEmail','guest@example.com'); page.fill('#enquiryType','Portfolio website'); page.fill('#enquiryDescription','A complete portfolio website project with enough detail for testing.'); page.locator('#enquiryForm button[type="submit"]').click(); page.wait_for_function('window.__submitted!==null'); token=page.evaluate('window.__submitted.turnstile_token'); assert token=='verified-browser-token',token; checks.append('browser submits actual Turnstile token with guest enquiry')
        page.wait_for_function("document.querySelector('#enquiryStatus')?.textContent.includes('Enquiry sent')")
        assert 'Enquiry sent' in page.text_content('#enquiryStatus'); checks.append('guest enquiry success state renders after Turnstile verification')
        assert no_overflow(page); checks.append('Turnstile enquiry remains responsive on mobile'); b.close()
    OUT.write_text(json.dumps({'checks':len(checks),'errors':0,'items':checks},indent=2)); print(f'freelancer_turnstile_ui_qa: {len(checks)} checks / 0 errors')
if __name__=='__main__': main()
