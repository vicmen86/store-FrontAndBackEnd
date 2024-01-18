import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http= inject(HttpClient); //solo podemos inyectar esta dependencia si solo configuramos app.config- Esto nos pérmite hacer un http request
  constructor() { }

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
