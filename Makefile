gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint .
install-deps:
	npm ci
install: install-deps
	npx simple-git-hooks
test-coverage:
	npm test -- --coverage --coverageProvider=v8
