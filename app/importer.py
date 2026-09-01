from __future__ import annotations

import io
import json
import re
import secrets
import shutil
import tempfile
import zipfile
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from urllib.parse import urlparse
from uuid import uuid4

from bs4 import BeautifulSoup, Tag
from fastapi import HTTPException
from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso
from .media import create_asset, media_url
from .structured_editor import empty_document, instrument_editable_html
from .publish_permissions import capture_structural_snapshot

IMPORTED_RUNTIME_SLUG = 'imported-runtime'
MAX_IMPORT_ARCHIVE_MB = 40
MAX_IMPORT_FILES = 2500
MAX_IMPORT_EXPANDED_MB = 120
MAX_IMPORT_TEXT_MB = 4
MAX_IMPORT_PAGES = 30
IMAGE_EXTENSIONS = {'.jpg','.jpeg','.png','.webp','.avif'}
TEXT_EXTENSIONS = {'.html','.htm','.css','.js','.jsx','.ts','.tsx','.vue','.svelte','.astro','.json','.txt','.md'}
IGNORED_DIRS = {'node_modules','.git','.next','.cache','.turbo','coverage','vendor'}


@dataclass
class ImportPage:
    key: str
    title: str
    source_path: str
    html: str


def _safe_slug(value: str, fallback: str='page') -> str:
    value=re.sub(r'[^a-z0-9]+','-',str(value or '').lower()).strip('-')[:60]
    return value or fallback


def _safe_archive_name(name: str) -> str:
    base=Path(name or 'website.zip').name.replace(chr(92),'/').replace(chr(0),'')[:180]
    return re.sub(r'[^A-Za-z0-9._ -]+','-',base).strip() or 'website.zip'


def _is_ignored(path: Path) -> bool:
    return any(part in IGNORED_DIRS or part.startswith('.') for part in path.parts[:-1])


def _extract_zip(raw: bytes, dest: Path) -> list[str]:
    if len(raw) > MAX_IMPORT_ARCHIVE_MB*1024*1024:
        raise HTTPException(413,'Website archive is too large')
    try:
        z=zipfile.ZipFile(io.BytesIO(raw))
    except zipfile.BadZipFile as exc:
        raise HTTPException(422,'Invalid ZIP archive') from exc
    infos=z.infolist()
    if len(infos)>MAX_IMPORT_FILES:
        raise HTTPException(413,'Website archive contains too many files')
    expanded=0; names=[]
    for info in infos:
        name=info.filename.replace('\\','/')
        p=PurePosixPath(name)
        if p.is_absolute() or '..' in p.parts or '\x00' in name:
            raise HTTPException(422,'Unsafe path in website archive')
        # Unix symlink mode. Uploaded archives are data only; links are rejected.
        if (info.external_attr >> 16) & 0o170000 == 0o120000:
            raise HTTPException(422,'Symbolic links are not allowed in website archives')
        if info.is_dir():
            continue
        expanded += max(0,int(info.file_size))
        if expanded > MAX_IMPORT_EXPANDED_MB*1024*1024:
            raise HTTPException(413,'Expanded website archive is too large')
        target=(dest/Path(*p.parts)).resolve()
        if dest.resolve() not in target.parents:
            raise HTTPException(422,'Unsafe path in website archive')
        target.parent.mkdir(parents=True,exist_ok=True)
        with z.open(info) as src, open(target,'wb') as out:
            shutil.copyfileobj(src,out,1024*1024)
        names.append(name)
    if not names:
        raise HTTPException(422,'Website archive is empty')
    return names


def _read_text(path: Path, limit_mb: int=MAX_IMPORT_TEXT_MB) -> str:
    if path.stat().st_size > limit_mb*1024*1024:
        return ''
    try: return path.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        try: return path.read_text(encoding='utf-8',errors='ignore')
        except Exception: return ''


