from __future__ import annotations
import time
from collections import defaultdict, deque
from threading import Lock
from fastapi import HTTPException, Request

_BUCKETS: dict[str, deque[float]] = defaultdict(deque)
_LOCK = Lock()

def enforce_rate_limit(request: Request, bucket: str, limit: int, window_seconds: int) -> None:
    client = request.client.host if request.client else "unknown"
    key = f"{bucket}:{client}"
    now = time.monotonic()
    cutoff = now - window_seconds
    with _LOCK:
        q = _BUCKETS[key]
        while q and q[0] < cutoff:
            q.popleft()
        if len(q) >= limit:
            raise HTTPException(status_code=429, detail="rate_limit_exceeded")
        q.append(now)
