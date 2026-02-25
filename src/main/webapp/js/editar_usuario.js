document.addEventListener("DOMContentLoaded", function() {

    const usuarioLogadoString = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoString) {
        alert("Você precisa estar logado para editar seu perfil!");
        window.location.href = "../index.html";
        return;
    }

    const usuario = JSON.parse(usuarioLogadoString);
    const idUsuario = usuario.id;

    fetch(`http://localhost:8080/moraki/usuarios?idUsuario=${idUsuario}`)
        .then(response => response.json())
        .then(dadosUsuario => {
            if(dadosUsuario.erro) {
                alert("Erro: " + dadosUsuario.erro);
                return;
            }

            document.querySelector('#nome').value = dadosUsuario.nome;
            document.querySelector('#email').value = dadosUsuario.email;
            document.querySelector('#descricao').value = dadosUsuario.descricao || "";
        })
        .catch(error => {
            console.error("Erro ao carregar dados do usuário:", error);
            alert("Erro ao buscar seus dados.");
        });

    document.querySelector('#btn-cancelar').addEventListener('click', function() {
        window.location.href = "listagem.html";
    });

    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const descricao = document.querySelector('#descricao').value;
        const senha = document.querySelector('#senha').value;
        const confirmarSenha = document.querySelector('#confirmar-senha').value;

        if (senha !== confirmarSenha) {
            alert("Erro: As senhas não conferem!");
            return;
        }

        const dadosAtualizados = new URLSearchParams();
        dadosAtualizados.append("idUsuario", idUsuario);
        dadosAtualizados.append("nome", nome);
        dadosAtualizados.append("email", email);
        dadosAtualizados.append("descricao", descricao);
        dadosAtualizados.append("senha", senha);

        fetch("http://localhost:8080/moraki/usuarios", {
            method: "PUT",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: dadosAtualizados.toString()
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "ok") {
                alert("Perfil atualizado com sucesso!");

                localStorage.setItem('usuarioLogado', JSON.stringify({
                    id: idUsuario,
                    nome: nome
                }));

                window.location.href = "listagem.html";
            } else {
                alert("Erro: " + data.mensagem);
            }
        })
        .catch(error => {
            console.error("Erro na atualização:", error);
            alert("Erro de comunicação com o servidor.");
        });
    });
});