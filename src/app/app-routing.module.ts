import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { SeriesComponent } from './series/series.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { TopRightComponent } from './top-right/top-right.component';

const routes: Routes = [
  {path: '', component: SeriesComponent},
  {path: 'phone', component: PhoneFormComponent},
  {path: 'box1', component: TopLeftComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
