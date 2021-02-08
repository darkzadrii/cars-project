import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/best-selling', pathMatch: 'full' },
  { path: 'best-selling', component: BestSellingComponent },
  { path: 'list', component: CarsComponent },
  { path: 'detail/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
