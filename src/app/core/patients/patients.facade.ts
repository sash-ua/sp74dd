import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {PatientsState} from "./patients.model";
import {patientsQuery} from "./patients.selectors";
import {patientActions} from "./patients.actions";
import {TestLabPatient} from "../../shared/models/test-lab-patient.model";
import {DictionaryNum} from "@ngrx/entity/src/models";

@Injectable()
export class PatientsStateFacade {
  readonly patients$: Observable<TestLabPatient[]> = this.store.select(patientsQuery.patients);
  readonly isLoading$: Observable<boolean> = this.store.select(patientsQuery.isLoading);
  readonly favoriteIds$: Observable<DictionaryNum<boolean>> = this.store.select(patientsQuery.favoriteIds);
  readonly favorites$: Observable<TestLabPatient[]> = this.store.select(patientsQuery.favorites);

  constructor(
    private readonly store: Store<PatientsState>
  ) {
  }

  fetchPatients(uid: string): void {
    this.store.dispatch(patientActions.fetch({uid}));
  }

  addToFavorite(id: number): void {
    this.store.dispatch(patientActions.addToFavorite({id}));
  }

  removeFromFavorite(id: number): void {
    this.store.dispatch(patientActions.removeFromFavorite({id}));
  }
}
