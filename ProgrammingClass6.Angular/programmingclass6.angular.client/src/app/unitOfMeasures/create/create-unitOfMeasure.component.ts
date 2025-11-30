import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnitOfMeasure } from '../../shared/models/unitOfMeasure';
import { UnitOfMeasureService } from '../../shared/services/unitOfMeasure.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-unitOfMeasure.component.html',
  standalone: false
})
export class CreateUnitOfMeasureComponent {

  public unitOfMeasure: UnitOfMeasure = {
    name: '',
    symbol: ''
  };

  constructor(
    private readonly unitOfMeasureService: UnitOfMeasureService,
    private readonly router: Router
  ) { }

  public createUnitOfMeasure(unitOfMeasureForm: NgForm): void {
    if (unitOfMeasureForm.valid) {

      const body = {
        name: this.unitOfMeasure.name,
        symbol: this.unitOfMeasure.symbol
      };

      this.unitOfMeasureService.create(body)
        .subscribe(() => {
          this.router.navigate(['/unitOfMeasures']);
        });
    }
  }
}