def detect_framework(root: Path) -> tuple[str,dict]:
    manifest={}
    packages=[]
    for pkg in [root/'package.json',*list(root.glob('*/package.json'))[:8]]:
        if pkg.is_file():
            try:
                data=json.loads(_read_text(pkg) or '{}')
                deps={**(data.get('dependencies') or {}),**(data.get('devDependencies') or {})}
                packages.append({'path':str(pkg.relative_to(root)).replace('\\','/'),'name':data.get('name'),'scripts':sorted((data.get('scripts') or {}).keys()),'dependencies':sorted(deps.keys())[:100]})
                if 'next' in deps: return 'Next.js',{'packages':packages}
                if '@angular/core' in deps: return 'Angular',{'packages':packages}
                if 'nuxt' in deps: return 'Nuxt',{'packages':packages}
                if 'vue' in deps: return 'Vue',{'packages':packages}
                if '@sveltejs/kit' in deps: return 'SvelteKit',{'packages':packages}
                if 'svelte' in deps: return 'Svelte',{'packages':packages}
                if 'astro' in deps: return 'Astro',{'packages':packages}
                if 'react' in deps: return 'React',{'packages':packages}
            except Exception:
                pass
    files=[p for p in root.rglob('*') if p.is_file() and not _is_ignored(p)]
    suffixes={p.suffix.lower() for p in files[:5000]}
    names={p.name for p in files[:5000]}
    if 'angular.json' in names: return 'Angular',{'packages':packages}
    if 'next.config.js' in names or 'next.config.mjs' in names or 'next.config.ts' in names: return 'Next.js',{'packages':packages}
    if any(x in suffixes for x in {'.vue'}): return 'Vue',{'packages':packages}
    if any(x in suffixes for x in {'.svelte'}): return 'Svelte',{'packages':packages}
    if any(x in suffixes for x in {'.astro'}): return 'Astro',{'packages':packages}
    if any(x in suffixes for x in {'.jsx','.tsx'}): return 'React',{'packages':packages}
    if any(p.suffix.lower() in {'.html','.htm'} for p in files): return 'HTML/CSS/JS',{'packages':packages}
    return 'Unknown frontend',{'packages':packages}


def _root_candidates(root: Path, include_source_root: bool=True) -> list[Path]:
    candidates=[]
    for name in ('out','dist','build','www','site'):
        for p in [root/name,*root.glob(f'*/{name}')]:
            if p.is_dir(): candidates.append(p)
    if include_source_root:
        candidates.extend([root/'public',*root.glob('*/public'),root])
    # stable unique list
    seen=set(); out=[]
    for p in candidates:
        rp=p.resolve()
        if rp not in seen: seen.add(rp); out.append(p)
    return out


def _page_key_from_html(path: Path, base: Path) -> str:
    rel=path.relative_to(base)
    if rel.name.lower() in {'index.html','index.htm'}:
        if rel.parent==Path('.'): return 'home'
        return _safe_slug('-'.join(rel.parent.parts))
    return _safe_slug('-'.join(rel.with_suffix('').parts))


def _static_html_pages(root: Path, framework: str='HTML/CSS/JS') -> tuple[list[ImportPage],Path|None]:
    # Framework source trees often contain index.html/component.html files that are not a rendered website.
    # Only treat recognized build/output roots as static output for framework projects.
    for base in _root_candidates(root,include_source_root=framework in {'HTML/CSS/JS','Unknown frontend'}):
        htmls=[p for p in base.rglob('*') if p.is_file() and p.suffix.lower() in {'.html','.htm'} and not _is_ignored(p)]
        if not htmls: continue
        # Prefer a root home page and keep the set within one build/static root.
        htmls=sorted(htmls,key=lambda p:(0 if p.name.lower()=='index.html' else 1,len(p.parts),str(p)))[:MAX_IMPORT_PAGES]
        pages=[]; used=set()
        for p in htmls:
            key=_page_key_from_html(p,base)
            if key in used: continue
            raw=_read_text(p)
            if not raw.strip(): continue
            soup=BeautifulSoup(raw,'html.parser')
            title=(soup.title.string.strip() if soup.title and soup.title.string else ('Home' if key=='home' else key.replace('-',' ').title()))
            pages.append(ImportPage(key,title[:120],str(p.relative_to(root)).replace('\\','/'),raw)); used.add(key)
        if pages:
            if not any(x.key=='home' for x in pages): pages[0].key='home'
            pages.sort(key=lambda x:(x.key!='home',x.key))
            return pages,base
    return [],None


