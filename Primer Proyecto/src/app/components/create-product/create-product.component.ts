import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  // Atributos
  createProduct: String = "Cadastrar Produto";
  // Array que vai ser percorrido pelo ngFor
  public listTypes: string[] = ['SNACK', 'DRINK', 'DESSERT'];

  // Declara o formulário - tipo FormGroup
  public formProduct: FormGroup

  // trabalhando com diretivas
  public show: boolean = true;

  // Autowired 
  // Injetando bibliotecas
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // chamar a função para execultar
    this.createForm();
  }

  // Começa o formulário dente do typescript
  // Criar (constroi) uma função que cria o formulário
  private createForm() {

    // 1- chamar o atributo do formulário
    // 2- construir os atributos do formulário
    this.formProduct = this.formBuilder.group({
      // inputs(atributos) do nosso formulário
      name: '',
      description: '',
      code: '',
      costPrice: '',
      salePrice: '',
      preparationTime: '',
      productType: '',
    });

  }

  sendForm() {
    // ver dados que foram preenchidos
    console.log(this.formProduct.value);
  }

  hideTestNgIf() {
    if ( this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
    
  }

}
