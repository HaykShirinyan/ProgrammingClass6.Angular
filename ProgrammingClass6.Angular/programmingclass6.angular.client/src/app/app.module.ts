import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './ProductTypes/list/ProductType-list.component';
import { UnitOfMeasureListComponent } from './unit_of_measures/list/unit_of_measure-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductTypeListComponent,
    UnitOfMeasureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
