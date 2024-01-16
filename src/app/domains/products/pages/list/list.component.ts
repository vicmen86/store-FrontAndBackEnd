import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products=signal<Product[]>([])
cart=signal<Product[]>([])

constructor(){//inicializamos las variables
const initProducts:Product[]=[
  {
    id:Date.now(),
    title: 'Product 1',
    price: 100,
    image: 'http://picsum.photos/640/640?r=23',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 2',
    price: 130,
    image: 'http://picsum.photos/640/640?r=12',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 3',
    price: 50,
    image: 'http://picsum.photos/640/640?r=112',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 4',
    price: 80,
    image: 'http://picsum.photos/640/640?r=212',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 5',
    price: 140,
    image: 'http://picsum.photos/640/640?r=132',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 6',
    price: 150,
    image: 'http://picsum.photos/640/640?r=13',
    creationAt: new Date().toISOString(),
  },
  {
    id:Date.now(),
    title: 'Product 7',
    price: 10,
    image: 'http://picsum.photos/640/640?r=2',
    creationAt: new Date().toISOString(),
  },
];
this.products.set(initProducts)
}

addToCart(product: Product){
  this.cart.update(prevState => [...prevState, product])
}
}
