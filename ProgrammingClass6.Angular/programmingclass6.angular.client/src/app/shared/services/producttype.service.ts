import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductTypes } from "../models/productTypes"

@Injectable({
	providedIn: 'root'
})

export class ProductTypeService{
	private readonly _http: HttpClient;

	constructor(http: HttpClient){
		this._http = http;
	}

	public getAll(): Observable<ProductTypes[]>{
		return this._http.get<ProductTypes[]>('api/ProductTypes');
	}

	public create(productType: ProductTypes): Observable<ProductTypes> {
    	return this._http.post<ProductTypes>('api/productTypes', productType);
  	}

  	public get(id: number): Observable<ProductTypes> {
    	return this._http.get<ProductTypes>('api/productTypes/' + id);
  	}	

  	public update(productType: ProductTypes): Observable<ProductTypes> {
    	return this._http.put<ProductTypes>('api/productTypes/' + productType.id, productType);
  	}
}