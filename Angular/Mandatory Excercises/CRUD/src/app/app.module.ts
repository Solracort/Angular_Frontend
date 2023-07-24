import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaintableComponent } from './components/maintable/maintable.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/material/material/material.module';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    AppComponent,
    SidebarComponent,
    MaintableComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
