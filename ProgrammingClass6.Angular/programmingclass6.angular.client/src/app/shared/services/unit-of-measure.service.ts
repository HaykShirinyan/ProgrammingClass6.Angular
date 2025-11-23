
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UnitOfMeasures } from '../models/unit_of_measure';



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

  public create(unitOfMeasure: UnitOfMeasures): Observable<UnitOfMeasures> {
    return this._httpClient.post<UnitOfMeasures>('api/unit-of-measures', unitOfMeasure);
  }

  public get(id: number): Observable<UnitOfMeasures> {
    return this._httpClient.get<UnitOfMeasures>('api/unit-of-measures/' + id);
  }

  public update(unitOfMeasure: UnitOfMeasures): Observable<void> {
    return this._httpClient.put<void>('api/unit-of-measures/' + unitOfMeasure.id, unitOfMeasure);
    }
  }
