# docker-nodeapi-with-mongo

`Nodejs` API with mongodb using `Docker` containers

## Usage

- Install dependencies:
```sh
$ npm install
```

- Build
```sh
$ npm run build
```

- Start
```sh
$ docker compose up -d
```

- Stop
```sh
$ docker compose down -v
```

## Usage (in development)
```sh
# Start containers
$ docker compose -f docker-compose.dev.yml up -d
# Stop all
$ docker compose -f docker-compose.dev.yml down -v
```

## Endpoints:
- http://localhost:8000
- http://localhost:8000/api/auth/register
- http://localhost:8000/api/auth/login

## How to use:

<a href="https://asciinema.org/a/B9Xm9DbupOsqTw49d8wL1nOvp" rel="nofollow noopener">
  <img alt="asciicast" src="https://asciinema.org/a/B9Xm9DbupOsqTw49d8wL1nOvp.svg">
</a>
