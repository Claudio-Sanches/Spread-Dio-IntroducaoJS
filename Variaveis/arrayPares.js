function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0 ...`)
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(`Para o array ${arr} trocamos os parares por 0 e ficou == ${substituiPares(arr)} \n`);
let arr1 = [];
console.log(`Para o array ${arr1} de tamanho ${arr1.length} trocamos os parares por 0 e ficou == ${substituiPares(arr1)}`);
let arr2 = false;
console.log(`Para o array ${arr2} de tamanho ${arr2.length} trocamos os parares por 0 e ficou == ${substituiPares(arr2)}`);
let arr3 = undefinied;
console.log(`Para o array ${arr3} de tamanho ${arr3.length} trocamos os parares por 0 e ficou == ${substituiPares(arr3)}`);