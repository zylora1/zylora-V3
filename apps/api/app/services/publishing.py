from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
import boto3
from botocore.exceptions import ClientError
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import Publication, Site

class PublishError(ValueError): pass

class ObjectStore:
    def put(self, key: str, data: bytes) -> str: raise NotImplementedError
    def get(self, key: str) -> bytes: raise NotImplementedError

@dataclass
class FileObjectStore(ObjectStore):
    root: Path
    def put(self, key: str, data: bytes) -> str:
        path=self.root/key; path.parent.mkdir(parents=True,exist_ok=True); path.write_bytes(data); return key
    def get(self,key:str)->bytes: return (self.root/key).read_bytes()

@dataclass
class S3ObjectStore(ObjectStore):
    bucket: str
    client: object
    def put(self,key:str,data:bytes)->str:
        self.client.put_object(Bucket=self.bucket,Key=key,Body=data,ContentType='text/html; charset=utf-8')
        return key
    def get(self,key:str)->bytes:
        try:return self.client.get_object(Bucket=self.bucket,Key=key)['Body'].read()
        except ClientError as exc:
            code=str(exc.response.get('Error',{}).get('Code',''))
            if code in ('NoSuchKey','NotFound','404'): raise FileNotFoundError(key) from exc
            raise

def object_store_from_settings(config,local_root:Path=Path('.zylora-publications')) -> ObjectStore:
    if config.env in ('development','test'): return FileObjectStore(local_root)
    if not all((config.s3_bucket,config.s3_access_key,config.s3_secret_key)):
        raise PublishError('s3_storage_not_configured')
    client=boto3.client(
        's3',endpoint_url=config.s3_endpoint_url or None,region_name=config.s3_region or None,
        aws_access_key_id=config.s3_access_key,aws_secret_access_key=config.s3_secret_key,
    )
    return S3ObjectStore(config.s3_bucket,client)

def publish_site(db: Session, site: Site, store: ObjectStore, rendered: bytes) -> Publication:
    if not rendered: raise PublishError("empty_publication")
    versions=db.scalars(select(Publication).where(Publication.site_id==site.id)).all()
    version=max([p.version for p in versions],default=0)+1
    key=f"sites/{site.id}/v{version}/index.html"
    store.put(key,rendered)
    pub=Publication(site_id=site.id,version=version,storage_key=key); db.add(pub); db.commit(); db.refresh(pub); return pub
