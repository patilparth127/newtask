import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';


const masterRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(masterRoutes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
