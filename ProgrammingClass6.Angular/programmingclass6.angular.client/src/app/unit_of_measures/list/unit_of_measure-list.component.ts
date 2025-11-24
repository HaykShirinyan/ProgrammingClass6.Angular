
import { Component, OnInit} from '@angular/core';
import { UnitOfMeasures } from '../../shared/models/unit_of_measure';
import { UnitOfMeasureService } from '../../shared/services/unit-of-measure.service';

@Component({

  templateUrl: './unit_of_measure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit{

  private readonly _unitOfMeasureService: UnitOfMeasureService;
  public unitOfMeasures: UnitOfMeasures[] = [];
  public isLoading: boolean = false;
  constructor(unitOfMeasureService: UnitOfMeasureService) {
    this._unitOfMeasureService = unitOfMeasureService;
  }
  public ngOnInit(): void {
    this.isLoading = true;
    this._unitOfMeasureService.getAll().subscribe(unitOfMeasuresFromApi => {
      this.unitOfMeasures = unitOfMeasuresFromApi;
      this.isLoading = false;
    });
  }
}

