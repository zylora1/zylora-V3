from __future__ import annotations
import json, os, re
from pathlib import Path
from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT=Path(__file__).resolve().parents[1]
import sys; sys.path.insert(0,str(ROOT))
from app.main import app
from app.db import SessionLocal
from scripts.browser_e2e import reset_db, inline_document, browser_bootstrap, patch_dashboard, new_page, no_overflow

OUT=ROOT/'data'/'marketplace-support-e2e.json'
checks=[]
def ck(cond,label):
    if not cond: raise AssertionError(label)
    checks.append(label); print('PASS',label,flush=True)

def signup(client,email,name):
    r=client.post('/api/auth/signup',json={'name':name,'email':email,'password':'SecurePass123!'}); assert r.status_code==200,r.text
    j=r.json(); client.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}); me=client.get('/api/auth/me').json(); client.post('/api/billing/select',headers={'X-CSRF-Token':me['csrf_token']},json={'plan':'FREE'}); return client.get('/api/auth/me').json()

def dashboard_html(): return inline_document('dashboard.html','dashboard.css','dashboard.js',browser_bootstrap(),patch_dashboard)

def main():
    reset_db(); client=TestClient(app); user=signup(client,'market-browser@example.com','Marketplace Browser'); uid=user['id']
    with sync_playwright() as p:
        exe='/usr/bin/chromium' if os.path.exists('/usr/bin/chromium') else None
        browser=p.chromium.launch(headless=True,executable_path=exe,args=['--no-sandbox'])
        page=new_page(browser,client,(1440,1000)); page.set_default_timeout(8000); page.set_content(dashboard_html(),wait_until='load'); page.wait_for_function("document.querySelector('#userName').textContent==='Marketplace Browser'")
        page.locator('.rail-btn[data-view="freelancer"]').click();
        page.fill('#freelancerFullName','Maya Designer'); page.fill('#freelancerName','Maya Studio');
        page.fill('#freelancerBio','Independent brand and web designer for thoughtful service businesses.');
        page.fill('#freelancerDescription','I create focused Zylora websites with strong typography, content hierarchy, accessibility and responsive polish for independent businesses.');
        page.fill('#freelancerSkills','Brand design, UI, Accessibility'); page.fill('#freelancerServices','Website design, Zylora setup'); page.fill('#freelancerYears','6'); page.fill('#freelancerPrice','450'); page.fill('#freelancerPortfolio','https://example.com/portfolio'); page.fill('#freelancerUpwork','https://www.upwork.com/freelancers/~maya');
        page.locator('[data-testid="freelancer-apply"]').click(); page.wait_for_function("document.querySelector('#freelancerStatusBadge').textContent.includes('PENDING')")
        ck('PENDING' in page.text_content('#freelancerStatusBadge'),'USER submits freelancer application in dashboard')
        with SessionLocal() as db:
            row=db.execute(text('SELECT status FROM freelancer_profiles WHERE user_id=:u'),{'u':uid}).first(); ck(row and row[0]=='PENDING','application persists as PENDING')
        page.locator('.rail-btn[data-view="support"]').click(); page.locator('#newSupportConversation').click(); page.fill('#supportSubject','Editor image question'); page.fill('#supportMessage','Please help me confirm the new media workflow on my website.'); page.locator('#supportComposeForm button[type="submit"]').click(); page.wait_for_function("document.querySelector('#supportThread .eyebrow') && document.querySelector('#supportThread .eyebrow').textContent.startsWith('ZSUP-')")
        ref=page.text_content('#supportThread .eyebrow').strip(); ck(ref.startswith('ZSUP-'),'USER creates support thread with immutable reference')
        ck(no_overflow(page),'USER Marketplace/Support desktop has no overflow'); page.set_viewport_size({'width':390,'height':850}); page.wait_for_timeout(80); ck(no_overflow(page),'USER Support mobile has no overflow'); page.close()

        # Promote same account only after the user-side flows so the real SUPER_ADMIN UI can moderate them.
        with SessionLocal.begin() as db: db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE id=:u"),{'u':uid})
        admin=new_page(browser,client,(1440,1000)); admin.set_default_timeout(9000); admin.set_content(dashboard_html(),wait_until='load'); admin.wait_for_function("document.querySelector('#userName').textContent==='Marketplace Browser'")
        admin.locator('.rail-btn[data-view="admin"]').click(); admin.locator('[data-admin-tab="adminFreelancers"]').click(); admin.wait_for_function("document.querySelectorAll('[data-admin-freelancer]').length>0")
        admin.locator('[data-admin-freelancer]').first.click(); admin.wait_for_function("document.querySelector('#adminFreelancerId').value.length>0")
        ck(admin.input_value('#adminFreelancerEditName')=='Maya Studio','SUPER_ADMIN opens full freelancer moderation editor')
        admin.select_option('#adminFreelancerEditStatus','APPROVED'); admin.fill('#adminFreelancerEditBio','Approved Zylora specialist for premium service-business websites.'); admin.locator('#adminFreelancerEditor button[type="submit"]').click(); admin.wait_for_timeout(150)
        with SessionLocal() as db:
            row=db.execute(text('SELECT status,slug FROM freelancer_profiles WHERE user_id=:u'),{'u':uid}).first(); ck(row and row[0]=='APPROVED' and row[1], 'SUPER_ADMIN approval persists and creates public slug'); slug=row[1]
        admin.locator('[data-admin-tab="adminSupport"]').click(); admin.wait_for_function("document.querySelectorAll('[data-admin-support]').length>0")
        # UI exposes the production filters required by the spec.
        ck(admin.locator('#adminSupportPlan').count()==1 and admin.locator('#adminSupportWebsite').count()==1 and admin.locator('#adminSupportAssignee').count()==1,'SUPER_ADMIN Support exposes plan website and assignee filters')
        admin.fill('#adminSupportSearch',ref); admin.locator('#adminSupportFilter').click(); admin.wait_for_timeout(120); admin.locator('[data-admin-support]').first.click(); admin.wait_for_function("document.querySelector('#adminSupportReplyForm')")
        admin.fill('#adminSupportReply','Your image editor is ready; the managed-media workflow is available in the editor.'); admin.locator('#adminSupportReplyForm button').click(); admin.wait_for_timeout(160)
        ck('Your image editor is ready' in admin.text_content('#adminSupportThread'),'SUPER_ADMIN replies through Support Inbox')
        admin.fill('#adminSupportReply','Internal routing note'); admin.check('#adminSupportInternal'); admin.locator('#adminSupportReplyForm button').click(); admin.wait_for_timeout(160); ck('Internal routing note' in admin.text_content('#adminSupportThread'),'SUPER_ADMIN internal note is visible to admin')
        admin.close()

        # Public directory and profile are real unauthenticated API-backed browser surfaces.
        guest=TestClient(app)
        directory=inline_document('freelancers.html','freelancers.css','freelancers.js',browser_bootstrap())
        pub=new_page(browser,guest,(1280,900)); pub.set_default_timeout(8000); pub.set_content(directory,wait_until='load'); pub.wait_for_function("document.querySelectorAll('.fm-card').length>0")
        ck('Maya Studio' in pub.text_content('#freelancerGrid'),'approved freelancer appears in public directory')
        ck(no_overflow(pub),'public freelancer directory has no overflow'); pub.close()

        # Profile JS uses pathname for slug; patch only that runtime input, not product behavior.
        def patch_profile(js): return re.sub(r"const slug=decodeURIComponent\(location\.pathname\.split\('/'\).*?;const money=",f"const slug={json.dumps(slug)};const money=",js,count=1)
        prof=inline_document('freelancer-profile.html','freelancers.css','freelancer-profile.js',browser_bootstrap(),patch_profile)
        pp=new_page(browser,guest,(1280,900)); pp.set_default_timeout(8000); pp.set_content(prof,wait_until='load'); pp.wait_for_function("document.querySelector('#profileRoot h1')")
        ck(pp.text_content('#profileRoot h1')=='Maya Studio','public freelancer profile renders approved freelancer')
        tracked=pp.locator('.fm-platform').first.get_attribute('href'); ck(tracked.startswith('/go/freelancer/'),'external CTA uses tracked Zylora redirect')
        r=guest.get(tracked,follow_redirects=False); loc=r.headers.get('location',''); ck(r.status_code in {302,307} and loc.startswith('https://'),'tracked redirect records click and redirects externally');
        with SessionLocal() as db: ck(db.execute(text('SELECT count(*) FROM freelancer_outbound_clicks WHERE freelancer_id=:u'),{'u':uid}).scalar_one()>=1,'outbound click analytics persisted')
        pp.locator('#openEnquiry').click(); pp.fill('#enquiryName','Guest Customer'); pp.fill('#enquiryEmail','guest-customer@example.com'); pp.fill('#enquiryType','Restaurant website'); pp.fill('#enquiryDescription','I need a polished restaurant marketing website with menu, story and booking information.'); pp.locator('#enquiryForm button[type="submit"]').click(); pp.wait_for_function("document.querySelector('#enquiryStatus').textContent.includes('Enquiry sent')")
        ck('Enquiry sent' in pp.text_content('#enquiryStatus'),'guest submits freelancer enquiry without account')
        with SessionLocal() as db: ck(db.execute(text('SELECT count(*) FROM freelancer_leads WHERE freelancer_id=:u'),{'u':uid}).scalar_one()==1,'guest enquiry persists exactly once')
        pp.set_viewport_size({'width':390,'height':850}); pp.wait_for_timeout(60); ck(no_overflow(pp),'freelancer profile/enquiry mobile has no overflow'); pp.close()

        # Return to USER role and verify admin internal note cannot leak, while reply unread is visible and clears on open.
        with SessionLocal.begin() as db: db.execute(text("UPDATE users SET role='USER' WHERE id=:u"),{'u':uid})
        userpg=new_page(browser,client,(1280,900)); userpg.set_default_timeout(8000); userpg.set_content(dashboard_html(),wait_until='load'); userpg.wait_for_function("document.querySelector('#userName').textContent==='Marketplace Browser'"); userpg.locator('.rail-btn[data-view="support"]').click(); userpg.wait_for_function("document.querySelectorAll('[data-support-thread]').length>0")
        ck(userpg.locator('[data-support-thread].unread').count()>=1,'USER sees unread Support reply indicator')
        userpg.locator('[data-support-thread]').first.click(); userpg.wait_for_timeout(140); body=userpg.text_content('#supportThread'); ck('Your image editor is ready' in body and 'Internal routing note' not in body,'USER sees admin reply but never internal note')
        userpg.close(); browser.close()

    OUT.write_text(json.dumps({'checks':len(checks),'errors':0,'items':checks},indent=2)); print(f'marketplace_support_e2e: {len(checks)} checks / 0 errors')

if __name__=='__main__': main()
