import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products=signal<Product[]>([])
categories=signal<Category[]>([])
//cart=signal<Product[]>([]) Esto ya no es necesario porque ahora se delega la responsabilidad a CarService
private cartService= inject(CartService);
private productService= inject(ProductService);
private categoryService= inject(CategoryService);
@Input() category_id?:string;

/* constructor(){//inicializamos las variables
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
} */
//Ya no necesitariamos el constructor pq los productos se obienen en su servicio especificado

ngOnChanges(changes: SimpleChanges){//metodo de angular que monitorea si hay cambios en la app
 // console.log(this.category_id);
 //const category_id= changes['category_id']
 //if(category_id){
  this.getProducts()
 //}
}

ngOnInit() {
 // this.getProducts();
  this.getCategories();
}
addToCart(product: Product){
  //this.cart.update(prevState => [...prevState, product])
  this.cartService.addToCart(product)
}
private getProducts(){
  this.productService.getProducts(this.category_id)
  .subscribe({
    next: (products) =>{this.products.set(products)},
    error: () =>{}
  })
}
private getCategories(){
  this.categoryService.getAllCategories()
  .subscribe({
    next: (data) =>{this.categories.set(data)},
    error: () =>{}
  })
}

}
