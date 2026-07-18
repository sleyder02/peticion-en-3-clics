# n8n y Telegram - Notificación no sensible

## Objetivo

Notificar que se registró un nuevo apoyo en una causa comunitaria sin exponer datos personales.

## Flujo

1. Usuario registra apoyo en la plataforma.
2. Node.js guarda el apoyo en SQLite.
3. Node.js llama webhook de n8n.
4. n8n envía mensaje por Telegram.
5. Telegram solo recibe una alerta general.

## Webhook

Variable:

```env
N8N_WEBHOOK_APOYO=
````

## Payload enviado a n8n

```json
{
  "evento": "nuevo_apoyo",
  "causaId": 1,
  "mensaje": "Nuevo apoyo registrado en una causa comunitaria.",
  "datosPersonales": false
}
```

## Mensaje Telegram permitido

Nuevo apoyo registrado en una causa comunitaria.
Revisar la plataforma para seguimiento.
No se envían datos personales por este canal.

## No enviar por Telegram

* Nombre de quien apoya.
* Comentario.
* Cédula.
* Teléfono.
* Dirección.
* PDF.
* Listado de apoyos.
* Datos sensibles.

## Regla

Telegram informa, pero no expone.
