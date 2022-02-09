import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/data';
import { MadalService } from 'src/app/modal/madal.service';
import { IState } from 'src/app/store';
import { addProducToCart } from 'src/app/store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public myWidth = 250;

  @Input()
  public product!: IProduct;

  constructor(
    private madalService: MadalService,
    private store: Store<IState>
  ) { }

  ngOnInit(): void {
  }

  public toggleFavorite(product: IProduct): void {
    product.isFavorite = !product.isFavorite;
  }

  public test() {
    console.log('test');
  }

  public async addToCard(event: any): Promise<any>{
    console.log('addToCard');
    const {CardConfirmComponent} = await import('./card-confirm/card-confirm.component');
    this.madalService.open({
      component: CardConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('Save');
          this.store.dispatch(addProducToCart({product: this.product}));
          this.madalService.close();
        },
        close: () => {
          console.log('Close');
          this.madalService.close();
        }
      }
    });
  }
}
