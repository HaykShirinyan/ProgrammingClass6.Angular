import { Component } from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-unit-of-measure.component.html',
  standalone: false
})

export class CreateUnitOfMeasureComponent
{
  private readonly _unitOfMeasureService: UnitOfMeasureService;

  private readonly _router: Router

  public unitOfMeasure: UnitOfMeasure = {};

  public isLoading: boolean = false;  

  constructor(unitOfMeasureService: UnitOfMeasureService, router: Router)
  {
    this._unitOfMeasureService = unitOfMeasureService;
    this._router = router;
  }

  public CreateUnitOfMeasure(unitForm: NgForm): void
  {
    if (unitForm.valid)
    {
      this.isLoading = true;

      this._unitOfMeasureService.create(this.unitOfMeasure).subscribe(() => {
        this._router.navigate(['./unit-of-measures']);
        this.isLoading = false;
      });
    }
    
  }
}
