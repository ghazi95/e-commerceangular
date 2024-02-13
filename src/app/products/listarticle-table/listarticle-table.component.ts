import { Component } from '@angular/core';
import{ArticlesService} from "../articles.service";
import { Produit } from '../produit';


@Component({
  selector: 'app-listarticle-table',
  templateUrl: './listarticle-table.component.html',
  styleUrls: ['./listarticle-table.component.css']
})
export class ListarticleTableComponent {
  tabproduit: Produit[] = [];
  constructor(private artserv:ArticlesService){}

  ngOnInit():void{
    this.listarticles()
    }
    
    listarticles(){
    this.artserv.getAllproduits().subscribe(
    (data:any)=>{
    this.tabproduit=data
    
    }
    )
    }
    DeleteArticle(id:any){
    this.artserv.deletearticle(id).subscribe(
    (res)=>{
    this.listarticles();
    })
    }
    
    }