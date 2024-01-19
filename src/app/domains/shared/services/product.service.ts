import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http= inject(HttpClient); //solo podemos inyectar esta dependencia si solo configuramos app.config- Esto nos pérmite hacer un http request
  constructor() { }

  getProducts(category_id?:string){
    const url = new URL('https://api.escuelajs.co/api/v1/products')
    if (category_id){
      url.searchParams.set('categoryId', category_id)
    }
    return this.http.get<Product[]>(url.toString());
  }
  getOneProduct(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

}
