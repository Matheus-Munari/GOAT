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

module.exports = {
    listar,
    contarUsuario,
    contarMessi
}