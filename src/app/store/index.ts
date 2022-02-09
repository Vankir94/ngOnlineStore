import { EntityState } from '@ngrx/entity'
import { IProduct } from '../data'
import { cartReduser, ICartProduct } from './reducers/cart.redusers'
import productsReduser from './reducers/products.redusers'

export interface IState {
    products: IProduct[];
    cart: EntityState<ICartProduct>;
}

export const reducers = {
    products: productsReduser,
    cart: cartReduser
}