import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './ProductTypes/list/ProductType-list.component';
import { UnitOfMeasureListComponent } from './unit_of_measures/list/unit_of_measure-list.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit/edit-product.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { CreateProductTypeComponent } from './ProductTypes/create/create-producttype.component';
import { EditProductTypeComponent } from './ProductTypes/edit/edit-producttype.component';
import { CreateUnitOfMeasureComponent } from './unit_of_measures/create/create-unitofmeasure.component';
import { EditUnitOfMeasureComponent } from './unit_of_measures/edit/edit-unitofmeasure.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductTypeListComponent,
    UnitOfMeasureListComponent,
    CreateProductTypeComponent,
    EditProductTypeComponent,
    CreateUnitOfMeasureComponent,
    EditUnitOfMeasureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
