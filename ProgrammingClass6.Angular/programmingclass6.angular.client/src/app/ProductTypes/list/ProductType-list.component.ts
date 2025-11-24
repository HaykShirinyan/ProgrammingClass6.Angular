import { Component, OnInit } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";
import { ProductTypeService } from "../../shared/services/productType.service";


@Component({
    templateUrl: './ProductType-list.component.html',
  standalone: false
  })
export class ProductTypeListComponent implements OnInit{

  private readonly _productTypeService: ProductTypeService
  public productTypes: ProductTypes[] = [];
  public isLoading: boolean = false;

  constructor(productTypeService: ProductTypeService) {
    this._productTypeService = productTypeService;
  }
  public ngOnInit(): void {
    this.isLoading = true;
    this._productTypeService.getAll()
      .subscribe(productTypesFromApi => {
        this.productTypes = productTypesFromApi;
        this.isLoading = false;
      });
  }
}
