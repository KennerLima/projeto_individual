insert into membro (nome, dtNasc,telefone,email,senha) values 
('kenner','1999-01-01',11987654321,'kenner@gmail','k1');

insert into especialidadeMembro (fkMembro, fkCategoria, fkEspecialidade) values
((select idMembro from membro order by idMembro desc limit 1)
,500,6);

select distinct esp.nome from especialidadeMembro as espM
	join membro
    on espM.fkMembro = membro.idMembro
	join especialidade as esp
    on espM.fkEspecialidade = esp.idEspecialidade
    join categoriaEspecialidade as cat
    on espM.fkCategoria = esp.fkCategoria
    where membro.idMembro = 1;

select * from especialidadeMembro;
select idMembro from membro order by idMembro desc limit 1;
select idEspecialidade, especialidade.nome from especialidade
	join categoriaEspecialidade as categoria
    on especialidade.fkCategoria = categoria.idCategoria
    where idEspecialidade = 0 and idCategoria = 501;
    
