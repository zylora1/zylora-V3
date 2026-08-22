from pathlib import Path
root=Path(__file__).resolve().parents[1]
eng=(root/'apps/web/components/SiteEngagement.tsx').read_text(encoding='utf-8')
page=(root/'apps/web/app/site/[slug]/page.tsx').read_text(encoding='utf-8')
admin=(root/'apps/web/components/AdminClient.tsx').read_text(encoding='utf-8')
editor=(root/'apps/web/components/EditorClient.tsx').read_text(encoding='utf-8')
main=(root/'apps/api/app/main.py').read_text(encoding='utf-8')
blog=(root/'apps/api/app/routers/blog.py').read_text(encoding='utf-8')
checks={
 'published engagement mounted':'<SiteEngagement' in page,
 'lead public endpoint used':"'/leads/public'" in eng,
 'calendar slots endpoint used':'/scheduling/slots' in eng,
 'calendar booking endpoint used':"'/scheduling/book'" in eng,
 'chatbot endpoint used':"'/chatbot/public'" in eng,
 '10 second trigger':'10000' in eng,
 'scroll-end trigger':'scrollHeight' in eng,
 'dismissible lead modal':'setLeadOpen(false)' in eng,
 'chatbot router included':'chatbot.router' in main,
 'blog edit endpoint':"@router.patch('/{post_id}')" in blog,
 'blog delete endpoint':"@router.delete('/{post_id}'" in blog,
 'blog admin authoring UI':'Blog publishing' in admin and 'Delete' in admin,
 'bulk email UI':'Bulk email' in admin and '/admin/email/bulk' in admin,
 'appointment settings in editor':"tab==='leads'" in editor and '/scheduling/config' in editor,
}
failed=[k for k,v in checks.items() if not v]
for k,v in checks.items(): print(('PASS' if v else 'FAIL'),k)
if failed: raise SystemExit('failed: '+', '.join(failed))
print('Engagement audit PASS')
