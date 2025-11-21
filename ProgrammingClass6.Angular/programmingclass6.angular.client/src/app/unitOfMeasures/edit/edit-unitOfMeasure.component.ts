import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";

@Component({
  templateUrl: './edit-unitOfMeasure.component.html',
  standalone: false
})
export class EditUnitOfMeasureComponent implements OnInit {
  private readonly _unitOfMeasureService: UnitOfMeasureService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public unitOfMeasure: UnitOfMeasure = {};

  constructor(
    unitOfMeasureService: UnitOfMeasureService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    this._unitOfMeasureService = unitOfMeasureService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._unitOfMeasureService.get(parseInt(id))
      .subscribe(unit => {
        this.unitOfMeasure = unit;
      });
  }

  public updateUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {
      this._unitOfMeasureService.update(this.unitOfMeasure)
        .subscribe(() => {
          this._router.navigate(['/unitOfMeasures']);
        });
    }
  }
}
