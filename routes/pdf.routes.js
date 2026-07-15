const express = require("express");
const router = express.Router();
const controller = require("../controllers/pdf.controller");

router.get("/:causaId", controller.generarPdfCausa);

module.exports = router;