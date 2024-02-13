import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticlesComponent } from './createarticles/createarticles.component';
import { EditarticlesComponent } from './editarticles/editarticles.component';
import { ListarticleTableComponent } from './listarticle-table/listarticle-table.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [
    ListarticlesComponent,
    CreatearticlesComponent,
    EditarticlesComponent,
    ListarticleTableComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class ProductsModule { }
