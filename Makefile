.DEFAULT_GOAL := help

postinstall: create-vendor-dir browserify

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

create-vendor-dir:
	@mkdir public/js ||:

browserify: ## Browserify everything
	./node_modules/.bin/browserify src/app-browser.js -o public/js/app.js
