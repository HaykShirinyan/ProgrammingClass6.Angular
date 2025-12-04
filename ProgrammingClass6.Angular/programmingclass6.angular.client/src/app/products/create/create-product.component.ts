import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/manufacturer";

@Component({
  templateUrl: './create-product.component.html',
  standalone: false
})
export class CreateProductComponent implements OnInit {
  private readonly _productService: ProductService;
  private readonly _router: Router;
  private readonly _manufacturerService: ManufacturerService;

  public product: Product = {};
  public manufacturers: Manufacturer[] = [];

  constructor(
    productService: ProductService,
    router: Router,
    manufacturerService: ManufacturerService
  ) {
    this._productService = productService;
    this._router = router;
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers
      });
  }

  public manufacturerChanged(manufacturerId: number): void {
    if (manufacturerId) {
      this.product.manufacturer = {
        id: manufacturerId
      };
    } else {
      this.product.manufacturer = undefined;
    }
  }

  public createProduct(productForm: NgForm): void {
    if (productForm.valid) {
      this._productService.create(this.product).subscribe(() => {
        this._router.navigate(['/products']);
      });
    }    
  }
}
