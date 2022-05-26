// Função Soma com typescript informando insconsistências quando aplicado String no chamado

function soma(a: number, b:number){
    return a + b;
}
soma(1,2); // valida
// soma('1', '2') // inválida

// Type e Interfaces

// Interface - contratos e classes

// Exemplo da criação do interface IAnimal e extensão IFelino, uma vez acrescentado o executarRugido, 
// passou a ser obrigatório em todas as const criadas.

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'Aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

// O type pode ser usado de forma análoga à interfeca, mas não é utilizado para esse fim!!
/*
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'Aquático';
    executarRugido(alturaEmDecibeis: number): void;
}*/

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal= {
 nome: "elefante",
 tipo: "terrestre", // "voador" não aceita por não estar pre-definido
 executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
}

animal.executarRugido(10);

const felino: IFelino={
nome:'Leão',
tipo:'terrestre',
visaoNoturna: true,
executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
}

// Exemplo da utilização do type para merge em códigos

interface IAnimalType{
    nome: string;
    tipo: 'terrestre' | 'Aquático';
    domestico: boolean;
}

interface IFelinoType extends IAnimalType{
    visaoNoturna: boolean;
}

interface ICaninoType extends IAnimalType{
    porte: 'pequeno' | 'médio' | 'grande';
}

type TDomesticoType = IFelinoType | ICaninoType;

const criatura : TDomesticoType = {
    domestico: true,
    nome: 'cachorro',
    porte: "pequeno",
    tipo: "terrestre",    
}

// Somando ao invés de selecionar um ou outro

type TDomesticoType1 = IFelinoType & ICaninoType;

const criatura1 : TDomesticoType1 = {
    domestico: true,
    nome: 'cachorro',
    porte: "pequeno",
    tipo: "terrestre",    
    visaoNoturna: true,
}

// Tratando TAG Input para identificar o input usar ==== HTMLInputElement ====

// "Criar" o elemento que será extraido através de  document.getElementById('input')
// depois aplicar as HTMLInputElement

const input = document.getElementById('input') as HTMLInputElement;

// exemplo para validar a função

//input.addEventListener('input', (event) => {
//    console.log('Digitei');
//});

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

// Generics Type

// como boas práticas a identificação do não sei o que será recebido é == T ==
// function adicionaApendiceALista <NaoSei> (array: any[], valor: NaoSei){
// function adicionaApendiceALista <T> (array: any[], valor: T){

// Utilizado para receber API que não se sabe o que === será recebido ===

// na função está se fazendo uma soma onde não se aplica para String

function adicionaApendiceALista <T> (array: any[], valor: T){
    return array.map(item => item + valor);
};
adicionaApendiceALista([1,2,3],1);

// na função está se trando apenas String´s, substituindo o valor em toda a string

function adicionaApendiceAListaTexto <T> (array: T[], valor: T){
    return array.map(() => valor);
};
adicionaApendiceAListaTexto(['a','b','c'],'c');

// condicionais a partir de parâmetros

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if ('cargo' in usuario){
        // redirecionar para área de administração;
    }

    // redirecionar para área dO usuário;
}

// Utilizando ? para variáveis opcionais é a forma de se declarar que a variável é opcional na função

interface IUsuarioOpcional {
    id: string;
    email: string;
}

interface IAdminOpcional extends IUsuarioOpcional {
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecioneOpcional (usuario: IUsuarioOpcional | IAdminOpcional){
    if ('cargo' in usuario){
        // redirecionar para área de administração;
    }

    // redirecionar para área dO usuário;
}

// Variáveis com Propriedade ReadOnly e private

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14,
}

// criando uma classe com get e setter e transformando em apenas readonly na live não foi testado e não
// deu certo, está sendo alterado!!!!

type cachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]: Cachorro[k]
}

// para eliminar a variável opcional adiciona-se como boas práticas:
// + readonly .... Cachorro]-? tornando obrigatória sua invocação

// type cachorroSomenteLeitura = {
//    +readonly [k in keyof Cachorro]-?: Cachorro[k]
// }

class meuCachorroClass implements cachorroSomenteLeitura{
    idade;
    nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new meuCachorroClass('Apolo',14);
cao.idade=8;

console.log(cao);

// Importação de bibliotecas....

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova função');
    }
});

$('body').novaFuncao();

// Utilizando o Omit

interface PessoaOmit{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<PessoaOmit, 'nacionalidade'>{
}

const argentino: Brasileiro = {
    nome: 'Maradona',
    idade: 60,
}



