import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from 'src/app/content/backoffice/content/products/products.service';
import { getProducsPending, getProducsSuccess } from '../actions/products.action';

@Injectable()
export class ProductsEffects {

    getProducts$ = createEffect(() => this.actions$.pipe(
        ofType(getProducsPending),
        mergeMap(() => this.productsService.getProducts()
            .pipe(
                map(products => getProducsSuccess({products})),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) { }
}