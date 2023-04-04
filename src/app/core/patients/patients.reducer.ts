import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter} from "@ngrx/entity";

import {TestLabPatient} from "../../shared/models/test-lab-patient.model";

import {PatientsState} from "./patients.model";
import {patientActions} from "./patients.actions";


const defaultState = {
  isLoading: false,
  error: '',
  favoriteIds: {},
};
export const adapter = createEntityAdapter<TestLabPatient>({
  selectId: (patient: TestLabPatient) => patient.code
});
const initialState: PatientsState = adapter.getInitialState(defaultState);

const reducer = createReducer(
  initialState,
  on(
    patientActions.fetch, (state) => ({...state, isLoading: true})
  ),
  on(
    patientActions.fetchError, (state, {error}) => ({...state, isLoading: false, error})
  ),
  on(
    patientActions.fetchSuccess, (state, {patients}) => ({...adapter.addMany(patients, state), isLoading: false})
  ),
  on(
    patientActions.addToFavorite, (state, {id}) => ({...state, favoriteIds: {...state.favoriteIds, [id]: true}})
  ),
  on(
    patientActions.removeFromFavorite, (state, {id}) => {
      const {[id]: value, ...favoriteIds} = state.favoriteIds;
      return {
        ...state,
        favoriteIds,
      }
    }
  ),
);

export function patientsReducer(
  state: PatientsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
