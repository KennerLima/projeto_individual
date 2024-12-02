var database = require("../database/config");



function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha) 
    
    var instrucaoSqlMembro = `
        SELECT idMembro, nome, dtNasc, telefone, email, senha FROM membro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSqlMembro);
    return database.executar(instrucaoSqlMembro);

}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
async function cadastrar(nome, dtNasc, telefone, email, senha, cep, rua, numero, complemento, bairro, cidade, estado, listaClasses, listaEspecialidades, unidade, cargo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    try {

        var instrucaoSqlMembro = `
        INSERT INTO membro (nome, dtNasc, telefone, email, senha) VALUES ('${nome}', '${dtNasc}', '${telefone}', '${email}', '${senha}');
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSqlMembro);
        await database.executar(instrucaoSqlMembro)

        var instrucaoSqlEndereco = `INSERT INTO endereco (fkMembro, cep, rua, numero, complemento, bairro, cidade, estado) VALUES 
        ((select idMembro from membro order by idMembro desc limit 1), '${cep}', '${rua}', '${numero}', '${complemento}', '${bairro}', '${cidade}', '${estado}');`

        console.log("Executando a instrução SQL: \n" + instrucaoSqlEndereco);
        await database.executar(instrucaoSqlEndereco);


        var instrucaoSqlCargoMembro = `
            INSERT INTO cargoMembro (fkMembro, fkCargo) VALUES
            ((select idMembro from membro order by idMembro desc limit 1), (select idCargo from cargo where nome = '${cargo}'));`

        console.log("Executando a instrução SQL: \n" + instrucaoSqlCargoMembro);
        await database.executar(instrucaoSqlCargoMembro);

        var instrucaoSqlClasseMembro = `INSERT INTO classeMembro (fkMembro, fkClasse) VALUES`

        for (var classeAtual = 0; classeAtual < listaClasses.length; classeAtual += 1) {

            if (classeAtual != listaClasses.length - 1) {
                if (listaClasses[classeAtual] < 10) {
                    instrucaoSqlClasseMembro += `
            ((select idMembro from membro order by idMembro desc limit 1), 1000${listaClasses[classeAtual]}),
            `
                } else {
                    instrucaoSqlClasseMembro += `
            ((select idMembro from membro order by idMembro desc limit 1), 100${listaClasses[classeAtual]}),
            `
                }
            } else if (listaClasses[classeAtual] < 10) {
                instrucaoSqlClasseMembro += `
            ((select idMembro from membro order by idMembro desc limit 1), 1000${listaClasses[classeAtual]});
            `
            } else {
                instrucaoSqlClasseMembro += `
            ((select idMembro from membro order by idMembro desc limit 1), 100${listaClasses[classeAtual]});
            `
            }
        }

        console.log("Executando a instrução SQL: \n" + instrucaoSqlClasseMembro);
        await database.executar(instrucaoSqlClasseMembro);


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
        await database.executar(instrucaoSqlEspecialidadeMembro);

        console.log("Executando a instrução SQL: \n" + instrucaoSqlEspecialidadeMembro);

        var instrucaoSqlUnidadeMembro = `
    INSERT INTO unidadeMembro (fkMembro, fkUnidade, conselheiro, conselheiroAssociado) VALUES
    (   (select idMembro from membro order by idMembro desc limit 1), 
        (select idUnidade from unidade where nome = '${unidade}'),
        (select idMembro 
            from membro as membro
            join unidadeMembro as UMembro
                on UMembro.fkMembro = membro.Idmembro
            join unidade as unidade
                on UMembro.fkUnidade = unidade.idUnidade
            join cargoMembro as CMembro
                on CMembro.fkMembro = membro.idMembro
            join cargo as cargo
                on CMembro.fkCargo = cargo.idCargo
            where unidade.nome = '${unidade}' 
                and
            cargo.nome = 'Conselheiro'),
        (select idMembro 
            from membro as membro
            join unidadeMembro as UMembro
                on UMembro.fkMembro = membro.Idmembro
            join unidade as unidade
                on UMembro.fkUnidade = unidade.idUnidade
            join cargoMembro as CMembro
                on CMembro.fkMembro = membro.idMembro
            join cargo as cargo
                on CMembro.fkCargo = cargo.idCargo
            where unidade.nome = '${unidade}'
                and
            cargo.nome = 'Conselheiro Associado')
                );`

        return await database.executar(instrucaoSqlUnidadeMembro);
    } catch {
        return "Deu ruim"
    }
}

function buscarEndereco(idMembro) {
    var instrucaoSqlEndereco = `
        select concat(rua, ', ', numero, ', ', complemento, '-', bairro, '. CEP: ', cep, '. ', cidade, '/', estado) as endereco from endereco
        join membro
            on idMembro = fkMembro
        where idMembro = ${idMembro};`

    return database.executar(instrucaoSqlEndereco)
}

function buscarClasses(idMembro) {
    var instrucaoSqlClasse = `
    select classe.nome as nome from classe 
        join classeMembro as CMembro
            on classe.idClasse = CMembro.fkClasse
        join membro
            on membro.idMembro = CMembro.fkMembro
        where membro.IdMembro = '${idMembro}'`

        return database.executar(instrucaoSqlClasse)
}

function buscarEspecialidades(idMembro) {
    var instrucaoSqlEspecialidades = `
    select esp.nome as especialidade
    from especialidade as esp
    join especialidadeMembro as espMem
        on esp.idEspecialidade = espMem.fkEspecialidade
    join membro
        on membro.idMembro = espMem.fkMembro
    where idMembro = ${idMembro}`

    return database.executar(instrucaoSqlEspecialidades)
}

module.exports = {
    autenticar,
    cadastrar,
    buscarEndereco,
    buscarClasses,
    buscarEspecialidades
};
