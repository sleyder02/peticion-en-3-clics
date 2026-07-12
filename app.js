const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const causasRoutes = require("./routes/causas.routes");
const apoyosRoutes = require("./routes/apoyos.routes");

dotenv.config();
require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use("/api/causas", causasRoutes);
app.use("/api/apoyos", apoyosRoutes);

app.get("/", (req, res) => {
  res.send("Petición en 3 Clics funcionando");
});

app.get("/estado", (req, res) => {
  res.json({
    ok: true,
    mensaje: "Servidor funcionando",
    proyecto: "Petición en 3 Clics"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});