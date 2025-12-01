import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductUnitsOfMesure } from "../../shared/models/unit";
import { UnitsOfMesureService } from "../../shared/services/units.service";

@Component({
	templateUrl : './units-create.component.html',
	standalone : false
})

export class CreateUnitofMeasureComponent{
	public units : ProductUnitsOfMesure = {};

	constructor(
		private readonly _router: Router,
		private readonly _unitsService: UnitsOfMesureService
		){

	}

	public createUnitsType(): void{
		this._unitsService.create(this.units)
		.subscribe(() => {
			this._router.navigate(['/unitsofmesure']);
		})
	}
}