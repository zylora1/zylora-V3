from fastapi import HTTPException

def translate(exc: Exception):
    msg = str(exc)
    status = 404 if "not_found" in msg else 403 if any(x in msg for x in ("required","forbidden","page_limit","credits")) else 409 if any(x in msg for x in ("fixed","duplicate","same_owner","unavailable")) else 400
    raise HTTPException(status_code=status, detail=msg)
