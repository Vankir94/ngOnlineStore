import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from './products.service';
import { OneProductComponent } from './one-product/one-product.component';
import { RouterModule } from '@angular/router';
import { ProductResolverService } from './one-product/product-resolver.service';
import { CardConfirmComponent } from './product-card/card-confirm/card-confirm.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
    CardConfirmComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    ProductsService,
    ProductResolverService
  ]
})
export class ProductsModule { }
