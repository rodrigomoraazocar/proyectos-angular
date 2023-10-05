import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Meu Primeiro Projeto ';
  private name: String;

  // caso o atributo for privado o HTML não consegue acessar.
  public titulo: String = 'Olá pessoas';

  // É uma função específica do Angular
  // ela carrega primeiro ao carregar a tela
  ngOnInit(): void {
    // imprime a mensagem no console do navegador ao carregar a página
    console.log('Hello World');
    this.calculateAvarage([9, 9, 10]);
    this.verifyString('devs2blu');
    this.calculateInterest(500, 2.5, 12);
    this.countVowelsAndConsonants('aeioufghjk');
  }


  // criar função
  buttonClicked(): void {
    const variable: number = 10;
    const text: String = "texto";


    console.log("O botão foi clicado!")
  }

  // Calcular média
  calculateAvarage(numbers: number[]): void {
    let sum: number = 0;

    numbers.map((i) => {
      sum += i;
    });

    const average: number = sum / numbers.length;
    console.log('Média = '+ average);
  }

  // Manipulação de Strings
  verifyString(value: String): void {

    if (value === 'devs2blu') {
      console.log(value.length + " caracteres são iguais a devs2toblu")
    } else {
      console.log(value.length + " caracteres não são iguais a devs2toblu")
    }
  }

  // Cálculo de Juros
  calculateInterest(value: number, interest: number, months: number): void {
    const decimalInterest: number = interest / 100;
    const n: number = 12; // Juros compostos mensalmente, você pode ajustar conforme necessário.
    const t: number = months / 12; // Converter para anos

    const total: number = value * Math.pow(1 + decimalInterest / n, n * t);

    console.log("O montante total após "+ months +" meses é igual a "+total );
  }

  countVowelsAndConsonants(value: String): void {
    let totalVowels: number = 0;
    let totalConsonants: number = 0;

    for (let i= 0; i < value.length; i++) {
      let letter = value.charAt(i);

      if (letter.match(/[aeiouAEIOU]/)) {
        totalVowels++;
      } else if (letter.match(/[a-zA-Z]/)) {
        totalConsonants++;
      }

    }

    console.log("Total vogais = "+ totalVowels +" e Total consoantes = "+ totalConsonants);
  }
}
