import { IProduct } from '../data'
import productsReduser from './reducers/products.redusers'

export interface IState {
    products: IProduct[];
}

export const reducers = {
    products: productsReduser
}