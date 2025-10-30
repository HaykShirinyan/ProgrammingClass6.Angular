import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './ProductTypes/list/ProductType-list.component';
import { UnitOfMeasureListComponent } from './unit_of_measures/list/unit_of_measure-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'ProductTypes',
    component: ProductTypeListComponent
  },

  {
    path: 'unit_of_measures',
    component: UnitOfMeasureListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
