import { Component, OnInit} from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";

@Component({
  templateUrl: './unitOfMeasure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit
{
  private readonly _unitOfMeasureService: UnitOfMeasureService;

  public unitOfMeasures: UnitOfMeasure[] = [];

  constructor(unitOfMeasureService: UnitOfMeasureService)
  {
    this._unitOfMeasureService = unitOfMeasureService;
  }

  public ngOnInit(): void
  {
    this._unitOfMeasureService.getAll()
      .subscribe(unitOfMeasuresFromApi => {
        this.unitOfMeasures = unitOfMeasuresFromApi;
      });
  }
}
