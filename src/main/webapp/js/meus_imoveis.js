document.addEventListener("DOMContentLoaded", function() {
    carregarMeusImoveis();
});

let todosImoveis = [];
let paginaAtual = 1;
const itensPorPagina = 3;

function carregarMeusImoveis() {
    const usuarioLogadoString = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoString) {
        window.location.href = "../index.html";
        return;
    }

    const idUsuarioLogado = JSON.parse(usuarioLogadoString).id;

    fetch(`http://localhost:8080/moraki/moradias?idUsuario=${idUsuarioLogado}`)
        .then(response => response.json())
        .then(imoveis => {
            todosImoveis = imoveis;
            renderizarPagina(); // Chama a função que desenha a página correta
        })
        .catch(error => console.error("Erro ao buscar imóveis:", error));
}

function renderizarPagina() {
    const container = document.getElementById('container-imoveis');
    if (!container) return;
    container.innerHTML = '';

    if(todosImoveis.length === 0) {
        container.innerHTML = '<p class="aviso-vazio" style="text-align:center; padding: 30px;">Você ainda não tem imóveis cadastrados.</p>';
        document.getElementById('info-paginacao').innerText = "0 de 0";
        return;
    }

    const totalPaginas = Math.ceil(todosImoveis.length / itensPorPagina);

    if (paginaAtual < 1) paginaAtual = 1;
    if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;

    document.getElementById('info-paginacao').innerText = `${paginaAtual} de ${totalPaginas}`;

    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const imoveisDaPagina = todosImoveis.slice(inicio, fim);

    imoveisDaPagina.forEach(imovel => {
        const partesEndereco = imovel.endereco.split(',');
        const numero = partesEndereco[1] ? partesEndereco[1].trim() : "S/N";
        const rua = partesEndereco[2] ? partesEndereco[2].trim() : "Endereço não informado";
        const bairro = partesEndereco[3] ? partesEndereco[3].trim() : "";
        const cidade = partesEndereco[4] ? partesEndereco[4].trim() : "";

        const enderecoExibicao = `${rua}, ${numero} - ${bairro}`;
        const titulo = `${imovel.tipo} em ${bairro || cidade}`;

        const cardHTML = `
            <div class="card-imovel">
                <img src="../assets/placeholder.jpg" alt="Foto do Imóvel" class="card-img" style="width: 150px; height: 100px; border-radius: 8px; object-fit: cover;">
                <div class="card-info">
                    <h3>${titulo}</h3>
                    <div class="card-detalhes-linha">
                        <span class="preco">R$ ${imovel.valor.toFixed(2)}/mês</span>
                        <span class="info-extra"><i class="ph ph-calendar-blank"></i> ${imovel.tempoAluguel} meses</span>
                        <span class="info-extra"><i class="ph ph-user"></i> Max. ${imovel.maxInquilino} inquilinos</span>
                    </div>
                    <p class="endereco"><i class="ph ph-map-pin"></i> ${enderecoExibicao}</p>
                </div>
                <div class="card-acoes">
                    <button class="btn-acao info" title="Ver Informações"><i class="ph-fill ph-info"></i></button>
                    <button class="btn-acao deletar" title="Excluir"><i class="ph ph-trash"></i></button>
                    <a href="editar_imovel.html?id=${imovel.idMoradia}" class="btn-acao editar" title="Editar"><i class="ph-fill ph-pencil-simple"></i></a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.getElementById('btn-anterior').addEventListener('click', function() {
    if (paginaAtual > 1) {
        paginaAtual--;
        renderizarPagina();
    }
});

document.getElementById('btn-proximo').addEventListener('click', function() {
    const totalPaginas = Math.ceil(todosImoveis.length / itensPorPagina);
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        renderizarPagina();
    }
});