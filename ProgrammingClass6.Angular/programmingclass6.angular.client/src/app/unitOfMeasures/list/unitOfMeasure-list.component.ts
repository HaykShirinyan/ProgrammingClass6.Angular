import { HttpClient } from "@angular/common/http";
import { Component, OnInit} from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";

@Component({
  templateUrl: './unitOfMeasure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit{

  private readonly _http: HttpClient;

  public unitOfMeasures: UnitOfMeasure[] = [];

  constructor(http: HttpClient) {

    this._http = http;
  }

  public ngOnInit(): void {

    this._http.get<UnitOfMeasure[]>('api/unitOfMeasures')
      .subscribe(unitOfMeasuresFromApi => {
        this.unitOfMeasures = unitOfMeasuresFromApi;
      });
  }
}
