var jogadorModel = require("../models/jogadorModel");

var jogadorModel = require("../models/jogadorModel");

function listar(req, res) {
    jogadorModel.listar().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function contarUsuario(req, res) {
    jogadorModel.contarUsuario().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function contarMessi(req, res) {
    jogadorModel.contarMessi().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    contarUsuario,
    contarMessi
}