import {Patient} from "./patient.model";

export interface TestLabPatient extends Patient{
  calculatedAge: number | string;
}