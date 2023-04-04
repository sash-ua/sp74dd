import {Component, ChangeDetectionStrategy} from "@angular/core";

import {OrdersStateFacade} from "../../../core/orders/orders.facade";
import {TableColumn} from "../../../shared/models/table-column.model";
import {ORDERS_TABLE_CONFIG} from "../constants/orders-table-config";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  readonly tableConfig: TableColumn[] = ORDERS_TABLE_CONFIG;
  readonly orders$ = this.facade.orders$;
  readonly isLoading$ = this.facade.isLoading$;
  readonly favoriteIds$ = this.facade.favoriteIds$;

  constructor(
    private readonly facade: OrdersStateFacade,
  ) {
  }

  onAddToFavorite(id: number): void {
    this.facade.addToFavorite(id);
  }

  onRemoveFromFavorite(id: number): void {
    this.facade.removeFromFavorite(id);
  }

  onFetchOrders(): void {
    this.facade.fetchOrders('79fb05cb');
  }
}
