import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }
    
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        };
    };

    deposito(valor) {
        if (valor <= 0){
            return;   
        }else{
            this._saldo += valor;
        }
    };
    _transferir(valor,conta){

        const valorSacado = this.sacar(valor);
        conta.deposito(valorSacado)
    }
}