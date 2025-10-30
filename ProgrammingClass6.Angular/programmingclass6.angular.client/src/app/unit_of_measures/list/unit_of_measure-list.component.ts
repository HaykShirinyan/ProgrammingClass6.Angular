
import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UnitOfMeasures } from '../../shared/models/unit_ot_measure';

@Component({

  templateUrl: './unit_of_measure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit{

  private readonly _httpClient: HttpClient;
  public unitOfMeasures: UnitOfMeasures[] = [];
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
  public ngOnInit(): void {
    this._httpClient.get<UnitOfMeasures[]>('api/unit_of_measures')
      .subscribe(unitOfMeasures => {
        this.unitOfMeasures = unitOfMeasures;
      });
  }
}

