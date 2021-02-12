import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { Car } from './cars-interface';
import { BrandPipe } from './../brand.pipe';
import * as _ from 'lodash';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
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

  constructor(private callMyCars: CarsService,private location: Location, private modalService:  NgbModal) {}

  closeResult: string;
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
        if(this.brands.indexOf(item.brand) == -1){
          this.brands.push(item.brand)
        }
        
        if(this.doors.indexOf(item.doors) == -1) {
          this.doors.push(item.doors)
        }

        if(this.typePower.indexOf(item.typePower)==-1) {
          this.typePower.push(item.typePower)
        }
        
      })

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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
