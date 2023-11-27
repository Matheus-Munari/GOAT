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

router.get("/contarPartidas/:idUsuario", function (req, res) {
    jogadorController.contarPartidas(req, res);
});

router.post("/inserirNovosDados", function (req, res) {
    jogadorController.inserirNovosDados(req, res);
});

router.put("/atualizarNivel", function (req, res) {
    jogadorController.atualizarNivel(req, res);
});

router.get("/obterDadosPartidas/:fkUsuario", function (req, res) {
    jogadorController.obterDadosPartidas(req, res);
});

module.exports = router;