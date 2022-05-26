// Laboratório sobre Orientação a objetos
// Após carregar o html no navegador - executar ativando f12 - Console
// const minhaConta = new ContaCorrente(1, 234, true)
// minhaConta.saldo
// minhaConta.depositar(1000)
// minhaConta.sacar(500)
// minhaConta.sacar(600) - testando - Operação Inválida!!!!!
// const contaPoup = new ContaPoupanca(1, 22)
// const contaUni = new ContaUniversitaria(1, 22)
// contaUni.depositar(1000)
// contaUni.sacar(550) - Testando - Operação Inválida !!!!!


class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operacao negada";
        }

        this._saldo = this._saldo - valor;

        return this._saldo;

    }
}