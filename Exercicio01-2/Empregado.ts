import {Pessoa} from './Pessoa'
export default class Empregado extends Pessoa{
    constructor(nome: string, idade: number, private salario: number){
        super(nome, idade);
    };
    public mostraInformacao(){
        console.log(`Nome: ${this.Nome}\nIdade: ${this.Idade}\nSalario: R$${this.salario}`);
    }
}