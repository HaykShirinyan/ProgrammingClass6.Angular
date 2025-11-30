import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { LoadingIdicatorComponent } from './shared/comppnents/loading-indicator/loading-indicator.component';

import { ProductTypeListComponent } from './productTypes/list/productType-list.component.';
import { CreateProductTypeComponent } from './productTypes/create/create-productType.component';
import { EditProductTypeComponent } from './productTypes/edit/edit-productType.component';


import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unitOfMeasure-list.component';
import { CreateUnitOfMeasureComponent } from './unitOfMeasures/create/create-unitOfMeasure.component';
import { EditUnitOfMeasureComponent } from './unitOfMeasures/edit/edit-unitOfMeasure.component';
import { BackButtonComponent } from './shared/comppnents/back-botton/back-button.component';


@NgModule({
  declarations: [
    AppComponent,

    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,

    ProductTypeListComponent,
    CreateProductTypeComponent,
    EditProductTypeComponent,

    UnitOfMeasureListComponent,
    CreateUnitOfMeasureComponent,
    EditUnitOfMeasureComponent,

    LoadingIdicatorComponent,

    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
