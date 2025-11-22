import { Component, OnInit } from "@angular/core";
import { ProductUnitsOfMesure } from "../../shared/models/unit";
import { UnitsOfMesureService } from "../../shared/services/units.service";

@Component({
	templateUrl: "./unts-list.component.html",
	standalone: false
})

export class UnitOfMesuresComponent implements OnInit {
  private _units : UnitsOfMesureService;
  public units?: ProductUnitsOfMesure[];

  constructor(unitsService: UnitsOfMesureService) { 
    this._units = unitsService;
  }

  public ngOnInit(): void {
    this._units.getAll()
      .subscribe(units => {
        this.units = units;
      })
  }
}