import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './productTypes/list/productType-list.component.';
import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unitOfMeasure-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
 },

  {
    path: 'productTypes',
    component: ProductTypeListComponent
  },

  {
    path: 'unitOfMeasures',
    component: UnitOfMeasureListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
