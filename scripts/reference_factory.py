from __future__ import annotations

"""Queue/scaffold utility for capacity-driven, reference-faithful template workers."""

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
QUEUE = ROOT / "data/reference-reconstruction-queue.json"
POLICY = ROOT / "data/batch-policy.json"


def load() -> dict:
    return json.loads(QUEUE.read_text(encoding="utf-8"))


def save(data: dict) -> None:
    tmp = QUEUE.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    tmp.replace(QUEUE)


def slugify(value: str, fallback: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return (value[:64].strip("-") or fallback).strip("-")


def batch_capacity(data: dict, workers: int, items_per_worker: int) -> int:
    queued = sum(1 for x in data.get("items", []) if x.get("status") == "queued")
    return min(queued, max(1, workers) * max(1, items_per_worker))


def summary(data: dict) -> None:
    states: dict[str, int] = {}
    for item in data.get("items", []):
        states[item.get("status", "unknown")] = states.get(item.get("status", "unknown"), 0) + 1
    policy = json.loads(POLICY.read_text(encoding="utf-8")) if POLICY.exists() else {}
    print(json.dumps({
        "target_public_templates": data.get("target_public_templates"),
        "discovery_target": data.get("discovery_target"),
        "total_references": len(data.get("items", [])),
        "states": states,
        "batch_mode": policy.get("mode", "capacity_driven"),
        "fixed_batch_size": policy.get("fixed_batch_size", False),
        "default_capacity": batch_capacity(data, int(policy.get("default_workers",24)), int(policy.get("items_per_worker",2))),
    }, indent=2))


def claim(data: dict, worker: str, count: int) -> list[dict]:
    picked=[]; now=datetime.now(timezone.utc).isoformat()
    for item in data.get("items", []):
        if item.get("status") != "queued":
            continue
        item["status"] = "claimed"
        item["worker"] = worker
        item["claimed_at"] = now
        item["attempts"] = int(item.get("attempts") or 0) + 1
        picked.append(item)
        if len(picked) >= count:
            break
    return picked


def task_packet(item: dict, batch_id: str) -> dict:
    return {
        "id": item["id"],
        "batch_id": batch_id,
        "title": item.get("title"),
        "reference_url": item.get("reference_url"),
        "live_url": item.get("live_url"),
        "rights_mode": item.get("rights_mode", "third_party_reference"),
        "implementation_mode": "independent_reconstruction",
        "requirements": {
            "preserve": [
                "section order", "composition", "visual hierarchy", "relative section heights",
                "grid logic", "spacing rhythm", "typographic personality", "image placement and crop logic",
                "hover archetypes", "scroll behavior", "motion pacing", "responsive reflow strategy"
            ],
            "do_not": [
                "invent a generic substitute layout", "reuse the failed Batch 001 implementation",
                "reuse any image more than once in this template", "reuse any image already used elsewhere in this batch",
                "hotlink production media", "use AI-generated photography"
            ],
            "replace": ["brand-specific wording", "logos/trademarks", "protected photography/illustration/video"],
            "assets": {
                "sources": ["Unsplash", "Pexels", "Pixabay", "Wikimedia Commons", "Openverse", "verified permissive source"],
                "real_photography_preferred": True,
                "local_files_only_in_render": True,
                "unique_source_url_per_placement": True,
                "unique_binary_hash_per_placement": True,
                "license_record_required": True,
            },
            "code": "independently authored for third-party references; no copied proprietary JS/CSS/source bundles",
            "viewports": [1440, 1280, 1024, 768, 430, 390, 375, 360],
            "minimum_visual_fidelity_score": 8.5,
        },
    }


def scaffold(item: dict, batch_id: str) -> Path:
    fallback=item["id"]
    host=urlsplit(str(item.get("live_url") or item.get("reference_url") or "")).hostname or fallback
    slug=slugify(str(item.get("title") or host), fallback)
    project=ROOT/"template_workbench"/batch_id/slug
    project.mkdir(parents=True, exist_ok=True)
    packet=task_packet(item, batch_id)
    (project/"TASK.json").write_text(json.dumps(packet, indent=2, ensure_ascii=False), encoding="utf-8")
    (project/"README.md").write_text(
        f"# {item.get('title') or slug}\n\nReference: {item.get('reference_url')}\n\n"
        "Private reconstruction workbench. This candidate must visually track the actual reference rather than merely its category/style. "
        "Every final media placement must use a different localized permissive/free-commercial-use asset.\n",
        encoding="utf-8",
    )
    return project


def main() -> int:
    ap=argparse.ArgumentParser(); sub=ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("summary")
    c=sub.add_parser("claim")
    c.add_argument("--worker", required=True)
    c.add_argument("--count", type=int, default=0, help="0 = capacity-driven count")
    c.add_argument("--workers", type=int, default=24)
    c.add_argument("--items-per-worker", type=int, default=2)
    c.add_argument("--batch-id", default=None)
    c.add_argument("--scaffold", action="store_true")
    args=ap.parse_args(); data=load()
    if args.cmd=="summary": summary(data); return 0
    count=args.count if args.count>0 else batch_capacity(data,args.workers,args.items_per_worker)
    batch_id=args.batch_id or f"capacity-{datetime.now(timezone.utc).strftime('%Y%m%d-%H%M%S')}"
    picked=claim(data,args.worker,count)
    if args.scaffold:
        for item in picked:
            item["workbench"] = str(scaffold(item,batch_id).relative_to(ROOT))
            item["batch_id"] = batch_id
    save(data)
    print(json.dumps({"batch_id":batch_id,"count":len(picked),"tasks":[task_packet(x,batch_id) for x in picked]},indent=2,ensure_ascii=False))
    return 0 if picked else 2


if __name__=="__main__":
    raise SystemExit(main())
