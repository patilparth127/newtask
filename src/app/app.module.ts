import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CityFilterPipe } from './city-filter.pipe';
import { LastVisitedUrlService } from './last-visited-url.service';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,MatSidenavModule,MatListModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,AppRoutingModule ,BrowserAnimationsModule,HttpClientModule
    ,DataTablesModule,

  ],
  providers: [LastVisitedUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
