import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";

import {PatientsApiService} from "./patients.api.service";
import {patientActions} from "./patients.actions";
import {calculateAge} from "../../shared/helpers/calculate-age";

@Injectable()
export class PatientsEffects {
  readonly fetchAll$ = createEffect(() => this.actions$.pipe(
    ofType(patientActions.fetch),
    exhaustMap((action) => this.patientsApiService.fetchAll(action.uid).pipe(
      map(({patient}) => patientActions.fetchSuccess({
        patients: patient.map((patient) => ({
          ...patient,
          calculatedAge: calculateAge(patient.birthDate.dateTime),
        }))
      })),
      catchError((error) => of(patientActions.fetchError({error: error.message})))
    ))
  ))

  constructor(
    private actions$: Actions,
    private patientsApiService: PatientsApiService,
  ) {
  }
}
