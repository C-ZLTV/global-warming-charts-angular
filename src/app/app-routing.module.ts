import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArcticComponent } from './components/arctic/arctic.component';
import { Co2Component } from './components/co2/co2.component';
import { MethaneComponent } from './components/methane/methane.component';
import { No2Component } from './components/no2/no2.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Four0fourComponent } from './components/four0four/four0four.component';

const routes: Routes = [
  {path: 'arctic', component: ArcticComponent},
  {path: 'co2', component: Co2Component},
  {path: 'methane', component: MethaneComponent},
  {path: 'no2', component: No2Component},
  {path: 'temperature', component: TemperatureComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: '**', component: Four0fourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
