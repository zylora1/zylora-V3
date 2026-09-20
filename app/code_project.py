"""Safe code-backed project and local development sandbox boundaries.

The file adapter is always tenant-scoped. The local provider can execute only
explicitly detected Vite React or Next.js development projects in development
mode with declared dependencies and sanitized environment. Production use is
blocked until a hosted isolation provider is configured.
"""
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import os
import json
import re
import shutil
import signal
import socket
import subprocess
import threading
import time
import zipfile
from uuid import uuid4
from urllib.request import urlopen
from typing import Iterable

from .config import ROOT, settings

_ALLOWED_EXTENSIONS = {'.css', '.js', '.jsx', '.json', '.md', '.ts', '.tsx', '.html'}
_BLOCKED_NAMES = {'.env', '.git', 'node_modules', '__pycache__', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'bun.lock', 'bun.lockb'}
_MAX_FILE_BYTES = 1_000_000


class CodeProjectError(ValueError):
    pass


@dataclass(frozen=True)
class CodeFile:
    path: str
    bytes: int
    extension: str


@dataclass(frozen=True)
class CommandResult:
    command_id: str
    returncode: int
    stdout: str
    stderr: str
    timed_out: bool = False


class SandboxProvider:
    """Provider contract kept independent from any future hosted sandbox."""

    def create_workspace(self, project_id: str) -> dict: raise NotImplementedError
    def start_workspace(self, project_id: str) -> dict: raise NotImplementedError
    def stop_workspace(self, project_id: str) -> None: raise NotImplementedError
    def list_files(self, project_id: str) -> list[CodeFile]: raise NotImplementedError
    def read_file(self, project_id: str, path: str) -> str: raise NotImplementedError
    def write_file(self, project_id: str, path: str, content: str) -> None: raise NotImplementedError
    def run_command(self, project_id: str, command: list[str], timeout_seconds: int = 15) -> CommandResult: raise NotImplementedError
    def install_dependencies(self, project_id: str, packages: list[str]) -> CommandResult: raise NotImplementedError
    def get_preview_url(self, project_id: str) -> str | None: raise NotImplementedError
    def get_logs(self, project_id: str) -> list[str]: raise NotImplementedError
    def create_snapshot(self, project_id: str) -> str: raise NotImplementedError
    def restore_snapshot(self, project_id: str, snapshot_id: str) -> None: raise NotImplementedError
    def cancel_command(self, project_id: str, command_id: str) -> None: raise NotImplementedError