def _strip_jsx_expressions(value: str) -> str:
    # Conservative source conversion. Never executes expressions or uploaded build scripts.
    value=re.sub(r'\{\/\*.*?\*\/\}','',value,flags=re.S)
    value=re.sub(r'\{(?:[^{}]|\{[^{}]*\})*\}','',value,flags=re.S)
    value=value.replace('className=','class=').replace('htmlFor=','for=')
    value=re.sub(r'<>','<div>',value); value=re.sub(r'</>','</div>',value)
    value=re.sub(r'<([A-Z][A-Za-z0-9_.]*)\b[^>]*\/>','',value)
    value=re.sub(r'<([A-Z][A-Za-z0-9_.]*)\b[^>]*>.*?</\1>','',value,flags=re.S)
    value=re.sub(r'\s(?:on[A-Z][A-Za-z]+|ref|key)=\{[^}]*\}','',value)
    value=re.sub(r'\s(?:src|href)=\{[^}]*\}','',value)
    value=re.sub(r'\sstyle=\{\{.*?\}\}','',value,flags=re.S)
    # JSX self-closing native tags need HTML-compatible syntax.
    value=re.sub(r'<(img|input|source|br|hr|meta|link)([^>]*)\s*/>',r'<\1\2>',value,flags=re.I)
    return value


def _source_markup(path: Path, framework: str) -> str:
    raw=_read_text(path)
    if not raw: return ''
    if framework in {'Vue','Nuxt'}:
        m=re.search(r'<template(?:\s[^>]*)?>(.*?)</template>',raw,re.S|re.I); return m.group(1) if m else ''
    if framework in {'Svelte','SvelteKit'}:
        raw=re.sub(r'<script\b[^>]*>.*?</script>','',raw,flags=re.S|re.I)
        raw=re.sub(r'<style\b[^>]*>.*?</style>','',raw,flags=re.S|re.I)
        raw=re.sub(r'\{[#:/@][^}]+\}','',raw)
        return re.sub(r'\{[^{}]+\}','',raw)
    if framework=='Astro':
        raw=re.sub(r'^---.*?---\s*','',raw,flags=re.S)
        return re.sub(r'\{[^{}]+\}','',raw)
    # React / Next.js / Angular inline source fallback.
    if framework=='Angular' and path.suffix.lower()=='.html': return raw
    m=re.search(r'return\s*\(\s*(<.*>)\s*\)\s*;?',raw,re.S)
    if not m:
        m=re.search(r'=>\s*\(\s*(<.*>)\s*\)',raw,re.S)
    return _strip_jsx_expressions(m.group(1)) if m else ''


def _source_component_pages(root: Path, framework: str) -> list[ImportPage]:
    candidates=[]
    if framework=='Next.js':
        candidates += list(root.glob('app/**/page.*')) + list(root.glob('pages/**/*.*'))
    elif framework in {'SvelteKit'}:
        candidates += list(root.glob('src/routes/**/+page.svelte'))
    elif framework=='Astro':
        candidates += list(root.glob('src/pages/**/*.astro'))
    elif framework in {'Vue','Nuxt'}:
        candidates += list(root.glob('pages/**/*.vue')) + list(root.glob('src/views/**/*.vue')) + list(root.glob('src/pages/**/*.vue'))
    elif framework=='Angular':
        candidates += list(root.glob('src/app/**/*.component.html'))
    elif framework in {'React','Svelte'}:
        candidates += list(root.glob('src/pages/**/*.*')) + list(root.glob('src/App.*')) + list(root.glob('src/routes/**/*.*'))
    supported={'.html','.htm','.jsx','.tsx','.js','.ts','.vue','.svelte','.astro'}
    candidates=[p for p in candidates if p.is_file() and p.suffix.lower() in supported and not _is_ignored(p)]
    pages=[]; used=set()
    for p in sorted(set(candidates),key=str)[:MAX_IMPORT_PAGES]:
        rel=p.relative_to(root).as_posix(); key='home'
        if framework=='Next.js':
            parts=list(p.relative_to(root).parts)
            if parts[0]=='app': key='home' if len(parts)==2 else _safe_slug('-'.join(parts[1:-1]))
            elif parts[0]=='pages': key='home' if p.stem=='index' else _safe_slug('-'.join(parts[1:-1]+[p.stem]))
        elif framework=='SvelteKit':
            parts=list(p.relative_to(root/'src/routes').parts[:-1]); key='home' if not parts else _safe_slug('-'.join(parts))
        elif framework=='Astro':
            relp=p.relative_to(root/'src/pages'); key='home' if p.stem=='index' else _safe_slug('-'.join(relp.with_suffix('').parts))
        else:
            stem=re.sub(r'\.(component|page|view)$','',p.stem,flags=re.I)
            key='home' if stem.lower() in {'app','home','index'} else _safe_slug(stem)
        if key in used: continue
        markup=_source_markup(p,framework)
        if not markup.strip(): continue
        pages.append(ImportPage(key,'Home' if key=='home' else key.replace('-',' ').title(),rel,markup)); used.add(key)
    if pages and not any(p.key=='home' for p in pages): pages[0].key='home'
    pages.sort(key=lambda p:(p.key!='home',p.key))
    return pages


