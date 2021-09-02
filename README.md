# Node Challenge #001

## Download dependencies

Execute this command in your terminal:
```
yarn
or
npm install
```

## Run in development mode

Execute this command:

```
yarn dev
or
docker-compose up
```

After that, access this endpoint to run the migrations and seeds:

```
http://localhost:3002/api/migrate
```

## Create production build

Run this code:

```
docker-compose -f docker-compose.yml build
```

## Documentation

Acess this endpoint to view the documentation.

```
http://localhost:3002/api/docs
```
