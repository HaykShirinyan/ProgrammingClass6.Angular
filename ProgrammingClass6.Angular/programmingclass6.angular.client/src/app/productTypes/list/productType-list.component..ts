import { Component, OnInit } from "@angular/core";
import { ProductType } from "../../shared/models/productType";
import { ProductTypeService } from "../../shared/services/productType.service";

@Component({
  templateUrl: './productType-list.component.html',
  standalone: false
})
export class ProductTypeListComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;

  public productTypes: ProductType[] = [];
  public isLoading: boolean = false;

  constructor(productTypeService: ProductTypeService) {
    this._productTypeService = productTypeService;
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this._productTypeService.getAll()
      .subscribe((productTypesFromApi: ProductType[]) => {
        this.productTypes = productTypesFromApi;
        this.isLoading = false; 
      });
  }
}
