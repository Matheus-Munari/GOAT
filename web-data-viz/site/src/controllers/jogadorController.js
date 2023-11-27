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

function contarPartidas(req, res) {
    var parametro = req.params.idUsuario;

    var parametroString = `${parametro}`

    var fkUsuario = parametroString.replace(':', '');

    jogadorModel.contarPartidas(fkUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function inserirNovosDados(req, res) {
    var novosJogos = req.body.novasPartidasServer;
    var novosGols = req.body.novosGolsServer;
    var novasAssistencias = req.body.novasAssistenciasServer;
    var dataJogo = req.body.dataJogoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    console.log('Estou no controller')

    jogadorModel.inserirNovosDados(novosJogos, novosGols, novasAssistencias, dataJogo, fkUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log(erro);
        console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

function atualizarNivel(req, res) {
    var novoNivel = req.body.nivelAddServer;
    var novosPontos = req.body.pontosAddServer;
    var idAtributos = req.body.idAtributos;

    console.log('Estou no controller')

    jogadorModel.atualizarNivel(novoNivel, novosPontos, idAtributos).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log(erro);
        console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    contarUsuario,
    contarMessi,
    contarPartidas,
    inserirNovosDados,
    atualizarNivel
}