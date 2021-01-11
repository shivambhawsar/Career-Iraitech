import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path: '', component: SeriesComponent},
  {path: 'phone', component: PhoneFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
