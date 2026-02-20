const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // 1. Pegar o que o usuário digitou
    const emailDigitado = document.querySelector('#email').value;
    const senhaDigitada = document.querySelector('#senha').value;

    // 2. Buscar a lista de usuários que está salva no navegador
    // Se não tiver ninguém, retorna uma lista vazia []
    const listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];

    // 3. Procurar se existe ALGUÉM com esse e-mail E essa senha
    // O método .find() procura item por item na lista
    const usuarioEncontrado = listaUsuarios.find(function(usuario) {
        return usuario.email === emailDigitado && usuario.senha === senhaDigitada;
    });

    // 4. Verificar o resultado
    if (usuarioEncontrado) {
        // SUCCESSO: O usuário foi encontrado!
        alert("Bem-vindo(a), " + usuarioEncontrado.nome + "!");
        
        // Redireciona para a tela principal
        window.location.href = "pages/listagem.html";
    } else {
        // ERRO: Não achou ninguém ou a senha está errada
        alert("E-mail ou senha incorretos!");
    }
});