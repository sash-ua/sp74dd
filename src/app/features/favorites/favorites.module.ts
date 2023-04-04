import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FavoritesComponent} from "./favorites/favorites.component";
import {SharedModule} from "../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {FavoritesRoutingModule} from "./favorites-routing.module";
import {PatientsStateFacade} from "../../core/patients/patients.facade";
import {OrdersStateFacade} from "../../core/orders/orders.facade";

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [CommonModule, FavoritesRoutingModule, SharedModule, MatTableModule],
  providers: [
    PatientsStateFacade,
    OrdersStateFacade
  ]
})
export class FavoritesModule {
}
