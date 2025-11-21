import { Component } from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-unitOfMeasure.component.html',
  standalone: false
})
export class CreateUnitOfMeasureComponent {
  private readonly _unitOfMeasureService: UnitOfMeasureService;
  private readonly _router: Router;

  public unitOfMeasure: UnitOfMeasure = {};

  constructor(unitOfMeasureService: UnitOfMeasureService, router: Router) {
    this._unitOfMeasureService = unitOfMeasureService;
    this._router = router;
  }

  public createUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {
      this._unitOfMeasureService.create(this.unitOfMeasure).subscribe(() => {
        this._router.navigate(['/unitOfMeasures']);
      });
    }
  }
}
