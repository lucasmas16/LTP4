"use strict";
var NotaAluno = /** @class */ (function () {
    function NotaAluno() {
    }
    NotaAluno.main = function () {
        this.soma = 0;
        this.contNota = 0;
        while (this.contNota < 3) {
            var aux = prompt("Digite a nota ") + "";
            this.nota = parseFloat(aux);
            while (this.nota < 0) {
                alert("Nota Inválida");
                this.nota = parseFloat(prompt('Digite a nota ') + "");
            }
            this.soma += this.nota;
            this.contNota++;
        }
        alert("O aluno teve um total de: " + this.soma);
    };
    NotaAluno.nota = 0;
    NotaAluno.soma = 0;
    NotaAluno.contNota = 1;
    return NotaAluno;
}());
NotaAluno.main();
