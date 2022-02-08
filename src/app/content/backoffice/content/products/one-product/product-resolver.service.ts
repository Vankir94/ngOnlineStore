import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of, pluck } from 'rxjs';
import { IProduct } from 'src/app/data';
import { ProductsService } from '../products.service';

@Injectable()
export class ProductResolverService implements Resolve<IProduct | null>{

  constructor(
    private http: HttpClient,
    private router: Router,
    private productsService: ProductsService
  ) { }

  public resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
    ): Observable<IProduct | null> {
      const id = route.paramMap.get('id');
      return this.http.get<IProduct>(`/products/${id}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }
}
