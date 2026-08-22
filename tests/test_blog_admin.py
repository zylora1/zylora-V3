from datetime import datetime,timedelta
import pytest
from apps.api.app.services.blog import *
from apps.api.app.services.admin import *
from apps.api.app.models import User
from apps.api.app.security import hash_password

def test_blog_crud_publication(db):
    p=create_post(db,'Title','title','Excerpt','This is a sufficiently long blog post body for testing.',seo_title='SEO')
    assert p.status=='DRAFT'
    set_status(db,p,'PUBLISHED'); assert p in public_posts(db)
    q=create_post(db,'Later','later','Excerpt','This is another sufficiently long scheduled body.')
    future=datetime.utcnow()+timedelta(days=1); set_status(db,q,'SCHEDULED',future); assert q not in public_posts(db)
    assert q in public_posts(db,future+timedelta(seconds=1))
    with pytest.raises(BlogError): create_post(db,'','','','short')
    with pytest.raises(BlogError): set_status(db,p,'BAD')
    with pytest.raises(BlogError): set_status(db,p,'SCHEDULED')

def test_admin_config(db,admin,user):
    set_config(db,admin,'plan.free.pages','2'); assert get_config(db,'plan.free.pages')=='2'
    set_config(db,admin,'plan.free.pages','3'); assert get_config(db,'plan.free.pages')=='3'
    assert get_config(db,'missing','x')=='x'
    with pytest.raises(AdminError): set_config(db,user,'x','y')
    with pytest.raises(ValueError): set_config(db,admin,'','y')
