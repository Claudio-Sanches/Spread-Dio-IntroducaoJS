// Laboratório como foi proposto

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Acrescentado a utilização do addEvenListener em substituição do onclick e troca de cores

var currentNumberWrapperAdd = document.getElementById('currentNumberAdd');
var currentNumberAdd = 0;

const elementSub = document.getElementById("subtrairAdd");
elementSub.addEventListener("click", decrementAdd);

const elementAd = document.getElementById("adicionarAdd");
elementAd.addEventListener("click", incrementAdd);

function incrementAdd() {
    currentNumberAdd = currentNumberAdd + 1;
    if (currentNumberAdd >= 0) {
        currentNumberWrapperAdd.style.color = 'black'
        document.getElementById('boryAdd').style.backgroundColor = 'rgb(177, 255, 255)'
    }
    currentNumberWrapperAdd.innerHTML = currentNumberAdd;
}

function decrementAdd() {
    currentNumberAdd = currentNumberAdd - 1;
    if (currentNumberAdd < 0) {
        currentNumberWrapperAdd.style.color = 'red'
        document.getElementById('boryAdd').style.backgroundColor = "beige"
    }
    currentNumberWrapperAdd.innerHTML = currentNumberAdd;
}

// AcrescentadoLimitando o intervalo de 0 a 10

var currentNumberWrapperLim = document.getElementById('currentNumberLim');
var currentNumberLim = 0;

const elementSubLim = document.getElementById("subtrairLim");
elementSubLim.addEventListener("click", decrementLim);

const elementAdLim = document.getElementById("adicionarLim");
elementAdLim.addEventListener("click", incrementLim);

function incrementLim() {
    currentNumberLim = currentNumberLim + 1;
    if (currentNumberLim <= 10) {
        currentNumberWrapperLim.innerHTML = currentNumberLim;
    }
}

function decrementLim() {
    currentNumberLim = currentNumberLim - 1;
    if (currentNumberLim >= 0) {
        currentNumberWrapperLim.innerHTML = currentNumberLim;
    }

}

const elementAdiciona = document.getElementById("adiciona");
elementSubLim.addEventListener("click", adiciona);

function adiciona() {
    var table = document.getElementById("one");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<td><Input type='checkbox'></Input><td>";


}