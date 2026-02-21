// 1. NOSSO "BANCO DE DADOS" CONECTADO AO LOCAL STORAGE
let imoveisCadastrados = JSON.parse(localStorage.getItem('meusImoveis'));

// Se o Local Storage estiver vazio, criamos os 4 imóveis de teste e salvamos
if (!imoveisCadastrados || imoveisCadastrados.length === 0) {
    imoveisCadastrados = [
        { id: 1, titulo: "República mobiliada próxima ao metrô", preco: '1.200', tempo: 6, inquilinos: 5, endereco: "Rua das Flores, 123, Centro", tipo: "Apartamento", cidade: "São Paulo", estado: "SP", imagem: "../assets/rep1.png" },
        { id: 2, titulo: "Casa espaçosa perto da faculdade", preco: '850', tempo: 12, inquilinos: 3, endereco: "Av. Universitária, 45, Bairro Alto", tipo: "Casa", cidade: "Campinas", estado: "SP", imagem: "../assets/rep1.png" },
        { id: 3, titulo: "Quarto individual em apartamento", preco: '1.500', tempo: 6, inquilinos: 2, endereco: "Rua da Paz, 99, Jardins", tipo: "Apartamento", cidade: "São Paulo", estado: "SP", imagem: "../assets/rep1.png" },
        { id: 4, titulo: "República estudantil Ouro Preto", preco: '600', tempo: 12, inquilinos: 8, endereco: "Rua Direita, 10, Centro Histórico", tipo: "Casa", cidade: "Ouro Preto", estado: "MG", imagem: "../assets/rep1.png" }
    ];
    localStorage.setItem('meusImoveis', JSON.stringify(imoveisCadastrados));
}

// --- VARIÁVEIS DE CONTROLO DA PAGINAÇÃO ---
let listaAtual = []; 
let paginaAtual = 1;

// AJUSTE 1: Mudamos de 2 para 4 cards por página!
const itensPorPagina = 4; 

const containerImoveis = document.getElementById('container-imoveis');

// 2. A MÁQUINA DE DESENHAR CARDS
function renderizarImoveis() {
    containerImoveis.innerHTML = "";

    const totalPaginas = Math.ceil(listaAtual.length / itensPorPagina) || 1; 

    const indiceInicio = (paginaAtual - 1) * itensPorPagina;
    const indiceFim = indiceInicio + itensPorPagina;
    const imoveisDaPagina = listaAtual.slice(indiceInicio, indiceFim);

    document.getElementById('info-paginacao').innerText = `${paginaAtual} de ${totalPaginas}`;
    document.getElementById('btn-anterior').disabled = (paginaAtual === 1);
    document.getElementById('btn-proximo').disabled = (paginaAtual === totalPaginas || listaAtual.length === 0);

    if (listaAtual.length === 0) {
        containerImoveis.innerHTML = "<p style='text-align: center; color: #666; margin-top: 20px;'>Nenhum imóvel encontrado.</p>";
        return;
    }

    imoveisDaPagina.forEach(imovel => {
        
        const imagemHTML = imovel.imagem 
            ? `<img src="${imovel.imagem}" alt="Foto" class="card-img">` 
            : `<div class="sem-foto">Sem fotos</div>`;

        const cardHTML = `
        <div class="card-imovel">
            ${imagemHTML} <div class="card-info">
                <h3>${imovel.titulo}</h3>
                <div class="card-detalhes-linha">
                    <span class="preco">R$ ${imovel.preco}/mês</span>
                    <span class="info-extra"><i class="ph ph-calendar-blank"></i> ${imovel.tempo} meses</span>
                    <span class="info-extra"><i class="ph ph-user"></i> Max. ${imovel.inquilinos} inquilinos</span>
                </div>
                <p class="endereco"><i class="ph ph-map-pin"></i> ${imovel.endereco}</p>
            </div>

            <div class="card-acoes">
                <button class="btn-acao deletar" onclick="deletarImovel(${imovel.id})"><i class="ph ph-trash"></i></button>
                <button class="btn-acao editar" onclick="editarImovel()"><i class="ph-fill ph-pencil-simple"></i></button>
            </div>
        </div>`;
        
        containerImoveis.innerHTML += cardHTML;
    });
}

