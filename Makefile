build:
	docker-compose build

install:
	docker-compose run --rm web yarn

up:
	docker-compose up

shell:
	docker-compose run --rm web bash

setup: build install

yarn-build:
	docker-compose run --rm web yarn build

lint:
	docker-compose run --rm web yarn lint
