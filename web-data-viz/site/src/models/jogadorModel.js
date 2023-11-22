var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM estatisticasTemporada ORDER BY fkTemporada;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

module.exports = {
    listar
}