import { Component, OnInit } from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: './unitOfMeasure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit {
  private _http!: HttpClient;

  public unitOfMeasures: UnitOfMeasure[] = [];

  cunstructor(http: HttpClient) {
    this._http = http;
  }
  public ngOnInit(): void {
    this._http.get<UnitOfMeasure[]>('/api/unitOfMeasures')
      .subscribe(unitOfMeasuresFromApi => {
        this.unitOfMeasures = unitOfMeasuresFromApi;

      });
  }
}
