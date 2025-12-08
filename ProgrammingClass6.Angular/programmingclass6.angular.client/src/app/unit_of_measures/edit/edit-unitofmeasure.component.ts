import { UnitOfMeasureService } from '../../shared/services/unit-of-measure.service';
import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from '../../shared/models/unit_of_measure';
import { Manufacturer } from '../../shared/models/manufacturer';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManufacturerService } from '../../shared/services/manufacturer.service';

@Component({
  templateUrl: './edit-unitofmeasure.component.html',
  standalone: false
})
export class EditUnitOfMeasureComponent implements OnInit{
  private readonly _unitOfMeasureService: UnitOfMeasureService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _manufacturerService: ManufacturerService;

  public isLoading: boolean = false;
  public unitOfMeasure: UnitOfMeasures = {};
  public manufacturers: Manufacturer[] = [];

  constructor(unitOfMeasureService: UnitOfMeasureService,
    activatedRoute: ActivatedRoute,
    router: Router,
    manufacturerService: ManufacturerService
  )
  {
    this._unitOfMeasureService = unitOfMeasureService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this._unitOfMeasureService.get(parseInt(id))
        .subscribe(unitOfMeasure => {
        this.unitOfMeasure = unitOfMeasure;
        });
      this._manufacturerService.getAll()
        .subscribe(manufacturers => {
          this.manufacturers = manufacturers;
        });
    }
  }

  public manufacturerChanged(manufacturerId: number): void {
    if (manufacturerId) {
      this.unitOfMeasure.manufacturer = {
        id: manufacturerId
      };
    } else {
      this.unitOfMeasure.manufacturer = undefined;

    }
  }

  public updateUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {
      this.isLoading = true;
      this._unitOfMeasureService.update(this.unitOfMeasure)
        .subscribe(() => {
          this._router.navigate(['/unit_of_measures']);
        })
        .add(() => this.isLoading = false);
    }
  }
}
