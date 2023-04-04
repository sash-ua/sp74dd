import {Component, ChangeDetectionStrategy} from '@angular/core';

import {TableColumn} from "../../../shared/models/table-column.model";
import {PATIENTS_TABLE_CONFIG} from "../../patients/constants/patients-table-config";
import {PatientsStateFacade} from "../../../core/patients/patients.facade";
import {FormControl} from "@angular/forms";
import {debounceTime, map, startWith, switchMap} from "rxjs/operators";
import {TestLabPatient} from "../../../shared/models/test-lab-patient.model";
import {Observable} from "rxjs";
import {OrdersStateFacade} from "../../../core/orders/orders.facade";
import {Order} from "../../../shared/models/order.model";
import {ORDERS_TABLE_CONFIG} from "../../orders/constants/orders-table-config";

const DEFAULT_VALUE = '';
const DELAY = 300;

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  readonly patientsTableConfig: TableColumn[] = PATIENTS_TABLE_CONFIG;
  readonly ordersTableConfig: TableColumn[] = ORDERS_TABLE_CONFIG;

  readonly patientsFavorites$ = this.patientsStateFacade.favorites$;
  readonly patientsSearchFormControl = new FormControl(DEFAULT_VALUE);
  readonly patientsFilteredFavorites$: Observable<TestLabPatient[]> = this.patientsSearchFormControl.valueChanges.pipe(
    startWith(DEFAULT_VALUE),
    debounceTime(DELAY),
    switchMap((query) => this.patientsFavorites$.pipe(
      map(favorites => query ? favorites.filter(({firstName}) => firstName.toLocaleLowerCase().includes(query)) : favorites))
    ));
  readonly patientsFavoriteIds$ = this.patientsStateFacade.favoriteIds$;

  readonly ordersFavorites$ = this.ordersStateFacade.favorites$;
  readonly ordersSearchFormControl = new FormControl(DEFAULT_VALUE);
  readonly ordersFilteredFavorites$: Observable<Order[]> = this.ordersSearchFormControl.valueChanges.pipe(
    startWith(DEFAULT_VALUE),
    debounceTime(DELAY),
    switchMap((query) => this.ordersFavorites$.pipe(
      map(favorites => query ? favorites.filter(({orderName}) => orderName.toLocaleLowerCase().includes(query)) : favorites))
    ));
  readonly ordersFavoriteIds$ = this.ordersStateFacade.favoriteIds$;

  constructor(
    private readonly patientsStateFacade: PatientsStateFacade,
    private readonly ordersStateFacade: OrdersStateFacade,
  ) {
  }

  onRemovePatientsFromFavorite(id: number): void {
    this.patientsStateFacade.removeFromFavorite(id);
  }

  onRemoveOrdersFromFavorite(id: number): void {
    this.ordersStateFacade.removeFromFavorite(id);
  }
}
