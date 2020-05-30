install:
		npm install

run-balance:
		npm run babel-node -- './bin/balance.js'

run-calc:
		npm run babel-node -- './bin/calc.js'

run-even:
		npm run babel-node -- './bin/even.js'

run-gcd:
		npm run babel-node -- './bin/gcd.js'

run-progression:
		npm run babel-node -- './bin/progression.js'

publish:
		npm publish

lint:
		npm run eslint .

test:
		npm test

watch:
		npm run watch

.PHONY: test
