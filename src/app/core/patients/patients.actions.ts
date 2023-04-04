import {createAction, props} from '@ngrx/store';

import {PatientsAction} from "./patients.enum";

import {TestLabPatient} from "../../shared/models/test-lab-patient.model";

export const fetch = createAction(
  PatientsAction.Fetch,
  props<{ uid: string }>()
);
export const fetchSuccess = createAction(
  PatientsAction.FetchSuccess,
  props<{ patients: TestLabPatient[] }>()
);
export const fetchError = createAction(
  PatientsAction.FetchSError,
  props<{ error: string }>()
);
export const addToFavorite = createAction(
  PatientsAction.AddToFavorite,
  props<{ id: number }>()
);
export const removeFromFavorite = createAction(
  PatientsAction.RemoveFromFavorite,
  props<{ id: number }>()
);
export const patientActions = {
  fetch,
  fetchSuccess,
  fetchError,

  addToFavorite,
  removeFromFavorite,
};