def _local_css(root: Path, base: Path|None) -> str:
    roots=[base] if base else []
    roots += [root/'src',root/'styles',root]
    seen=set(); chunks=[]; size=0
    for r in roots:
        if not r or not r.exists(): continue
        for p in sorted(r.rglob('*.css')):
            if _is_ignored(p): continue
            rp=p.resolve()
            if rp in seen: continue
            seen.add(rp)
            txt=_read_text(p,2)
            if not txt: continue
            size+=len(txt.encode())
            if size>2*1024*1024: break
            chunks.append(f'/* imported: {p.relative_to(root).as_posix()} */\n{txt}')
        if size>2*1024*1024: break
    return '\n'.join(chunks)


def _safe_css(css: str) -> str:
    css=re.sub(r'@import\s+[^;]+;','',css,flags=re.I)
    css=re.sub(r'url\(\s*["\']?javascript:[^)]+\)','none',css,flags=re.I)
    return css[:2_000_000]


def _resolve_local_file(root: Path, source_file: Path, url: str) -> Path|None:
    val=(url or '').strip()
    if not val or val.startswith(('data:','blob:','#','//')): return None
    p=urlparse(val)
    if p.scheme in {'http','https'}: return None
    clean=p.path
    if not clean: return None
    if clean.startswith('/'):
        candidates=[root/clean.lstrip('/'),root/'public'/clean.lstrip('/')]
    else:
        candidates=[source_file.parent/clean,root/clean,root/'public'/clean]
    for c in candidates:
        try: rc=c.resolve()
        except Exception: continue
        if root.resolve() not in rc.parents and rc!=root.resolve(): continue
        if rc.is_file(): return rc
    return None


def _copy_asset(user_id: str, site_id: str, root: Path, source_file: Path, raw_url: str, cache: dict[str,dict], warnings: list[str]) -> dict|None:
    f=_resolve_local_file(root,source_file,raw_url)
    if not f or f.suffix.lower() not in IMAGE_EXTENSIONS: return None
    key=str(f.resolve())
    if key in cache: return cache[key]
    try:
        asset=create_asset(user_id,site_id,f.name,f.read_bytes(),alt_text='')
    except Exception as exc:
        warnings.append(f'Could not import image {f.relative_to(root).as_posix()}: {str(exc)[:120]}')
        return None
    cache[key]=asset; return asset


