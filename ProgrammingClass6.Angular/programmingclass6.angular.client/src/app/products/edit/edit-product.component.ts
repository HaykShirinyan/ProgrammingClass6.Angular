import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { ProductType } from "../../shared/models/productType";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { ProductTypeService } from "../../shared/services/productType.service";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";

@Component({
  templateUrl: './edit-product.component.html',
  standalone: false
})
export class EditProductComponent implements OnInit {
  private readonly _productService: ProductService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _manufacturerService: ManufacturerService;
  private readonly _productTypeService: ProductTypeService;
  private readonly _unitOfMeasureService: UnitOfMeasureService;

  public product: Product = {};
  public manufacturers: Manufacturer[] = [];
  public productTypes: ProductType[] = [];
  public unitOfMeasures: UnitOfMeasure[] = [];

  constructor(
    productService: ProductService,
    activatedRoute: ActivatedRoute,
    router: Router,
    manufacturerService: ManufacturerService,
    productTypeService: ProductTypeService,
    unitOfMeasureService: UnitOfMeasureService,
  ) {
    this._productService = productService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._manufacturerService = manufacturerService;
    this._productTypeService = productTypeService;
    this._unitOfMeasureService = unitOfMeasureService;
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

    this._productTypeService.getAll()
      .subscribe(productTypes => {
        this.productTypes = productTypes
      });

    this._unitOfMeasureService.getAll()
      .subscribe(unitOfMeasures => {
        this.unitOfMeasures = unitOfMeasures
      })
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

  public productTypeChanged(productTypeId: number): void {
    if (productTypeId) {
      this.product.productType = {
        id: productTypeId
      };
    } else {
      this.product.productType = undefined;
    }
  }

  public unitOfMeasureChanged(unitOfMeasureId: number): void {
    if (unitOfMeasureId) {
      this.product.unitOfMeasure = {
        id: unitOfMeasureId
      };
    } else {
      this.product.unitOfMeasure = undefined;
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
