import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { Co2Component } from './components/co2/co2.component';
import { No2Component } from './components/no2/no2.component';
import { ArcticComponent } from './components/arctic/arctic.component';
import { MethaneComponent } from './components/methane/methane.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Four0fourComponent } from './components/four0four/four0four.component';
import { GoBackBtnComponent } from './components/go-back-btn/go-back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    Co2Component,
    No2Component,
    ArcticComponent,
    MethaneComponent,
    HomepageComponent,
    Four0fourComponent,
    GoBackBtnComponent,
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
