const express = require("express");
const router = express.Router();
const controller = require("../controllers/causas.controller");

router.get("/", controller.listarCausas);
router.post("/", controller.crearCausa);

module.exports = router;