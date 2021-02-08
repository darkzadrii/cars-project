import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { Car } from './cars-interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {

  listCars: Car[] = [];
  selectedCar: Car;

  constructor(private callMyCars: CarsService) {}

  ngOnInit() {
    this.getCars();
  }

  onSelect(auto: Car): void {
    this.selectedCar = auto;
  }

  getCars(): void {
    this.callMyCars.getCars().subscribe((list) => {
      this.listCars = list;
    });
  }
}
