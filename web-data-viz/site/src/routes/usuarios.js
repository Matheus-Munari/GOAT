var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscar/:idUsuario", function (req, res) {
    usuarioController.buscar(req, res);
});

router.put("/atualizar", function (req, res) {
    usuarioController.atualizar(req, res);
})

router.post("/inserirAtributos", function (req, res) {
    usuarioController.inserirAtributos(req, res);
})

router.put("/atualizarAtributos", function (req, res) {
    usuarioController.atualizarAtributos(req, res);
})

module.exports = router;