import { createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/data";
import { removeProducFromCart } from "../actions/cart.action";

export interface ICartProduct extends IProduct {
    count: number;
}

export const cartAdapter= createEntityAdapter({
    selectId: (product: ICartProduct) => product._id
});

const initialState = cartAdapter.getInitialState();

const reducer = createReducer(initialState,
    on(removeProducFromCart, (state, {id}) => {
        return cartAdapter.removeOne(id, state);
    }),
    on(removeProducFromCart, (state, {id}) => {
        return cartAdapter.removeOne(id, state);
    }),
    );