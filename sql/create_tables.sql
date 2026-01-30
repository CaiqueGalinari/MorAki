CREATE TABLE usuario
(
id_usuario SERIAL PRIMARY KEY,
descricao TEXT,
nome VARCHAR(200) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE, 
senha VARCHAR(20) NOT NULL,
security_key CHAR(8) NOT NULL
);

CREATE TABLE foto_usuario
(
id_fotou SERIAL PRIMARY KEY,
caminho TEXT NOT NULL,
ordem INT NOT NULL,
id_usuario INT UNIQUE, 

FOREIGN KEY(id_usuario) 
	REFERENCES usuario(id_usuario) 
	ON DELETE CASCADE
);

CREATE TABLE moradia 
(
id_moradia SERIAL PRIMARY KEY,
endereco VARCHAR(255) NOT NULL,
tot_inquilino INT NOT NULL DEFAULT 0,
max_inquilino INT NOT NULL,
tipo VARCHAR(20) NOT NULL,
nome_dono VARCHAR(50) NOT NULL,
telefone_dono CHAR(11) NOT NULL,
tempo_aluguel INT NOT NULL,
valor NUMERIC(10, 2) NOT NULL,
descricao TEXT,
id_quem_cadastrou INT NOT NULL, 

CHECK (tot_inquilino >= 0),
CHECK (max_inquilino > 0),
CHECK (tot_inquilino <= max_inquilino),
CHECK (tipo IN ('Casa', 'Apartamento', 'Kitnet', 'Quarto', 'Republica', 'Outros')), -- Lista fechada

FOREIGN KEY(id_quem_cadastrou) 
    REFERENCES usuario(id_usuario) 
    ON DELETE CASCADE
);

CREATE TABLE foto_moradia
(
id_fotom SERIAL PRIMARY KEY,
caminho TEXT NOT NULL,
ordem INT NOT NULL,
id_moradia INT NOT NULL, 

FOREIGN KEY(id_moradia)
	REFERENCES moradia(id_moradia)
	ON DELETE CASCADE
);

CREATE TABLE comentario_uu
(
data_comentario DATE NOT NULL,
conteudo TEXT,
nota INT NOT NULL,
idu_comentou INT NOT NULL,
idu_comentado INT NOT NULL,

PRIMARY KEY (idu_comentou, idu_comentado, data_comentario),

CHECK (nota BETWEEN 0 AND 10),

FOREIGN KEY(idu_comentou)
	REFERENCES usuario(id_usuario)
	ON DELETE CASCADE,

FOREIGN KEY(idu_comentado)
	REFERENCES usuario(id_usuario)
	ON DELETE CASCADE
);

CREATE TABLE comentario_um
(
data_comentario DATE NOT NULL,
conteudo TEXT,
nota INT NOT NULL,
id_moradia INT NOT NULL,
id_usuario INT NOT NULL,

PRIMARY KEY (id_moradia, id_usuario, data_comentario),

CHECK (nota BETWEEN 0 AND 10),

FOREIGN KEY(id_moradia)
	REFERENCES moradia(id_moradia)
	ON DELETE CASCADE,

FOREIGN KEY(id_usuario)
	REFERENCES usuario(id_usuario)
	ON DELETE CASCADE
);

CREATE TABLE favoritos
(
id_moradia INT NOT NULL,
id_usuario INT NOT NULL,

PRIMARY KEY (id_moradia, id_usuario),

FOREIGN KEY(id_moradia)
	REFERENCES moradia(id_moradia)
	ON DELETE CASCADE,

FOREIGN KEY(id_usuario)
	REFERENCES usuario(id_usuario)
	ON DELETE CASCADE
);

CREATE TABLE aluguel
(
data_aluguel DATE NOT NULL,
id_moradia INT NOT NULL,
id_usuario INT NOT NULL,

PRIMARY KEY (id_moradia, id_usuario, data_aluguel),

FOREIGN KEY(id_moradia)
	REFERENCES moradia(id_moradia)
	ON DELETE CASCADE,

FOREIGN KEY(id_usuario)
	REFERENCES usuario(id_usuario)
	ON DELETE CASCADE
);