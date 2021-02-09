import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { Car } from './cars-interface';
import { BrandPipe } from './../brand.pipe';
import * as _ from 'lodash'
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {

  research: string;

  listCars: Car[] = [];
  selectedCar: Car;

  marca: string;
  brands: any = []

  porte: string;
  doors: any = [];

  potenza: string;
  typePower: any = [];

  constructor(private callMyCars: CarsService) {}

  brandcar: BrandPipe

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.callMyCars.getCars().subscribe((list) => {
      this.listCars = list;
      this.listCars.map((item) =>{
        this.brands.push(item.brand)
        _.uniq(this.brands)
      })
      this.listCars.map((item) =>this.doors.push(item.doors))
      this.listCars.map((item) => this.typePower.push(item.typePower)) 
      
    })
  }

  //da chiedere
  delete(auto: Car): void {
    var index = this.listCars.indexOf(auto);
    this.listCars.splice(index, 1)
  }

  addCar(carId: number, carModel: string, carBrand: string, carDoors: number, carType: string): void {
    var test = {id: carId, doors: carDoors, model: carModel, brand: carBrand, typePower: carType}
    this.listCars.push(test)
  }

  addAuto(carId: number, carModel: string, carBrand: string, carDoors: number, carType: string): void {
    var test = {id: carId, doors: carDoors, model: carModel, brand: carBrand, typePower: carType}
    this.callMyCars.aggiungi(test).subscribe(
      test => this.listCars.push(test)
    )
  }

  
}
