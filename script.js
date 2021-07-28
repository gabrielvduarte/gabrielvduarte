import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1

contaCorrenteRicardo.deposito(100);
contaCorrenteRicardo.deposito(100);
contaCorrenteRicardo.deposito(100);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 102

console.log(contaCorrenteAlice)
contaCorrenteRicardo._transferir(50,contaCorrenteAlice)
console.log(contaCorrenteAlice )
console.log(contaCorrenteRicardo)