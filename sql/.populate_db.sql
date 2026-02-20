-- POVOANDO USUÁRIOS
INSERT INTO usuario (id_usuario, descricao, nome, email, senha, security_key) VALUES
(1, 'Estudante de Eng. Computação. Silencioso.', 'Lucas Silva', 'lucas@email.com', 'senha123', 'SECKEY01'),
(2, 'Procuro lugar perto da UFOP.', 'Ana Paula', 'ana@email.com', 'senha123', 'SECKEY02'),
(3, 'Dono de várias repúblicas.', 'Marcos Roberto', 'marcos@email.com', 'senha123', 'SECKEY03'),
(4, 'Gosto de cozinhar e procuro kitnet.', 'Juliana Costa', 'juliana@email.com', 'senha123', 'SECKEY04'),
(5, 'Trabalho home office, preciso de silêncio.', 'Pedro Henrique', 'pedro@email.com', 'senha123', 'SECKEY05'),
(6, 'Estudante de Sistemas de Informação.', 'Mariana Souza', 'mariana@email.com', 'senha123', 'SECKEY06'),
(7, 'Proprietária de apartamentos no centro.', 'Cláudia Gomes', 'claudia@email.com', 'senha123', 'SECKEY07'),
(8, 'Gosto de festas e procuro república.', 'Rafael Alves', 'rafael@email.com', 'senha123', 'SECKEY08'),
(9, 'Faço mestrado, passo o dia na faculdade.', 'Fernanda Lima', 'fernanda@email.com', 'senha123', 'SECKEY09'),
(10, 'Divido despesas, mas gosto de quarto individual.', 'Diego Martins', 'diego@email.com', 'senha123', 'SECKEY10'),
(11, 'Professor universitário, busco lugar calmo.', 'Roberto Dias', 'roberto@email.com', 'senha123', 'SECKEY11'),
(12, 'Dono de imóveis na região do Baú.', 'Sérgio Nogueira', 'sergio@email.com', 'senha123', 'SECKEY12'),
(13, 'Estudante recém-chegada do interior.', 'Camila Rocha', 'camila@email.com', 'senha123', 'SECKEY13'),
(14, 'Busco casa com garagem.', 'Thiago Mendes', 'thiago@email.com', 'senha123', 'SECKEY14'),
(15, 'Aceito dividir apartamento.', 'Beatriz Nunes', 'beatriz@email.com', 'senha123', 'SECKEY15'),
(16, 'Proprietário de quartos para estudantes.', 'Luiz Fernando', 'luiz@email.com', 'senha123', 'SECKEY16'),
(17, 'Preciso de internet boa para jogos.', 'Felipe Castro', 'felipe@email.com', 'senha123', 'SECKEY17'),
(18, 'Procuro ambiente tranquilo e sem bagunça.', 'Larissa Freitas', 'larissa@email.com', 'senha123', 'SECKEY18'),
(19, 'Estudo à noite e trabalho de dia.', 'Gustavo Moreira', 'gustavo@email.com', 'senha123', 'SECKEY19'),
(20, 'Dona de kitnets perto do comércio.', 'Teresa Ribeiro', 'teresa@email.com', 'senha123', 'SECKEY20');

-- POVOANDO FOTOS DE USUÁRIOS
INSERT INTO foto_usuario (caminho, ordem, id_usuario) VALUES
('Imagens/MorAki/user01.jpg', 1, 1),
('Imagens/MorAki/user02.jpg', 1, 2),
('Imagens/MorAki/user03.jpg', 1, 3),
('Imagens/MorAki/user04.jpg', 1, 4),
('Imagens/MorAki/user05.jpg', 1, 5),
('Imagens/MorAki/user06.jpg', 1, 6),
('Imagens/MorAki/user07.jpg', 1, 7),
('Imagens/MorAki/user08.jpg', 1, 8),
('Imagens/MorAki/user09.jpg', 1, 9),
('Imagens/MorAki/user10.jpg', 1, 10),
('Imagens/MorAki/user11.jpg', 1, 11),
('Imagens/MorAki/user12.jpg', 1, 12),
('Imagens/MorAki/user13.jpg', 1, 13),
('Imagens/MorAki/user14.jpg', 1, 14),
('Imagens/MorAki/user15.jpg', 1, 15),
('Imagens/MorAki/user16.jpg', 1, 16),
('Imagens/MorAki/user17.jpg', 1, 17),
('Imagens/MorAki/user18.jpg', 1, 18),
('Imagens/MorAki/user19.jpg', 1, 19),
('Imagens/MorAki/user20.jpg', 1, 20);


-- POVOANDO MORADIAS
INSERT INTO moradia (id_moradia, endereco, tot_inquilino, max_inquilino, tipo, nome_dono, telefone_dono, tempo_aluguel, valor, descricao, id_quem_cadastrou) VALUES
(1, 'Rua das Flores, 120, Apto 2, Centro, João Monlevade, Minas Gerais', 1, 2, 'Apartamento', 'Cláudia Gomes', '31988880001', 12, 900.00, 'Apto bem arejado, internet inclusa.', 7),
(2, 'Av. Getúlio Vargas, 1050, Casa, Carneirinhos, João Monlevade, Minas Gerais', 3, 5, 'Republica', 'Marcos Roberto', '31988880002', 6, 450.00, 'República grande, ambiente animado.', 3),
(3, 'Rua B, 45, Fundos, Vila Tanque, João Monlevade, Minas Gerais', 0, 1, 'Kitnet', 'Teresa Ribeiro', '31988880003', 12, 600.00, 'Kitnet individual mobiliada.', 20),
(4, 'Rua C, 99, Quarto 1, Baú, João Monlevade, Minas Gerais', 1, 1, 'Quarto', 'Sérgio Nogueira', '31988880004', 6, 350.00, 'Quarto com cama e guarda-roupa.', 12),
(5, 'Rua D, 200, Casa, Cruzeiro Celeste, João Monlevade, Minas Gerais', 2, 4, 'Casa', 'Marcos Roberto', '31988880005', 12, 1200.00, 'Casa com garagem para 2 carros.', 3),
(6, 'Rua E, 33, Apto 101, Rosário, João Monlevade, Minas Gerais', 0, 3, 'Apartamento', 'Cláudia Gomes', '31988880006', 12, 1100.00, 'Perto de supermercado e ponto de ônibus.', 7),
(7, 'Av. Castelo Branco, 500, Kit 3, República, João Monlevade, Minas Gerais', 1, 1, 'Kitnet', 'Teresa Ribeiro', '31988880007', 6, 550.00, 'Kitnet reformada recentemente.', 20),
(8, 'Rua F, 12, Casa, Laranjeiras, João Monlevade, Minas Gerais', 4, 8, 'Republica', 'Marcos Roberto', '31988880008', 6, 400.00, 'Vaga em república mista.', 3),
(9, 'Rua G, 78, Quarto 2, Loanda, João Monlevade, Minas Gerais', 0, 1, 'Quarto', 'Luiz Fernando', '31988880009', 12, 300.00, 'Quarto em ambiente familiar.', 16),
(10, 'Rua H, 90, Casa, Areia Preta, João Monlevade, Minas Gerais', 0, 2, 'Outros', 'Sérgio Nogueira', '31988880010', 12, 850.00, 'Barracão independente nos fundos.', 12),
(11, 'Av. Alberto Lima, 410, Apto 3, Sion, João Monlevade, Minas Gerais', 2, 4, 'Apartamento', 'Cláudia Gomes', '31988880011', 12, 1300.00, 'Apartamento de luxo com portaria.', 7),
(12, 'Rua I, 55, Kit 1, Vale do Sol, João Monlevade, Minas Gerais', 1, 2, 'Kitnet', 'Teresa Ribeiro', '31988880012', 6, 650.00, 'Kitnet grande, aceita casais.', 20),
(13, 'Rua J, 10, Casa, Promorar, João Monlevade, Minas Gerais', 0, 3, 'Casa', 'Sérgio Nogueira', '31988880013', 12, 950.00, 'Casa com quintal grande, aceita pets.', 12),
(14, 'Rua K, 77, Quarto 3, Novo Horizonte, João Monlevade, Minas Gerais', 1, 1, 'Quarto', 'Luiz Fernando', '31988880014', 6, 320.00, 'Quarto bem iluminado.', 16),
(15, 'Av. Wilson Alvarenga, 222, Apto 5, Carneirinhos, João Monlevade, Minas Gerais', 1, 2, 'Apartamento', 'Cláudia Gomes', '31988880015', 12, 1050.00, 'No centro comercial da cidade.', 7),
(16, 'Rua L, 88, Casa, Belmonte, João Monlevade, Minas Gerais', 6, 10, 'Republica', 'Marcos Roberto', '31988880016', 6, 380.00, 'República tradicional, vagas abertas.', 3),
(17, 'Rua M, 44, Kit 2, Santo Hipólito, João Monlevade, Minas Gerais', 0, 1, 'Kitnet', 'Teresa Ribeiro', '31988880017', 12, 580.00, 'Kitnet com área de serviço isolada.', 20),
(18, 'Rua N, 19, Casa, Teresópolis, João Monlevade, Minas Gerais', 0, 4, 'Casa', 'Sérgio Nogueira', '31988880018', 12, 1400.00, 'Casa recém construída.', 12),
(19, 'Rua O, 60, Quarto 4, Alvorada, João Monlevade, Minas Gerais', 1, 1, 'Quarto', 'Luiz Fernando', '31988880019', 6, 300.00, 'Incluso água e luz no valor.', 16),
(20, 'Rua P, 100, Loft, Centro, João Monlevade, Minas Gerais', 0, 2, 'Outros', 'Cláudia Gomes', '31988880020', 12, 1500.00, 'Loft moderno e mobiliado.', 7);

-- POVOANDO FOTOS DE MORADIAS
INSERT INTO foto_moradia (caminho, ordem, id_moradia) VALUES
('Imagens/MorAki/moradia01.jpg', 1, 1),
('Imagens/MorAki/moradia02.jpg', 1, 2),
('Imagens/MorAki/moradia03.jpg', 1, 3),
('Imagens/MorAki/moradia04.jpg', 1, 4),
('Imagens/MorAki/moradia05.jpg', 1, 5),
('Imagens/MorAki/moradia06.jpg', 1, 6),
('Imagens/MorAki/moradia07.jpg', 1, 7),
('Imagens/MorAki/moradia08.jpg', 1, 8),
('Imagens/MorAki/moradia09.jpg', 1, 9),
('Imagens/MorAki/moradia10.jpg', 1, 10),
('Imagens/MorAki/moradia11.jpg', 1, 11),
('Imagens/MorAki/moradia12.jpg', 1, 12),
('Imagens/MorAki/moradia13.jpg', 1, 13),
('Imagens/MorAki/moradia14.jpg', 1, 14),
('Imagens/MorAki/moradia15.jpg', 1, 15),
('Imagens/MorAki/moradia16.jpg', 1, 16),
('Imagens/MorAki/moradia17.jpg', 1, 17),
('Imagens/MorAki/moradia18.jpg', 1, 18),
('Imagens/MorAki/moradia19.jpg', 1, 19),
('Imagens/MorAki/moradia20.jpg', 1, 20);

-- POVOANDO ALUGUÉIS
INSERT INTO aluguel (data_aluguel, id_moradia, id_usuario) VALUES
('2025-01-10', 1, 1),
('2025-01-15', 2, 2),
('2025-02-01', 3, 4),
('2025-02-10', 4, 5),
('2025-03-05', 5, 6),
('2025-03-20', 6, 8),
('2025-04-12', 7, 9),
('2025-04-25', 8, 10),
('2025-05-02', 9, 11),
('2025-05-18', 10, 13),
('2025-06-08', 11, 14),
('2025-06-22', 12, 15),
('2025-07-03', 13, 17),
('2025-07-15', 14, 18),
('2025-08-01', 15, 19),
('2025-08-10', 16, 1),
('2025-09-05', 17, 2),
('2025-09-18', 18, 4),
('2025-10-12', 19, 5),
('2025-10-25', 20, 6);


-- POVOANDO FAVORITOS
INSERT INTO favoritos (id_moradia, id_usuario) VALUES
(1, 2), (2, 4), (3, 5), (4, 6), (5, 8),
(6, 9), (7, 10), (8, 11), (9, 13), (10, 14),
(11, 15), (12, 17), (13, 18), (14, 19), (15, 1),
(16, 2), (17, 4), (18, 5), (19, 6), (20, 8);


-- POVOANDO AVALIAÇÕES U - M
INSERT INTO comentario_um (data_comentario, conteudo, nota, id_moradia, id_usuario) VALUES
('2025-02-10', 'Ótimo apartamento, muito espaçoso.', 9, 1, 1),
('2025-02-15', 'República legal, mas muito barulhenta.', 6, 2, 2),
('2025-03-01', 'Kitnet atendeu todas as minhas necessidades.', 10, 3, 4),
('2025-03-10', 'Quarto um pouco escuro.', 5, 4, 5),
('2025-04-05', 'Casa excelente, vizinhança tranquila.', 9, 5, 6),
('2025-04-20', 'Bem localizado, recomendo.', 8, 6, 8),
('2025-05-12', 'Pequeno, mas aconchegante.', 7, 7, 9),
('2025-05-25', 'Pessoal da república é gente boa.', 9, 8, 10),
('2025-06-02', 'Lugar muito calmo, perfeito pra estudar.', 10, 9, 11),
('2025-06-18', 'Barracão precisa de uma pintura.', 5, 10, 13),
('2025-07-08', 'Condomínio muito seguro.', 10, 11, 14),
('2025-07-22', 'Kitnet espaçosa.', 8, 12, 15),
('2025-08-03', 'Adorei o quintal.', 9, 13, 17),
('2025-08-15', 'O dono é super atencioso.', 10, 14, 18),
('2025-09-01', 'Fica perto de tudo.', 9, 15, 19),
('2025-09-10', 'Internet da república cai as vezes.', 6, 16, 1),
('2025-10-05', 'Preço justo.', 8, 17, 2),
('2025-10-18', 'Casa nova e impecável.', 10, 18, 4),
('2025-11-12', 'Bom custo benefício.', 7, 19, 5),
('2025-11-25', 'Loft incrível, me senti rico morando lá.', 10, 20, 6);


-- POVOANDO AVALIAÇÕES U - U
INSERT INTO comentario_uu (data_comentario, conteudo, nota, idu_comentou, idu_comentado) VALUES
('2025-02-12', 'Inquilino exemplar, pagou adiantado.', 10, 7, 1),
('2025-02-18', 'Menina super organizada.', 9, 3, 2),
('2025-03-05', 'Entregou a kitnet bem limpa.', 10, 20, 4),
('2025-03-15', 'Não conversava muito, mas era bom inquilino.', 8, 12, 5),
('2025-04-10', 'Ótima vizinha.', 9, 3, 6),
('2025-04-25', 'Dono muito prestativo, arrumou o chuveiro.', 10, 8, 7),
('2025-05-15', 'Atrasou o aluguel uma vez, mas avisou.', 7, 20, 9),
('2025-05-28', 'Rapaz tranquilo e responsável.', 9, 3, 10),
('2025-06-05', 'Professor excelente, nunca deu problema.', 10, 16, 11),
('2025-06-20', 'Sempre acessível para tirar dúvidas.', 9, 13, 12),
('2025-07-10', 'Gostei de alugar para ele.', 8, 7, 14),
('2025-07-25', 'Muito educada.', 10, 20, 15),
('2025-08-05', 'Gostei da estadia.', 8, 17, 12),
('2025-08-20', 'Proprietário nota 10.', 10, 18, 16),
('2025-09-05', 'Sempre deixou a área comum limpa.', 9, 7, 19),
('2025-09-15', 'Muito gente fina.', 10, 1, 3),
('2025-10-10', 'Cuidou bem da kitnet.', 9, 20, 2),
('2025-10-20', 'Recomendo a todos.', 10, 12, 4),
('2025-11-15', 'Foi uma boa experiência alugar quarto dele.', 8, 5, 16),
('2025-11-28', 'Inquilino silencioso e focado.', 9, 7, 6);

-- AJUSTE DE CEREAIS
SELECT setval('usuario_id_usuario_seq', (SELECT MAX(id_usuario) FROM usuario));
SELECT setval('moradia_id_moradia_seq', (SELECT MAX(id_moradia) FROM moradia));
SELECT setval('foto_usuario_id_fotou_seq', (SELECT MAX(id_fotou) FROM foto_usuario));
SELECT setval('foto_moradia_id_fotom_seq', (SELECT MAX(id_fotom) FROM foto_moradia));