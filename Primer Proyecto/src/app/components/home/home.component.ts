import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
home: String = "Home";

// Criando um vetor(objeto) -  funciona como um ArrayList
public listaTarefas: String[] = ["Limpar a casa", "Tirar o lixo", "Estudar java"];

  constructor() { }

  ngOnInit(): void {
  }

}
