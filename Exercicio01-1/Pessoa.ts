export class Pessoa {
    constructor(private nome: string, private idade: number){};
    public mostraInformacao(){
        console.log(`${this.nome}\n${this.idade}`);
    }
}
var pessoa = new Pessoa("Lucas", 26)
pessoa.mostraInformacao();