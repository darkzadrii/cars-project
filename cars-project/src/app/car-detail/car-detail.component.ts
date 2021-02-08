import { Component, Input, OnInit } from '@angular/core';
import { Car } from './../cars/cars-interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarsService } from './../cars.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const ciao = +this.route.snapshot.paramMap.get('id');
    console.log(this.route)
    this.carsService.getCar(ciao).subscribe((auto) => (this.car = auto));
  }

  goBack(): void {
    this.location.back();
  }
}
