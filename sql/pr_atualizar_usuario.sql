-- 1. Cria a Procedure que a Letícia vai chamar no Java
CREATE OR REPLACE PROCEDURE pr_atualizar_usuario
(
    p_id_usuario INT,
    p_novo_nome VARCHAR,
	p_nova_descricao TEXT,
    p_novo_email VARCHAR,
    p_nova_senha VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Validação
    IF EXISTS (SELECT 1 FROM usuario WHERE email = p_novo_email AND id_usuario != p_id_usuario) THEN
        RAISE EXCEPTION 'O e-mail "%" já está em uso.', p_novo_email;
    END IF;

    -- Atualiza
    UPDATE usuario
    SET 
		nome = p_novo_nome,
        descricao = p_nova_descricao,
        email = p_novo_email,
        senha = p_nova_senha
    WHERE id_usuario = p_id_usuario;
    
    -- Se o ID não existir, avisa (não vai ser muito útil, mas é bom caso haja algum bug)
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Usuário % não encontrado para atualização.', p_id_usuario;
    END IF;
END;
$$;