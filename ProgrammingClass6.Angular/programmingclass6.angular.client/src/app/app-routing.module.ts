import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { ProductTypeComponent } from './producttypes/list/producttype-list.component';
import { UnitOfMesuresComponent } from './units/list/unts-list.component';
import { CreateProductTypeComponent } from './producttypes/create/producttype-create.component';
import { EditProductTypeComponent } from './producttypes/edit/producttype-edit.component';
import { CreateUnitofMeasureComponent } from "./units/create/units-create.component";
import { EditUnitsOfMeasure } from "./units/edit/units-edit.component"

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
    path: 'productstype',
    component: ProductTypeComponent
  },
  {
    path: 'unitsofmesure',
    component: UnitOfMesuresComponent
  },
  {
    path: 'productstype/create',
    component: CreateProductTypeComponent
  },
  {
    path: 'productstype/edit/:id',
    component: EditProductTypeComponent
  },
  {
    path: 'unitsofmesure/create',
    component: CreateUnitofMeasureComponent
  },
  {
    path : 'unitsofmesure/edit/:id',
    component: EditUnitsOfMeasure
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
