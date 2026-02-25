const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert("Erro: As senhas não conferem!");
        return;
    }

    const dados = new URLSearchParams();
    dados.append("nome", nome);
    dados.append("email", email);
    dados.append("senha", senha);

    fetch("http://localhost:8080/MorAki/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: dados.toString()
    })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../index.html";
        })
        .catch(error => {
            console.error("Erro no cadastro:", error);
            alert("Erro ao cadastrar usuário. Tente novamente.");
        });
});