var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha,
                            fkJogador: resultadoAutenticar[0].fkJogador
                            // aquarios: resultadoAquarios
                        });


                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                        //             res.json({
                        //                 id: resultadoAutenticar[0].id,
                        //                 email: resultadoAutenticar[0].email,
                        //                 nome: resultadoAutenticar[0].nome,
                        //                 senha: resultadoAutenticar[0].senha,
                        //                 aquarios: resultadoAquarios
                        //             });
                        //         } else {
                        //             res.status(204).json({ aquarios: [] });
                        //         }
                        //     })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var empresaId = req.body.empresaServer;
    var dtNasc = req.body.dtNascServer;
    var rua = req.body.ruaServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
    var jogador = req.body.jogadorServer;
    

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!"); 
    }else if(rua == undefined) {
        res.status(400).send("A rua está undefined!");
    } else if(cep == undefined) {
        res.status(400).send("O CEP está undefined!");
    }  else if(bairro == undefined) {
        res.status(400).send("O Bairro está undefined!");
    }   else if(numero == undefined) {
        res.status(400).send("O Número está undefined!");
    }   else if(jogadorServer == undefined) {
        res.status(400).send("O Jogador está undefined!");
    }
        {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, dtNasc, rua, cep, bairro, numero, jogador)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscar(req, res) {
    var usuario = req.params.idUsuario;

    var sUsuario = `${usuario}`;
    var idUsuario = sUsuario.replace(':', '');
    console.log(idUsuario);
    console.log(req.params.idUsuario);
    // var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as os dados do usuário de id ${idUsuario}`);

    usuarioModel.buscar(idUsuario).then(function(resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sql.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function atualizar(req, res) {
    var altura = req.body.alturaServer;
    var peso = req.body.pesoServer;
    var posicao = req.body.posicaoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (posicao == undefined) {
        res.status(400).send("Sua posicao está undefined!");
    }

    usuarioModel.atualizar(altura, peso, posicao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar o perfil! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

function atualizarAtributos(req, res) {
    var ritmo = req.body.ritmoServer;
    var finalizacao = req.body.finalizacaoServer;
    var passe = req.body.passeServer;
    var drible = req.body.dribleServer;
    var defesa = req.body.defesaServer;
    var fisico = req.body.fisicoServer;
    var idAtributos = req.body.idAtributos;
    var overall = req.body.overServer;


    if (ritmo == undefined) {
        res.status(400).send("Sua ritmo está undefined!");
    } else if (finalizacao == undefined) {
        res.status(400).send("Seu finalização está undefined!");
    } else if (passe == undefined) {
        res.status(400).send("Sua passe está undefined!");
    }

    usuarioModel.atualizarAtributos(ritmo, finalizacao, passe, drible, defesa, fisico, idAtributos, overall)
            .then(
                function (resultado) {
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar o perfil! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

function inserirAtributos(req, res) {
    var idAtributo = req.body.idAtributoServer;

    usuarioModel.inserirAtributos(idAtributo)
            .then(
                function (resultado) {
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar o perfil! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}


module.exports = {
    autenticar,
    cadastrar,
    buscar,
    atualizar,
    inserirAtributos,
    atualizarAtributos
}