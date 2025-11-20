import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit/edit-product.component';
import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unitOfMeasure-list.component';
import { ProductTypeListComponent } from './productTypes/list/productType-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,   
    ProductTypeListComponent,
    UnitOfMeasureListComponent
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
