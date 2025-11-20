import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './ProductTypes/list/ProductType-list.component';
import { UnitOfMeasureListComponent } from './unit_of_measures/list/unit_of_measure-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { CreateProductTypeComponent } from './ProductTypes/create/create-producttype.component';
import { EditProductTypeComponent } from './ProductTypes/edit/edit-producttype.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product-types',
    component: ProductTypeListComponent
  },
  {
    path: 'unit-of-measures',
    component: UnitOfMeasureListComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'product-types/create',
    component: CreateProductTypeComponent
  },
  {
    path: 'product-types/edit/:id',
    component: EditProductTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
