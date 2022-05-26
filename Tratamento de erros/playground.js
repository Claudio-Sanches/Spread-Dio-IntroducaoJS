function arrayNumber(arr, number) {
    try {
        if (!arr && !number) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== "object") throw new TypeError("Array precisa ser tipo object");

        if (typeof number !== 'number') throw new TypeError("Numero precisa ser do tipo number");

        if (arr.length !== number) throw new RangeError("Tamanho do array inválido!");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
            /*console.log(e.name);
            console.log(e.stack);*/
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
            /*console.log(e.name);
            console.log(e.stack);*/
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
            /*console.log(e.name);
            console.log(e.stack);*/
        } else {
            console.log("Tipo de erro não esperado : ", e);
        }
    }
}

console.log(" == Criando testes - Função deve conter array e seu número de elementos \n")

console.log(" === Teste da função executando sem parâmetros ====")
console.log(arrayNumber(), "\n");

console.log(" === Teste da função enviando 2 números ====")
console.log(arrayNumber(5, 5), "\n");

console.log(" === Teste da função enviando array vazio e 1 string ====")
console.log(arrayNumber([], 'A'), "\n");

console.log(" === Teste da função enviando array vazio e numero 5 ====")
console.log(arrayNumber([], 5), "\n");

console.log(" === Teste da função enviando array [1,2,3,4,5] e numero 5 ====")
console.log(arrayNumber([1, 2, 3, 4, 5], 5), "\n");