class CodeProjectAdapter:
    """Filesystem-backed source adapter constrained to Zylora's code root."""

    def __init__(self, project_id: str):
        if not re.fullmatch(r'[A-Za-z0-9_-]{8,128}', str(project_id or '')):
            raise CodeProjectError('Invalid project identity')
        self.project_id = str(project_id)
        self.root = (ROOT / 'data' / 'code-projects' / self.project_id).resolve()
        allowed_root = (ROOT / 'data' / 'code-projects').resolve()
        if allowed_root not in self.root.parents:
            raise CodeProjectError('Invalid project workspace')

    def _relative(self, raw_path: str) -> Path:
        value = str(raw_path or '').replace('\\', '/').strip()
        if not value or value.startswith('/') or ':' in value:
            raise CodeProjectError('A relative project path is required')
        candidate = Path(value)
        if any(part in _BLOCKED_NAMES or part.startswith('.') for part in candidate.parts):
            raise CodeProjectError('That project path is restricted')
        if candidate.is_absolute() or '..' in candidate.parts:
            raise CodeProjectError('Path traversal is not allowed')
        suffix = candidate.suffix.lower()
        if suffix not in _ALLOWED_EXTENSIONS:
            raise CodeProjectError('That file type is not editable in Studio')
        resolved = (self.root / candidate).resolve()
        if self.root not in resolved.parents:
            raise CodeProjectError('Path escapes the project workspace')
        return candidate

    def list_files(self) -> list[CodeFile]:
        if not self.root.exists():
            return []
        files: list[CodeFile] = []
        # Walk top-down so blocked/generated directories are pruned before the
        # filesystem touches their children. Code workspaces link the shared
        # dependency cache as ``node_modules`` for preview startup; traversing
        # that tree with Path.rglob can exhaust Windows handles and surface
        # WinError 1450 during otherwise harmless file-list requests.
        for directory, dirnames, filenames in os.walk(self.root, topdown=True, followlinks=False):
            dirnames[:] = sorted(
                name for name in dirnames
                if name not in _BLOCKED_NAMES and not name.startswith('.')
            )
            for filename in sorted(filenames):
                if filename in _BLOCKED_NAMES or filename.startswith('.'):
                    continue
                path = Path(directory) / filename
                relative = path.relative_to(self.root)
                if path.suffix.lower() not in _ALLOWED_EXTENSIONS:
                    continue
                try:
                    size = path.stat().st_size
                except OSError:
                    continue
                files.append(CodeFile(relative.as_posix(), size, path.suffix.lower()))
        return files

    def read_file(self, path: str) -> str:
        relative = self._relative(path)
        target = self.root / relative
        if not target.is_file():
            raise FileNotFoundError(relative.as_posix())
        if target.stat().st_size > _MAX_FILE_BYTES:
            raise CodeProjectError('File exceeds the Studio read limit')
        return target.read_text(encoding='utf-8')

    def write_file(self, path: str, content: str) -> None:
        relative = self._relative(path)
        if not isinstance(content, str) or len(content.encode('utf-8')) > _MAX_FILE_BYTES:
            raise CodeProjectError('File exceeds the Studio write limit')
        target = self.root / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding='utf-8', newline='\n')

    def delete(self, path: str) -> None:
        """Delete one tenant-scoped editable source file.

        The same path validator used by reads and writes is deliberately used
        here so the editor cannot turn a delete operation into traversal,
        dotfile, lockfile, or arbitrary-directory access.
        """
        relative = self._relative(path)
        target = self.root / relative
        if not target.is_file():
            raise FileNotFoundError(relative.as_posix())
        target.unlink()

    def seed_files(self, files: Iterable[tuple[str, str]]) -> None:
        for path, content in files:
            self.write_file(path, content)


class ZyloraCodeFileSystemAdapter:
    """Canonical Onlook filesystem contract backed by Zylora workspace files.

    The adapter deliberately has no independent durable cache. CodeMirror and
    the preview may keep transient browser state, but every durable read/write
    resolves through the tenant-scoped ``CodeProjectAdapter`` above.
    """

    def __init__(self, project_id: str):
        self.project_id = project_id
        self.workspace = CodeProjectAdapter(project_id)

    def initialize(self) -> dict:
        self.workspace.root.mkdir(parents=True, exist_ok=True)
        return {
            'project_id': self.project_id,
            'files': [file.path for file in self.workspace.list_files()],
            'durable_authority': 'zylora-workspace',
            'cache': 'none',
        }

    def readFile(self, path: str) -> str:
        return self.workspace.read_file(path)

    def writeFile(self, path: str, content: str) -> None:
        self.workspace.write_file(path, content)

    def readDirectory(self, path: str = '') -> list[str]:
        value = str(path or '').replace('\\', '/').strip('/')
        parts = Path(value).parts if value else ()
        if any(part in _BLOCKED_NAMES or part.startswith('.') for part in parts) or '..' in parts:
            raise CodeProjectError('That directory path is restricted')
        relative = Path(value) if value else Path('.')
        directory = (self.workspace.root / relative).resolve()
        if self.workspace.root not in directory.parents and directory != self.workspace.root:
            raise CodeProjectError('Directory escapes the project workspace')
        if not directory.is_dir():
            raise FileNotFoundError(str(path))
        return sorted(item.name for item in directory.iterdir() if item.name not in _BLOCKED_NAMES and not item.name.startswith('.'))

    def exists(self, path: str) -> bool:
        try:
            return (self.workspace.root / self.workspace._relative(path)).is_file()
        except CodeProjectError:
            return False

    def createFile(self, path: str, content: str = '') -> None:
        if self.exists(path):
            raise FileExistsError(path)
        self.writeFile(path, content)

    def createDirectory(self, path: str) -> None:
        value = str(path or '').replace('\\', '/').strip('/')
        if not value or '..' in Path(value).parts or any(part in _BLOCKED_NAMES or part.startswith('.') for part in Path(value).parts):
            raise CodeProjectError('That directory path is restricted')
        target = (self.workspace.root / value).resolve()
        if self.workspace.root not in target.parents:
            raise CodeProjectError('Directory escapes the project workspace')
        target.mkdir(parents=True, exist_ok=True)

    def rename(self, old_path: str, new_path: str) -> None:
        source = self.workspace.root / self.workspace._relative(old_path)
        target = self.workspace.root / self.workspace._relative(new_path)
        if not source.is_file():
            raise FileNotFoundError(old_path)
        target.parent.mkdir(parents=True, exist_ok=True)
        source.rename(target)

    def delete(self, path: str) -> None:
        target = self.workspace.root / self.workspace._relative(path)
        if target.is_file():
            target.unlink()
        elif target.is_dir():
            shutil.rmtree(target)
        else:
            raise FileNotFoundError(path)

    def watchFile(self, _path: str, _callback=None) -> None:
        return None

    def watchDirectory(self, _path: str = '', _callback=None) -> None:
        return None


