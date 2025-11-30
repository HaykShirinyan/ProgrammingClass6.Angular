import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitOfMeasure } from '../models/unitOfMeasure';

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasureService {
  private readonly api = 'https://127.0.0.1:50190/api/unit-of-measures';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<UnitOfMeasure[]> {
    return this.http.get<UnitOfMeasure[]>(this.api);
  }

  public create(unit: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this.http.post<UnitOfMeasure>(this.api, unit);
  }

  public get(id: number): Observable<UnitOfMeasure> {
    return this.http.get<UnitOfMeasure>(`${this.api}/${id}`);
  }

  public update(unit: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this.http.put<UnitOfMeasure>(`${this.api}/${unit.id}`, unit);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
