const express = require("express");
const router = express.Router();
const controller = require("../controllers/apoyos.controller");

router.get("/:causaId", controller.listarApoyosPorCausa);
router.post("/", controller.crearApoyo);

module.exports = router;