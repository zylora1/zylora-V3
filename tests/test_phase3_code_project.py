from pathlib import Path

import pytest

from app.code_project import CodeProjectAdapter, CodeProjectError


def test_code_project_rejects_traversal_and_hidden_paths(tmp_path, monkeypatch):
    monkeypatch.setattr('app.code_project.ROOT', tmp_path)
    adapter = CodeProjectAdapter('project_123456')
    with pytest.raises(CodeProjectError):
        adapter.read_file('../outside.tsx')
    with pytest.raises(CodeProjectError):
        adapter.read_file('.env')
    with pytest.raises(CodeProjectError):
        adapter.read_file('/absolute.tsx')


def test_code_project_round_trip_is_utf8_and_scoped(tmp_path, monkeypatch):
    monkeypatch.setattr('app.code_project.ROOT', tmp_path)
    adapter = CodeProjectAdapter('project_123456')
    adapter.write_file('src/App.tsx', 'export default function App() { return <main />; }\n')
    assert adapter.read_file('src/App.tsx').startswith('export default')
    assert [item.path for item in adapter.list_files()] == ['src/App.tsx']
    assert adapter.root == (tmp_path / 'data' / 'code-projects' / 'project_123456').resolve()


def test_code_project_rejects_unsupported_files(tmp_path, monkeypatch):
    monkeypatch.setattr('app.code_project.ROOT', tmp_path)
    adapter = CodeProjectAdapter('project_123456')
    with pytest.raises(CodeProjectError):
        adapter.write_file('package-lock.json', '{}')
    with pytest.raises(CodeProjectError):
        adapter.write_file('src/secret.py', 'print(1)')
