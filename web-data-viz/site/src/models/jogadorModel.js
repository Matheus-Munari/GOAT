var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM estatisticasTemporada ORDER BY temporada;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function contarUsuario() {
    var instrucao = 
    `
        SELECT count(idUsuario) AS contUsuarios FROM usuario;  
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function contarMessi() {
    var instrucao = 
    `
        SELECT count(fkJogador) AS contMessi FROM usuario WHERE fkJogador = 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function contarPartidas(fkUsuario) {
    var instrucao =
    `
    select fkUsuario, sum(jogos) as partidas, sum(gols) as gols, sum(assistencias) as assistencias from partida Where fkUsuario = ${fkUsuario}
	GROUP BY fkUsuario;
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirNovosDados(novosJogos, novosGols, novasAssistencias, dataJogo, fkUsuario) {
    console.log('Estou no models')
    var instrucao =
    `
        INSERT INTO partida VALUES (null, ${novosJogos}, ${novosGols}, ${novasAssistencias}, ${fkUsuario}, '${dataJogo}');
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarNivel(novoNivel, novosPontos, idAtributos) {
    var instrucao = `
        UPDATE atributos SET pontos = ${novosPontos}, nivel = ${novoNivel} WHERE idAtributos = ${idAtributos};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosPartidas(fkUsuario) {
    var instrucao =
    `
    select * from partida Where fkUsuario = ${fkUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    contarUsuario,
    contarMessi,
    contarUsuario,
    contarPartidas,
    inserirNovosDados,
    atualizarNivel,
    obterDadosPartidas
}