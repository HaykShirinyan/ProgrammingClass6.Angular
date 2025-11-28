import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductType } from "../../shared/models/productType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './edit-product-type.component.html',
  standalone: false
})
export class EditProductTypeComponent implements OnInit
{
  private readonly _productTypeService: ProductTypeService;

  private readonly _activatedRoute: ActivatedRoute;

  private readonly _router: Router;

  public productType: ProductType = {};

  constructor(productTypeService: ProductTypeService,
    activatedRoute: ActivatedRoute,
    router: Router)
  {
    this._productTypeService = productTypeService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._productTypeService.get(parseInt(id))
      .subscribe(productType => {
        this.productType = productType;
      });
  }

  public UpdateProductType(productTypeForm: NgForm): void
  {
    this._productTypeService.update(this.productType)
      .subscribe(() => {
        this._router.navigate(['productTypes']);
      })
  }
}
