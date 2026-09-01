from __future__ import annotations

import hashlib
import io
import ipaddress
import json
import mimetypes
import os
import re
import socket
from pathlib import Path
from urllib.parse import urlparse
from uuid import uuid4

import boto3
import httpx
from fastapi import HTTPException
from PIL import Image, ImageFile, UnidentifiedImageError
from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso

ImageFile.LOAD_TRUNCATED_IMAGES = False
Image.MAX_IMAGE_PIXELS = max(1, int(settings.media_max_pixels))

_ALLOWED_FORMATS = {
    'JPEG': ('image/jpeg', '.jpg'),
    'PNG': ('image/png', '.png'),
    'WEBP': ('image/webp', '.webp'),
    'AVIF': ('image/avif', '.avif'),
}
_SAFE_FILENAME = re.compile(r'[^A-Za-z0-9._-]+')


def _clean_filename(name: str) -> str:
    raw = Path(name or 'image').name.replace('\x00', '')[:180]
    clean = _SAFE_FILENAME.sub('-', raw).strip('.-_') or 'image'
    return clean[:120]


def _validate_image_bytes(data: bytes) -> tuple[bytes, str, str, int, int]:
    max_bytes = max(1, int(settings.media_max_upload_mb)) * 1024 * 1024
    if not data:
        raise HTTPException(422, 'Upload failed: empty file')
    if len(data) > max_bytes:
        raise HTTPException(413, 'Image is too large')
    try:
        Image.init()
        probe = Image.open(io.BytesIO(data))
        fmt = (probe.format or '').upper()
        if fmt not in _ALLOWED_FORMATS:
            raise HTTPException(415, 'Unsupported image format')
        width, height = int(probe.width), int(probe.height)
        if width < 1 or height < 1 or width * height > int(settings.media_max_pixels):
            raise HTTPException(413, 'Image dimensions are too large')
        probe.verify()
        img = Image.open(io.BytesIO(data))
        img.load()
    except HTTPException:
        raise
    except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError) as exc:
        raise HTTPException(422, 'Unable to process image') from exc

    mime, ext = _ALLOWED_FORMATS[fmt]
    # Re-encode to strip EXIF/metadata and reject polyglot/trailing executable payloads.
    out = io.BytesIO()
    save_kwargs: dict = {}
    if fmt == 'JPEG':
        if img.mode not in {'RGB', 'L'}:
            img = img.convert('RGB')
        save_kwargs = {'quality': 90, 'optimize': True, 'progressive': True}
    elif fmt == 'PNG':
        save_kwargs = {'optimize': True}
    elif fmt == 'WEBP':
        save_kwargs = {'quality': 88, 'method': 6}
    elif fmt == 'AVIF':
        save_kwargs = {'quality': 82}
    try:
        img.save(out, format=fmt, **save_kwargs)
    except Exception as exc:
        raise HTTPException(422, 'Unable to process image') from exc
    normalized = out.getvalue()
    if len(normalized) > max_bytes:
        raise HTTPException(413, 'Processed image is too large')
    return normalized, mime, ext, width, height


def _s3_client():
    kwargs = {
        'region_name': settings.media_s3_region or 'us-east-1',
    }
    if settings.media_s3_endpoint_url:
        kwargs['endpoint_url'] = settings.media_s3_endpoint_url
    if settings.media_s3_access_key_id:
        kwargs['aws_access_key_id'] = settings.media_s3_access_key_id
    if settings.media_s3_secret_access_key:
        kwargs['aws_secret_access_key'] = settings.media_s3_secret_access_key
    return boto3.client('s3', **kwargs)


def validate_media_storage_config() -> None:
    provider = (settings.media_storage_provider or 'local').lower()
    if provider not in {'local', 's3'}:
        raise RuntimeError('MEDIA_STORAGE_PROVIDER must be local or s3')
    if provider == 's3' and not settings.media_s3_bucket:
        raise RuntimeError('MEDIA_S3_BUCKET is required when MEDIA_STORAGE_PROVIDER=s3')
    if provider == 'local':
        Path(settings.media_storage_dir).mkdir(parents=True, exist_ok=True)


