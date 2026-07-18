# Bitácora Clase 59
```

## Datos

Nombre:LEIDER DAVID RAMOS CARO
Fecha:16/7/2026
Clase: 59
Repositorio:
Rama:

## Comunicaciones

¿Qué es una notificación no sensible?
Es una alerta diseñada para mantener a la comunidad y a los líderes informados en tiempo real (por ejemplo, a través de Telegram o n8n), pero cuidando estrictamente la privacidad como base de la confianza.

¿Por qué un README ayuda a transferir el proyecto?
funciona literalmente como el manual de usuario y la carta de presentación del código. Cuando transfERIMOS un proyecto a otros desarrolladores o a la comunidad.

¿Qué debe entender otra persona al leer el README?
al terminar de leerlo, la persona debe pasar de "no sé qué es esto" a "sé exactamente qué hace y cómo lo enciendo".

## Jurídico

¿Por qué Telegram no debe recibir datos personales?
La regla de oro: Telegram debe usarse únicamente como un canal de notificaciones no sensibles (alertas generales) para avisar que hay novedades, pero los datos personales deben quedarse guardados de forma segura en la base de datos privada del proyecto.

¿Por qué no se debe enviar el PDF por Telegram?
elegram únicamente para enviar una notificación no sensible (un aviso que diga "Tu documento está listo" acompañado de un enlace seguro). De esta forma, el líder debe autenticarse en la plataforma oficial para descargar el archivo (preferiblemente en formato editable como Word), garantizando que la información viaje encriptada y solo llegue a la persona autorizada.

¿Qué límites tiene la automatización?
La automatización sirve para hacer el trabajo operativo más fácil, pero jamás para reemplazar el criterio, la ética y el tejido social que construyen los líderes en el territorio.

## Tecnología

¿Qué variable guarda el webhook de n8n?
La variable es `N8N_WEBHOOK_APOYO`. Aparece documentada en n8n-telegram.md y se utiliza en notificacion.service.js como `process.env.N8N_WEBHOOK_APOYO`.

¿Qué archivo se creó para notificar?
notificarNuevoApoyo
¿Qué datos se envían a n8n?

¿Qué pasa si n8n falla?
no pasa nada el servidor siempre va a responder.

## Debate en clase

Respuesta personal:

## Evidencia

Webhook n8n configurado o documentado:

Mensaje Telegram definido:

Commit realizado:git commit -m "Clase 59 agrega automatizacion n8n y telegram no sensible"

Observaciones: