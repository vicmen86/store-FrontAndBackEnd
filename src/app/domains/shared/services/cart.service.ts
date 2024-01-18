import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';
//Los servicios son destinados para logica de datos. En este caso este servicio funciona como una store para solucionar el propdrilling
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=signal<Product[]>([])
  total=computed(() => {
    const cart = this.cart()
    return cart.reduce((total,product)=>total+product.price,0);
  })

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state=>[...state, product])
  }
}
