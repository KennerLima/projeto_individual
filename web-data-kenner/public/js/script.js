function redirecionar(selectEscolhido) {
    var select = selectEscolhido
    console.log(select)
    var optionEscolhida = select.value

    if (select) {
        window.location.href = optionEscolhida
    }
    select.selectedIndex = 0
}

function redirecionarHome() {
    window.location = "index.html"
}

function mudarFormulario(atual, proximo) {
    atual.style.display = 'none'
    proximo.style.display = 'flex'
}

var categorias = []
setTimeout(() => {
    categorias.push(
        {
            "nome": "Atividades Recreativas",
            "caminho": "0-atividades-recreativas/",
            "especialidades": [
                { "nome": "Arte de Acampar", "caminho": "0-arte-acampar",
                    "questoes": 
                            [
                                "Explicar como e porque as condições do tempo, a estação do ano e as fontes de água devem ser consideradas ao se escolher um local de acampamento",
                                "Preparar uma lista de roupas necessárias para acampamento com tempo quente e outra com tempo frio.",
                                "Conhecer e praticar as regras de segurança de um acampamento.",
                                "Demonstrar sua habilidade no uso do canivete: demonstrar ou explicar as regras de segurança para seu uso e usá-lo para preparar gravetos e madeira para fogueira.",
                                "Preparar um acampamento para sua unidade. Faça uma lista de objetos pessoais que devem ser levados e itens que devem ser levados para uso do grupo todo.",
                                "Preparar um cardápio balanceado para desjejum, almoço e jantar.",
                                "Completar o seguinte enquanto estiver no acampamento:"
                                    ["Preparar o chão abaixo da barraca, para proporcionar um bom sono",
                                    "Montar corretamente uma barraca",
                                    "Preparar uma área para fazer a fogueira",
                                    "Demonstrar como proteger o acampamento de animais, insetos, e mau tempo ou chuva",
                                    "Demonstrar como preservar a natureza durante o acampamento e deixar o local como se ninguém tivesse estado ali"],
                                "Saber oito coisas que se pode/deve fazer quando perdido.",
                                "Acampar durante três dias e duas noites seguidos, dormindo ao relento ou dentro de uma barraca. Estar ativamente envolvido na preparação de pelo menos duas refeições.",
                                "Considerando as coisas aprendidas nesta especialidade e os acampamentos feitos, qual é o significado e a razão do Código de Acampamento dos Desbravadores?"
                            ]
                                                },
                { "nome": "Cultura Física", "caminho": "1-cultura-fisica" },
                { "nome": "Natação Principiante I", "caminho": "2-natacao-principiante" },
                { "nome": "Natação Intermediário I", "caminho": "3-natacao-intermediaria" },
                { "nome": "Natação Avançada", "caminho": "4-natacao-avancada" },
                { "nome": "Excursionismo Pedestre", "caminho": "5-excursionismo-pedestre" },
                { "nome": "Mapa e Bússola", "caminho": "6-mapa-bussola" }
            ]
        },
        {
            "nome": "Artes e Habilidades Manuais",
            "caminho": "1-artes-habilidades-manuais/",
            "especialidades": [
                { "nome": "E.V.A", "caminho": "0-eva" },
                { "nome": "Trabalhos com Agulha", "caminho": "1-trabalho-agulha" },
                { "nome": "Cultura Indígena", "caminho": "2-cultura-indigena" },
                { "nome": "Modelagem e Fabricação de Sabão", "caminho": "3-modelagem-sabao" },
                { "nome": "Modelagem em Gesso", "caminho": "4-modelagem-gesso" },
                { "nome": "Origami", "caminho": "5-origami" },
                { "nome": "Corrida de Carrinhos de Madeira", "caminho": "6-corrida-carrinhos-madeira" }
            ]
        }
    )
    criarEspecialidades()
}, 1000)

function criarEspecialidades() {
    for (var categoriaAtual = 0; categoriaAtual < categorias.length; categoriaAtual++) {
        var categoria = categorias[categoriaAtual]
        var div = "div_" + categoria.caminho
        var html = `<div id="${div}" class="card-especialidades">`

        for (var espAtual = 0; espAtual < categoria.especialidades.length; espAtual++) {
            var especialidade = categoria.especialidades[espAtual]
            html += `
                <label class="label-especialidades">
                <input type="checkbox" id="input_${especialidade.caminho}">
                <div class="campo-especialidade">
                <img src="./assets/icon/especialidades/${categoria.caminho + especialidade.caminho}.png">
                <span> ${especialidade.nome} </span>
                </div>
                </label>`
        }
        html += `</div>`
        div_especialidades.innerHTML += html
        var divCategoria = document.getElementById("div_" + categoria.caminho)
        divCategoria.style.display = 'none'
    }
    inserirIdInputsEspecialidades()
}

