import {Component, ChangeDetectionStrategy} from "@angular/core";

import {PatientsStateFacade} from "../../../core/patients/patients.facade";
import {PATIENTS_TABLE_CONFIG} from "../constants/patients-table-config";
import {TableColumn} from "../../../shared/models/table-column.model";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
  readonly tableConfig: TableColumn[] = PATIENTS_TABLE_CONFIG;
  readonly patients$ = this.facade.patients$;
  readonly isLoading$ = this.facade.isLoading$;
  readonly favoriteIds$ = this.facade.favoriteIds$;

  constructor(
    private readonly facade: PatientsStateFacade,
  ) {
  }

  onAddToFavorite(id: number): void {
    this.facade.addToFavorite(id);
  }

  onRemoveFromFavorite(id: number): void {
    this.facade.removeFromFavorite(id);
  }

  onFetchPatients(): void {
    this.facade.fetchPatients('51597ef3');
  }
}
