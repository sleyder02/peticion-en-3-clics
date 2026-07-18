# Petición en 3 Clics - Reto Final

## Descripción

Petición en 3 Clics es una plataforma comunitaria de práctica que permite crear causas, registrar apoyos ciudadanos, visualizar un contador, generar un PDF colectivo y notificar nuevos apoyos mediante n8n/Telegram de forma no sensible.

## Objetivo

Demostrar cómo la tecnología puede apoyar procesos de participación ciudadana, organización comunitaria y generación de evidencia documental.

## Tecnologías

- Node.js
- Express
- SQLite
- HTML
- CSS
- JavaScript
- PDFKit
- n8n
- Telegram
- GitHub Codespaces

## Flujo principal

1. Crear causa comunitaria.
2. Registrar apoyo.
3. Ver contador.
4. Descargar PDF.
5. Notificar apoyo por n8n/Telegram si está configurado.

## Instalación

```bash
npm install
````

## Ejecución

```bash id="j11st9"
npm start
```

## Variables de entorno

```env id="2k01yh"
PORT=3000
DB_PATH=./database.sqlite
N8N_ENABLED=false
N8N_WEBHOOK_APOYO=
```

## Rutas principales

* `GET /estado`
* `GET /api/causas`
* `POST /api/causas`
* `POST /api/apoyos`
* `GET /api/apoyos/:causaId`
* `GET /api/pdf/:causaId`

## Privacidad

La plataforma no solicita cédula, teléfono, dirección, correo real ni datos sensibles.

## Advertencia

El PDF generado es un documento de práctica. No constituye radicación automática, no certifica identidad real de apoyos y debe revisarse antes de cualquier uso formal.