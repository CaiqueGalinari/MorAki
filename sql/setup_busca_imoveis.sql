-- Tipo
CREATE INDEX idx_moradia_tipo ON moradia(tipo);

-- Faixa de Preço
CREATE INDEX idx_moradia_valor ON moradia(valor);

-- Endereço/Cidade
CREATE INDEX idx_moradia_endereco ON moradia(endereco);

-- Quebra o endereço para filtrar

CREATE OR REPLACE VIEW vw_imoveis_detalhados AS
SELECT 
    m.id_moradia,
    m.tipo,
    m.valor,
    m.max_inquilino,
    m.tot_inquilino,
    m.descricao,
    m.nome_dono,
    m.telefone_dono,
    m.tempo_aluguel,
    m.endereco AS endereco_completo,
    TRIM(SPLIT_PART(m.endereco, ',', 4)) AS bairro,
    TRIM(SPLIT_PART(m.endereco, ',', 5)) AS cidade,
    TRIM(SPLIT_PART(m.endereco, ',', 6)) AS uf
	
FROM moradia m;