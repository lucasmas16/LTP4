"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    ;
    Pessoa.prototype.MostraInformacao = function () {
        console.log(this.nome + "\n" + this.idade);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = new Pessoa("Lucas", 26);
pessoa.MostraInformacao();
