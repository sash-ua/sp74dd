import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {Order} from "../../shared/models/order.model";

import {OrdersState} from "./orders.model";
import {ordersQuery} from "./orders.selectors";
import {ordersActions} from "./orders.actions";
import {DictionaryNum} from "@ngrx/entity/src/models";

@Injectable()
export class OrdersStateFacade {
  readonly orders$: Observable<Order[]> = this.store.select(ordersQuery.orders);
  readonly isLoading$: Observable<boolean> = this.store.select(ordersQuery.isLoading);
  readonly favoriteIds$: Observable<DictionaryNum<boolean>> = this.store.select(ordersQuery.favoriteIds);
  readonly favorites$: Observable<Order[]> = this.store.select(ordersQuery.favorites);

  constructor(
    private readonly store: Store<OrdersState>
  ) {
  }

  fetchOrders(uid: string): void {
    this.store.dispatch(ordersActions.fetch({uid}));
  }

  addToFavorite(id: number): void {
    this.store.dispatch(ordersActions.addToFavorite({id}));
  }

  removeFromFavorite(id: number): void {
    this.store.dispatch(ordersActions.removeFromFavorite({id}));
  }
}
