"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    ;
    Object.defineProperty(Pessoa.prototype, "Nome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "Idade", {
        get: function () {
            return this.idade;
        },
        enumerable: true,
        configurable: true
    });
    Pessoa.prototype.mostraInformacao = function () {
        console.log("Nome: " + this.nome + "\nIdade: " + this.idade);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
