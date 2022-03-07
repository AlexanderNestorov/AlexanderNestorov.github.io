import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deal} from "../../models/deal/Deal";

const API_URL = environment.baseUrl + 'deal/';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) { }

  getAllDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>(API_URL + 'all');
  }

  deleteDeal(dealId: number): Observable<void> {
    return this.http.delete<void>(API_URL + `delete/${dealId}`, httpOptions);
  }
}
