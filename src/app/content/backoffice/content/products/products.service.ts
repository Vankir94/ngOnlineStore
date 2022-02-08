import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pluck } from 'rxjs';
import { IProduct, products$ } from '../../../../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getProducts(): Observable<IProduct[]>{
    return products$
    .pipe(
      pluck('products')
    );
  }

  public getProductsHttp(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      catchError((e) => {
        console.log(e);
        return [];
      })
    )
  }
}
