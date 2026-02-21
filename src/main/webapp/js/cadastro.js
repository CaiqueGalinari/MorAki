const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // 1. Captura os valores que o usuário digitou
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmar-senha').value;

    // 2. Validação: As senhas são iguais?
    if (senha !== confirmarSenha) {
        alert("Erro: As senhas não conferem!");
        return;
    }

    // 3. Monta os dados para enviar ao backend
    const dados = new URLSearchParams();
    dados.append("nome", nome);
    dados.append("email", email);
    dados.append("telefone", telefone);
    dados.append("senha", senha);

    // 4. Faz a requisição ao Servlet
    fetch("http://localhost:8080/MorAki/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: dados.toString()
    })
        .then(response => response.json()) // ou .json() se o Servlet retornar JSON
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../index.html";
        })
        .catch(error => {
            console.error("Erro no cadastro:", error);
            alert("Erro ao cadastrar usuário. Tente novamente.");
        });
});