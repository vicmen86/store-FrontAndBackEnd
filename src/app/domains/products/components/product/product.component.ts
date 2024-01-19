import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
image='https://picsum.photos/640/640?r='+Math.random();
@Input({required:true}) product!: Product;

//se remplazo en la linea anterior porque es mejor enviar todo de uno para que sea mas dinamico
/* @Input() img:string ='';
@Input({required:true}) title:string ='';
@Input() price:number =0;*/

@Output() addToCart = new EventEmitter();

addToCartHandler(){
console.log('click from child');
this.addToCart.emit(this.product)
}
}
