var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idMembro, nome, dtNasc, telefone, email, senha as membroId FROM membro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, dtNasc, telefone, email, senha, cep, rua, numero, complemento, bairro, cidade, estado, listaClasses, listaCategorias, listaEspecialidades) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSqlMembro = `
        INSERT INTO membro (nome, dtNasc, telefone, email, senha) VALUES ('${nome}', '${dtNasc}', '${telefone}', '${email}', '${senha}');
    `;

    var instrucaoSqlEndereco = `INSERT INTO endereco (fkMembro, cep, rua, numero, complemento, bairro, cidade, estado) VALUES
        ((select idMembro from membro order by idMembro desc limit 1), '${cep}', '${rua}', '${numero}', '${complemento}', '${bairro}', '${cidade}', '${estado}');`

    var instrucaoSqlClasseMembro = `INSERT INTO classeMembro (fkMembro, fkClasse) VALUES`

    for (var classeAtual = 0; classeAtual < listaClasses.length; classeAtual += 1) {

        instrucaoSqlClasseMembro += `${verificarIntrucaoSql(classeAtual, listaClasses)}`
    }
    console.log(listaClasses)

    var instrucaoSqlEspecialidadeMembro = `INSERT INTO especialidadeMembro (fkMembro,fkEspecialidade) VALUES`

    for (var especialidadeAtual = 0; especialidadeAtual < listaEspecialidades.length; especialidadeAtual += 1) {

        if (especialidadeAtual == listaEspecialidades.length - 1) {
            instrucaoSqlEspecialidadeMembro += `
                ((select idMembro from membro order by idMembro desc limit 1), (select idEspecialidade from especialidade where nome = "${listaEspecialidades[especialidadeAtual]}"));
                `
        } else {
            instrucaoSqlEspecialidadeMembro += `
                ((select idMembro from membro order by idMembro desc limit 1), (select idEspecialidade from especialidade where nome = "${listaEspecialidades[especialidadeAtual]}")),
                `
        }
    }
    console.log(listaEspecialidades)
    console.log("Executando a instrução SQL: \n" + instrucaoSqlMembro);
    database.executar(instrucaoSqlMembro)

    console.log("Executando a instrução SQL: \n" + instrucaoSqlEndereco);
    database.executar(instrucaoSqlEndereco)

    console.log("Executando a instrução SQL: \n" + instrucaoSqlClasseMembro);
    database.executar(instrucaoSqlClasseMembro)

    console.log("Executando a instrução SQL: \n" + instrucaoSqlEspecialidadeMembro);
    return database.executar(instrucaoSqlEspecialidadeMembro)
}

module.exports = {
    autenticar,
    cadastrar
};


function verificarIntrucaoSql(classeAtual, listaClasses) {

    if (classeAtual != listaClasses.length - 1) {
        if (listaClasses[classeAtual] < 10) {
            return `
            ((select idMembro from membro order by idMembro desc limit 1), 1000${listaClasses[classeAtual]}),
            `

        } else {
            return `
            ((select idMembro from membro order by idMembro desc limit 1), 100${listaClasses[classeAtual]}),
            `

        }
    } else if (listaClasses[classeAtual] < 10) {
        return `
            ((select idMembro from membro order by idMembro desc limit 1), 1000${listaClasses[classeAtual]});
            `

    } else {
        return `
            ((select idMembro from membro order by idMembro desc limit 1), 100${listaClasses[classeAtual]});
            `
    }
}