def _normalize_page(user_id: str, site_id: str, root: Path, page: ImportPage, global_css: str, cache: dict[str,dict], warnings: list[str]) -> tuple[str,list[str]]:
    source=(root/page.source_path).resolve() if (root/page.source_path).exists() else root/'index.html'
    soup=BeautifulSoup(page.html,'html.parser')
    # Imported code is content, never executable code. Zylora keeps its own trusted runtime.
    removed_scripts=len(soup.find_all('script'))
    for tag in soup.find_all(['script','iframe','object','embed']): tag.decompose()
    if removed_scripts: warnings.append(f'{page.source_path}: removed {removed_scripts} script tag(s); interactive behavior is not executed during import.')
    for tag in soup.find_all(True):
        for attr in list(tag.attrs):
            if attr.lower().startswith('on'): del tag.attrs[attr]
    # Gather local linked stylesheet content and remove the link. HTTPS font/style links may remain only if public.
    linked=[]
    for link in list(soup.find_all('link')):
        if str(link.get('rel') or '').lower().find('stylesheet')<0: continue
        href=str(link.get('href') or '')
        local=_resolve_local_file(root,source,href)
        if local and local.suffix.lower()=='.css':
            linked.append(_read_text(local,2)); link.decompose()
        elif href and not href.startswith('https://'):
            link.decompose()
    css=_safe_css('\n'.join(linked+[global_css]))
    # Managed local raster images become first-class Zylora media assets.
    asset_ids=[]
    for img in soup.find_all('img'):
        src=str(img.get('src') or '')
        asset=_copy_asset(user_id,site_id,root,source,src,cache,warnings)
        if asset:
            img['src']=asset['url']; img['data-zylora-imported-asset']=asset['id']; asset_ids.append(asset['id'])
            img.attrs.pop('srcset',None)
        elif src and not src.startswith(('https://','data:','/media/')):
            img['data-zylora-missing-src']=src; img['src']=''
            warnings.append(f'{page.source_path}: unresolved image {src}')
    for source_tag in soup.find_all('source'):
        srcset=str(source_tag.get('srcset') or '')
        first=srcset.split(',')[0].strip().split(' ')[0] if srcset else ''
        asset=_copy_asset(user_id,site_id,root,source,first,cache,warnings)
        if asset:
            source_tag['srcset']=asset['url']; source_tag['data-zylora-imported-asset']=asset['id']; asset_ids.append(asset['id'])
    for video in soup.find_all('video'):
        poster=str(video.get('poster') or '')
        asset=_copy_asset(user_id,site_id,root,source,poster,cache,warnings)
        if asset:
            video['poster']=asset['url']; video['data-zylora-imported-poster-asset']=asset['id']; asset_ids.append(asset['id'])
    for svg_img in soup.find_all('image'):
        href=str(svg_img.get('href') or svg_img.get('xlink:href') or '')
        asset=_copy_asset(user_id,site_id,root,source,href,cache,warnings)
        if asset:
            svg_img['href']=asset['url']; svg_img.attrs.pop('xlink:href',None); svg_img['data-zylora-imported-asset']=asset['id']; asset_ids.append(asset['id'])
    # Rewrite local image URLs embedded in CSS to managed-media URLs.
    def css_url(match):
        raw=match.group(1).strip().strip('"\'')
        asset=_copy_asset(user_id,site_id,root,source,raw,cache,warnings)
        if asset:
            asset_ids.append(asset['id']); return f'url("{asset["url"]}")'
        if raw.startswith(('https://','data:','#','/media/')): return match.group(0)
        return 'none'
    css=re.sub(r'url\(([^)]+)\)',css_url,css,flags=re.I)
    for style in soup.find_all('style'):
        style.string=re.sub(r'url\(([^)]+)\)',css_url,_safe_css(style.get_text() or ''),flags=re.I)
    if css:
        style=soup.new_tag('style'); style['data-zylora-imported-css']='true'; style.string=css
        (soup.head or soup).append(style)
    # Normalize local page links into the Zylora page graph; renderers resolve them for preview/live/export.
    for a in soup.find_all('a'):
        href=str(a.get('href') or '').strip()
        if not href or href.startswith(('#','mailto:','tel:','https://','http://','//')): continue
        path=urlparse(href).path.strip('/')
        if not path or path.lower() in {'index.html','index.htm'}: key='home'
        else:
            path=re.sub(r'/(?:index\.html?)$','',path,flags=re.I); path=re.sub(r'\.html?$','',path,flags=re.I)
            key=_safe_slug(path.replace('/','-'))
        a['data-zylora-page-link']=key; a['href']='/' if key=='home' else '/'+key
    # Guarantee a complete document shell so the existing brand/SEO/render stack can operate normally.
    if not soup.html:
        shell=BeautifulSoup('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body></body></html>','html.parser')
        for node in list(soup.contents): shell.body.append(node.extract())
        soup=shell
    if not soup.head:
        head=soup.new_tag('head'); soup.html.insert(0,head)
    if not soup.body:
        body=soup.new_tag('body'); soup.html.append(body)
    if not soup.title:
        title=soup.new_tag('title'); title.string=page.title; soup.head.append(title)
    # Persist stable editor IDs in imported bases. This makes every later image/text edit durable across export.
    normalized=instrument_editable_html(str(soup),page.key,IMPORTED_RUNTIME_SLUG)
    return normalized,sorted(set(asset_ids))


