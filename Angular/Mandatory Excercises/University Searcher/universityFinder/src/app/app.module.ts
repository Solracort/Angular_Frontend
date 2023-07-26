import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './component/searcher/searcher.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './component/countries/countries.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    CountriesComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
