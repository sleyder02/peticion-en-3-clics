# Petición en 3 Clics
```

Plataforma comunitaria para crear causas, registrar apoyos, generar un PDF colectivo y notificar nuevos apoyos de forma segura.

## Objetivo

Construir una herramienta sencilla de participación ciudadana para organizar causas comunitarias y evidenciar apoyos ciudadanos sin recolectar datos sensibles.

## Tecnologías

* Node.js
* Express
* SQLite
* HTML
* CSS
* JavaScript
* PDFKit
* n8n opcional
* Telegram opcional

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

## Variables de entorno

Crear `.env` local:

```env
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

## Flujo

1. Crear causa comunitaria.
2. Registrar apoyo.
3. Ver contador de apoyos.
4. Descargar PDF colectivo.
5. Notificar nuevo apoyo por n8n/Telegram si está configurado.

## Privacidad

No se solicitan:

* Cédulas.
* Teléfonos.
* Direcciones.
* Correos reales.
* Datos sensibles.

## Telegram

Telegram solo envía una alerta general. No se envían nombres, comentarios, PDF ni datos personales.

## Advertencia

El PDF generado es un documento de práctica. No constituye radicación automática ni certifica identidad real de los apoyos.