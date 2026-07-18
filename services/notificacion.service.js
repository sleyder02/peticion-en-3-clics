const dotenv = require("dotenv");

dotenv.config();

async function notificarNuevoApoyo({ causaId }) {
  const n8nEnabled = process.env.N8N_ENABLED === "true";
  const webhookUrl = process.env.N8N_WEBHOOK_APOYO;

  if (!n8nEnabled || !webhookUrl) {
    console.log("n8n no está habilitado o no hay webhook configurado.");
    return {
      ok: false,
      modo: "mock",
      mensaje: "Notificación n8n no configurada"
    };
  }

  const payload = {
    evento: "nuevo_apoyo",
    causaId,
    mensaje: "Nuevo apoyo registrado en una causa comunitaria.",
    datosPersonales: false
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    return {
      ok: response.ok,
      modo: "n8n",
      respuesta: data
    };
  } catch (error) {
    console.error("Error notificando a n8n:", error.message);

    return {
      ok: false,
      modo: "error",
      mensaje: "No se pudo notificar a n8n"
    };
  }
}

module.exports = {
  notificarNuevoApoyo
};