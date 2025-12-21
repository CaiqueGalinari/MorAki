-- Aqui estão as queries que vocês vão precisar para a História 2

-- 1. Query para o LOGIN (para usar no servlet)
-- Para verificar se existe usuário e retornar o ID e Nome para a Sessão
SELECT id_usuario, nome, email 
FROM usuario 
WHERE email = ? AND senha = ?;


-- 2. Query para CARREGAR PERFIL
-- Para preencher os inputs do Frontend com os dados atuais
SELECT nome, descricao, email, senha, security_key
FROM usuario 
WHERE id_usuario = ?;