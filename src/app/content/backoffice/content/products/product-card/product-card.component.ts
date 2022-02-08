import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/data';
import { MadalService } from 'src/app/modal/madal.service';

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
    private madalService: MadalService
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
