const formulario = document.getElementById('tarefa');
const destino = document.getElementById('saida');

formulario.onsubmit = function(c) {
    c.preventDefault();
    const textoEntrada = document.getElementById('texto');
    adicionaTexto(textoEntrada.value);
    formulario.reset();
}

function adicionaTexto(descricao) {
    const x = document.createElement('div');
    const y = document.createElement('input');
    const w = document.createElement('label');
    const k = document.createElement('input');
    const z = document.createTextNode(descricao);

    y.setAttribute('type', 'checkbox');
    y.setAttribute('name', descricao);
    y.setAttribute('id', descricao);

    w.setAttribute('for', descricao);
    w.setAttribute('id', descricao);
    w.appendChild(z);

    x.classList.add('saida-item');
    x.appendChild(y);
    x.appendChild(w);
    destino.appendChild(x);

    k.setAttribute('type', 'button');
    k.setAttribute('value', 'Elimina');
    k.setAttribute('id', descricao);
    k.setAttribute('onclick', 'elimina()');
    x.appendChild(k);
}

function elimina() {

}