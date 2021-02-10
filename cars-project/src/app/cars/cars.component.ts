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
      this.listCars = list.map((item) =>{
        this.brands.push(item.brand);//add filter
        this.doors.push(item.doors);//add filter
        this.typePower.push(item.typePower); //add filter
        return item;
      });

    })
  }

  saveButton(): void {
    this.callMyCars.salva(this.listCars).subscribe(() => this.goBack())
  }

  delete(auto: any): void {
    // TODO remove var; use let or const
    var index = this.listCars.indexOf(auto);
    this.listCars.splice(index, 1)
  }

  addAuto(carId: number, carModel: string, carBrand: string, carDoors: number, carType: string): void {
    // TODO remove var; use let or const
    var test = {id: carId, doors: carDoors, model: carModel, brand: carBrand, typePower: carType}
    this.callMyCars.aggiungi(test).subscribe(
      prova => this.listCars.push(prova) // TODO remove "prova" use another name
    )
  }
  
}
