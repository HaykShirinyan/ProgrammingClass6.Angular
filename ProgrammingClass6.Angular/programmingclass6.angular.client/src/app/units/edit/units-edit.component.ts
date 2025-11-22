import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductUnitsOfMesure } from "../../shared/models/unit";
import { UnitsOfMesureService } from "../../shared/services/units.service";

@Component({
  templateUrl: './units-edit.component.html',
  standalone: false
})

export class EditUnitsOfMeasure implements OnInit {
  private readonly _unitsService: UnitsOfMesureService; //_unitsService
  private readonly _activeRoute: ActivatedRoute;
  private readonly _router: Router;

  public unitsOfMeasure: ProductUnitsOfMesure = {};

  constructor(
    productTypeService: UnitsOfMesureService,
    activeRoute: ActivatedRoute,
    router: Router
  ) {
    this._unitsService = productTypeService;
    this._activeRoute = activeRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activeRoute.snapshot.paramMap.get('id')!;

    this._unitsService.get(parseInt(id))
      .subscribe(pt => {
        this.unitsOfMeasure = pt;
      });
  }

  public updateMeasureUnit(typeForm: NgForm): void {
    if (typeForm.valid) {
      this._unitsService.update(this.unitsOfMeasure)
        .subscribe(() => {
          this._router.navigate(['/unitsofmesure']);
        });
    }
  }
}