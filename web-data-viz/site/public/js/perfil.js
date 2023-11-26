var infosUsuario = [];

    var jogadorFavorito = sessionStorage.FK_USUARIO;
    function mudarFoto() {

        if(jogadorFavorito == 1) {
            sidebar_titulo.innerHTML +=
            `<img src="../assets/imagens/messi-art.png" class="img-icone"> 
            <span>${sessionStorage.NOME_USUARIO}</span>`
        } else {
            sidebar_titulo.innerHTML +=
            `<img src="../assets/imagens/ronaldo-art.png" class="img-icone"> 
            <span>${sessionStorage.NOME_USUARIO}</span>`
        }

        

    }
    var idUsuario = sessionStorage.ID_USUARIO;

    function updateAtributos() {
        var ritmoAtual = ritmoU;
        var finalizacaoAtual = finalizacaoU;
        var passeAtual = passeU;
        var dribleAtual = dribleU;
        var defesaAtual = defesaU;
        var fisicoAtual = fisicoU;
        var overAtual = overU;

        fetch("/usuarios/atualizarAtributos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ritmoServer: ritmoAtual,
                finalizacaoServer: finalizacaoAtual,
                passeServer: passeAtual,
                dribleServer: dribleAtual,
                defesaServer: defesaAtual,
                fisicoServer: fisicoAtual,
                idAtributos: idUsuario,
                overServer: overAtual
      }),
    }) .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Perfil atualizado com sucesso")


        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    }   
    
    
    function adicionarAtributo(atr, opr) {

        if(opr == 1) { 
            if(pontosRestantes <= 0) {
                console.log('Não pode');
                Swal.fire({
                            text: "Você já atribuiu todos os pontos possíveis!",
                            icon: "warning"
                            });
    
            }else{
                if(opr == 1) {
                    if(atr == 1) {
                        if(ritmoU < 99) {
                            ritmoU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    } else if(atr == 2) {
                        if(finalizacaoU < 99) {
                            finalizacaoU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    } else if(atr == 3) {
                        if(passeU < 99) {
                            passeU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    } else if(atr == 4) {
                        if(dribleU < 99) {
                            dribleU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    } else if(atr == 5) {
                        if(defesaU < 99) {
                            defesaU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    } else if(atr == 6) {
                        if(fisicoU < 99) {
                            fisicoU++;
                            atualizarAtributos();
                        }else {
                            Swal.fire({
                                text: "O maximo de pontuação possivel é 99",
                                icon: "warning"
                                });
                        }
                    }
            }
        }
     
    } else {
                if(atr == 1) {
                    if(ritmoU > 1) {
                        ritmoU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                } else if(atr == 2) {
                    if(finalizacaoU > 1) {
                        finalizacaoU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                } else if(atr == 3) {
                    if(passeU > 1) {
                        passeU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                } else if(atr == 4) {
                    if(dribleU > 1) {
                        dribleU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                } else if(atr == 5) {
                    if(defesaU > 1) {
                        defesaU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                } else if(atr == 6) {
                    if(fisicoU > 1) {
                        fisicoU--;
                        atualizarAtributos();
                    }else {
                        Swal.fire({
                            text: "O mínimo de pontuação possivel é 1",
                            icon: "warning"
                            });
                    }
                }
            }
        calcularPontosDisponiveis();

    }

    function validarInfos() {
        var fkAtr = infosUsuario[infosUsuario.length - 1].fkAtributos;
        
        if(fkAtr > 0) {
            card_atributos.style.display = 'flex';
            cadastrar_atributos.style.display = 'none';
        } else {
            card_atributos.style.display = 'none';
            cadastrar_atributos.style.display = 'block';
        }

        calcularPontosDisponiveis()

    }

    var atributosSoma = []
    var ritmoU = 0;
    var finalizacaoU = 0;
    var passeU = 0;
    var dribleU = 0;
    var defesaU = 0;
    var fisicoU = 0;  
    var overU = 0;
    var pontos = 0;
    var pontosRestantes = 0;


    function calcularPontosDisponiveis() {

        var somaAtributos = ritmoU + finalizacaoU + passeU + dribleU + defesaU + fisicoU;
        pontosRestantes = pontos - somaAtributos;
        
        pontos_disponiveis.innerText = pontosRestantes;

    }

    function exibirInfos() {

        input_nome_usuario.value = infosUsuario[0].nome;
        input_email_usuario.value = infosUsuario[0].email;
        input_dtNasc_usuario.value = infosUsuario[0].dtNasc.substr(0, 10);

        if(jogadorFavorito == 1) {
            input_fkUsuario_usuario.value = 'Messi';
        } else {
            input_fkUsuario_usuario.value = 'Cristiano Ronaldo';
        }
        ritmoU = infosUsuario[0].ritmo;
        finalizacaoU = infosUsuario[0].finalizacao;
        passeU = infosUsuario[0].passe;
        dribleU = infosUsuario[0].drible;
        defesaU = infosUsuario[0].defesa;
        fisicoU = infosUsuario[0].fisico;
        
        // Card
        pontos = infosUsuario[0].pontos;
        overU = parseInt(pontos/6)
        
        atualizarAtributos()

        validarInfos()
        
    }

    function atualizarAtributos() {
        nome_usuario_carta.innerText = infosUsuario[0].nome;
        overall.innerHTML = infosUsuario[0].overall;
        posicao.innerHTML = infosUsuario[0].posicao;
        ritmo.innerText = ritmoU;
        finalizacao.innerText = finalizacaoU;
        passe.innerText = passeU;
        drible.innerText = dribleU;
        defesa.innerText = defesaU;
        fisico.innerText = fisicoU;
        
        // Atualizar
        ritmo_atualizar.innerText = ritmoU;
        finalizacao_atualizar.innerText = finalizacaoU;
        passe_atualizar.innerText = passeU;
        drible_atualizar.innerText = dribleU;
        defesa_atualizar.innerText = defesaU;
        fisico_atualizar.innerText = fisicoU;


    }

    function obterInfosUsuarios() {

        var idUsuario = sessionStorage.ID_USUARIO;

        console.log(idUsuario);

    fetch(`/usuarios/buscar/:${idUsuario}`, {
        cache: 'no-store'
    }).then(function(response) {
        
            if(response.ok) {
                response.json().then(function(resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    infosUsuario.push(resposta[0]);
                    exibirInfos();

            });
        }else {
            console.error('Nenhum dado encontrado ou erro na API')
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`)
        })
}

    function cadastrarStats() {
        var altura = Number(input_altura.value);
        var peso = Number(input_peso.value);
        var posicao = select_posicao.value;
        var idUsuario = sessionStorage.ID_USUARIO;

        fetch("/usuarios/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                alturaServer: altura,
                pesoServer: peso,
                posicaoServer: posicao,
                idUsuarioServer: idUsuario
      }),
    }) .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Perfil atualizado com sucesso")

        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });
}

function inserirAtributos() {
    var idAtributo = idUsuario;

    fetch("/usuarios/inserirAtributos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idAtributoServer: idAtributo
      }),
    }) .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Perfil atualizado com sucesso")

            cadastrarStats();

        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

}