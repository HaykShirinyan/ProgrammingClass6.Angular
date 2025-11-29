
import { Component, OnInit } from "@angular/core";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './edit-unit-of-measure.component.html',
  standalone: false
})
export class EditUnitOfMeasureComponent implements OnInit
{
  private readonly _unitOfMeasureService: UnitOfMeasureService;

  private readonly _activatedRoute: ActivatedRoute;

  private readonly _router: Router;

  public unitOfMeasure: UnitOfMeasure = {};

  public isLoading: boolean = false;
    
  constructor(unitOfMeasureService: UnitOfMeasureService,
    activatedRoute: ActivatedRoute,
    router: Router)
  {
    this._unitOfMeasureService = unitOfMeasureService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void
  {
    this.isLoading = true;

    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._unitOfMeasureService.get(parseInt(id))
      .subscribe(unitOfMeasur => {
        this.unitOfMeasure = unitOfMeasur;
        this.isLoading = false;
      });
  }

  public UpdateUnitOfMeasure(unitOfMeasureForm: NgForm): void
  {
    if (unitOfMeasureForm.valid)
    {
      this._unitOfMeasureService.update(this.unitOfMeasure)
        .subscribe(() => {
          this._router.navigate(['unitOfMeasures']);
        })
    }
  }
}
