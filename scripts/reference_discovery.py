from __future__ import annotations

"""High-throughput reference discovery for the Zylora template factory.

This script discovers *reference pages*, not source code. Third-party websites
remain design references and are reconstructed independently. It deliberately
never downloads proprietary JS/CSS bundles or production media for reuse.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import time
from urllib.parse import parse_qsl, urlencode, urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
QUEUE = ROOT / "data/reference-reconstruction-queue.json"
SOURCES = ROOT / "data/reference-discovery-sources.json"
TRACKING = {"ref", "lp_location", "r", "gclid", "fbclid"}


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "a":
            return
        for key, value in attrs:
            if key.lower() == "href" and value:
                self.links.append(value.strip())


def canonical_url(url: str) -> str:
    p = urlsplit(url.strip())
    query = [
        (k, v)
        for k, v in parse_qsl(p.query, keep_blank_values=True)
        if k not in TRACKING and not k.lower().startswith("utm_")
    ]
    path = p.path or "/"
    return urlunsplit((p.scheme.lower(), p.netloc.lower(), path, urlencode(query), ""))


def fetch(url: str, timeout: int = 15) -> str:
    req = Request(
        url,
        headers={
            "User-Agent": "ZyloraReferenceDiscovery/1.0 (+reference discovery; no asset mirroring)",
            "Accept": "text/html,application/xhtml+xml",
        },
    )
    with urlopen(req, timeout=timeout) as res:  # nosec B310 - config-owned https URLs
        if "text/html" not in str(res.headers.get("Content-Type", "")):
            return ""
        return res.read(2_500_000).decode("utf-8", errors="replace")


def discover_page(source: dict, page: int) -> list[dict]:
    url = str(source["index_url_template"]).format(page=page)
    html = fetch(url)
    parser = LinkParser(); parser.feed(html)
    rx = re.compile(str(source["reference_path_regex"]), re.I)
    base = str(source["base_url"])
    seen: set[str] = set(); out: list[dict] = []
    for href in parser.links:
        absolute = canonical_url(urljoin(base, href))
        parts = urlsplit(absolute)
        if parts.netloc.lower() != urlsplit(base).netloc.lower() or not rx.match(parts.path):
            continue
        key = absolute.rstrip("/")
        if key in seen:
            continue
        seen.add(key)
        slug = parts.path.rstrip("/").split("/")[-1]
        out.append({
            "title": slug.replace("-", " ").strip().title(),
            "live_url": None,
            "domain": None,
            "reference_url": absolute,
            "source": source["name"],
            "status": "queued",
            "rights_mode": "third_party_reference",
            "implementation_mode": "independent_reconstruction",
            "priority": "discovered",
            "attempts": 0,
        })
    return out


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def write_queue(data: dict) -> None:
    tmp = QUEUE.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    tmp.replace(QUEUE)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", type=int)
    ap.add_argument("--parallelism", type=int)
    ap.add_argument("--max-pages-per-source", type=int, default=0)
    args = ap.parse_args()

    queue = load_json(QUEUE)
    cfg = load_json(SOURCES)
    target = args.target or int(cfg.get("discovery_target") or 3600)
    parallelism = max(1, min(args.parallelism or int(cfg.get("default_parallelism") or 24), 48))
    known = {canonical_url(str(x["reference_url"])).rstrip("/") for x in queue.get("items", [])}
    new_items: list[dict] = []

    jobs: list[tuple[dict, int]] = []
    for source in sorted((s for s in cfg.get("sources", []) if s.get("enabled")), key=lambda x: -int(x.get("priority") or 0)):
        pages = int(source.get("max_pages") or 0)
        if args.max_pages_per_source:
            pages = min(pages, args.max_pages_per_source)
        jobs.extend((source, p) for p in range(1, pages + 1))

    with ThreadPoolExecutor(max_workers=parallelism) as pool:
        futures = {pool.submit(discover_page, source, page): (source["name"], page) for source, page in jobs}
        for future in as_completed(futures):
            if len(known) + len(new_items) >= target:
                for f in futures:
                    f.cancel()
                break
            source_name, page = futures[future]
            try:
                rows = future.result()
            except Exception as exc:
                print(f"WARN {source_name} page {page}: {exc}")
                continue
            for row in rows:
                key = canonical_url(str(row["reference_url"])).rstrip("/")
                if key in known:
                    continue
                known.add(key)
                row["id"] = f"ref-{len(queue.get('items', [])) + len(new_items) + 1:04d}"
                new_items.append(row)
                if len(known) >= target:
                    break

    queue.setdefault("items", []).extend(new_items)
    queue["discovered_count"] = len(queue["items"])
    queue["updated_at"] = datetime.now(timezone.utc).isoformat()
    write_queue(queue)
    print(f"reference_discovery: seeds={queue.get('seed_count', 0)} added={len(new_items)} total={len(queue['items'])} target={target}")
    return 0 if len(queue["items"]) >= min(target, int(queue.get("seed_count") or 0)) else 1


if __name__ == "__main__":
    raise SystemExit(main())
