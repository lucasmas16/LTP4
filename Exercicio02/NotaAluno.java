package exercicios;

import java.util.Scanner;

public class NotaAluno {

	public static void main(String[] args) {

		Scanner leia = new Scanner(System.in);
		
		float nota, soma=0;
		int contNota=1;
		
		
		soma = 0;
		contNota = 0;
		while(contNota<3){
			System.out.print("Digite a nota "+(contNota+1)+": ");
			nota = leia.nextFloat();
			while (nota<0) {
				System.out.println("NOTA INVALIDA!!!");
				System.out.print("Digite a nota "+(contNota+1)+": ");
				nota = leia.nextFloat();
				
			}
			soma += nota;
			contNota++;
			
		};
		System.out.println("O aluno teve um total de: "+soma);

		leia.close();

	}

}
