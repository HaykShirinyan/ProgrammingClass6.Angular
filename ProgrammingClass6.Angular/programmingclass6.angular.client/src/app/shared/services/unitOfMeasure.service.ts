import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UnitOfMeasure } from "../models/unitOfMeasure";

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasureService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Observable<UnitOfMeasure[]> {
    return this._http.get<UnitOfMeasure[]>('api/unitOfMeasures');
  }

  public create(unit: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this._http.post<UnitOfMeasure>('api/unitOfMeasures', unit);
  }

  public get(id: number): Observable<UnitOfMeasure> {
    return this._http.get<UnitOfMeasure>('api/unitOfMeasures/' + id);
  }

  public update(unit: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this._http.put<UnitOfMeasure>('api/unitOfMeasures/' + unit.id, unit);
  }
}
