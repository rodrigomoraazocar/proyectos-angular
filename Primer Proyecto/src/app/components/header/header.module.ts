import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';



// Modulo importar bibliotecas dentro do modulo
// e essas bibliotecas serão utilizadas pelos
// componentes que foram declarados

// Meu modulo pode ter vários componentes
// mas aqui vamos trabalhar com apenas um
@NgModule({
  // Modulo declara componentes ao quai estão no escopo
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  // Exportar o componente para ser visto  por outros
  // componentes - private para publico
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
