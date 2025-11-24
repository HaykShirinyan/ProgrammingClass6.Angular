import { Component, OnInit } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  templateUrl: './edit-producttype.component.html',
  standalone: false
})
export class EditProductTypeComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public isLoading: boolean = false;
  public productType: ProductTypes = {};

  constructor(
    productTypeService: ProductTypeService,
    activatedRoute: ActivatedRoute,
    router: Router)
  {
    this._productTypeService = productTypeService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const Id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._productTypeService.get(parseInt(Id))
      .subscribe(productType => {
        this.productType = productType;
      });
  }

  public updateProductType(productForm: NgForm): void {
    if (productForm.valid) {
      this.isLoading = true;
      this._productTypeService.update(this.productType)
        .subscribe(() => {
          this._router.navigate(['/product-types']);
        })
        .add(() => this.isLoading = false);
    }
  }
 }
