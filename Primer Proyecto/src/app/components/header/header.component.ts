import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Atributos
  public titulo: String = 'CRUD de Produtos';
  public btnCadastrar: String = 'Cadastrar Produto';
  public btnInicio: String = 'Início';



  constructor() { }

  ngOnInit(): void {
  }

}
