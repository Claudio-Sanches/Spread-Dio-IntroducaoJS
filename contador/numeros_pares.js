function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} Esses não são números par`);
        }
    }
    console.log('Os numeros pares são : ', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);