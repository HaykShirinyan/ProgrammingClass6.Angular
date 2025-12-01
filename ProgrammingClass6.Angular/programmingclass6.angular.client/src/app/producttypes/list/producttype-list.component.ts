import { Component, OnInit } from "@angular/core";
import { ProductTypes } from "../../shared/models/productTypes";
import { ProductTypeService } from "../../shared/services/producttype.service";

@Component({
	templateUrl: "./producttype-list.component.html",
	standalone: false
})

export class ProductTypeComponent implements OnInit {
	private  _productTypeService: ProductTypeService;
	
	public producttypes?: ProductTypes[];
	public isLoading: boolean = false;

	constructor(productTypeService: ProductTypeService){
		this._productTypeService = productTypeService;
	}

	public ngOnInit(): void {
		this.isLoading = true;

		this._productTypeService.getAll()
		.subscribe(producttypes => {
			this.producttypes = producttypes;
			this.isLoading = false;
		});
	}
}