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
    path: 'products/create',
    component: ProductListComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductListComponent
  },

  {
    path: 'productTypes',
    component: ProductTypeListComponent
  },
  {
    path: 'productTypes/create',
    component: ProductTypeListComponent
  },
  {
    path: 'productTypes/edit/:id',
    component: ProductTypeListComponent 
  },

  {
    path: 'unitOfMeasures',
    component: UnitOfMeasureListComponent
  },
  {
    path: 'unitOfMeasures/create',
    component: UnitOfMeasureListComponent
  },
  {
    path: 'unitOfMeasures/edit/:id',
    component: UnitOfMeasureListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
