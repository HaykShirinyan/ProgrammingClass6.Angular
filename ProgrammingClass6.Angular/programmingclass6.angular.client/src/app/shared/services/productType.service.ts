import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../models/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private readonly api = 'https://127.0.0.1:50190/api/product-types';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.api);
  }

  public create(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.api, productType);
  }

  public get(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.api}/${id}`);
  }

  public update(productType: ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(`${this.api}/${productType.id}`, productType);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
