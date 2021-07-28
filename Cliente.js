export class Cliente{
    nome;
    _cpf;

    get cpf(){
        this._cpf
    }

    constructor(nome,cpf){
        this._cpf = cpf
        this.nome = nome
    }
}
