import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductUnitsOfMesure } from "../models/unit";

@Injectable({
	providedIn: 'root'
})

export class UnitsOfMesureService{
	private readonly _http: HttpClient;

	constructor(http: HttpClient){
		this._http = http;
	}

	public getAll(): Observable<ProductUnitsOfMesure[]>{
		return this._http.get<ProductUnitsOfMesure[]>('api/unitofmeasures');
	}

	public create(unit: ProductUnitsOfMesure): Observable<ProductUnitsOfMesure> {
    return this._http.post<ProductUnitsOfMesure>('api/unitOfMeasures', unit);
  }

  	public get(id: number): Observable<ProductUnitsOfMesure> {
    	return this._http.get<ProductUnitsOfMesure>('api/unitOfMeasures/' + id);
  	}

  	public update(unit: ProductUnitsOfMesure): Observable<ProductUnitsOfMesure> {
    	return this._http.put<ProductUnitsOfMesure>('api/unitOfMeasures/' + unit.id, unit);
  	}
}
