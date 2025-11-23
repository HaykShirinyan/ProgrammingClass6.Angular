import { UnitOfMeasureService } from '../../shared/services/unit-of-measure.service';
import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from '../../shared/models/unit_of_measure';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './edit-unitofmeasure.component.html',
  standalone: false
})
export class EditUnitOfMeasureComponent implements OnInit{
  private readonly _unitOfMeasureService: UnitOfMeasureService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public unitOfMeasure: UnitOfMeasures = {};

  constructor(unitOfMeasureService: UnitOfMeasureService,
    activatedRoute: ActivatedRoute,
    router: Router)
  {
    this._unitOfMeasureService = unitOfMeasureService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this._unitOfMeasureService.get(parseInt(id))
        .subscribe(unitOfMeasure => {
        this.unitOfMeasure = unitOfMeasure;
      });
    }
  }
  public updateUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {
      this._unitOfMeasureService.update(this.unitOfMeasure)
        .subscribe(() => {
          this._router.navigate(['/unit_of_measures']);
        });
    }
  }
}
