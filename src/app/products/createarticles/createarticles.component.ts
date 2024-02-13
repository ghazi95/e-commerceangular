import { Component } from '@angular/core';
import { Produit } from '../produit';
import { ArticlesService } from '../articles.service';
import { data } from 'jquery';

@Component({
  selector: 'app-createarticles',
  templateUrl: './createarticles.component.html',
  styleUrls: ['./createarticles.component.css']
})
export class CreatearticlesComponent {
produit:Produit=new Produit()
constructor(private prodserv:ArticlesService){}
sauvegarder(){
this.prodserv.postarticle(this.produit).subscribe((data)=>console.log("insertion effectuée avec succées"))
}
}

