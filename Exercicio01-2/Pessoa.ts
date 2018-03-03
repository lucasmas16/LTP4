export class Pessoa{
    constructor(private nome: string, private idade: number){};

    get Nome(): string{
        return this.nome;
    }
    get Idade(): number{
        return this.idade;
    }
    public mostraInformacao(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`);
    }
}