def _derive_pages(root: Path, framework: str) -> tuple[list[ImportPage],Path|None,str,list[str]]:
    warnings=[]
    static,base=_static_html_pages(root,framework)
    if static:
        return static,base,'static-rendered',warnings
    source=_source_component_pages(root,framework)
    if source:
        warnings.append('No static build output was found. Zylora converted source markup without executing uploaded build scripts; runtime-only components and dynamic data may require manual review.')
        return source,None,'source-normalized',warnings
    raise HTTPException(422,'No importable HTML or supported framework page source was found')


def prepare_import(raw: bytes, filename: str) -> tuple[Path,str,dict,list[ImportPage],Path|None,str,list[str]]:
    temp=Path(tempfile.mkdtemp(prefix='zylora-import-'))
    try:
        suffix=Path(filename or '').suffix.lower()
        if suffix=='.zip':
            names=_extract_zip(raw,temp)
            # Flatten one wrapper folder common in downloaded repositories.
            top={Path(n).parts[0] for n in names if Path(n).parts}
            root=temp
            if len(top)==1:
                one=temp/next(iter(top))
                if one.is_dir(): root=one
        elif suffix in {'.html','.htm'}:
            if len(raw)>MAX_IMPORT_TEXT_MB*1024*1024: raise HTTPException(413,'HTML file is too large')
            root=temp; (root/'index.html').write_bytes(raw)
        else:
            raise HTTPException(415,'Upload a ZIP project or an HTML file')
        framework,manifest=detect_framework(root)
        pages,base,mode,warnings=_derive_pages(root,framework)
        manifest.update({'detected_framework':framework,'conversion_mode':mode,'page_sources':[p.source_path for p in pages]})
        return temp,framework,manifest,pages,base,mode,warnings
    except Exception:
        shutil.rmtree(temp,ignore_errors=True)
        raise


