import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http.get('http://localhost:3000/product');
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/product/'+id);
  }
  addProduct(data:any){
return this.http.post('http://localhost:3000/product/',data);
  }
  updateProduct(data:any,id:any){
return this.http.put('http://localhost:3000/product/'+id,data);
  }
}
