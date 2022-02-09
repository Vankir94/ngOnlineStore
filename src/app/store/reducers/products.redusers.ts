import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/data";
import { getProducsSuccess } from "../actions/products.action";

const initialState: IProduct[] = [];

export const scoreboardReducer = createReducer(
    initialState,
    on(getProducsSuccess, (_state, action) => {
        return action.products
    }),
    // on(getProducsPending, (_state) => {
    //     return {
    //         ..._state,
    //         loading: true
    //     };
    // }),
);

export default function reducer(state: any, action: Action): any {
    return scoreboardReducer(state, action);
}

