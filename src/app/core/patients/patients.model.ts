import {Dictionary, EntityState} from "@ngrx/entity";

import {Patient} from "../../shared/models/patient.model";
import {TestLabPatient} from "../../shared/models/test-lab-patient.model";
import {DictionaryNum} from "@ngrx/entity/src/models";

export interface PatientsResponse {
  count: number;
  patient: Patient[];
}

export interface PatientsState extends EntityState<TestLabPatient> {
  isLoading: boolean;
  error: string;
  favoriteIds: DictionaryNum<boolean>;
}