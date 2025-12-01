import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit/edit-product.component';

import { ProductTypeComponent } from './producttypes/list/producttype-list.component';
import { UnitOfMesuresComponent } from './units/list/unts-list.component';
import { CreateProductTypeComponent } from './producttypes/create/producttype-create.component';
import { EditProductTypeComponent } from './producttypes/edit/producttype-edit.component';
import { CreateUnitofMeasureComponent } from "./units/create/units-create.component";
import { EditUnitsOfMeasure } from "./units/edit/units-edit.component";

import { LoadingIdicatorComponent } from './shared/comppnents/loading-indicator/loading-indicator.component';
import { NavbarComponent } from './shared/comppnents/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductTypeComponent,
    UnitOfMesuresComponent,
    CreateProductTypeComponent,
    EditProductTypeComponent,
    CreateUnitofMeasureComponent,
    EditUnitsOfMeasure,
    LoadingIdicatorComponent,
    NavbarComponent
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
