import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {PatientsResponse} from "./patients.model";

@Injectable({
  providedIn: 'root',
})
export class PatientsApiService {
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public fetchAll(uid: string): Observable<PatientsResponse> {
    const url = `https://api.mocki.io/v2/${uid}`;

    return this.httpClient.get<PatientsResponse>(url);
  }
}
