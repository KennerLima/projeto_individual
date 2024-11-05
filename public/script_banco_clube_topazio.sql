create database topazio;
use topazio;

create table classe (
idClasse int primary key auto_increment,
nome varchar(45) not null,
idadeMin int,
tempoMaxRealizacao int
)auto_increment = 10000;

insert into classe (nome,idadeMix,tempoMaxRealizacao) values
('Amigo',10,1.5),
('Amigo da Natureza',10,1.5),
('Companheiro',11,1.5),
('Comapanheiro de Excursionismo',11,1.5),
('Pesquisador',12,1.5),
('Pesquisador de Campo e Bosque',12,1.5),
('Pioneiro',13,1.5),
('Pioneiro de Novas EStradas',13,1.5),
('Excursionista',14,1.5),
('Excursionista na Mata',14,1.5),
('Guia',15,1.5),
('Guia de Exploração',15,1.5),
('Agrupadas',16,2);

create table membro (
idMembro int primary key auto_increment,
nome varchar(45) not null,
cpf char(11) not null,
dtNasc date not null,
fkClasse int,
	constraint fkClasseMembro foreign key (fkClasse) references classe(idClasse)
);

create table endereco (
idEndereco int auto_increment,
fkMembro int,
constraint fkMembroEndereco foreign key (fkMembro) references membro(idMembro),
primary key (idEndereço, fkMembro),
tipo varchar(20) not null,
nome varchar(45) not null,
numero int not null,
complemento varchar(45),
bairro varchar(45),
cidade varchar(45),
uf char(2),
cep char(8)
)auto_increment = 100;

create table unidade (
idUnidade int primary key auto_increment,
nome varchar(45) not null,
sexoUnidade varchar(45) not null,
idadeMIn int not null,
idadeMax int
)auto_increment = 1000;

insert into unidade (nome, sexoUnidade, idadeMIn, idadeMax) values
('ônix', 'Masculino', 10, 12),
('Ametista', 'Masculino', 13, 15),
('Jaspe', 'Feminina', 10, 12),
('Safira', 'Feminina', 13, 15);

create table unidadeMembro (
fkMembro int,
	constraint fkMembroUnidade foreign key (fkMembro) references membro(idMembro),
fkUnidade int,
	constraint fkUnidadeMembro foreign key (fkUnidade) references unidade(idUnidade),
primary key (fkMembro, fkUnidade),
conselheiro int,
conselheiroAssociado int,
dtEntrada date,
dtSaida date
);
create table especialidade (
idEspecialidade int primary key auto_increment,
nome varchar(45),
categoria varchar(45)
)auto_increment = 2000;

create table especialidadeMembro (
fkMembro int,
	constraint fkMembroEspecialidade foreign key (fkMembro) references membro(idMembro),
fkEspecialidade int,
	constraint fkEspecialidadeMembro foreign key (fkEspecialidade) references especialidade(idEspecialidade),
primary key (fkMembro, fkEspecialidade),
dtConclusao date,
instrutor int
);

create table evento (
idEvento int primary key auto_increment,
nome varchar(45) not null,
descricao varchar(100) not null,
dtInicio date not null,
dtFim date
)auto_increment = 3000;

create table eventoMembro (
fkMembro int,
	constraint fkMembroEvento foreign key (fkMembro) references membro(idMembro),
fkEvento int,
	constraint fkEventoMembro foreign key (fkEvento) references evento(idEvento),
primary key (fkMembro, fkEvento),
statusParticipacao varchar(25),
dtConfirmacao date
);

create table cargo (
idCargo int primary key auto_increment,
nome varchar(45),
descricao varchar(200)
)auto_increment = 4000;

insert into cargo (nome, descricao) values
('Conselheiro','A função mais importante no Clube de Desbravadores é a do Conselheiro. O Conselheiro está colocado numa posição de grande responsabilidade, pois está em íntimo contato com a mente e o coração juvenil.'),
('Conselheiro Associado','O Conselheiro Associado geralmente é um aprendiz na liderança do Clube (com 16 anos ou mais). Ele deve atuar juntamente com o Conselheiro no desempenho de suas funções e auxiliá-lo no que for necessário'),
('Capitão de Unidade','O Capitão da Unidade é um membro (de 10 a 15 anos) do Clube escolhido pela Unidade para animar o seu grupo a cumprir com sucesso o programa, por meio do próprio exemplo e da influência pessoal, inspirando cada membro a fazer o seu melhor.'),
('Secretário de Unidade','O Secretário da Unidade é o membro escolhido pelos outros membros da Unidade para desempenhar uma variedade de tarefas especiais.'),
('Tesoureiro de Unidade','É o responsável por recolher a mensalidade de todos os membros da Unidade e entregar para o Tesoureiro do Clube, prestando contas e fazendo o devido registro na asta da Unidade.'),
('Capelão de unidade','Trabalha em profunda sintonia com o Capelão do Clube. Lidera os momentos espirituais da Unidade, incentiva o programa do ano bíblico, trabalhando como um pastor na Unidade.'),
('Diretor','O diretor deve ter, no mínimo, 18 anos de idade, ser uma pessoa madura e membro regular da Igreja Adventista do Sétimo Dia. Ele deve concluir o curso de treinamento básico de diretoria e, de preferência, ser investido em líder'),
('Diretor Associado','Os Diretores Associados são o braço direito e o esquerdo do diretor. Eles são responsáveis pelo cumprimento do programa do Clube e, por isso, são os coordenadores das Classes, Especialidades e Unidades.'),
('Secretário','O Secretário será responsável por todos os registros e relatórios do Clube, além dos que são do encargo do Tesoureiro. Um Secretário eficiente e bem organizado terá um valor incalculável para o programa do Clube de Desbravadores.'),
('Tesoureiro','O Tesoureiro é o responsável geral por todas as finanças do Clube. Deve trabalhar em conjunto como o Tesoureiro da Igreja, de forma a manter todo o caixa do Clube conjunto com o caixa da Igreja.'),
('Intrutor','O Instrutor é um membro da diretoria do Clube que atua diretamente com os Conselheiros e Diretores Associados. Em geral o seu trabalho é ser responsável por uma Classe específica.');

create table cargoMembro (
fkMembro int,
	constraint fkMembroCargo foreign key (fkMembro) references membro(idMembro),
fkCargo int,
	constraint fkCargoMembro foreign key (fkCargo) references cargo(idCargo),
primary key (fkMembro , fkCargo),
dtEntrada date,
dtSaida date
);
