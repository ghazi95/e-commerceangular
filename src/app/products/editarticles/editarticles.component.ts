import { Component } from '@angular/core';

import { Produit } from '../produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { data } from 'jquery';


@Component({
  selector: 'app-editarticles',
  templateUrl: './editarticles.component.html',
  styleUrls: ['./editarticles.component.css']
})
export class EditarticlesComponent {

  _id?:object;
produit: Produit = new Produit()

  constructor(private artserv:ArticlesService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['id'];
    this.artserv.getarticlebyid(this._id).subscribe((data)=>this.produit=data);
  }
  modifproduit(){
    this.artserv.putarticle(this._id,this.produit).subscribe(data=>this.router.navigate(['/productstab']))
  }

}