def store_bytes(storage_key: str, data: bytes, mime_type: str) -> None:
    provider = (settings.media_storage_provider or 'local').lower()
    validate_media_storage_config()
    if provider == 's3':
        _s3_client().put_object(Bucket=settings.media_s3_bucket, Key=storage_key, Body=data, ContentType=mime_type, CacheControl='public,max-age=31536000,immutable')
        return
    base = Path(settings.media_storage_dir).resolve()
    target = (base / storage_key).resolve()
    if base not in target.parents:
        raise RuntimeError('Unsafe media storage path')
    target.parent.mkdir(parents=True, exist_ok=True)
    tmp = target.with_suffix(target.suffix + '.tmp')
    tmp.write_bytes(data)
    os.replace(tmp, target)


def load_bytes(storage_key: str) -> bytes:
    provider = (settings.media_storage_provider or 'local').lower()
    validate_media_storage_config()
    if provider == 's3':
        return _s3_client().get_object(Bucket=settings.media_s3_bucket, Key=storage_key)['Body'].read()
    base = Path(settings.media_storage_dir).resolve()
    target = (base / storage_key).resolve()
    if base not in target.parents or not target.exists():
        raise FileNotFoundError(storage_key)
    return target.read_bytes()


def delete_bytes(storage_key: str) -> None:
    provider = (settings.media_storage_provider or 'local').lower()
    if provider == 's3':
        _s3_client().delete_object(Bucket=settings.media_s3_bucket, Key=storage_key)
        return
    base = Path(settings.media_storage_dir).resolve()
    target = (base / storage_key).resolve()
    if base in target.parents:
        target.unlink(missing_ok=True)


def create_asset(user_id: str, site_id: str, original_filename: str, raw: bytes, *, alt_text: str = '', license_data: dict | None = None) -> dict:
    normalized, mime, ext, width, height = _validate_image_bytes(raw)
    asset_id = str(uuid4())
    clean_original = _clean_filename(original_filename)
    stem = _clean_filename(Path(clean_original).stem)[:72] or 'image'
    filename = f'{stem}{ext}'
    prefix = (settings.media_s3_prefix or 'zylora-media').strip('/')
    storage_key = f'{prefix}/{user_id}/{site_id}/{asset_id}{ext}'
    store_bytes(storage_key, normalized, mime)
    now = now_iso()
    provider = (settings.media_storage_provider or 'local').lower()
    try:
        with SessionLocal.begin() as db:
            db.execute(text('''INSERT INTO media_assets(id,user_id,site_id,filename,original_filename,mime_type,size_bytes,width,height,storage_key,storage_provider,alt_text,license_json,created_at,updated_at)
                VALUES (:i,:u,:s,:f,:o,:m,:z,:w,:h,:k,:p,:a,:l,:c,:c)'''), {
                'i': asset_id, 'u': user_id, 's': site_id, 'f': filename, 'o': clean_original, 'm': mime,
                'z': len(normalized), 'w': width, 'h': height, 'k': storage_key, 'p': provider,
                'a': (alt_text or '')[:500], 'l': json.dumps(license_data or {}, separators=(',', ':')), 'c': now,
            })
    except Exception:
        delete_bytes(storage_key)
        raise
    return get_asset(asset_id, user_id=user_id, site_id=site_id)


def get_asset(asset_id: str, *, user_id: str | None = None, site_id: str | None = None, include_deleted: bool = False) -> dict:
    where = ['id=:i']
    params: dict = {'i': asset_id}
    if user_id is not None:
        where.append('user_id=:u'); params['u'] = user_id
    if site_id is not None:
        where.append('site_id=:s'); params['s'] = site_id
    if not include_deleted:
        where.append('deleted_at IS NULL')
    with SessionLocal() as db:
        row = db.execute(text(f"SELECT * FROM media_assets WHERE {' AND '.join(where)}"), params).mappings().first()
    if not row:
        raise HTTPException(404, 'Asset not found')
    result = dict(row)
    result['url'] = f"/media/{result['id']}/{result['filename']}"
    try:
        result['license'] = json.loads(result.get('license_json') or '{}')
    except Exception:
        result['license'] = {}
    return result


