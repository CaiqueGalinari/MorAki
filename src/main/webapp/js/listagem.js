document.addEventListener("DOMContentLoaded", function() {

    const usuarioLogadoString = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoString) {
        window.location.href = "../index.html";
        return;
    }
    const usuarioLogado = JSON.parse(usuarioLogadoString);
    document.getElementById('mensagem-ola').innerText = "Olá, " + usuarioLogado.nome;

    document.getElementById('btn-sair').addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = "../index.html";
    });

    function buscarImoveis(url) {
        fetch(url)
        .then(response => response.json())
        .then(imoveis => {
            const container = document.getElementById('lista-imoveis');
            container.innerHTML = '';

            if(imoveis.length === 0) {
                container.innerHTML = '<p style="text-align:center; color: #555; background: rgba(255,255,255,0.9); padding: 30px; border-radius: 8px; font-weight: bold; font-size: 1.2rem;">Nenhum imóvel encontrado com estes filtros.</p>';
                return;
            }

            imoveis.forEach(imovel => {
                const partesEndereco = imovel.endereco.split(',');
                const bairro = partesEndereco[3] ? partesEndereco[3].trim() : "Bairro não informado";

                let enderecoLongo = imovel.endereco.startsWith(",") ? imovel.endereco.substring(1).trim() : imovel.endereco;

                const telefoneDisplay = imovel.telefoneDono ? imovel.telefoneDono : "Telefone indisponível";

                const cardHTML = `
                    <div class="card-imovel-publico" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                        <div style="display: flex; gap: 20px; align-items: center; width: 100%;">

                            <img src="../assets/casa_placeholder.jpg" style="width: 180px; height: 120px; border-radius: 8px; object-fit: cover; border: 1px solid #ddd;">

                            <div class="info" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                                <h3 style="margin: 0; font-size: 1.5rem; color: #333;">${imovel.tipo} - ${bairro}</h3>

                                <p style="color: #a02030; font-weight: bold; font-size: 1.2rem; margin: 0;">
                                    R$ ${imovel.valor.toFixed(2)} &nbsp;|&nbsp; 📞 ${telefoneDisplay}
                                </p>

                                <p style="color: #666; font-size: 1rem; margin: 0; display: flex; align-items: center; gap: 5px;">
                                    <i class="ph ph-map-pin"></i> ${enderecoLongo}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error("Erro ao carregar imóveis:", error));
    }

    document.getElementById('btn-buscar').addEventListener('click', function() {
        const cidade = document.getElementById('filtro-cidade').value;
        const tipo = document.getElementById('filtro-tipo').value;
        const valorMax = document.getElementById('filtro-valor').value;
        const maxInquilinos = document.getElementById('filtro-inquilinos').value;

        let urlBusca = `http://localhost:8080/moraki/moradias?acao=buscar`;

        if (cidade) urlBusca += `&cidade=${encodeURIComponent(cidade)}`;
        if (tipo) urlBusca += `&tipo=${encodeURIComponent(tipo)}`;
        if (valorMax) urlBusca += `&valorMax=${valorMax}`;
        if (maxInquilinos) urlBusca += `&maxInquilinos=${maxInquilinos}`;

        buscarImoveis(urlBusca);
    });

    buscarImoveis(`http://localhost:8080/moraki/moradias?acao=buscar`);
});