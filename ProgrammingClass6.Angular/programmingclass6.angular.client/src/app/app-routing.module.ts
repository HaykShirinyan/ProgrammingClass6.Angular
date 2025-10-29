import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './ProductTypes/list/ProductType-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'ProductTypes',
    component: ProductTypeListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