_filesystem_adapters: dict[str, ZyloraCodeFileSystemAdapter] = {}


def get_code_filesystem(project_id: str) -> ZyloraCodeFileSystemAdapter:
    """Return the single process-scoped adapter for a project workspace."""
    if project_id not in _filesystem_adapters:
        _filesystem_adapters[project_id] = ZyloraCodeFileSystemAdapter(project_id)
    return _filesystem_adapters[project_id]


def detect_framework(adapter: CodeProjectAdapter) -> dict:
    """Detect only frameworks with an explicit package/config signal."""
    try:
        package = json.loads(adapter.read_file('package.json'))
    except (FileNotFoundError, CodeProjectError, json.JSONDecodeError):
        return {'framework': 'unsupported', 'package_manager': None, 'reason': 'package.json is required'}
    deps = {**package.get('dependencies', {}), **package.get('devDependencies', {})}
    scripts = package.get('scripts', {}) if isinstance(package.get('scripts', {}), dict) else {}
    if 'next' in deps and ('dev' in scripts or (adapter.root / 'next.config.js').exists() or (adapter.root / 'next.config.mjs').exists()):
        framework = 'nextjs'
    elif 'vite' in deps and 'react' in deps and ('dev' in scripts or (adapter.root / 'vite.config.ts').exists() or (adapter.root / 'vite.config.js').exists()):
        framework = 'vite-react'
    else:
        return {'framework': 'unsupported', 'package_manager': None, 'reason': 'Only explicit React + Vite and Next.js projects are supported'}
    if (adapter.root / 'pnpm-lock.yaml').is_file(): manager = 'pnpm'
    elif (adapter.root / 'yarn.lock').is_file(): manager = 'yarn'
    elif (adapter.root / 'package-lock.json').is_file(): manager = 'npm'
    else: manager = 'npm'
    return {'framework': framework, 'package_manager': manager, 'package_name': str(package.get('name') or 'code-project')}


