import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { Car } from './cars-interface';
import { BrandPipe } from './../brand.pipe';
import * as _ from 'lodash';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {

  research: string;
  carId: any;
  listCars: Car[] = [];
  
  marca: string;
  brands: any = []
  mySet: any = Array.from(new Set(this.brands));

  porte: string;
  doors: any = [];

  potenza: string;
  typePower: any = [];

  constructor(private callMyCars: CarsService,private location: Location) {}

  brandcar: BrandPipe

  ngOnInit() {
    this.getCars();
  }


  goBack(): void {
    this.location.back();
  }

  getCars(): void {
    this.callMyCars.getCars().subscribe((list) => {
      this.listCars = list;
      this.listCars.map((item) => {
        console.log(this.brands)
        console.log(item.brand)
        console.log(this.brands.indexOf(item.brand))
        if(this.brands.indexOf(item.brand) == -1) this.brands.push(item.brand)
        
      })
      this.listCars.map((item) =>this.doors.push(item.doors))
      this.listCars.map((item) => this.typePower.push(item.typePower)) 
      
    })
  }

  saveButton(): void {
    this.callMyCars.salva(this.listCars).subscribe(() => this.goBack())
  }

  delete(auto: any): void {
    var index = this.listCars.indexOf(auto);
    this.listCars.splice(index, 1)
  }

  addAuto(carId: number, carModel: string, carBrand: string, carDoors: number, carType: string): void {
    var test = {id: carId, doors: carDoors, model: carModel, brand: carBrand, typePower: carType}
    this.callMyCars.aggiungi(test).subscribe(
      prova => this.listCars.push(prova)
    )
  }
  
}
