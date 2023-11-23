var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController.js");

router.get("/listar", function (req, res) {
    jogadorController.listar(req, res);
});

router.get("/contarUsuarios", function (req, res) {
    jogadorController.contarUsuario(req, res);
});

router.get("/contarMessi", function (req, res) {
    jogadorController.contarMessi(req, res);
});

module.exports = router;