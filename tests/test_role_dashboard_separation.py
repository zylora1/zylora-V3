import io
import zipfile
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, now_iso
from app.security import hash_password, clear_rate_limits

@pytest.fixture
def client():
    clear_rate_limits()
    return TestClient(app)

@pytest.fixture
def test_users(client):
    clear_rate_limits()
    pw_hash = hash_password('TestPass123!')
    now = now_iso()
    with SessionLocal.begin() as db:
        # Create normal user
        db.execute(
            text("""INSERT OR REPLACE INTO users (id, email, password_hash, name, role, plan, email_verified, status, created_at, updated_at)
               VALUES ('user_norm_01', 'norm_user@zylora.com', :pw, 'Normal User', 'USER', 'STARTER', 1, 'ACTIVE', :now, :now)"""),
            {'pw': pw_hash, 'now': now}
        )
        # Create super admin user
        db.execute(
            text("""INSERT OR REPLACE INTO users (id, email, password_hash, name, role, plan, email_verified, status, created_at, updated_at)
               VALUES ('admin_super_01', 'super_admin@zylora.com', :pw, 'Super Admin', 'SUPER_ADMIN', 'PRO', 1, 'ACTIVE', :now, :now)"""),
            {'pw': pw_hash, 'now': now}
        )

    from app.security import new_session
    user_cookie, user_csrf, _ = new_session('user_norm_01')
    admin_cookie, admin_csrf, _ = new_session('admin_super_01')

    return {
        'user_cookie': user_cookie,
        'user_csrf': user_csrf,
        'admin_cookie': admin_cookie,
        'admin_csrf': admin_csrf
    }

def test_unauthenticated_routing(client):
    res_dash = client.get('/dashboard', follow_redirects=False)
    assert res_dash.status_code == 401, f'Expected 401 for /dashboard without auth, got {res_dash.status_code}'

    res_admin = client.get('/super-admin', follow_redirects=False)
    assert res_admin.status_code == 401, f'Expected 401 for /super-admin without auth, got {res_admin.status_code}'

    res_admin_sub = client.get('/super-admin/users', follow_redirects=False)
    assert res_admin_sub.status_code == 401, f'Expected 401 for /super-admin/users without auth, got {res_admin_sub.status_code}'

def test_user_role_routing_and_boundaries(client, test_users):
    cookies = {'zylora_session': test_users['user_cookie']}

    res_dash = client.get('/dashboard', cookies=cookies)
    assert res_dash.status_code == 200
    assert 'Zylora workspace' in res_dash.text
    assert 'data-testid="quick-import"' not in res_dash.text
    assert 'data-action="import-site"' not in res_dash.text
    assert 'id="admin"' not in res_dash.text
    assert 'importModal' not in res_dash.text

    res_admin = client.get('/super-admin', cookies=cookies)
    assert res_admin.status_code == 403

    res_admin_users = client.get('/super-admin/users', cookies=cookies)
    assert res_admin_users.status_code == 403

    res_admin_templates = client.get('/super-admin/templates', cookies=cookies)
    assert res_admin_templates.status_code == 403

    res_admin_blogs = client.get('/super-admin/blogs', cookies=cookies)
    assert res_admin_blogs.status_code == 403

    res_admin_pricing = client.get('/super-admin/pricing', cookies=cookies)
    assert res_admin_pricing.status_code == 403

def test_super_admin_role_routing(client, test_users):
    cookies = {'zylora_session': test_users['admin_cookie']}

    res_admin = client.get('/super-admin', cookies=cookies)
    assert res_admin.status_code == 200
    assert 'SUPER_ADMIN Control Plane' in res_admin.text
    assert 'super-admin.js' in res_admin.text
    assert 'importModal' in res_admin.text

    for sub in ['/super-admin/users', '/super-admin/templates', '/super-admin/blogs', '/super-admin/pricing']:
        res_sub = client.get(sub, cookies=cookies)
        assert res_sub.status_code == 200, f'Failed for {sub}: {res_sub.status_code}'

    res_dash = client.get('/dashboard', cookies=cookies, follow_redirects=False)
    assert res_dash.status_code in (302, 303, 307)
    assert '/super-admin' in res_dash.headers.get('location', '')

def test_import_endpoint_authorization(client, test_users):
    user_cookies = {'zylora_session': test_users['user_cookie']}
    admin_cookies = {'zylora_session': test_users['admin_cookie']}

    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, 'w') as zf:
        zf.writestr('index.html', '<!DOCTYPE html><html><head><title>Test Site</title></head><body><h1>Hello</h1></body></html>')
    zip_bytes = zip_buffer.getvalue()

    # 1. USER tries to import -> 403 FORBIDDEN
    files = {'file': ('site.zip', zip_bytes, 'application/zip')}
    res_user = client.post(
        '/api/sites/import',
        cookies=user_cookies,
        headers={'X-CSRF-Token': test_users['user_csrf']},
        files=files,
        data={'site_name': 'Hacked Site'}
    )
    assert res_user.status_code == 403, f'Expected 403 for user import, got {res_user.status_code}: {res_user.text}'
    assert 'Import Website is reserved for SUPER_ADMIN' in res_user.text or res_user.json().get('detail', {}).get('code') == 'FORBIDDEN'

    # 2. SUPER_ADMIN imports -> Success (200)
    files = {'file': ('site.zip', zip_bytes, 'application/zip')}
    res_admin = client.post(
        '/api/sites/import',
        cookies=admin_cookies,
        headers={'X-CSRF-Token': test_users['admin_csrf']},
        files=files,
        data={'site_name': 'Admin Imported Site'}
    )
    assert res_admin.status_code == 200, f'Expected 200 for admin import, got {res_admin.status_code}: {res_admin.text}'
    data = res_admin.json()
    assert 'site_id' in data
    assert data.get('page_count', 0) >= 1

