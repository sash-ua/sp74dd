import {createAction, props} from '@ngrx/store';

import {OrdersAction} from "./orders.enum";
import {Order} from "../../shared/models/order.model";
import {PatientsAction} from "../patients/patients.enum";

export const fetch = createAction(
  OrdersAction.Fetch,
  props<{ uid: string }>()
);
export const fetchSuccess = createAction(
  OrdersAction.FetchSuccess,
  props<{ orders: Order[] }>()
);
export const fetchError = createAction(
  OrdersAction.FetchSError,
  props<{ error: string }>()
);
export const addToFavorite = createAction(
  OrdersAction.AddToFavorite,
  props<{ id: number }>()
);
export const removeFromFavorite = createAction(
  OrdersAction.RemoveFromFavorite,
  props<{ id: number }>()
);

export const ordersActions = {
  fetch,
  fetchSuccess,
  fetchError,

  addToFavorite,
  removeFromFavorite,
};
