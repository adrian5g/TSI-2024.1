create schema sistaerobd;

use sistaerobd;

create table Companhias(
cnpj varchar(18) not null,
nome varchar(300) not null,
contato varchar(300),
primary key (cnpj)
);

create table Aeroportos(
idAeroporto int not null auto_increment,
nome varchar(300) not null,
endereco varchar(300),
primary key (idAeroporto)
);