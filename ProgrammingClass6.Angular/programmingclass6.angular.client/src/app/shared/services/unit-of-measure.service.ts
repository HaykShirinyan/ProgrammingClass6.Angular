
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UnitOfMeasures } from '../models/unit_ot_measure';


@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasureService {
  private readonly _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

   public getAll(): Observable<UnitOfMeasures[]> {
    return this._httpClient.get<UnitOfMeasures[]>('api/unit-of-measures');
  }
}
