
function validarInformacoesUsuario() {
     nomeCadastro = i_cadastro_nome.value;
     dtNascCadastro = i_cadastro_nascimento.value;
     emailCadastro = i_cadastro_email.value;
     senhaCadastro = i_cadastro_senha.value;
     confirmacaoSenhaCadastro = i_cadastro_confirmacao_senha.value;

   if(nomeCadastro.length < 1 || dtNascCadastro .length < 1 ||
        (emailCadastro.length < 1 || (emailCadastro.indexOf("@") < 0 || emailCadastro.indexOf(".") < 0)) || senhaCadastro.length < 8 || senhaCadastro != confirmacaoSenhaCadastro) {

            if(nomeCadastro.length < 1) {
                setErro(i_cadastro_nome, "O nome de usuário é obrigatório.")
            } else {
                setSucesso(i_cadastro_nome)
            }
            if(dtNascCadastro.length < 1) {
                setErro(i_cadastro_nascimento, "Digite uma data de nascimento válida")
                document.getElementById
            } else {
                setSucesso(i_cadastro_nascimento)
            }
            if(emailCadastro.length < 1) {
                setErro(i_cadastro_email, "O email é obrigatório")
            }else if(emailCadastro.indexOf("@") < 0 || emailCadastro.indexOf(".") < 0) {
                setErro(i_cadastro_email, "Digite um email válido")
            }else {
                setSucesso(i_cadastro_email);
            }
            if(senhaCadastro.length < 1) {
                setErro(i_cadastro_senha, "A senha é obrigatória");
            } else if(senhaCadastro.length < 8) {
                setErro(i_cadastro_senha, "A senha deve conter ao menos 8 caracteres");
            } else if(senhaCadastro != confirmacaoSenhaCadastro) {
                    setErro(i_cadastro_senha, "As senhas não coincidem")
                    setErro(i_cadastro_confirmacao_senha, "As senhas não coincidem")
            }else {
                setSucesso(i_cadastro_confirmacao_senha);
                setSucesso(i_cadastro_senha);
            }
    } else {

    console.log(nomeCadastro, dtNascCadastro, emailCadastro, senhaCadastro)
    validarEscolha()
    }

}

function setErro(input, msg) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small")

    // msg de erro
    small.innerText = msg;

    // Adicionar classe de erro
    formControl.className = "controleFormulario erro"
}

function setSucesso(input) {
    var formControl = input.parentElement;

    // Adicionar classe de sucesso

    formControl.className = "controleFormulario sucesso"

}

// Scripts que estavam no html de cadastro

  // Minhas funções INICIO

  function cadastro() {
        div_botao_cadastro.style.borderBottom = "2px solid white";
        div_botao_login.style.border = "none";
        form_cadastro.style.display = "flex";
        form_login.style.display = "none";

    }

    function login() {
        div_botao_login.style.borderBottom = "2px solid white";
        div_botao_cadastro.style.border = "none";
        form_cadastro.style.display = "none";
        form_login.style.display = "flex";
    }

    var imagens = ['../assets/imagens/Messi-copa.webp','../assets/imagens/cr7-capa.webp'];

    function underline() {
        div_botao_login.style.borderBottom = "2px solid white";

    }


  // Minhas funções FIM

    var nomeCadastro = "";
    var emailCadastro = "";
    var senhaCadastro = "";
    var dtNascCadastro = "";
    var ruaCadastro = "";
    var cepCadastro = "";
    var numeroCadastro = "";
    var bairroCadastro = "";
    var jogadorCadastro = 0;


    function validarEscolha() {

      localStorage.setItem("nome", nomeCadastro);
      localStorage.setItem("email", emailCadastro);
      localStorage.setItem("senha", senhaCadastro);
      localStorage.setItem("dataNasc", dtNascCadastro);
      // localStorage.setItem("jogador", jogadorSelecionado)
  
      location.href = "cadastro2.html";
      

      console.log(nomeCadastro, nascimentoCadastro, emailCadastro, senhaCadastro)
    }


  function listar() {
    fetch("/empresas/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((empresas) => {
          empresas.forEach((empresa) => {
            listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
          });
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }

  function sumirMensagem() {
    cardErro.style.display = "none";
  }

// Funções de logar

  function entrar() {
    // aguardar();

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
      Swal.fire({
        title: "Preencha os campos",
        text: "Não se esqueça de preencher os campos para conseguir acessar sua conta",
        icon: "warning"
      });
        // cardErro.style.display = "block"
        // mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        // finalizarAguardar();
        return false;
    }
    else {
        // setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.setItem("FK_USUARIO", json.fkJogador);
                // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                setTimeout(function () {
                    window.location = "./dashboard/dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Usuário ou senha inválidos",
            text: "Insira um email e senha válidos",
            showConfirmButton: false,
            timer: 1500
            });

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}
  