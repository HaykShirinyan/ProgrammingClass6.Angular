import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductType } from "../models/productType";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService
{
  private readonly _http: HttpClient;

  constructor(http: HttpClient)
  {
    this._http = http;
  }

  public getAll(): Observable<ProductType[]>
  {
    return this._http.get<ProductType[]>('api/product-types');
  }

  public create(productType: ProductType): Observable<ProductType>
  {
    return this._http.post<ProductType>('api/product-types', productType);
  }

  public get(id: number): Observable<ProductType>
  {
    return this._http.get<ProductType>('api/product-types/' + id);
  }

  public update(productType: ProductType): Observable<ProductType>
  {
    return this._http.put<ProductType>('api/product-types/' + productType.id, productType);
  }
}
