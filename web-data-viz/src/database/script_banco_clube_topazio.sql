drop database topazio;
create database topazio;
use topazio;

create table membro (
idMembro int primary key auto_increment,
nome varchar(45) not null,
dtNasc date not null,
telefone char(13),
email varchar(45) not null,
senha varchar(45)
);

create table endereco (
idEndereco int auto_increment,
fkMembro int, 
constraint fkMembroEndereco foreign key (fkMembro) references membro(idMembro),
primary key (idEndereco, fkMembro),
cep char(9),
rua varchar(45) not null,
numero int not null,
complemento varchar(200),
bairro varchar(45),
cidade varchar(45),
estado char(2)
)auto_increment = 100;

create table classe (
idClasse int primary key auto_increment,
nome varchar(45) not null
)auto_increment = 10000;

insert into classe (nome) values
('Amigo'),
('Amigo da Natureza'),
('Companheiro'),
('Comapanheiro de Excursionismo'),
('Pesquisador'),
('Pesquisador de Campo e Bosque'),
('Pioneiro'),
('Pioneiro de Novas Etradas'),
('Excursionista'),
('Excursionista na Mata'),
('Guia'),
('Guia de Exploração');

select * from classe;
create table classeMembro (
fkMembro int,
fkClasse int,
primary key (fkMembro, fkClasse),
	constraint fkClasseMembro foreign key (fkClasse) references classe(idClasse),
	constraint fkMembroClasse foreign key (fkMembro) references membro(idMembro)
);

create table unidade (
idUnidade int primary key auto_increment,
nome varchar(45) not null,
sexoUnidade varchar(45) not null
)auto_increment = 1000;

create table cargo (
idCargo int primary key auto_increment,
nome varchar(45),
descricao varchar(400)
)auto_increment = 4000;

insert into cargo (nome, descricao) values
('Conselheiro','A função mais importante no Clube de Desbravadores é a do Conselheiro. O Conselheiro está colocado numa posição de grande responsabilidade, pois está em íntimo contato com a mente e o coração juvenil.'),
('Conselheiro Associado','O Conselheiro Associado geralmente é um aprendiz na liderança do Clube (com 16 anos ou mais). Ele deve atuar juntamente com o Conselheiro no desempenho de suas funções e auxiliá-lo no que for necessário'),
('Capitão de Unidade','O Capitão da Unidade é um membro (de 10 a 15 anos) do Clube escolhido pela Unidade para animar o seu grupo a cumprir com sucesso o programa, por meio do próprio exemplo e da influência pessoal, inspirando cada membro a fazer o seu melhor.'),
('Secretário de Unidade','O Secretário da Unidade é o membro escolhido pelos outros membros da Unidade para desempenhar uma variedade de tarefas especiais.'),
('Tesoureiro de Unidade','É o responsável por recolher a mensalidade de todos os membros da Unidade e entregar para o Tesoureiro do Clube, prestando contas e fazendo o devido registro na asta da Unidade.'),
('Capelão de Unidade','Trabalha em profunda sintonia com o Capelão do Clube. Lidera os momentos espirituais da Unidade, incentiva o programa do ano bíblico, trabalhando como um pastor na Unidade.'),
('Diretor','O diretor deve ter, no mínimo, 18 anos de idade, ser uma pessoa madura e membro regular da Igreja Adventista do Sétimo Dia. Ele deve concluir o curso de treinamento básico de diretoria e, de preferência, ser investido em líder'),
('Diretor Associado','Os Diretores Associados são o braço direito e o esquerdo do diretor. Eles são responsáveis pelo cumprimento do programa do Clube e, por isso, são os coordenadores das Classes, Especialidades e Unidades.'),
('Secretário','O Secretário será responsável por todos os registros e relatórios do Clube, além dos que são do encargo do Tesoureiro. Um Secretário eficiente e bem organizado terá um valor incalculável para o programa do Clube de Desbravadores.'),
('Tesoureiro','O Tesoureiro é o responsável geral por todas as finanças do Clube. Deve trabalhar em conjunto como o Tesoureiro da Igreja, de forma a manter todo o caixa do Clube conjunto com o caixa da Igreja.'),
('Intrutor','O Instrutor é um membro da diretoria do Clube que atua diretamente com os Conselheiros e Diretores Associados. Em geral o seu trabalho é ser responsável por uma Classe específica.');

create table cargoMembro (
fkMembro int,
fkCargo int,
primary key (fkMembro, fkCargo),
	constraint fkMembroCargo foreign key (fkMembro) references membro(idMembro),
	constraint fkCargoMembro foreign key (fkCargo) references cargo(idCargo)
);

insert into unidade (nome, sexoUnidade) values
('Ônix', 'Masculina'),
('Ametista', 'Masculina'),
('Jaspe', 'Feminina'),
('Safira', 'Feminina');

create table unidadeMembro (
fkMembro int,
fkUnidade int,
primary key (fkMembro, fkUnidade),
conselheiro int,
conselheiroAssociado int,
	constraint fkMembroUnidade foreign key (fkMembro) references membro(idMembro),
	constraint fkUnidadeMembro foreign key (fkUnidade) references unidade(idUnidade)
);

create table especialidade (
idEspecialidade int primary key auto_increment,
nome varchar(45),
Categoria varchar(45)
);

insert into especialidade (nome, categoria) values
('Arte de Acampar','Atividades Recreativas'),
('Cultura Física','Atividades Recreativas'),
('Natação Principiante I','Atividades Recreativas'),
('Acampamento I','Atividades Recreativas'),
('Ordem Unida','Atividades Recreativas'),
('Excursionismo Pedestre','Atividades Recreativas'),
('Mapa e Bússola','Atividades Recreativas'),
('E.V.A','Artes e Habilidades Manuais'),
('Trabalhos com Agulha','Artes e Habilidades Manuais'),
('Cultura Indígena','Artes e Habilidades Manuais'),
('Modelagem e Fabricação de Sabão','Artes e Habilidades Manuais'),
('Modelagem em Gesso','Artes e Habilidades Manuais'),
('Origami','Artes e Habilidades Manuais'),
('Corrida de Carrinhos de Madeira','Artes e Habilidades Manuais');

create table especialidadeMembro (
fkMembro int,
fkEspecialidade int,
primary key (fkMembro, fkEspecialidade),
fkInstrutor int,
dtRealizacao date,
	constraint fkMembroEspecialidade foreign key (fkMembro) references membro(idMembro),
	constraint fkEspecialidadeMembro foreign key (fkEspecialidade) references especialidade(idEspecialidade)
);

create table dt
(dtdt date);

insert into dt values
('2010-02-02');
select count(idEspecialidade) as qtdEspecialidades from membro 
	join EspecialidadeMembro as espMembro
		on membro.idMembro = espMembro.fkMembro
    join especialidade as esp
		on esp.idEspecialidade = fkEspecialidade 
	where idMembro = 1 and month(dtRealizacao) = 12 group by dtRealizacao;
    
    
    insert into especialidadeMembro values
    (2,11,null,'2024-12-12');

create table evento (
idEvento int primary key auto_increment,
nome varchar(45) not null,
descricao varchar(100) not null,
dtInicio date not null,
dtFim date
)auto_increment = 3000;

create table eventoMembro (
fkMembro int,
fkEvento int,
primary key (fkMembro, fkEvento),
	constraint fkMembroEvento foreign key (fkMembro) references membro(idMembro),
	constraint fkEventoMembro foreign key (fkEvento) references evento(idEvento),
statusParticipacao varchar(25),
dtConfirmacao date
);

