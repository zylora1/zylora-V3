# Zylora Studio Phase 3 Progress

## Completed foundation

Phase 3 now has an explicit per-project `studio_engine` field, with `native` as the migration default. Code-backed mode requires both the deployment-level `STUDIO_CODE_ENABLED` feature flag and the project-level `studio_engine=code` selection. Enabling code mode emits an audit event and creates a bounded workspace containing only safe starter source files.

The new `CodeProjectAdapter` owns path normalization, allowed extensions, hidden-file rejection, traversal prevention, workspace-root enforcement, UTF-8 reads/writes, and file-size limits. The API exposes guarded list/read/write operations under the authenticated project owner. Every write is audited. Native projects continue using the existing SiteDocument editor and are unaffected by this path.

## Deliberate safety boundary

This phase does not execute customer code. It does not expose host paths, Docker, platform secrets, arbitrary shell commands, dependency installation, or a live preview URL. Source writes return `validated=false` until an approved isolated `SandboxProvider` is connected. This is intentional: a file API is not a sandbox, and enabling execution before tenant isolation and resource controls are proven would be unsafe.

## Remaining Phase 3 work

The local development runtime now detects explicit React + Vite and Next.js projects, respects the declared package manager and lockfile, installs declared dependencies with lifecycle scripts disabled, starts the framework dev command on loopback, waits for an HTTP health response, captures logs, handles timeout/crash/stop, and records framework startup audits. A minimal Vite project is bootstrapped for new code workspaces. Unsupported projects fail with an explicit unsupported-framework error. Agent tools and MCP remain disabled until server-side authorization, project scoping, audit logging, cancellation, timeout, and security tests are complete. The next tranche is source parsing/AST transforms, secure iframe instrumentation, DOM-to-source mapping, source-backed component discovery, and browser-tested preview synchronization.

## Verification

Backend compilation passed for `config.py`, `code_project.py`, `api_editor.py`, `api.py`, `generate_v4.py`, and `provider_health.py`. A native Linux Vite fixture passed live dev-server startup, HTTP health, served-module verification, command allow/deny policy, snapshot restoration, and preview cleanup. Direct bounded checks also cover workspace isolation, traversal rejection, hidden-file rejection, and unsupported-file rejection. The mounted Windows/FUSE dependency tree still cannot open a Vite listener reliably because its launcher files are non-executable; this is isolated from the provider test using the native Linux dependency fixture. The repository pytest runner remains blocked in this environment by its existing collection/wait behavior.
