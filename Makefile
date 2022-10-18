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
install:
	npx ci
test-coverage:
	npm test -- --coverage --coverageProvider=v8
