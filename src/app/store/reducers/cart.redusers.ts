import { Actions } from "@ngrx/effects";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IProduct } from "src/app/data";
import { addProducToCart, decrimentProducInCart, incrimentProducInCart, removeProducFromCart } from "../actions/cart.action";

export interface ICartProduct extends IProduct {
    count: number;
}

export const cartAdapter = createEntityAdapter({
    selectId: (product: ICartProduct) => product._id
});

const initialState = cartAdapter.getInitialState();

const reducer = createReducer(initialState,
    on(addProducToCart, (state, {product}) => {
        const entity = state.entities[product._id] as ICartProduct;
        return cartAdapter.upsertOne({...product, count: entity ? ++entity.count : 1}, state);
    }),
    on(removeProducFromCart, (state, {id}) => {
        return cartAdapter.removeOne(id, state);
    }),
    on(incrimentProducInCart, (state, {id}) => {
        const entity = state.entities[id] as ICartProduct;
        return cartAdapter.updateOne({id, changes: {count: ++entity.count}}, state);
    }),
    on(decrimentProducInCart, (state, {id}) => {
        const entity = state.entities[id] as ICartProduct;
        return cartAdapter.updateOne({id, changes: {count: --entity.count}}, state);
    }),
    );


    export function cartReduser(state: EntityState<ICartProduct | undefined>, action: Action) {
        return reducer(state, action);
    }

    export const {selectAll} = cartAdapter.getSelectors();
    export const selectCart = createFeatureSelector<EntityState<ICartProduct>>('cart');

    export const selectProductInCart = createSelector(selectCart, selectAll);

    export const totalProducts = createSelector(selectProductInCart, (products: ICartProduct[]) => {
        return products.reduce((count, product) => {
            return (count += product.count);
        }, 0)
    })