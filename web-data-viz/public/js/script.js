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

function mascaraData(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (valor.length > 2) valor = valor.replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona a primeira barra
    if (valor.length > 5) valor = valor.replace(/(\d{2})(\d{2})(\d)/, '$1/$2/$3'); // Adiciona a segunda barra
    input.value = valor; // Atualiza o valor do campo
  }

const categorias = [

    {
        "nome": "Atividades Recreativas",
        "caminho": "0-atividades-recreativas/",
        "especialidades": [
            {
                "nome": "Arte de Acampar",
                "caminho": "0-arte-acampar",
                "materialUrl": "https://youtu.be/gyO1I-DFY5Y",
                "prova": [
                    {
                        "questao": "Explicar como e porque as condições do tempo, a estação do ano e as fontes de água devem ser consideradas ao se escolher um local de acampamento.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Preparar uma lista de roupas necessárias para acampamento com tempo quente e outra com tempo frio.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Conhecer e praticar as regras de segurança de um acampamento.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Demonstrar sua habilidade no uso do canivete: demonstrar ou explicar as regras de segurança para seu uso e usá-lo para preparar gravetos e madeira para fogueira.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Preparar um acampamento para sua unidade. Faça uma lista de objetos pessoais que devem ser levados e itens que devem ser levados para uso do grupo todo.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Preparar um cardápio balanceado para desjejum, almoço e jantar.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Completar o seguinte enquanto estiver no acampamento:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Preparar o chão abaixo da barraca, para proporcionar um bom sono.",
                            "Montar corretamente uma barraca.",
                            "Preparar uma área para fazer a fogueira.",
                            "Demonstrar como proteger o acampamento de animais, insetos e mau tempo ou chuva.",
                            "Demonstrar como preservar a natureza durante o acampamento e deixar o local como se ninguém tivesse estado ali."
                        ]
                    },
                    {
                        "questao": "Saber oito coisas que se pode/deve fazer quando perdido.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Acampar durante três dias e duas noites seguidos, dormindo ao relento ou dentro de uma barraca. Estar ativamente envolvido na preparação de pelo menos duas refeições.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Considerando as coisas aprendidas nesta especialidade e os acampamentos feitos, qual é o significado e a razão do Código de Acampamento dos Desbravadores?",
                        "tipo": "teorico"
                    }
                ]
            },
            {
                "nome": "Cultura Física",
                "caminho": "1-cultura-fisica",
                "materialUrl": "https://youtu.be/fqgVfEj0AvA",
                "prova": [
                    {
                        "questao": "Fazer um relatório citando, pelo menos, 5 benefícios de se manter um bom condicionamento físico.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Fazer um relatório sobre como os exercícios físicos, uma alimentação adequada e estabilidade emocional ajudam no equilíbrio do corpo. Citar exemplos negativos e positivos em cada um.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Definir os seguintes exercícios. Citar alguns exemplos em cada modalidade:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Isométrico",
                            "Isotônico",
                            "Isocinético",
                            "Anaeróbio",
                            "Aeróbio"
                        ]
                    },
                    {
                        "questao": "Fazer um relatório explicando porque os procedimentos abaixo são importantes em um programa de exercícios. Citar exemplos de cada um.",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Alongamento",
                            "Aquecimento",
                            "Exercícios aeróbios",
                            "Relaxamento",
                            "Exercícios localizados"
                        ]
                    },
                    {
                        "questao": "Demonstrar como verificar sua frequência cardíaca em repouso e após a atividade física.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Saber calcular sua frequência cardíaca máxima. Qual a importância de controlá-la durante a prática esportiva? Em qual faixa há um melhor aproveitamento durante exercícios aeróbios? Qual aparelho pode ajudar no controle e como ele funciona?",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Usando o conhecimento adquirido no requisito 4, fazer um programa de exercícios regulares para ser praticado, pelo menos, 4 vezes por semana por um período mínimo de 4 meses. Este programa deve conter:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Tipo de exercícios de alongamento",
                            "Frequência cardíaca em repouso",
                            "Tipo de exercícios de aquecimento",
                            "Tipo de exercícios aeróbios",
                            "Tempo na prática de exercícios aeróbios",
                            "Frequência cardíaca após o exercício",
                            "Tipos de ginástica localizada",
                            "Exercícios de alongamento",
                            "Frequência cardíaca 3 minutos após os exercícios aeróbios"
                        ]
                    }
                ]
            },
            {
                "nome": "Natação Principiante I",
                "caminho": "2-natacao-principiante",
                "materialUrl": "https://pt.scribd.com/document/548366599/NATACAO-PRINCIPIANTE-1",
                "prova": [
                    {
                        "questao": "Ter a especialidade de Segurança básica na água.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Com a água no nível do peito, buscar um objeto no fundo, sem ajuda e com os olhos abertos.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Saltar da borda lateral, na parte mais profunda da piscina.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Dando um impulso, deslizar de barriga para baixo à distância de dois corpos.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Nado crawl - 20 metros.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Nado de costas - 20 metros.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Mudar de direção no nado livre de frente.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Mudar de direção no nado de costas.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Permanecer boiando por 1 minuto.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Deslocar-se na água por 20 metros usando camiseta.",
                        "tipo": "pratico"
                    },
                    {
                        "questao": "Realizar perna de crawl e costas com prancha por 10 minutos.",
                        "tipo": "pratico"
                    }
                ]
            },
            {
                "nome": "Acampamento I",
                "caminho": "3-acampamento-1",
                "materialUrl": "https://youtu.be/UH5ecaMqqU8",
                "prova":
                    [
                        {
                            "questao": "Entender e praticar a boa educação no campo, em relação à preservação da natureza.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Saber oito coisas que devem ser feitas quando se está perdido.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Estar familiarizado com vários tipos de equipamentos para dormir, adequados a vários climas e épocas do ano.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Relacionar objetos pessoais necessários para um acampamento de fim de semana.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Planejar e participar de um acampamento de fim de semana, com no mínimo 2 pernoites.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Saber montar uma barraca. Observar regras de prevenção contra incêndios depois que a barraca estiver montada.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Conhecer e praticar os princípios de higiene de um acampamento, seja em local com estrutura ou em um acampamento rústico.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Usar corretamente canivete e machadinha. Conhecer 10 regras de segurança no uso destas ferramentas.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Demonstrar habilidade para escolher o local e preparar uma fogueira.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Conhecer as regras de segurança para mexer com fogo.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Saber como usar fósforos.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Fazer uma fogueira usando apenas um fósforo e materiais da natureza.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Demonstrar como proteger a lenha que será usada em fogueiras, em caso de chuva ou mau tempo.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Fazer e comer pão no espeto em uma das refeições do acampamento.",
                            "tipo": "pratico"
                        },
                        {
                            "questao": "Descrever o procedimento adequado para levar e manter os utensílios de cozinha limpos.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Descrever a roupa apropriada para dormir e como manter-se aquecido durante a noite.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Retirar uma lição espiritual prática da natureza durante seu acampamento.",
                            "tipo": "teorico"
                        },
                        {
                            "questao": "Explicar e praticar o lema: 'não levar nada além de fotos, não deixar nada além de pegadas, não matar nada além do tempo'.",
                            "tipo": "teorico"
                        }
                    ]

            },
            {
                "nome": "Ordem Unida",
                "caminho": "4-ordem-unida",
                "materialUrl": "https://youtu.be/nbDdQkGQQ0Q",
                "prova": [
                    {
                        "questao": "Explicar, pelo menos, cinco objetivos da ordem unida.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Definir os seguintes termos:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Formação",
                            "Linha",
                            "Fila/Fileira",
                            "Distância",
                            "Intervalo",
                            "Coluna",
                            "Alinhamento",
                            "Cobertura",
                            "Cerra-fila",
                            "Homem base",
                            "Coluna base",
                            "Testa",
                            "Cauda",
                            "Frente",
                            "Cobrir"
                        ]
                    },
                    {
                        "questao": "Explicar o que é cadência.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Descrever e saber executar corretamente os quatro tipos de passos:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Passo estrada",
                            "Passo ordinário",
                            "Passo acelerado",
                            "Sem cadência"
                        ]
                    },
                    {
                        "questao": "Saber quais são as três etapas da voz de comando.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Explicar detalhadamente a execução dos seguintes comandos:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Descansar",
                            "Frente para direita/esquerda/retaguarda",
                            "Sentido",
                            "Cobrir",
                            "Esquerda/Direita/Meia-volta volver",
                            "Sentado/De pé",
                            "Perfilar",
                            "Última forma"
                        ]
                    },
                    {
                        "questao": "Executar corretamente os movimentos a pé firme:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Atenção",
                            "Sentido",
                            "Cobrir",
                            "Firme",
                            "Direita volver",
                            "Olhar à Direita",
                            "Olhar à Esquerda",
                            "Olhar Frente",
                            "Esquerda volver",
                            "Meia-volta volver",
                            "Sem intervalo cobrir",
                            "Descansar",
                            "Frente para retaguarda",
                            "Frente para esquerda",
                            "Frente para direita",
                            "Fora de forma marche",
                            "À vontade"
                        ]
                    },
                    {
                        "questao": "Executar corretamente os seguintes movimentos em deslocamento (passo ordinário):",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Ordinário marche",
                            "Alto",
                            "Marcar passo",
                            "Em frente",
                            "Conversão à direita",
                            "Conversão à esquerda",
                            "Em direção à direita marche",
                            "Em direção à esquerda marche",
                            "Olhar à direita",
                            "Olhar frente",
                            "Olhar à esquerda",
                            "Direita volver",
                            "Esquerda volver",
                            "Meia-volta volver",
                            "Trocar passo",
                            "5 passos em frente marche"
                        ]
                    },
                    {
                        "questao": "Explicar e demonstrar como usar, exibir e cuidar da bandeira nacional, incluindo como dobrá-la adequadamente.",
                        "tipo": "pratico"
                    }
                ]
            },
            {
                "nome": "Excursionismo Pedestre",
                "caminho": "5-excursionismo-pedestre",
                "materialUrl": "https://youtu.be/uOcmTfTJjpo",
                "prova": [
                    {
                        "questao": "Explicar porque os seguintes pontos são importantes durante uma caminhada:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Passada apropriada",
                            "Velocidade",
                            "Intervalo de descanso",
                            "Regras de comportamento",
                            "Cuidado com a natureza"
                        ]
                    },
                    {
                        "questao": "Explicar porque é importante ter cuidado com os pés, e como a limpeza, unhas cortadas e limpas, meias e calçados influenciam.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Descrever os primeiros socorros que devem ser feitos em um pé com bolhas.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Fazer uma lista do vestiário e calçados apropriados para uma caminhada em diferentes condições climáticas:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Clima quente",
                            "Clima frio",
                            "Tempo chuvoso"
                        ]
                    },
                    {
                        "questao": "Fazer uma lista do material necessário para uma caminhada em uma região silvestre para:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Caminhada de 24 horas",
                            "Caminhada de 12 horas",
                            "Caminhada de 6 horas"
                        ]
                    },
                    {
                        "questao": "Relacionar, pelo menos, cinco regras de segurança durante uma caminhada e citar cuidados especiais nos seguintes locais:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Trilhas",
                            "Rodovias",
                            "Área urbana",
                            "Área rural",
                            "Estrada",
                            "Área desabitada",
                            "Florestas"
                        ]
                    },
                    {
                        "questao": "Explicar a importância de beber água.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Explicar a importância de comer adequadamente durante uma caminhada.",
                        "tipo": "teorico"
                    },
                    {
                        "questao": "Planejar uma caminhada de 16 quilômetros para entregar ao instrutor, incluindo:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Mapa com detalhamento do percurso",
                            "Lista de equipamentos",
                            "Vestimentas",
                            "Quantidade de alimentação e água",
                            "Postos de socorro em caso de emergência (polícia, pronto socorro, etc.)",
                            "Tempo previsto para o percurso e horário de chegada"
                        ]
                    },
                    {
                        "questao": "Realizar as seguintes caminhadas:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "8 quilômetros em área rural ou urbana",
                            "8 quilômetros por trilha em região de mata, floresta ou agreste",
                            "2 caminhadas de 16 quilômetros em percursos e datas diferentes",
                            "24 quilômetros por trilha em região de mata, floresta ou agreste"
                        ]
                    },
                    {
                        "questao": "Apresentar um relatório de cada caminhada, contendo:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Datas",
                            "Mapa topográfico ou rodoviário com detalhamento do percurso",
                            "Tempo de caminhada",
                            "Condições climáticas",
                            "Considerações interessantes",
                            "Pontos interessantes observados",
                            "Foto do grupo (se possível)"
                        ]
                    }
                ]
            },
            {
                "nome": "Mapa e Bússola",
                "caminho": "6-mapa-bussola",
                "prova": [
                    {
                        "questao": "Saber o seguinte sobre mapas:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "O que é um mapa topográfico.",
                            "O que é encontrado em um mapa topográfico.",
                            "Três usos para um mapa topográfico."
                        ]
                    },
                    {
                        "questao": "Identificar, pelo menos, 20 sinais e símbolos encontrados em mapas topográficos, incluindo:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Construções humanas",
                            "Locais com água",
                            "Características da vegetação"
                        ]
                    },
                    {
                        "questao": "Conhecer e explicar os seguintes conceitos relacionados à topografia:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Elevação",
                            "Intervalo entre curvas de nível",
                            "Formas de relevo (vales, cumes, penhasco, montanhas, etc.)"
                        ]
                    },
                    {
                        "questao": "Conhecer e explicar os seguintes conceitos relacionados à distância:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Como as distâncias são definidas",
                            "Como medir a distância linear em um mapa",
                            "Como converter distâncias para o terreno real",
                            "A escala do mapa"
                        ]
                    },
                    {
                        "questao": "Conhecer e explicar os seguintes conceitos relacionados ao sistema de coordenadas:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "O que é um sistema Grid",
                            "O que é grid UTM",
                            "Quantos fusos UTM existem no território sul-americano",
                            "Identificar o fuso da sua localidade",
                            "Como usar um sistema de coordenadas UTM"
                        ]
                    },
                    {
                        "questao": "Identificar e explicar os diferentes nortes encontrados em mapas:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Norte da quadrícula",
                            "Norte verdadeiro",
                            "Norte magnético",
                            "Declinação magnética",
                            "Convergência meridiana"
                        ]
                    },
                    {
                        "questao": "Saber os seguintes conceitos relacionados à bússola:",
                        "tipo": "teorico",
                        "subquestoes": [
                            "Os oito principais pontos cardeais e seus graus correspondentes",
                            "Partes da bússola e seus usos",
                            "Como calcular e seguir um azimute",
                            "Como converter coordenadas geográficas para coordenadas magnéticas"
                        ]
                    },
                    {
                        "questao": "Demonstrar como encontrar direção sem uma bússola usando:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Cruzeiro do Sul",
                            "Relógio com ponteiros",
                            "Constelação de Órion",
                            "Sombra de duas varas"
                        ]
                    },
                    {
                        "questao": "Demonstrar habilidades práticas no uso de mapa e bússola, incluindo:",
                        "tipo": "pratico",
                        "subquestoes": [
                            "Ler coordenadas usando o grid UTM",
                            "Calcular uma coordenada no mapa",
                            "Navegar até uma coordenada geográfica utilizando um azimute magnético",
                            "Completar um percurso com, pelo menos, 10 pontos de controle"
                        ]
                    }
                ]
            }

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
]