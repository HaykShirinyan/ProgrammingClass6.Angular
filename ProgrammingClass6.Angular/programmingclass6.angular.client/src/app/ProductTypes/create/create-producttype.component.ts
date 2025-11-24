import { Component } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";


@Component({
  templateUrl: './create-producttype.component.html',
  standalone: false
})

export class CreateProductTypeComponent {
  private readonly _productTypeService: ProductTypeService;
  private readonly _router: Router;
  public productType: ProductTypes = {};
  public isLoading: boolean = false;

  constructor(productTypeService: ProductTypeService, router: Router) {
    this._productTypeService = productTypeService;
    this._router = router;
  }

  public createProductType(productForm: NgForm): void {
    if (productForm.valid) {
      this.isLoading = true;
      this._productTypeService.create(this.productType)
        .subscribe(() => {
          this._router.navigate(['/product-types']);
        })
        .add(() => this.isLoading = false);
    }
  }
}
