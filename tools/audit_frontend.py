from pathlib import Path
import sys,re
root=Path(__file__).resolve().parents[1]
required=[
'apps/web/lib/api.ts','apps/web/components/AppShell.tsx','apps/web/components/AuthForm.tsx','apps/web/components/DashboardClient.tsx','apps/web/components/TemplateGallery.tsx','apps/web/components/EditorClient.tsx','apps/web/components/ManagedForm.tsx','apps/web/components/AdminClient.tsx','apps/web/app/editor/[siteId]/page.tsx','apps/web/app/sitemap.ts','apps/web/app/robots.ts','apps/web/app/error.tsx','apps/web/app/loading.tsx','apps/web/app/not-found.tsx']
errors=[]
for rel in required:
    if not (root/rel).exists():errors.append(f'missing {rel}')
for p in (root/'apps/web').rglob('*.tsx'):
    text=p.read_text(encoding='utf-8',errors='ignore')
    if 'localStorage.setItem' in text or 'localStorage.getItem' in text:errors.append(f'unsafe localStorage auth in {p.relative_to(root)}')
layout=(root/'apps/web/app/layout.tsx').read_text(encoding='utf-8')
for token in ['openGraph','twitter','metadataBase','icons']:
    if token not in layout:errors.append(f'root metadata missing {token}')
api=(root/'apps/web/lib/api.ts').read_text(encoding='utf-8')
for token in ["credentials:'include'",'ApiError']:
    if token not in api:errors.append(f'API client missing {token}')
editor=(root/'apps/web/components/EditorClient.tsx').read_text(encoding='utf-8')
for token in ['/sites/${site.id}','SEO','Publish','Save','Mobile','Tablet']:
    if token not in editor:errors.append(f'editor missing {token}')
css=(root/'apps/web/app/globals.css').read_text(encoding='utf-8')
for token in ['.dashboard','.templateGrid','.editorBody','.managedFlow','@media(max-width:720px)']:
    if token not in css:errors.append(f'CSS missing {token}')
if errors:
    print('FRONTEND AUDIT FAIL\n'+'\n'.join(errors));sys.exit(1)
print('FRONTEND AUDIT PASS: API client, cookie auth usage, dashboard/gallery/editor/admin/managed UI, SEO metadata routes, error/loading/404 and responsive CSS present')