def import_site(user_id: str, *, raw: bytes, filename: str, site_name: str|None=None) -> dict:
    temp,framework,manifest,pages,base,mode,warnings=prepare_import(raw,filename)
    root=temp
    # Respect one-wrapper-root flattening used by prepare_import.
    top=[p for p in temp.iterdir()]
    if len(top)==1 and top[0].is_dir() and not (temp/'index.html').exists():
        # Only descend when it looks like the prepared project root.
        maybe=top[0]
        if any(maybe.rglob('package.json')) or any(maybe.rglob('*.html')) or any(maybe.rglob('*.vue')) or any(maybe.rglob('*.jsx')):
            root=maybe
    sid=str(uuid4()); iid=str(uuid4())
    inferred=site_name.strip() if site_name and site_name.strip() else Path(_safe_archive_name(filename)).stem.replace('-',' ').replace('_',' ').strip().title()
    business=(inferred or pages[0].title or 'Imported website')[:120]
    slug=_safe_slug(business,'website')[:45]+'-'+secrets.token_hex(2)
    global_css=_local_css(root,base)
    doc=empty_document(); doc['template']={'slug':IMPORTED_RUNTIME_SLUG,'version':'1.0.0'}
    doc['pages']=[{'id':p.key,'slug':p.key,'title':p.title,'purpose':'Imported page'} for p in pages]
    doc['navigation']=[{'pageId':p.key,'label':p.title,'href':'/' if p.key=='home' else '/'+p.key} for p in pages]
    doc['designPlan']={'archetype':'imported-source','framework':framework,'conversion_mode':mode,'source_execution':'disabled'}
    doc['generationMeta']={'pipeline':'safe-import>framework-detect>asset-normalize>site-document','imported':True,'framework':framework,'conversion_mode':mode}
    now=now_iso(); cache={}; stored=[]
    try:
        # Create the owner-scoped site first because media rows reference it.
        with SessionLocal.begin() as db:
            db.execute(text('''INSERT INTO sites(id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,page_count,
              draft_structure_json,document_schema_version,document_version,generation_state,generation_meta_json,business_profile_json,updated_at,created_at)
              VALUES (:i,:u,:n,:s,:t,'IMPORT','DRAFT',:b,:g,:d,'#111111',:pc,:doc,3,1,'DRAFT',:gm,:bp,:c,:c)'''),{
              'i':sid,'u':user_id,'n':business,'s':slug,'t':IMPORTED_RUNTIME_SLUG,'b':business,'g':'Imported website','d':f'Imported from {framework} source.',
              'pc':len(pages),'doc':json.dumps(doc,separators=(',',':')),'gm':json.dumps(doc['generationMeta'],separators=(',',':')),'bp':json.dumps({'business_name':business,'imported':True},separators=(',',':')),'c':now})
        for p in pages:
            normalized,asset_ids=_normalize_page(user_id,sid,root,p,global_css,cache,warnings); stored.append((p,normalized,asset_ids))
        manifest.update({'managed_asset_count':len(cache),'page_count':len(stored)})
        with SessionLocal.begin() as db:
            for p,html,asset_ids in stored:
                db.execute(text('''INSERT INTO imported_site_pages(site_id,page_key,source_path,html,framework,asset_manifest_json,created_at,updated_at)
                    VALUES (:s,:p,:src,:h,:f,:a,:n,:n)'''),{'s':sid,'p':p.key,'src':p.source_path,'h':html,'f':framework,'a':json.dumps({'asset_ids':asset_ids},separators=(',',':')),'n':now})
            db.execute(text('''INSERT INTO site_imports(id,user_id,site_id,original_filename,detected_framework,conversion_mode,warnings_json,manifest_json,created_at)
                VALUES (:i,:u,:s,:f,:d,:m,:w,:j,:n)'''),{'i':iid,'u':user_id,'s':sid,'f':_safe_archive_name(filename),'d':framework,'m':mode,'w':json.dumps(warnings[:200],separators=(',',':')),'j':json.dumps(manifest,separators=(',',':')),'n':now})
            baseline=capture_structural_snapshot({p.key:html for p,html,_ in stored},template_slug=IMPORTED_RUNTIME_SLUG,template_version='1.0.0')
            db.execute(text('UPDATE sites SET template_default_structural_snapshot_json=:j,template_default_snapshot_created_at=:a WHERE id=:s'),{'j':json.dumps(baseline,separators=(',',':')),'a':now,'s':sid})
        return {'site_id':sid,'slug':slug,'framework':framework,'conversion_mode':mode,'page_count':len(stored),'managed_assets':len(cache),'warnings':warnings[:50],'import_id':iid}
    except Exception:
        # Avoid orphaned partial imports/media on any normalization failure.
        with SessionLocal.begin() as db:
            db.execute(text('DELETE FROM imported_site_pages WHERE site_id=:s'),{'s':sid})
            db.execute(text('DELETE FROM site_imports WHERE site_id=:s'),{'s':sid})
            rows=db.execute(text('SELECT storage_key FROM media_assets WHERE site_id=:s'),{'s':sid}).fetchall()
            db.execute(text('DELETE FROM media_assets WHERE site_id=:s'),{'s':sid})
            db.execute(text('DELETE FROM sites WHERE id=:s'),{'s':sid})
        from .media import delete_bytes
        for (storage_key,) in rows:
            try: delete_bytes(storage_key)
            except Exception: pass
        raise
    finally:
        shutil.rmtree(temp,ignore_errors=True)


def render_imported_page(site_id: str, page_key: str) -> str:
    with SessionLocal() as db:
        row=db.execute(text('SELECT html FROM imported_site_pages WHERE site_id=:s AND page_key=:p'),{'s':site_id,'p':page_key or 'home'}).first()
    if not row: raise KeyError(page_key)
    return str(row[0])


def imported_asset_ids(site_id: str) -> set[str]:
    with SessionLocal() as db:
        rows=db.execute(text('SELECT asset_manifest_json,html FROM imported_site_pages WHERE site_id=:s'),{'s':site_id}).fetchall()
    ids=set()
    for manifest,html in rows:
        try:
            data=json.loads(manifest or '{}'); ids.update(str(x) for x in data.get('asset_ids',[]) if x)
        except Exception: pass
        ids.update(re.findall(r'/media/([A-Za-z0-9_-]{8,80})/',str(html or '')))
    return ids


def import_summary(site_id: str, user_id: str) -> dict|None:
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM site_imports WHERE site_id=:s AND user_id=:u ORDER BY created_at DESC LIMIT 1'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: return None
    out=dict(row)
    for key in ('warnings_json','manifest_json'):
        try: out[key[:-5] if key.endswith('_json') else key]=json.loads(out.get(key) or ('[]' if 'warnings' in key else '{}'))
        except Exception: out[key[:-5] if key.endswith('_json') else key]=[] if 'warnings' in key else {}
    return out
