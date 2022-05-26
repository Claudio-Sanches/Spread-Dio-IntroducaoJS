var compara = "";
var resultado1 = "";
var resultado2 = "";
var soma = 0;

function operacao(a, b) {
    soma = a + b;
    if (a === b) {
        compara = 'são iguais';
    } else {
        compara = 'não são iguais';
    }
    if (soma > 10) {
        resultado1 = 'Maior que 10';
    } else {
        resultado1 = 'Menor que 10';
    }
    if (soma > 20) {
        resultado2 = 'Maior que 20';
    } else {
        resultado2 = 'Menor que 20';
    }
    console.log('Input : ', a, " ", b);

    console.log('Output : Os números ', a, ' e ', b, compara, '. Sua soma é ', soma, ', que é ', resultado1, ' e ', resultado2, '.')
}

operacao(1, 2);