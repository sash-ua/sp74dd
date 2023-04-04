import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {OrdersResponse} from "./orders.model";

@Injectable({
  providedIn: 'root',
})
export class OrdersApiService {
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public fetchAll(uid: string): Observable<OrdersResponse> {
    const url = `https://api.mocki.io/v2/${uid}`;

    return this.httpClient.get<OrdersResponse>(url);
  }
}
