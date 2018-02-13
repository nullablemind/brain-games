install:
		npm install

run:
		npm run babel-node -- './bin/$(G).js'

list-games:
		ls './bin/'

publish:
		npm publish

lint:
		npm run eslint .
