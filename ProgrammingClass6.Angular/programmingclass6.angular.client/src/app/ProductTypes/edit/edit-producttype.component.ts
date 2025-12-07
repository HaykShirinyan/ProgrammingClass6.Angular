import { Component, OnInit } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";
import { ProductTypeService } from "../../shared/services/productType.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";



@Component({
  templateUrl: './edit-producttype.component.html',
  standalone: false
})
export class EditProductTypeComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _manufacturerService: ManufacturerService;

  public isLoading: boolean = false;
  public productType: ProductTypes = {};
  public manufacturers: Manufacturer[] = []; 

  constructor(
    productTypeService: ProductTypeService,
    activatedRoute: ActivatedRoute,
    router: Router,
    manufacturerService: ManufacturerService
  )

  {
    this._productTypeService = productTypeService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    const Id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this._productTypeService.get(parseInt(Id))
      .subscribe(productType => {
        this.productType = productType;
      });
    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
      });
  }
  public manufacturerChanged(manufacturerId: number): void {
    if (manufacturerId) {
      this.productType.manufacturer =
        this.manufacturers.find(m => m.id === manufacturerId);
    } else {
      this.productType.manufacturer = undefined;
    }
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
