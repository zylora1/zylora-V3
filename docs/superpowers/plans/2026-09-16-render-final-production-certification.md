# Render Final Production Certification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the release evidence and deployment configuration with Render as the sole current target, preserve the legacy Studio production default, and produce an evidence-backed certification report without introducing new product architecture.

**Architecture:** Keep the existing FastAPI application, canonical SiteDocument publisher, provider abstractions, and fail-closed production settings. Remove active Railway assumptions from current runtime/configuration paths where they are not needed, verify Render deployability from the repository and remote state, and record unavailable external checks as explicit blockers.

**Tech Stack:** FastAPI, SQLAlchemy, PostgreSQL, Docker, Render, pytest, TypeScript Studio build, GitHub remote.

**Spec:** User-provided Zylora Render final production certification prompt in `C:/Users/joys0/.codex/attachments/93768637-0e6a-45d6-ba60-caf3377750b5/pasted-text.txt`.

## Global Constraints

- Render is the only current deployment target; Railway is historical and out of scope.
- `STUDIO_ENGINE=legacy` remains the production/default engine; Penpot is inactive and fail-closed.
- Production database configuration must use PostgreSQL; SQLite remains local/test only.
- Hosted AI business paths use `AIService` and the Vercel AI Gateway abstraction.
- No provider secrets may be printed, committed, or exposed to browser/plugin code.
- No unrelated product features or duplicate architecture may be introduced.

### Task 1: Repository and runtime audit

**Files:**
- Inspect: `app/config.py`, `app/main.py`, `app/db.py`, `Dockerfile`, `run.sh`, `.env.example`, `docker-compose.yml`
- Inspect: provider adapters and active deployment references

- [ ] Record branch, commit, remotes, working-tree scope, active Render/Railway references, and required environment names without printing values.
- [ ] Verify the production fail-closed rules and current engine/provider defaults.

### Task 2: Render/current-target hardening

**Files:**
- Modify only runtime/configuration files where an active historical-platform assumption would affect Render.
- Create: `ZYLORA_RENDER_FINAL_PRODUCTION_CERTIFICATION_REPORT.md`

- [ ] Replace active Railway-specific wording or environment fallback with platform-neutral behavior while preserving compatibility tests only when they cover historical behavior.
- [ ] Keep `STUDIO_ENGINE=legacy` and PostgreSQL fail-closed behavior unchanged.
- [ ] Document Render deployment, runtime health, provider status, and unavailable external checks precisely.

### Task 3: Verification and release evidence

**Files:**
- Update: current audit/bug evidence only when status changes are backed by commands.

- [ ] Run focused configuration/security checks, build/type/compile checks, secret/conflict/diff scans, and the full pytest suite after code changes.
- [ ] Check GitHub remote access and push only the intended commit; verify the remote commit by SHA.
- [ ] Verify Render only through an available authenticated mechanism; otherwise record `BLOCKED_BY_RENDER_ACCESS` rather than inventing deployment evidence.

### Task 4: Commit and certification handoff

**Files:**
- Stage only intended source, tests, configuration, manifests, and certification documents.

- [ ] Review staged diff and secret scan.
- [ ] Commit with a release-specific message and push `main` without force.
- [ ] Final report distinguishes implemented, locally verified, externally blocked, and not tested states, and gives a precise recommendation.
