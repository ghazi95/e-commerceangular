import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticlesComponent } from './createarticles/createarticles.component';
import { EditarticlesComponent } from './editarticles/editarticles.component';
import { ListarticleTableComponent } from './listarticle-table/listarticle-table.component';
import { ArticleCardComponent } from './article-card/article-card.component';

const routes: Routes = [

  {path:'products',component:ListarticlesComponent},
  {path:'productstab',component:ListarticleTableComponent},
  {path:'create-Produit',component:CreatearticlesComponent},
  {path:'editarticle/:id',component:EditarticlesComponent},
  {path:'article-card',component:ArticleCardComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
