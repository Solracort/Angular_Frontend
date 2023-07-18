import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintableComponent } from './components/maintable/maintable.component';

const routes: Routes = [
  { path:'' , component: MaintableComponent },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
