import { Routes } from '@angular/router';
//import {ListComponent} from './domains/products/pages/list/list.component'
//import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {//Vistas anidadas
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(c=>c.ListComponent),
      },
      {
        path:'about',
        loadComponent: () => import('./domains/info/pages/about/about.component')
      },
      {
        path:'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').then(c=>c.ProductDetailComponent)
      },
      {
    path:'**',//esta es la ruta que ingresara si la ruta es invalida.
    component:NotFoundComponent
      }
    ]
  },


];
