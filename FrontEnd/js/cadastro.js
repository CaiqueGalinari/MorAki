const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // 1. Captura os valores que o usuário digitou
    // Usa .value para pegar o texto de dentro do input
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmar-senha').value;

    // 2. Validação: As senhas são iguais?
    if (senha !== confirmarSenha) {
        // Se forem diferentes, avisa e para o código aqui
        alert("Erro: As senhas não conferem!");
        return; // CANCELAR o resto da função
    }

    // armazenar dados do usuario locamente no navegador
    const novoUsuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
};
    // 2. Buscar lista antiga do LocalStorage (ou criar uma vazia se não existir)
    // JSON.parse serve para transformar o texto que estava salvo em uma lista de verdade
    let listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];

    // 3. Adicionar o novo usuário na lista antiga
    listaUsuarios.push(novoUsuario);

    // 4. Salvar a lista atualizada de volta no LocalStorage
    // JSON.stringify serve para transformar a lista em um texto para salvar
    localStorage.setItem('usuariosCadastrados', JSON.stringify(listaUsuarios));
    // 5. Avisar o usuário que deu tudo certo
    alert("Cadastro realizado com sucesso!");
    // 6. Redirecionar para a página de login
    window.location.href = "../index.html";
});