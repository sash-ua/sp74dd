import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";

import {ordersActions} from "./orders.actions";
import {OrdersApiService} from "./orders.api.service";
import {of} from "rxjs";

@Injectable()
export class OrdersEffects {
  readonly fetchAll$ = createEffect(() => this.actions$.pipe(
    ofType(ordersActions.fetch),
    switchMap((action) => this.ordersApiService.fetchAll(action.uid).pipe(
      map(({order}) => ordersActions.fetchSuccess({orders: order})),
      catchError((error) => of(ordersActions.fetchError({error: error.message})))
    ))
  ))

  constructor(
    private actions$: Actions,
    private ordersApiService: OrdersApiService,
  ) {
  }
}
