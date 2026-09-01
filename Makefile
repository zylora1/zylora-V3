.PHONY: run test e2e qa certify release-package-qa clean-test-data
run:
	uvicorn app.main:app --reload --host 127.0.0.1 --port 8000

test:
	pytest -q

e2e:
	python scripts/browser_e2e.py

qa:
	python scripts/migration_qa.py
	python scripts/seo_audit.py
	python scripts/validate_template_assets.py
	python scripts/uniqueness_audit.py
	python scripts/export_source_qa.py
	python scripts/editor_media_e2e.py
	python scripts/browser_e2e.py
	python scripts/marketplace_support_e2e.py
	python scripts/freelancer_turnstile_ui_qa.py
	python scripts/assistant_accessibility_qa.py
	python scripts/platform_responsive_qa.py
	python scripts/ui_ux_production_qa.py
	python scripts/template_browser_qa.py
	python scripts/ui_interaction_qa.py
	python scripts/security_source_qa.py
	python -m compileall -q app scripts tests
	@for f in static/*.js; do node --check "$$f" || exit 1; done
	node scripts/check_nextjs_sources.js

certify: test qa

release-package-qa:
	python scripts/release_package_qa.py .

clean-test-data:
	rm -f data/zylora.db data/zylora.db-shm data/zylora.db-wal
	rm -rf data/media .pytest_cache
	find . -type d -name __pycache__ -prune -exec rm -rf {} +
