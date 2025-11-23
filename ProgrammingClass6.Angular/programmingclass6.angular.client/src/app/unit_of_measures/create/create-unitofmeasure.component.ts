import { Component } from "@angular/core";
import { UnitOfMeasures } from "../../shared/models/unit_of_measure";
import { UnitOfMeasureService } from "../../shared/services/unit-of-measure.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";



@Component({
  templateUrl: './create-unitofmeasure.component.html',
  standalone: false

})
export class CreateUnitOfMeasureComponent {
  private readonly _unitOfMeasureService: UnitOfMeasureService;
  private readonly _router: Router;

  public unitOfMeasure: UnitOfMeasures = {};

  constructor( _unitOfMeasureService: UnitOfMeasureService, router: Router) {
    this._unitOfMeasureService = _unitOfMeasureService;
    this._router = router;
  }

  public createUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {
       this._unitOfMeasureService.create(this.unitOfMeasure)
         .subscribe(() => {
           this._router.navigate(['/unit_of_measures']);
    })
   }
  }
   
}



