import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ProductType } from "../../shared/models/productType";
import { UnitOfMeasure } from "../../shared/models/unitOfMeasure";
import { ProductTypeService } from "../../shared/services/productType.service";
import { UnitOfMeasureService } from "../../shared/services/unitOfMeasure.service";

@Component({
  templateUrl: './create-product.component.html',
  standalone: false
})
export class CreateProductComponent implements OnInit {
  private readonly _productService: ProductService;
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
    router: Router,
    manufacturerService: ManufacturerService,
    productTypeService: ProductTypeService,
    unitOfMeasureService: UnitOfMeasureService,
  ) {
    this._productService = productService;
    this._router = router;
    this._manufacturerService = manufacturerService;
    this._productTypeService = productTypeService;
    this._unitOfMeasureService = unitOfMeasureService;
  }

  public ngOnInit(): void {
    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers
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

  public createProduct(productForm: NgForm): void {
    if (productForm.valid) {
      this._productService.create(this.product).subscribe(() => {
        this._router.navigate(['/products']);
      });
    }    
  }
}
