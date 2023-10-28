import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';
import { CityFilterPipe } from '../city-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,LocationComponent,    
    CityFilterPipe,
  ],
  imports: [
    CommonModule,MasterRoutingModule,    BrowserModule,MatSidenavModule,MatListModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,AppRoutingModule ,BrowserAnimationsModule,HttpClientModule
    ,DataTablesModule,
  ]
})
export class MasterModule { }
