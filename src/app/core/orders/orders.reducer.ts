import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter} from "@ngrx/entity";

import {OrdersState} from "./orders.model";
import {ordersActions} from "./orders.actions";
import {Order} from "../../shared/models/order.model";

const defaultState = {
  isLoading: false,
  error: '',
  favoriteIds: {},
};
export const adapter = createEntityAdapter<Order>({
  selectId: (order: Order) => order.identifier
});
const initialState: OrdersState = adapter.getInitialState(defaultState);

const reducer = createReducer(
  initialState,
  on(
    ordersActions.fetch, (state) => ({...state, isLoading: true})
  ),
  on(
    ordersActions.fetchError, (state, {error}) => ({...state, isLoading: false, error})
  ),
  on(
    ordersActions.fetchSuccess, (state, {orders}) => ({...adapter.addMany(orders, state), isLoading: false})
  ),
  on(
    ordersActions.addToFavorite, (state, {id}) => ({...state, favoriteIds: {...state.favoriteIds, [id]: true}})
  ),
  on(
    ordersActions.removeFromFavorite, (state, {id}) => {
      const {[id]: value, ...favoriteIds} = state.favoriteIds;
      return {
        ...state,
        favoriteIds,
      }
    }
  ),
);

export function ordersReducer(
  state: OrdersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
