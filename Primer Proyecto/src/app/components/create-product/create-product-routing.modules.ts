import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  {path: '', component: CreateProductComponent}
  // caso tivesse filhos estaria aqui
  // {path: 'filho', component: HomeFilhoComponent}
];

// Principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductRoutingModule { }