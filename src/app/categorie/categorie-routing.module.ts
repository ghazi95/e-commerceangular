import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { EditarticlesComponent } from '../products/editarticles/editarticles.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { CreatecategoriesComponent } from './createcategories/createcategories.component';
import { ScategoriesComponent } from './scategories/scategories.component';

const routes: Routes = [
  {path:"categorie/listcat",component:ListcategoriesComponent},
  {path:"scategorie/listcat",component:ScategoriesComponent},
  {path:"categorie/creatcat",component:CreatecategoriesComponent},
  {path:"categorie/editcat",component:EditcategoriesComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
