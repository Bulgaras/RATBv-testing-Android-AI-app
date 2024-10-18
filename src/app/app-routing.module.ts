import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { StationListComponent } from './station-list/station-list.component';
import { BusLineComponent } from './bus-line/bus-line.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'stations', component: StationListComponent },
  { path: 'bus-line/:id', component: BusLineComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}