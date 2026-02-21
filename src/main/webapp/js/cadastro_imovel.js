const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // 1. Capturar todos os valores digitados
    const tipo = document.getElementById('tipo').value;
    const tempo = parseInt(document.getElementById('tempo').value) || 0;
    const valor = parseFloat(document.getElementById('valor').value) || 0;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const inquilinos = parseInt(document.getElementById('inquilinos').value) || 1;
    
    const enderecoCompleto = `${rua}, ${numero} - ${cidade}`;
    const tituloAutomatico = `${tipo} em ${cidade}`;

    // 2. Lógica para ler a FOTO
    const inputFoto = document.getElementById('foto');
    const arquivo = inputFoto.files[0]; // Pega o arquivo que o usuário escolheu

    // Se o usuário escolheu uma foto, o FileReader transforma ela em texto (Base64)
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function(e) {
            const imagemBase64 = e.target.result;
            salvarNoLocalStorage(imagemBase64); // Chama a função passando a foto real
        };
        leitor.readAsDataURL(arquivo);
    } else {
        // Se não escolheu foto, passa vazio ("")
        salvarNoLocalStorage(""); 
    }

    // 3. Função que salva os dados depois que a foto for processada
    function salvarNoLocalStorage(fotoConvertida) {
        const novoImovel = {
            id: Date.now(),
            titulo: tituloAutomatico,
            preco: valor,
            tempo: tempo,
            inquilinos: inquilinos,
            endereco: enderecoCompleto,
            tipo: tipo,
            cidade: cidade,
            estado: uf,
            imagem: fotoConvertida // Aqui entra a foto real ou o vazio!
        };

        let listaSalva = JSON.parse(localStorage.getItem('meusImoveis')) || [];
        listaSalva.push(novoImovel);
        localStorage.setItem('meusImoveis', JSON.stringify(listaSalva));

        alert("Imóvel cadastrado com sucesso!");
        window.location.href = "meus_imoveis.html";
    }
});