import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl="http://localhost:3001/api/articles";

  constructor(private http:HttpClient) { }


  getAllproduits():Observable<any> {
    return this.http.get(this.apiUrl)

  }
  postarticle(art:Produit){
    return this.http.post(this.apiUrl,art)

  }
  putarticle(id:any,art:Produit){
    return this.http.put(this.apiUrl + "/" + id,art)

  }
  deletearticle(id:any){
    return this.http.delete(this.apiUrl + "/" + id)

  }
  getarticlebyid(id:any):Observable<any> {
    return this.http.get(this.apiUrl + "/" + id)
    
  }
}
