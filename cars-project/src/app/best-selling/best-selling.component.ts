import { Component, OnInit } from '@angular/core';
import { Car } from './../cars/cars-interface';
import { CarsService } from './../cars.service';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {

  //predisposizione array contenitore
  listaAuto: Car[] = [];

  //importiamo la possibilità di chiamare eroi tramite CarsService, facendo una injection dependencies
  constructor(private callMyCars: CarsService) { }

  ngOnInit(){
    this.getCars();
  }


  getCars(): void {
    this.callMyCars.getCars().subscribe((list) => {
      this.listaAuto = list.slice(0, 4) 
    });
  }

}
