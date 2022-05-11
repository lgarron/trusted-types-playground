.PHONY: dev
dev:
	npx parcel src/index.html

.PHONY: csp
csp:
	npx parcel build src/index.html
	@echo ""
	@echo "Open http://localhost:8000/"
	@echo ""
	cd dist && caddy run --watch