const listaIdInputEspecialidades = []
function inserirIdInputsEspecialidades() {

    for (var categoriaAtual = 0; categoriaAtual < categorias.length; categoriaAtual++) {
        var categoria = categorias[categoriaAtual]
        var divId = "div_" + categoria.caminho
        var divCategoria = document.getElementById(divId)

        if (divCategoria) {
            for (var espAtual = 0; espAtual < categoria.especialidades.length; espAtual++) {
                var especialidade = categoria.especialidades[espAtual]
                var inputId = document.getElementById("input_" + especialidade.caminho)

                listaIdInputEspecialidades.push(inputId)
            }
        }
    }
}

function verificarOpcaoSelecionada(opcao) {
    for (var categoriaAtual = 0; categoriaAtual < categorias.length; categoriaAtual += 1) {
        var caminho = categorias[categoriaAtual].caminho
        var div = document.getElementById("div_" + caminho)
        div.style.display = 'none'

        if (opcao.value == caminho) {
            div.style.display = 'flex'
        }

    }
}

var listaClassesSelecionadas = []
function inserirClassesSelecionadasLista() {
    const listaIdInputClasse = [input_amigo, input_amigo_natureza, input_companheiro, input_companheiro_excursionismo, input_pesquisador, input_pesquisador_campo, input_pioneiro, input_pioneiro_fronteiras, input_excursionista, input_excursionista_mata, input_guia, input_guia_exploracao]
    for (var posicaoAtual = 0; posicaoAtual < listaIdInputClasse.length; posicaoAtual += 1) {

        if (listaIdInputClasse[posicaoAtual].checked) {
            listaClassesSelecionadas.push(posicaoAtual + 1)
        }
    }
    console.log('Lista de Classes Selecionadas: ' + listaClassesSelecionadas)
}

var listaEspecialidadesSelecionadas = []
function inserirEspecialidadesSelecionadasLista() {
    for (var posicaoInput = 0; posicaoInput < listaIdInputEspecialidades.length; posicaoInput += 1) {

        if (listaIdInputEspecialidades[posicaoInput].checked) {
            encontrarEspecialidade(listaIdInputEspecialidades[posicaoInput])
        }
    }
    console.log('Lista de Especialidades Selecionadas: ' + listaEspecialidadesSelecionadas)
}

function encontrarEspecialidade(inputAtual) {
    for (var categoriaAtual = 0; categoriaAtual < categorias.length; categoriaAtual += 1) {
        var categoria = categorias[categoriaAtual]

        for (var especialidadeAtual = 0; especialidadeAtual < categorias[categoriaAtual].especialidades.length; especialidadeAtual += 1) {
            var especialidade = categoria.especialidades[especialidadeAtual]
            var idInputEspecialidadeAtual = document.getElementById("input_" + especialidade.caminho)
            if (inputAtual == idInputEspecialidadeAtual) {
                listaEspecialidadesSelecionadas.push(especialidade.nome)
            }
        }
    }
}

function cadastrar() {
    // aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo

    // variaveis da tabela membro
    var nomeVar = nome_input.value;
    var dtNascVar = dtNasc_input.value;
    var telefoneVar = telefone_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    // console.log('Nome: ' + nomeVar, 'Data Nasc.: ' + dtNascVar, 'Telefone: ' + telefoneVar, 'Email: ' + emailVar, 'Senha:' + senhaVar)

    // variaveis da tabela endereço
    var cepVar = cep_input.value;
    var ruaVar = rua_input.value;
    var numeroVar = numero_input.value;
    var complementoVar = complemento_input.value;
    var bairroVar = bairro_input.value;
    var cidadeVar = cidade_input.value;
    var estadoVar = estado_input.value;
    // console.log('CEP: ' + cepVar, 'Rua: ' + ruaVar, 'Numero: ' + numeroVar, 'Complemento: ' + complementoVar, 'Bairro: ' + bairroVar, 'Cidade: ' + cidadeVar, 'Estado: ' + estadoVar)

    // inserção de dados na lista de classes selecionadas
    inserirClassesSelecionadasLista()

    //inserção de dados na lista de especialidades selecionadas
    inserirEspecialidadesSelecionadasLista()

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        dtNascVar == "" ||
        telefoneVar == "" ||
        emailVar == "" ||
        cepVar == "" ||
        ruaVar == "" ||
        numeroVar == "" ||
        complementoVar == "" ||
        bairroVar == "" ||
        cidadeVar == "" ||
        estadoVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Preencha todos os campos";

        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            dtNascServer: dtNascVar,
            telefoneServer: telefoneVar,
            emailServer: emailVar,
            cepServer: cepVar,
            ruaServer: ruaVar,
            numeroServer: numeroVar,
            complementoServer: complementoVar,
            bairroServer: bairroVar,
            cidadeServer: cidadeVar,
            estadoServer: estadoVar,
            senhaServer: senhaVar,
            listaClassesServer: listaClassesSelecionadas,
            listaEspecialidadesServer: listaEspecialidadesSelecionadas
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, 500);

                limparFormulario();
                finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}