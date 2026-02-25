document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idMoradia = urlParams.get('id');

    if (!idMoradia) {
        alert("Nenhum imóvel selecionado para edição.");
        window.location.href = "meus_imoveis.html";
        return;
    }

    fetch(`http://localhost:8080/moraki/moradias?idMoradia=${idMoradia}`)
        .then(response => response.json())
        .then(imovel => {
            if(imovel.erro) {
                alert("Erro: " + imovel.erro);
                return;
            }

            document.querySelector('#tipo').value = imovel.tipo;
            document.querySelector('#valor').value = imovel.valor;
            document.querySelector('#dono').value = imovel.nomeDono || "";
            document.querySelector('#telefone').value = imovel.telefoneDono || "";
            document.querySelector('#inquilinos').value = imovel.maxInquilino;
            document.querySelector('#descricao').value = imovel.descricao || "";

            if(imovel.endereco) {
                const partes = imovel.endereco.split(',');
                document.querySelector('#numero').value = partes[1] ? partes[1].trim() : "";
                document.querySelector('#rua').value = partes[2] ? partes[2].trim() : "";
                document.querySelector('#bairro').value = partes[3] ? partes[3].trim() : "";
                document.querySelector('#cidade').value = partes[4] ? partes[4].trim() : "";
                document.querySelector('#uf').value = partes[5] ? partes[5].trim() : "";
                document.querySelector('#cep').value = partes[6] ? partes[6].trim() : "";
            }
        })
        .catch(error => {
            console.error("Erro ao carregar dados:", error);
            alert("Erro ao buscar dados do imóvel.");
        });

    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const tipo = document.querySelector('#tipo').value;
        const valor = document.querySelector('#valor').value;
        const rua = document.querySelector('#rua').value;
        const numero = document.querySelector('#numero').value;
        const cep = document.querySelector('#cep').value;
        const bairro = document.querySelector('#bairro').value;
        const cidade = document.querySelector('#cidade').value;
        const uf = document.querySelector('#uf').value;
        const nomeDono = document.querySelector('#dono').value;
        const telefoneDono = document.querySelector('#telefone').value;
        const maxInquilino = document.querySelector('#inquilinos').value;
        const descricao = document.querySelector('#descricao').value;

        const enderecoCompleto = `, ${numero}, ${rua}, ${bairro}, ${cidade}, ${uf}, ${cep}`;

        const usuarioLogadoString = localStorage.getItem('usuarioLogado');
        let idUsuarioLogado = 1;
        if (usuarioLogadoString) {
            idUsuarioLogado = JSON.parse(usuarioLogadoString).id;
        }

        const dadosAtualizados = new URLSearchParams();
        dadosAtualizados.append("idMoradia", idMoradia);
        dadosAtualizados.append("tipo", tipo);
        dadosAtualizados.append("valor", valor);
        dadosAtualizados.append("endereco", enderecoCompleto);
        dadosAtualizados.append("nomeDono", nomeDono);
        dadosAtualizados.append("telefoneDono", telefoneDono);
        dadosAtualizados.append("maxInquilino", maxInquilino);
        dadosAtualizados.append("descricao", descricao);
        dadosAtualizados.append("idUsuarioLogado", idUsuarioLogado);

        fetch("http://localhost:8080/moraki/moradias", {
            method: "PUT",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: dadosAtualizados.toString()
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "ok") {
                alert("Imóvel atualizado com sucesso!");
                window.location.href = "meus_imoveis.html";
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