#!/usr/bin/env sh
set -eu
mkdir -p data
python -m scripts.run_migrations
exec uvicorn app.main:app --host 0.0.0.0 --port "${PORT:-8000}"
