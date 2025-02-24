build:
	docker build -t "front-end" ./client/
	docker build -t "back-end" ./server/

run:
	docker compose up