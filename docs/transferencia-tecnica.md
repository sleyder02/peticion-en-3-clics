# Transferencia técnica - Petición en 3 Clics
```

## Objetivo

Permitir que otra persona pueda instalar, ejecutar y entender el proyecto.

## Requisitos

* Node.js
* npm
* Git
* GitHub Codespaces o entorno local
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

## Flujo funcional

1. Crear causa.
2. Registrar apoyo.
3. Ver contador.
4. Descargar PDF.
5. Notificar por n8n/Telegram si está configurado.

## Privacidad

No se solicitan cédulas, teléfonos, direcciones ni datos sensibles.

## Modo sin n8n

Si n8n no está configurado, la plataforma sigue funcionando. Solo se omite la notificación automática.