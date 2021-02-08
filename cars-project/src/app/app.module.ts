import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database.service';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BestSellingComponent } from './best-selling/best-selling.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    BestSellingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DatabaseService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