def list_assets(user_id: str, site_id: str) -> list[dict]:
    with SessionLocal() as db:
        rows = db.execute(text('SELECT * FROM media_assets WHERE user_id=:u AND site_id=:s AND deleted_at IS NULL ORDER BY created_at DESC'), {'u': user_id, 's': site_id}).mappings().all()
    out = []
    for row in rows:
        item = dict(row); item['url'] = f"/media/{item['id']}/{item['filename']}"
        try: item['license'] = json.loads(item.get('license_json') or '{}')
        except Exception: item['license'] = {}
        out.append(item)
    return out


def update_asset(asset_id: str, user_id: str, site_id: str, *, filename: str | None = None, alt_text: str | None = None) -> dict:
    current = get_asset(asset_id, user_id=user_id, site_id=site_id)
    new_name = current['filename']
    if filename is not None:
        stem = _clean_filename(Path(filename).stem)[:72] or Path(current['filename']).stem
        new_name = stem + Path(current['filename']).suffix.lower()
    new_alt = current.get('alt_text') or '' if alt_text is None else str(alt_text)[:500]
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE media_assets SET filename=:f,alt_text=:a,updated_at=:n WHERE id=:i AND user_id=:u AND site_id=:s'), {'f': new_name, 'a': new_alt, 'n': now_iso(), 'i': asset_id, 'u': user_id, 's': site_id})
    return get_asset(asset_id, user_id=user_id, site_id=site_id)


def _asset_referenced(asset_id: str, site_id: str) -> bool:
    needle = f'"asset_id":"{asset_id}"'
    needle2 = f'"assetId":"{asset_id}"'
    with SessionLocal() as db:
        site = db.execute(text('SELECT draft_structure_json,published_structure_json,published_snapshot_json FROM sites WHERE id=:s'), {'s': site_id}).mappings().first()
        if site:
            for value in site.values():
                if value and (needle in str(value) or needle2 in str(value)): return True
        rev = db.execute(text('SELECT 1 FROM site_revisions WHERE site_id=:s AND state_json LIKE :aid LIMIT 1'), {'s': site_id, 'aid': f'%{asset_id}%'}).first()
        if rev: return True
        imported = db.execute(text('SELECT 1 FROM imported_site_pages WHERE site_id=:s AND (html LIKE :aid OR asset_manifest_json LIKE :aid) LIMIT 1'), {'s':site_id,'aid':f'%{asset_id}%'}).first()
        if imported: return True
    return False


def soft_delete_asset(asset_id: str, user_id: str, site_id: str) -> None:
    get_asset(asset_id, user_id=user_id, site_id=site_id)
    if _asset_referenced(asset_id, site_id):
        raise HTTPException(409, 'Asset is still referenced by the draft, published website, or revision history')
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE media_assets SET deleted_at=:n,updated_at=:n WHERE id=:i AND user_id=:u AND site_id=:s'), {'n': now_iso(), 'i': asset_id, 'u': user_id, 's': site_id})


def asset_is_publicly_referenced(asset_id: str) -> bool:
    # Public delivery is allowed only when the asset is referenced by the immutable structure of a LIVE site.
    needle = f'"asset_id":"{asset_id}"'
    needle2 = f'"assetId":"{asset_id}"'
    with SessionLocal() as db:
        direct=db.execute(text("SELECT 1 FROM sites WHERE status='LIVE' AND (published_structure_json LIKE :n OR published_structure_json LIKE :n2 OR published_snapshot_json LIKE :n OR published_snapshot_json LIKE :n2) LIMIT 1"), {'n': f'%{needle}%', 'n2': f'%{needle2}%'}).first()
        if direct: return True
        imported=db.execute(text("SELECT 1 FROM imported_site_pages p JOIN sites s ON s.id=p.site_id WHERE s.status='LIVE' AND (p.html LIKE :aid OR p.asset_manifest_json LIKE :aid) LIMIT 1"),{'aid':f'%{asset_id}%'}).first()
        return bool(imported)


