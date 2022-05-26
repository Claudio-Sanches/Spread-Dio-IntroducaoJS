// Solução 1
function verificaPalindromo(string) {
    if (!string) return "String inexistente";

    console.log(" === executando solução 1  ===")

    console.log(`O que esta sendo comparado ${string}`);

    console.log(" === aplicando split ===")
    console.log(string.split(""));
    console.log(" === aplicando split + reverse  ===")
    console.log(string.split("").reverse());
    console.log(" === aplicando split + reverse + join ===")
    console.log(string.split("").reverse().join(""));
    console.log(" === comparando ===")

    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("ama"), "\n");

// solução 2
// 
function verificaPalindromo2(string) {
    if (!string) return "String inexistente";

    console.log(" === executando solução 2  ===")
    console.log(`O que esta sendo comparado ${string}\n`);

    for (let i = 0; i < string.length / 2; i++) {
        console.log(`O caractere ${i} da string é ${string[i]}`);
        console.log(`O caractere ${string.length -1 -i} da string é ${string[string.length -1 -i]} \n`);
        if (string[i] !== string[string.length - 1 - i]) {
            console.log(" === comparando ===")
            return false;
        }
    }
    console.log(" === comparando ===")
    return true;
}

console.log(verificaPalindromo2("gato"));