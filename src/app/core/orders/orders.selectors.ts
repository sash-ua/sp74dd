import {createFeatureSelector, createSelector} from '@ngrx/store';

import {adapter} from "./orders.reducer";
import {OrdersState} from "./orders.model";
import {Order} from "../../shared/models/order.model";

const {selectAll, selectEntities} = adapter.getSelectors();
const ordersState = createFeatureSelector<OrdersState>('orders');

const orders = createSelector(ordersState, selectAll);
const entities = createSelector(ordersState, selectEntities);

const isLoading = createSelector(ordersState, (state) => state.isLoading);
const favoriteIds = createSelector(ordersState, (state) => state.favoriteIds);
const favorites = createSelector(
  entities,
  favoriteIds,
  (entities, favoriteIds): Order[] => Object.keys(favoriteIds).map((id) => entities[id])
);

export const ordersQuery = {
  orders,
  isLoading,

  favoriteIds,
  favorites,
}
