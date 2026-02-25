const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const emailDigitado = document.querySelector('#email').value;
    const senhaDigitada = document.querySelector('#senha').value;

    fetch("http://localhost:8080/moraki/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(emailDigitado)}&senha=${encodeURIComponent(senhaDigitada)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "ok") {
            localStorage.setItem('usuarioLogado', JSON.stringify({
                id: data.idUsuario,
                nome: data.nome
            }));

            window.location.href = "pages/listagem.html";
        } else {
            alert("Atenção: " + data.mensagem);
        }
    })
    .catch(error => {
        console.error("Erro na comunicação:", error);
        alert("Ocorreu um erro ao tentar conectar com o servidor.");
    });
});