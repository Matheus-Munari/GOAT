var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, fkJogador FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, dtNasc, rua, cep, bairro, numero, jogador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, dtNasc, fkJogador) VALUES ('${nome}', '${email}', '${senha}', '${dtNasc}', '${jogador}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar(idUsuario) {
    var instrucao = `
    SELECT * FROM usuario as u LEFT JOIN atributos as a
	on idAtributos = fkAtributos WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function atualizar(altura, peso, posicao, idUsuario) {
    var instrucao = `
    UPDATE usuario SET altura = ${altura}, peso = ${peso}, posicao = '${posicao}', fkAtributos = ${idUsuario} 
	WHERE idUsuario = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirAtributos(idAtributo) {
    var instrucao = `
    insert into atributos values
	(${idAtributo}, 50, 50, 50, 50, 50, 50, 300, 50, 0);
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarAtributos(ritmo, finalizacao, passe, drible, defesa, fisico, idAtributos, overall) {
    var instrucao = `
    update atributos set ritmo = ${ritmo}, finalizacao = ${finalizacao}, passe = ${passe}, drible = ${drible}, defesa = ${defesa}, fisico = ${fisico}, overall = ${overall} where idAtributos = ${idAtributos};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    buscar,
    atualizar,
    inserirAtributos,
    atualizarAtributos
};