def test_admin_api_boundaries_for_user(client, test_users):
    user_cookies = {'zylora_session': test_users['user_cookie']}
    admin_cookies = {'zylora_session': test_users['admin_cookie']}

    admin_endpoints = [
        ('/api/admin/overview', 'GET'),
        ('/api/admin/users', 'GET'),
        ('/api/admin/users/user_norm_01/360', 'GET'),
        ('/api/admin/payments', 'GET'),
        ('/api/admin/ai-usage', 'GET'),
        ('/api/admin/messaging', 'GET'),
        ('/api/admin/traffic', 'GET'),
        ('/api/admin/integrations', 'GET'),
        ('/api/admin/health', 'GET'),
        ('/api/admin/campaigns', 'GET'),
        ('/api/admin/plans', 'GET'),
        ('/api/admin/templates', 'GET'),
        ('/api/admin/leads', 'GET'),
        ('/api/admin/audit', 'GET'),
        ('/api/admin/blog', 'GET'),
        ('/api/admin/settings', 'GET'),
        ('/api/admin/freelancers', 'GET'),
        ('/api/admin/pro-leads', 'GET'),
    ]

    for path, method in admin_endpoints:
        res_user = client.get(path, cookies=user_cookies)
        assert res_user.status_code == 403, f'User was not blocked on {path} (got {res_user.status_code})'
        res_admin = client.get(path, cookies=admin_cookies)
        assert res_admin.status_code == 200, f'Admin failed on {path} (got {res_admin.status_code})'

def test_privilege_escalation_prevention(client, test_users):
    user_cookies = {'zylora_session': test_users['user_cookie']}

    res_patch = client.patch(
        '/api/auth/profile',
        cookies=user_cookies,
        headers={'X-CSRF-Token': test_users['user_csrf']},
        json={'name': 'Trying Escalation', 'role': 'SUPER_ADMIN'}
    )
    with SessionLocal() as db:
        user_row = db.execute(text("SELECT role FROM users WHERE id = 'user_norm_01'")).mappings().first()
    assert user_row['role'] == 'USER', f"Privilege escalation occurred! Role is {user_row['role']}"

def test_blog_cms_full_lifecycle(client, test_users):
    with SessionLocal.begin() as db:
        db.execute(text("DELETE FROM blog_posts WHERE slug LIKE 'test-platform-blog-post-lifecycle%'"))
    admin_cookies = {'zylora_session': test_users['admin_cookie']}
    admin_csrf = test_users['admin_csrf']
    headers = {'X-CSRF-Token': admin_csrf}

    # 1. Create draft article with rich text content (bold, headings, small text)
    create_payload = {
        'title': 'Test Platform Blog Post Lifecycle',
        'slug': 'test-platform-blog-post-lifecycle',
        'excerpt': 'A verified test article covering the complete lifecycle.',
        'content': '<h2>Heading 2</h2><p>This is <b>bold</b> text and <small>small fine-print</small>.</p>',
        'seo_title': 'Test Blog SEO Title',
        'seo_description': 'Test Blog SEO Description',
        'author_name': 'Super Admin',
        'indexable': True
    }
    res_create = client.post('/api/admin/blog', cookies=admin_cookies, headers=headers, json=create_payload)
    assert res_create.status_code == 200, f'Blog create failed: {res_create.text}'
    post_id = res_create.json()['id']
    assert post_id

    # 2. Get post detail
    res_detail = client.get(f'/api/admin/blog/{post_id}', cookies=admin_cookies)
    assert res_detail.status_code == 200
    detail = res_detail.json()
    assert detail['title'] == create_payload['title']
    assert detail['status'] == 'DRAFT'

    # 3. Update post
    update_payload = {
        **create_payload,
        'title': 'Updated Platform Blog Post Lifecycle',
        'content': '<h2>Updated Heading</h2><p>Updated <b>bold</b> and <small>small text</small>.</p>'
    }
    res_update = client.put(f'/api/admin/blog/{post_id}', cookies=admin_cookies, headers=headers, json=update_payload)
    assert res_update.status_code == 200

    # 4. Publish post
    res_pub = client.post(f'/api/admin/blog/{post_id}/publish', cookies=admin_cookies, headers=headers)
    assert res_pub.status_code == 200

    # 5. Verify visible on public /blog
    res_public = client.get('/blog')
    assert res_public.status_code == 200
    assert 'Updated Platform Blog Post Lifecycle' in res_public.text

    # 6. Verify public detail page /blog/{slug}
    res_post_page = client.get(f"/blog/{detail['slug']}")
    assert res_post_page.status_code == 200
    assert 'Updated Platform Blog Post Lifecycle' in res_post_page.text

    # 7. Unpublish post
    res_unpub = client.post(f'/api/admin/blog/{post_id}/unpublish', cookies=admin_cookies, headers=headers)
    assert res_unpub.status_code == 200

    # 8. Delete post
    res_del = client.delete(f'/api/admin/blog/{post_id}', cookies=admin_cookies, headers=headers)
    assert res_del.status_code == 200

    # 9. Verify gone
    res_gone = client.get(f'/api/admin/blog/{post_id}', cookies=admin_cookies)
    assert res_gone.status_code == 404

