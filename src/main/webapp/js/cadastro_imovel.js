const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const tipo = document.querySelector('#tipo').value;
    const tempoAluguel = document.querySelector('#tempo').value;
    const valor = document.querySelector('#valor').value;

    const rua = document.querySelector('#rua').value;
    const numero = document.querySelector('#numero').value;
    const cep = document.querySelector('#cep').value;
    const bairro = document.querySelector('#bairro').value;
    const cidade = document.querySelector('#cidade').value;
    const uf = document.querySelector('#uf').value;

    const enderecoCompleto = `, ${numero}, ${rua}, ${bairro}, ${cidade}, ${uf}, ${cep}`;

    const nomeDono = document.querySelector('#dono').value;
    const telefoneDono = document.querySelector('#telefone').value;
    const maxInquilino = document.querySelector('#inquilinos').value;
    const descricao = document.querySelector('#descricao').value;

    const usuarioLogadoString = localStorage.getItem('usuarioLogado');
    let idQuemCadastrou = 1;
    if (usuarioLogadoString) {
        const usuario = JSON.parse(usuarioLogadoString);
        idQuemCadastrou = usuario.id;
    }

    const dados = new URLSearchParams();
    dados.append("tipo", tipo);
    dados.append("tempoAluguel", tempoAluguel);
    dados.append("valor", valor);
    dados.append("endereco", enderecoCompleto);
    dados.append("nomeDono", nomeDono);
    dados.append("telefoneDono", telefoneDono);
    dados.append("maxInquilino", maxInquilino);
    dados.append("descricao", descricao);
    dados.append("totInquilino", 0);
    dados.append("idQuemCadastrou", idQuemCadastrou);

    fetch("http://localhost:8080/moraki/moradias", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: dados.toString()
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === "ok") {
            alert("Imóvel cadastrado com sucesso!");
            window.location.href = "meus_imoveis.html";
        } else {
            alert("Erro: " + data.mensagem);
        }
    })
    .catch(error => {
        console.error("Erro no cadastro:", error);
        alert("Erro ao conectar com o servidor.");
    });
});