-- 1. OTIMIZAÇÃO (Rodar uma vez no banco)
-- Cria índices para acelerar as buscas mais comuns

-- Acelera busca por Tipo (ex: quem só quer "Apartamento")
CREATE INDEX idx_moradia_tipo ON moradia(tipo);

-- Acelera busca por Faixa de Preço (ex: entre 500 e 1000)
CREATE INDEX idx_moradia_valor ON moradia(valor);

-- Acelera busca por Endereço/Cidade (ex: "Centro")
CREATE INDEX idx_moradia_endereco ON moradia(endereco);

-- ---------------------------------------------------------
-- Quebra o endereço em partes mastigáveis para filtrar
-- ---------------------------------------------------------

CREATE OR REPLACE VIEW vw_imoveis_detalhados AS
SELECT 
    id_moradia,
    tipo,
    valor,
    max_inquilino,
    tot_inquilino,
    descricao,
    endereco AS endereco_completo,
    -- Desmontando a String 
    TRIM(SPLIT_PART(endereco, ',', 4)) AS bairro, -- Pega a 4ª parte
    TRIM(SPLIT_PART(endereco, ',', 5)) AS cidade, -- Pega a 5ª parte
    TRIM(SPLIT_PART(endereco, ',', 6)) AS uf     -- Pega a 6ª parte
FROM moradia;