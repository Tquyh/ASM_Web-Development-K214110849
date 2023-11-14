import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { CatalogEx89Component } from './catalog-ex89/catalog-ex89.component';
import { ServiceProductHttpComponent } from './service-product-http-ex90/service-product-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProductImageEventComponent,
    CatalogEx89Component,
    ServiceProductHttpComponent,
    ServiceProductHttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export interface IProduct {}
