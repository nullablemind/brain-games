install:
		npm install

run:
		npm run babel-node -- './bin/$(G).js'

game-list:
		ls './bin/'

publish:
		npm publish

lint:
		npm run eslint .
