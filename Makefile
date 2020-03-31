# Styles
YELLOW=$(shell echo "\033[00;33m")
RED=$(shell echo "\033[00;31m")
RESTORE=$(shell echo "\033[0m")

# Variables
CURRENT_DIR := $(shell pwd)
NPM := npm

.DEFAULT_GOAL := list

.PHONY: list
list:
	@echo "*********************"
	@echo "${YELLOW}Available targets${RESTORE}:"
	@echo "*********************"
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-15s[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## Install the local project
	@NPM install

.PHONY: serve
serve: ## Run a Webserver to test project (blocking)
	@NPM run start

.PHONY: build
build: ## Build the JS
	@NPM run build-${ENV}

.PHONY: release
release: ## Make a release
	@sed -E 's/\"version\"\:\ \"([0-9]*).([0-9]*).([0-9]*)\",/"version": "${VERSION}",/g' package.json > package.json.versionned
	@mv package.json.versionned package.json
	@sed -E 's/releases\/download\/v([0-9]*).([0-9]*).([0-9]*)\/plopix-js/releases\/download\/v${VERSION}\/plopix-js/g' README.md > README.md.versionned
	@mv README.md.versionned README.md
	@git add .
	@git ci -m "Bump to release ${VERSION}"
	@git tag -s -a "v${VERSION}" -m "Release ${VERSION}"
	@git push
	@git push origin v${VERSION}
