var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController.js");

router.get("/listar", function (req, res) {
    jogadorController.listar(req, res);
});

module.exports = router;