"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Empregado_1 = require("./Empregado");
var pessoa = new Pessoa_1.Pessoa("Jorge", 34);
var emprado = new Empregado_1.Empregado("Carlos", 45, 10000);
pessoa.mostraInformacao();
emprado.mostraInformacao();
