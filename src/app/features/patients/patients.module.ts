import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

import {SharedModule} from "../../shared/shared.module";
import {PatientsComponent} from "./patients/patients.component";
import {PatientsStateFacade} from "../../core/patients/patients.facade";

import {PatientsRoutingModule} from "./patients-routing.module";

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, SharedModule, PatientsRoutingModule, MatTableModule],
  providers: [
    PatientsStateFacade,
  ]
})
export class PatientsModule {
}
