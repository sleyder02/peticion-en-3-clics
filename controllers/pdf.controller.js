const PDFDocument = require("pdfkit");
const db = require("../config/db");

function obtenerCausa(causaId) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM causas WHERE id = ?", [causaId], (err, row) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(row);
    });
  });
}

function obtenerApoyos(causaId) {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM apoyos WHERE causa_id = ? ORDER BY id ASC",
      [causaId],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows);
      }
    );
  });
}

exports.generarPdfCausa = async (req, res) => {
  try {
    const { causaId } = req.params;

    const causa = await obtenerCausa(causaId);

    if (!causa) {
      return res.status(404).json({
        ok: false,
        error: "Causa no encontrada"
      });
    }

    const apoyos = await obtenerApoyos(causaId);

    const doc = new PDFDocument({
      margin: 50,
      size: "LETTER"
    });

    const nombreArchivo = `peticion-causa-${causa.id}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${nombreArchivo}"`
    );

    doc.pipe(res);

    doc.fontSize(18).text("Petición en 3 Clics", {
      align: "center"
    });

    doc.moveDown();

    doc.fontSize(14).text("Documento colectivo de práctica", {
      align: "center"
    });

    doc.moveDown();

    doc
      .fontSize(10)
      .text(
        "Advertencia: Este documento es un borrador de práctica generado con fines pedagógicos. Debe ser revisado antes de cualquier uso formal. No constituye radicación automática ante ninguna entidad, no certifica identidad real de los apoyos registrados y no reemplaza asesoría jurídica.",
        {
          align: "justify"
        }
      );

    doc.moveDown();

    doc.fontSize(12).text(`Fecha de generación: ${new Date().toLocaleString()}`);

    doc.moveDown();

    doc.fontSize(16).text("1. Causa comunitaria", {
      underline: true
    });

    doc.moveDown(0.5);

    doc.fontSize(12).text(`Título: ${causa.titulo}`);
    doc.moveDown(0.5);
    doc.text(`Descripción: ${causa.descripcion}`, {
      align: "justify"
    });
    doc.moveDown(0.5);
    doc.text(`Fecha de creación: ${causa.fecha_creacion}`);

    doc.moveDown();

    doc.fontSize(16).text("2. Resumen de apoyos", {
      underline: true
    });

    doc.moveDown(0.5);

    doc.fontSize(12).text(`Total de apoyos registrados: ${apoyos.length}`);

    doc.moveDown();

    doc.fontSize(16).text("3. Listado de apoyos", {
      underline: true
    });

    doc.moveDown(0.5);

    if (apoyos.length === 0) {
      doc.fontSize(12).text("Aún no hay apoyos registrados para esta causa.");
    } else {
      apoyos.forEach((apoyo, index) => {
        doc.fontSize(12).text(`${index + 1}. ${apoyo.nombre}`);
        doc.fontSize(10).text(`Comentario: ${apoyo.comentario || "Sin comentario."}`);
        doc.fontSize(10).text(`Fecha: ${apoyo.fecha}`);
        doc.moveDown(0.5);
      });
    }

    doc.addPage();

    doc.fontSize(16).text("4. Cierre", {
      underline: true
    });

    doc.moveDown();

    doc.fontSize(12).text(
      "Este documento organiza una causa comunitaria y sus apoyos registrados en la plataforma Petición en 3 Clics. Su finalidad es pedagógica y de apoyo a la organización comunitaria. Antes de cualquier uso formal, debe ser revisado por una persona responsable.",
      {
        align: "justify"
      }
    );

    doc.end();
  } catch (error) {
    console.error("Error generando PDF:", error.message);

    return res.status(500).json({
      ok: false,
      error: "No fue posible generar el PDF"
    });
  }
};