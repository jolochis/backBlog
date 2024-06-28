<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

Backend creando en Nestjs y usando primsa como ORM

## Instalación

Instalar dependencias

```bash
$ npm install
```

Iniciar prisma en caso de querer probar la conexion en su local

Crear archivo .env

Configurar las credenciales del .env

```
DATABASE_URL="postgresql://user:password@localhost:5432/blog?schema=public"
```

sustitur usuario y contraseña de su base de datos.

```bash
$ npx prisma generate
```




## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Repositorio de diagramas

https://drive.google.com/file/d/1j6OBWZ-2wY8nlGlvheXjH9J6rumLQD69/view?usp=sharing
