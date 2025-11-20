import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductTypes } from '../models/ProductType';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private readonly _httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
  public getAll(): Observable<ProductTypes[]> {
    return this._httpClient.get<ProductTypes[]>('api/product-types');
  }
  public create(productType: ProductTypes): Observable<ProductTypes> {
    return this._httpClient.post<ProductTypes>('api/product-types', productType);
  }

  public get(id: number): Observable<ProductTypes> {
    return this._httpClient.get<ProductTypes>(`api/product-types/` + id);
  }
  public update(productType: ProductTypes): Observable<void> {
    return this._httpClient.put<void>(`api/product-types/` + productType.id, productType);
  }
}
