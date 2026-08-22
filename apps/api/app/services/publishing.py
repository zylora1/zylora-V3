from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
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

def publish_site(db: Session, site: Site, store: ObjectStore, rendered: bytes) -> Publication:
    if not rendered: raise PublishError("empty_publication")
    versions=db.scalars(select(Publication).where(Publication.site_id==site.id)).all()
    version=max([p.version for p in versions],default=0)+1
    key=f"sites/{site.id}/v{version}/index.html"
    store.put(key,rendered)
    pub=Publication(site_id=site.id,version=version,storage_key=key); db.add(pub); db.commit(); db.refresh(pub); return pub
