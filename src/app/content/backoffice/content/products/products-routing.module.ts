import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';

const router: Route[] = [
  {
    path: '', 
    component: ProductsComponent
  },
  {
    path: ':id',
    component: OneProductComponent,
    data: {
      title: 'Products Page'
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ProductsRoutingModule { }
