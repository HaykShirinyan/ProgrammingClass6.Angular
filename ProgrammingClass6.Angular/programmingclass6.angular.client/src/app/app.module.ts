import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { UnitOfMeasureListComponent } from './unitOfMeasures/list/unitOfMeasure-list.component';
import { ProductTypeListComponent } from './productTypes/list/producttype-list.component';

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
