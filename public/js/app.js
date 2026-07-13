async function cargarCausas() {
  const contenedor = document.getElementById("listaCausas");
  contenedor.textContent = "Cargando causas...";

  try {
    const response = await fetch("/api/causas");
    const data = await response.json();

    if (!response.ok || !data.ok) {
      contenedor.textContent = "No fue posible cargar las causas.";
      return;
    }

    if (data.causas.length === 0) {
      contenedor.textContent = "Aún no hay causas registradas.";
      return;
    }

    await pintarCausas(data.causas);
  } catch (error) {
    contenedor.textContent = "Error conectando con el servidor.";
    console.error(error);
  }
}

async function crearCausa(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const mensaje = document.getElementById("mensajeCausa");

  if (!titulo || !descripcion) {
    mensaje.textContent = "Título y descripción son obligatorios.";
    return;
  }

  mensaje.textContent = "Creando causa...";

  try {
    const response = await fetch("/api/causas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ titulo, descripcion })
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      mensaje.textContent = data.error || "No fue posible crear la causa.";
      return;
    }

    mensaje.textContent = "Causa creada correctamente.";
    document.getElementById("formCausa").reset();
    await cargarCausas();
  } catch (error) {
    mensaje.textContent = "Error conectando con el servidor.";
    console.error(error);
  }
}

async function pintarCausas(causas) {
  const contenedor = document.getElementById("listaCausas");

  contenedor.innerHTML = causas
    .map((causa) => {
      return `
        <article class="causa">
          <h3>${causa.titulo}</h3>
          <p>${causa.descripcion}</p>
          <p><strong>Fecha:</strong> ${causa.fecha_creacion}</p>
          <p class="contador" id="contador-${causa.id}">Cargando apoyos...</p>

          <section class="privacidad">
            Para apoyar esta causa usa un nombre de práctica. No escribas cédula,
            teléfono, dirección ni datos sensibles.
          </section>

          <form onsubmit="registrarApoyo(event, ${causa.id})">
            <label for="nombre-${causa.id}">Nombre de práctica</label>
            <input
              type="text"
              id="nombre-${causa.id}"
              placeholder="Ejemplo: Ciudadano de práctica"
              required
            />

            <label for="comentario-${causa.id}">Comentario opcional</label>
            <textarea
              id="comentario-${causa.id}"
              rows="3"
              placeholder="Explica brevemente por qué apoyas esta causa"
            ></textarea>

            <button type="submit">Apoyar causa</button>
          </form>

          <div class="apoyos" id="apoyos-${causa.id}">
            Cargando comentarios...
          </div>
        </article>
      `;
    })
    .join("");

  for (const causa of causas) {
    await cargarApoyos(causa.id);
  }
}

async function cargarApoyos(causaId) {
  const contador = document.getElementById(`contador-${causaId}`);
  const contenedorApoyos = document.getElementById(`apoyos-${causaId}`);

  try {
    const response = await fetch(`/api/apoyos/${causaId}`);
    const data = await response.json();

    if (!response.ok || !data.ok) {
      contador.textContent = "No fue posible cargar apoyos.";
      contenedorApoyos.textContent = "";
      return;
    }

    contador.textContent = `Apoyos registrados: ${data.total}`;

    if (data.apoyos.length === 0) {
      contenedorApoyos.textContent = "Aún no hay comentarios de apoyo.";
      return;
    }

    contenedorApoyos.innerHTML = data.apoyos
      .map((apoyo) => {
        return `
          <div class="apoyo">
            <strong>${apoyo.nombre}</strong>
            <p>${apoyo.comentario || "Sin comentario."}</p>
            <small>${apoyo.fecha}</small>
          </div>
        `;
      })
      .join("");
  } catch (error) {
    contador.textContent = "Error consultando apoyos.";
    contenedorApoyos.textContent = "";
    console.error(error);
  }
}

async function registrarApoyo(event, causaId) {
  event.preventDefault();

  const nombre = document.getElementById(`nombre-${causaId}`).value.trim();
  const comentario = document.getElementById(`comentario-${causaId}`).value.trim();

  if (!nombre) {
    alert("El nombre de práctica es obligatorio.");
    return;
  }

  try {
    const response = await fetch("/api/apoyos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        causa_id: causaId,
        nombre,
        comentario
      })
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      alert(data.error || "No fue posible registrar el apoyo.");
      return;
    }

    document.getElementById(`nombre-${causaId}`).value = "";
    document.getElementById(`comentario-${causaId}`).value = "";

    await cargarApoyos(causaId);
    alert("Apoyo registrado correctamente.");
  } catch (error) {
    alert("Error conectando con el servidor.");
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formCausa").addEventListener("submit", crearCausa);
  cargarCausas();
});