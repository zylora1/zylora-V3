from __future__ import annotations
from io import BytesIO
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from ..models import Site

class ExportError(ValueError): pass

def safe_export_name(name: str) -> str:
    clean="".join(c.lower() if c.isalnum() else "-" for c in name).strip("-")
    while "--" in clean: clean=clean.replace("--","-")
    return clean or "zylora-site"

def _ts_literal(value) -> str:
    # JSON is valid JavaScript syntax and safely escapes customer-controlled strings.
    return json.dumps(value, ensure_ascii=False, separators=(",",":"))

def build_source_zip(site: Site, template_source: str, assets: dict[str,bytes] | None = None, *, content:dict|None=None, seo:dict|None=None, theme:dict|None=None) -> bytes:
    if not template_source.strip(): raise ExportError("template_source_required")
    assets=assets or {};content=content or {};seo=seo or {};theme=theme or {}
    title=str(seo.get('title') or content.get('businessName') or site.name)
    description=str(seo.get('description') or content.get('description') or '')
    canonical=seo.get('canonical') or seo.get('canonicalUrl')
    og_image=seo.get('ogImage')
    page=f'''import type {{Metadata}} from "next";\nimport Template from "./template";\nimport {{content,theme}} from "./site-data";\n\nexport const metadata:Metadata={{\n  title:{_ts_literal(title)},\n  description:{_ts_literal(description)},\n  alternates:{_ts_literal({'canonical':canonical}) if canonical else 'undefined'},\n  openGraph:{{title:{_ts_literal(title)},description:{_ts_literal(description)},images:{_ts_literal([og_image]) if og_image else 'undefined'}}},\n  twitter:{{card:"summary_large_image",title:{_ts_literal(title)},description:{_ts_literal(description)},images:{_ts_literal([og_image]) if og_image else 'undefined'}}}\n}};\n\nexport default function Page(){{return <Template content={{content}} theme={{theme}}/>}}\n'''
    site_data=f'export const content={_ts_literal(content)} as const;\nexport const theme={_ts_literal(theme)} as const;\nexport const seo={_ts_literal(seo)} as const;\n'
    types='''export type SiteTemplateContent={businessName?:string;headline?:string;description?:string;email?:string;phone?:string;address?:string;services?:Array<string|{name?:string;description?:string}>;heroImage?:string;imageAlt?:string;galleryImages?:string[];hoursWeek?:string;hoursSat?:string;hoursSun?:string;schemaType?:string;[key:string]:unknown};\nexport type SiteTemplateProps={content?:SiteTemplateContent;theme?:Record<string,unknown>};\n'''
    package={"scripts":{"dev":"next dev","build":"next build","start":"next start"},"dependencies":{"next":"16.1.0","react":"19.2.0","react-dom":"19.2.0",**({"framer-motion":"^12.0.0"} if "framer-motion" in template_source else {})},"devDependencies":{"typescript":"^5.9.0","@types/react":"^19.0.0","@types/node":"^22.0.0"}}
    tsconfig={"compilerOptions":{"target":"ES2022","lib":["dom","dom.iterable","esnext"],"strict":True,"noEmit":True,"module":"esnext","moduleResolution":"bundler","jsx":"preserve","plugins":[{"name":"next"}]},"include":["next-env.d.ts","**/*.ts","**/*.tsx",".next/types/**/*.ts"],"exclude":["node_modules"]}
    buf=BytesIO()
    with ZipFile(buf,"w",ZIP_DEFLATED) as z:
        z.writestr("package.json", json.dumps(package,indent=2))
        z.writestr("tsconfig.json", json.dumps(tsconfig,indent=2))
        z.writestr("next.config.ts", "import type {NextConfig} from 'next';\nconst config:NextConfig={};\nexport default config;\n")
        z.writestr("app/page.tsx", page)
        z.writestr("app/template.tsx", template_source)
        z.writestr("app/types.ts", types)
        z.writestr("app/site-data.ts", site_data)
        z.writestr("app/layout.tsx", "import type {ReactNode} from 'react';\nexport default function Layout({children}:{children:ReactNode}){return <html><body style={{margin:0}}>{children}</body></html>}\n")
        z.writestr("README.md", f"# {site.name}\n\nExported from Zylora with its selected template and saved content.\n\n```bash\nnpm install\nnpm run dev\n```\n")
        z.writestr("site.json", json.dumps({"name":site.name,"slug":site.slug,"origin":site.origin,"template_key":site.template_key,"content":content,"seo":seo,"theme":theme}, ensure_ascii=False, indent=2))
        for rel,data in assets.items():
            path=Path(rel)
            if path.is_absolute() or ".." in path.parts: raise ExportError("unsafe_asset_path")
            z.writestr(str(Path("public")/path),data)
    return buf.getvalue()
