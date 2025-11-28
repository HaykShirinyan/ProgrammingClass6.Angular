import { Component, OnInit } from "@angular/core";
import { ProductType } from "../../shared/models/productType";
import { ProductTypeService } from "../../shared/services/productType.service";

@Component({
  templateUrl: './product-type-list.component.html',
  standalone: false
})
export class ProductTypeListComponent implements OnInit
{
  private readonly _productTypeService: ProductTypeService

  public productTypes: ProductType[] = [];

  constructor(productTypeService: ProductTypeService)
  {
    this._productTypeService = productTypeService;
  }

  public ngOnInit(): void
  {
    this._productTypeService.getAll()
      .subscribe(productTypesFromApi => {
        this.productTypes = productTypesFromApi;
      });
  }
}
