function autoajuste(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function criptografia(text) {
    let substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
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

function descriptografia(text) {
    let substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let palavra = text;

    for (let chave in substituicoes) {
        palavra = palavra.split(chave).join(substituicoes[chave]);
    }

    return palavra;
}

function exibirSaida(text) {
    let campo = document.querySelector('.conteudoLateral__saida');
    campo.value = text;

    let divElement = document.querySelector('.desaparecer');
    divElement.style.visibility = 'hidden';

    divElement = document.querySelector('.conteudoLateral__btn3');
    divElement.style.visibility = 'visible';
}

function limparCampo() {
    let text = document.querySelector('textarea');
    text.value = '';
}

function receberCriptografar() {
    let text = document.querySelector('textarea').value;
    exibirSaida(criptografia(text));
    limparCampo();
}

function receberDescriptografia() {
    let text = document.querySelector('textarea').value;
    exibirSaida(descriptografia(text));
    limparCampo();
}

function copiarText() {
    let copyText = document.getElementById("Copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
