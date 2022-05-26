function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = {};

const usuarios = new Map();

usuarios.set('Luiz', "Admin");
usuarios.set('Stephany', "Admin");
usuarios.set('Jorge', "User");
usuarios.set('Maria', "Admin");

console.log('=== Exemplo de Map extraindo Admin cadastrado na chave ====')
console.log(`${getAdmins(usuarios)}`);
console.log(usuarios);
console.log(`o tamanho se dá com a sintaxe map.size = ${usuarios.size} \n`);


const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log('=== Exemplo de Set gerando um array com o tecnica spread  ====')
console.log(valoresUnicos(meuArray));