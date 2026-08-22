from datetime import datetime
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import BlogPost
from ..enums import BlogStatus

class BlogError(ValueError): pass

def create_post(db: Session, title: str, slug: str, excerpt: str, content: str, **meta) -> BlogPost:
    if not title.strip() or not slug.strip() or len(content.strip()) < 20: raise BlogError("invalid_post")
    if db.scalar(select(BlogPost).where(BlogPost.slug==slug.strip())): raise BlogError("slug_exists")
    post=BlogPost(title=title.strip(), slug=slug.strip(), excerpt=excerpt.strip(), content=content.strip(), featured_image=meta.get("featured_image"), seo_title=meta.get("seo_title"), seo_description=meta.get("seo_description"), canonical_url=meta.get("canonical_url"), status=BlogStatus.DRAFT)
    db.add(post); db.commit(); db.refresh(post); return post

def update_post(db: Session, post: BlogPost, **changes) -> BlogPost:
    allowed={"title","slug","excerpt","content","featured_image","seo_title","seo_description","canonical_url"}
    for key,value in changes.items():
        if key not in allowed or value is None: continue
        if key in {"title","slug","excerpt","content"}: value=value.strip()
        if key=="title" and not value: raise BlogError("invalid_post")
        if key=="slug":
            if not value: raise BlogError("invalid_post")
            existing=db.scalar(select(BlogPost).where(BlogPost.slug==value,BlogPost.id!=post.id))
            if existing: raise BlogError("slug_exists")
        if key=="content" and len(value)<20: raise BlogError("invalid_post")
        setattr(post,key,value)
    post.updated_at=datetime.utcnow(); db.commit(); db.refresh(post); return post

def delete_post(db: Session, post: BlogPost) -> None:
    db.delete(post); db.commit()

def set_status(db: Session, post: BlogPost, status: str, publish_at: datetime | None = None) -> BlogPost:
    if status not in tuple(BlogStatus): raise BlogError("invalid_status")
    if status == BlogStatus.SCHEDULED and publish_at is None: raise BlogError("publish_time_required")
    post.status=status; post.publish_at=publish_at; post.updated_at=datetime.utcnow(); db.commit(); return post

def public_posts(db: Session, now: datetime | None = None) -> list[BlogPost]:
    now=now or datetime.utcnow()
    posts=list(db.scalars(select(BlogPost).order_by(BlogPost.created_at.desc())).all())
    result=[]
    for p in posts:
        if p.status == BlogStatus.PUBLISHED: result.append(p)
        elif p.status == BlogStatus.SCHEDULED and p.publish_at and p.publish_at <= now: result.append(p)
    return result
