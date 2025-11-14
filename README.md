# MorAki
  Bem vindo ao nosso projeto! Onde visamos ajudar jovens universitários com o sonho de se formar sem passar aperto!
  
## Escopo do Sistema:
- Nosso objetivo aqui é o de construir um sistema capaz de unir pessoas com um objetivo em comum: se formar! Em que sentido? Nosso projeto servirá de ponte para que essas pessoas morem juntas, dividindo aluguel e afazeres para que a vida na universidade seja mais leve. E isso não será totalmente no escuro, veja mais detalhes nas features que vamos implementar a seguir.

### Features do projeto:
- 01: Gerência de pessoas, com dados básicos
- 02: Gerência de imóveis, com dados como endereço, valores, tamanho do quarto disponível e quantidade de cômodos
- 03: Sistema de notas para imóveis, em "estrelas", para você ter uma idéia de como é morar no lugar
- 04: Sistema de notas para pessoas, em "estrelas", para você ter uma idéia de como é morar com a pessoa
- 05: Sistema de "me conheça", onde você pode descrever como é morar com você
- 06: Extensão dos sistemas de notas para a adição de comentários
- 07: Link para conversar em uma rede social
- 08: Opção de favoritar imóveis e pessoas
- 09: Opção de filtrar imóveis listados
- 10: Opção de buscar imóveis e pessoas por nome ou atributo

## Integrantes e papel:
- Caíque Galinari  -  BackEnd
- Erick Yuri   -  FrontEnd
- Kaiky Linhares  -  FrontEnd
- Letícia Ferreira  -  BackEnd
- Ronald Chaves  -  FullStack

## Tecnologias:
### FrontEnd:
- **Linguagens:** HTML / CSS / JavaScript

### BackEnd:
- **Linguagem:** Java
- **SGBD:** PostgreSQL

## Backlogs:
### Produto:
- Como usuário, eu gostaria de me cadastrar
- Como usuário, eu gostaria de alterar meus dados
- Como usuário, eu gostaria de cadastrar um imóvel
- Como usuário, eu gostaria de alterar os dados do imóvel
- Como usuário, eu gostaria de saber como são meus futuros colegas
- Como usuário, eu gostaria de saber como que é o imóvel
- Como usuário, eu gostaria de saber o que as pessoas pensam de um imóvel que moraram
- Como usuário, eu gostaria de falar o que penso sobre um imóvel que morei
- Como usuário, eu gostaria de falar com quem está alugando um quarto
- Como usuário, eu gostaria de encontrar imóveis que me atendam
- Como usuário, eu gostaria de encontrar pessoas compatíveis para morar comigo
- Como usuário, eu gostaria de guardar um imóvel que gostei muito para alugar depois
- Como usuário, eu gostaria de saber onde ficam os imóveis

### Sprint:
#### História #1 — Como usuário, eu gostaria de me cadastrar
Tarefas e responsáveis:
- Criar tela de registro de usuário (nome, e-mail, senha, tipo de usuário) — Frontend: [Érick]
- Implementar API de cadastro de usuários e salvar no SGBD — Backend: [Caíque]
- Conectar tela de registro ao backend e testar o fluxo completo — Frontend + Backend [Ronald]

---

#### História #2 — Como usuário, eu gostaria de cadastrar um imóvel
Tarefas e responsáveis:
- Criar formulário para cadastro de imóvel (endereço, valor, vagas, descrição, fotos) — Frontend: [Érick]
- Implementar rota no backend para receber, validar e salvar imóveis no SGBD — Backend: [Caíque]
- Validar dados e conectar o frontend ao backend — Frontend + Backend [Ronald]

---

#### História #3 — Como usuário, eu gostaria de encontrar imóveis que me atendam
Tarefas e responsáveis:
- Criar tela principal com lista de imóveis — Frontend: [Kaiky]
- Implementar endpoint no backend para buscar imóveis no SGBD com filtros (cidade, preço, vagas) — Backend: [Letícia]
- Conectar busca do frontend à API e exibir resultados — Frontend + Backend [Ronald]

---

#### História #4 — Como usuário, eu gostaria de saber como é o imóvel
Tarefas e responsáveis:
- Criar página de detalhes do imóvel — Frontend: [Kaiky]
- Implementar rota no backend que retorna os dados completos de um imóvel do SGBD — Backend: [Letícia]
- Integrar lista → detalhes com link “ver mais” — Frontend + Backend [Ronald]

---

#### História #5 — Como usuário, eu gostaria de falar com quem está alugando um quarto
Tarefas e responsáveis:
- Criar botão “Entrar em contato” na página de detalhes — Frontend: [Érick]
- Criar endpoint no backend para processar o contato (ou simular com redirecionamento de e-mail/whatsapp) — Backend: [Caíque]
- Testar fluxo de contato — Frontend + Backend [Ronald]
