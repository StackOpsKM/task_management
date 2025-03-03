include .env

build:
	docker build -t "$(FRONTEND_IMAGE)" ./client/
	docker build -t "$(BACKEND_IMAGE)" ./server/

push:
	echo "$(DOCKER_PASSWORD)" | docker login -u "$(DOCKER_USERNAME)" --password-stdin
	docker push "$(FRONTEND_IMAGE)"
	docker push "$(BACKEND_IMAGE)"

run:
	docker compose up