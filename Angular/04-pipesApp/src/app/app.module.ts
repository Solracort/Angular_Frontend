import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
// import { MenuComponent } from './shared/components/menu/menu.component';
import { ProductsRoutingModule } from './products/products-routing.module';

import localeEsEA from '@angular/common/locales/es-EA';
import localeFrCA from '@angular/common/locales/fr-CA'

import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsEA);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-EA'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
