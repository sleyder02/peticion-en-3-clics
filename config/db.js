const sqlite3 = require("sqlite3").verbose();
const dotenv = require("dotenv");

dotenv.config();

const dbPath = process.env.DB_PATH || "./database.sqlite";

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error conectando a SQLite:", err.message);
  } else {
    console.log("Conectado a SQLite");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS causas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      fecha_creacion TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS apoyos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      causa_id INTEGER NOT NULL,
      nombre TEXT NOT NULL,
      comentario TEXT,
      fecha TEXT NOT NULL,
      FOREIGN KEY (causa_id) REFERENCES causas(id)
    )
  `);
});

module.exports = db;