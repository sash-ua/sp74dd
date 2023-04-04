import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../../shared/shared.module";

import {OrdersComponent} from "./orders/orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {OrdersStateFacade} from "../../core/orders/orders.facade";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule, MatTableModule],
  providers: [
    OrdersStateFacade
  ]
})
export class OrdersModule {
}
