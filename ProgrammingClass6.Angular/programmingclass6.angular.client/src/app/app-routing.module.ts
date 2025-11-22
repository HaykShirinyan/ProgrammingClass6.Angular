import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./products/create/create-product.component";
import { EditProductComponent } from "./products/edit/edit-product.component";
import { ProductListComponent } from "./products/list/product-list.component";
import { ProductTypeListComponent } from "./productTypes/list/productType-list.component.";
import { UnitOfMeasureListComponent } from "./unitOfMeasures/list/unitOfMeasure-list.component";
import { EditUnitOfMeasureComponent } from "./unitOfMeasures/edit/edit-unitOfMeasure.component";
import { CreateUnitOfMeasureComponent } from "./unitOfMeasures/create/create-unitOfMeasure.component";
import { EditProductTypeComponent } from "./productTypes/edit/edit-productType.component";
import { CreateProductTypeComponent } from "./productTypes/create/create-productType.component";

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
    path: 'productTypes',
    component: ProductTypeListComponent
  },
  {
    path: 'productTypes/create',
    component: CreateProductTypeComponent
  },
  {
    path: 'productTypes/edit/:id',
    component: EditProductTypeComponent
  },

  {
    path: 'unitOfMeasures',
    component: UnitOfMeasureListComponent
  },
  {
    path: 'unitOfMeasures/create',
    component: CreateUnitOfMeasureComponent
  },
  {
    path: 'unitOfMeasures/edit/:id',
    component: EditUnitOfMeasureComponent
  },

  { path: '', redirectTo: 'products', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
