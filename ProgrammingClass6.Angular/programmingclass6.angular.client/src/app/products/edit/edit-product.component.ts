import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";

@Component({
  templateUrl: './edit-product.component.html',
  standalone: false
})
export class EditProductComponent implements OnInit {
  private readonly _productService: ProductService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _manufacturerService: ManufacturerService;

  public product: Product = {};
  public manufacturers: Manufacturer[] = [];

  constructor(
    productService: ProductService,
    activatedRoute: ActivatedRoute,
    router: Router,
    manufacturerService: ManufacturerService
  ) {
    this._productService = productService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._productService.get(parseInt(id))
      .subscribe(product => {
        this.product = product;
      });

    this._manufacturerService.getAll()
      .subscribe(manufacters => {
        this.manufacturers = manufacters;
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

  public updateProduct(productForm: NgForm): void {
    if (productForm.valid) {
      this._productService.update(this.product)
        .subscribe(() => {
          this._router.navigate(['/products']);
        })
    }
  }
}
