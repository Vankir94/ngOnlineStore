import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/data';
import { ProductsService } from 'src/app/content/backoffice/content/products/products.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store';
import { getProducsPending } from 'src/app/store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public searchText = '';
  public onlyFavorites = false;
  public products$: Observable<IProduct[]> = this.store.select('products');

  constructor(
    // private productsService: ProductsService
    private store: Store<IState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(getProducsPending());
  }

  public search(value: string): void {
    this.searchText = value;
  }

  toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
