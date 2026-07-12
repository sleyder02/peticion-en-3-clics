# peticion-en-3-clics

# Petición en 3 Clics

Plataforma comunitaria para crear causas, registrar apoyos y generar un PDF colectivo.

## Objetivo

Construir una herramienta sencilla de participación ciudadana que permita organizar solicitudes comunitarias y registrar apoyos.

## Instalación

```bash
npm install
````

## Ejecución

```bash
npm start
```

## Variables de entorno

Crear `.env` local con:

```txt
PORT=3000
DB_PATH=./database.sqlite
```

## Rutas iniciales

* `GET /estado`
* `GET /api/causas`
* `POST /api/causas`
* `POST /api/apoyos`
* `GET /api/apoyos/:causaId`

## Privacidad

No se solicitan cédulas, teléfonos, direcciones ni datos sensibles.