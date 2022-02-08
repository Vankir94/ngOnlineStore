import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

const router: Route[] = [
  {
    path: "",
    component: BackofficeComponent,
    children: [
    {
      path: '',
        loadChildren: () => import('./content/products/products.module').then(mod => mod.ProductsModule)
    }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class BackofficeRoutingModule { }
