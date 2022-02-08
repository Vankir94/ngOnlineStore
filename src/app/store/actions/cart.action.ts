import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/data';

export const addProducToCart = createAction(
    '[Cart] Add product to cart',
    props<{product: IProduct}>()
);

export const removeProducFromCart = createAction(
    '[Cart] Remove product from cart',
    props<{ id: string }>()
);

export const incrimentProducInCart = createAction(
    '[Cart] Incriment product in cart',
    props<{ id: string }>()
);

export const DecrimentProducInCart = createAction(
    '[Cart] Decriment product in cart',
    props<{ id: string }>()
);