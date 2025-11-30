import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductType } from '../../shared/models/productType';
import { ProductTypeService } from '../../shared/services/productType.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-productType.component.html',
  standalone: false
})
export class CreateProductTypeComponent {

  public productType: ProductType = {
    name: '',
    description: ''
  };

  constructor(
    private readonly productTypeService: ProductTypeService,
    private readonly router: Router
  ) { }

  public createProductType(typeForm: NgForm): void {
    if (typeForm.valid) {
      const body = {
        name: this.productType.name,
        description: this.productType.description
      };

      this.productTypeService.create(body)
        .subscribe(() => {
          this.router.navigate(['/productTypes']);
        });
    }
  }
}
