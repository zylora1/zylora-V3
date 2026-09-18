"""Production-grade reverse proxy for the Penpot backend services.

Handles ALL traffic that must reach the Penpot stack:
  - HTML entry points (workspace, view, etc.)
  - Static assets (JS, CSS, fonts, WASM, images)
  - REST API calls (/api/rpc/*)
  - File upload and download routes
  - WebSocket connections (notifications + collaboration)
  - MCP WebSocket if enabled

Routes are mounted under /penpot prefix in the Zylora FastAPI app.
PENPOT_INTERNAL_URL  - internal service URL for server->server calls
PENPOT_BASE_URL      - public user-facing URL for cookie/CSP purposes

When STUDIO_ENGINE != 'penpot', all proxy routes return 503 immediately.
"""
from __future__ import annotations

import asyncio
import logging

import httpx
from fastapi import APIRouter, HTTPException, Request, WebSocket, WebSocketDisconnect
from starlette.background import BackgroundTask
from starlette.responses import StreamingResponse

from .config import settings

logger = logging.getLogger(__name__)

proxy_router = APIRouter(tags=["penpot-proxy"])

# Hop-by-hop headers that must not be forwarded
_HOP_BY_HOP = frozenset({
    "connection", "keep-alive", "proxy-authenticate", "proxy-authorization",
    "te", "trailers", "transfer-encoding", "upgrade",
    "proxy-connection", "expect",
})

# One shared async client; large body/file upload support
_http_client: httpx.AsyncClient | None = None


def _get_client() -> httpx.AsyncClient:
    global _http_client
    if _http_client is None or _http_client.is_closed:
        _http_client = httpx.AsyncClient(
            timeout=httpx.Timeout(connect=10, read=120, write=120, pool=10),
            limits=httpx.Limits(max_keepalive_connections=50, max_connections=200),
            follow_redirects=False,
        )
    return _http_client


def _penpot_origin() -> str:
    url = (settings.penpot_internal_url or "").strip().rstrip("/")
    if not url:
        url = "http://localhost:9001"
    return url


def _is_penpot_enabled() -> bool:
    return str(settings.studio_engine or "legacy").lower() == "penpot"


def _filter_request_headers(headers: dict[str, str]) -> dict[str, str]:
    out = {}
    for k, v in headers.items():
        if k.lower() in _HOP_BY_HOP:
            continue
        if k.lower() == "host":
            continue
        out[k] = v
    return out


def _filter_response_headers(headers: httpx.Headers) -> dict[str, str]:
    out = {}
    for k, v in headers.items():
        if k.lower() in _HOP_BY_HOP:
            continue
        out[k] = v
    return out


async def _proxy(request: Request, sub_path: str) -> StreamingResponse:
    if not _is_penpot_enabled():
        raise HTTPException(503, detail="Penpot studio engine is not enabled")

    origin = _penpot_origin()
    target_url = f"{origin}/{sub_path}"
    if request.url.query:
        target_url += f"?{request.url.query}"

    req_headers = _filter_request_headers(dict(request.headers))

    client = _get_client()
    try:
        proxy_req = client.build_request(
            method=request.method,
            url=target_url,
            headers=req_headers,
            content=request.stream(),
        )
        response = await client.send(proxy_req, stream=True)
    except httpx.RequestError as exc:
        logger.error("Penpot proxy request error for %s: %s", target_url, exc)
        raise HTTPException(502, detail=f"Penpot backend unreachable: {exc}") from exc

    resp_headers = _filter_response_headers(response.headers)

    return StreamingResponse(
        response.aiter_raw(),
        status_code=response.status_code,
        headers=resp_headers,
        background=BackgroundTask(response.aclose),
    )


_ALL_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]


@proxy_router.api_route("/workspace/{path:path}", methods=_ALL_METHODS)
async def proxy_workspace(request: Request, path: str) -> StreamingResponse:
    """Main Penpot workspace entry point."""
    return await _proxy(request, f"workspace/{path}" if path else "workspace")


@proxy_router.api_route("/view/{path:path}", methods=_ALL_METHODS)
async def proxy_view(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"view/{path}" if path else "view")


@proxy_router.api_route("/api/{path:path}", methods=_ALL_METHODS)
async def proxy_api(request: Request, path: str) -> StreamingResponse:
    """Penpot REST API -- includes /api/rpc/*, /api/export/*, etc."""
    return await _proxy(request, f"api/{path}")


@proxy_router.api_route("/assets/{path:path}", methods=_ALL_METHODS)
async def proxy_assets(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"assets/{path}")


@proxy_router.api_route("/js/{path:path}", methods=_ALL_METHODS)
async def proxy_js(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"js/{path}")


@proxy_router.api_route("/css/{path:path}", methods=_ALL_METHODS)
async def proxy_css(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"css/{path}")


@proxy_router.api_route("/images/{path:path}", methods=_ALL_METHODS)
async def proxy_images(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"images/{path}")


@proxy_router.api_route("/fonts/{path:path}", methods=_ALL_METHODS)
async def proxy_fonts(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"fonts/{path}")


@proxy_router.api_route("/wasm/{path:path}", methods=_ALL_METHODS)
async def proxy_wasm(request: Request, path: str) -> StreamingResponse:
    return await _proxy(request, f"wasm/{path}")


@proxy_router.websocket("/ws/{path:path}")
async def proxy_websocket(websocket: WebSocket, path: str):
    """Bidirectional WebSocket proxy. Handles both text and binary frames.
    Penpot uses /ws/notifications and /ws/rpc endpoints.
    """
    if not _is_penpot_enabled():
        await websocket.close(code=1013, reason="Penpot engine not enabled")
        return

    origin = _penpot_origin()
    ws_origin = origin.replace("http://", "ws://").replace("https://", "wss://")
    target_url = f"{ws_origin}/ws/{path}"
    if websocket.query_params:
        target_url += f"?{websocket.query_params}"

    # Forward only safe headers (not the WS upgrade headers - those are added by the library)
    fwd_headers: list[tuple[str, str]] = []
    for k, v in websocket.headers.items():
        k_lower = k.lower()
        if k_lower in {"host", "upgrade", "connection", "sec-websocket-key",
                       "sec-websocket-version", "sec-websocket-extensions",
                       "sec-websocket-accept"}:
            continue
        fwd_headers.append((k, v))

    await websocket.accept()

    try:
        try:
            import websockets.asyncio.client as ws_client
        except ImportError:
            import websockets.client as ws_client

        async with ws_client.connect(target_url, additional_headers=fwd_headers) as target_ws:
            async def client_to_target():
                try:
                    while True:
                        msg = await websocket.receive()
                        if msg["type"] == "websocket.disconnect":
                            break
                        if msg.get("bytes") is not None:
                            await target_ws.send(msg["bytes"])
                        elif msg.get("text") is not None:
                            await target_ws.send(msg["text"])
                except WebSocketDisconnect:
                    pass
                except Exception as exc:
                    logger.debug("WS client->penpot error: %s", exc)

            async def target_to_client():
                try:
                    async for msg in target_ws:
                        if isinstance(msg, bytes):
                            await websocket.send_bytes(msg)
                        else:
                            await websocket.send_text(str(msg))
                except Exception as exc:
                    logger.debug("WS penpot->client error: %s", exc)

            await asyncio.gather(client_to_target(), target_to_client())
    except Exception as exc:
        logger.error("Failed to open WS to Penpot %s: %s", target_url, exc)
        try:
            await websocket.close(code=1011, reason="Penpot backend unreachable")
        except Exception:
            pass


# Public alias for use from main.py studio route
reverse_proxy_http = _proxy
