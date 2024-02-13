import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoriesComponent } from './createcategories/createcategories.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { ScategoriesComponent } from './scategories/scategories.component';


@NgModule({
  declarations: [
    ListcategoriesComponent,
    CreatecategoriesComponent,
    EditcategoriesComponent,
    ScategoriesComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
