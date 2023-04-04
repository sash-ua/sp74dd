import {EntityState} from "@ngrx/entity";
import {Order} from "../../shared/models/order.model";
import {DictionaryNum} from "@ngrx/entity/src/models";

export interface OrdersResponse {
  count: number;
  order: Order[];
}

export interface OrdersState extends EntityState<Order> {
  isLoading: boolean;
  error: string;
  favoriteIds: DictionaryNum<boolean>;
}
