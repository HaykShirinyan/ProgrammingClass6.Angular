import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductTypes } from "../../shared/models/productTypes";
import { ProductTypeService } from "../../shared/services/producttype.service";

@Component({
  templateUrl: './producttype-edit.component.html',
  standalone: false
})
export class EditProductTypeComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;
  private readonly _activeRoute: ActivatedRoute;
  private readonly _router: Router;

  public productType: ProductTypes = {};

  constructor(
    productTypeService: ProductTypeService,
    activeRoute: ActivatedRoute,
    router: Router
  ) {
    this._productTypeService = productTypeService;
    this._activeRoute = activeRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activeRoute.snapshot.paramMap.get('id')!;

    this._productTypeService.get(parseInt(id))
      .subscribe(pt => {
        this.productType = pt;
      });
  }

  public updateProductType(typeForm: NgForm): void {
    if (typeForm.valid) {
      this._productTypeService.update(this.productType)
        .subscribe(() => {
          this._router.navigate(['/productstype']);
        });
    }
  }
}