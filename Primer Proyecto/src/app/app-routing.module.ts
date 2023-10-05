import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomeComponent } from './components/home/home.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - Objeto de rota
  // 1 - zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  
  // 2 - criar a rota da Home
  // defino rota e defino componente
  {path: 'home',
    loadChildren: () => 
    import('./components/home/home.module').then((m) => m.HomeModule)
  },

  // Criar rota de Cadastro de Produto
  {
    path: 'create-product',
    loadChildren: () =>
      import('./components/create-product/create-product.module').then(
        (m) => m.CreateProductModule
      ),
  },
];

// Principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