def install_preview_instrumentation(adapter: CodeProjectAdapter, project_id: str) -> None:
    """Add Onlook Penpal preload script and non-visual bridge bootstrap to simple Vite HTML entrypoints."""
    if not (adapter.root / 'index.html').is_file(): return
    source = adapter.read_file('index.html')
    preload_src = ROOT / 'static' / 'onlook-preload-script.js'
    if preload_src.is_file():
        pub_dir = adapter.root / 'public'
        pub_dir.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(preload_src, pub_dir / 'onlook-preload-script.js')

    tags = []
    if '/onlook-preload-script.js' not in source and (adapter.root / 'public' / 'onlook-preload-script.js').is_file():
        tags.append('<script src="/onlook-preload-script.js"></script>')
    if '/zylora-instrumentation.js' not in source:
        script = """(()=>{const projectId=%r,workspaceId=%r,configuredOrigin=new URL(location.href).searchParams.get('zylora_parent_origin'),parentOrigin=configuredOrigin?new URL(configuredOrigin).origin:(document.referrer?new URL(document.referrer).origin:'');let serial=0,ids=new WeakMap(),selected=null,hover=null;const types=new Set(['PREVIEW_READY','ELEMENT_HOVER','ELEMENT_SELECTED','ELEMENT_BOUNDS','ELEMENT_METADATA']);const id=e=>{let v=ids.get(e);if(!v){v='dom_'+(++serial);ids.set(e,v);e.setAttribute('data-zylora-dom-id',v)}return v};const send=(type,e)=>{if(!parentOrigin)return;const r=e&&e.getBoundingClientRect();const m={type,projectId,workspaceId,elementId:e?id(e):undefined,parentId:e&&e.parentElement?id(e.parentElement):null,bounds:r?{x:r.x,y:r.y,width:r.width,height:r.height}:undefined,metadata:e?{tag:e.tagName.toLowerCase(),text:(e.textContent||'').trim().slice(0,240),children:[...e.children].map(id)}:{instrumented:true}};parent.postMessage(m,parentOrigin)};document.addEventListener('mousemove',e=>{const t=e.target instanceof Element?e.target:null;if(t===hover)return;if(hover)hover.removeAttribute('data-zylora-hover');hover=t;if(t){t.setAttribute('data-zylora-hover','true');send('ELEMENT_HOVER',t)}},true);document.addEventListener('click',e=>{const t=e.target instanceof Element?e.target:null;if(!t)return;e.stopPropagation();if(selected)selected.removeAttribute('data-zylora-selected');selected=t;t.setAttribute('data-zylora-selected','true');send('ELEMENT_SELECTED',t)},true);addEventListener('resize',()=>selected&&send('ELEMENT_BOUNDS',selected));send('PREVIEW_READY',null)})()""" % (project_id, project_id)
        adapter.write_file('public/zylora-instrumentation.js', script)
        tags.append('<script src="/zylora-instrumentation.js"></script>')

    if tags:
        updated = source.replace('</head>', "".join(tags) + '</head>', 1)
        adapter.write_file('index.html', updated)


def _safe_sandbox_env(home_dir: Path, extra: dict | None = None) -> dict[str, str]:
    env = {
        'PATH': os.environ.get('PATH', ''),
        'HOME': str(home_dir),
        'USERPROFILE': str(home_dir),
        'PYTHONUNBUFFERED': '1',
        'CI': '1',
    }
    if os.name == 'nt':
        for k in ('SystemRoot', 'SYSTEMROOT', 'TEMP', 'TMP', 'COMSPEC', 'PATHEXT'):
            if k in os.environ:
                env[k] = os.environ[k]
    if extra:
        env.update(extra)
    return env


def _kill_process_tree(proc: subprocess.Popen | None) -> None:
    if not proc or proc.poll() is not None:
        return
    if os.name == 'nt':
        try:
            subprocess.run(['taskkill', '/F', '/T', '/PID', str(proc.pid)], capture_output=True, check=False)
        except Exception:
            try: proc.kill()
            except Exception: pass
    else:
        try:
            if hasattr(os, 'killpg'):
                os.killpg(proc.pid, signal.SIGTERM)
                try: proc.wait(timeout=2)
                except subprocess.TimeoutExpired:
                    os.killpg(proc.pid, signal.SIGKILL)
            else:
                proc.terminate()
        except Exception:
            try: proc.kill()
            except Exception: pass


class LocalSandboxProvider(SandboxProvider):
    """Development-only local provider with no shell and no inherited secrets.

    The preview is deliberately a static HTTP server. React/Next source is not
    claimed runnable until a project supplies a validated build/runtime adapter.
    """

    _processes: dict[str, subprocess.Popen] = {}
    _commands: dict[str, subprocess.Popen] = {}
    _ports: dict[str, int] = {}
    _logs: dict[str, list[str]] = {}
    _states: dict[str, str] = {}

    def _adapter(self, project_id: str) -> CodeProjectAdapter:
        return CodeProjectAdapter(project_id)

    def create_workspace(self, project_id: str) -> dict:
        adapter = self._adapter(project_id)
        adapter.root.mkdir(parents=True, exist_ok=True)
        bootstrap_code_project(project_id)
        detected = detect_framework(adapter)
        self._states[project_id] = 'ready' if detected['framework'] != 'unsupported' else 'unsupported'
        return {'project_id': project_id, 'root': 'workspace', 'status': self._states[project_id], **detected}

    def start_workspace(self, project_id: str) -> dict:
        if settings.app_env == 'production' or not code_engine_enabled():
            raise CodeProjectError('Local sandbox is disabled outside development')
        adapter = self._adapter(project_id)
        workspace = self.create_workspace(project_id)
        if workspace['framework'] == 'unsupported':
            raise CodeProjectError(workspace['reason'])
        if workspace['framework'] == 'vite-react': install_preview_instrumentation(adapter, project_id)
        existing = self._processes.get(project_id)
        if existing and existing.poll() is None:
            return {'status': 'ready', 'preview_url': self.get_preview_url(project_id)}
        sock = socket.socket(); sock.bind(('127.0.0.1', 0)); port = sock.getsockname()[1]; sock.close()
        self._states[project_id] = 'installing'
        self.install_dependencies(project_id, [])
        self._states[project_id] = 'starting'
        home_path = adapter.root / '.home'
        home_path.mkdir(parents=True, exist_ok=True)
        env = _safe_sandbox_env(home_path)
        if workspace['framework'] == 'vite-react':
            command = ['node', 'node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', str(port)]
        elif workspace['framework'] == 'nextjs':
            command = ['node', 'node_modules/next/dist/bin/next', 'dev', '--hostname', '127.0.0.1', '--port', str(port)]
        else:
            raise CodeProjectError('No approved runtime command is available for this framework')
        proc = subprocess.Popen(
            command, cwd=adapter.root, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            text=True, start_new_session=True,
        )
        self._processes[project_id] = proc; self._ports[project_id] = port; self._logs.setdefault(project_id, []).append(f"{workspace['framework']} dev server starting")
        threading.Thread(target=self._drain_logs, args=(project_id, proc), daemon=True).start()
        deadline = time.time() + 20
        while time.time() < deadline:
            if proc.poll() is not None:
                self._states[project_id] = 'failed'; raise CodeProjectError('Preview process exited during startup: ' + ' '.join(self.get_logs(project_id)[-3:]))
            try:
                with urlopen(f'http://127.0.0.1:{port}/', timeout=0.5) as response:
                    if 200 <= response.status < 500:
                        self._states[project_id] = 'ready'
                        return {'status': 'ready', 'preview_url': self.get_preview_url(project_id), **workspace}
            except Exception: time.sleep(0.15)
        self.stop_workspace(project_id); self._states[project_id] = 'failed'; raise CodeProjectError('Preview did not become healthy before timeout')

    def _drain_logs(self, project_id: str, proc: subprocess.Popen) -> None:
        if proc.stdout:
            for line in proc.stdout:
                self._logs.setdefault(project_id, []).append(line.strip()[-1000:])

    def stop_workspace(self, project_id: str) -> None:
        proc = self._processes.pop(project_id, None); self._ports.pop(project_id, None)
        _kill_process_tree(proc)
        self._states[project_id] = 'stopped'

    def list_files(self, project_id: str) -> list[CodeFile]: return self._adapter(project_id).list_files()
    def read_file(self, project_id: str, path: str) -> str: return self._adapter(project_id).read_file(path)
    def write_file(self, project_id: str, path: str, content: str) -> None: return self._adapter(project_id).write_file(path, content)

    def run_command(self, project_id: str, command: list[str], timeout_seconds: int = 15) -> CommandResult:
        adapter = self._adapter(project_id)
        if not isinstance(command, list) or not command or len(command) > 6 or any(not isinstance(item, str) for item in command):
            raise CodeProjectError('Commands must be bounded argument lists')
        allowed = {('node', '--version'), ('npm', '--version'), ('python3', '--version'), ('npm', 'run', 'build')}
        if tuple(command) not in allowed:
            raise CodeProjectError('Command is not allowed by the local sandbox policy')
        if not (adapter.root / 'node_modules').exists():
            root_modules = (ROOT / 'node_modules').resolve()
            if root_modules.is_dir():
                try:
                    if os.name == 'nt':
                        subprocess.run(['cmd', '/c', 'mklink', '/J', str(adapter.root / 'node_modules'), str(root_modules)], check=False, capture_output=True)
                    else:
                        os.symlink(root_modules, adapter.root / 'node_modules')
                except Exception:
                    pass
        exec_cmd = list(command)
        if os.name == 'nt' and exec_cmd and exec_cmd[0] in {'npm', 'npx'}:
            exec_cmd[0] = f"{exec_cmd[0]}.cmd"
        command_id = str(uuid4())
        home_path = adapter.root / '.home'
        home_path.mkdir(parents=True, exist_ok=True)
        env = _safe_sandbox_env(home_path)
        proc = subprocess.Popen(exec_cmd, cwd=adapter.root, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, start_new_session=True)
        self._commands[command_id] = proc
        try:
            stdout, stderr = proc.communicate(timeout=max(1, min(int(timeout_seconds), 30)))
            return CommandResult(command_id, proc.returncode, stdout[-8000:], stderr[-8000:])
        except subprocess.TimeoutExpired:
            _kill_process_tree(proc)
            return CommandResult(command_id, -signal.SIGTERM if hasattr(signal, 'SIGTERM') else -1, '', 'command timed out', True)
        finally:
            self._commands.pop(command_id, None)

    def install_dependencies(self, project_id: str, packages: list[str]) -> CommandResult:
        if packages: raise CodeProjectError('Arbitrary dependency additions are not allowed')
        adapter = self._adapter(project_id); detected = detect_framework(adapter)
        if detected['framework'] == 'unsupported': raise CodeProjectError(detected['reason'])
        if (adapter.root / 'node_modules').is_dir(): return CommandResult('dependency-cache', 0, 'existing node_modules', '')
        root_modules = (ROOT / 'node_modules').resolve()
        if root_modules.is_dir() and not (adapter.root / 'node_modules').exists():
            try:
                if os.name == 'nt':
                    subprocess.run(['cmd', '/c', 'mklink', '/J', str(adapter.root / 'node_modules'), str(root_modules)], check=False, capture_output=True)
                else:
                    os.symlink(root_modules, adapter.root / 'node_modules')
            except Exception:
                pass
        if (adapter.root / 'node_modules').is_dir(): return CommandResult('dependency-cache', 0, 'linked root node_modules', '')
        manager = detected['package_manager']
        if manager == 'pnpm': command = ['pnpm', 'install', '--frozen-lockfile', '--ignore-scripts']
        elif manager == 'yarn': command = ['yarn', 'install', '--frozen-lockfile', '--ignore-scripts']
        elif (adapter.root / 'package-lock.json').is_file(): command = ['npm', 'ci', '--ignore-scripts', '--no-audit', '--no-fund']
        else: command = ['npm', 'install', '--ignore-scripts', '--no-audit', '--no-fund']
        return self._run_bounded(project_id, command, 120)

    def _run_bounded(self, project_id: str, command: list[str], timeout_seconds: int) -> CommandResult:
        adapter = self._adapter(project_id); command_id = str(uuid4())
        home_path = adapter.root / '.home'
        home_path.mkdir(parents=True, exist_ok=True)
        env = _safe_sandbox_env(home_path, {'npm_config_ignore_scripts': 'true'})
        proc = subprocess.Popen(command, cwd=adapter.root, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, start_new_session=True)
        self._commands[command_id] = proc
        try:
            stdout, stderr = proc.communicate(timeout=timeout_seconds)
            return CommandResult(command_id, proc.returncode, stdout[-12000:], stderr[-12000:])
        except subprocess.TimeoutExpired:
            _kill_process_tree(proc)
            return CommandResult(command_id, -signal.SIGTERM if hasattr(signal, 'SIGTERM') else -1, '', 'dependency operation timed out', True)
        finally: self._commands.pop(command_id, None)

    def get_preview_url(self, project_id: str) -> str | None:
        proc = self._processes.get(project_id); port = self._ports.get(project_id)
        return f'http://127.0.0.1:{port}/' if proc and proc.poll() is None and port else None

    def get_status(self, project_id: str) -> str:
        return self._states.get(project_id, 'idle')

    def get_logs(self, project_id: str) -> list[str]: return list(self._logs.get(project_id, []))[-100:]

    def create_snapshot(self, project_id: str) -> str:
        adapter = self._adapter(project_id); snapshot_id = str(uuid4()); target = (ROOT / 'data' / 'code-snapshots' / project_id / f'{snapshot_id}.zip').resolve(); target.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as archive:
            for item in adapter.list_files(): archive.write(adapter.root / item.path, item.path)
        return snapshot_id

    def restore_snapshot(self, project_id: str, snapshot_id: str) -> None:
        if not re.fullmatch(r'[A-Fa-f0-9-]{36}', snapshot_id): raise CodeProjectError('Invalid snapshot identity')
        adapter = self._adapter(project_id); archive_path = (ROOT / 'data' / 'code-snapshots' / project_id / f'{snapshot_id}.zip').resolve(); base = (ROOT / 'data' / 'code-snapshots' / project_id).resolve()
        if base not in archive_path.parents or not archive_path.is_file(): raise CodeProjectError('Snapshot not found')
        with zipfile.ZipFile(archive_path) as archive:
            for name in archive.namelist(): adapter.write_file(name, archive.read(name).decode('utf-8'))

    def cancel_command(self, project_id: str, command_id: str) -> None:
        proc = self._commands.get(command_id)
        _kill_process_tree(proc)


