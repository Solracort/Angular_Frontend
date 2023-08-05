import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CounterDisplayComponent } from './pages/components/counter-display/counter-display.component';
import { CounterService } from './services/counter.service';
import { myCounter } from './interface/mycounter.interface';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
