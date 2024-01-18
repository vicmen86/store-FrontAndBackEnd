import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
hideSideMenu= signal(true)
//Por medio de un input se puede comunicar el padre al hijo. un output seria la viceversa.
/* @Input({required:true}) cart: Product[]=[]; *///esta line es remplazado por el manejador de estado store
private cartService=inject(CartService)
//total=signal(0) Tambien es remplazado por la store paraque solo el componente se encargue de renderizar
cart=this.cartService.cart;
total=this.cartService.total;

sideMenu(){
  this.hideSideMenu.update(prevState =>!prevState);
}
//
/* ngOnChanges(changes: SimpleChanges){
  const cart = changes['cart'];
  if(cart)this.total.set(this.calcTotal());
}
//Este metodo no es recomendable llamarlo desde el template, por lo cual lo procesamos desde ngonchange() y el template accede a la varible signal
calcTotal(){
  return this.cart.reduce((total,product)=>total+product.price,0)
} */

}
