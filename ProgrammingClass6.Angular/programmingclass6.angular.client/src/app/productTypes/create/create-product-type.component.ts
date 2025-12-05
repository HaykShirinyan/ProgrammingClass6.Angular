
import { Component } from "@angular/core";
import { ProductType } from "../../shared/models/productType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-product-type.component.html',
  standalone: false
})

export class CreateProductTypeComponent
{
  private readonly _productTypeService: ProductTypeService;

  private readonly _router: Router;

  public productType: ProductType = {};

  public isLoading: boolean = false;

  constructor(productTypeService: ProductTypeService, router: Router)
  {
    this._productTypeService = productTypeService;
    this._router = router;
  }

  public CreateProductType(productTypeForm: NgForm): void
  {
    this.isLoading = true;

    if (productTypeForm.valid)
    {
      this._productTypeService.create(this.productType).subscribe(() => {
        this._router.navigate(['./product-types']);
        this.isLoading = false;
      });
    }    
  }
}
