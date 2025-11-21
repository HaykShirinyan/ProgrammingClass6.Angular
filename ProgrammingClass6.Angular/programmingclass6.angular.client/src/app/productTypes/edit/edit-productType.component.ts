import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductType } from "../../shared/models/productType";
import { ProductTypeService } from "../../shared/services/productType.service";

@Component({
  templateUrl: './edit-productType.component.html',
  standalone: false
})
export class EditProductTypeComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public productType: ProductType = {};

  constructor(
    productTypeService: ProductTypeService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    this._productTypeService = productTypeService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._productTypeService.get(parseInt(id))
      .subscribe(pt => {
        this.productType = pt;
      });
  }

  public updateProductType(typeForm: NgForm): void {
    if (typeForm.valid) {
      this._productTypeService.update(this.productType)
        .subscribe(() => {
          this._router.navigate(['/product-types']);
        });
    }
  }
}
