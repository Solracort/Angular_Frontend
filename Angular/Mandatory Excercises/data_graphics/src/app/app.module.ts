import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstChartComponent } from './components/first-chart/first-chart.component';
import { SecondChartComponent } from './components/second-chart/second-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FirstChartComponent,
    SecondChartComponent
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
