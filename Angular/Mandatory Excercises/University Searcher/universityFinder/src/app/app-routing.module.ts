import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './component/countries/countries.component';
import { SearcherComponent } from './component/searcher/searcher.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {path:':countryName', component: LayoutComponent},
  {path:'spain', component: LayoutComponent, pathMatch:'full'},
  {path: 'united_kingdom',   component: LayoutComponent},
  {path: 'portugal', component: LayoutComponent},
  {path: '**', redirectTo:'spain'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
