// Função para ajustar dinamicamente a altura de um textarea com base no conteúdo
function autoajuste(textarea) {
    textarea.style.height = 'auto'; // Redefine a altura para automático
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Define a altura do textarea para a altura do seu conteúdo
}

// Função para criptografar texto substituindo determinadas letras por outras
function criptografia(text) {
    // Mapeia as substituições desejadas
    let substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    // Realiza a substituição das letras no texto
    return text.split('').map(letra => {
        switch (letra) {
            case 'e':
                return substituicoes['e'];
            case 'i':
                return substituicoes['i'];
            case 'a':
                return substituicoes['a'];
            case 'o':
                return substituicoes['o'];
            case 'u':
                return substituicoes['u'];
            default:
                return letra;
        }
    }).join('');
}

// Função para descriptografar texto revertendo as substituições feitas
function descriptografia(text) {
    // Mapeia as substituições inversas
    let substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let palavra = text;

    // Realiza a substituição inversa das letras no texto
    for (let chave in substituicoes) {
        palavra = palavra.split(chave).join(substituicoes[chave]);
    }

    return palavra;
}

// Função para exibir o texto de saída em um campo específico e controlar a visibilidade de elementos HTML
function exibirSaida(text) {
    let campo = document.querySelector('.conteudoLateral__saida');
    campo.value = text; // Define o valor do campo de saída como o texto fornecido

    // Oculta um elemento HTML com a classe 'desaparecer'
    let divElement = document.querySelector('.desaparecer');
    divElement.style.visibility = 'hidden';

    // Torna visível um elemento HTML com a classe 'conteudoLateral__btn3'
    divElement = document.querySelector('.conteudoLateral__btn3');
    divElement.style.visibility = 'visible';
}

// Função para limpar o conteúdo de um textarea
function limparCampo() {
    let text = document.querySelector('textarea');
    text.value = ''; // Define o valor do textarea como vazio
}

// Função para receber o texto, criptografá-lo e exibir o resultado
function receberCriptografar() {
    let text = document.querySelector('textarea').value; // Obtém o texto do textarea
    exibirSaida(criptografia(text)); // Exibe o resultado da criptografia
    limparCampo(); // Limpa o campo de entrada
}

// Função para receber o texto, descriptografá-lo e exibir o resultado
function receberDescriptografia() {
    let text = document.querySelector('textarea').value; // Obtém o texto do textarea
    exibirSaida(descriptografia(text)); // Exibe o resultado da descriptografia
    limparCampo(); // Limpa o campo de entrada
}

// Função para copiar o texto do campo de saída para a área de transferência
function copiarText() {
    let copyText = document.getElementById("Copy");
    copyText.select(); // Seleciona o texto no campo de saída
    copyText.setSelectionRange(0, 99999); // Define o intervalo de seleção como todo o texto
    navigator.clipboard.writeText(copyText.value); // Copia o texto selecionado para a área de transferência
}
