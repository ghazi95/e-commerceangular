import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class ScategorieService {
url="http://localhost:3001/api/scategories"
constructor(private http:HttpClient) { }
getscategories(){
return this.http.get(this.url)
}
}