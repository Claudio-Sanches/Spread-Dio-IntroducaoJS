function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}
const pessoa2 = {
    nome: "Carla",
    idade: 26,
}
const animal = {
    nome: "Fiona",
    idade: 5,
    raca: 'Pug',
}

console.log("=== Executando com Call \n")
console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.call(pessoa2, 40));
console.log(`${calculaIdade.call(animal, 7)}\n`);

console.log("=== Executando com apply \n")

console.log(calculaIdade.apply(pessoa1, [30]));
console.log(calculaIdade.apply(pessoa2, [40]));
console.log(`${calculaIdade.apply(animal, [7])} \n`);