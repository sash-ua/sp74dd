import {createFeatureSelector, createSelector} from '@ngrx/store';

import {adapter} from "./patients.reducer";
import {PatientsState} from "./patients.model";
import {TestLabPatient} from "../../shared/models/test-lab-patient.model";


const {selectAll, selectEntities} = adapter.getSelectors();
const patientsState = createFeatureSelector<PatientsState>('patients');

const patients = createSelector(patientsState, selectAll);
const entities = createSelector(patientsState, selectEntities);
const isLoading = createSelector(patientsState, (state) => state.isLoading);
const favoriteIds = createSelector(patientsState, (state) => state.favoriteIds);
const favorites = createSelector(
  entities,
  favoriteIds,
  (entities, favoriteIds): TestLabPatient[] => Object.keys(favoriteIds).map((id) => entities[id])
);

export const patientsQuery = {
  patients,
  isLoading,

  favoriteIds,
  favorites,
}
