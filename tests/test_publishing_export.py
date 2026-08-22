from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
import pytest
from apps.api.app.services.sites import create_site
from apps.api.app.services.publishing import *
from apps.api.app.services.exporting import *

def test_file_store_publish_versioning(db,user,tmp_path):
    s=create_site(db,user,'Pub','pub','AI',2); store=FileObjectStore(tmp_path)
    p1=publish_site(db,s,store,b'<html>1</html>'); p2=publish_site(db,s,store,b'<html>2</html>')
    assert p1.version==1 and p2.version==2 and store.get(p1.storage_key)==b'<html>1</html>'
    with pytest.raises(PublishError): publish_site(db,s,store,b'')

def test_export_zip_and_safety(db,user):
    s=create_site(db,user,'My Great Site','great','AI',2)
    assert safe_export_name(' My Great Site!! ')=='my-great-site'
    assert safe_export_name('***')=='zylora-site'
    data=build_source_zip(s,'export default function Page(){return <main>Hello</main>}',{'hero.jpg':b'abc'})
    with ZipFile(BytesIO(data)) as z:
        names=set(z.namelist()); assert {'package.json','tsconfig.json','next.config.ts','app/page.tsx','app/template.tsx','app/types.ts','app/site-data.ts','app/layout.tsx','README.md','site.json','public/hero.jpg'} <= names
    with pytest.raises(ExportError): build_source_zip(s,'')
    with pytest.raises(ExportError): build_source_zip(s,'x',{'../secret':b'x'})

def test_export_site_json_uses_real_json_escaping(db,user):
    import json,io,zipfile
    from apps.api.app.services.exporting import build_source_zip
    from apps.api.app.services.sites import create_site
    s=create_site(db,user,'Clinic "Prime"','clinic-prime','TEMPLATE',2,'template-001')
    payload=build_source_zip(s,'export default function Page(){return <main/>}')
    with zipfile.ZipFile(io.BytesIO(payload)) as z:
        data=json.loads(z.read('site.json'))
    assert data['name']=='Clinic "Prime"'

def test_render_site_html_uses_customer_content_seo_theme_and_template(db,user):
    import json
    from apps.api.app.services.rendering import render_site_html
    s=create_site(db,user,'Internal Label','clinic-prime','TEMPLATE',2,'template-0001-dental-minimalism')
    s.content_json=json.dumps({
        'businessName':'Britto Dental & Skin',
        'headline':'Care that feels personal',
        'description':'Modern dental and skin care in Chennai.',
        'email':'hello@britto.example',
        'phone':'+91 90000 00000',
        'address':'Chennai, Tamil Nadu',
        'services':[{'name':'Dental implants'},'Skin consultation'],
        'schemaType':'Dentist',
    })
    s.seo_json=json.dumps({'title':'Britto Dental Chennai','description':'Dental and skin care','canonical':'https://britto.example/'})
    s.theme_json=json.dumps({'accent':'#123456'})
    html=render_site_html(s).decode()
    assert 'Britto Dental &amp; Skin' in html
    assert 'Care that feels personal' in html
    assert 'hello@britto.example' in html
    assert '<title>Britto Dental Chennai</title>' in html
    assert '<link rel="canonical" href="https://britto.example/">' in html
    assert 'application/ld+json' in html and 'Dentist' in html
    assert '#123456' in html
    assert 'data-template-key="template-0001-dental-minimalism"' in html
    assert 'Aperture Works' not in html


def test_render_site_html_escapes_stored_xss(db,user):
    import json
    from apps.api.app.services.rendering import render_site_html
    s=create_site(db,user,'<script>alert(1)</script>','safe','AI',2)
    s.content_json=json.dumps({'businessName':'<img src=x onerror=alert(1)>','headline':'<script>x</script>'})
    s.seo_json=json.dumps({'title':'"><script>alert(2)</script>'})
    html=render_site_html(s).decode()
    assert '<script>alert(1)</script>' not in html
    assert '<img src=x onerror=alert(1)>' not in html
    assert '&lt;script&gt;' in html

def test_export_source_contains_selected_template_and_customer_content(db,user):
    import json,io,zipfile
    s=create_site(db,user,'Internal','safe-export','TEMPLATE',2,'template-0001-dental-minimalism')
    content={'businessName':'Clinic "Prime" \\ North','headline':'Care with context','services':['Checkups','Therapy']}
    seo={'title':'Clinic Prime','description':'Real customer metadata','canonical':'https://clinic.example'}
    theme={'accent':'#123456'}
    source=(Path(__file__).resolve().parents[1]/'apps/web/templates/template-0001-dental-minimalism.tsx').read_text(encoding='utf-8')
    payload=build_source_zip(s,source,content=content,seo=seo,theme=theme)
    with zipfile.ZipFile(io.BytesIO(payload)) as z:
        page=z.read('app/page.tsx').decode();template=z.read('app/template.tsx').decode();data=z.read('app/site-data.ts').decode();site=json.loads(z.read('site.json'))
    assert 'Template0001' in template
    assert json.dumps(content,ensure_ascii=False,separators=(',',':')) in data
    assert 'Clinic Prime' in page and 'https://clinic.example' in page
    assert site['template_key']=='template-0001-dental-minimalism' and site['content']['headline']=='Care with context'
