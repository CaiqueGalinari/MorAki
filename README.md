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
- **Servlet:** Tomcat

## Backlogs:
### Produto:
- Como usuário, eu gostaria de me cadastrar
- Como usuário, eu gostaria de alterar meus dados
- Como usuário, eu gostaria de cadastrar um imóvel
- Como usuário, eu gostaria de alterar os dados do imóvel
- Como usuário, eu gostaria de encontrar imóveis que me atendam
- Como usuário, eu gostaria de saber onde ficam os imóveis
- Como usuário, eu gostaria de saber como que é o imóvel
- Como usuário, eu gostaria de saber como são meus futuros colegas
- Como usuário, eu gostaria de encontrar pessoas compatíveis para morar comigo
- Como usuário, eu gostaria de falar com quem está alugando um quarto
- Como usuário, eu gostaria de falar o que penso sobre um imóvel que morei
- Como usuário, eu gostaria de saber o que as pessoas pensam de um imóvel que moraram
- Como usuário, eu gostaria de guardar um imóvel que gostei muito para alugar depois

### Sprint:
#### História #1 — Como usuário, eu gostaria de me cadastrar
Tarefas e responsáveis:
- Criar tela de registro de usuário (nome, email, senha, tipo) — Frontend: [Érick]
- Implementar API de cadastro e persistência no SGBD — Backend: [Caíque]
- Validar dados no backend (email único, senha mínima) — Backend: [Letícia]
- Conectar frontend ao backend e testar fluxo completo — Fullstack: [Ronald]

---

#### História #2 — Como usuário, eu gostaria de alterar meus dados
Tarefas e responsáveis:
- Criar tela de edição de perfil — Frontend: [Kaiky]
- Implementar API de atualização de dados do usuário — Backend: [Letícia]
- Criar query e procedure para atualizar dados com segurança — Backend: [Caíque]
- Conectar tela ao backend e testar fluxo — Fullstack: [Ronald]

---

#### História #3 — Como usuário, eu gostaria de cadastrar um imóvel
Tarefas e responsáveis:
- Criar tela de cadastro de imóvel (endereço, descrição, fotos, preço etc.) — Frontend: [Érick]
- Criar API de cadastro de imóvel — Backend: [Letícia]
- Definir modelo e tabelas no SGBD para imóveis — Backend: [Caíque]
- Integrar tudo e testar — Fullstack: [Ronald]

---

#### História #4 - Como usuário, eu gostaria de alterar os dados do imóvel
Tarefas e responsáveis:
- Criar tela de edição de imóvel — Frontend: [Kaiky]
- Implementar API de atualização de imóvel — Backend: [Letícia]
- Criar queries para atualização segura no SGBD — Backend: [Caíque]
- Conectar tela ao backend e testar — Fullstack: [Ronald]

---

#### História #5 — Como usuário, eu gostaria de encontrar imóveis que me atendam
Tarefas e responsáveis:
- Criar tela de filtro e lista de imóveis — Frontend: [Kaiky]
- Implementar API de busca com filtros (preço, localização, tipo etc.) — Backend: [Letícia]
- Criar consultas otimizadas no SGBD para suporte aos filtros — Backend: [Caíque]
- Conectar filtros e lista ao backend e testar — Fullstack: [Ronald]

---

## Diagramas UML

### Diagrama de casos de uso
![alt text](<Diagramas UML/Diagrama de Casos de Uso.png>)

### Diagrama de classes
![alt text](<Diagramas UML/Diagrama de Classes.png>)

----

### Diagramas de Atividades
#### História 01

![alt text](Diagramas%20UML/Diagrama%20de%20Atividade%20-%20Historia%20%231.png)

#### História 02

![alt text](Diagramas%20UML/Diagrama%20de%20Atividade%20-%20Historia%20%232.png)

#### História 03

![alt text](Diagramas%20UML/Diagrama%20de%20Atividade%20-%20Historia%20%233.png)

#### História 04

![alt text](Diagramas%20UML/Diagrama%20de%20Atividade%20-%20Historia%20%234.png)

#### História 05

![alt text](Diagramas%20UML/Diagrama%20de%20Atividade%20-%20Historia%20%235.png)
---

## Protótipos de Tela

### Tela de Login
![Tela de Login](Prototipos-de-Tela/login_usuario.png)

### Tela de Cadastro de Usuário
![Tela de Cadastro de Usuário](Prototipos-de-Tela/cadastro_usuario.png)

### Tela de Cadastro de Imóveis
![Tela de Cadastro de Imóveis](Prototipos-de-Tela/cadastro_imovel.png)

### Tela de Editar Cadastro de Usuários
![alterar_cadastro](https://github.com/user-attachments/assets/99cf0e03-8766-46d4-8bcb-370732ccb436)

### Tela de Editar Cadastro de Imóveis
![alterar_imovel](https://github.com/user-attachments/assets/2214afc9-4d6a-43a5-8302-818c7ecc7d1f)

### Tela de Busca de Imóvel Ideal
![Tela de Busca de Imóvel Ideal](https://github.com/user-attachments/assets/50502079-a6e9-47ae-b855-600b53d35271)







