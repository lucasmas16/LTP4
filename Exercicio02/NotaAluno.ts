class NotaAluno{
    public static nota: number = 0;
    public static soma: number = 0;
    public static contNota: number = 1;
    public static main(): void{
        this.soma = 0;
        this.contNota = 0;
        while(this.contNota < 3){
            let aux = prompt("Digite a nota ") + "";
            this.nota = parseFloat(aux);
            while(this.nota < 0){
                alert("Nota Inválida");
                this.nota = parseFloat(prompt('Digite a nota ')+"");
            }
            this.soma += this.nota;
            this.contNota++;
        }
        alert(`O aluno teve um total de: ${this.soma}`);
    }
    
}
NotaAluno.main();