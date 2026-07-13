const db = require("../config/db");

exports.listarApoyosPorCausa = (req, res) => {
  const { causaId } = req.params;

  db.all(
    "SELECT * FROM apoyos WHERE causa_id = ? ORDER BY id DESC",
    [causaId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          error: "Error consultando apoyos"
        });
      }

      res.json({
        ok: true,
        total: rows.length,
        apoyos: rows
      });
    }
  );
};

exports.crearApoyo = (req, res) => {
  const { causa_id, nombre, comentario } = req.body;

  if (!causa_id || !nombre) {
    return res.status(400).json({
      ok: false,
      error: "Causa y nombre son obligatorios"
    });
  }

  const fecha = new Date().toISOString();

  db.run(
    "INSERT INTO apoyos (causa_id, nombre, comentario, fecha) VALUES (?, ?, ?, ?)",
    [causa_id, nombre, comentario || "", fecha],
    function (err) {
      if (err) {
        return res.status(500).json({
          ok: false,
          error: "Error registrando apoyo"
        });
      }

      res.status(201).json({
        ok: true,
        mensaje: "Apoyo registrado correctamente",
        id: this.lastID
      });
    }
  );
};