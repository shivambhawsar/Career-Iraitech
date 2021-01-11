import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { TopRightComponent } from './top-right/top-right.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    PhoneFormComponent,
    TopLeftComponent,
    TopRightComponent,
    BottomRightComponent,
    BottomLeftComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
