import {Pessoa} from './Pessoa'
export class Empregado extends Pessoa{
    private salario: number;
    constructor(nome: string, idade: number, salario: number){
        super(nome, idade);
        this.salario = salario;
    };
    public mostraInformacao(){
        console.log(`Nome: ${this.Nome}\nIdade: ${this.Idade}\nSalario: R$${this.salario}`);
    }
}