def media_url(asset_id: str) -> str:
    try:
        asset = get_asset(asset_id)
    except HTTPException:
        return ''
    return f"/media/{asset_id}/{asset['filename']}"


def _is_public_https_url(url: str) -> bool:
    p = urlparse((url or '').strip())
    if p.scheme != 'https' or not p.hostname or p.username or p.password:
        return False
    host = p.hostname.lower().rstrip('.')
    if host in {'localhost'} or host.endswith('.local') or host.endswith('.internal'):
        return False
    try:
        ip = ipaddress.ip_address(host)
        return not (ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved or ip.is_multicast or ip.is_unspecified)
    except ValueError:
        pass
    try:
        infos = socket.getaddrinfo(host, 443, type=socket.SOCK_STREAM)
    except OSError:
        return False
    for info in infos:
        try:
            ip = ipaddress.ip_address(info[4][0])
            if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved or ip.is_multicast or ip.is_unspecified:
                return False
        except ValueError:
            return False
    return True


def pexels_search(query: str, per_page: int = 20) -> dict:
    if not settings.pexels_api_key:
        return {'enabled': False, 'items': []}
    q = (query or '').strip()[:120]
    if not q:
        return {'enabled': True, 'items': []}
    with httpx.Client(timeout=15, follow_redirects=False) as client:
        r = client.get('https://api.pexels.com/v1/search', params={'query': q, 'per_page': max(1, min(int(per_page), 40))}, headers={'Authorization': settings.pexels_api_key})
        r.raise_for_status(); data = r.json()
    items = []
    for photo in data.get('photos', []):
        src = photo.get('src') or {}
        url = src.get('large2x') or src.get('large') or src.get('original')
        if not url or not _is_public_https_url(url): continue
        items.append({'id': str(photo.get('id')), 'preview_url': src.get('medium') or url, 'import_url': url, 'photographer': str(photo.get('photographer') or ''), 'source_url': str(photo.get('url') or ''), 'provider': 'Pexels'})
    return {'enabled': True, 'items': items}


def import_remote_stock(user_id: str, site_id: str, url: str, *, photographer: str = '', source_url: str = '', provider: str = 'Pexels') -> dict:
    # Stock import is intentionally provider-bound rather than a generic server-side URL fetcher.
    # This eliminates an unnecessary SSRF surface while preserving optional Pexels search/import.
    p=urlparse((url or '').strip()); provider_name=(provider or '').strip().lower()
    if provider_name != 'pexels' or (p.hostname or '').lower().rstrip('.') != 'images.pexels.com':
        raise HTTPException(422, 'Unsupported stock image source')
    if not _is_public_https_url(url):
        raise HTTPException(422, 'Unsafe remote image URL')
    if source_url:
        sp=urlparse(source_url.strip()); shost=(sp.hostname or '').lower().rstrip('.')
        if sp.scheme!='https' or shost not in {'pexels.com','www.pexels.com'}:
            raise HTTPException(422,'Invalid Pexels attribution URL')
    with httpx.Client(timeout=20, follow_redirects=False) as client:
        r = client.get(url, headers={'User-Agent': 'ZyloraMedia/1.0'})
        if r.status_code != 200: raise HTTPException(422, 'Unable to import stock image')
        content_type = (r.headers.get('content-type') or '').split(';')[0].strip().lower()
        if content_type not in {'image/jpeg','image/png','image/webp','image/avif'}:
            raise HTTPException(415, 'Unsupported image format')
        max_bytes = max(1, int(settings.media_max_upload_mb)) * 1024 * 1024
        if len(r.content) > max_bytes:
            raise HTTPException(413, 'Image is too large')
        data = r.content
    return create_asset(user_id, site_id, f'{provider.lower()}-{hashlib.sha256(url.encode()).hexdigest()[:10]}.jpg', data, license_data={'provider': provider, 'photographer': photographer[:160], 'source_url': source_url[:1000]})
