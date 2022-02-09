import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store';
import { decrimentProducInCart, incrimentProducInCart, removeProducFromCart } from 'src/app/store/actions/cart.action';
import { ICartProduct, selectProductInCart } from 'src/app/store/reducers/cart.redusers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$ = this.store.select(selectProductInCart);

  constructor(
    private store: Store<IState>
  ) { }

  ngOnInit(): void {
  }

  public incriment({_id}: ICartProduct): void{
    this.store.dispatch(incrimentProducInCart({id: _id}));
  }

  public decriment(product: ICartProduct): void{
    if (product.count === 1) {
      this.remove(product);
      return;
    }
    this.store.dispatch(decrimentProducInCart({id: product._id}));
  }

  public remove({_id}: ICartProduct): void{
    this.store.dispatch(removeProducFromCart({id: _id}));
  }

  public trackByFn(_index: number, item: ICartProduct): string {
    return item._id;
  }
}
