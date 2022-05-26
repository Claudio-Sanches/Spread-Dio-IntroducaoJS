const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

let testeArray = [2, 4, 6, 7, 10, 12];

console.log('==== EXEMPLO APLICANDO MAP EM ARRAY + this ====');
console.log(`maca.value ==> ${maca.value} e laranja.value ==> ${laranja.value}`);
console.log(`array ==> ${testeArray}`);
console.log(`this é maça ${ mapComThis(testeArray, maca)}`);
console.log(`this é laranja ${ mapComThis(testeArray, laranja)}\n`);

function mapTeste(arra) {
    return arra.map(function(item) {
        return item * 2;
    });
}

const testeArray1 = [2, 4, 6, 8, 10];
console.log('==== EXEMPLO APLICANDO MAP EM ARRAY com valor 2 fixo na função ====');
console.log(`array ==> ${testeArray1}`);
console.log(mapTeste(testeArray1), "\n");

function filtraPares(arrayy) {
    return arrayy.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

let arrayTesteFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('==== EXEMPLO APLICANDO FILTER EM ARRAY EXTRAINDO NUMEROS PARES ====');
console.log(`array ==> ${arrayTesteFilter}`);
console.log(filtraPares(arrayTesteFilter), '\n');

function somaNumeros(ar) {
    return ar.reduce(function(prev, current) {
        console.log([prev]);
        console.log([current]);
        return prev + current;
    }, 0);
}

const arrayTestReduce = [1, 2, 3];
console.log('==== EXEMPLO APLICANDO REDUCE EM ARRAY ====');
console.log(`array ==> ${arrayTestReduce}`);
console.log(somaNumeros(arrayTestReduce), "\n");

const lista = [{
        name: 'Sabão em po',
        preco: 30,
    },
    {
        name: 'Toalha',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log('==== EXEMPLO APLICANDO REDUCE sobre Saldo Inicial e lista de produtos ====');
console.log(saldoDisponivel);
console.log(lista);
console.log(calculaSaldo(saldoDisponivel, lista));