// --- EVENTOS DOS BOTÕES DE PAGINAÇÃO ---
document.getElementById('btn-anterior').addEventListener('click', () => {
    if (paginaAtual > 1) {
        paginaAtual--;
        renderizarImoveis();
    }
});

document.getElementById('btn-proximo').addEventListener('click', () => {
    const totalPaginas = Math.ceil(listaAtual.length / itensPorPagina);
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        renderizarImoveis();
    }
});


// 3. RECRIANDO AS AÇÕES DOS BOTÕES
// AJUSTE 3: A função agora recebe o ID, deleta, salva e recarrega a tela!
function deletarImovel(idDoImovel) {
    if (confirm("Tem certeza que deseja excluir este imóvel? A ação não poderá ser desfeita.")) {
        
        // 1. Filtra a lista removendo o imóvel que tem o ID clicado
        imoveisCadastrados = imoveisCadastrados.filter(imovel => imovel.id !== idDoImovel);
        
        // 2. Salva a nova lista (sem o imóvel) de volta na mochila (localStorage)
        localStorage.setItem('meusImoveis', JSON.stringify(imoveisCadastrados));
        
        // 3. Atualiza as cidades no filtro (caso fosse a última casa daquela cidade)
        carregarCidadesNoFiltro();
        
        // 4. Reaplica os filtros para atualizar a "listaAtual" e redesenhar a tela
        aplicarFiltros();
        
        alert("Imóvel excluído com sucesso!");
    }
}

function editarImovel() { window.location.href = "editar_imovel.html"; }



// 4. A LÓGICA DO FILTRO COMPLETO
const filtroTipo = document.getElementById('filtro-tipo');
const filtroCidade = document.getElementById('filtro-cidade');
const filtroEstado = document.getElementById('filtro-estado');
const filtroValor = document.getElementById('filtro-valor');
const filtroTempo = document.getElementById('filtro-tempo');
const filtroInquilinos = document.getElementById('filtro-inquilinos');

function aplicarFiltros() {
    const valTipo = filtroTipo.value;
    const valCidade = filtroCidade.value;
    const valEstado = filtroEstado.value;
    const valValor = filtroValor.value ? parseInt(filtroValor.value) : null;
    const valTempo = filtroTempo.value ? parseInt(filtroTempo.value) : null;
    const valInquilinos = filtroInquilinos.value ? parseInt(filtroInquilinos.value) : null;

    listaAtual = imoveisCadastrados.filter(imovel => {
        const tipoBate = (valTipo === "") || (imovel.tipo === valTipo);
        const cidadeBate = (valCidade === "") || (imovel.cidade === valCidade);
        const estadoBate = (valEstado === "") || (imovel.estado === valEstado);
        
        
        const precoNumerico = typeof imovel.preco === 'string' ? parseFloat(imovel.preco.replace('.', '')) : imovel.preco;
        const valorBate = (valValor === null) || (precoNumerico <= valValor);
        
        const tempoBate = (valTempo === null) || (imovel.tempo >= valTempo);
        const inquilinosBate = (valInquilinos === null) || (imovel.inquilinos <= valInquilinos);

        return tipoBate && cidadeBate && estadoBate && valorBate && tempoBate && inquilinosBate;
    });

    paginaAtual = 1; 
    renderizarImoveis();
}

filtroTipo.addEventListener('change', aplicarFiltros);
filtroCidade.addEventListener('change', aplicarFiltros);
filtroEstado.addEventListener('change', aplicarFiltros);
filtroValor.addEventListener('change', aplicarFiltros);
filtroTempo.addEventListener('change', aplicarFiltros);
filtroInquilinos.addEventListener('change', aplicarFiltros);


// --- POPULAR CIDADES DINAMICAMENTE ---
function carregarCidadesNoFiltro() {
    const filtroCidade = document.getElementById('filtro-cidade');
    const cidadesUnicas = [...new Set(imoveisCadastrados.map(imovel => imovel.cidade))];
    filtroCidade.innerHTML = '<option value="">Todas as Cidades</option>';
    cidadesUnicas.forEach(cidade => {
        filtroCidade.innerHTML += `<option value="${cidade}">${cidade}</option>`;
    });
}

carregarCidadesNoFiltro();

// 5. INICIA O SISTEMA
// AJUSTE FINAL: Ao abrir, copia o banco para a listaAtual antes de desenhar
listaAtual = [...imoveisCadastrados];
renderizarImoveis();