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

## Generación de PDF

La Clase 58 agrega generación de PDF colectivo.

Ruta:

```txt
GET /api/pdf/:causaId
````

Ejemplo:

```bash
curl -L http://localhost:3000/api/pdf/1 --output peticion-causa-1.pdf
```

El PDF incluye:

* Advertencia jurídica.
* Título de la causa.
* Descripción.
* Total de apoyos.
* Listado de apoyos.
* Comentarios.
* Cierre de práctica.

## Advertencia

El PDF es un documento de práctica. No constituye radicación automática, no certifica identidad real y debe ser revisado antes de cualquier uso formal.