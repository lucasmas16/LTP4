"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(nome, idade, salario) {
        var _this = _super.call(this, nome, idade) || this;
        _this.salario = salario;
        return _this;
    }
    ;
    Empregado.prototype.mostraInformacao = function () {
        console.log("Nome: " + this.Nome + "\nIdade: " + this.Idade + "\nSalario: R$" + this.salario);
    };
    return Empregado;
}(Pessoa_1.Pessoa));
exports.Empregado = Empregado;
