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

## Interfaz visual

La Clase 57 agrega una interfaz en `/` que permite:

- Crear causas comunitarias.
- Ver causas registradas.
- Registrar apoyos.
- Ver contador de apoyos.
- Ver comentarios de apoyo.

## Regla de privacidad

El formulario de apoyo solo pide nombre de práctica y comentario opcional.
No solicita cédula, teléfono, dirección ni datos sensibles.