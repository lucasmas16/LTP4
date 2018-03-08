import Empregado from './Empregado'
export default class Diretoria extends Empregado{
    constructor(nome: string, idade: number, salario: number, private setor: number){
        super(nome, idade, salario);
    }
    public mostraInformacao(){
        super.mostraInformacao();
        console.log(`\nSetor: ${this.setor}`);
    }
}