-- A. Busca por CIDADE (Ex: Usuário digitou "Monlevade")
-- Note que agora consultamos a VIEW, e não a tabela direta
SELECT * FROM vw_imoveis_detalhados
WHERE cidade ILIKE ?; 


-- B. Busca por BAIRRO
SELECT * FROM vw_imoveis_detalhados
WHERE bairro ILIKE ?;


-- C. Busca Avançada (Combinando Preço + Cidade + Tipo)
SELECT * FROM vw_imoveis_detalhados
WHERE valor <= ?
  AND tipo = ?
  AND cidade ILIKE ?;