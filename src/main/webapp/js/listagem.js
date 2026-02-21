

// 1. Pegar o usuário logado
const listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
const usuarioLogado = listaUsuarios[listaUsuarios.length - 1]; // Pega o último (só para exemplo)

if (usuarioLogado) {
    const spanOla = document.getElementById('mensagem-ola');
    spanOla.innerText = "Olá, " + usuarioLogado.nome;
}

// 2. Configurar o botão de Sair
const btnSair = document.getElementById('btn-sair');

btnSair.addEventListener('click', function() {
    // Redireciona para o login
    window.location.href = "../index.html";
});