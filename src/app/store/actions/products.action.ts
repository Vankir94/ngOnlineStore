import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/data';

export const getProducsPending = createAction(
    '[Products] Get products pending'
);

export const getProducsSuccess = createAction(
    '[Products] Get products success',
    props<{ products: IProduct[] }>()
);

export const getProducsError = createAction(
    '[Products] Get products error'
);