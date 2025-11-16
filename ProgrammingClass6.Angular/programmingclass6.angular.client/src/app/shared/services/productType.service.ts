import { HttpClient } from "@angular/common/http";
import { ProductType } from "../models/productType";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ProductTypeService {
  private readonly _http: HttpClient;

    constructor(http: HttpClient) {
      this._http = http;
    }

  public getAll(): Observable<ProductType[]> {
    return this._http.get<ProductType[]>('/api/productTypes');
    }
}