local_sandbox = LocalSandboxProvider()


def code_engine_enabled() -> bool:
    """Code mode is opt-in and never enabled by merely vendoring Onlook."""
    return bool(getattr(settings, 'studio_code_enabled', False)) and settings.app_env != 'production'


def code_engine_available_for_site(site: dict) -> bool:
    return code_engine_enabled() and str(site.get('studio_engine') or 'native').lower() == 'code'


def bootstrap_code_project(project_id: str) -> CodeProjectAdapter:
    adapter = CodeProjectAdapter(project_id)
    if not adapter.root.exists() or not any(adapter.root.iterdir()):
        adapter.seed_files([
            ('package.json', json.dumps({'name':'zylora-code-project','private':True,'scripts':{'dev':'vite','build':'vite build'},'dependencies':{'react':'^19.2.8','react-dom':'^19.2.8'},'devDependencies':{'vite':'^8.2.2'}}, indent=2)),
            ('index.html', '<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Zylora project</title></head><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>'),
            ('src/App.jsx', "export default function App() {\n  return <main><h1>New Zylora project</h1><p>Edit this project in Studio.</p></main>;\n}\n"),
            ('src/main.jsx', "import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.jsx';\nimport './styles.css';\ncreateRoot(document.getElementById('root')).render(<App />);\n"),
            ('src/styles.css', 'body { margin: 0; font-family: system-ui, sans-serif; }\nmain { min-height: 100vh; padding: 2rem; }\n'),
        ])
    return adapter
