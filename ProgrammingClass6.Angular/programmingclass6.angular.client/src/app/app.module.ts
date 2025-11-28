import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit/edit-product.component';
import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unit-of-measure-list.component';
import { ProductTypeListComponent } from './productTypes/list/product-type-list.component';
import { CreateProductTypeComponent } from './productTypes/create/create-product-type.component';
import { CreateUnitOfMeasureComponent } from './unitOfMeasures/create/create-unit-of-measure.component';
import { EditProductTypeComponent } from './productTypes/edit/edit-product-type.component';
import { EditUnitOfMeasureComponent } from './unitOfMeasures/edit/edit-unit-of-measure.component';



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
