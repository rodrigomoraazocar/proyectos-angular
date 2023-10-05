import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import { CreateProductRoutingModule } from './create-product-routing.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';



@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
  ]
})
export class CreateProductModule { }
