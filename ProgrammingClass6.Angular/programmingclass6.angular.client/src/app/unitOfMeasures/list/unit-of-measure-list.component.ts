import { Component, OnInit} from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";

@Component({
  templateUrl: './unit-of-measure-list.component.html',
  standalone: false
})
export class UnitOfMeasureListComponent implements OnInit
{
  private readonly _unitOfMeasureService: UnitOfMeasureService;

  public unitOfMeasures: UnitOfMeasure[] = [];

  public isLoading: boolean = false;

  constructor(unitOfMeasureService: UnitOfMeasureService)
  {
    this._unitOfMeasureService = unitOfMeasureService;
  }

  public ngOnInit(): void
  {
    this.isLoading = true;

    this._unitOfMeasureService.getAll()
      .subscribe(unitOfMeasuresFromApi => {
        this.unitOfMeasures = unitOfMeasuresFromApi;
        this.isLoading = false;
      });
  }
}
