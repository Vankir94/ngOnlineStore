import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartProduct } from 'src/app/store/reducers/cart.redusers';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input()
  public product!: ICartProduct;

  @Output()
  public remove: EventEmitter<any> = new EventEmitter(true);

  @Output()
  public incriment: EventEmitter<any> = new EventEmitter(true);
  
  @Output()
  public decriment: EventEmitter<any> = new EventEmitter(true);
  constructor() { }

  ngOnInit(): void {
  }

}
