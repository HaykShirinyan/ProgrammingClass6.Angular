import { Component } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";


@Component({
  templateUrl: './create-producttype.component.html',
  standalone: false
})

export class CreateProductTypeComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;
  private readonly _router: Router;
  public productType: ProductTypes = {};
  public isLoading: boolean = false;
  private readonly _manufacturerService: ManufacturerService;
  public manufacturers: Manufacturer[] = [];

  constructor(productTypeService: ProductTypeService,
    router: Router,
    manufacturerService: ManufacturerService) {
    this._productTypeService = productTypeService;
    this._router = router;
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    this._manufacturerService.getAll()
    .subscribe(manufacturers => {
      this.manufacturers = manufacturers;
    });
  }

  public manufacturerChanged(manufacturerId: number): void {
    if (manufacturerId) {
      this.productType.manufacturer = { id: manufacturerId };
    } else {
      this.productType.manufacturer = undefined;
    }
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
