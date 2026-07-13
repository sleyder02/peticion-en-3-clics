const db = require("../config/db");

exports.listarCausas = (req, res) => {
  db.all("SELECT * FROM causas ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        error: "Error consultando causas"
      });
    }

    res.json({
      ok: true,
      total: rows.length,
      causas: rows
    });
  });
};

exports.crearCausa = (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      ok: false,
      error: "Título y descripción son obligatorios"
    });
  }

  const fecha_creacion = new Date().toISOString();

  db.run(
    "INSERT INTO causas (titulo, descripcion, fecha_creacion) VALUES (?, ?, ?)",
    [titulo, descripcion, fecha_creacion],
    function (err) {
      if (err) {
        return res.status(500).json({
          ok: false,
          error: "Error creando causa"
        });
      }

      res.status(201).json({
        ok: true,
        mensaje: "Causa creada correctamente",
        id: this.lastID
      });
    }
  );
};
