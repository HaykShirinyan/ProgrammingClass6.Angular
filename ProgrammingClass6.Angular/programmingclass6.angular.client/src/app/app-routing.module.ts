import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unit-of-measure-list.component';
import { ProductTypeListComponent } from './productTypes/list/product-type-list.component';
import { CreateProductTypeComponent } from './productTypes/create/create-product-type.component';
import { CreateUnitOfMeasureComponent } from './unitOfMeasures/create/create-unit-of-measure.component';
import { EditProductTypeComponent } from './productTypes/edit/edit-product-type.component';
import { EditUnitOfMeasureComponent } from './unitOfMeasures/edit/edit-unit-of-measure.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
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
    path: 'product-types',
    component: ProductTypeListComponent
  },
  {
    path: 'product-types/create',
    component: CreateProductTypeComponent
  },
  {
    path: 'unit-of-measures',
    component: UnitOfMeasureListComponent
  },
  {
    path: 'unit-of-measures/create',
    component: CreateUnitOfMeasureComponent
  },
  {
    path: 'product-types/edit/:id',
    component: EditProductTypeComponent
  },
  {
    path: 'unit-of-measures/edit/:id',
    component: EditUnitOfMeasureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
