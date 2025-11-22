import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductTypes } from "../../shared/models/productTypes";
import { ProductTypeService } from "../../shared/services/producttype.service";

@Component({
	templateUrl : './producttype-create.component.html',
	standalone : false
})

export class CreateProductTypeComponent{
	public productType : ProductTypes = {};

	constructor(
		private readonly _router: Router,
		private readonly _productTypeService: ProductTypeService
		){

	}

	public createProductType(): void{
		this._productTypeService.create(this.productType)
		.subscribe(() => {
			this._router.navigate(['/productstype']);
		})
	}
}