import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
hideSideMenu= signal(true)
//Por medio de un input se puede comunicar el padre al hijo. un output seria la viceversa.
@Input({required:true}) cart: Product[]=[];

sideMenu(){
  this.hideSideMenu.update(prevState =>!prevState);
}
calcTotal(){
  this.cart.reduce((total,product)=>total+product.price,0)
}
}
